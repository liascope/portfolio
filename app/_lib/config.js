import Javascript from '../_components/Icons/JavaScript'
import Typescript from '../_components/Icons/Typescript'
import ReactIcon from '../_components/Icons/ReactIcon'
import Next from '../_components/Icons/Next'
import Html from '../_components/Icons/Html'
import Css from '../_components/Icons/Css'
import Tailwindcss from '../_components/Icons/Tailwindcss'
import Responsive from '../_components/Icons/Responsive'
import GitNGitHub from '../_components/Icons/GitNGitHub'
import Vsc from '../_components/Icons/Vsc'
import Vercel from '../_components/Icons/Vercel'
import ReactQuery from '../_components/Icons/ReactQuery'
import Netlify from '../_components/Icons/Netlify'
import Npm from '../_components/Icons/Npm'
import PrettierNEsLint from '../_components/Icons/PrettierNEsLint'
import ReactRouter from '../_components/Icons/ReactRouter'
import Redux from '../_components/Icons/Redux'
import RestApi from '../_components/Icons/RestApi'
import Vite from '../_components/Icons/Vite'
import FramerMotion from '../_components/Icons/FramerMotion'
import Supabase from '../_components/Icons/Supabase'
import DevTools from '../_components/Icons/DevTools'
import StyledComponents from '../_components/Icons/StyledComponents'
import CssModules from '../_components/Icons/CssModules'
import Auth from '../_components/Icons/Auth'
import Vue from '../_components/Icons/Vue'

export const email = 'mailto:liascope@hotmail.com'
export const gitHubLink = 'https://github.com/liascope'

export const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/techstack', label: 'Tech Stack' },
  { href: '/contact', label: 'Contact' },
]

//Techstack
export const skillIcons = {
  'JavaScript (ES6+)': Javascript,
  TypeScript: Typescript,
  'React.js': ReactIcon,
  'Next.js': Next,
  'Vue.js': Vue,
  HTML5: Html,
  CSS3: Css,
  'Tailwind CSS': Tailwindcss,
  'Responsive Design': Responsive,
  'Git & GitHub': GitNGitHub,
  'VS Code': Vsc,
  Vercel: Vercel,
  'React Router': ReactRouter,
  npm: Npm,
  Vite: Vite,
  'Redux Toolkit': Redux,
  'RESTful APIs': RestApi,
  'TanStack Query': ReactQuery,
  'Prettier & ESLint': PrettierNEsLint,
  Netlify: Netlify,
  'Framer Motion': FramerMotion,
  Supabase: Supabase,
  'Chrome DevTools': DevTools,
  'Styled Components': StyledComponents,
  'CSS Modules': CssModules,
  'Auth.js': Auth,
}
// Strings in skillIcons have to be the same as Strings in stack //
export const stack = {
  Core: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  'Frameworks & Libraries': ['React.js', 'Next.js', 'Vue.js', 'React Router', 'TanStack Query', 'Redux Toolkit'],
  'Styling & UI': ['Tailwind CSS', 'CSS Modules', 'Styled Components', 'Responsive Design', 'Framer Motion'],
  'Tools & Dev Environment': ['Git & GitHub', 'VS Code', 'npm', 'Prettier & ESLint', 'Chrome DevTools', 'Vite'],
  'Backend & Deployment': ['RESTful APIs', 'Supabase', 'Auth.js', 'Netlify', 'Vercel'],
}
// Techstack End

// CaseStudy
export const sections = [
  { id: 'project-evolution', label: 'Project Evolution' },
  { id: 'key-features', label: 'Key Features' },
  { id: 'architecture', label: 'Architecture & Tech Decisions' },
  { id: 'state-management', label: 'State Management & Data Flow' },
  { id: 'challenges', label: 'Challenges & Learnings' },
]
export const caseStudy = {
  Daycare: 'Daycare App - Fullstack Next.js',
  LiascopeAstrologyReactNext: 'Astrology App - React.js & Next.js',
  Todoezel: 'To-Do List App - React.js, Redux Toolkit & TypeScript',
}
// CaseStudy End

