import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anup | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome, I am ',
  name: 'Anup',
  subtitle: "I'm a Software Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is Anup and I was born and brought up in Buxar, Bihar. I am working as a Senior Software Developer with Astrum Labs. I have a total experience of 3 years in various projects with various roles and responsibility.',
  paragraphTwo: 'In this short span of 3 years, I have had the previlege to lead a team of three members to create seperate module for our software. I have Experience in React, C#, ASP.NET, ASP.NET MVC, HTML5, JavaScript, JQuery, Web APIs, CSS, Bootstrap, SQL Server and Dynamic 365 CRM.',
  paragraphThree: 'Analysis, Designing, Coding and Unit Testing are the prime responsibilities. Others include Requirement Gathering, Creation of Functional Specification.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'anup.kr.2908@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://github.com/pathakkumaranup/info',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anup-kumar-pathak',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pathakkumaranup/info',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
