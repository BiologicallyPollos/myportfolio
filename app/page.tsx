"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  // Using a simplified transition object to satisfy strict Type checking
  const slideFromLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  };

  const slideFromRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen bg-[#021509] text-white overflow-x-hidden selection:bg-emerald-500/30">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center">
        <div 
          className="absolute inset-0 z-0 opacity-10 grayscale pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=2070')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="z-10 text-center px-4"
        >
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-emerald-500">
            Josh Funnell
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/40 font-medium tracking-[0.2em] uppercase">
            Project Management • Strategy • Communication
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-6 space-y-40 pb-40">
        
        {/* 01. Visuals - Slide from Left */}
        <motion.section {...slideFromLeft} className="space-y-10 pt-20">
          <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-500 uppercase">01. Visuals</h2>
          <div className="aspect-video w-full rounded-3xl overflow-hidden bg-emerald-900/20 border border-white/10 shadow-2xl">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 transition-all duration-1000">
              <source src="https://assets.mixkit.co/videos/preview/mixkit-panning-over-a-british-flag-on-top-of-a-building-34244-large.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.section>

        {/* 02. Speeches - Slide from Right */}
        <motion.section {...slideFromRight} className="space-y-10">
          <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-500 uppercase">02. Speeches</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 transition-all duration-500 hover:bg-white/[0.05]">
              <span className="text-emerald-500 font-mono text-xs mb-4 block tracking-widest uppercase">Feb 2026</span>
              <h3 className="text-2xl font-bold mb-3">Strategic Efficiency</h3>
              <p className="text-white/40 leading-relaxed">Keynote on legislative frameworks and project delivery.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 transition-all duration-500 hover:bg-white/[0.05]">
              <span className="text-emerald-500 font-mono text-xs mb-4 block tracking-widest uppercase">Jan 2026</span>
              <h3 className="text-2xl font-bold mb-3">Digital Westminster</h3>
              <p className="text-white/40 leading-relaxed">A roadmap for technological integration in public sectors.</p>
            </div>
          </div>
        </motion.section>

        {/* 03. Writing - Slide from Left */}
        <motion.section {...slideFromLeft} className="space-y-10">
          <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-500 uppercase">03. Writing</h2>
          <div className="p-12 rounded-[40px] bg-gradient-to-br from-emerald-500/10 to-transparent border border-white/5 group transition-all duration-700 hover:border-emerald-500/30">
            <h3 className="text-4xl font-bold mb-6 italic tracking-tight text-emerald-50/90 leading-tight">
              "The verifiable truth about digital infrastructure."
            </h3>
            <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] font-bold">The Spectator • 2026</p>
          </div>
        </motion.section>

        {/* Footer / LinkedIn - Slide from Right */}
        <motion.footer {...slideFromRight} className="pt-20 flex flex-col items-center">
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            className="px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-emerald-50 transition-all shadow-xl hover:shadow-emerald-500/20 active:scale-95"
          >
            Connect on LinkedIn
          </a>
          <p className="mt-12 text-white/10 font-mono text-[10px] tracking-[0.5em] uppercase">© 2026 Josh Funnell</p>
        </motion.footer>
      </div>
    </main>
  );
}