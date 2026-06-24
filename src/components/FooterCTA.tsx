"use client";


export default function FooterCTA() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-background border-t border-white/5">
      <div className="text-center px-6 md:px-0">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white/90 mb-6">
          Ready to build something amazing?
        </h2>
        <p className="text-base md:text-lg text-white/50 mb-10 max-w-md mx-auto">
          Let's collaborate on your next big idea. I'm currently available for freelance projects and open to full-time opportunities.
        </p>
        
        <button className="px-8 py-4 bg-white text-black font-medium tracking-wide rounded-full hover:bg-white/90 transition-colors transform hover:scale-105 active:scale-95 duration-200">
          Get in Touch
        </button>
      </div>

      <div className="absolute bottom-8 text-xs text-white/30 tracking-wider">
        © {new Date().getFullYear()} SonicWave Audio. All rights reserved.
      </div>
    </section>
  );
}
