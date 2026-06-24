"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, Stripe, and a highly optimized PostgreSQL database. Features real-time inventory and analytics.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description: "A high-performance dashboard for visualizing large datasets using WebGL and WebSockets. Handles thousands of events per second with zero lag.",
    tags: ["React", "WebGL", "WebSockets", "Node.js"],
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that leverages Large Language Models to generate, edit, and optimize marketing copy automatically.",
    tags: ["OpenAI", "Python", "FastAPI", "React"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-32 bg-black/40 backdrop-blur-md border-t border-white/5 z-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white/90 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-white/50 max-w-2xl">
            A selection of my recent work. These projects showcase my ability to build complex, scalable applications from the ground up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
            >
              <h3 className="text-2xl font-semibold text-white/90 mb-3">
                {project.title}
              </h3>
              <p className="text-white/60 mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-white/70 bg-white/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
