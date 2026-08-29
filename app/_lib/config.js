import Javascript from '../_components/Icons/JavaScript'
import Typescript from '../_components/Icons/Typescript'
import ReactIcon from '../_components/Icons/ReactIcon'
import Next from '../_components/Icons/Next'
import Html from '../_components/Icons/Html'
import Css from '../_components/Icons/Css'
import Tailwindcss from '../_components/Icons/Tailwindcss'
import GitNGitHub from '../_components/Icons/GitNGitHub'
import Vercel from '../_components/Icons/Vercel'
import ReactQuery from '../_components/Icons/ReactQuery'
import Netlify from '../_components/Icons/Netlify'
import PrettierNEsLint from '../_components/Icons/PrettierNEsLint'
import Redux from '../_components/Icons/Redux'
import RestApi from '../_components/Icons/RestApi'
import Vite from '../_components/Icons/Vite'
import FramerMotion from '../_components/Icons/FramerMotion'
import Supabase from '../_components/Icons/Supabase'
import StyledComponents from '../_components/Icons/StyledComponents'
import CssModules from '../_components/Icons/CssModules'
import Auth from '../_components/Icons/Auth'
import Vue from '../_components/Icons/Vue'
import Expo from '../_components/Icons/Expo'

export const email = 'mailto:liascope@hotmail.com'
export const gitHubLink = 'https://github.com/liascope'

export const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Stack', id: 'stack' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

//Techstack
export const skillIcons = {
  'JavaScript (ES6+)': Javascript,
  TypeScript: Typescript,
  'React.js': ReactIcon,
  'React Native': ReactIcon,
  'Next.js': Next,
  'Vue.js': Vue,
  HTML5: Html,
  CSS3: Css,
  'Tailwind CSS': Tailwindcss,
  'Git & GitHub': GitNGitHub,
  Vercel: Vercel,
  Vite: Vite,
  'Redux Toolkit': Redux,
  'RESTful APIs': RestApi,
  'TanStack Query': ReactQuery,
  'Prettier & ESLint': PrettierNEsLint,
  Netlify: Netlify,
  'Framer Motion': FramerMotion,
  Supabase: Supabase,
  'Styled Components': StyledComponents,
  'CSS Modules': CssModules,
  'Auth.js': Auth,
  Expo: Expo,
}
// Strings in skillIcons have to be the same as Strings in stack //
export const stack = {
  Core: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  'Frameworks & State Management': ['React.js', 'React Native', 'Next.js', 'Expo', 'Vue.js', 'TanStack Query', 'Redux Toolkit'],
  'Styling & UI': ['Tailwind CSS', 'CSS Modules', 'Styled Components', 'Framer Motion'],
  'Tools & Dev Environment': ['Git & GitHub', 'Prettier & ESLint', 'Vite'],
  'Backend & Deployment': ['RESTful APIs', 'Supabase', 'Auth.js', 'Netlify', 'Vercel'],
}
// Techstack End

// Projects
export function generateImages(folder, count) {
  return Array.from({ length: count }, (_, i) => `/${folder}/${i + 1}.png`)
}

export const projects = [
  {
    logo: '/daycare/0.png',
    title: 'Daycare App',
    description:
      'Full-stack daycare management application for tracking attendance, managing schedules, and generating structured reports. Built with Next.js and Supabase, with role-based access and PostgreSQL Row Level Security to keep data access separated by user role. The interface is fully responsive across desktop and mobile.',
    tech: ['React.js', 'Next.js', 'Supabase', 'PostgreSQL', 'Server Actions', 'Tailwind CSS'],
    link: 'https://daycare-app-five.vercel.app/',
    github: 'https://github.com/liascope/daycare-app',
    images: generateImages('daycare', 5),
  },
  {
    logo: '/fidizle/0.png',
    title: 'Fidizle',
    description:
      'Mobile-first movie and series archive built with React Native and TypeScript. Users can search the OMDb API, explore detailed information, rate titles, and organize them in separate personal archives. Includes persistent state, dark and light mode, responsive layouts, and native sharing.',
    tech: ['React Native', 'TypeScript', 'Expo', 'OMDb API', 'Context API'],
    link: 'https://fidizle.vercel.app/',
    github: 'https://github.com/liascope/fidizle',
    images: generateImages('fidizle', 3),
  },
  {
    logo: '/astroReact/0.png',
    title: 'Astrology App',
    description:
      'Interactive astrology application with automated transit calculations, multi-chart generation, and dynamic SVG visualizations. Originally built with Vanilla JavaScript and an MVC architecture, then rebuilt with React and Next.js using reusable components and a more maintainable state and data flow. Integrates the Gemini API for AI-generated chart interpretations.',
    tech: ['React.js', 'Next.js', 'TanStack Query', 'Tailwind CSS', 'Framer Motion', 'Gemini API'],
    link: 'https://liascope.vercel.app/',
    github: 'https://github.com/liascope/liascope-astrology',
    images: generateImages('astroReact', 6),
  },
  {
    logo: '/todoReact/0.png',
    title: 'Task Manager',
    description:
      'Task management application for organizing daily tasks, long-term planning, and shopping lists. Refactored from Vanilla JavaScript to React and TypeScript, replacing local state management with Redux Toolkit for predictable state and persistent data.',
    tech: ['React.js', 'TypeScript', 'Redux Toolkit', 'Vite', 'React Router', 'Tailwind CSS'],
    link: 'https://todoezel-rtk.vercel.app/',
    github: 'https://github.com/liascope/todoezel-rtk',
    images: generateImages('todoReact', 5),
  },
]

// Projects End
