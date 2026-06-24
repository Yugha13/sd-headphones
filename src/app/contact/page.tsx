"use client";

import { motion } from "framer-motion";
import { useState } from "react";
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const DribbbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function ContactPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const helpTags = [
    "Website", "Mobile App", "Web App", "E-Commerce",
    "Visual Identity", "3D & Motion", "Digital Marketing",
    "Growth & Consulting", "Other"
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <main className="relative w-full h-screen px-4 pb-4 md:px-6 md:pb-6 pt-0 bg-black">
      <div className="relative w-full h-full rounded-b-2xl md:rounded-b-[2rem] overflow-hidden bg-zinc-900">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          />
          {/* Overlays */}
          <div className="absolute inset-0 noise-overlay opacity-[0.4] mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 w-full h-full flex flex-col-reverse lg:flex-row items-end justify-between p-6 sm:p-10 md:p-12 lg:p-16 gap-8 lg:gap-12">
          
          {/* Left Side: Form Card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[500px] bg-black/40 backdrop-blur-xl text-white rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.7)] border border-white/10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Say hello! 👋</h2>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <p className="text-xs text-white/60 font-medium mb-0.5">Drop us a line</p>
                  <a href="mailto:hello@forma.co" className="text-sm font-bold text-primary hover:text-white transition-colors">
                    hello@forma.co
                  </a>
                </div>
                
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors">
                    <TwitterIcon className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors">
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors">
                    <DribbbleIcon className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors">
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink-0 mx-4 text-white/40 text-[10px] uppercase font-bold tracking-widest">OR</span>
                <div className="flex-grow border-t border-white/10"></div>
              </div>

              <form className="mt-2 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <p className="text-xs font-bold mb-3 text-white/90">Tell us about your vision</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <input 
                      type="text" 
                      placeholder="Full name" 
                      className="w-full bg-white/5 border border-white/10 placeholder:text-white/40 text-white rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full bg-white/5 border border-white/10 placeholder:text-white/40 text-white rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <textarea 
                    placeholder="What are you looking to build or improve..." 
                    rows={2}
                    className="w-full bg-white/5 border border-white/10 placeholder:text-white/40 text-white rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold mb-3 text-white/90">I need help with...</p>
                  <div className="flex flex-wrap gap-2">
                    {helpTags.map(tag => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
                          selectedTags.includes(tag) 
                            ? "bg-[#E1E0CC] text-black border-[#E1E0CC]" 
                            : "bg-transparent text-white/60 border-white/20 hover:border-white/40"
                        } border`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#E1E0CC] text-black rounded-full py-3.5 text-[13px] font-bold hover:bg-white transition-colors mt-6"
                >
                  Send my message
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Side: Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-end lg:items-end text-left lg:text-right drop-shadow-2xl">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white mb-2 lg:mb-4" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}>
                We craft bold ideas <br />
                and ship them as <span className="font-serif italic text-[#E1E0CC]">products</span>
              </h1>
            </div>
          </div>
      </div>
      </div>
    </main>
  );
}
