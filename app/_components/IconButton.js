import Link from 'next/link'
import Seperation from './Seperation'
export default function IconButton({ link, children, left = false, icon: Icon, target = '_self' }) {
  return (
    <Link href={link} target={target}>
      {left === false ? (
        <div className="sm:text-base text-sm flex items-center font-bold uppercase tracking-widest justify-center sm:gap-2 text-teal-700/60 hover:text-teal-600/70 transition-all hover:tracking-wider cursor-pointer my-10">
          {children}
          <div className="flex items-center sm:gap-1 h-6 sm:h-8">
            <Seperation />
            <Icon />
          </div>
        </div>
      ) : (
        <div className="sm:text-base text-sm flex items-center my-10 font-bold uppercase tracking-widest justify-center sm:gap-2 text-teal-700/60 hover:text-teal-600/70 transition-all hover:tracking-wider  cursor-pointer">
          <div className="flex items-center sm:gap-1 h-6 sm:h-8">
            <Icon />
            <Seperation />
          </div>
          {children}
        </div>
      )}
    </Link>
  )
}
