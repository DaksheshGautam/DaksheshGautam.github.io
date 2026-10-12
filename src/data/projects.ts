import entries from '../../content/projects.json';
import { text, list, link, asset, records } from './content';
export type Track = 'analytics' | 'science';
export interface Project { title:string; track:Track; category:string; description:string; skills:string[]; repo?:string; live?:string; image?:string; imageAlt?:string; note?:string; }
export const projects: Project[] = records(entries).filter(p=>text(p.title) && ['analytics','science'].includes(text(p.track))).map(p=>({title:text(p.title),track:p.track as Track,category:text(p.category),description:text(p.description),skills:list(p.skills),repo:link(p.repo),live:link(p.live),image:asset(p.image,'image'),imageAlt:text(p.imageAlt),note:text(p.note)}));
