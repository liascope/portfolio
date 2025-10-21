'use client'
import { motion, AnimatePresence} from "framer-motion";
import LearningIcon from "../Icons/LearningIcon";
import { useState } from "react";
import LearningPhilosophy from "./LearningPhilosophy";
import Seperation from "../Seperation";
export default function About() {
  const [open, setOpen] = useState(false)

  return ( <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 p-2 sm:p-4">
      <section className="max-w-6xl mx-auto sm:mt-12 backdrop-blur-lg bg-white/30 rounded-2xl p-4 sm:p-10 shadow-xl">
        <h1 className="sm:text-3xl text-2xl uppercase font-bold mb-6 sm:tracking-wider text-sky-900/80">About</h1>
        <article className="sm:text-lg text-sm flex flex-col gap-6">
        <p>
      I began my professional journey studying law, where I developed strong analytical thinking, discipline, and attention to detail. Yet, I soon realized that while law sharpened my logic, it left little room for creativity and innovation — two things I deeply value.
        </p>
        <p>
Long before my studies, I was fascinated by psychological astrology — not as a belief system, but as a way to analyze human patterns and symbolic structures. It strengthened my curiosity about systems, logic, and the connection between abstract thinking and real-life meaning.
        </p>
        <p>
       That curiosity eventually drew me toward physics (astrophysics), where I took my first serious look at programming — an essential tool for modeling and problem-solving in science. I was immediately intrigued by how coding merges structure and imagination — logic and creativity in perfect balance.
        </p>
        <p>Since I didn’t see myself in a traditional legal career and was searching for a path that truly fits me, I decided to gain hands-on experience in coding. I gave myself a focused three-month period to learn and build — and by the end of it, I knew I had found what I was looking for. Since then, I’ve been coding with the same motivation, curiosity, and excitement I felt from day one.</p>
         <p>Since mid-2023, I’ve been fully dedicated to learning frontend development, mastering <strong className="text-teal-900/60 tracking-widest"> Vanilla JS, React, Next.js</strong> and other modern web technologies through self-directed study and practical projects.</p>
          <p>For me, programming isn’t just a skill — it’s a way to continuously learn, build, and turn ideas into functional and impactful solutions.</p>
           </article>
           
          <div
        onClick={() => setOpen(!open)}
        className="flex flex-row items-center justify-center w-full text-teal-700/60 hover:text-teal-600/70 transition-all hover:tracking-wider cursor-pointer uppercase tracking-widest font-bold my-10"
      >
        {open ? "" : "Learning Philosophy"}
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
           <LearningPhilosophy />
          </motion.div>
        )}
      </AnimatePresence>
      </section>
      </main>
  );
}
