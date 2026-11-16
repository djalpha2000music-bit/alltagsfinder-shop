#!/usr/bin/env node
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { Script } from 'node:vm';

const root=process.cwd();
const text=path=>readFileSync(resolve(root,path),'utf8');
const fail=x=>{throw Error('Alltagsfinder QA: '+x);};
const html=text('index.html');
const anchor='window.ALLTAGSFINDER_PRODUCTS = ';
const begin=html.indexOf(anchor),end=html.indexOf(';\n</script>',begin);
if(begin<0||end<0)fail('catalog data marker missing');
let products;
try{products=JSON.parse(html.slice(begin+anchor.length,end));}
catch(e){fail('catalog JSON invalid: '+e.message)}
if(products.length!==668)fail('expected 668 product ideas, got '+products.length);
if(new Set(products.map(p=>p.id)).size!==products.length)fail('duplicate product IDs');
if(!html.includes('<script src="partner-offers.js"></script>'))fail('active offer registry missing');
if(!html.includes('REFERENZ-/SYMBOLBILD'))fail('reference image label missing');
if(!html.includes('Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.'))fail('required Amazon disclaimer missing');
const pics=products.filter(p=>p.image);
for(const p of pics)if(!existsSync(resolve(root,p.image)))fail('missing picture: '+p.image+' ('+p.id+')');
if(!existsSync(resolve(root,'assets/doqaus-kopfhoerer-referenz.svg')))fail('DOQAUS reference picture not stored');
const svg=text('assets/doqaus-kopfhoerer-referenz.svg');
if(!svg.startsWith('<svg')||!svg.includes('data:image/webp;base64,'))fail('reference picture not embedded');
const guides=readdirSync(resolve(root,'ratgeber')).filter(n=>n.endsWith('.html'));
if(guides.length<10)fail('fewer than 10 separate guide pages');
const guideIndex=text('ratgeber.html');
for(const name of guides){
  if(!guideIndex.includes('ratgeber/'+name))fail('guide not linked: '+name);
  const page=text('ratgeber/'+name);
  if(!page.includes('Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.'))fail('missing associate note in '+name);
  if(!page.includes('Keine bezahlten Produkttests'))fail('missing editorial note in '+name);
}
const partnerJS=text('partner-offers.js');
if(!partnerJS.includes('window.ALLTAGSFINDER_PARTNER_OFFERS'))fail('no partner registry');
for(const [name,js] of [['partner-offers.js',partnerJS],['wow.js',text('wow.js')]]){
 try{new Script(js,{filename:name})}catch(e){fail('invalid JS '+name+': '+e.message)}
}
// Music & DJ hub: current offers, privacy-friendly setup finder and its assets.
const musicHub=text('musik-dj.html');
if(!musicHub.includes('id="dj-setup-finder"') || !musicHub.includes('id="dj-setup-products"'))
  fail('Missing music setup finder');
for(const type of ['dj','recording','speech'])
  if(!musicHub.includes('data-setup="'+type+'"')) fail('Missing setup purpose: '+type);
if(!musicHub.includes('src="partner-offers.js"') || !musicHub.includes('src="dj-setup.js"'))
  fail('DJ setup registry or client logic not loaded');
if(musicHub.includes('ein gekennzeichnetes Partnerangebot verfügbar'))
  fail('Stale static offer count in music hub');
const djScript=text('dj-setup.js');
try { new Script(djScript,{filename:'dj-setup.js'}) } catch(e){fail('Invalid setup finder JavaScript: '+e.message)}
for(const productId of ['dj-kopfhoerer','dj-controller','dynamisches-mikrofon'])
  if(!djScript.includes('"'+productId+'"')) fail('Setup selection missing product ID '+productId);
if(!text('dj-setup.css').includes('.dj-setup-card'))fail('DJ setup styles missing');

