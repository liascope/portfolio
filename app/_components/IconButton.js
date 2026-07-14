import Link from 'next/link'
export default function IconButton({ link, children, left = false, icon: Icon, target = '_self' }) {
  return (
    <Link href={link} target={target} className="w-full flex items-center justify-center">
      <div
        className={`text-center sm:text-base text-xs flex items-center font-bold uppercase tracking-widest bg-white/40 backdrop-blur justify-center hover:bg-white/20 gap-2 text-teal-700/60 shadow-xl hover:text-teal-600/70 transition-all hover:tracking-wider w-fit cursor-pointer sm:my-20 my-10 border-teal-600/10 rounded-br-2xl rounded-l-2xl px-6 py-3 ${left === false ? 'flex-row' : 'flex-row-reverse'}`}
      >
        {children}
        <div className="flex items-center h-4 sm:h-8">
          <Icon />
        </div>
      </div>
    </Link>
  )
}
