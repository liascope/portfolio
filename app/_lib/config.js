import Javascript from "../__components.js/Icons/JavaScript";
import Typescript from "../__components.js/Icons/Typescript";
import ReactIcon from "../__components.js/Icons/ReactIcon";
import Next from "../__components.js/Icons/Next";
import Html from "../__components.js/Icons/Html";
import Css from "../__components.js/Icons/Css";
import Tailwindcss from "../__components.js/Icons/Tailwindcss";
import Responsive from "../__components.js/Icons/Responsive";
import GitNGitHub from "../__components.js/Icons/GitNGitHub";
import Vsc from "../__components.js/Icons/Vsc";
import Vercel from "../__components.js/Icons/Vercel";
import ReactQuery from "../__components.js/Icons/ReactQuery";
import Netlify from "../__components.js/Icons/Netlify";
import Npm from "../__components.js/Icons/Npm";
import PrettierNEsLint from "../__components.js/Icons/PrettierNEsLint";
import ReactRouter from "../__components.js/Icons/ReactRouter";
import Redux from "../__components.js/Icons/Redux";
import RestApi from "../__components.js/Icons/RestApi";
import Vite from "../__components.js/Icons/Vite";
import FramerMotion from "../__components.js/Icons/FramerMotion";
import Supabase from "../__components.js/Icons/Supabase";
import DevTools from "../__components.js/Icons/DevTools";
 import StyledComponents from "../__components.js/Icons/StyledComponents";
 import IconSvgDesign from "../__components.js/Icons/IconSvgDesign";
 import CssModules from "../__components.js/Icons/CssModules";
import Auth from "../__components.js/Icons/Auth";



  export const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/techstack", label: "Tech Stack" },
    { href: "/contact", label: "Contact" },
  ];



//Techstack
export const skillIcons = {
  "JavaScript (ES6+)": Javascript,
  "TypeScript (basic)": Typescript,
  "React.js": ReactIcon,
  "Next.js": Next,
  "HTML5": Html,
  "CSS3": Css,
  "Tailwind CSS": Tailwindcss,
  "Responsive Design": Responsive,
  "Git & GitHub": GitNGitHub,
  "VS Code": Vsc,
  "Vercel": Vercel,
  "React Router": ReactRouter,
   "npm": Npm,
  "Vite": Vite,
  "Redux Toolkit": Redux,
  "RESTful APIs": RestApi,
  "TanStack Query": ReactQuery, 
  "Prettier & ESLint": PrettierNEsLint,
  "Netlify":Netlify,
  "Framer Motion": FramerMotion,
  "Supabase":Supabase,
 "Debugging & Chrome DevTools": DevTools,
 "Styled Components": StyledComponents,
 "SVG Optimization & Custom Icons": IconSvgDesign,
 "CSS Modules": CssModules,
"Auth.js": Auth
};
// Strings in skillIcons have to be the same as Strings in stack //
export const stack = {
  Core: [
    "JavaScript (ES6+)",
   "HTML5",
   "CSS3", 
   "TypeScript (basic)",
    
  ],
  "Frameworks & Libraries": [
    "React.js",
    "Next.js",
    "React Router",
    "TanStack Query",
    "Redux Toolkit",
  
  ],
  "Styling & UI": [
    "Tailwind CSS",
    "CSS Modules",
    "Styled Components",
     "Responsive Design",   
     "Framer Motion",
     "SVG Optimization & Custom Icons",
  ],
  "Tools & Dev Environment": [
    "Git & GitHub",
    "VS Code",
    "npm",
    "Prettier & ESLint",
    "Debugging & Chrome DevTools",
    "Vite"
  ],
  "Backend & Deployment": [
    "RESTful APIs",
    "Supabase",
    "Auth.js",
    "Netlify",
    "Vercel",
  ],
};
// Techstack End

