import { AnimatePresence,  motion } from 'framer-motion'
import React from 'react'

const AnimatedLogo = () => {
  return (
    <AnimatePresence>
        <DeviceMotionEvent.svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
  <defs>
    <style bx:fonts="Caesar Dressing">@import url(https://fonts.googleapis.com/css2?family=Caesar+Dressing%3Aital%2Cwght%400%2C400&amp;display=swap);</style>
  </defs>
  <text style="fill: rgb(22, 97, 101); fill-opacity: 0.95; font-family: 'Caesar Dressing'; font-size: 28px; stroke: rgb(38, 160, 167); stroke-width: 0.617429px; white-space: pre;" transform="matrix(4.892712, 0, 0, 4.824997, -675.393372, -803.516785)" x="173.502" y="235.521">SS</text>
</DeviceMotionEvent.svg>
    </AnimatePresence>
  )
}

export default AnimatedLogo