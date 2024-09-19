import { AnimatePresence,  motion, Variants } from 'framer-motion'
import React from 'react'

const AnimatedLogo = () => {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#156165",
    },
  };
  return (
    <AnimatePresence>
        <motion.svg
  viewBox="0 0 500 500"
  xmlns="http://www.w3.org/2000/svg"
  className="h-full w-full fill-accent stroke-accent"
>
  <motion.path
    d="M400,100 
       L150,100 
       Q100,100 100,150 
       L100,200 
       Q100,250 150,250 
       L350,250 
       Q400,250 400,300 
       L400,350 
       Q400,400 350,400 
       L100,400"
    strokeWidth="10"
    strokeLinecap="round"
    strokeLinejoin="miter"
    variants={iconVariant}
    initial="hidden"
    animate="visible"
    transition={{
      default: { duration: 1.5, ease: "easeInOut" },
      fill: { duration: 5.5, ease: [0.6, 0.05, -0.01, 0.99] },
    }}
  />
</motion.svg>

    </AnimatePresence>
  )
}

export default AnimatedLogo