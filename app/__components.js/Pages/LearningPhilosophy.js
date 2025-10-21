
import Image from "next/image";
import ArrowRight from "../Icons/ArrowRight";
import IconButton from "../IconButton";
import GitHubRepos from "../GitHubRepos";

export default function LearningPhilosophy() {
  return (
      <section>
      <h2 className="sm:text-2xl text-xl mb-6 text-sky-900/60 uppercase font-bold sm:tracking-widest">My Coding & Learning Philosophy</h2>

        <p className="sm:text-lg text-sm mb-6">
          I approach frontend development with a focus on planning, clarity, and scalable architecture. Over the past years, I’ve refined how I structure projects, manage state, and integrate complex functionality, always emphasizing maintainable and reusable code.
        </p>

     <section className="gap-10 flex flex-col sm:flex-row items-center sm:text-base text-sm">
   <article className="bg-white/40 backdrop-blur-sm rounded-xl p-2 sm:p-6 shadow hover:scale-105 transition">
        <ul className="list-disc ml-6 mb-4 space-y-2 ">
           <h3 className="sm:text-xl text-lg mb-6 text-sky-900/50 uppercase font-bold sm:tracking-widest">Planning & Architecture</h3>
          <li>Carefully design state structure: choosing between objects, arrays, and booleans based on use case.</li>
          <li>Differentiate between global and local state, ensuring smooth conditional rendering and proper data flow.</li>
          <li>Plan components before coding: modular, reusable, and flexible through props and hooks.</li>
        </ul>
        </article>
    <article className="bg-white/40 backdrop-blur-sm rounded-xl p-2 sm:p-6 shadow hover:scale-105 transition">
        <ul className="list-disc ml-6 mb-4 space-y-2 ">
           <h3 className="sm:text-xl text-lg mb-6 text-sky-900/50 uppercase font-bold sm:tracking-widest ">Component Design & Reusability</h3>
          <li>Build reusable components with consistent UI but adaptable features.</li>
          <li>Implement global/local state combinations thoughtfully to allow conditional logic without redundancy.</li>
          <li>Use custom hooks for common logic, such as localStorage persistence or API data handling.</li>
        </ul></article>
        </section>
 
        <section className="flex flex-col gap-10 my-10 sm:text-base text-sm">
 <article className="bg-white/40 backdrop-blur-sm rounded-xl p-4 sm:p-12 shadow hover:scale-105 transition" >
        <ul className="list-disc ml-6 mb-4 space-y-2">
            <h3 className="sm:text-xl text-lg mb-6 text-sky-900/50 uppercase font-bold sm:tracking-widest">Coding Progress & Reflection</h3>
               <p className="mb-6">
    Throughout my projects, I’ve refined a development workflow that balances planning, coding, and iterative improvement. Below, I reflect specifically on my learning journey while building apps, including challenges, adjustments, and growth.”
  </p>
    <li>
      Experienced initial “blackouts” at project start – reinforced the importance of thorough planning, architecture design, and state management preparation.
    </li>
    <li>
      Returning to planning phases slowed progress initially, but enabled smoother second coding attempts. Focused on building small, reusable components and combining them systematically.
    </li>
    <li>
      Paused frequently when integrating APIs or external libraries to study documentation. Sometimes required mid-development refactoring to adopt better state management or API strategies.
    </li>
    <li>
      Emphasized final code cleaning and optimization: restructuring components, improving logic, ensuring maintainable and performant code.
    </li>
    <li>
      Iterative approach strengthened both development flow and final product quality, leading to scalable, reliable, and professional applications.
    </li></ul></article>
  <Image
    src="/Progressionchart.png"
    alt="Progression Chart"
    width={800}
    height={400}
    className="w-full h-auto"
  />
<article className="bg-white/40 backdrop-blur-sm rounded-xl p-4 sm:p-12 shadow hover:scale-105 transition" >
        <h3 className="sm:text-xl text-lg mb-6 text-sky-900/50 uppercase font-bold sm:tracking-widest ">Technical Evolution</h3>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Transitioned from Vanilla JS MVC to React.js & Next.js: understanding the underlying architecture made learning faster and deeper.</li>
          <li>Focus on “behind-the-scenes” mechanics (e.g., hydration, blueprint rendering, useEffect lifecycle) to write reliable and predictable code.</li>
          <li>Experience integrating APIs and external libraries, refactoring them to fit the project’s architecture.</li>
          <li>Value iterative planning: analyzing requirements, sketching architecture, then building component by component.</li>
          <li>Prioritize clean, maintainable code and responsive, user-friendly UI.</li> 
          
        </ul>
        </article>
         <p className="sm:text-lg text-sm m-6 ">
       The insights gained from developing applications have shaped my personal coding philosophy, guiding every project I build and ensuring that my applications are not just functional, but thoughtfully designed, scalable, and maintainable. 
       For a closer look at my learning journey, you can browse <strong className="text-teal-900/60 tracking-widest">my GitHub repositories</strong> below.
        </p>
  </section>

  <GitHubRepos/>
<IconButton link="/skills" icon={ArrowRight}>Explore Skills</IconButton>
      </section>
  );
}