if(!text('datenschutz.html').includes('Cloudflare Pages'))fail('hosting missing from privacy page');
if(!text('transparenz.html').includes('Referenz- und Symbolbilder'))fail('reference-image guidance missing');
console.log('QA OK: 668 unique ideas; '+pics.length+' reference image assets; '+guides.length+' guide pages; affiliate disclosures and scripts present.');


/* Readiness checks for the live offers funnel and actual reference file. */
const offersPage = text('angebote.html');
const inlineStart=offersPage.lastIndexOf('<script>');
const inlineEnd=offersPage.lastIndexOf('</script>');
if(inlineStart<0||inlineEnd<=inlineStart)fail('Offers page inline code missing');
try{new Script(offersPage.slice(inlineStart+8,inlineEnd),{filename:'angebote-inline.js'});}
catch(e){fail('Invalid inline JavaScript in offers page: '+e.message)}
const offerStyle = text('angebote.css');
const picturePath = 'assets/doqaus-kopfhoerer-referenz.webp';
const picture = readFileSync(resolve(root,picturePath));
if (picture.length < 2000 || picture.toString('ascii',0,4) !== 'RIFF' || picture.toString('ascii',8,12) !== 'WEBP')
  fail('Missing/invalid actual headphones WebP image');
if (products.find(p=>p.id==='dj-kopfhoerer')?.image !== picturePath)
  fail('Catalog not using actual headphones WebP');
if (!offersPage.includes('src="'+picturePath+'"')) fail('Offers page missing reference picture');
if (!offersPage.includes('src="partner-offers.js"') || !offersPage.includes('window.ALLTAGSFINDER_PARTNER_OFFERS'))
  fail('Offers page is not wired to the verified affiliate registry');
if (!offersPage.includes('Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.'))
  fail('Offers page missing required Amazon associate statement');
if (!offersPage.includes('Werbung / Partnerlink') || !offersPage.includes('REFERENZBILD'))
  fail('Offers page must clearly identify advertising and reference images');
if (offerStyle.length < 1500) fail('Offers page missing styles');
if (offersPage.indexOf('id="more-offers"') > offersPage.indexOf('id="kopfhoerer-check"'))
  fail('Real additional offers should precede optional buying checklist');
if (!offersPage.includes('class="offers-shortcuts"'))
  fail('Offer quick navigation missing');
if (!offersPage.includes('id="headphone-check-form"') || !offersPage.includes('id="headphone-check-result"'))
  fail('Interactive headphone buying checklist missing');
if (!offerStyle.includes('.headphone-check-form')) fail('Headphone buying checklist styles missing');
if (!offersPage.includes('id="offer-share-btn"') || !offersPage.includes('navigator.share'))
  fail('Offer page share feature missing');
if (!offersPage.includes('id="offer-search"') || !offersPage.includes('id="offer-category"'))
  fail('Additional partner offer filters missing');
if (!offerStyle.includes('.offer-filter-panel') || !offerStyle.includes('.offer-share-button'))
  fail('Offer share/filter styles missing');
for(const id of ['dj-controller','dynamisches-mikrofon','audiointerface','led-par','studio-monitore']){
 const item=products.find(p=>p.id===id);
 if(!item?.image || !existsSync(resolve(root,item.image)))fail('Missing own reference image for '+id);
 if(!item.imageAlt?.includes('Referenzbild'))fail('Image alt should state reference for '+id);
}
if (!html.includes('href="angebote.html"')) fail('Home page does not link to genuine offers');
const partnersContext={window:{}};
try { new Script(partnerJS,{filename:'partner-offers.js'}).runInNewContext(partnersContext,{timeout:1000}); }
catch(e){ fail('Unable to read public affiliate link registry: '+e.message); }
const active=partnersContext.window.ALLTAGSFINDER_PARTNER_OFFERS||{};
const umc22=active.audiointerface;
if(!umc22 || !umc22.published || umc22.affiliateUrl!=='https://link.amazon/B08GxVIDS' || !umc22.title.includes('UMC22'))
  fail('UMC22 registry missing or incorrect; avoid stale DEMO listing');
