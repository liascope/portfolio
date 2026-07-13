'use client'
import Header from './Header'
import useSticky from '../_lib/useSticky'
export default function StickyHeader() {
  const { isSticky } = useSticky()
  return (
    <>
      <Header />
      <div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full transition-transform duration-300 z-10 ${
          isSticky ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>
    </>
  )
}
