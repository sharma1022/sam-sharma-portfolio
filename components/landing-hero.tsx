import React from 'react'

const LandingHero = () => {
  return (
    <div className='w-full'>
        <div className="mx-auto max-w-7xl">
            <h1 className='bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl'>
                Sam Sharma
            </h1>
            <span className='text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl'>
                Full Stack Software Developer
            </span>
            <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I am a software developer with 2 years of experience,
                specializing in building high-performance, user-focused web
                applications. Skilled in{" "}
                <span className="font-semibold text-accent">ReactJS</span>,{" "}
                <span className="font-semibold text-accent">NextJS</span>,{" "}
                <span className="font-semibold text-accent">NodeJS</span>, and
                an expert in{" "}
                <span className="font-semibold text-accent">JavaScript</span>,{" "}
                <span className="font-semibold text-accent">Html</span> and{" "}
                <span className="font-semibold text-accent">CSS</span>,{" "}
                transform ideas into seamless, functional designs.
              </div>
        </div>
    </div>
  )
}

export default LandingHero