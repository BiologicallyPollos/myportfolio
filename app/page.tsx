"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  // Simple animation settings
  const fadeProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
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
        />

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
        
        {/* Videos Section */}
        <motion.section {...fadeProps} className="space-y-10 pt-20">
          <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-500 uppercase">01. Visuals</h2>
          <div className="aspect-video w-full rounded-3xl overflow-hidden bg-emerald-900/20 border border-white/10">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale brightness-50">
              <source src="https://assets.mixkit.co/videos/preview/mixkit-panning-over-a-british-flag-on-top-of-a-building-34244-large.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.section>

        {/* Speeches Section */}
        <motion.section {...fadeProps} className="space-y-10">
          <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-500 uppercase">02. Speeches</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 transition-colors">
              <span className="text-emerald-500 font-mono text-xs mb-4 block">FEB 2026</span>
              <h3 className="text-2xl font-bold mb-3">Strategic Efficiency</h3>
              <p className="text-white/40">Keynote on legislative frameworks.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 transition-colors">
              <span className="text-emerald-500 font-mono text-xs mb-4 block">JAN 2026</span>
              <h3 className="text-2xl font-bold mb-3">Digital Westminster</h3>
              <p className="text-white/40">A roadmap for technological integration.</p>
            </div>
          </div>
        </motion.section>

        {/* Op-Eds Section */}
        <motion.section {...fadeProps} className="space-y-10">
          <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-500 uppercase">03. Writing</h2>
          <div className="p-12 rounded-[40px] bg-emerald-500/5 border border-white/5">
            <h3 className="text-4xl font-bold mb-6 italic tracking-tight text-emerald-50/90">
              "The verifiable truth about digital infrastructure."
            </h3>
            <p className="text-white/50 uppercase tracking-widest text-xs">The Spectator • 2026</p>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer {...fadeProps} className="pt-20 flex flex-col items-center">
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            className="px-10 py-5 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
          >
            Connect on LinkedIn
          </a>
          <p className="mt-12 text-white/10 font-mono text-[10px] tracking-[0.5em] uppercase">© 2026 Josh Funnell</p>
        </motion.footer>
      </div>
    </main>
  );
}