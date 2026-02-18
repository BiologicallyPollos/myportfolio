"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  // Animation profiles for the floating cards
  const slideFromLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.9 }
  };

  const slideFromRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.9 }
  };

  const cardStyle = "bg-white rounded-[2rem] p-10 md:p-16 shadow-2xl shadow-emerald-900/10";

  return (
    <main className="min-h-screen bg-[#021509] text-white overflow-x-hidden selection:bg-emerald-500/30">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
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
          className="z-10 w-full max-w-7xl"
        >
          <h1 className="text-[7vw] md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-emerald-400 whitespace-nowrap">
            Hello, I'm Josh Funnell
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-50/90 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
            I work at the intersection between <span className="text-white font-medium border-b border-emerald-500/50">Westminster and business</span>. 
            I take complex issues and communicate them as compelling stories. 
            You can see some of the stories below.
          </p>
        </motion.div>
      </section>

      {/* Floating Content Cards with Slide Animations */}
      <div className="max-w-6xl mx-auto px-6 space-y-24 pb-40 relative z-10">
        
        {/* 01. Visuals - Slides in from Left */}
        <motion.section {...slideFromLeft} className={cardStyle}>
          <div className="space-y-10">
            <h2 className="text-xs font-bold tracking-[0.4em] text-emerald-600 uppercase">01. Visuals</h2>
            <div className="aspect-video w-full rounded-3xl overflow-hidden bg-gray-100 border border-gray-200">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-panning-over-a-british-flag-on-top-of-a-building-34244-large.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.section>

        {/* 02. Speeches - Slides in from Right */}
        <motion.section {...slideFromRight} className={cardStyle}>
          <div className="space-y-10">
            <h2 className="text-xs font-bold tracking-[0.4em] text-emerald-600 uppercase">02. Speeches</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
                <span className="text-emerald-600 font-mono text-xs mb-4 block uppercase tracking-widest">Feb 2026</span>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Strategic Efficiency</h3>
                <p className="text-gray-600 leading-relaxed">Keynote on legislative frameworks and project delivery.</p>
              </div>
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
                <span className="text-emerald-600 font-mono text-xs mb-4 block uppercase tracking-widest">Jan 2026</span>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Digital Westminster</h3>
                <p className="text-gray-600 leading-relaxed">A roadmap for technological integration in public sectors.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 03. Writing - Slides in from Left */}
        <motion.section {...slideFromLeft} className={cardStyle}>
          <div className="space-y-10">
            <h2 className="text-xs font-bold tracking-[0.4em] text-emerald-600 uppercase">03. Writing</h2>
            <div className="p-12 rounded-[3rem] bg-gradient-to-br from-gray-50 to-white border border-emerald-100">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 italic tracking-tight text-gray-900 leading-tight">
                "The verifiable truth about digital infrastructure."
              </h3>
              <p className="text-emerald-600 uppercase tracking-[0.3em] text-[10px] font-bold">The Spectator • 2026</p>
            </div>
          </div>
        </motion.section>

        {/* Footer - Slides in from Right */}
        <motion.footer {...slideFromRight} className={`${cardStyle} text-center`}>
          <div className="flex flex-col items-center py-10">
            <a 
              href="https://linkedin.com/in/your-profile" 
              target="_blank" 
              className="px-12 py-6 bg-[#021509] text-white rounded-full font-bold hover:bg-emerald-800 transition-all shadow-lg"
            >
              Connect on LinkedIn
            </a>
            <p className="mt-12 text-gray-400 font-mono text-[10px] tracking-[0.5em] uppercase">© 2026 Josh Funnell</p>
          </div>
        </motion.footer>

      </div>
    </main>
  );
}