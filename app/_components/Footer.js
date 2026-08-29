export default function Footer() {
  return (
    <footer className="mx-auto my-10 max-w-6xl text-center text-xs text-neutral-600">
      © {new Date().getFullYear()} <span className="text-violet-500">Liascope</span>
    </footer>
  )
}
