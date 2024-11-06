"use client";
import { useState } from "react";
import { AnimatePresence, AnimationProps, motion, wrap } from "framer-motion";
import { BiSolidLeftArrow } from "react-icons/bi";
import { cn } from "@/utils/cn";

const variant: AnimationProps["variants"] = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

export type CarouselProps = {
  aspectRatio: number;
  images: string[];
};

export default function Carousel({ aspectRatio = 1, images }: CarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio }} aria-live="polite">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          loading="lazy"
          className="h-full w-full bg-cover cursor-pointer" // Added cursor pointer for better UX
          style={{ aspectRatio }}
          src={images[imageIndex]}
          custom={direction}
          variants={variant}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onClick={() => paginate(1)} // Navigate to next image on click
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1); // Swipe left to go to next image
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1); // Swipe right to go to previous image
            }
          }}
        />
      </AnimatePresence>
      <div className="absolute bottom-0 flex h-12 w-full items-center justify-center gap-2">
        <button
          onClick={() => paginate(-1)} // Change to previous image on button click
          className="h-4 w-4"
          aria-label="Previous slide"
        >
          <BiSolidLeftArrow className=" fill-zinc-700 dark:fill-zinc-400" />
        </button>
        {images.map((_, index) => (
          <span
            key={index}
            className={cn(
              "h-2 w-2 rounded-full",
              index === imageIndex ? "bg-accent" : "bg-zinc-700 dark:bg-zinc-400"
            )}
          ></span>
        ))}
        <button
          onClick={() => paginate(1)} // Change to next image on button click
          className="h-4 w-4"
          aria-label="Next slide"
        >
          <BiSolidLeftArrow className="rotate-180 fill-zinc-700 dark:fill-zinc-400" />
        </button>
      </div>
    </div>
  );
}
