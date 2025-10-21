import Image from "next/image"
export default function HeaderCS ({img, children}) { return (
      <header className='flex flex-row justify-start items-center w-full border-l-4 border-teal-900/50 sm:gap-10 mb-2 sm:pl-3 h-xs'> 
                  <div className="relative w-38 h-20 sm:w-50 sm:h-50 ">
  <Image
    src={`/${img}/0.png`}
    alt={`${img} Logo`}
    fill
    className="object-contain"
    sizes="(max-width: 640px) 120px, 200px"
  />
</div> 
                           <h2 className="text-lg sm:text-3xl font-bold uppercase sm:tracking-widest text-sky-900/80 ">{children}</h2>
                           </header>)
}

