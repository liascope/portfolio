import Javascript from "../_components/Icons/JavaScript";
import ReactIcon from "../_components/Icons/ReactIcon";
import Next from "../_components/Icons/Next";
import Html from "../_components/Icons/Html";
import Css from "../_components/Icons/Css";
import Tailwindcss from "../_components/Icons/Tailwindcss";
import Responsive from "../_components/Icons/Responsive";
import GitNGitHub from "../_components/Icons/GitNGitHub";
import Vsc from "../_components/Icons/Vsc";
import Vercel from "../_components/Icons/Vercel";
import ReactQuery from "../_components/Icons/ReactQuery";
import Netlify from "../_components/Icons/Netlify";
import Npm from "../_components/Icons/Npm";
import PrettierNEsLint from "../_components/Icons/PrettierNEsLint";
import ReactRouter from "../_components/Icons/ReactRouter";
import Redux from "../_components/Icons/Redux";
import RestApi from "../_components/Icons/RestApi";
import Vite from "../_components/Icons/Vite";
import FramerMotion from "../_components/Icons/FramerMotion";
import Supabase from "../_components/Icons/Supabase";
import DevTools from "../_components/Icons/DevTools";
import StyledComponents from "../_components/Icons/StyledComponents";
import CssModules from "../_components/Icons/CssModules";
import Auth from "../_components/Icons/Auth";

export const email ='mailto:liascope@hotmail.com';
export const gitHubLink="https://github.com/liascope";

  export const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/techstack", label: "Tech Stack" },
    { href: "/contact", label: "Contact" },
  ];


