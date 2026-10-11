import {readFileSync,existsSync,readdirSync,statSync} from 'node:fs';
import {join,resolve} from 'node:path';
import assert from 'node:assert/strict';
const base=(process.env.BASE_PATH || '/').replace(/\/$/,'');
const files=[];const walk=p=>{for(const f of readdirSync(p)){const n=join(p,f);if(statSync(n).isDirectory())walk(n);else if(n.endsWith('.html'))files.push(n)}};walk('dist');
for(const route of ['index.html','data-analytics/index.html','data-science/index.html','404.html'])assert.ok(existsSync(join('dist',route)),`Missing route ${route}`);
for(const file of files){const html=readFileSync(file,'utf8');assert.ok(!/href="(?:#|undefined|null)"/.test(html),`Invalid control in ${file}`);assert.ok(!/<iframe[^>]*resume/i.test(html),'Resume must not be embedded');for(const [,url] of html.matchAll(/(?:href|src|data-image)="([^"?#]+)(?:[?#][^"]*)?"/g)){if(!url.startsWith('/') || url.startsWith('//'))continue;assert.ok(url.startsWith(base+'/'),`Wrong base path ${url}`);const path=url.slice(base.length).replace(/^\//,'');const target=resolve('dist',path);assert.ok(existsSync(target),`Missing asset/link ${url} in ${file}`)}}
const analytics=readFileSync('dist/data-analytics/index.html','utf8');const science=readFileSync('dist/data-science/index.html','utf8');
assert.ok(analytics.includes('11 completed courses'));assert.ok(science.includes('12 completed courses'));
assert.ok(analytics.includes('Commerce Pulse')&&!analytics.includes('Transaction Risk Detector'));
assert.ok(science.includes('Transaction Risk Detector')&&!science.includes('Commerce Pulse'));
assert.ok(science.includes('GlyphDex')&&!science.includes('DigiDex')&&science.includes('FastF1Winner')&&!science.includes('LeakProfiler'),'Science projects must match the requested selection');
const pdfs=readdirSync('public/certificates').filter(f=>f.endsWith('.pdf'));assert.equal(pdfs.length,20,'Expected two professional and 18 individual course PDFs');
for(const pdf of pdfs)assert.equal(readFileSync(join('public/certificates',pdf)).subarray(0,5).toString(),'%PDF-',`Invalid PDF ${pdf}`);
console.log(`Verified ${files.length} pages, route separation, internal links, optional controls, and ${pdfs.length} original certificate PDFs.`);