// CaseStudy
export const sections = [
  { id: "app-structure", label: "App Structure & Pages" },
  { id: "key-features", label: "Key Features" },
  { id: "architecture", label: "Architecture & Tech Decisions" },
  { id: "state-management", label: "State Management & Data Flow" },
  { id: "challenges", label: "Challenges & Learnings" },
  {id:"limitation", label: "Limitation"},
  { id: "reflection", label: "Reflection & Next Steps" },
];
export const caseStudy = {
  LiascopeAstrologyJS: "Astrology App - Vanilla JS",
  LiascopeAstrologyReactNext: "Astrology App - React/Next.js",
  Todoezel: "To-Do List App",
};
// CaseStudy End 

export const nextStep = {
  todoezel:["Opening a GPS-based world map on the Shop page to explore the location of shops and link them to shop items.","Allowing users to export lists (Notes/Tasks, Shop List, Today’s Tasks) as PDF or PNG for printing and offline use"],
  // astroJS:[],
  astroReactNext:['Generating downloadable PDF chart reports.',"Lunar phase calendar integration.","Adding more astrological charts, signs, and calculations.","AI-generated astrology predictions based on user inputs."]
}

// GitHub Repos
export const reactNextProjects = [
  {name:"Liascope Astrology - React.js", link: "https://github.com/liascope/liascope-react"},{name: "Todoezel - React.js", link:"https://github.com/liascope/todoezel-react"}, {name: "The Wild Oasis - Customer Version", link:"https://github.com/liascope/wildoasisweb"}
];
export const reactProjects = [
  {name:"Wild Oasis - Admin Version", link:"https://github.com/liascope/thewildoasisapp"},{name:"Fast React Pizza", link:"https://github.com/liascope/fast-react-pizza"}, {name:"Classy Weather", link:"https://github.com/liascope/weatherapp"}, {name:"EatNSplit", link:"https://github.com/liascope/eatNsplit"}
];
export const vanillaJSprojects = [
{name: "Liascope Astrology - Vanilla JS", link:"https://github.com/liascope/liascope"}, {name:"Todoezel - Vanilla JS", link:"https://github.com/liascope/todoezel"}, {name:"Astrozel-Web", link:"https://github.com/liascope/Astrozel"},{name: "Mapty", link:"https://github.com/liascope/maptyzakin"}, {name:"Forkify", link:"https://github.com/liascope/forkifyliascope"}, {name: "Dice Game", link:"https://github.com/liascope/dicegame"}, {name:"Guess My Number", link:"https://github.com/liascope/guessnumberzakin"}
]
// GitHub Repos End


