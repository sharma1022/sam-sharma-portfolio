"use client";
import React, { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import CustomButton from "./ui/custom-button";
import Link from "next/link";

const LandingHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
        <AnimatePresence>
        <FadeUp key="title-main" duration={0.6}>
          <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
            Sam Sharma
          </h1>
          <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
            Full Stack Software Developer
          </span>
          </FadeUp>
          <FadeUp key="description" duration={0.6} delay={0.2}>
          <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
          Full-Stack Dev on a mission to make your project next level. I craft slick frontends with {" "}
            <span className="font-semibold text-accent">NextJS</span>{" "}and{" "}
            <span className="font-semibold text-accent">React</span>,{" "}
            and handle backend magic with{" "}
            <span className="font-semibold text-accent">NodeJS</span>,{" "}
            and{" "}
            <span className="font-semibold text-accent">Express</span>.<br/><br/>
            Ready to turn your ideas into epic digital experiences?
        </div>
        </FadeUp>
        <FadeUp key="contact-btn" duration={0.6} delay={0.4}>
         <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} >
         <div className="mt-8">
            <Link
              href="/#contact"
              className="px-6 inline-block py-2.5 w-full sm:w-fit rounded-full mr-4 bg-accent hover:bg-border text-base font-semibold text-background hover:text-zinc-800 dark:text-zinc-200 sm:text-base md:text-xl"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-0.5 inline-block py-0.5 w-full sm:w-fit rounded-full bg-accent  text-base font-semibold text-zinc-900 hover:text-background dark:text-zinc-200 sm:text-base md:text-xl"
            >
              <span className="block bg-background hover:bg-accent rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
          </Link>
        </FadeUp>
        </AnimatePresence>
        </div>
      </div>

    </motion.section>
  );
};

export default LandingHero;
