export const profile = {
  name: 'Dakshesh Gautam',
  intro: 'From raw data to clear decisions. From an idea to a working model.',
  bio: 'I explore data through analytics and machine learning, building projects that turn questions into interactive dashboards, reproducible analysis, and useful tools.',
  photo: 'portrait.jpg' as string | null,
  email: 'dakshesh.gautam.career@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dakshesh-gautam/',
  github: 'https://github.com/DaksheshGautam',
  resumes: { analytics: null as string | null, science: 'resumes/data-scientist.pdf' as string | null },
  education: [
    {degree:'B.Tech in Electrical Engineering',institution:'Netaji Subhas University of Technology (NSUT), New Delhi',period:'Expected 2027',description:'',highlights:[]},
  ] as {degree:string; institution:string; period:string; description:string; highlights:string[]}[],
  experience: [
    { company: 'BYPL', role: 'Data Analyst Intern', period: 'May–July 2026', duration: '2 months' },
    { company: 'Viva Fit', role: 'Machine Learning Intern', period: 'May–July 2025', duration: '2 months' },
  ],
};
