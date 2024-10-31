"use client";
import { CSSProperties, useEffect, useRef } from "react";
import { cursorTrail } from "@/utils/cursor-trail";

export interface CursorTrailCanvasProps {
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export default function CursorTrailCanvas(props: CursorTrailCanvasProps) {
  const refCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { cleanUp, renderTrailCursor } = cursorTrail({
      ref: refCanvas,
      color: props.color,
    }) as { 
      cleanUp: () => void; 
      renderTrailCursor: () => void; 
      stopAnimation?: () => void; 
      startAnimation?: () => void; 
    };
  
    if (renderTrailCursor) {
      renderTrailCursor();
    }
  
    return () => {
      cleanUp();
    };
  }, [props.color]);

  return (
    <canvas
      ref={refCanvas}
      className={`${props.className} fixed top-0 left-0 w-full h-full pointer-events-none`} // Ensures full viewport coverage and no pointer events
      style={{
        zIndex: -10, // Send the canvas behind other elements
        ...props.style,
      }}
    ></canvas>
  );
}
