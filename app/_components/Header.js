'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { navLinks } from '../_lib/config'
import Link from 'next/link'

export default function Header() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = navLinks.map(({ id }) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-120px 0px -30% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-8xl items-center justify-between border-b border-white/10 bg-black/[0.08] px-4 py-3 shadow-lg backdrop-blur-2xl sm:px-6">
      <Link href="#top" aria-label="Liascope" className="relative sm:h-18 sm:w-28 h-14 w-24 ">
        <Image src="/logo.png" alt="Liascope" fill priority className="object-contain saturate-55 rounded-full p-1" sizes="96px" />
      </Link>

      <nav className="flex items-center gap-1 sm:gap-2">
        {navLinks.map(({ label, id }) => {
          return (
            <Link
              key={id}
              href={`#${id}`}
              className={`relative rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-wider transition-colors sm:px-4 sm:text-xs ${
                activeSection === id ? 'text-white' : 'text-neutral-500 hover:text-neutral-200'
              }`}
            >
              {label}

              <span
                aria-hidden="true"
                className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-violet-500 transition-all duration-300 ${
                  activeSection === id ? 'w-4 opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
