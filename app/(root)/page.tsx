import LandingHero from '@/components/landing-hero'
import ProjectsSection from '@/components/projects/projects-section'
import SkillSection from '@/components/skills/skills-section'
import Contact from '@/components/contact/contact-me.tsx'
import { PROJECT_DATA } from '@/data/projects'
import { SKILLS_DATA } from '@/data/skills'
import React from 'react'
import CursorTrailCanvas from '@/components/ui/cursor-trail-canvas'

const Home = () => {
  return (
    <section>
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
      <LandingHero />
      <SkillSection skills={SKILLS_DATA} />
      <ProjectsSection projects={PROJECT_DATA} />
      <Contact/>
    </section>
  )
}

export default Home