const catalogUmc22=products.find(p=>p.id==='audiointerface');
if(!catalogUmc22?.title?.includes('UMC22'))
  fail('UMC22 title missing from main catalog');
if(!existsSync(resolve(root,umc22.image||'')))
  fail('UMC22 reference image missing');

for(const [id,offer] of Object.entries(active)){
 if(!products.some(p=>p.id===id)) fail('Affiliate offer has unknown product ID: '+id);
 if(!offer.published || !offer.affiliateUrl || !offer.merchant) fail('Invalid published offer: '+id);
 const u=new URL(offer.affiliateUrl);
 if(u.protocol!=='https:' || u.username || u.password)fail('Insecure affiliate URL '+id);
}
for(const page of ['index.html','angebote.html','musik-dj.html','ratgeber.html','ueber-uns.html','impressum.html','datenschutz.html','transparenz.html']){
 const src=text(page);
 if(!src.includes('href="angebote.html"')) fail('Missing offer navigation in '+page);
 if(!src.includes('href="impressum.html"')) fail('Missing legal link in '+page);
}
const sitemap=text('sitemap.xml');
if(!sitemap.includes('/angebote.html</loc>') || guides.some(n=>!sitemap.includes('/ratgeber/'+n+'</loc>')))
  fail('Sitemap does not reference every current buying guide and the offer page');
// Google readiness: one unique canonical URL per sitemap entry.
const sitemapURLs=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
if(sitemapURLs.length!==20 || new Set(sitemapURLs).size!==sitemapURLs.length)
  fail('Unexpected sitemap URL count or duplicate URLs');
for(const url of sitemapURLs){
  if(!url.startsWith('https://alltagsfinder-auto.pages.dev/'))fail('Sitemap external or wrong host: '+url);
  const path=url.endsWith('.dev/')?'index.html':url.split('.dev/')[1];
  if(!existsSync(resolve(root,path)))fail('Sitemap target missing: '+path);
  const src=text(path);
  if(!src.includes('<link rel="canonical" href="'+url+'"/>'))
    fail('Canonical URL missing or mismatched: '+path);
}
const robots=text('robots.txt');
if(!robots.includes('Sitemap: https://alltagsfinder-auto.pages.dev/sitemap.xml'))
  fail('Missing correct sitemap declaration in robots.txt');
const contactHtml=text('kontakt.html');
if(!contactHtml.includes('id="alltagsfinder-kontaktformular"') || !contactHtml.includes('method="post"') || !contactHtml.includes('action="https://form.taxi/s/qc25mby6"'))fail('Contact form must submit to configured Form.taxi endpoint via POST');
if(contactHtml.includes('E-Mail-Entwurf') || contactHtml.includes('novalidate'))fail('Contact form still claims mail draft or disables native validity checks');
for(const field of ['Name','email','Thema','Nachricht'])if(!contactHtml.includes('name="'+field+'"'))fail('Contact form field missing: '+field);
if(!contactHtml.includes('name="_gotcha"'))fail('Form.taxi honeypot field missing');
if(!contactHtml.includes('href="datenschutz.html#kontaktformular"'))fail('Contact form privacy link missing');
if(!contactHtml.includes('href="mailto:djalpha2000.music@gmail.com?'))fail('Contact email fallback missing');
const contactScript=text('kontakt.js');
try{new Script(contactScript,{filename:'kontakt.js'})}catch(e){fail('Contact form JavaScript invalid: '+e.message)}
if(contactScript.includes('preventDefault') && !contactScript.includes('No preventDefault:'))fail('A JavaScript interception could prevent real form submission');
if(contactScript.includes('window.location.href'))fail('Old email-draft redirect must not intercept real form submission');
if(!text('datenschutz.html').includes('id="kontaktformular"') || !text('datenschutz.html').includes('Form.taxi'))fail('Contact processing privacy text missing');
for(const page of ['index.html','angebote.html','musik-dj.html','ratgeber.html','ueber-uns.html','impressum.html','datenschutz.html','transparenz.html'])if(!text(page).includes('href="kontakt.html"'))fail('Contact link missing in '+page);
for(const page of ['index.html','angebote.html','musik-dj.html','ratgeber.html','ueber-uns.html','kontakt.html','impressum.html','datenschutz.html','transparenz.html']){
 const src=text(page);
 const mobile=src.match(/<nav\b[^>]*class="mobile-nav"[^>]*>[\s\S]*?<\/nav>/);
 if(!mobile || !mobile[0].includes('href="kontakt.html"'))
   fail('Mobile menu contact link missing on '+page);
}
if(!text('impressum.html').includes('Alltagsfinder per E-Mail kontaktieren'))
  fail('Direct email contact action missing from legal page');
