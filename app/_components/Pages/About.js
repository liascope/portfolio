export default function About() {
  return (
    <section id="about" className="scroll-mt-28 flex">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">01 — About</p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A frontend-focused developer</h2>
        </div>

        <div className="space-y-6 text-base leading-8 text-neutral-400 sm:text-lg">
          <p>I build projects from the ground up with a focus on clean frontend structure, reusable components, and polished user interfaces.</p>

          <p>
            My work spans React, TypeScript, Next.js and React Native, including state management, API integration, authentication, responsive design
            and full-stack applications.
          </p>

          <p>I learn by building real applications and continuously improving how I structure, test and maintain them.</p>
        </div>
      </div>
    </section>
  )
}
