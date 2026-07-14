import Link from 'next/link'
export default function IconButton({ link, children, left = false, icon: Icon, target = '_self' }) {
  return (
    <div className="w-full flex items-center justify-center">
      <Link
        href={link}
        target={target}
        className={`text-center sm:text-base text-xs flex items-center font-bold uppercase tracking-widest bg-white/40 hover:bg-white/20 backdrop-blur justify-center gap-2 text-teal-700/60 shadow-lg hover:text-teal-600/70 transition-all hover:tracking-wider w-fit cursor-pointer sm:my-20 my-10 rounded-b-2xl rounded-tl-2xl px-6 py-3 ${left === false ? 'flex-row' : 'flex-row-reverse'}`}
      >
        {children}
        <div className="flex items-center h-4 sm:h-8">
          <Icon />
        </div>
      </Link>
    </div>
  )
}
