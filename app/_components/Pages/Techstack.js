import { skillIcons, stack } from '@/app/_lib/config'
import ArrowLeft from '../Icons/ArrowLeft'
import IconButton from '../IconButton'

export default function Techstack() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-2 sm:p-4">
      <section className="max-w-6xl mx-auto sm:mt-12 backdrop-blur-lg bg-white/30 rounded-2xl p-4 sm:p-8 shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 uppercase text-sky-900/80 tracking-widest">Tech Stack</h1>
        <p className="text-base sm:text-lg mb-8 text-teal-900">These are the technologies and tools I`ve worked with.</p>
        {Object.entries(stack).map(([category, items]) => (
          <div key={category} className="mb-8  ">
            <h2 className="text-lg sm:text-xl font-bold text-sky-900/60 uppercase tracking-widest mb-6">{category}</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {items.map((item, index) => {
                const Icon = skillIcons[item]
                return (
                  <div
                    key={index}
                    className="flex flex-col text-teal-900/80 hover:text-sky-900/80 justify-center items-center text-center bg-white/40 md:backdrop-blur-sm md:rounded-xl md:shadow hover:scale-105 transition h-20 sm:h-28 w-full p-1"
                  >
                    <Icon className="text-3xl sm:text-4xl mb-2" />
                    <span className="sm:text-sm uppercase text-xs font-semibold">{item}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
        <IconButton link="/projects" icon={ArrowLeft} left={true}>
          Explore Projects
        </IconButton>
      </section>
    </main>
  )
}
