'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navLinks } from '../_lib/config'
import logo from '@/public/favicon.png'

export default function Header() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col rounded-b-2xl shadow-md backdrop-blur-lg px-0 sm:px-3 bg-gradient-to-br from-slate-100/50 to-slate-200/60 mx-auto max-w-7xl">
      <Link href="/" className="w-full flex justify-center">
        <div className="sm:w-40 w-25 relative sm:h-10 h-7 my-4 ">
          <Image
            src={logo}
            alt="Logo"
            quality={100}
            fill
            priority
            className="brightness-80 saturate-100 contain-content"
            sizes="(max-width: 640px) 120px, 200px"
          />
        </div>
      </Link>

      <nav className="sm:text-base text-xs text-sky-900/70 font-bold tracking-wider uppercase flex justify-evenly items-center sm:mb-7 mb-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 pb-1  transition-all ${
                isActive ? 'border-b-2 border-teal-600/50 text-sky-900/80 bold' : 'border-b-2 border-transparent scale-95 hover:border-sky-900/50'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
