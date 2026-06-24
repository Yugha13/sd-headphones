"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle from "../ui/WordsPullUpMultiStyle";

export default function PrismaFeatures() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const featureCards = [
    {
      title: "Frontend Architecture.",
      number: "01",
      icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
      items: [
        "React & Next.js",
        "Tailwind CSS & Framer Motion",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      title: "Backend Systems.",
      number: "02",
      icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
      items: [
        "Node.js & Express",
        "PostgreSQL & MongoDB",
        "RESTful APIs & GraphQL",
      ],
    },
    {
      title: "Clean Code.",
      number: "03",
      icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
      items: [
        "TypeScript & Eslint",
        "Unit & Integration Testing",
        "CI/CD Pipelines",
      ],
    },
  ];

  return (
    <section className="relative min-h-screen bg-black py-20 px-4 md:px-6">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div className="text-center px-4">
          <WordsPullUpMultiStyle
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight"
            segments={[
              { text: "Studio-grade architecture for modern web apps. ", className: "text-[#E1E0CC] block" },
              { text: "Built for scale. Powered by clean code.", className: "text-gray-500 block" },
            ]}
          />
        </div>

        {/* 4-Col Card Grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]"
        >
          {/* Video Card (Col 1) */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-2xl overflow-hidden h-[400px] lg:h-full group"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
            <div className="absolute bottom-6 left-6 text-[#E1E0CC] font-medium text-lg">
              Interactive Experiences.
            </div>
          </motion.div>

          {/* Feature Cards (Cols 2-4) */}
          {featureCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-[#212121] rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-[400px] lg:h-full group"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                  />
                  <span className="text-gray-500 font-mono text-sm">{card.number}</span>
                </div>
                <h3 className="text-[#E1E0CC] text-xl font-medium">{card.title}</h3>
                <ul className="flex flex-col gap-3 mt-2">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#" className="flex items-center gap-2 text-[#E1E0CC] hover:text-primary transition-colors mt-8 group-hover:gap-3">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
