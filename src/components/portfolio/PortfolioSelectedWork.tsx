"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, Stripe, and a highly optimized PostgreSQL database. Features real-time inventory and analytics.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description: "A high-performance dashboard for visualizing large datasets using WebGL and WebSockets. Handles thousands of events per second with zero lag.",
    tags: ["React", "WebGL", "WebSockets", "Node.js"],
    link: "#"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that leverages Large Language Models to generate, edit, and optimize marketing copy automatically.",
    tags: ["OpenAI", "Python", "FastAPI", "React"],
    link: "#"
  },
];

export default function PortfolioSelectedWork() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="projects" className="relative w-full py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-primary uppercase tracking-widest text-[10px] sm:text-xs mb-4 block">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#E1E0CC]">
              Featured Projects.
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/50 max-w-md">
            A selection of my recent work. These projects showcase my ability to build complex, scalable applications from the ground up.
          </p>
        </div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.a
              href={project.link}
              key={project.id}
              variants={itemVariants}
              className="group relative p-8 rounded-3xl bg-[#101010] border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-12">
                <h3 className="text-xl md:text-2xl font-medium text-[#E1E0CC] group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black text-[#E1E0CC] transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-12 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-4 py-1.5 text-xs font-medium text-[#E1E0CC]/70 bg-black rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
