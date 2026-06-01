import Button from './_components/Button'
export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br  from-slate-100 to-slate-200 text-teal-900/70 p-4">
      <div className="text-center space-y-6 mt-4">
        <h1 className="text-3xl uppercase tracking-widest font-bold my-10">This page could not be found :(</h1>
        <Button link="/">Go Back Home</Button>
      </div>
    </main>
  )
}
