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
if(!text('datenschutz.html').includes('Cloudflare Pages'))fail('hosting missing from privacy page');
if(!text('transparenz.html').includes('Referenz- und Symbolbilder'))fail('reference-image guidance missing');
console.log('QA OK: 668 unique ideas; '+pics.length+' reference image assets; '+guides.length+' guide pages; affiliate disclosures and scripts present.');


/* Readiness checks for the live offers funnel and actual reference file. */
const offersPage = text('angebote.html');
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
if (!html.includes('href="angebote.html"')) fail('Home page does not link to genuine offers');
const partnersContext={window:{}};
try { new Script(partnerJS,{filename:'partner-offers.js'}).runInNewContext(partnersContext,{timeout:1000}); }
catch(e){ fail('Unable to read public affiliate link registry: '+e.message); }
const active=partnersContext.window.ALLTAGSFINDER_PARTNER_OFFERS||{};
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
if(!text('_headers').includes('noindex'))fail('Premature SEO release: legal review not complete');
console.log('Offer funnel OK: real WebP picture, '+Object.keys(active).length+' affiliate links, legal links and '+guides.length+' guide pages.');
