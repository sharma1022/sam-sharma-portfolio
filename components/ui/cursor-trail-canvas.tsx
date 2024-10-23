"use client"
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
    }) as { cleanUp: () => void; renderTrailCursor: () => void; stopAnimation?: () => void; startAnimation?: () => void; };
  
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
      className={props.className}
      style={props.style}
    ></canvas>
  );
}
