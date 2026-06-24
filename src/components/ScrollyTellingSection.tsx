"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ScrollyTellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const text1Opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.1, 0.45], [50, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const text3Scale = useTransform(scrollYProgress, [0.8, 1], [0.9, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-transparent">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Text Overlays Layer */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          
          <motion.div
            style={{ opacity: text1Opacity, y: text1Y }}
            className="absolute text-center"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white/90 mb-4 drop-shadow-lg">
              Sound Redefined
            </h2>
            <p className="text-lg text-white/60 max-w-md mx-auto drop-shadow-md">
              Every component engineered for absolute acoustic clarity.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute text-center"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white/90 mb-4 drop-shadow-lg">
              Precision Engineering
            </h2>
            <p className="text-lg text-white/60 max-w-md mx-auto drop-shadow-md">
              Titanium drivers crafted to microscopic tolerances.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: text3Opacity, scale: text3Scale }}
            className="absolute text-center mt-32"
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white/90 drop-shadow-2xl">
              SonicWave Pro
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
