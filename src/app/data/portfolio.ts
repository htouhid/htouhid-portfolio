export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  technologies: string[];
  highlights?: string[];
}
export interface SkillGroup {
  title: string;
  skills: string[];
}
export interface Project {
  number: string;
  image: string;
  imageAlt: string;
  title: string;
  label: string;
  description: string;
  technologies: string[];
  contribution: string;
  brands?: string[];
  note?: string;
  links: { label: string; url: string }[];
}
export const experiences: Experience[] = [
  {
    company: 'UPS Capital',
    role: 'Lead Application Developer / Lead UI Developer',
    period: 'September 2023 – Present',
    location: 'Atlanta, GA / Remote',
    summary: 'Lead frontend development for UPS Capital’s Digital Wallet platform.',
    technologies: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'NgRx',
      'Signals',
      'HTML5',
      'SCSS',
      'REST APIs',
      'Azure DevOps',
    ],
    highlights: [
      'Build responsive financial experiences, translating UX and product requirements into reusable, accessible Angular components.',
      'Integrate REST APIs and dynamic data with RxJS and modern Angular state-management patterns.',
      'Improve frontend performance, usability, and reliability; support CI/CD across development, QA, UAT, and production.',
      'Provide frontend technical leadership through code reviews, troubleshooting, and development standards.',
    ],
  },
  {
    company: 'General Motors',
    role: 'Senior Software Engineer / AEM Frontend Developer',
    period: 'April 2016 – August 2023',
    location: 'Austin, TX',
    summary:
      'Developed large-scale consumer-facing web experiences for General Motors brands and Owner Center applications.',
    technologies: [
      'Angular',
      'AngularJS',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'SCSS',
      'RxJS',
      'AEM',
      'WCAG',
    ],
    highlights: [
      'Built responsive Angular and AngularJS applications and contributed to AngularJS-to-Angular modernization.',
      'Developed reusable frontend and AEM components and templates, integrating applications with backend services.',
      'Improved page-load performance and implemented accessible interfaces aligned with WCAG standards.',
      'Collaborated with UX, product, content, QA, and global business teams.',
    ],
  },
  {
    company: 'Verizon Telematics/Verizon Connect',
    role: 'Lead UI Developer',
    period: 'June 2014 – February 2016',
    location: 'Atlanta, GA',
    summary: 'Developed responsive customer-facing portals and fleet-management applications.',
    technologies: ['AngularJS', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery'],
  },
  {
    company: 'Accenture / Marriott International',
    role: 'Senior UI Developer',
    period: 'June 2012 – June 2014',
    location: 'Bethesda, MD',
    summary:
      'Developed responsive customer-facing experiences for Marriott.com and related digital properties.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Responsive Web Design'],
  },
];
export const earlierExperience = [
  { company: 'Alliance Data', role: 'Lead UI Designer / Developer' },
  { company: 'Washington Post', role: 'Java Frontend Developer' },
  { company: 'Accenture / Marriott International', role: 'UI Developer' },
];
export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Engineering',
    skills: [
      'Angular',
      'AngularJS',
      'TypeScript',
      'JavaScript / ES6+',
      'RxJS',
      'NgRx',
      'HTML5',
      'CSS3',
      'SCSS / SASS',
    ],
  },
  {
    title: 'UI Engineering',
    skills: [
      'Responsive Web Design',
      'Mobile-First Development',
      'Reusable UI Components',
      'Design System Implementation',
      'Cross-Browser Compatibility',
      'Semantic HTML',
    ],
  },
  {
    title: 'Accessibility & UX',
    skills: ['WCAG', 'Section 508', 'Web Accessibility', 'Figma', 'Adobe XD', 'Axure RP'],
  },
  {
    title: 'Enterprise Platforms',
    skills: [
      'Adobe Experience Manager',
      'Adobe Experience Cloud',
      'DAM',
      'Content Management Systems',
    ],
  },
  {
    title: 'Integration & DevOps',
    skills: ['REST APIs', 'JSON', 'Git', 'Azure DevOps', 'CI/CD', 'Jenkins', 'Jira'],
  },
  {
    title: 'Testing & Quality',
    skills: [
      'Jasmine',
      'Karma',
      'Jest',
      'Chrome DevTools',
      'Accessibility Testing',
      'Frontend Performance Optimization',
    ],
  },
];
export const projects: Project[] = [
  {
    number: '01',
    image: '/images/selected-work/selected_work_ups.png',
    imageAlt: 'UPS Capital Digital Wallet and Rewards',
    title: 'UPS Capital Digital Wallet & Rewards',
    label: 'Enterprise Financial Application',
    description:
      'A customer-facing digital wallet and rewards experience for UPS customers, providing access to rewards, balances, transaction activity, payment experiences, and account functionality.',
    contribution:
      'At UPS Capital, I lead frontend development using Angular and TypeScript, building responsive UI components, integrating REST APIs, managing asynchronous application data, and supporting accessible, scalable customer experiences.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'REST APIs', 'SCSS', 'Azure DevOps'],
    links: [{ label: 'Visit Site', url: 'https://rewards.ups.com/' }],
  },
  {
    number: '02',
    image: '/images/selected-work/selected_work_gm.png',
    imageAlt: 'General Motors Owner Center',
    title: 'General Motors Owner Center',
    label: 'Enterprise Automotive Digital Experience',
    description:
      'Consumer-facing owner experiences for General Motors brands, providing vehicle owners with access to account information, vehicle resources, support, connected services, and ownership tools across U.S. and international markets.',
    contribution:
      'While working with General Motors, I worked extensively on GM Owner Center frontend experiences, including Angular and AngularJS development, AngularJS-to-Angular modernization, reusable UI components, AEM components and templates, responsive design, accessibility, API integration, and frontend performance.',
    brands: ['Chevrolet', 'Buick', 'Cadillac', 'GMC'],
    technologies: [
      'Angular',
      'AngularJS',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'AEM',
      'SCSS',
      'WCAG',
    ],
    links: [
      { label: 'US Owner Center', url: 'https://www.chevrolet.com/owners' },
      { label: 'Middle East Owner Center', url: 'https://my.chevroletarabia.com/ae/en/home' },
    ],
  },
  {
    number: '03',
    image: '/images/selected-work/selected_work_verizon.png',
    imageAlt: 'Verizon Telematics connected vehicle experience',
    title: 'Verizon Telematics / Verizon Connect',
    label: 'CONNECTED VEHICLE & TELEMATICS',
    description:
      'During my time at Verizon Telematics, I worked on connected-vehicle and fleet-management web applications at a time when connected vehicle technology was rapidly emerging.',
    contribution:
      'As Lead UI Developer, I developed responsive customer-facing portals and fleet-related applications using AngularJS, JavaScript, HTML5 and CSS, translating UX concepts into reusable interfaces and integrating frontend applications with backend services.',
    technologies: [
      'AngularJS',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'jQuery',
      'Responsive UI',
    ],
    links: [
      {
        label: 'Visit Verizon Connect',
        url: 'https://www.verizonconnect.com/company/fleetmatics/',
      },
    ],
    note: 'Verizon Telematics is now part of Verizon Connect. This link provides company context; the current Verizon Connect website is not my work.',
  },
];
