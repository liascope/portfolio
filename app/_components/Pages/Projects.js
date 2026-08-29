import { projects } from '../../_lib/config'
import ProjectCard from '../ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 flex items-center min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">03 — Projects</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Selected work</h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-neutral-500">
            Selected projects exploring frontend architecture, APIs, state management and responsive interfaces.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
