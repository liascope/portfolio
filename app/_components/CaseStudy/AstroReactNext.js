'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImageSlider from '../ImageSlider'
import Button from '../Button'
import HeaderCS from './HeaderCS'
import { projects } from '@/app/_lib/config'
import ChallengesLearnings from '../ChallengesLearnings'

export default function AstroReactNext() {
  const [readMore, setReadMore] = useState(false)
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 p-4 ">
      <section className="max-w-6xl mx-auto bg-white/30 backdrop-blur-lg rounded-2xl p-4 sm:p-8 shadow-xl">
        <HeaderCS img="astroReact">Astrology App - React/Next.js</HeaderCS>

        <article className="flex flex-col mb-10 mt-2 sm:text-lg text-base px-5 sm:px-10 gap-5">
          <p>
            Liascope Astrology is a modern astrology charting application designed to provide a clean and beginner-friendly alternative to cluttered
            and visually overwhelming astrology tools. The application allows users to generate and explore multiple astrological charts through an
            intuitive, responsive interface with interactive SVG visualizations.{' '}
          </p>
          <p>
            The project originated as a <strong className="text-teal-900/60">Vanilla JavaScript </strong> project structured using the{' '}
            <strong className="text-teal-900/60">MVC pattern</strong>. After validating the core domain logic, the application was refactored and
            rebuilt with React.js and Next.js.
          </p>
          <ul className="list-disc ml-6 sm:ml-12 space-y-2">
            <li>Ensure full responsiveness and smooth UX across devices, including input handling and chart generation.</li>
            <li>Expand functionality with new features, such as save & load charts, input & location autocomplete.</li>
            <li>Enable advanced SVG manipulation for interactive, dynamic charts.</li>
          </ul>
        </article>

        <article className="p-5 sm:p-12 bg-white/40 backdrop-blur-sm rounded-xl shadow hover:scale-105 transition my-10">
          <h2
            id="project-evolution"
            title="Project Evolution"
            className="sm:text-2xl flex flex-row items-center justify-evenly text-xl font-bold sm:tracking-widest cursor-pointer uppercase text-sky-900/60 mb-8"
          >
            Project Evolution: Vanilla JS → React & Next.js{' '}
          </h2>
          <p className="mb-4">
            The initial Vanilla JavaScript version was intentionally implemented using a clear MVC architecture to demonstrate structured application
            design and explicit data flow without frameworks. While this version successfully validated the core domain logic, the project was
            refactored into React.js and Next.js to align with modern frontend production standards, long-term scalability and maintainability.
          </p>

          <h2 className="sm:text-xl text-lg font-bold sm:tracking-widest uppercase text-sky-900/60 my-6">Improvements & Technical Progress</h2>
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex-1">
              <p className="mb-4">
                Compared to the original Vanilla JavaScript implementation, the React & Next.js version improves flexibility, maintainability, and
                overall user experience without rewriting the core business logic.
              </p>
              <p className="mb-4">
                In the initial version, limitations of the external SVG chart library required pragmatic workarounds. For example, retrograde planets
                were rendered outside the chart because direct SVG manipulation was not yet feasible given my experience at the time.
              </p>
              <p className="mb-4">
                In the React/Next.js version, SVG rendering is handled internally through custom hooks, enabling direct manipulation of chart
                elements. This allows integrated retrograde indicators, dynamic filtering, and responsive scaling directly within the SVG.
              </p>
              <p className="mb-4">
                The layout was also fully refactored to be responsive, replacing the desktop-only design of the original version and ensuring a
                consistent experience across devices.
              </p>
            </div>
            <article className="md:w-1/1 flex-1 flex flex-col items-center rounded-xl shadow-[0_-4px_10px_rgba(0,0,0,0.15)] shadow-sky-800/60 h-fit">
              <ImageSlider
                images={['/caseStudy/csAstroReact1.png', '/caseStudy/csAstroReact2.png', '/caseStudy/csAstroReact3.png']}
                sliderHeight="h-xl"
              />
              <ul className="text-xs text-sky-900/80 text-justify p-4">
                <li>
                  Liascope Vanilla JS (left) and Liacope React.js & Next.js (right): 1.Form & Autocomplete functionality - 2.Data Info Table extension
                  - 3.Displaying Retrograde & Filter functionality
                </li>
              </ul>
            </article>
          </div>

          <section className="mt-4">
            <h4 className="sm:text-xl text-lg font-bold sm:tracking-widest uppercase text-sky-900/50 mb-6 text-center">Project Versions</h4>

            <div className="grid sm:grid-cols-2 gap-6 mx-0 sm:mx-20">
              <div className="flex flex-col p-6 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-center sm:flex-row-reverse justify-between mb-4">
                  <p className="font-bold tracking-widest uppercase text-teal-900/60">Vanilla JS (MVC)</p>
                  <span className="text-xs font-semibold bg-sky-200/30 text-sky-900/60 px-2 py-1 rounded-full">v1.0</span>
                </div>
                <div className="flex sm:flex-row-reverse gap-4 sm:justify-self-end">
                  <Link
                    href="https://liascope.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-lg bg-teal-700/80 text-white text-sm font-semibold hover:rounded-sm hover:bg-teal-600 transition"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href="https://github.com/liascope/liascope"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-lg border border-teal-800/80 text-teal-800/80 text-sm font-semibold hover:rounded-sm hover:text-teal-600/80 transition"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
              <div className="flex flex-col p-6 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-bold tracking-widest uppercase text-teal-900/60">React & Next.js</p>
                  <span className="text-xs font-semibold bg-sky-200/30 text-sky-900/60 px-2 py-1 rounded-full">v2.0</span>
                </div>
                <div className="flex gap-4">
                  <Link
                    href={projects[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-lg bg-teal-700/80 text-white text-sm font-semibold hover:rounded-sm hover:bg-teal-600 transition"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-lg border border-teal-800/80 text-teal-800/80 text-sm font-semibold hover:rounded-sm hover:text-teal-600/80 transition"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>

        <article className="mb-10 mt-2 px-5 sm:px-10">
          <ul className="list-disc ml-6 space-y-2">
            <h2 id="key-features" title="Key Features" className="text-xl sm:text-2xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">
              Key Features
            </h2>
            <li>
              <strong>Multi-Chart Generation:</strong> Natal, External: Transit/Partner Chart, Comparison: Natal&Transit/Synastry, Draconic,
              Progression, Annual Perfection charts.
            </li>
            <li>
              <strong>Save & Load:</strong> Persistent charts (up to 5) with session persistence across refreshes.
            </li>
            <li>
              <strong>Dynamic Tables & Grids:</strong> Planet and house data rendered in responsive tables for fast readability.
            </li>
            <li>
              <strong>Aspect & Filter Tools:</strong> Directly on SVG charts for focused insights.
            </li>
            <li>
              <strong>Autocomplete & Location Support:</strong> Quick search for “Today’s Transits” and location input for accurate calculations.
            </li>
            <li>
              <strong>Copy to Clipboard:</strong> Copy chart data for AI or external analysis.
            </li>
            <li>
              <strong>Additional UX Enhancements:</strong> Custom loader, cookie banner with policy routing, and guided modals for onboarding.
            </li>
          </ul>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <article className="bg-white/40 backdrop-blur-sm rounded-xl p-2 sm:p-6 shadow hover:scale-105 transition">
            <ul className="list-disc ml-6 space-y-2">
              <h2
                id="architecture"
                title="Architecture & Tech Decisions"
                className="text-2xl sm:text-xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6"
              >
                Architecture & Tech Decisions
              </h2>
              <li>
                <strong>Next.js + React.js</strong> – Chosen for component-based architecture, predictable routing, and scalable UI composition using
                the App Router.
              </li>

              <li>
                <strong>Context API + React Hook Form</strong> – Used to manage global application state and complex form interactions with a clear
                and predictable data flow, without introducing unnecessary external state libraries.
              </li>

              <li>
                <strong>TanStack Query</strong> – Implemented for the form`s city/place autofill to efficiently fetch suggestions and the latitude and
                longitude of locations while reducing redundant API requests.
              </li>

              <li>
                <strong>Framer Motion</strong> – Used for smooth animations in chart transitions and page navigation.
              </li>

              <li>
                <strong>TailwindCSS</strong> – Chosen for its utility-first approach to build a clean, consistent, and fully responsive UI
                efficiently, reducing the need for large custom CSS files and improving scalability.
              </li>

              <li>
                <strong>Custom Hooks</strong> – Encapsulate complex logic such as SVG rendering, timezone handling, retrograde calculations, and
                derived chart data, improving readability and reusability.
              </li>

              <li>
                <strong>LocalStorage & SessionStorage</strong> – Implemented a hybrid persistence strategy: profiles are stored long-term in{' '}
                <code>localStorage</code>, while session data persists temporarily to survive page reloads without unnecessary backend calls.
              </li>

              <li>
                <strong>Deployment</strong> – Deployed on Vercel to leverage seamless Next.js integration, fast builds, and global CDN delivery.
              </li>
              <ul className="list-disc space-y-2">
                <h3 className="font-bold tracking-widest text-sky-900/50 uppercase my-3">External APIs & Libraries</h3>
                <li>
                  <strong className="cursor-pointer hover:text-teal-700">
                    <Link href="https://nominatim.org/" target="_blank" rel="noopener noreferrer">
                      Nominatim API
                    </Link>
                  </strong>{' '}
                  – Location autocomplete and geocoding.
                </li>
                <li>
                  <strong className="cursor-pointer hover:text-teal-700">
                    <Link
                      href="https://github.com/astsakai/js_astro/tree/master?tab=readme-ov-file#js_astro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Timezone API
                    </Link>
                  </strong>{' '}
                  – Accurate timezone resolution for precise chart calculations.
                </li>
                <li>
                  <strong className="cursor-pointer hover:text-teal-700">
                    <Link
                      href="https://github.com/astsakai/js_astro/tree/master?tab=readme-ov-file#js_astro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      js_astro
                    </Link>
                  </strong>{' '}
                  – Core astrological calculations, extended to handle retrograde logic and timezone conversions.
                </li>
                <li>
                  <strong className="cursor-pointer hover:text-teal-700">
                    <Link href="https://astrodraw.github.io/" target="_blank" rel="noopener noreferrer">
                      AstroChart
                    </Link>
                  </strong>{' '}
                  – SVG chart rendering library, customized for responsive scaling and interactive filtering.
                </li>
              </ul>
            </ul>
          </article>

          {/* Flow Chart with toggle info-section */}
          <div className="flex flex-col items-center justify-center gap-6">
            <article>
              <h2
                id="state-management"
                title="State Management & Data Flow"
                className="text-2xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6"
              >
                State Management & Data Flow
              </h2>
              <div className="relative w-full h-120">
                <Image
                  src="/caseStudy/csAstroReactFC1.png"
                  alt="AstroReact Flowchart"
                  fill
                  className="object-contain brightness-95"
                  sizes="(max-width: 640px) 220px, 400px"
                />
              </div>
              <p className="text-xs text-sky-900/50 text-justify tracking-wider">
                High-level architecture and data flow of the React.js version of Liascope Astrology
              </p>
            </article>
            <ul className="space-y-2 text-xs text-sky-900/50 text-justify">
              <li>
                <strong>User Input & Location Handling: </strong>
                Form is handled via <code>React Hook Form</code>. The location input is in a separate component that shows location suggestions and
                calculates latitude and longitude using the Nominatim API via TanStackQuery. These values are passed via props. Before submitting, the
                time zone of the choosen location is calculated by TimezoneDB-API in the submit function.
              </li>
              <ul className={` overflow-hidden transition-all duration-1000 ease-in-out mb-3 space-y-2 ${readMore ? 'max-h-500' : 'max-h-0'}`}>
                <li>
                  <strong>Context API: </strong>
                  The retrieved data is passed to the Context API. All data and API response are passed to the third-party chart library js_astro in
                  the <code>calcChart</code> function. From the Context API, all values are made available to the corresponding components.
                </li>

                <li>
                  <strong>Custom Hooks for Chart Rendering & Special Cases: </strong>
                  There are three main custom hooks, all of which get their data from the Context API custom hook:
                  <ul className="list-decimal ml-6 space-y-2 pt-1">
                    <li>
                      <strong>Chart Rendering Hook: useRenderCharts: </strong>
                      Renders SVG charts using the AstroChart library. This hook receives a <code>chartID</code> (e.g., natal, transit, draconic) and
                      draws the corresponding SVG chart. It also returns calculated data for aspects, houses, and planetary positions using multiple
                      internal calculation functions based on Context API data.
                    </li>
                    <li>
                      <strong>SVG Manipulating Hooks: useTimeUnknown & useRetroPlanets: </strong>
                      Handles cases where birth or transit time is unknown & highlights retrograde planets.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="">Chart Rendering in Components: </strong>
                  <ul className="list-decimal ml-6 space-y-2 pt-1">
                    <li>
                      <strong>Charts.js: </strong>
                      The reusable <code>Charts</code> component calls all three hooks and the Context API custom hook. All hooks receive the{' '}
                      <code>chartID</code> to render the appropriate chart dynamically. This component is used on the natal, transit, draconic, and
                      progression pages.
                    </li>

                    <li>
                      <strong>NatalTransit.js: </strong>
                      Calculates and renders the combined Natal & Transit chart. Uses the Context API custom hook, the SVG manipulating hooks and the
                      AstroChart SVG library.
                    </li>

                    <li>
                      <strong>Perfection.js: </strong>
                      Generates Perfection charts based on the Context API custom hook, <code>useRenderCharts</code>, and internal calculations.
                    </li>
                  </ul>
                </li>
              </ul>
              <span
                className="text-sky-900/30 uppercase tracking-widest font-bold cursor-pointer hover:text-sky-900/80"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? '| show less |' : '| read more |'}
              </span>
            </ul>
          </div>
        </div>
        <ChallengesLearnings>
          <ul className="list-disc ml-6 space-y-2">
            <p className="mb-4">
              Implementing the MVC pattern in the original Vanilla JS version provided a strong architectural baseline for separation of concerns and
              data flow. This foundation made the subsequent transition to React.js and Next.js smoother, allowing me to focus on scaling the app,
              improving maintainability, and adopting modern frontend practices.
            </p>
            <li>Translating MVC-based procedural logic into reusable React components and custom hooks while preserving domain logic</li>
            <li>Managing complex derived state across multiple chart types using the Context API with predictable state ownership</li>

            <li>
              Extending and refactoring a third-party SVG chart library to support responsive behavior, interactive filtering, and chart manipulation
            </li>
            <li>
              Adapting and modernizing external libraries to correctly handle timezone conversions and retrograde calculations across environments
            </li>
            <li>Structuring complex, multi-step forms with validation and conditional logic while maintaining a consistent user experience</li>
          </ul>
        </ChallengesLearnings>

        <footer>
          <div className="flex flex-row gap-6 w-full justify-center items-center">
            <Button link="https://liascope.vercel.app/" target="_blank">
              {' '}
              Live Demo{' '}
            </Button>
            <Button link="https://github.com/liascope/liascope-astrology" bright={true} target="_blank">
              {' '}
              GitHub Repo{' '}
            </Button>
          </div>
          <section className="mt-8 sm:mt-16 border-t border-sky-700/30 pb-2 pt-8 text-center">
            <h3 className=" font-bold tracking-widest text-sky-900/30 mb-4 uppercase">Other Case Studies</h3>
            <div className="flex justify-center gap-4 text-teal-700/40 tracking-wider font-semibold text-sm">
              <Link href="/projects/casestudy/Daycare" className="hover:text-teal-600/60 " target="_blanked" rel="noopener noreferrer">
                Daycare App - Fullstack-Next.js
              </Link>
            </div>
            <div className="flex justify-center gap-4 text-teal-700/40 tracking-wider font-semibold text-sm">
              <Link href="/projects/casestudy/Todoezel" className="hover:text-teal-600/60" target="_blanked" rel="noopener noreferrer">
                Todoezel Task Manager - React.js, Redux Toolkit & TypeScript
              </Link>
            </div>
          </section>
        </footer>
      </section>
    </main>
  )
}
