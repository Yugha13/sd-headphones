"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "../ui/WordsPullUp";

const navLinks = ["Our story", "Collective", "Workshops", "Programs", "Inquiries"];

export default function PrismaHero() {
  return (
    <section className="relative w-full h-screen px-4 pb-4 md:px-6 md:pb-6 pt-0 bg-black">
      <div className="relative w-full h-full rounded-b-2xl md:rounded-b-[2rem] overflow-hidden">
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Overlays */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />



        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20">
          <div className="grid grid-cols-12 gap-6 items-end">
            
            {/* Left: Giant Heading (8 cols) */}
            <div className="col-span-12 lg:col-span-8">
              <WordsPullUp
                text="Prisma"
                showAsterisk={true}
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC]"
              />
            </div>

            {/* Right: Text + Button (4 cols) */}
            <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end justify-end gap-6 lg:pb-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] max-w-md lg:text-right"
              >
                Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-2 bg-primary rounded-full pl-6 pr-1 sm:pr-2 py-1 sm:py-2 hover:gap-3 transition-all active:scale-95"
              >
                <span className="text-black font-medium text-sm sm:text-base pr-2">Join the lab</span>
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
              </motion.button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
