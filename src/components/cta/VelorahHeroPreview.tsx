"use client";
import React from "react";

const VIDEO_SRC = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

export default function VelorahHeroPreview() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl" style={{ backgroundColor: "hsl(201 100% 13%)" }}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_SRC}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Nav row */}
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
          <div className="font-serif text-white text-sm sm:text-base md:text-lg tracking-tight">
            Velorah<sup className="text-[0.5em]">®</sup>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-[9px] lg:text-[10px] text-white/60">
            <span className="text-white">Home</span>
            <span className="hover:text-white cursor-pointer transition-colors">Studio</span>
            <span className="hover:text-white cursor-pointer transition-colors">About</span>
            <span className="hover:text-white cursor-pointer transition-colors">Journal</span>
            <span className="hover:text-white cursor-pointer transition-colors">Reach Us</span>
          </div>

          <button className="liquid-glass rounded-full px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] text-white hover:bg-white/10 transition-colors">
            Begin Journey
          </button>
        </div>

        {/* Hero block */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-3 sm:px-4 pt-3 sm:pt-5 md:pt-7 pb-6 mt-[-10%] sm:mt-[-5%]">
          <h1 className="font-serif font-normal leading-[0.95] tracking-[-0.03em] text-lg sm:text-2xl md:text-3xl lg:text-4xl max-w-[90%] text-white animate-fade-rise">
            Where <em className="not-italic text-white/55">dreams</em> rise <br className="hidden sm:block" />
            <em className="not-italic text-white/55">through the silence.</em>
          </h1>
          <p className="animate-fade-rise-delay text-white/60 text-[9px] sm:text-[11px] md:text-xs leading-relaxed max-w-[80%] sm:max-w-sm md:max-w-md mt-2 sm:mt-3 md:mt-4">
            We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
          </p>
          <button className="animate-fade-rise-delay-2 liquid-glass rounded-full px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-[9px] sm:text-[10px] text-white mt-3 sm:mt-4 md:mt-5 hover:bg-white/10 transition-colors">
            Begin Journey
          </button>
        </div>
      </div>
    </div>
  );
}
