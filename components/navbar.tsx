"use client"
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { Caesar_Dressing } from 'next/font/google';
import ThemeToggle from './theme-toggle';

const caesar_dressing = Caesar_Dressing({
    subsets: ["latin"],
    weight:["400"]
  });

export type NavbarRoute = {
    title: string;
    href: string;
  };
  
  export type NavbarRoutes = NavbarRoute[];
  
  export interface NavbarProps {
    routes: NavbarRoutes;
  }

const Navbar = (props: NavbarProps) => {
    const pathName = usePathname();
  return (
    <header className="sticky top-0 z-50 mt-2 px-6 py-8 sm:mt-8 sm:px-14 md:px-20">
      <div className="mx-auto flex items-center justify-between lg:max-w-7xl">
        <Link
          href="/"
          className="drop-shadow-teralight flex items-center justify-center"
          aria-label="Return to home page"
        >
          <div className="relative h-12 w-12 sm:h-14 hover:scale-125 justify-start items-start">
          <span className={cn("text-accent text-[52px] ",caesar_dressing.className)}>SS</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50 md:flex">
          <ul className="flex gap-2 text-sm font-medium">
            {props.routes.map((_link, index) => {
              return (
                <li
                  key={index}
                  className="my-3 transition-transform duration-100 hover:scale-[1.1]"
                >
                  <Link
                    href={_link.href}
                    className={cn(
                      pathName === _link.href
                        ? "font-semibold text-background dark:hover:text-foreground"
                        : "text-foreground",
                      "group relative mx-3 rounded-full px-3 py-2 transition-colors duration-200",
                    )}
                  >
                    {_link.href === pathName && (
                      <motion.span
                        layoutId="tab-pill"
                        animate={{
                          transition: {
                            x: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                          },
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-accent group-hover:bg-accent/80"
                      ></motion.span>
                    )}
                    {_link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle/>
        </nav>
      </div>
    </header>
  )
}

export default Navbar