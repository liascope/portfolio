import Link from "next/link";
import Image from "next/image";
import ImageSlider from "../ImageSlider";
import Button from "../Button";
import HeaderCS from "./HeaderCS";
export default function AstroJS() {
  return (<main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 p-4 ">
     <section className="max-w-6xl mx-auto bg-white/30 backdrop-blur-lg rounded-2xl p-2 sm:p-8 shadow-xl">
     <HeaderCS img="astroJS">Astrology APP - Vanilla JS </HeaderCS>

 <article className="mb-10 mt-2">
 <p className="text-base sm:text-lg p-3 sm:p-6">
  Liascope Vanilla JS was created to provide a simple, structured, and user-friendly way to explore astrological charts. The project focuses on clarity, readability, and a clean design, while also allowing me to practice core architecture principles:
</p>
<ul className="list-disc ml-6 sm:ml-12 space-y-2">
  <li>Provide a friendly and intuitive interface for calculating and visualizing horoscopes.</li>
  <li>Make complex astrological data easy to read and navigate for users.</li>
  <li>Ensure charts are structured and maintainable through applying the MVC pattern.</li>
  <li>Serve as a foundational project to demonstrate independent development and architectural thinking in Vanilla JS.</li>
</ul>

</article>

<article className="p-5 sm:p-12 bg-white/40 backdrop-blur-sm rounded-xl shadow hover:scale-105 transition my-10">
  <h2 id="app-structure" title="App Structure & Pages"  className="text-xl sm:text-2xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">App Structure</h2>

  <p className="mb-4">
    The app follows a classic <strong className="text-teal-900/60 tracking-widest">MVC architecture</strong>: 
    <code> model.js</code> handles data and calculations, 
    <code> view.js</code> manages UI rendering and DOM updates, 
    and <code> controller.js</code> coordinates between the two layers.
  </p>

  <pre className="bg-gray-100 p-3 sm:p-6 rounded-md text-sm overflow-x-auto">
{`/src
├─ config.js          → Global app configuration
├─ controller.js      → Coordinates app logic & user events
├─ model.js           → Data management & calculations
├─ view.js            → UI rendering and DOM updates
├─ helpers.js         → Utility functions
├─ cusps/             → Third-party library for chart calculations
└─ style.css          → Global styles`}
  </pre>
</article>



  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-end mb-6">
    
    <article className="bg-white/40 backdrop-blur-sm rounded-xl p-3 sm:p-10 shadow hover:scale-105 transition"> 
      <ul className="list-disc ml-6 space-y-2"> 
        <h2 id="key-features" title="Key Features" className="text-xl sm:text-2xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Key Features</h2>
        <li><strong>Astrological Calculations:</strong> Computes planetary positions, houses, aspects, retrograde states, Moon Node, and cusps with precision.</li>
        <li><strong>Rich Visualization:</strong> Renders charts via SVG and dynamically displays planet & house data in interactive tables/grids.</li>
        <li><strong>Flexible Input & Multi-Chart Support:</strong> Users can enter birth details and generate up to six horoscope types.</li>
      </ul>
    </article>

    <article className="bg-white/40 backdrop-blur-sm rounded-xl p-3 sm:p-10 shadow hover:scale-105 transition ">
    
      <ul className="list-disc ml-6 space-y-2 ">
          <h2 id="architecture" title="Architecture & Tech Decisions" className="text-2xl sm:text-xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Architecture & Tech Decisions</h2>
        <li><strong>JavaScript (ES6) </strong>– Core logic and interactivity.</li>
        <li><strong >MVC Pattern</strong> – Model (data/calculations), View (UI), Controller (interactions).</li>
        <li><strong>HTML5 & CSS3</strong> – Clean, minimal design.</li>
        <li><strong >APIs</strong> –<Link href="https://nominatim.org/" target="_blank"><strong className="cursor-pointer hover:text-teal-700">Nominatim</strong></Link> (location), <Link href="https://timezonedb.com/references/get-time-zone" target="_blank" ><strong className="cursor-pointer hover:text-teal-700">TimezoneDB</strong></Link> (timezone).</li>
        <li><strong >Libraries</strong> – <Link href="https://astrodraw.github.io/" target="_blank" ><strong className="cursor-pointer hover:text-teal-700">AstroChart</strong></Link> (SVG rendering), <Link href="https://github.com/astsakai/js_astro/tree/master?tab=readme-ov-file#js_astro" target="_blank" ><strong className="cursor-pointer hover:text-teal-700" >js_astro</strong></Link>(planetary calculations).</li>
         <li><strong>Deployment</strong> – Hosted on Netlify.</li>
      </ul>
    </article>

    <article className="bg-white/40 backdrop-blur-sm rounded-xl p-3 sm:p-10 shadow hover:scale-105 transition">
  
      <ul className="list-disc ml-6 space-y-2">  
          <h2 id="challenges" title="Challenges & Learnings" className="text-2xl sm:text-xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Challenges & Learnings</h2>
        <li>First deep dive into <strong >APIs and external libraries</strong> presented real-world challenges.</li>
        <li>Implementing <strong>MVC architecture</strong> taught me to separate View, Model, and Controller responsibilities, which made the application more maintainable and easier to extend later.</li>
        <li>Adapted third-party library to <strong>fix compatibility and deployment issues</strong>.</li>
        <li>Implementing dynamic tables and aspect lists also helped me understand <strong>DOM manipulation and event handling</strong> in depth.</li>
        <li>Focused on clean, maintainable ES6 code and <strong>dynamic rendering</strong>.</li>
      </ul>

     
      <article className="mb-6 px-4 sm:px-6"> 
        <h3 id="limitation" title="Limitation" className="mt-8 text-lg sm:text-xl font-bold sm:tracking-widest uppercase text-sky-900/50 mb-4">Limitations</h3>
      <p> While functional, this version is not responsive. The project was built primarily for desktop usage.</p> 
      </article>
    </article> 

 <article className="h-fit flex flex-col items-center rounded-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.15)] shadow-sky-800/60">
           <ImageSlider images={['/caseStudy/csAstroJS1.png', '/caseStudy/csAstroJS2.png']} sliderHeight="h-xl" />
           <ul className="text-xs text-sky-900/80 text-justify p-4">
             <li>1. Retrograde planets were listed separately next to the chart because the external SVG library couldn’t be modified at that time — this was a pragmatic workaround before I learned to manipulate SVG directly in the React version.</li>
             <li>2. Perfection chart using the SVG Chart library without astro_js planet data. Instead, the active house is calculated from custom input logic and highlighted with my own transparent SVG ‘pizza slice’ overlay.</li>
           </ul>
         </article>
         </div>

    <article id="reflection" title="Reflection & Next Steps"   className="p-5 sm:p-12">
     
      <h2 className="sm:text-2xl text-xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6 text-center">Reflection & Next Step</h2>
      <p className="text-center text-base sm:text-lg">
        This project provided foundational experience in architecture, APIs, and state management in Vanilla JS. Its limitations inspired a React/Next.js version with full responsiveness. Next steps focus on extending the modernized version, while the Vanilla JS project remains a key learning artifact, showcasing my progression from foundational JS skills to advanced frontend development.
      </p>
    </article>

 
      <footer>
        <div className="flex flex-row gap-6 w-full justify-center items-center">
        <Button link="https://liascope.netlify.app/" target="_blank"> Live Demo </Button>
        <Button link='https://github.com/liascope/liascope' bright={true} target="_blank"> GitHub Repo </Button>
      </div>
      
      <section className="mt-8 sm:mt-16 border-t border-sky-700/30 pb-2 pt-8 text-center">
  <h3 className=" font-bold tracking-widest text-sky-900/30 mb-4 uppercase">
    Other Case Studies
  </h3>
  <div className="flex justify-center gap-4 text-teal-700/40 tracking-wider font-semibold text-sm">
 <Link href="/projects/casestudy/LiascopeAstrologyReactNext" className="hover:text-teal-600/60 " target="_blanked">Astrology App - React/Next.js</Link>
    <span className="border-sky-700/30">|</span>
   <Link href="/projects/casestudy/Todoezel" className="hover:text-teal-600/60" target="_blanked" >To-Do List App - React.js</Link>
  </div>
</section>
        </footer>
</section>
</main>
  );
}
