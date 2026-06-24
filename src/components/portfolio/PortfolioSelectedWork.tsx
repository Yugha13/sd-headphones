"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full-Stack Development",
    description: "A comprehensive e-commerce solution engineered for luxury fashion. Built with Next.js, Stripe, and a highly optimized PostgreSQL database, featuring real-time inventory synchronization and advanced analytics.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    image: "/projects/ecommerce.png",
    link: "#"
  },
  {
    id: 2,
    title: "Real-time Analytics",
    category: "Data Visualization",
    description: "A high-performance command center for visualizing massive global datasets. Leveraging WebGL and WebSockets to handle thousands of events per second with absolute zero latency.",
    tags: ["React", "WebGL", "WebSockets", "Node.js"],
    image: "/projects/analytics.png",
    link: "#"
  },
  {
    id: 3,
    title: "AI Content Generator",
    category: "Machine Learning / UX",
    description: "An elegant, minimalist application that leverages Large Language Models to generate, edit, and optimize creative copy autonomously within a distraction-free environment.",
    tags: ["OpenAI", "Python", "FastAPI", "React"],
    image: "/projects/ai_content.png",
    link: "#"
  },
];

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  const isEven = index % 2 === 0;

  return (
    <div ref={cardRef} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 mb-32 lg:mb-48`}>
      
      {/* Image Side */}
      <div className="w-full lg:w-3/5 relative rounded-2xl md:rounded-[2rem] overflow-hidden group aspect-[4/3] lg:aspect-[16/10] bg-[#101010]">
        <motion.img
          style={{ y }}
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-[120%] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-gray-500 font-mono text-sm">0{index + 1}</span>
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="text-primary text-xs uppercase tracking-widest">{project.category}</span>
        </div>

        <h3 className="text-4xl md:text-5xl lg:text-6xl text-[#E1E0CC] font-serif italic mb-6 leading-[1.1]">
          {project.title}
        </h3>

        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="px-4 py-2 text-xs font-medium text-white/70 bg-white/5 rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <a 
          href={project.link}
          className="group inline-flex items-center gap-4 text-[#E1E0CC] hover:text-primary transition-colors w-max"
        >
          <span className="text-sm font-medium uppercase tracking-widest">View Project</span>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </a>
      </div>

    </div>
  );
};

export default function PortfolioSelectedWork() {
  return (
    <section id="projects" className="relative w-full py-32 md:py-48 bg-black overflow-hidden">
      
      {/* Background grid/noise (optional, keeping it clean for now) */}
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-32 md:mb-48 text-center">
          <span className="text-primary uppercase tracking-widest text-[10px] sm:text-xs mb-6 block">
            Selected Work
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#E1E0CC] leading-none">
            Featured Projects.
          </h2>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
