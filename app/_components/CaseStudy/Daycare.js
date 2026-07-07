'use client'

import Link from 'next/link'
import ImageSlider from '../ImageSlider'
import Button from '../Button'
import HeaderCS from './HeaderCS'
import ChallengesLearnings from '../ChallengesLearnings'

export default function Daycare() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-teal-900 p-4 ">
      <section className="max-w-6xl mx-auto bg-white/30 backdrop-blur-lg rounded-2xl p-4 sm:p-8 shadow-xl">
        <HeaderCS img="daycare">Daycare App - Fullstack Next.js</HeaderCS>
        <article className="flex flex-col mb-10 mt-2 sm:text-lg text-base px-5 sm:px-10 gap-5">
          <p>A secure, role-based full-stack management system that enables structured daily reporting between caregivers and parents.</p>

          <p>
            The application focuses on clean server-driven architecture, secure database access, and strict role-based authorization using
            database-level policies instead of client-side protection.
          </p>

          <ul className="list-disc ml-6 sm:ml-12 space-y-2">
            <li>Secure authentication with role separation (Caregiver / Parent).</li>
            <li>Structured daily reporting workflow with evaluations and image uploads.</li>
            <li>Database-enforced access control via PostgreSQL Row Level Security.</li>
          </ul>
        </article>

        <article className="text-sm sm:text-base flex flex-col lg:flex-row bg-white/40 backdrop-blur-sm rounded-xl p-5 lg:p-12 shadow hover:scale-105 transition my-10">
          <ul className="list-disc ml-6 space-y-2 px-5 sm:px-12 text-sm sm:text-base">
            <h2 id="key-features" title="Key Features" className="text-xl sm:text-2xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6">
              Key Features
            </h2>
            <li>
              <strong>Role-Based Login:</strong> Parent and Caregiver accounts with restricted access.
            </li>
            <li>
              <strong>Daily Reports:</strong> Caregivers submit structured evaluations with optional photos.
            </li>
            <li>
              <strong>Parent Dashboard:</strong> Overview of daily reports, issues, and uploaded images.
            </li>
            <li>
              <strong>Image Export:</strong> Download report images as a ZIP file.
            </li>
            <li>
              <strong>Child Management:</strong> Admins can create/delete child accounts (or simulate in demo mode).
            </li>
            <li>
              <strong>Admin Dashboard:</strong> Caregivers track which children have been reported daily.
            </li>
          </ul>
          <article className="flex-1 p-5 scale-90 border-2 rounded-2xl border-dashed border-teal-900/30">
            <h2
              id="demo-access"
              title="Demo Access"
              className=" text-center text-lg sm:text-xl font-bold sm:tracking-widest uppercase text-sky-900/60"
            >
              Demo Access
            </h2>

            <p className="mb-3 text-center">
              Demo mode is enabled for this project. Creating or deleting child accounts are disabled, but reporting, up- and downloading photos and
              dashboard functionalities remain functional.
            </p>

            <div className="overflow-hidden">
              <table className="w-full border-collapse">
                <thead className="font-bold tracking-widest uppercase text-sky-900/50 text-left text-sm">
                  <tr className="border-b-2  ">
                    <th className="px-3 py-2">Role</th>
                    <th className="px-3 py-2">Email</th>
                    <th className="px-3 py-2">Password</th>
                  </tr>
                </thead>
                <tbody className="text-teal-900/40 text-sm font-bold">
                  <tr className="hover:bg-sky-50 transition-colors rounded">
                    <td className="px-3 py-2">Admin/Caregiver</td>
                    <td className="px-3 py-2">
                      <a href="mailto:admin-demo@example.com">admin@daycare.com</a>
                    </td>
                    <td className="px-3 py-2">admin-0987</td>
                  </tr>
                  <tr className="hover:bg-sky-50 transition-colors rounded">
                    <td className="px-3 py-2">Parent 1</td>
                    <td className="px-3 py-2">
                      <a href="mailto:parent1@example.com">noah@daycare.com</a>
                    </td>
                    <td className="px-3 py-2">noah-0987</td>
                  </tr>
                  <tr className="hover:bg-sky-50 transition-colors rounded">
                    <td className="px-3 py-2">Parent 2</td>
                    <td className="px-3 py-2">
                      <a href="mailto:parent2@example.com">leo@daycare.com</a>
                    </td>
                    <td className="px-3 py-2">leo-0987</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </article>

        <article className="text-sm sm:text-base flex flex-col my-10 px-5 sm:px-12">
          <h2
            id="architecture"
            title="Architecture & Tech Decisions"
            className="sm:text-2xl text-xl font-bold sm:tracking-widest uppercase text-sky-900/60 mb-8"
          >
            Architecture & Tech Decisions
          </h2>

          <p className="mb-4">
            Unlike purely frontend-driven applications, this system relies on a server-controlled data flow using Next.js Server Actions. All
            mutations and data fetching occur server-side, ensuring that no direct database logic is exposed to the client.
          </p>

          <ul className="list-disc ml-6 space-y-3">
            <li>
              <strong>Server Actions & Server-Only Mutations:</strong> All create, update, and delete operations are handled on the server to ensure
              secure mutations and prevent direct client manipulation.
            </li>
            <li>
              <strong>Relational Data Modeling:</strong> Structured relationships between users, children, and reports with enforced foreign keys and
              indexed columns for performance.
            </li>

            <li>
              <strong>Authentication:</strong> Supabase Auth with role metadata stored in JWT app_metadata. Sessions are intentionally configured as
              non-persistent, enforcing automatic logout when the browser is closed to reduce the risk of unauthorized access on shared devices.
            </li>

            <li>
              <strong>Authorization:</strong> Access control is enforced directly within PostgreSQL using Row Level Security (RLS) policies tied to
              JWT role metadata:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Parents to viewing only their child’s reports.</li>
                <li>Caregivers to creating and managing reports.</li>
              </ul>
            </li>
            <li>
              <strong>Styling & Responsiveness: </strong>Tailwind CSS enables a mobile-first, fully responsive interface across dashboards and
              reporting flows.
            </li>
          </ul>
        </article>

        <article className="my-10 flex flex-col md:flex-row gap-5 items-start">
          <article className="bg-white/40 backdrop-blur-sm rounded-xl px-5 py-6 sm:px-10 shadow hover:scale-105 transition text-sm flex-1">
            <h2
              id="state-management"
              title="State Management & Data Flow"
              className="text-xl text-center font-bold sm:tracking-widest uppercase text-sky-900/60 mb-6"
            >
              State Management & Data Flow
            </h2>

            <p className="mb-4">
              Form state for the caregiver reporting flow is managed via the React Context API to handle structured evaluations, conditional notes,
              and image uploads in a predictable way.
            </p>

            <p className="mb-4">
              Data retrieval and mutations are entirely server-driven. The client is responsible only for UI state, while business logic and database
              interaction remain on the server.
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Context API for structured multi-section form state.</li>
              <li>Server Actions for all CRUD operations.</li>
              <li>Deliberately avoided client-side caching to preserve a single source of truth on the server.</li>
            </ul>
          </article>
          <article className="flex flex-1 flex-col items-center rounded-xl ">
            <ImageSlider images={['/caseStudy/csDaycare1.png', '/caseStudy/csDaycare2.png']} sliderHeight="h-xl" />
            <p className="text-xs text-sky-900/80 text-justify p-4">Parent Dashboard vs. Admin/Caregiver Dashboard</p>
          </article>
        </article>

        <ChallengesLearnings>
          <ul className="list-disc ml-6 space-y-3 ">
            <li>Designing efficient Row Level Security policies without introducing performance bottlenecks.</li>
            <li>Structuring relational data models with enforced constraints and indexes.</li>
            <li>Separating server-controlled logic from UI state to maintain a clean architectural boundary.</li>
            <li>Handling file uploads securely using Supabase Storage.</li>
            <li>Designing a role-based UX that clearly separates responsibilities without duplicating logic.</li>
          </ul>
        </ChallengesLearnings>
        <footer>
          <div className="flex flex-row gap-6 w-full justify-center items-center">
            <Button link="https://daycare-app-five.vercel.app/" target="_blank">
              {' '}
              Live Demo{' '}
            </Button>
            <Button link="https://github.com/liascope/daycare-app" bright={true} target="_blank">
              {' '}
              GitHub Repo{' '}
            </Button>
          </div>
          <section className="mt-8 sm:mt-16 border-t border-sky-700/30 pb-2 pt-8 text-center">
            <h3 className=" font-bold tracking-widest text-sky-900/30 mb-4 uppercase">Other Case Studies</h3>
            <div className="flex justify-center gap-4 text-teal-700/40 tracking-wider font-semibold text-sm">
              <Link
                href="/projects/casestudy/LiascopeAstrologyReactNext"
                className="hover:text-teal-600/60 "
                target="_blanked"
                rel="noopener noreferrer"
              >
                Liascope Astrology - React/Next.js
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
