'use client'
import { motion, AnimatePresence} from "framer-motion";
import LearningIcon from "../Icons/LearningIcon";
import { useState } from "react";
import Workflow from "./Workflow";
import Seperation from "../Seperation";

export default function About() {
  const [open, setOpen] = useState(false)

  return ( <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 p-2 sm:p-4">
      <section className="max-w-7xl mx-auto sm:mt-12 backdrop-blur-lg bg-white/30 rounded-2xl p-4 sm:p-10 shadow-xl">
        <h1 className="sm:text-3xl text-2xl uppercase font-bold mb-6 sm:tracking-wider text-sky-900/80">About</h1>
      <article className="sm:text-lg text-sm flex flex-col gap-6">
  <p>
    I started my professional journey studying law, where I developed strong analytical thinking, structured problem-solving, and discipline.
  </p>
  <p>
    Over time, however, I realized that I was seeking creativity, innovation, and technology alongside a structured workflow. Rather than switching fields impulsively, I made a conscious long-term decision to invest my time in a career that truly fits me. Combining my strengths and interests — analytical thinking, structured workflow, curiosity about technology, interactive digital experiences, and a fascination for how complex systems work behind the scenes — naturally led me to code.
  </p>
  <p>
    Programming brings together logic, structure, creativity, and innovation — exactly the balance I was looking for. Since mid-2023, I’ve been fully dedicated to frontend development, focusing on <strong className="text-teal-900/60 tracking-widest">Vanilla JavaScript, React.js, Next.js</strong>, and modern web technologies through self-directed learning and practical projects. My portfolio projects are the tangible outcome of this learning phase, emphasizing clean architecture, reusable components, and user-centered design.
  </p>
  <p>
    Click below to explore more about my coding workflow and projects.
  </p>
</article>

           
          <div
        onClick={() => setOpen(!open)}
        className="flex flex-row items-center justify-center w-full text-teal-700/60 hover:text-teal-600/70 transition-all hover:tracking-wider cursor-pointer uppercase tracking-widest font-bold my-10"
      >
        {open ? "" : "Coding & Workflow"}
        {!open && <div className="h-8 flex items-center"><Seperation/><LearningIcon/></div>}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{
              duration: 0.6,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="overflow-hidden w-full"
          >
           <Workflow />
          </motion.div>
        )}
      </AnimatePresence>
      </section>
      </main>
  );
}
