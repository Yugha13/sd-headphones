"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Layout, Database } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background pt-24 pb-16 flex flex-col items-center overflow-x-hidden">
      {/* Background generic gradient */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col gap-32 mt-16">
        
        {/* Hero Section */}
        <section className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-mono tracking-wider text-white/50 uppercase">
              Hello, World.
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mt-4 mb-6">
              I'm Alex. <br />
              <span className="text-white/40">I build modern web apps.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
              Full-Stack Software Engineer specializing in React, Next.js, and scalable backend systems. Turning complex problems into elegant, user-centric solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mt-4"
          >
            <Link 
              href="/about"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all active:scale-95"
            >
              Interactive About Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="flex flex-col gap-12 mb-32">
          <h2 className="text-3xl font-semibold tracking-tight text-white/90">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <Layout className="w-8 h-8 text-blue-400 mb-6" />
              <h3 className="text-xl font-medium text-white mb-3">Frontend Architecture</h3>
              <p className="text-white/60 leading-relaxed">
                Building highly interactive, accessible, and performant user interfaces using React, Next.js, and Framer Motion.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <Database className="w-8 h-8 text-purple-400 mb-6" />
              <h3 className="text-xl font-medium text-white mb-3">Backend Systems</h3>
              <p className="text-white/60 leading-relaxed">
                Designing robust APIs and scalable databases with Node.js, Python, PostgreSQL, and Redis.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <Code className="w-8 h-8 text-emerald-400 mb-6" />
              <h3 className="text-xl font-medium text-white mb-3">Clean Code</h3>
              <p className="text-white/60 leading-relaxed">
                Writing testable, maintainable, and well-documented code following SOLID principles and industry best practices.
              </p>
            </motion.div>

          </div>
        </section>

      </div>
    </main>
  );
}
