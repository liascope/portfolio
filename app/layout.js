import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import StickyHeader from './_components/StickyHeader'
import { gitHubLink } from './_lib/config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Liascope-Portfolio',
  description: 'Liascope | Zeliha A.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 sm:p-4 sm:tracking-wide">
          <StickyHeader />
          {children}
          <footer className="w-full text-center text-sm py-5 tracking-widest font-semibold text-sky-900/70">
            <p>
              © {new Date().getFullYear()} Liascope ·{' '}
              <Link href={gitHubLink} target="_blank" rel="noopener noreferrer" className=" hover:text-teal-600">
                GitHub
              </Link>
            </p>
          </footer>
        </main>
      </body>
    </html>
  )
}
