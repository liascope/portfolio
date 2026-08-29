import ActionLink from '../ActionLink'
import Link from 'next/link'
import { gitHubLink } from '@/app/_lib/config'

export default function Hero() {
  return (
    <section id="top" className="flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">Frontend Developer</p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-8xl">
            Building modern web
            <br />
            <span className="text-neutral-500">interfaces.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            I build web and mobile applications with React, TypeScript and Next.js, with a focus on clean structure, responsive design and thoughtful
            user interfaces.
          </p>

          <p className="mt-4 text-sm text-neutral-500">
            You can find my work under{' '}
            <Link
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-violet-500 transition hover:text-violet-400"
            >
              Liascope
            </Link>{' '}
            on GitHub.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ActionLink href="#projects">View projects</ActionLink>

            <ActionLink href="#contact" variant="secondary">
              Get in touch
            </ActionLink>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-600">
          <span className="h-px w-10 bg-neutral-800" />
          Scroll to explore
        </div>
      </div>
    </section>
  )
}
