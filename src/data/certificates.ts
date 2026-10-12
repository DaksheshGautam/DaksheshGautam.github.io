import entries from '../../content/certifications.json';
import type { Track } from './projects';
import { text, list, link, asset, records } from './content';
export interface Credential {id:string; title:string; date:string; verify?:string; image?:string; pdf?:string; skills?:string[];}
export interface Certification extends Credential {track:Track; issuer:string; courses:Credential[];}
const credential=(c:Record<string,unknown>):Credential=>({id:text(c.id),title:text(c.title),date: /^\d{4}-\d{2}-\d{2}$/.test(text(c.date)) && Number.isFinite(Date.parse(text(c.date))) ? text(c.date) : '',verify:link(c.verify),skills:list(c.skills),image:asset(c.image ?? (text(c.id) ? `certificates/${c.id}.jpg` : undefined),'image'),pdf:asset(c.pdf ?? (text(c.id) ? `certificates/${c.id}.pdf` : undefined),'pdf')});
export const certifications:Certification[]=records(entries).filter(c=>text(c.title)&&['analytics','science'].includes(text(c.track))).map(c=>({...credential(c),track:c.track as Track,issuer:text(c.issuer),courses:records(c.courses).filter(x=>text(x.title)).map(credential)}));
