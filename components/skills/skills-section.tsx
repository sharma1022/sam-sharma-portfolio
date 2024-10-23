"use client";
import React from 'react'
import SkillCard, {
    type SkillCardProps,
  } from "@/components/skills/skills-card";
import { AnimatePresence } from 'framer-motion';
import FadeRight from '@/animation/fade-right';
import { useScreenBreakpoint } from '@/hooks/useScreenBreakpoint';
import { useDebounceValue } from '@/hooks/useDebounceValue';

export interface SkillsSectionProps {
    skills: {
      sectionName: string;
      skills: SkillCardProps[];
    }[];
  }
  

const SkillSection = ({ skills }: SkillsSectionProps) => {
    const isMobile = useScreenBreakpoint(640);
  const isMobileDebounced = useDebounceValue(isMobile, 600);
  return (
    <section className="overflow-hidden px-6 pt-48 pb-16 sm:py-32 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent sm:text-4xl">
          Skills
        </h2>
        {skills.map((section) => (
          <AnimatePresence key={section.sectionName}>
            <div className="mt-4">
              <span className="text-xs font-semibold text-foreground sm:text-sm">
                {section.sectionName}
              </span>
              <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent-foreground">
                {section.skills.map((card, index) => (
                  <FadeRight
                    key={`lang-${index}`}
                    duration={0.4}
                    delay={0.1 + index * 0.1}
                    whileInView={!isMobileDebounced}
                    className="-z-20"
                  >
                    <SkillCard {...card} />
                  </FadeRight>
                ))}
              </div>
            </div>
          </AnimatePresence>
        ))}
        </div>
    </section>
  )
}

export default SkillSection