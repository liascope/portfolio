import Link from 'next/link'
import ImageSlider from '../ImageSlider'
import Image from 'next/image'
import GitHub from '../Icons/GitHub'
import { projects, email, gitHubLink } from '@/app/_lib/config'
import Seperation from '../Seperation'
import IconButton from '../IconButton'
import Mail from '../Icons/Mail'

export default function Projects() {
  return (
    <>
      <h1 className="sm:text-3xl text-2xl font-bold mb-8 uppercase text-sky-900/80 tracking-widest text-center">Projects</h1>
      <div className="grid gap-20 md:gap-10 grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/40 backdrop-blur-sm md:p-6 md:shadow-md hover:scale-[1.02] transition flex flex-col justify-between items-center rounded-2xl"
          >
            <div className="flex items-center w-full min-h-14 sm:min-h-20 md:border-x-2 border-teal-800/20 rounded-2xl px-3 sm:px-4 py-2 mb-2">
              <div className="relative flex-shrink-0 w-20 h-14 sm:w-28 sm:h-18 lg:w-32 lg:h-26">
                <Image
                  src={project.logo}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 64px, (max-width: 1024px) 112px, 128px"
                />
              </div>

              <h2 className="ml-6 flex-1 md:text-lg font-bold uppercase text-sky-900/50 leading-tight break-words">{project.title}</h2>
            </div>
            <p className="text-sm mb-4 px-1 md:px-4 text-center">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-2 text-xs mb-6">
              {project.tech.map((tech, i) => (
                <span key={i} className=" text-white px-2 py-1 rounded-full bg-sky-900/60 tracking-wide uppercase font-semibold">
                  {tech}
                </span>
              ))}
            </div>

            <ImageSlider images={project.images || []} />

            <div className="flex items-center my-6 text-teal-700/80 cursor-pointer md:text-base text-xs sm:tracking-wide font-bold">
              <Link href={project.link} target="_blank" className="transition-all hover:scale-95 px-1 hover:text-teal-600">
                View Demo
              </Link>

              <Seperation />
              <Link href={project.github} target="_blank" className="transition-all hover:scale-95 px-1 hover:text-teal-600">
                GitHub Repo
              </Link>
            </div>
          </div>
        ))}
        <div className="border border-dashed rounded-2xl font-semibold flex flex-col gap-1 items-center text-teal-800/70 hover:text-sky-900/70 justify-center hover:bg-stone-50 transition p-2 ">
          <GitHub size="w-15 h-15" />
          <Link href={gitHubLink} target="_blank">
            See more on GitHub
          </Link>
        </div>
      </div>
      <IconButton link={email} icon={Mail} left={true}>
        {' '}
        For feedback / collaboration{' '}
      </IconButton>
    </>
  )
}
