import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import Humraah1 from "../assets/Humraah1.jpg"
import Humraah2 from "../assets/Humraah2.jpg"
import SPO1 from "../assets/SPO1.jpg"
import SPO2 from "../assets/SPO2.jpg"
import FMS1 from "../assets/FMS1.jpg"
import FMS2 from "../assets/FMS2.jpg"

import gamebite from "../assets/company/gamebite.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frondend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui/Ux Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  // {
  //   title: "Jr Game Developer",
  //   company_name: "Game-bite studio",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "June 2022 - Dec 2022",
  //   points: [
  //     "Developing and maintaining game features and functionalities using Unity.",
  //     "Collaborating with cross-functional teams including designers and other developers to create engaging gaming experiences.",
  //     "Implementing game mechanics and ensuring smooth gameplay across different platforms.",
  //     "Participating in playtesting and providing feedback to improve game quality.",
  //   ],
  // },
  {
    title: "MERN Stack (React Native)",
    company_name: "Firefly-Techsolutions",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - Present",
    points: [
      "Developing and maintaining mobile applications using React Native within the MERN stack.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive and adaptive design to ensure user experience across different devices.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Fiverr",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining mobile applications using React Native and other technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive and adaptive design to ensure user experience across different devices.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  
  {
    name: "Humraah app",
    description:
      "The family planning app for an NGO helps underserved areas find centers, chat with doctors, and access educational content. Admin dashboard manages content and interactions, enhancing efficiency and engagement.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image1: Humraah1,
    image2: Humraah2,
    source_code_link: "https://github.com/MehdiHasssan/Humraah-Application",
  },

  {
    name: "School Managemnt",
    description:
      "The School Management App, using React Native and Node.js, manages school activities and communication. It features attendance tracking, chat, timetables, and much more. The app , enhancing the educational experience.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "orange-text-gradient",
      },
    ],
    image1: SPO1,
    image2: SPO2,
    source_code_link: "https://github.com/MehdiHasssan/sef_schools",
  },

  {
    name: "Firefly app",
    description:
      "Developed a React Native and Node.js app for organizational management with payment processing, notifications, chat, CRUD operations, and Cloudinary. It manages bonuses, tasks, and much more for boosting productivity.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "mongo",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "grapghQL",
        color: "orange-text-gradient",
      },
    ],
    image1: FMS1,
    image2: FMS2,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, projects };
