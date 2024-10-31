import LandingHero from '@/components/landing-hero'
import ProjectsSection from '@/components/projects/projects-section'
import SkillSection from '@/components/skills/skills-section'
import Contact from '@/components/contact/contact-me'
import { PROJECT_DATA } from '@/data/projects'
import { SKILLS_DATA } from '@/data/skills'
import React from 'react'
import CursorTrailCanvas from '@/components/ui/cursor-trail-canvas'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'

const Home = () => {
  return (
    <section>
      <CursorTrailCanvas className="hidden md:block pointer-events-none fixed inset-0 -z-10 w-full h-full" />
      <LandingHero />
      <SkillSection skills={SKILLS_DATA} />
      <ProjectsSection projects={PROJECT_DATA} />
      <Testimonials/>
      <Contact/>
      <Footer/>
    </section>
  )
}

export default Home