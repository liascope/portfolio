'use client'

import { useState } from 'react'

export default function ChallengesLearnings({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <section className="sm:px-10 px-1 my-15 w-full" id="challenges" title="Challenges & Learnings">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-3 text-teal-800/70 hover:text-teal-700 transition-all"
      >
        <span className="uppercase text-sm font-semibold tracking-[0.2em]">Challenges & Learnings</span>

        <span className="text-lg font-light transition-transform duration-200">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <article
          className="
            mt-6
            border-l-2 border-teal-800/20
            sm:pl-6 pl-3
            text-sm md:text-base
            leading-relaxed
            animate-in fade-in duration-300
          "
        >
          {children}
        </article>
      )}
    </section>
  )
}
