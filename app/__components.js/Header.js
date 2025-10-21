"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "../_lib/config";
import logo from '@/public/favicon.png'

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <Link href="/">
        <div className="flex justify-center w-full sm:h-15 h-10 my-3">
          <div className="sm:w-60 w-40 relative">
          <Image
            src={logo}
            alt="Logo"
            quality={100}
            fill
            priority
            className="brightness-80 saturate-100 contain-content"
             sizes="(max-width: 640px) 120px, 200px"
          /></div>
        </div>
      </Link>

      <nav className="w-full sm:text-lg text-sm text-sky-900/70 font-bold tracking-widest uppercase max-w-6xl mx-auto px-4 py-4 flex justify-evenly items-center backdrop-blur-lg bg-white/30 rounded-2xl shadow-md sm:mb-7 mb-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 pb-1  transition-all ${
                isActive
                  ? "border-b-2 border-teal-600/50 text-sky-900/80 bold"
                  : "border-b-2 border-transparent scale-95 hover:border-sky-900/50"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
