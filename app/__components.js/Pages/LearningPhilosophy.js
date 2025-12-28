import { reflectionEvolution } from "@/app/_lib/config";
import ArrowRight from "../Icons/ArrowRight";
import IconButton from "../IconButton";
import GitHubRepos from "../GitHubRepos";

export default function LearningPhilosophy() {
  return (
      <section>
  <h2 className="sm:text-2xl text-xl mb-6 text-sky-900/60 uppercase font-bold sm:tracking-widest text-center">
    Coding & Workflow
  </h2>

  <p className="sm:text-lg text-sm mb-10">
    I approach frontend development with a strong focus on planning, clarity, and scalable architecture.
    Over time, I’ve refined how I structure projects, manage state, and integrate complex functionality,
    with the goal of building clean, maintainable, and reusable solutions.
  </p>

  <section className="gap-10 flex flex-col items-center sm:text-base text-sm ">

    <article className="bg-white/40 backdrop-blur-sm rounded-xl p-2 sm:p-6 shadow hover:scale-105 transition">
      <h3 className="sm:text-xl text-lg mb-6 text-sky-900/50 uppercase font-bold sm:tracking-widest text-center ">
        Core Practices
      </h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Design state structures deliberately, choosing between local and global state to ensure clear data flow.</li>
        <li>Build modular, reusable components with consistent UI and flexible props and hooks.</li>
        <li>Encapsulate shared logic in custom hooks, such as API handling and client-side persistence.</li>
        <li>Integrate APIs and third-party libraries thoughtfully, aligning them with the overall project architecture.</li>
        <li>Focus on clean code, predictable behavior, and responsive, user-centered interfaces.</li>
      </ul>
    </article>
<article className="flex flex-col items-center my-3 sm:my-6">
    <div className='text-sky-900/50 sm:text-xl text-base font-bold uppercase sm:tracking-widest text-center transition-all duration-500 ease-in-out flex flex-row justify-between w-full sm:w-[80%] px-7 sm:px-16 pb-6' ><span>Reflection</span> <span>Technical Evolution </span></div>
<ul className="list-none space-y-4">
  {reflectionEvolution.map((item, index) => (
    <li key={index} className="grid grid-cols-[1fr_auto_1fr] items-scretch px-6 sm:px-16">
      <span className="bg-white/40 backdrop-blur-sm rounded-xl flex flex-col justify-center p-2 sm:p-4 shadow hover:scale-105 transition">{item.reflection}</span>
      <div className="text-sky-900/40 flex flex-col justify-center p-3 sm:p-7"><ArrowRight></ArrowRight></div>
      <span className="bg-white/40 backdrop-blur-sm rounded-xl flex flex-col justify-center p-2 sm:p-4 shadow hover:scale-105 transition">{item.evolution}</span>
    </li>
  ))}
</ul>
</article>
  </section>
  <div className="text-center sm:text-lg text-sm my-16">
       For a closer look at my projects and development journey, visit <strong className="text-teal-900/60 tracking-widest">my GitHub repositories</strong> below.
        </div>
  <GitHubRepos/>
<IconButton link="/techstack" icon={ArrowRight}>Explore technologies and tools I`ve worked with</IconButton>
      </section>
  );
}


