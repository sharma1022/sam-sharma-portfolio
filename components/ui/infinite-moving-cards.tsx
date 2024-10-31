"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { motion, PanInfo, useMotionValue } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    avatar: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const x = useMotionValue(0); // Motion value for dragging

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
      setStart(true);
    }
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const containerWidth = containerRef.current?.clientWidth || 0;
    const totalScrollWidth = scrollerRef.current?.scrollWidth || 0;
    const currentX = x.get();

    if (currentX < -totalScrollWidth / 3) {
      x.set(0); // Reset to the start of cloned list if scrolled too far left
    } else if (currentX > 0) {
      x.set(-totalScrollWidth / 3); // Reset to end if scrolled too far right
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      {/* Check for mobile screen size */}
      <div className="block md:hidden">
        {/* Mobile Carousel */}
        <motion.ul
          ref={scrollerRef}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -((items.length - 1) * 400), right: 50 }} // Adjust this based on item width
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          className="flex gap-4 py-4"
        >
          {items.map((item) => (
            <motion.li
              key={item.name}
              className="w-[400px] max-w-full relative rounded-2xl flex-shrink-0 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50 px-8 py-6"
            >
              <blockquote>
                <span className="relative z-20 text-xs leading-[1.6] dark:text-zinc-200 sm:text-base text-zinc-900 font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <div className="me-3 w-14 md:w-14">
                    <img className="w-10 h-10 md:w-14 md:h-14 rounded-full" src={item.avatar} alt="profile" />
                  </div>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm md:text-lg leading-[1.6] text-accent font-semibold ">
                      {item.name}
                    </span>
                    <span className="text-sm md:text-lg leading-[1.6] dark:text-zinc-200 sm:text-base text-zinc-900 font-semibold">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Infinite Scroll for larger screens */}
      <ul
        ref={scrollerRef}
        className={cn(
          "hidden md:flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[750px] z-20
             max-w-full relative rounded-2xl flex-shrink-0 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50 px-8 py-6"
            key={item.name}
          >
            <blockquote>
              <span className="relative z-20 text-xs leading-[1.6] dark:text-zinc-200 sm:text-base text-zinc-900 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <img className="w-14 h-14 rounded-full" src={item.avatar} alt="profile" />
                </div>
                <span className="flex flex-col gap-0.5">
                  <span className="text-lg leading-[1.6] text-accent font-semibold ">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] dark:text-zinc-200 sm:text-base text-zinc-900 font-semibold">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
