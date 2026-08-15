import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { spaceCanvasEngine } from "../utils/spaceCanvasGenerator";

gsap.registerPlugin(ScrollTrigger);

export default function SpaceJourney({ onFrameChange, isReducedMotion }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const currentFrameRef = useRef(0);
  const rafIdRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setDimensions({ width: w, height: h });
      if (canvasRef.current) {
        canvasRef.current.width = w;
        canvasRef.current.height = h;
        // Redraw current frame
        const ctx = canvasRef.current.getContext("2d");
        spaceCanvasEngine.renderFrame(ctx, w, h, currentFrameRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP ScrollTrigger timeline sync
  useEffect(() => {
    if (isReducedMotion) return;

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    // Draw initial frame
    spaceCanvasEngine.renderFrame(ctx, dimensions.width, dimensions.height, 0);

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.15,
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        const targetFrame = Math.min(899, Math.floor(progress * 900));

        if (targetFrame !== currentFrameRef.current) {
          currentFrameRef.current = targetFrame;
          
          if (onFrameChange) {
            onFrameChange(targetFrame, progress);
          }

          // Schedule canvas draw via RAF
          if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = requestAnimationFrame(() => {
            if (canvasRef.current) {
              spaceCanvasEngine.renderFrame(
                canvasRef.current.getContext("2d"),
                dimensions.width,
                dimensions.height,
                targetFrame
              );
            }
          });
        }
      }
    });

    return () => {
      trigger.kill();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [dimensions, onFrameChange, isReducedMotion]);

  return (
    <div ref={containerRef} className="relative w-full h-[900vh]">
      {/* Pinned Background Canvas */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
        <canvas
          ref={canvasRef}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-full block"
        />
        {/* Subtle Sci-Fi Scanlines Overlay */}
        <div className="absolute inset-0 hud-scanline pointer-events-none opacity-40" />
      </div>
    </div>
  );
}
