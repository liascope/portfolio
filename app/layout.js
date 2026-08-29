import './globals.css'
import Header from './_components/Header'
import Footer from './_components/Footer'

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
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
