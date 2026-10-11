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
    {degree:'B.Tech in Electrical Engineering',institution:'Netaji Subhas University of Technology (NSUT), New Delhi',period:'Expected 2027',description:'An engineering foundation alongside practical work in data science and machine learning.',highlights:['ANN-based speed and position estimation for a BLDC motor','MATLAB and Simulink model integration']},
    {degree:'Class XII · CBSE',institution:'DAV Schools Network, New Delhi',period:'2023',description:'Senior secondary education.',highlights:[]},
    {degree:'Class X · CBSE',institution:'S.L.S. D.A.V. Public School, New Delhi',period:'2021',description:'Secondary education.',highlights:[]},
  ] as {degree:string; institution:string; period:string; description:string; highlights:string[]}[],
};
