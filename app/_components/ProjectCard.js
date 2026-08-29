import Link from 'next/link'
import ImageSlider from './ImageSlider'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

export default function ProjectCard({ project, index }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition duration-500 hover:border-violet-500/30 hover:bg-white/[0.045]">
      <div className="relative overflow-hidden border-b border-white/10 bg-neutral-950">
        <ImageSlider images={project.images} />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">0{index + 1}</p>

          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{project.title}</h3>
        </div>

        <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-400 sm:text-base">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium tracking-wide text-neutral-500 transition group-hover:border-white/15 group-hover:text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <div className="flex items-center justify-end gap-5 border-t border-white/10 pt-4">
            <Link
              href={project.link}
              target="_blank"
              className="flex items-center gap-1.5 text-sm font-medium text-white transition hover:text-violet-400"
            >
              Live demo
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>

            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition hover:text-violet-400"
            >
              GitHub
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
