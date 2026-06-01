import CasestudyNav from '@/app/_components/CaseStudy/CasestudyNav'

export const metadata = {
  title: 'Liascope - Case Studies',
}

export default function Layout({ children }) {
  return (
    <>
      <CasestudyNav />
      {children}
    </>
  )
}
