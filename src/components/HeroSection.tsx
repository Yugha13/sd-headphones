"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center pointer-events-none px-6 md:px-0"
      >
        <h1 className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/50 mb-6 drop-shadow-md">
          Software Engineer
        </h1>
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white/90 drop-shadow-2xl mb-8">
          Alex Dev
        </h2>
        <p className="text-lg md:text-xl text-white/60 font-light max-w-lg mx-auto leading-relaxed drop-shadow-md">
          Building scalable, elegant web applications and pushing the boundaries of interactive experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center justify-center gap-3 text-white/60 drop-shadow-md"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 opacity-70" />
        </motion.div>
      </motion.div>

    </section>
  );
}
