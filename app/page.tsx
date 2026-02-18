"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  // Safe-mode animation profiles (no 'ease' string to avoid Type errors)
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen bg-[#021509] text-white overflow-x-hidden selection:bg-emerald-500/30">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div 
          className="absolute inset-0 z-0 opacity-5 grayscale pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=2070')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 max-w-4xl"
        >
          {/* Brighter Pure White for "Pop" */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-emerald-400">
            Hello, I'm Josh Funnell
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-50/90 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
            I work at the intersection between <span className="text-white font-medium border-b border-emerald-500/50">Westminster and business</span>. 
            I take complex issues and communicate them as compelling stories. 
            You can see some of the stories below.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
          <div className="w-px h-12 bg-white"></div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-6 space-y-40 pb-40">
        
        {/* 01. Visuals */}
        <motion.section {...fadeInUp} className="space-y-10 pt-20">
          <h2 className="text-xs font-bold tracking-[0.4em] text-emerald-500 uppercase">01. Visuals</h2>
          <div className="aspect-video w-full rounded-3xl overflow-hidden bg-emerald-900/20 border border-white/10 shadow-2xl">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 transition-all duration-1000">
              <source src="https://assets.mixkit.co/videos/preview/mixkit-panning-over-a-british-flag-on-top-of-a-building-34244-large.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.section>

        {/* 02. Speeches */}
        <motion.section {...fadeInUp} className="space-y-10">
          <h2 className="text-xs font-bold tracking-[0.4em] text-emerald-500 uppercase">02. Speeches</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10">
              <span className="text-emerald-500 font-mono text-xs mb-4 block uppercase tracking-widest">Feb 2026</span>
              <h3 className="text-2xl font-bold mb-3 text-white">Strategic Efficiency</h3>
              <p className="text-white/40">Keynote on legislative frameworks and project delivery.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10">
              <span className="text-emerald-500 font-mono text-xs mb-4 block uppercase tracking-widest">Jan 2026</span>
              <h3 className="text-2xl font-bold mb-3 text-white">Digital Westminster</h3>
              <p className="text-white/40">A roadmap for technological integration in public sectors.</p>
            </div>
          </div>
        </motion.section>

        {/* 03. Writing */}
        <motion.section {...fadeInUp} className="space-y-10">
          <h2 className="text-xs font-bold tracking-[0.4em] text-emerald-500 uppercase">03. Writing</h2>
          <div className="p-12 rounded-[40px] bg-gradient-to-br from-emerald-500/10 to-transparent border border-white/5">
            <h3 className="text-4xl font-bold mb-6 italic tracking-tight text-white">
              "The verifiable truth about digital infrastructure."
            </h3>
            <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] font-bold">The Spectator • 2026</p>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer {...fadeInUp} className="pt-20 flex flex-col items-center">
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            className="px-10 py-5 bg-white text-[#021509] rounded-full font-bold hover:bg-emerald-50 transition-all shadow-xl"
          >
            Connect on LinkedIn
          </a>
          <p className="mt-12 text-white/10 font-mono text-[10px] tracking-[0.5em] uppercase">© 2026 Josh Funnell</p>
        </motion.footer>
      </div>
    </main>
  );
}