// Projects
function generateImages(folder, count) {
  return Array.from({ length: count }, (_, i) => `/${folder}/${i+1}.png`);
}
 export const projects = [
       { logo: '/astroJS/0.png',
  title: 'Astrology App (Vanilla JS)',
  description: 'The original version of my astrology charting app, built to validate the concept and deepen my understanding of architectural patterns. Developed using the MVC pattern, it integrates external astrology and timezone APIs, performs chart calculations, and dynamically renders responsive SVG charts. This project marked my first experience with third-party libraries and laid the groundwork for the later React/Next.js refactor',
  tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', '@astrodraw/astrochart', 'js_astro', 'REST APIs', 'MVC Pattern', 'DOM Manipulation'],
  caseStudy: '/projects/casestudy/LiascopeAstrologyJS',
  link: 'https://liascope.netlify.app/',
  github: 'https://github.com/liascope/liascope',
  images: generateImages("astroJS", 6)
},
   {logo: '/astroReact/0.png',
  title: 'Astrology App (React/Next.js)',
  description: 'A modern astrology charting app built with React.js and Next.js. It features automated transit calculations, multi-chart generation, location autocomplete, and interactive SVG visualizations. Originally developed in Vanilla JS, the app was refactored to a scalable architecture using Context API, custom hooks, and third-party library adaptations to handle complex astrological data and real-time rendering.',
  tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Context API', 'React Query', 'React Hook Form', 'Framer Motion', 'SVG', '@astrodraw/astrochart', 'js_astro', 'REST APIs'],caseStudy: '/projects/casestudy/LiascopeAstrologyReactNext',
  link: 'https://liascope-react.vercel.app/',
  github: 'https://github.com/liascope/liascope-react',
  images: generateImages("astroReact", 10)
}
,
    {logo: '/todoReact/0.png',
  title: 'To-Do List App',
  description: 'A modern, feature-rich to-do and notes app that helps users stay productive with progress tracking, date-based reminders, and shopping lists. Originally built in Vanilla JS, ToDoeZel was refactored into React/Next.js.',
  tech: [  'React.js', 'Next.js', 'Tailwind CSS', 'Context API', 'Custom Hooks',  'LocalStorage',  'Framer Motion'
  ], caseStudy: '/projects/casestudy/Todoezel',
  link: 'https://todoezel-react.vercel.app/',
  github: 'https://github.com/liascope/todoezel-react',
  images: generateImages("todoReact", 8)

},   {logo: '/portfolio/0.png',
      title: 'Portfolio Website',
      description: 'Clean, responsive portfolio built with React.js, Next.js and Tailwind CSS, featuring a sticky navigation that highlights active sections, a scroll-triggered header powered by a custom useSticky hook, image sliders for project previews, and smooth transitions for an intuitive UX.',
      tech: ['React', 'Next.js', 'Tailwind CSS','Framer Motion' ],
      link: 'https://liascope-portfolio.vercel.app/', 
      github: 'https://github.com/liascope/portfolio', 
      images: generateImages("portfolio", 5)
    },

      {logo: '/forkify/0.png',
      title: 'Recipe App',
  description: 'JavaScript recipe app built with the MVC pattern. Features recipe search via API, bookmarking with localStorage, and responsive design. Independently added and coded: Shopping List, KCal/Nutrition Information API call, Delete Recipe, Add Recipe, Add Ingredients, Sort Recipes A-Z, Display number of search results, and Display number of pages',
  tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Webpack', 'REST API', 'LocalStorage', 'MVC Pattern'],
  link: 'https://forkifyliascope.netlify.app/',
  github: 'https://github.com/liascope/forkifyliascope',
  images: generateImages("forkify", 4)
    },
    {logo: '/mapty/0.png',
  title: 'Fitness Tracking',
  description: 'JavaScript fitness tracking app demonstrating OOP principles and Geolocation API. Independently implemented additional features and improvements including: Map Overview, Geocode Location, Edit/Delete Workout, Delete All Workouts, Sort by Date/Distance, and Confirmation Messages.',
  tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'OOP', 'Geolocation API', 'LocalStorage'],
  link: 'https://maptyzakin.netlify.app/',
  github: 'https://github.com/liascope/maptyzakin',
  images: generateImages("mapty", 2)
},
{logo: '/woAdmin/0.png',
  title: 'Hotel Booking (Admin)',
  description: 'Full-stack React & Next.js app for hotel staff using Supabase backend for database and authentication. Admin can manage check-ins, check-outs, and room bookings, with role-based access control.',
  tech: ['React.js', 'Next.js', 'Supabase','Supabase Auth', 'React Query', 'Styled Components', 'Full-Stack SPA', 'Authentication & Authorization', 'Role-Based Access Control'],
  link: 'https://the-wild-oasis-app-proj.netlify.app',
  github: 'https://github.com/liascope/thewildoasisapp/',
  images: generateImages("woAdmin", 3)
},
{logo: '/woCustom/0.png',
title: 'Hotel Booking (Customer)',
  description: 'Full-stack single-page React app for hotel guests featuring Google OAuth authentication via Supabase. Users can log in, browse room availability, make bookings, and track their reservation status.',
  tech: ['React.js', 'Next.js', 'Supabase', 'Google OAuth', 'React Query', 'Styled Components', 'Tailwind CSS', 'SPA'],
  link: 'https://wildoasisweb-theta.vercel.app/',
  github: 'https://github.com/liascope/wildoasisweb',
  images: generateImages("woCustom", 4)
},
  ];
  // Projects End