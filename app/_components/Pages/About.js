import GitHubRepos from "../GitHubRepos";
import IconButton from "../IconButton";
import ArrowRight from "../Icons/ArrowRight";


export default function About() {
  
  return ( <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 p-2 sm:p-4">
      <section className="max-w-7xl mx-auto sm:mt-12 backdrop-blur-lg bg-white/30 rounded-2xl p-4 sm:p-10 shadow-xl">
        <h1 className="sm:text-3xl text-2xl uppercase font-bold mb-6 sm:tracking-wider text-sky-900/80">About</h1>



<article className="sm:text-lg text-sm flex flex-col gap-6 mb-20 ">
<p>Frontend developer specializing in <strong className="text-teal-900/60 tracking-widest">React.js and Next.js.</strong> </p>

<p>I build projects from the ground up — from architecture and state management to API integration, authentication, and polished user interfaces — with a strong focus on maintainable code and predictable frontend systems.</p>

<p>Alongside personal projects, I actively explore open-source projects, contribute via GitHub pull requests, and continuously expand my stack by building real-world applications.</p>

<p>Particularly interested in complex interactive interfaces, scalable frontend architecture, and building clean, production-oriented user experiences.</p>
</article>

 <h2 className="text-lg sm:text-xl font-bold text-sky-900/60 uppercase text-center tracking-widest my-6">GitHub Repositories</h2>
  <GitHubRepos />
  <IconButton link="/techstack" icon={ArrowRight}>
    Technologies and tools I’ve worked with
  </IconButton>
      </section>
      </main>
  );
}
