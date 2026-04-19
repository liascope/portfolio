import GitHubRepos from "../GitHubRepos";
import IconButton from "../IconButton";
import ArrowRight from "../Icons/ArrowRight";


export default function About() {
  
  return ( <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 p-2 sm:p-4">
      <section className="max-w-7xl mx-auto sm:mt-12 backdrop-blur-lg bg-white/30 rounded-2xl p-4 sm:p-10 shadow-xl">
        <h1 className="sm:text-3xl text-2xl uppercase font-bold mb-6 sm:tracking-wider text-sky-900/80">About</h1>
<article className="sm:text-lg text-sm flex flex-col gap-6">
  <p>
    I began my professional path studying law, where I developed analytical thinking, structured reasoning, and disciplined problem-solving. These skills continue to guide how I approach software development today.
  </p>

  <p>
    Since mid-2023, I have been fully focused on frontend development, building applications with <strong className="text-teal-900/60 tracking-widest">JavaScript, React.js, and Next.js</strong>. My transition into tech was intentional and long-term — driven by a fascination with interactive systems and a desire to understand how complex applications work end to end.
  </p>

  <p>
   I approach coding with a focus on clarity, predictable state management, and maintainable architecture, designing reusable components, structuring data thoughtfully, and integrating APIs in a way that keeps applications scalable and easy to reason about.
  </p>

  <p>
      This portfolio showcases applications I designed and built from the ground up, demonstrating deliberate architectural decisions, structured state management, and user-focused interfaces. Each project reflects my emphasis on clean, adaptable code as complexity grows.
  </p>
</article>
   <div className="text-center sm:text-lg text-sm my-20">
    For a closer look at my projects and implementation decisions, explore my GitHub repositories below.
  </div>

  <GitHubRepos />
  <IconButton link="/techstack" icon={ArrowRight}>
    Technologies and tools I’ve worked with
  </IconButton>
      </section>
      </main>
  );
}
