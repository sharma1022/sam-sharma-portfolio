import LandingHero from '@/components/landing-hero'
import SkillSection from '@/components/skills/skills-section'
import React from 'react'

const Home = () => {
  return (
    <section>
      <LandingHero />
      <SkillSection />
      <div className="h-[600px]"></div>
    </section>
  )
}

export default Home