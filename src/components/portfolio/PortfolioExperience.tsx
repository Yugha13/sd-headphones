"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import WordsPullUpMultiStyle from "../ui/WordsPullUpMultiStyle";
import AnimatedLetter from "../ui/AnimatedLetter";

export default function PrismaAbout() {
  const paragraphRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const bioText = "Over the last few years, I have worked with modern web technologies to craft highly interactive user interfaces and robust architectures. Together with talented teams, we have created scalable platforms that push the boundaries of what is possible in the browser.";
  const bioChars = bioText.split("");

  return (
    <section className="w-full bg-black py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-3xl md:rounded-[2.5rem] p-8 sm:p-12 md:p-20 flex flex-col items-center text-center">
        
        <span className="text-primary uppercase tracking-widest text-[10px] sm:text-xs mb-8 sm:mb-12">
          Software Engineer
        </span>

        <WordsPullUpMultiStyle
          containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] text-white"
          segments={[
            { text: "I am Yugha, " },
            { text: "a Full-Stack Developer. ", className: "font-serif italic text-primary" },
            { text: "I have skills in React, Next.js, and scalable backend systems." },
          ]}
        />

        <div className="mt-16 sm:mt-24 max-w-2xl mx-auto">
          <p
            ref={paragraphRef}
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed"
          >
            {bioChars.map((char, index) => (
              <AnimatedLetter
                key={index}
                char={char}
                index={index}
                totalChars={bioChars.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </p>
        </div>

      </div>
    </section>
  );
}
