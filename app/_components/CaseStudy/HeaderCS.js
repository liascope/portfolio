import Image from 'next/image'
export default function HeaderCS({ img, children }) {
  return (
    <header className="flex flex-row justify-start items-center w-full md:border-x-4 border-teal-800/20 rounded-2xl gap-3 md:gap-10 mb-2 sm:pl-3 h-xs md:shadow-md">
      <div className="relative w-38 h-20 md:w-50 md:h-50 ">
        <Image src={`/${img}/0.png`} alt={`${img} Logo`} fill className="object-contain " sizes="(max-width: 640px) 120px, 200px" />
      </div>
      <h2 className="md:text-3xl text-xl font-bold p-3 w-full flex items-center justify-start uppercase md:tracking-widest text-sky-900/80 whitespace-nowrap md:border-none md:shadow-none border-l-2 shadow-md rounded-2xl rounded-bl-none">
        {children}
      </h2>
    </header>
  )
}
