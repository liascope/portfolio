import Hero from './_components/Pages/Hero'
import About from './_components/Pages/About'
import Techstack from './_components/Pages/Techstack'
import Projects from './_components/Pages/Projects'
import Contact from './_components/Pages/Contact'

export default function Home() {
  return (
    <main className="p-7">
      <Hero />
      <About />
      <Techstack />
      <Projects />
      <Contact />
    </main>
  )
}
