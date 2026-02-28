import Link from "next/link";
import { nextStep, projects } from "@/app/_lib/config";
import ImageSlider from "../ImageSlider";
import Button from "../Button";
import HeaderCS from "./HeaderCS";
export default function Todoezel() {

  return (<main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 p-4 ">
      <section className="max-w-6xl mx-auto bg-white/30 backdrop-blur-lg rounded-xl p-4 sm:p-8 shadow-2xl text-base sm:text-lg ">
      <HeaderCS img="todoReact">Task Manager (React / Redux Toolkit)</HeaderCS>
                                      
        <article className="my-2">
          <p className="p-6">
           A task management application focused on reducing cognitive load by separating daily priorities, long-term tasks, and shopping lists, supported by visual progress tracking and subtle UX feedback. Initially built in Vanilla JavaScript to validate core functionality, the app was refactored into React.js with Redux to become production-ready, scalable, and maintainable
          </p>
          <ul className="list-disc ml-6 sm:ml-12 space-y-1 sm:space-y-2 text-base">
            <li>Quick overview of today’s due tasks.</li>
            <li>Separate lists for shopping and long-term tasks.</li>
            <li>Progress indicators and subtle UX animations.</li>
          </ul>
         </article>

<div className="flex flex-col min-[1750px]:flex-row gap-10 sm:mt-0 mt-5 text-sm sm:text-base items-center">
<article
  className="bg-white/40 backdrop-blur-sm rounded-xl shadow hover:scale-[1.02] transition-all 
             w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 
             max-w-4xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10"
>
  <h2
    id="app-structure"
    title="App Structure & Pages"
    className="text-xl sm:text-2xl font-bold tracking-widest uppercase text-sky-900/60 mb-6 text-center sm:text-left"
  >
    App Structure & Pages
  </h2>

  <pre className="bg-gray-100 p-3 rounded-md text-xs sm:text-sm overflow-x-auto">
{`/src
├─ lib
|  ├─ config       → Shared configuration, constants, helpers
|  └─ useStorage   → Reusable LocalStorage persistence hook
└ components
   ├─ app
   │   ├─ store          → Redux store configuration
   │   └─ router         → React Router setup
   │
   ├─ layout
   │   ├─ AppLayout      → Main layout wrapper
   │   ├─ ErrorBoundary  → Global error handling
   │   ├─ Header         → App header
   │   ├─ HeaderToday    → Displays today's tasks
   │   ├─ Navigation     → Navigation bar
   │   └─ ModalContent   → Reusable modal UI
   │
   ├─ pages
   │   ├─ DoLater        → Date-based tasks scheduling
   │   ├─ doLaterSlice   → Redux slice for date-based tasks
   │   ├─ SavedTasks     → Archived date-based tasks
   │   ├─ TodaysTasks    → Tasks due today
   │   └─ todoAndShop/
   │       └─ TodoShop   → To-do & shopping list
   │
   └─ ui
       ├─ Button
       ├─ ButtonQuery
       ├─ ToggleList
       ├─ Confirm
       ├─ Spinner
       ├─ Percent
       ├─ NotFound
       └─ NaviCons/     → Custom SVG icons`}
</pre>

</article>
 <section>
  <h4 className="sm:text-xl text-lg font-bold sm:tracking-widest uppercase text-sky-900/50 mb-6 text-center" >
    Project Versions
  </h4>

  <div className="grid sm:grid-cols-1 gap-6">
   
    <div className="flex flex-col p-6 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="flex items-center flex-row justify-between mb-4">
        <p className="font-bold tracking-widest uppercase text-teal-900/60">Vanilla JS</p>
        <span className="text-xs font-semibold bg-sky-200/30 text-sky-900/60 px-2 py-1 rounded-full">v1.0</span>
      </div>
      <div className="flex flex-row gap-4">
        <Link
          href="http://todoezel.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-lg bg-teal-700/80 text-white text-sm font-semibold hover:rounded-sm hover:bg-teal-600 transition"
        >
          Live Demo
        </Link>
        <Link
          href="https://github.com/liascope/todoezel"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-lg border border-teal-800/80 text-teal-800/80 text-sm font-semibold hover:rounded-sm hover:text-teal-600/80 transition"
        >
          GitHub
        </Link>
      </div>
    </div>
    <div className="flex flex-col p-6 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-between mb-4">
        <p className="font-bold tracking-widest uppercase text-teal-900/60">React.js</p>
        <span className="text-xs font-semibold bg-sky-200/30 text-sky-900/60 px-2 py-1 rounded-full">v2.0</span>
      </div>
      <div className="flex gap-4">
        <Link
          href={projects[1].link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-lg bg-teal-700/80 text-white text-sm font-semibold hover:rounded-sm hover:bg-teal-600 transition"
        >
          Live Demo
        </Link>
        <Link
          href={projects[1].github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-lg border border-teal-800/80 text-teal-800/80 text-sm font-semibold hover:rounded-sm hover:text-teal-600/80 transition"
        >
          GitHub
        </Link>
      </div>
    </div>
  </div>
   <article className="p-5 mt-10">
<ul className="list-disc ml-6 space-y-2">
<h2 id="key-features" title="Key Features" className="sm:text-2xl text-xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Key Features</h2>
  <li>
    <strong>Date-based tasks:</strong> automatically surfaced in Today’s Header when due.
  </li>
  <li>
    <strong>Task type separation:</strong> Todos, Shop, Todays Tasks and Do Later lists to reduce clutter.
  </li>
  <li>
    <strong>ToggleList behavior:</strong> click to toggle between checkbox and delete state for quick management.
  </li>
  <li>
    <strong>Bulk delete:</strong> for completed tasks.
  </li>
  <li>
    <strong>Progress tracker:</strong> color-coded to motivate users visually.
  </li>
  <li>
    <strong>Onboarding modal:</strong> explains primary app flows for first-time users.
  </li>
  <li>
    <strong>Responsive design:</strong> mobile-first layout with subtle UI animations for a polished experience.
  </li>
</ul>
    </article>
    </section> 
           </div>
        <article className="bg-white/40 backdrop-blur-sm rounded-xl text-sm sm:text-base p-5 sm:p-12 shadow hover:scale-105 transition my-10">
          <ul className="list-disc ml-6 space-y-2">
              <h2 id="architecture" title="Architecture & Tech Decisions" className="text-xl sm:text-2xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Architecture & Tech Decisions</h2>
          <li> 
           <strong>React.js</strong> — for a modular, component-driven architecture with clear separation of concerns.
         </li>
         <li>
         <strong>React Router</strong> — for declarative client-side routing and maintainable page structure.
       </li>
        <li>
        <strong>Redux Toolkit</strong> — for predictable global state management of date-based and derived data.
         </li>

            <li>
              <strong>Custom Hook for localStorage</strong> — to encapsulate persistence logic and keep components UI-focused.
            </li>

            <li>
              <strong>Tailwind CSS</strong> — for rapid, consistent, mobile-first styling.
            </li>
            <li>
              <strong>Framer Motion</strong> — for subtle, performant animations improving perceived responsiveness.
            </li>
            <li>
              <strong>Custom SVG icons</strong> — to reduce dependencies and ensure visual consistency.
            </li> 
            <li><strong>Vite</strong> - for fast development and optimized production builds.</li>
            <li><strong>Deployment</strong> – via Vercel with automated builds and global delivery.</li>
          </ul>

          <div id="state-management" title="State Management & Data Flow" className="my-10">
            <h2 className="text-lg sm:text-xl font-semibold uppercase text-sky-900/60 tracking-widest">State Management</h2>
           <p className="mt-2">
  Date-based tasks are handled via <strong>global state (Redux Toolkit)</strong> and persisted in LocalStorage using <code>store.subscribe()</code>, making them available across multiple pages. Page-specific data such as Todoes and Shop items use <strong>local state with a custom <code>useStorage</code> hook</strong> for LocalStorage persistence. Derived state computes Today’s Header by filtering global tasks by the current date.
</p>

            </div>
          </article>
       
  <div  className="flex flex-col md:flex-row md:items-start text-base gap-5 sm:gap-10 my-10">
   <article className="bg-white/40  backdrop-blur-sm rounded-xl p-5 sm:p-10 shadow hover:scale-105 transition flex-1">
      <ul className="list-disc ml-6 space-y-2">
       <h2 id="challenges" title="Challenges & Learnings" className="text-xl sm:text-2xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Challenges & Learnings</h2>
      <li>
        Designing a balanced <strong>state architecture</strong> combining global and local state.
      </li>
      <li>
        Building <strong>reusable UI components</strong> to reduce duplication and improve consistency
      </li>
      <li>
        Migrating from <Link href="https://github.com/liascope/todoezel" target="_blank"  rel="noopener noreferrer" className="font-semibold tracking-wider text-sky-900/50 cursor-pointer hover:text-teal-700"> Vanilla JS</Link>  to React with Redux Toolkit highlighted the benefits of predictable state management and component-based architecture for<strong> scaling features and improving UX</strong>.
      </li>
      <li>Replacing external assets with <strong>custom SVG icons</strong> to solve technical and licensing issues</li>
    </ul>
</article>
 <article className="flex-1 flex flex-col items-center rounded-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.15)] shadow-sky-800/60">
      <ImageSlider images={['/caseStudy/csTodo1.png', '/caseStudy/csTodo2.png']} sliderHeight="h-xl" />
      <p className="text-xs text-sky-900/80 text-justify p-4">
        Comparison of JS vs React.js versions. Changes include updated design, custom SVG icons, and Trash button feature.
      </p>
    </article>
  </div>
         <article className="my-10 px-5 sm:px-12 text-sm sm:text-base">
      <h2 id="reflection" title="Reflection & Next Steps"  className="sm:text-2xl text-xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6 text-center">Reflection & Next Step</h2>
      <p className="mb-4 text-center text-base sm:text-lg">
          This project strengthened my understanding of frontend architecture, state management, and reusable component design. It reinforced the importance of balancing technical structure with user-focused design.</p>     
            <h3 className="text-center font-bold tracking-widest uppercase text-sky-900/50 my-6">Planned enhancements include:</h3>
              <ul className="text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {nextStep.todoezel.map((step,i)=>{return (<li key={i} className="bg-white/40 backdrop-blur-sm rounded-xl shadow text-center flex items-center  px-5 py-2 text-teal-900/40 tracking-widest font-bold hover:scale-105 transition">{step}</li>)})}
              </ul>
        </article>

   <footer>
        <div className="flex flex-row gap-6 w-full justify-center items-center">
        <Button link="https://todoezel-reactredux.vercel.app/" target="_blank"> Live Demo </Button>
        <Button link='https://github.com/liascope/todoezel-reactredux' bright={true} target="_blank"> GitHub Repo </Button>
      </div>
      <section className="mt-8 sm:mt-16 border-t border-sky-700/30 pb-2 pt-8 text-center">
  <h3 className=" font-bold tracking-widest text-sky-900/30 mb-4 uppercase">
    Other Case Studies
  </h3>
    <div className="flex justify-center gap-4 text-teal-700/40 tracking-wider font-semibold text-sm">
 <Link href="/projects/casestudy/Daycare" className="hover:text-teal-600/60 " target="_blanked" rel="noopener noreferrer" >Daycare App - Fullstack-Next.js</Link>
  </div>
  <div className="flex justify-center gap-4 text-teal-700/40 tracking-wider font-semibold text-sm">
 <Link href="/projects/casestudy/LiascopeAstrologyReactNext" className="hover:text-teal-600/60 " target="_blanked" rel="noopener noreferrer"  >Liascope Astrology - React/Next.js</Link>
  </div>
</section>
        </footer>

      </section>
      </main>

  );
}
