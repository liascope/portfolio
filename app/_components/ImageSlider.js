'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0)
  const [isActive, setIsActive] = useState(false)

  if (!images?.length) return null

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  return (
    <div
      className="group relative overflow-hidden border-b border-white/10 bg-neutral-950"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
    >
      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative aspect-[16/10] w-full flex-shrink-0">
            <Image
              src={src}
              alt={`Project screenshot ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
              className={`object-contain transition duration-700 ${isActive ? 'brightness-100' : 'brightness-[0.7]'}`}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Previous */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous screenshot"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2 text-white/60 opacity-0 backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-black/60 hover:text-white group-hover:opacity-100"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next screenshot"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2 text-white/60 opacity-0 backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-black/60 hover:text-white group-hover:opacity-100"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1.5 backdrop-blur-sm">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to screenshot ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === index ? 'w-5 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
