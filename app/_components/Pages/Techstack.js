import { skillIcons, stack } from '../../_lib/config'

export default function Techstack() {
  return (
    <section id="stack" className="scroll-mt-28 my-80 mx-auto max-w-7xl">
      <div className="mb-14">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">02 — Stack</p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Technologies I work with</h2>
      </div>

      <div className="space-y-12">
        {Object.entries(stack).map(([category, items]) => (
          <div key={category}>
            <h3 className="mb-5 text-sm font-medium uppercase tracking-widest text-neutral-500">{category}</h3>

            <div className="flex flex-wrap sm:gap-3 gap-2">
              {items.map((item) => {
                const Icon = skillIcons[item]

                return (
                  <div
                    key={item}
                    className="group flex sm:h-36 sm:w-36 h-28 w-28 flex-col items-center justify-center sm:gap-3 gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 transition hover:border-violet-500/40 hover:bg-violet-500/[0.04]"
                  >
                    {Icon && <Icon className="sm:h-15 sm:w-15 h-12 w-12 shrink-0 text-neutral-400 transition group-hover:text-violet-400" />}

                    <span className="text-center text-sm text-neutral-300">{item}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
