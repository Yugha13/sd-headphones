"use client";

import { motion } from "framer-motion";

export default function FooterCTA() {
  return (
    <section className="relative w-full py-32 flex flex-col items-center justify-center bg-background border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white/90 mb-6">
          Ready for the extraordinary?
        </h2>
        <p className="text-lg text-white/50 mb-10 max-w-md mx-auto">
          Pre-order SonicWave Pro today and be the first to experience the future of sound.
        </p>
        
        <button className="px-8 py-4 bg-white text-black font-medium tracking-wide rounded-full hover:bg-white/90 transition-colors transform hover:scale-105 active:scale-95 duration-200">
          Pre-order Now
        </button>
      </motion.div>

      <div className="absolute bottom-8 text-xs text-white/30 tracking-wider">
        © {new Date().getFullYear()} SonicWave Audio. All rights reserved.
      </div>
    </section>
  );
}
