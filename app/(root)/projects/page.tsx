import Contact from '@/components/contact/contact-me'
import ProjectCard from '@/components/projects/project-card'
import CursorTrailCanvas from '@/components/ui/cursor-trail-canvas'
import { PROJECTS_CARD } from '@/data/projects'
import React from 'react'

const Projects = () => {
  return (
  <> 
    <section className="mx-auto  mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
    <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently building new projects and learning Mobile App Development to expand my skill set beyond web development.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my github to see some of the latest projects{" "}
              <a
                href={`https://github.com/sharma1022`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </section>
      <Contact />
      </>
  )
}

export default Projects