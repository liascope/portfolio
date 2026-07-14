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
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/40 backdrop-blur-sm rounded-md p-6 shadow hover:scale-[1.02] transition flex flex-col justify-between items-center"
          >
            <div className="flex flex-row items-center justify-start w-full h-10 sm:h-20 border-x-2 rounded-2xl border-teal-800/20 mb-2 pl-2">
              <div className="relative w-20 sm:w-35 h-full mr-2">
                <Image
                  src={project.logo}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 120px, 200px"
                />
              </div>
              <h2 className="sm:text-lg flex-1 text-md font-bold uppercase text-sky-900/50">{project.title}</h2>
            </div>
            <p className="text-sm mb-4 px-4 text-center">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-2 text-xs mb-6">
              {project.tech.map((tech, i) => (
                <span key={i} className=" text-white px-2 py-1 rounded-full bg-sky-900/60 tracking-wider uppercase font-semibold">
                  {tech}
                </span>
              ))}
            </div>

            <ImageSlider images={project.images || []} />

            <div className="flex items-center my-6 text-teal-700/80 cursor-pointer sm:text-base text-xs sm:tracking-widest font-bold">
              {project.caseStudy && (
                <>
                  <Link href={project.caseStudy} className="transition-all hover:scale-95 px-1 hover:text-teal-600">
                    View Case Study
                  </Link>
                  <Seperation />
                </>
              )}
              {project.link && (
                <Link href={project.link} target="_blank" className="transition-all hover:scale-95 px-1 hover:text-teal-600">
                  View Demo
                </Link>
              )}
              {project.caseStudy && project.link && <Seperation />}
              <Link href={project.github} target="_blank" className="transition-all hover:scale-95 px-1 hover:text-teal-600">
                GitHub Repo
              </Link>
            </div>
          </div>
        ))}
        <div className="border border-dashed rounded-md font-semibold flex flex-col gap-1 items-center text-teal-800/70 hover:text-sky-900/70 justify-center hover:bg-stone-50 transition p-2">
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
