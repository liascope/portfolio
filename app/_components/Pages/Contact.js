import GitHub from "../Icons/GitHub";
import Mail from "../Icons/Mail";
import Button from "../Button";
import { email, gitHubLink } from "@/app/_lib/config";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 p-4">
      <section className="max-w-6xl mx-auto mt-20 backdrop-blur-lg bg-white/30 rounded-2xl p-8 shadow-xl text-center">
        <h1 className="sm:text-3xl text-2xl font-bold mb-6 uppercase text-sky-900/80 tracking-widest">Contact</h1>
        <p className="sm:text-lg text-base mb-4">
          Interested in working together, have questions, or want to share feedback?
        </p>
        <p className="sm:text-lg text-base">
          Feel free to send me an email or connect with me on GitHub.
        </p>
          <div className="flex justify-center my-10 space-x-6">
                   <Button link={email}><span className="flex flex-row items-center gap-2"><Mail/>E-Mail</span></Button>
                   <Button link={gitHubLink} target="_blank" bright={true}><span className="flex flex-row items-center gap-2"><GitHub size='h-7'/> GitHub</span></Button>
                  </div>
      </section>
    </main>
  );
}
