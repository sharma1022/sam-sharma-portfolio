import AboutHero from '@/components/about-hero'
import Contact from '@/components/contact/contact-me'
import TimelineList from '@/components/Timeline/timeline-list'
import CursorTrailCanvas from '@/components/ui/cursor-trail-canvas'
import { EDUCATION } from '@/data/education'
import { EXPERIENCE } from '@/data/experience'
import React from 'react'

const About = () => {
  return (
    <section>
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
      <AboutHero />
      <TimelineList title="Experience" details={EXPERIENCE} />
      <TimelineList title="Education" details={EDUCATION} />
      <Contact />
    </section>
  )
}

export default About