//Techstack
export const skillIcons = {
  "JavaScript (ES6+)": Javascript,
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
 "Chrome DevTools": DevTools,
 "Styled Components": StyledComponents,
 "CSS Modules": CssModules,
"Auth.js": Auth
};
// Strings in skillIcons have to be the same as Strings in stack //
export const stack = {
  Core: [
    "JavaScript (ES6+)",
   "HTML5",
   "CSS3", 
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
  ],
  "Tools & Dev Environment": [
    "Git & GitHub",
    "VS Code",
    "npm",
    "Prettier & ESLint",
    "Chrome DevTools",
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
  {id:"project-evolution", label: "Project Evolution"},
  { id: "app-structure", label: "App Structure & Pages" },
  { id: "key-features", label: "Key Features" },
  { id: "architecture", label: "Architecture & Tech Decisions" },
  { id: "state-management", label: "State Management & Data Flow" },
  { id: "challenges", label: "Challenges & Learnings" },
  {id:"limitation", label: "Limitation"},
  { id: "reflection", label: "Reflection & Next Steps" },
];
export const caseStudy = {
  Daycare: "Daycare App - Fullstack Next.js",
  LiascopeAstrologyJS: "Astrology App - Vanilla JS",
  LiascopeAstrologyReactNext: "Astrology App - React.js & Next.js",
  Todoezel: "To-Do List App - React.js",
};


export const nextStep = {
  todoezel:["Opening a GPS-based world map on the Shop page to explore the location of shops and link them to shop items.","Allowing users to export lists (Notes/Tasks, Shop List, Today’s Tasks) as PDF or PNG for printing and offline use"],
  astroReactNext:['Downloadable PDF chart reports.',"Lunar phase calendar integration.","Downloadable PDF chart reports.","AI-generated astrology insights based on user input."],
  daycare:['In-App Messaging: Parents and caregivers can exchange messages; caregivers can also send announcements or event notifications to parents.']
}
// CaseStudy End 

// GitHub Repos
export const reactNextProjects = [
  {name: "Daycare App - Fullstack Next.js", link:"https://github.com/liascope/daycare-app"},
  {name:"Liascope Astrology", link: "https://github.com/liascope/liascope-react"}, 
  {name:'Portfolio Website', link:'https://github.com/liascope/portfolio'}
];
export const reactProjects = [
  {name: "Todoezel - ReactRedux", link:"https://github.com/liascope/todoezel-reactredux"},
  {name:"Fast React Pizza", link:"https://github.com/liascope/fast-react-pizza"}, 
  {name:"Classy Weather", link:"https://github.com/liascope/weatherapp"}, 
  {name:"EatNSplit", link:"https://github.com/liascope/eatNsplit"}
];
export const vanillaJSprojects = [
{name: "Liascope Astrology - Vanilla JS", link:"https://github.com/liascope/liascope"}, 
{name:"Todoezel - Vanilla JS", link:"https://github.com/liascope/todoezel"}, 
{name: "Mapty", link:"https://github.com/liascope/maptyzakin"}, 
{name:"Forkify", link:"https://github.com/liascope/forkifyliascope"}, 
{name: "Dice Game", link:"https://github.com/liascope/dicegame"}, 
{name:"Guess My Number", link:"https://github.com/liascope/guessnumberzakin"}
]
// GitHub Repos End


// Projects
export function generateImages(folder, count) {
  return Array.from({ length: count }, (_, i) => `/${folder}/${i+1}.png`);
}
 export const projects = [
  {logo:'/daycare/0.png',
    title: 'Daycare App (Fullstack-Next.js)',
    description:'A full-stack daycare management application with secure role-based access and structured reporting workflows. Built with a server-driven architecture using Next.js Server Actions and PostgreSQL Row Level Security (RLS) for secure data access. Fully responsive across desktop and mobile devices.',
    tech: ['React.js', 'Next.js','Supabase Auth', 'Supabase PostgreSQL', 'Supabase Storage', 'Row Level Security (RLS)','Server Actions', 'JWT Role-Based Access', 'Context API','Tailwind CSS'],
     caseStudy: '/projects/casestudy/Daycare',
    link:'https://daycare-app-five.vercel.app/',
    github: 'https://github.com/liascope/daycare-app',
    images: generateImages('daycare',5)

  },
   {logo: '/astroReact/0.png',
  title: 'Astrology App (React/Next.js)',
  description: 'An interactive astrology charting application with automated transit calculations, multi-chart generation, and dynamic SVG-based visualizations. Initially built in Vanilla JavaScript, the app was refactored to React and Next.js to support complex state, reusable chart logic, and responsive rendering.',
  tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Context API', 'TanstackQuery', 'React Hook Form', 'Framer Motion', 'SVG', '@astrodraw/astrochart', 'js_astro', 'REST APIs'],
  caseStudy: '/projects/casestudy/LiascopeAstrologyReactNext',
  link: 'https://liascope-react.vercel.app/',
  github: 'https://github.com/liascope/liascope-react',
  images: generateImages("astroReact", 10)
}
,
    {logo: '/todoReact/0.png',
  title: 'Task Manager (React/RTK)',
  description: 'A task management application focused on reducing cognitive load by separating daily tasks, long-term planning, and shopping lists. Refactored from Vanilla JavaScript prototype into a production-ready React app with Redux Toolkit for predictable state management and persistence.',
  tech: [  'React.js', 'Redux Toolkit', 'Tailwind CSS','Vite', 'React Router', 'Custom Hooks',  'LocalStorage', 'Framer Motion'
  ],
    caseStudy: '/projects/casestudy/Todoezel',
  link: 'https://todoezel-reactredux.vercel.app/',
  github: 'https://github.com/liascope/todoezel-reactredux',
  images: generateImages("todoReact", 8)

},   {logo: '/portfolio/0.png',
      title: 'Portfolio Website (React/Next.js)',
      description: 'Personal portfolio website built with React and Next.js, focusing on clear information architecture, smooth navigation, and reusable UI components. Features scroll-based interactions, animated transitions, and project previews to present case studies and technical work effectively.You are currently viewing this project live.',
      tech: ['React', 'Next.js', 'Tailwind CSS','Framer Motion' ],
      // link: 'https://liascope-portfolio.vercel.app/', 
      github: 'https://github.com/liascope/portfolio', 
      images: generateImages("portfolio", 5)
    },
  ];
  // Projects End

export const reflectionEvolution = [{
reflection:'Early project challenges reinforced the importance of upfront planning and clear architectural decisions, significantly reducing refactoring.', evolution:(<> Established a reliable, repeatable workflow:<br /> <strong className="text-teal-900/60 tracking-widest">plan → implement → refactor → optimize</strong>
      </>
    ),}, {reflection:'Frequent refactoring state structures and component boundaries improved predictability and scalability.', evolution:'Applied architectural principles such as clear state ownership, predictable rendering behavior, and separation of concerns'}, {reflection:'Iterative development cycles improved API integration and reduced coupling between data logic and UI components.', evolution:'Advanced from a Vanilla JavaScript MVC architecture to React.js and Next.js with a component-driven mindset.'}
]
