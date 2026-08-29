import ActionLink from '../ActionLink'
import GitHub from '../Icons/GitHub'
import Mail from '../Icons/Mail'
import { email, gitHubLink } from '../../_lib/config'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 flex min-h-screen items-center justify-end">
      <div className="mx-auto w-full max-w-7xl">
        <div className="border-t border-white/10 pt-16 sm:pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">04 — Contact</p>

          <div className="mt-6 flex flex-col gap-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch.</h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg">
                For questions, feedback, collaboration, feel free to reach out.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ActionLink href={email} icon={Mail}>
                E-Mail
              </ActionLink>

              <ActionLink href={gitHubLink} target="_blank" variant="secondary" icon={GitHub}>
                GitHub
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
