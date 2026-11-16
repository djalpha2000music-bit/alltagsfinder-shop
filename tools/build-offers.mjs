#!/usr/bin/env node
/* Generates the public affiliate link map from the reviewed bulk table.
   Never commit passwords, API credentials, personal tokens, or unverified links.
   No network requests, no scraping, no copied Amazon product data. */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

function parseCsv(src) {
  const rows = [];
  let row = [], value = '', quoted = false;
  src = src.replace(/^\uFEFF/, '');
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quoted) {
      if (c === '"') {
        if (src[i + 1] === '"') { value += '"'; i++; }
        else quoted = false;
      } else value += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(value); value = ''; }
    else if (c === '\n') {
      row.push(value); rows.push(row); row = []; value = '';
    } else if (c !== '\r') value += c;
  }
  if (quoted) throw new Error('Unclosed quoted CSV field');
  if (row.length || value.length) { row.push(value); rows.push(row); }
  return rows.filter(r => r.some(v => v.trim()));
}

const root = process.cwd();
const index = readFileSync(resolve(root, 'index.html'), 'utf8');
const intro = 'window.ALLTAGSFINDER_PRODUCTS = ';
const start = index.indexOf(intro);
const end = index.indexOf(';\n</script>', start);
if (start < 0 || end < 0) throw new Error('The embedded catalog could not be read');
const catalog = JSON.parse(index.slice(start + intro.length, end));
const catalogIds = new Set(catalog.map(p => p.id));
const rows = parseCsv(readFileSync(resolve(root, 'data/affiliate-offers.csv'), 'utf8'));
const wanted = ['id','produktidee','kategorie','haendler','partnerlink','geprueft','freigeben'];
const head = rows.shift() || [];
if (head.length !== wanted.length || head.some((x,i) => x.trim() !== wanted[i]))
  throw new Error('Unexpected CSV column names or order');
const seen = new Set(), live = {};
const yes = v => /^(ja|yes|true|1)$/i.test(v.trim());
for (const [i,fields] of rows.entries()) {
  if (fields.length !== wanted.length) throw new Error('Column count in row '+(i+2));
  const [id,title,category,merchant,affiliateUrl,checked,enabled] = fields.map(x => x.trim());
  if (!catalogIds.has(id) || seen.has(id)) throw new Error('Missing/unknown/duplicate ID in row '+(i+2)+': '+id);
  seen.add(id);
  const original = catalog.find(p=>p.id===id);
  if (title!==original.title || category!==original.category)
    throw new Error('Catalog title/category mismatch in row '+(i+2)+': '+id);
  if (!yes(enabled)) continue;
  if (!yes(checked) || !merchant || !affiliateUrl)
    throw new Error('A live offer must be verified and have merchant + URL: '+id);
  let u;
  try { u = new URL(affiliateUrl); } catch { throw new Error('Invalid URL for '+id); }
  if (u.protocol !== 'https:' || u.username || u.password || !u.hostname || /[\r\n]/.test(affiliateUrl))
    throw new Error('Partner link must use clean HTTPS URL: '+id);
  if (merchant.length>100 || affiliateUrl.length>2048)
    throw new Error('Merchant or URL too long: '+id);
  // Restrict Amazon-labeled offers to plausible Amazon-owned or Amazon-shortlink hosts.
  // This does not independently prove the destination product or associate tracking tag.
  if (/^amazon$/i.test(merchant)) {
    const host=u.hostname.toLowerCase();
    if (!['link.amazon','amzn.to','amazon.de','www.amazon.de','amazon.com','www.amazon.com'].includes(host))
      throw new Error('Amazon offer is not hosted by an allowed Amazon domain: '+id);
  }
  live[id] = {
    merchant, affiliateUrl, published: true,
    title: original.title, category: original.category,
    description: original.description,
    image: (typeof original.image==='string' ? original.image : ''),
    imageAlt: (typeof original.imageAlt==='string' ? original.imageAlt : '')
  };
}
if (seen.size !== catalogIds.size)
  throw new Error('The CSV must contain all '+catalogIds.size+' catalog IDs, found '+seen.size);
const generated = '/* Generated from checked affiliate offers. Never add credentials. */\n'
  + 'window.ALLTAGSFINDER_PARTNER_OFFERS = '
  + JSON.stringify(live,null,2).replace(/</g,'\\u003c') + ';\n';
writeFileSync(resolve(root,'partner-offers.js'), generated, 'utf8');
console.log('Validated '+seen.size+' product ideas; '+Object.keys(live).length+' approved live partner links.');