if(!text('datenschutz.html').includes('<h2 id="web-analytics">Cloudflare Web Analytics</h2>') || !text('datenschutz.html').includes('Cloudflare Web Analytics aktiviert'))
  fail('Activated Cloudflare Web Analytics privacy disclosure missing');
if(!text('angebote.html').includes('Gekennzeichnete Partnerangebote'))
  fail('Offer page should not claim independently verified shortlinks');
// Protect current published shop data from known regressions.
for(const [page,stale] of [
 ['ueber-uns.html','ein gekennzeichnetes Partnerangebot'],
 ['transparenz.html','Ein erstes ausdrücklich als Werbung'],
 ['datenschutz.html','keine eigenen Kontaktformulare']
]){
 if(text(page).includes(stale))fail('Outdated site information still present: '+page);
}
for(const page of guides.map(name=>'ratgeber/'+name))
 if(!text(page).includes('href="../kontakt.html"'))fail('Guide contact link missing: '+page);
const headerRules=text('_headers');
for(const rule of [
 'X-Content-Type-Options: nosniff',
 'Referrer-Policy: strict-origin-when-cross-origin',
 'X-Frame-Options: SAMEORIGIN',
 'Permissions-Policy: camera=(), microphone=(), geolocation=()'
]){
 if(!headerRules.includes(rule))fail('Missing safety header: '+rule);
}
// Validate local navigation routes on all 20 indexed-candidate pages,
// including the eleven buying guides (not only links in shared footers).
for(const url of sitemapURLs){
 const page=url.endsWith('.dev/')?'index.html':url.split('.dev/')[1];
 const src=text(page);
 for(const match of src.matchAll(/<a\b[^>]*\bhref\s*=\s*["']([^"']+)["']/g)){
  const href=match[1];
  if(/^(?:#|https?:|mailto:|tel:|sms:|data:|javascript:)/i.test(href) || href.includes(String.fromCharCode(36,123)))continue;
  let dest;
  try{dest=new URL(href,'https://alltagsfinder-auto.pages.dev/'+page)}
  catch{fail('Invalid internal link in '+page+': '+href)}
  if(dest.origin!=='https://alltagsfinder-auto.pages.dev')continue;
  const target=decodeURIComponent(dest.pathname.replace(/^\/+/,'')||'index.html');
  if(!existsSync(resolve(root,target)))fail('Broken internal link: '+page+' -> '+href);
 }
}
for(const file of ['index.html','angebote.html','dj-setup.js','transparenz.html','datenschutz.html']){
 if(text(file).includes('sponsored nofollow noopener noreferrer'))
  fail('Amazon referral origin suppressed by noreferrer in '+file);
}
if(!text('index.html').includes('AUSGEWÄHLTES PARTNERANGEBOT'))
 fail('Homepage still describes a single affiliate product');
if(/X-Robots-Tag:\s*[^\n]*\bnoindex\b/i.test(text('_headers')))fail('Search engine exclusion still active after operator-authorized technical launch');
console.log('Offer funnel OK: real WebP picture, '+Object.keys(active).length+' affiliate links, legal links and '+guides.length+' guide pages.');
