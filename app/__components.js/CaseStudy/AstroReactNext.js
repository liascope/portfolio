'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "../ImageSlider";
import Button from "../Button";
import HeaderCS from "./HeaderCS";
import { nextStep } from "@/app/_lib/config";
export default function AstroReactNext() {
  const [readMore, setReadMore] = useState(false) 
 
  return (<main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 p-4 ">
      <section className="max-w-6xl mx-auto bg-white/30 backdrop-blur-lg rounded-2xl p-4 sm:p-8 shadow-xl">

<HeaderCS img="astroReact">Astrology App - React/Next.js</HeaderCS>

          <article className="mb-10 mt-2">
  <p className="sm:text-lg text-base p-3 sm:p-6">
     Liascope Astrology originated as a personal solution to a common challenge: most online astrology tools are cluttered, visually overwhelming, and not beginner-friendly. After validating the concept with the <Link href='https://github.com/liascope/liascope' target="_blank" className=" hover:text-teal-900">Vanilla JavaScript version </Link>, I set out to rebuild Liascope Astrology with React.js and Next.js to modernize the codebase, improve responsiveness, and expand its feature set. My goal was to create a cleaner and more scalable application that makes exploring natal, transit, and derived charts faster and more intuitive across devices.
  </p>
  <ul className="list-disc ml-6 sm:ml-12 space-y-2">
    <li>Modernize the architecture by refactoring from Vanilla JS to React/Next.js.</li>
    <li>Implement a fully responsive layout for accessibility on all screen sizes.</li>
    <li>Enhance UX with smoother data input, chart generation, and navigation.</li>
    <li>Expand functionality with new features and SVG manipulation capabilities.</li>
  </ul>
</article>

<article className="p-5 sm:p-12 bg-white/40 backdrop-blur-sm rounded-xl shadow hover:scale-105 transition my-10">
  <h2 id="app-structure" title="App Structure & Pages"  className="sm:text-2xl text-xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">App Structure</h2>
  <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`/app
├─ RootLayout                → Global layout with header & footer
│   ├─ /                     → Homepage (CTA to form)
│   ├─ /form                 → Data entry (natal & transit charts, horoscope selection)
│   ├─ /profiles             → Saved profiles (localStorage)
│   └─ /policy               → Policy page
│
├─ _components               → Reusable UI components (incl. NavIcons)
│
├─ _lib
│   ├─ hooks/                → Custom React hooks
│   ├─ context/              → Context API for global state
│   ├─ config.js             → App configuration
│   └─ helpers.js            → Utility functions
│
├─ /charts                    → Chart layout & pages
│   ├─ layout.js              → Chart info button & table, navigation
│   ├─ /chart/natal           → Natal chart
│   ├─ /chart/transit         → Transit chart
│   ├─ /chart/natalTransit    → Natal & transit overlay
│   ├─ /chart/progression     → Progressed chart
│   ├─ /chart/draconic        → Draconic chart
│   └─ /chart/perfection      → Annual perfection chart
|
├─ /api/nominatim/route.js    → SS Nominatim route to bypass CORS & dev request limits`}
  </pre>
</article>

       <div   className="flex flex-col sm:flex-row my-10 gap-10 items-center">
 <article className="bg-white/40 backdrop-blur-sm rounded-xl p-3 sm:p-10 shadow hover:scale-105 transition">
  <ul className="list-disc ml-6 space-y-2">
    <h2 id="key-features" title="Key Features" className="text-xl sm:text-2xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Key Features</h2>
    <li><strong>Multi-Chart Generation:</strong> Natal, Transit, Natal&Transit, Draconic, Progression, Annual Perfection charts.</li>
    <li><strong>Save & Load:</strong> Persistent charts (up to 5) with session persistence across refreshes.</li>
    <li><strong>Dynamic Tables & Grids:</strong> Planet and house data rendered in responsive tables for fast readability.</li>
    <li><strong>Aspect & Filter Tools:</strong> Directly on SVG charts for focused insights.</li>
    <li><strong>Autocomplete & Location Support:</strong> Quick search for “Today’s Transits” and location input for accurate calculations.</li>
    <li><strong>Additional UX Enhancements:</strong> Custom loader, cookie banner with policy routing, and guided modals for onboarding.</li>
  </ul>
</article> 

 <article className="md:w-1/1 flex flex-col items-center rounded-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.15)] shadow-sky-800/60 h-fit">   
  <ImageSlider images={['/caseStudy/csAstroReact1.png', '/caseStudy/csAstroReact2.png','/caseStudy/csAstroReact3.png']} sliderHeight="h-xl" />
 <ul className="text-xs text-sky-900/80 text-justify p-4">
             <li>Liascope Vanilla JS (left) and Liacope React.js & Next.js (right):
             1.Form & Autocomplete functionality -
             2.Data Info Table extension -
             3.Displaying Retrograde & Filter functionality</li>
           </ul>
         </article>

         </div>

 <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
  <article className="bg-white/40 backdrop-blur-sm rounded-xl p-2 sm:p-6 shadow hover:scale-105 transition">
        <ul className="list-disc ml-6 space-y-2">
           <h2 id="architecture" title="Architecture & Tech Decisions" className="text-2xl sm:text-xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Architecture & Tech Decisions</h2>
          <li><strong>Next.js + React.js</strong> – Chosen for fast client-side routing and smooth navigation between dynamic chart pages, while efficiently handling API-driven data on the frontend.</li>

         <li><strong>Context API + React Hook Form</strong> – Enables centralized state management for user data and charts with predictable flow, while providing efficient form validation and submission without external state libraries.</li>

         <li><strong>TanStack Query</strong> – Implemented for the form`s city/place autofill to efficiently fetch suggestions and the latitude and longitude of locations while reducing redundant API requests. Its caching and deduplication mechanisms ensure smoother and faster user interactions, enhancing overall performance and user experience.</li>

    <li><strong>Framer Motion</strong> – Used for smooth animations in chart transitions and page navigation, enhancing user experience through subtle motion without impacting performance.</li>

<li><strong>TailwindCSS</strong> – Chosen for its utility-first approach to build a clean, consistent, and fully responsive UI efficiently, reducing the need for large custom CSS files and improving scalability.</li>

<li><strong>Custom Hooks</strong> – Encapsulate complex logic such as SVG rendering, timezone lookups, and retrograde handling into reusable functions, improving code organization, readability, and testability.</li>

<li><strong>LocalStorage & SessionStorage</strong> – Implemented a hybrid persistence strategy: profiles are stored long-term in <code>localStorage</code>, while session data persists temporarily to survive page reloads without unnecessary backend calls.</li>


<li><strong>Deployment</strong> – Hosted on Vercel for seamless integration with Next.js, providing fast builds, automatic deployments, and global CDN support.</li>
  <ul className="list-disc space-y-2">
    <h3 className="font-bold tracking-widest text-sky-900/50 uppercase my-3">External APIs & Libraries</h3>
    <li><strong className="cursor-pointer hover:text-teal-700" ><Link href="https://nominatim.org/" target="_blank" >Nominatim API</Link></strong> – Provides geolocation data with autocomplete, streamlining birthplace input for users.</li>
    <li><strong className="cursor-pointer hover:text-teal-700"><Link href="https://github.com/astsakai/js_astro/tree/master?tab=readme-ov-file#js_astro" target="_blank" >Timezone API</Link></strong> – Ensures accurate timezone conversion, which is essential for precise astrological calculations.</li>
    <li><strong className="cursor-pointer hover:text-teal-700"><Link href="https://github.com/astsakai/js_astro/tree/master?tab=readme-ov-file#js_astro" target="_blank" >js_astro</Link></strong> – Powers core natal, transit, and derived chart degree calculations, extended to handle retrograde logic and timezone conversions.</li>
    <li><strong className="cursor-pointer hover:text-teal-700"><Link href="https://astrodraw.github.io/" target="_blank" >AstroChart</Link></strong> – A SVG Chart Library ntegrated and customized for chart rendering, enabling responsive scaling, filtering, and interactive chart manipulation.</li>
  </ul>
</ul>
</article>

{/* Flow Chart with toggle info-section */}
<div  className="flex flex-col items-center justify-center gap-6">
  <article>
    <h2 id="state-management" title="State Management & Data Flow" className="text-2xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">State Management & Data Flow</h2><div className="relative w-full h-120">
   <Image
                src="/caseStudy/csAstroReactFC1.png"
                alt="AstroReact Flowchart"
                fill
                className="object-contain brightness-95"
              sizes="(max-width: 640px) 220px, 400px"
              /></div>
              <p className="text-xs text-sky-900/50 text-justify tracking-wider">High-level architecture and data flow of the React.js version of Liascope Astrology</p></article>
<ul className="space-y-2 text-xs text-sky-900/50 text-justify">
  <li>
    <strong>User Input & Location Handling: </strong>  
    Form is handled via <code>React Hook Form</code>.  
    The location input is in a separate component that shows location suggestions and calculates latitude and longitude using the Nominatim API via TanStackQuery. These values are passed via props. Before submitting, the time zone of the choosen location is calculated by TimezoneDB-API in the submit function.</li>
      <ul className={` overflow-hidden transition-all duration-1000 ease-in-out mb-3 space-y-2 ${
              readMore ? "max-h-500" : "max-h-0"
            }`}>
        <li>
          <strong>Context API: </strong>  
          The retrieved data is passed to the Context API. All data and API response are passed to the third-party chart library js_astro in the <code>calcChart</code> function. From the Context API, all values are made available to the corresponding components.
        </li>

        <li>
          <strong>Custom Hooks for Chart Rendering & Special Cases: </strong>  
          There are three main custom hooks, all of which get their data from the Context API custom hook:
          <ul className="list-decimal ml-6 space-y-2 pt-1">
            <li>
              <strong>Chart Rendering Hook: useRenderCharts: </strong>  
              Renders SVG charts using the AstroChart library.  
              This hook receives a <code>chartID</code> (e.g., natal, transit, draconic) and draws the corresponding SVG chart.  
              It also returns calculated data for aspects, houses, and planetary positions using multiple internal calculation functions based on Context API data.
            </li>
            <li>
              <strong>SVG Manipulating Hooks: useTimeUnknown & useRetroPlanets: </strong>  
              Handles cases where birth or transit time is unknown & highlights retrograde planets.
            </li>
          </ul>
        </li>

        <li>
          <strong className="">Chart Rendering in Components: </strong>
          <ul className="list-decimal ml-6 space-y-2 pt-1">
            <li>
              <strong>Charts.js: </strong>  
              The reusable <code>Charts</code> component calls all three hooks and the Context API custom hook.  
              All hooks receive the <code>chartID</code> to render the appropriate chart dynamically.  
              This component is used on the natal, transit, draconic, and progression pages.  
            </li>

            <li>
              <strong>NatalTransit.js: </strong>  
              Calculates and renders the combined Natal & Transit chart.  
              Uses the Context API custom hook, the SVG manipulating hooks and the AstroChart SVG library.
            </li>

            <li>
              <strong>Perfection.js: </strong>  
              Generates Perfection charts based on the Context API custom hook, <code>useRenderCharts</code>, and internal calculations.  
            </li>
          </ul>
        </li>
      </ul>
      <span
        className="text-sky-900/30 uppercase tracking-widest font-bold cursor-pointer hover:text-sky-900/80"
        onClick={() => setReadMore(!readMore)}
      >
        {readMore ? "| show less |" : "| read more |"}
      </span>
</ul>
</div>
</div>

<div className="flex flex-col gap-5 sm:gap-10 my-10">
  <article className="bg-white/40 backdrop-blur-sm rounded-xl p-12 shadow hover:scale-105 transition">
      <h2 id="challenges" title="Challenges & Learnings" className="sm:text-2xl text-xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Challenges & Learnings</h2>
  <p className="mb-4">
    Implementing the MVC pattern in the original Vanilla JS version provided a strong architectural baseline for separation of concerns and data flow. 
    This foundation made the subsequent transition to React.js and Next.js smoother, allowing me to focus on scaling the app, improving maintainability, and adopting modern frontend practices.
  </p>
  <ul className="list-disc ml-6 space-y-2">
    <li>
      <strong>Architectural Refactoring:</strong> Converted procedural logic into reusable hooks and components, adopting Context API to manage multiple APIs, derived states, and six different chart types.
    </li>
    <li>
      <strong>Custom Hooks & State Management:</strong> Built hooks for API fetching, persistence, and complex state handling, reducing duplication and improving scalability across charts.
    </li>
   
    <li>
      <strong>SVG Rendering & UI Enhancements:</strong> Extended the chart-drawing library for interactive filtering, responsive scaling, dynamic SVG styling, and features such as aspect filtering and chart manipulation.
    </li>
    <li>
      <strong>Next.js Practices:</strong> Implemented App Router conventions including loading and error states for improved UX and maintainability.
    </li>
    <li>
      <strong>Form Handling with React Hook Form:</strong> Implemented complex forms independently for the first time, including validation, conditional inputs, and state synchronization with global Context. Learned how to structure reusable form components while maintaining UX consistency.
    </li>
  <li>
  <strong>Third-Party Library Integration & Deployment:</strong> Adapted and modernized the Japanese astrology library to correctly handle retrograde planet calculations and timezone conversions, resolving compatibility issues and fixing breaking changes during build and deployment.
</li>

  </ul>
</article>

<article className="px-7 sm:px-20 py-6 text-base sm:text-lg">
  <h2  id="reflection" title="Reflection & Next Steps"  className="sm:text-2xl text-xl text-center font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Reflection & Next Steps</h2>
 <p className="mb-4 text-center">
 The Vanilla JS version gave hands-on experience with architecture, libraries, and API integration. The React/Next.js version scaled and modernized the app with reusable components, responsive design, and performance optimizations.
</p>
<ul className="px-6 list-disc mx-6 space-y-2 text-base">
  <li>Deepened understanding of global state management and API orchestration across multiple chart types.</li>
  <li>Enhanced skills in designing clean, responsive and user-friendly interfaces for complex, data-heavy applications.</li>
  <li>Refactored and adapted external code to meet project-specific requirements, including third-party libraries and SVG chart manipulations.</li>
  <li>Improved debugging workflows and architectural thinking to ensure scalable and maintainable frontend solutions.</li>
  <li>Gained practical experience with component reusability, performance optimization, and accessibility considerations.</li>
</ul>

 <h3 className="text-center font-bold tracking-widest uppercase text-sky-900/50 my-6">Planned enhancements include:</h3>
  <ul className="text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
    {nextStep.astroReactNext.map((step,i)=>{return (<li key={i} className="bg-white/40 backdrop-blur-sm rounded-xl shadow text-center flex items-center  px-5 py-2 text-teal-900/40 tracking-widest font-bold hover:scale-105 transition">{step}</li>)})}
  </ul>
</article>
</div>

   <footer>
        <div className="flex flex-row gap-6 w-full justify-center items-center">
        <Button link="https://liascope-react.vercel.app/" target="_blank"> Live Demo </Button>
        <Button link='https://github.com/liascope/liascope-react' bright={true} target="_blank"> GitHub Repo </Button>
      </div>
      <section className="mt-8 sm:mt-16 border-t border-sky-700/30 pb-2 pt-8 text-center">
  <h3 className=" font-bold tracking-widest text-sky-900/30 mb-4 uppercase">
    Other Case Studies
  </h3>
  <div className="flex justify-center gap-4 text-teal-700/40 tracking-wider font-semibold text-sm">
 <Link href="/projects/casestudy/LiascopeAstrologyJS" className="hover:text-teal-600/60 " target="_blanked">Astrology App - Vanilla JS</Link>
    <span className="border-sky-700/30">|</span>
   <Link href="/projects/casestudy/Todoezel" className="hover:text-teal-600/60" target="_blanked" >To-Do List App - React/Next.js</Link>
  </div>
</section>
        </footer>

</section>
</main>
   
  );
}
