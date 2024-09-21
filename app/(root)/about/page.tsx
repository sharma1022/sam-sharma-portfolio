import AboutHero from '@/components/about-hero'
import Contact from '@/components/contact/contact-me'
import TimelineList from '@/components/Timeline/timeline-list'
import { EDUCATION } from '@/data/education'
import { EXPERIENCE } from '@/data/experience'
import React from 'react'

const About = () => {
  return (
    <section>
      <AboutHero />
      <TimelineList title="Experience" details={EXPERIENCE} />
      <TimelineList title="Education" details={EDUCATION} />
      <Contact />
    </section>
  )
}

export default About