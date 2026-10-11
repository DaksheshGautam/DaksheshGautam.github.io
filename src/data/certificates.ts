import type { Track } from './projects';
export interface Credential {id:string; title:string; date:string; verify:string; image?:string; pdf?:string; skills?:string[];}
export interface Certification extends Credential {track:Track; issuer:string; courses:Credential[];}
const course = (id:string,title:string,date:string):Credential => ({id,title,date,verify:`https://www.coursera.org/account/accomplishments/verify/${id}`});
// Individual completions and membership verified in the user's Coursera account.
// Five shared course records are intentionally reused in both professional certificates.
const shared = [
  course('2N7JWNY55YXH','Python for Data Science, AI & Development','2026-09-18'),
  course('VIR091GAE5DL','Python Project for Data Science','2026-09-19'),
  course('KT12PGL85LEU','Databases and SQL for Data Science with Python','2026-09-23'),
  course('YKQSS56JQX37','Data Analysis with Python','2026-09-24'),
  course('D2YMV6MSCB8F','Data Visualization with Python','2026-10-10'),
];
export const certifications: Certification[] = [
  {id:'Q5EI5EGSR2WS',title:'IBM Data Analyst Professional Certificate',track:'analytics',issuer:'IBM · Coursera',date:'2026-10-10',verify:'https://www.coursera.org/account/accomplishments/specialization/Q5EI5EGSR2WS',skills:['Excel','SQL','Python','Cognos Analytics','Data storytelling'],courses:[
    course('GEGBEARGHHGS','Introduction to Data Analytics','2026-10-10'),
    course('P3N7CVZ9GQJC','Excel Basics for Data Analysis','2026-10-10'),
    course('2SK5VFJH7ZDJ','Data Visualization and Dashboards with Excel and Cognos','2026-10-10'),
    ...shared,
    course('6R5PWAPBFTUA','IBM Data Analyst Capstone Project','2026-10-10'),
    course('AWCV4XY9PKLU','Generative AI: Enhance your Data Analytics Career','2026-10-10'),
    course('K3Z01307D0P7','Data Analyst Career Guide and Interview Preparation','2026-10-10'),
  ]},
  {id:'DFW1BGGD10XS',title:'IBM Data Science Professional Certificate',track:'science',issuer:'IBM · Coursera',date:'2026-10-11',verify:'https://www.coursera.org/account/accomplishments/specialization/DFW1BGGD10XS',skills:['Python','SQL','Machine learning','Model evaluation','Data visualization'],courses:[
    course('1JYURMSVJR2Q','What is Data Science?','2026-05-26'),
    course('ULDDQ70O9K40','Tools for Data Science','2026-07-26'),
    course('5WTCVEERQPIC','Data Science Methodology','2026-09-17'),
    ...shared,
    course('5K9BR68EBLRP','Machine Learning with Python','2026-10-10'),
    course('EH9ZO30ZS0DL','Applied Data Science Capstone','2026-10-11'),
    course('F38DLPGFJS0X','Generative AI: Elevate Your Data Science Career','2026-10-10'),
    course('XHQKZM78BLBR','Data Scientist Career Guide and Interview Preparation','2026-10-10'),
  ]},
];
// Only show controls for assets that actually exist. Downloaded files use their credential ID.
const images = import.meta.glob('/public/certificates/*.jpg');
const pdfs = import.meta.glob('/public/certificates/*.pdf');
for (const cert of certifications) for (const c of [cert,...cert.courses]) {
  if (images[`/public/certificates/${c.id}.jpg`]) c.image = `certificates/${c.id}.jpg`;
  if (pdfs[`/public/certificates/${c.id}.pdf`]) c.pdf = `certificates/${c.id}.pdf`;
}
