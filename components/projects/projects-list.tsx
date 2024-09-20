import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'

export type ProjectsListItem = {
    index: number;
    title: string;
    href: string;
    tags: string[];
    image: {
      LIGHT: string;
      DARK?: string;
    };
  };

  export interface ProjectsListProps {
    data: ProjectsListItem;
    activeProject: number;
    toggleList: (index: number) => void; 
  }
  
const ProjectsList = (props: ProjectsListProps) => {
  return (
    <motion.div
      className={cn("group flex gap-4 ")}
      onHoverStart={() => props.toggleList(props.data.index)}
      onFocus={() => props.toggleList(props.data.index)}
    >
      <span
        className={cn(
          "hidden text-6xl font-semibold transition-colors duration-300 lg:block",
          props.activeProject === props.data.index
            ? "text-accent"
            : "text-accent/70",
        )}
      >
        {props.data.index + 1}.
      </span>
      <span className="text-3xl font-semibold text-accent transition-colors duration-300 sm:text-4xl md:text-5xl lg:hidden">
        {props.data.index + 1}.
      </span>
      <div className="flex flex-col gap-2">
        <Link href={props.data.href} className="relative max-w-max">
          <span
            className={cn(
              "hidden text-6xl font-semibold transition-colors duration-300 lg:block",
              props.activeProject === props.data.index
                ? "text-accent"
                : "text-accent/70",
            )}
          >
            {props.data.title}
          </span>
          <span className="hover:-underline-offset-1 text-3xl font-semibold text-accent transition-colors duration-300 hover:underline sm:text-4xl md:text-5xl lg:hidden">
            {props.data.title}
          </span>
          <span
            className={cn(
              "absolute -bottom-1 left-0 hidden h-1 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full lg:block",
              props.activeProject === props.data.index ? "w-full" : "w-0",
            )}
          ></span>
        </Link>
        <p className="max-w-xl text-base font-semibold text-muted-foreground sm:text-lg">
          {props.data.tags.map((tag) => `#${tag} `)}
        </p>
      </div>
    </motion.div>
  )
}

export default ProjectsList