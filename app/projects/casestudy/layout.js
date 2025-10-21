import CasestudyNav from "@/app/__components.js/CaseStudy/CasestudyNav";

export const metadata = {
    title: 'Liascope - Case Studies'
}

export default function Layout ({children}){
    return <><CasestudyNav/>{children}</>
}