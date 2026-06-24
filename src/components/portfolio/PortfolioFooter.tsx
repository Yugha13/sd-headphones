"use client";

import { motion } from "framer-motion";

export default function PortfolioFooter() {
  return (
    <section id="contact" className="relative w-full py-32 md:py-48 flex flex-col items-center justify-center bg-black overflow-hidden">
      
      {/* Background Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 text-center px-4 md:px-0">
        
        <span className="text-primary uppercase tracking-widest text-[10px] sm:text-xs mb-8 block font-medium">
          Let&apos;s Work Together
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-8 font-serif italic tracking-tight leading-[0.9]">
          Ready to build <br className="hidden sm:block" />
          <span className="text-[#E1E0CC] font-sans not-italic font-medium">something amazing?</span>
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg text-white/50 mb-12 max-w-lg mx-auto leading-relaxed">
          Let&apos;s collaborate on your next big idea. I&apos;m currently available for freelance projects and open to full-time opportunities.
        </p>
        
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-primary text-black font-medium tracking-wide rounded-full transition-colors hover:bg-[#E1E0CC]/90"
        >
          Get in Touch
        </motion.a>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center text-[10px] sm:text-xs text-white/30 tracking-wider">
        © {new Date().getFullYear()} Yugha. All rights reserved.
      </div>
    </section>
  );
}
