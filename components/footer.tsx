"use client"
import AnimatedLogo from '@/animation/logo';
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer border z-10 dark:border-t-[#33353F] border-t-slate-300  border-l-transparent border-b-transparent border-r-transparent text-white">
          <div className="container p-9 flex justify-between items-center">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <AnimatedLogo />
          </div>
            <p className="dark:text-zinc-200 text-zinc-900">Made with ❤️ by Sam Sharma &copy;</p>
          </div>
        </footer>
      );
}

export default Footer