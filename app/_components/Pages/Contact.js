import GitHub from '../Icons/GitHub'
import Mail from '../Icons/Mail'
import Button from '../Button'
import { email, gitHubLink } from '@/app/_lib/config'

export default function Contact() {
  return (
    <>
      <h1 className="sm:text-3xl text-2xl font-bold uppercase text-sky-900/80 tracking-widest mb-6 text-center">Contact</h1>
      <div className="backdrop-blur-lg bg-white/30 rounded-2xl pt-10 px-8 shadow-xl sm:text-lg text-base text-center">
        <p>Interested in working together, have questions, or want to share feedback?</p>
        <p>Feel free to send me an email or connect with me on GitHub.</p>
        <div className="flex justify-center my-6 flex-row gap-2 md:gap-6">
          <Button link={email}>
            <span className="flex flex-row items-center gap-2">
              <Mail />
              E-Mail
            </span>
          </Button>
          <Button link={gitHubLink} target="_blank" bright={true}>
            <span className="flex flex-row items-center gap-2">
              <GitHub size="h-7" /> GitHub
            </span>
          </Button>
        </div>
      </div>
    </>
  )
}
