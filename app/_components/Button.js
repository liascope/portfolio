import Link from "next/link"
export default function Button ({link, bright = false, children, target="_self", textSize='sm:my-6 sm:px-6 py-2 my-3 px-3' }){
    
    if (bright) return <Link href={link} target={target} className={`bg-white/80 text-teal-800/80 text-sm sm:text-base uppercase font-bold sm:tracking-widest hover:text-teal-600/80 rounded-lg hover:rounded-sm hover:bg-white transition ${textSize}`}>
            {children}
          </Link>
    
    return( <Link href={link} target={target} className={`bg-teal-700/80 text-white text-sm sm:text-base uppercase font-bold sm:tracking-widest rounded-lg hover:bg-teal-600/80 transition hover:rounded-sm ${textSize}`}>
              {children}
          </Link>)}
          