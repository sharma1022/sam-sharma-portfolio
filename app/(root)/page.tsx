import LandingHero from '@/components/landing-hero'
import SkillSection from '@/components/skills/skills-section'
import { SKILLS_DATA } from '@/data/skills'
import React from 'react'

const Home = () => {
  return (
    <section>
      <LandingHero />
      <SkillSection skills={SKILLS_DATA} />
      <div className="h-[600px]"></div>
    </section>
  )
}

export default Home