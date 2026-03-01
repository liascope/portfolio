"use client";
import { useEffect, useState} from "react";
import { usePathname } from "next/navigation";
import useSticky from "../../_lib/useSticky";
import { caseStudy, sections } from "../../_lib/config";

export default function CaseStudyNav() {
  const pathname = usePathname();
  const [title, setTitle] = useState("");
  const [activeId, setActiveId] = useState(sections[0].id);
  const [visibleSections, setVisibleSections] = useState([]);
  const [open, setOpen] = useState(false)
 const {isSticky} = useSticky();



useEffect(() => {
    if (!pathname)return; const lastSegment = pathname.split("/").filter(Boolean).pop();
      setTitle(caseStudy[lastSegment] || ""); }, [pathname]);

  useEffect(() => {const existing = sections.filter(({ id }) => document.getElementById(id));
    setVisibleSections(existing);}, []);

  useEffect(() => { if (visibleSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {setActiveId(visible[0].target.id);}},
      {rootMargin: "-50% 0px -50% 0px", threshold: [0, 0.25, 0.4, 0.75, 1],});

    visibleSections.forEach(({ id }) => {const el = document.getElementById(id); if (el) observer.observe(el);});
    return () => observer.disconnect(); }, [visibleSections]);

  const handleClick = (id) => {document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });};

  return ( <div
  onClick={() => setOpen((prev) => !prev)}
  className={`fixed top-1/3 z-10 transition-all duration-100
    right-0 bg-white/30 backdrop-blur-md rounded-sm pl-5
    min-[1750px]:right-5
    min-[1750px]:bg-transparent
    min-[1750px]:backdrop-blur-none
    min-[1750px]:rounded-none
    ${open ? 'w-xs h-fit max-[1750px]:py-5' : 'w-5'}
    min-[1750px]:w-xs
    min-[1750px]:h-40
  `}
>
        <div className="min-[1750px]:hidden absolute left-1 top-1/3 w-6 h-full cursor-pointer opacity-80">{open ? '\u27EB' : '\u27EA'}</div>
      <ul className={`text-md space-y-1 lg:space-y-5  transition-all duration-100 min-[1750px]:opacity-100
  ${ open ? 'opacity-100 max-[1750px]:translate-x-0' : 'opacity-0 max-[1750px]:translate-x-5'}
`}>
        <h1 className={`text-base sm:text-lg text-sky-900/70 min-[1750px]:-rotate-10 font-bold uppercase transition-all duration-200 min-[1750px]:mb-10 sm:mb-5 mb-1 ${isSticky ? 'opacity-100' : 'opacity-0' }`}>{title}</h1>
        {visibleSections.map(({ id, label }) => (
          <li
            key={id}
            onClick={() => handleClick(id)}
            className={`cursor-pointer transition-all duration-200 min-[1750px]:-rotate-10 ${
              activeId === id
                ? "text-sky-900/50 min-[1750px]:font-bold sm:uppercase"
                : "text-sky-900/30 min-[1750px]:font-semibold hover:text-sky-900/70 min-[1750px]:hover:tracking-wider sm:uppercase "
            }`}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}