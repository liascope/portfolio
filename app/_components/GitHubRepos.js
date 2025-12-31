import Link from "next/link"
import { reactNextProjects, reactProjects, vanillaJSprojects } from "../_lib/config"
export default function GitHubRepos (){
    return (<article className="flex flex-col items-center justify-center my-6">
 
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 w-full max-w-5xl px-2 sm:px-4">
    {/* React & Next.js */}
    <li className="sm:bg-white/40 sm:backdrop-blur-sm sm:rounded-xl p-3 sm:p-6 sm:shadow transition transform hover:scale-105">
      <h3 className="font-bold mb-4 text-sky-900/30 sm:tracking-widest uppercase sm:text-xl text-lg">
        React.js & Next.js
      </h3>
      <ul className="sm:space-y-2">
        {reactNextProjects.map((project, i) => (
          <li key={i}>
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 sm:text-base text-sm tracking-wide hover:overline">
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>

    {/* React.js */}
    <li className="sm:bg-white/40 sm:backdrop-blur-sm sm:rounded-xl p-3 sm:p-6 sm:shadow transition transform hover:scale-105">
      <h3 className="font-bold mb-4 text-sky-900/30 uppercase sm:tracking-widest sm:text-xl text-lg">
        React.js
      </h3>
      <ul className="sm:space-y-2 ">
        {reactProjects.map((project, i) => (
          <li key={i}>
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 sm:text-base text-sm tracking-wide hover:overline">
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>

    {/* Vanilla JS */}
    <li className="sm:bg-white/40 sm:backdrop-blur-sm sm:rounded-xl p-3 sm:p-6 sm:shadow transition transform hover:scale-105 sm:text-base text-sm">
      <h3 className="mb-4 text-sky-900/30 uppercase font-bold sm:tracking-widest sm:text-xl text-lg">
        Vanilla JS
      </h3>
      <ul className="sm:space-y-2">
        {vanillaJSprojects.map((project, i) => (
          <li key={i}>
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 tracking-wide hover:overline">
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  </ul>
</article>
)}