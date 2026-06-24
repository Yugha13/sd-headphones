"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ScrollyTellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Text 1: Architecting Systems
  const text1Opacity = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.35], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.05, 0.35], [50, -50]);

  // Text 2: Crafting Interfaces
  const text2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);

  // Text 3: Optimizing Performance
  const text3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.55, 0.85], [50, -50]);

  // Text 4: Continuous Delivery
  const text4Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1.0], [0, 1, 1]);
  const text4Scale = useTransform(scrollYProgress, [0.8, 1.0], [0.9, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[600vh] bg-transparent">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Text Overlays Layer */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6 md:px-0">
          
          <motion.div
            style={{ opacity: text1Opacity, y: text1Y }}
            className="absolute text-center"
          >
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-white/90 mb-4 drop-shadow-lg">
              Architecting Systems
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-md mx-auto drop-shadow-md">
              Designing complex backend architectures with high availability and scalability in mind.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute text-center"
          >
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-white/90 mb-4 drop-shadow-lg">
              Crafting Interfaces
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-md mx-auto drop-shadow-md">
              Creating pixel-perfect, highly responsive frontend experiences that delight users.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: text3Opacity, y: text3Y }}
            className="absolute text-center"
          >
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-white/90 mb-4 drop-shadow-lg">
              Optimizing Performance
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-md mx-auto drop-shadow-md">
              Ensuring lightning-fast load times and smooth 60fps animations across all devices.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: text4Opacity, scale: text4Scale }}
            className="absolute text-center mt-24 md:mt-32"
          >
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-white/90 drop-shadow-2xl mb-4">
              Continuous Delivery
            </h2>
            <p className="text-base md:text-xl text-white/60 max-w-lg mx-auto drop-shadow-md font-light">
              Building robust CI/CD pipelines to ship code confidently and securely, day after day.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
