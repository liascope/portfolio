import { useEffect, useState } from 'react'

export default function useSticky() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const triggerPoint = window.innerHeight * 0.5

      if (scrollPosition >= triggerPoint && !isSticky) {
        setIsSticky(true)
      } else if (scrollPosition < triggerPoint && isSticky) {
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isSticky])
  return { isSticky }
}
