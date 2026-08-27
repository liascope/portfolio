'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function ImageSlider({ images, sliderHeight = 'h-72' }) {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [loadedImages, setLoadedImages] = useState({})
  const [firstThreeLoaded, setFirstThreeLoaded] = useState(false)

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }))
  }

  useEffect(() => {
    const firstThree = images.slice(0, 3)
    if (firstThree.every((_, i) => loadedImages[i])) {
      setFirstThreeLoaded(true)
    }
  }, [loadedImages, images])

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  return (
    <div
      className="relative w-full max-w-2xl h-fit mx-auto overflow-hidden rounded-md shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* pic slider */}
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 transition-all duration-700 ease-in-out relative overflow-hidden ${sliderHeight} rounded-md ${
              firstThreeLoaded ? 'blur-0' : 'blur-md'
            } ${firstThreeLoaded ? 'opacity-90' : 'opacity-50'}`}
          >
            <div className="relative w-full h-full group">
              <Image
                src={src}
                alt={`Screenshot ${index + 1}`}
                width={800}
                height={650}
                className={`object-contain rounded-md w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                  !isHovered && !firstThreeLoaded ? 'filter brightness-90' : ''
                }`}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />

              {/* overlay */}
              <div className={`absolute inset-0 transition-colors duration-500 ${!isHovered ? 'bg-black/15' : 'bg-black/0'}`}></div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-1 -translate-y-1/2
               text-teal-600 hover:text-teal-500
               bg-white/30 hover:bg-white/40
               rounded-full p-1
               shadow-md hover:shadow-lg
               transition-transform duration-300"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-1 -translate-y-1/2
               text-teal-600 hover:text-teal-500
               bg-white/30 hover:bg-white/40
               rounded-full p-1
               shadow-md hover:shadow-lg
               transition-transform duration-300"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
      {/* Bottom Points */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full ${current === i ? 'bg-white' : 'bg-teal-700/50'}`} />
        ))}
      </div>
    </div>
  )
}
