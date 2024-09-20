import LandingHero from '@/components/landing-hero'
import ProjectsSection from '@/components/projects/projects-section'
import SkillSection from '@/components/skills/skills-section'
import { PROJECT_DATA } from '@/data/projects'
import { SKILLS_DATA } from '@/data/skills'
import React from 'react'

const Home = () => {
  return (
    <section>
      <LandingHero />
      <SkillSection skills={SKILLS_DATA} />
      <ProjectsSection projects={PROJECT_DATA} />
      <div className="h-[600px]"></div>
    </section>
  )
}

export default Home