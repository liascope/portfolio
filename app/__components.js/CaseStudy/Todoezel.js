import Link from "next/link";
import { nextStep } from "@/app/_lib/config";
import ImageSlider from "../ImageSlider";
import Button from "../Button";
import HeaderCS from "./HeaderCS";
export default function Todoezel() {

  return (<main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 p-4 ">
      <section className="max-w-6xl mx-auto bg-white/30 backdrop-blur-lg rounded-xl p-4 sm:p-8 shadow-2xl text-base sm:text-lg ">
      <HeaderCS img="todoReact">To-Do List App</HeaderCS>
                                      
        <article className="my-2">
          <p className="p-6">
           Designed a simple, friendly interface that keeps daily priorities visible and motivates users through progress tracking:
          </p>
          <ul className="list-disc ml-6 sm:ml-12 space-y-1 sm:space-y-2 text-base">
            <li>Easy access to tasks and notes at a glance</li>
            <li>Prominent “Today’s Tasks” header for due items</li>
            <li>Separate shopping and “Do Later” tasks to reduce clutter.</li>
            <li>Color-coded progress indicators and subtle UX animations.</li>
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
{`/app
├─Layout          → Header,Today's Header,Navigation,Footer
│   ├─ /          → Main page for Todos&Notes
│   ├─ /shop      → Shopping list
│   ├─ /do-later  → Page for saving date-based tasks
│   ├─ /today     → Today's tasks
│   └─ /saved     → Archive for date-based tasks
│
├─_components    → All reusable UI components
│
└─_lib
   ├─ hooks/     → Custom React hooks
   ├─ context/   → Context API for global state
   ├─ config.js  → App configuration
   └─ helpers.js → Utility functions`}
  </pre>
</article>
   <article className="bg-white/40 backdrop-blur-sm rounded-xl p-5 sm:p-10 shadow hover:scale-105 transition">
<ul className="list-disc ml-6 space-y-2">
<h2 id="key-features" title="Key Features" className="sm:text-2xl text-xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Key Features</h2>
  <li>
    <strong>Date-based tasks:</strong> persisted in <code>localStorage</code> and surfaced automatically in Today’s Header when due.
  </li>
  <li>
    <strong>Task type separation:</strong> Todos, Shop, and Do Later lists improve focus and discoverability.
  </li>
  <li>Toggle-List with checkbox/delete modes and a Percent-Tracker for visual progress feedback.</li>
  <li>
    <strong>ToggleList behavior:</strong> click to toggle between checkbox and delete state for quick management.
  </li>
  <li>
    <strong>Bulk delete:</strong> Trash button appears when multiple items are completed (e.g. ≥4).
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
           </div>
        <article className="bg-white/40 backdrop-blur-sm rounded-xl text-sm sm:text-base p-5 sm:p-12 shadow hover:scale-105 transition my-10">
          <ul className="list-disc ml-6 space-y-2">
              <h2 id="architecture" title="Architecture & Tech Decisions" className="text-xl sm:text-2xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Architecture & Tech Decisions</h2>
            <li>
              <strong>React.js + Next.js</strong> — chosen to structure the app into modular components
              and to use Next.js conventions (pages/layouts, routing, error handling) for a scalable,
              production-ready codebase.
            </li>

            <li>
              <strong>Context API + Hooks</strong> — used for global state (date-based tasks and app-wide
              derived state). Context is intentionally lighter than Redux and fits the project scale,
              while hooks manage component-local behaviors.
            </li>

            <li>
              <strong>Custom Hook for localStorage</strong> — encapsulates save/load logic so persistence
              is reusable and components remain focused on UI and behavior rather than storage details.
            </li>

            <li>
              <strong>Tailwind CSS</strong> — utility-first approach allowed rapid, consistent styling and
              mobile-first responsive layout without a bloated stylesheet.
            </li>

            <li>
              <strong>Framer Motion</strong> — subtle, performant animations (header toggle, modal) that
              improve perceived responsiveness and user motivation.
            </li>
<li>
  <strong>Reusable UI Components</strong> - modular Buttons, Input+Button combos, ToggleList items, and Percent-Tracker improve consistency, reduce duplication, and support scalable development.
</li>

            <li>
              <strong>Custom SVG icons</strong> — handcrafted icons reduce external dependencies,
              keep bundle size small, and allow precise visual alignment with the app’s friendly brand.
            </li> 
            <li><strong>Deployment</strong> – Hosted on Vercel for fast global delivery and automatic builds.</li>
          </ul>

          <div id="state-management" title="State Management & Data Flow" className="my-10">
            <h2 className="text-lg sm:text-xl font-semibold uppercase text-sky-900/60 tracking-widest">State Management</h2>
            <p className= "mt-2">
              Global state (Context + localStorage) stores date-based tasks so they can be surfaced
              across pages. Local state (useState/useEffect via a custom hook) handles notes and shop items
              that are primarily relevant to a single page. Derived state powers the Today’s Header by
              filtering global tasks by due date.
            </p>
            </div>
          </article>
       
  <div  className="flex flex-col md:flex-row md:items-start text-base gap-5 sm:gap-10 my-10">
   <article className="bg-white/40  backdrop-blur-sm rounded-xl p-5 sm:p-10 shadow hover:scale-105 transition flex-1">
      <ul className="list-disc ml-6 space-y-2">
       <h2 id="challenges" title="Challenges & Learnings" className="text-xl sm:text-2xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">Challenges & Learnings</h2>
      <li>
        <strong>State Architecture:</strong> Designed a robust combination of global (Context + localStorage) and component-local state, enabling conditional rendering and scalable feature expansion.
      </li>
      <li>
        <strong>Reusable Components:</strong> Built flexible UI components (toggle, delete, input handling, progress tracker) to reduce duplication and maintain consistency across the app.
      </li>
      <li>
        <strong>Feature Enhancement:</strong> Refactored from <Link href="https://github.com/liascope/todoezel" target="_blank" className="font-semibold tracking-wider text-sky-900/50 cursor-pointer hover:text-teal-700">
                         TodoeZel - Vanilla JS
                        </Link> to React/Next.js while adding new functionality like the Trash button, improving both UX and maintainability.
      </li>
      <li>
        <strong>Custom SVG Icons:</strong> Replaced inconsistent emojis and PNGs with handcrafted SVGs, solving technical and licensing issues while learning scalable icon design.
      </li>
      <li>
        <strong>Iterative Refinement:</strong> Integrated polishing, code cleaning, and performance optimization into the development cycle, ensuring production-ready, maintainable code.
      </li>
    </ul>
</article>
 <article className="flex-1 flex flex-col items-center rounded-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.15)] shadow-sky-800/60">
      <ImageSlider images={['/caseStudy/csTodo1.png', '/caseStudy/csTodo2.png']} sliderHeight="h-xl" />
      <p className="text-xs text-sky-900/80 text-justify p-4">
        Comparison of JS vs React/Next.js versions. Changes include updated design, custom SVG icons, and Trash button feature.
      </p>
    </article>
  </div>
         <article className="my-10 px-5 sm:px-12 text-sm sm:text-base">
      <h2 id="reflection" title="Reflection & Next Steps"  className="sm:text-2xl text-xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6 text-center">Reflection & Next Step</h2>
      <p className="mb-4 text-center text-base sm:text-lg">
            ToDoeZel is a practical case study in state architecture, reusability, and user-focused design.
            teaching me how to iteratively break down features into small, reusable components and balance technical architecture with usability goals. The project also highlighted the importance of thoughtful state management and persistence strategies.</p>     
            <h3 className="text-center font-bold tracking-widest uppercase text-sky-900/50 my-6">Planned enhancements include:</h3>
              <ul className="text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {nextStep.todoezel.map((step,i)=>{return (<li key={i} className="bg-white/40 backdrop-blur-sm rounded-xl shadow text-center flex items-center  px-5 py-2 text-teal-900/40 tracking-widest font-bold hover:scale-105 transition">{step}</li>)})}
              </ul>
        </article>

   <footer>
        <div className="flex flex-row gap-6 w-full justify-center items-center">
        <Button link="https://todoezel-react.vercel.app/" target="_blank"> Live Demo </Button>
        <Button link='https://github.com/liascope/todoezel-react' bright={true} target="_blank"> GitHub Repo </Button>
      </div>
      <section className="mt-8 sm:mt-16 border-t border-sky-700/30 pb-2 pt-8 text-center">
  <h3 className=" font-bold tracking-widest text-sky-900/30 mb-4 uppercase">
    Other Case Studies
  </h3>
  <div className="flex justify-center gap-4 text-teal-700/40 tracking-wider font-semibold text-sm">
 <Link href="/projects/casestudy/LiascopeAstrologyReactNext" className="hover:text-teal-600/60 " target="_blanked">Astrology App - React/Next.js</Link>
    <span className="border-sky-700/30">|</span>
   <Link href="/projects/casestudy/LiascopeAstrologyJS" className="hover:text-teal-600/60" target="_blanked" >Astrology App - Vanilla JS</Link>
  </div>
</section>
        </footer>

      </section>
      </main>

  );
}
