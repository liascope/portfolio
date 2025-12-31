import Link from 'next/link';
import Button from './_components/Button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 p-4">
      <section className="max-w-4xl mx-auto mt-20 backdrop-blur-lg bg-white/30 rounded-2xl p-10 shadow-xl text-center">
      <h2 className="text-2xl font-bold tracking-widest mb-6 text-sky-900/80">Hi, I'm Zelia</h2>
        <p className="text-lg mb-6">
         I'm Frontend Developer specializing in React.js and Next.js, creating modern web applications that combine clean, maintainable code with thoughtful, user-centered design. <br/>Online, you can find me as <Link href='https://github.com/liascope' target="_blank" rel="noopener noreferrer" className="font-bold text-teal-700 tracking-widest hover:text-teal-600">Liascope.</Link>
        </p>
        <div className="flex justify-center my-10 space-x-6">
         <Button link="/projects">Show Projects</Button>
         <Button link="/contact" bright={true}>Contact</Button>
        </div>
   
      </section>
    </main>
  );
}

  