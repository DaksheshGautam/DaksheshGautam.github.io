import {readFileSync,existsSync,readdirSync,statSync} from 'node:fs';
import {join,resolve} from 'node:path';
import assert from 'node:assert/strict';
const base=(process.env.BASE_PATH || '/').replace(/\/$/,'');
const files=[];const walk=p=>{for(const f of readdirSync(p)){const n=join(p,f);if(statSync(n).isDirectory())walk(n);else if(n.endsWith('.html'))files.push(n)}};walk('dist');
for(const route of ['index.html','data-analytics/index.html','data-science/index.html','404.html'])assert.ok(existsSync(join('dist',route)),`Missing route ${route}`);
for(const file of files){const html=readFileSync(file,'utf8');assert.ok(!/href="(?:#|undefined|null)"/.test(html),`Invalid control in ${file}`);assert.ok(!/<iframe[^>]*resume/i.test(html),'Resume must not be embedded');for(const [,url] of html.matchAll(/(?:href|src|data-image)="([^"?#]+)(?:[?#][^"]*)?"/g)){if(!url.startsWith('/') || url.startsWith('//'))continue;assert.ok(url.startsWith(base+'/'),`Wrong base path ${url}`);const path=url.slice(base.length).replace(/^\//,'');const target=resolve('dist',path);assert.ok(existsSync(target),`Missing asset/link ${url} in ${file}`)}}
const analytics=readFileSync('dist/data-analytics/index.html','utf8');const science=readFileSync('dist/data-science/index.html','utf8');
const pages={analytics,science};
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
for(const project of JSON.parse(readFileSync('content/projects.json','utf8'))){if(!project?.title || !pages[project.track])continue;assert.ok(pages[project.track].includes(escape(project.title.trim())),`Missing project ${project.title}`);}
for(const cert of JSON.parse(readFileSync('content/certifications.json','utf8'))){if(!cert?.title || !pages[cert.track])continue;assert.ok(pages[cert.track].includes(escape(cert.title.trim())),`Missing credential ${cert.title}`);}
const pdfs=readdirSync('public/certificates').filter(f=>f.endsWith('.pdf'));
for(const pdf of pdfs)assert.equal(readFileSync(join('public/certificates',pdf)).subarray(0,5).toString(),'%PDF-',`Invalid PDF ${pdf}`);
console.log(`Verified ${files.length} pages, route separation, internal links, optional controls, and ${pdfs.length} original certificate PDFs.`);