// GitHub Repos
export const reactNextProjects = [
  { name: 'Daycare App - Fullstack Next.js', link: 'https://github.com/liascope/daycare-app' },
  { name: 'Liascope Astrology', link: 'https://github.com/liascope/liascope-astrology' },
  { name: 'Portfolio Website', link: 'https://github.com/liascope/portfolio' },
]
export const reactProjects = [
  { name: 'Todoezel - React.js, Redux Toolkit & TypeScript', link: 'https://github.com/liascope/todoezel-rtk' },
  { name: 'Fast React Pizza', link: 'https://github.com/liascope/fast-react-pizza' },
  { name: 'Classy Weather', link: 'https://github.com/liascope/weatherapp' },
  { name: 'EatNSplit', link: 'https://github.com/liascope/eatNsplit' },
]
export const vanillaJSprojects = [
  { name: 'Liascope Astrology - Vanilla JS', link: 'https://github.com/liascope/liascope' },
  { name: 'Todoezel - Vanilla JS', link: 'https://github.com/liascope/todoezel' },
  { name: 'Mapty', link: 'https://github.com/liascope/maptyzakin' },
  { name: 'Forkify', link: 'https://github.com/liascope/forkifyliascope' },
  { name: 'Dice Game', link: 'https://github.com/liascope/dicegame' },
  { name: 'Guess My Number', link: 'https://github.com/liascope/guessnumberzakin' },
]
// GitHub Repos End

// Projects
export function generateImages(folder, count) {
  return Array.from({ length: count }, (_, i) => `/${folder}/${i + 1}.png`)
}

export const projects = [
  {
    logo: '/daycare/0.png',
    title: 'Daycare App (Fullstack-Next.js)',
    description:
      'Full-stack daycare management system enabling staff to track attendance, manage schedules, and generate structured reports. Built with a server-driven architecture using Next.js Server Actions and PostgreSQL Row Level Security (RLS) for secure data access. Fully responsive across desktop and mobile.',
    tech: [
      'React.js',
      'Next.js',
      'Supabase Auth',
      'Supabase PostgreSQL',
      'Supabase Storage',
      'RLS',
      'Server Actions',
      'JWT Role-Based Access',
      'Context API',
      'Tailwind CSS',
    ],
    caseStudy: '/projects/casestudy/Daycare',
    link: 'https://daycare-app-five.vercel.app/',
    github: 'https://github.com/liascope/daycare-app',
    images: generateImages('daycare', 5),
  },
  {
    logo: '/astroReact/0.png',
    title: 'Astrology App (React/Next.js)',
    description:
      'Interactive astrology charting app with automated transit calculations, multi-chart generation, and dynamic SVG visualizations. Refactored from Vanilla JS to React and Next.js to support complex state, reusable chart logic, and responsive rendering.',
    tech: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Context API',
      'TanstackQuery',
      'React Hook Form',
      'Framer Motion',
      'SVG',
      '@astrodraw/astrochart',
      'js_astro',
      'REST APIs',
    ],
    caseStudy: '/projects/casestudy/LiascopeAstrologyReactNext',
    link: 'https://liascope.vercel.app/',
    github: 'https://github.com/liascope/liascope-astrology',
    images: generateImages('astroReact', 10),
  },
  {
    logo: '/todoReact/0.png',
    title: 'Task Manager (React.js, Redux Toolkit & TypeScript)',
    description:
      'Task management app separating daily tasks, long-term planning, and shopping lists. Refactored from Vanilla JS to React with Redux Toolkit and TypeScript for predictable state management, persistent storage and catching type-related errors early.',
    tech: ['React.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'React Router', 'Custom Hooks', 'LocalStorage', 'Framer Motion'],
    caseStudy: '/projects/casestudy/Todoezel',
    link: 'https://todoezel-rtk.vercel.app/',
    github: 'https://github.com/liascope/todoezel-rtk',
    images: generateImages('todoReact', 8),
  },
  {
    logo: '/portfolio/0.png',
    title: 'Portfolio Website (React/Next.js)',
    description:
      'Personal portfolio showcasing projects with clear information architecture, smooth navigation, reusable UI components, and interactive scroll-based animations. Built with React and Next.js, optimized for responsive performance.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    // link: 'https://liascope-portfolio.vercel.app/',
    github: 'https://github.com/liascope/portfolio',
    images: generateImages('portfolio', 5),
  },
]

// Projects End
