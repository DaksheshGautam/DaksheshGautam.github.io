import { existsSync } from 'node:fs';
import { resolve, sep } from 'node:path';
export const text=(v:unknown):string=>typeof v==='string'?v.trim():'';
export const list=(v:unknown):string[]=>Array.isArray(v)?v.map(text).filter(Boolean):[];
export const records=(v:unknown):Record<string,unknown>[]=>Array.isArray(v)?v.filter(x=>x && typeof x==='object' && !Array.isArray(x)):[];
export const link=(v:unknown):string|undefined=>{const s=text(v);try{const u=new URL(s);return ['https:','http:'].includes(u.protocol)?s:undefined;}catch{return undefined;}};
export const asset=(v:unknown,kind:'image'|'pdf'):string|undefined=>{const s=text(v);if(!s)return undefined;const root=resolve('public'),target=resolve(root,s.replace(/^\//,''));const allowed=kind==='pdf'?/\.pdf$/i:/\.(png|jpe?g|webp|gif|svg|avif)$/i;return target.startsWith(root+sep)&&allowed.test(s)&&existsSync(target)?s.replace(/^\//,''):undefined;};
