import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  tailwind,
  reactjs,
  redux,
  nodejs,
  mongodb,
  github,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from '../assets ';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Developer',
    icon: web,
  },
  {
    title: 'Front End Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'github',
    icon: github,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Nelson Web Solutions',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2016 - April 2018',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React js. Developer',
    company_name: 'Crown Web Services',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'April 2018 - Feb 2020',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    company_name: 'Dayo Web Consutancy',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Feb 2020 - Feb 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Crown-Dayo Web Consutancy',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Feb 2021 - Present',
    points: [
      'Developed online apps using a variety of front-end and back-end technologies, such as HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Both new web applications and pre-existing codebases have been my projects.',
      'Created database schemas, writing queries to extract and modify data, and working with SQL and NoSQL databases are all skills I have in the area of database management. I am also familiar with programmes like MongoDB Atlas and Firebase.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Worked with other programmers, I am a team player that appreciates the importance of efficient communication and teamwork. To deliver high-quality products on schedule and under budget, I collaborated with designers, project managers, and other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Adedayo disproved my assumption that it was impossible to create a website as stunning as our product.',

    name: 'Samuel Levis',
    designation: 'CEO',
    company: 'Fortune Enterprises',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I have never met a web developer like Adedayo who genuinely cares about their clients' success.",
    name: 'Andy Blue',
    designation: 'Chairman',
    company: 'Iconic Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      " Our traffic increased by 50% after it was optimised by Adedayo. We can't thank him enough!",
    name: 'Lime Joesi',
    designation: 'CTO',
    company: '875 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
