"use client";

import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  // Carousel Setup for Center Alignment
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center', containScroll: false }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const slideUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  // Video data
  const videos = [
    "https://assets.mixkit.co/videos/preview/mixkit-panning-over-a-british-flag-on-top-of-a-building-34244-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-curvy-road-along-the-coastline-43224-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
  ];

  return (
    <main className="min-h-screen bg-[#021509] text-white overflow-x-hidden selection:bg-emerald-500/30">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0 opacity-5 grayscale pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=2070')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10 w-full max-w-7xl">
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

      {/* Cinematic Video Carousel Section */}
      <div className="py-24 relative z-10">
        <motion.div {...slideUp} className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-xs font-bold tracking-[0.4em] text-emerald-500 uppercase">01. Visuals</h2>
        </motion.div>

        {/* Carousel with Edge Fading Mask */}
        <div className="relative group">
          {/* Fading Mask Overlays */}
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#021509] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#021509] to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4">
              {videos.map((src, index) => (
                <div key={index} className="flex-[0_0_80%] md:flex-[0_0_60%] min-w-0 pl-4 relative">
                  <div className="aspect-video rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                    >
                      <source src={src} type="video/mp4" />
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-white/20 text-sm font-mono tracking-widest uppercase mt-12">Swipe to Explore</p>
      </div>

      {/* Remaining Content (Floating Cards removed for clean look) */}
      <div className="max-w-5xl mx-auto px-6 space-y-40 pb-40 relative z-10">
        
        {/* 02. Speeches */}
        <motion.section {...slideUp} className="space-y-10">
          <h2 className="text-xs font-bold tracking-[0.4em] text-emerald-500 uppercase">02. Speeches</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { date: "Feb 2026", title: "Strategic Efficiency", desc: "Keynote on legislative frameworks." },
              { date: "Jan 2026", title: "Digital Westminster", desc: "A roadmap for technological integration." }
            ].map((s, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all">
                <span className="text-emerald-500 font-mono text-xs mb-4 block uppercase tracking-widest">{s.date}</span>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/40 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 03. Writing */}
        <motion.section {...slideUp} className="space-y-10 text-center">
          <h2 className="text-xs font-bold tracking-[0.4em] text-emerald-500 uppercase">03. Writing</h2>
          <div className="py-20 border-y border-white/5">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 italic tracking-tight text-emerald-50/90 leading-tight">
              "The verifiable truth about digital infrastructure."
            </h3>
            <p className="text-emerald-500 uppercase tracking-[0.3em] text-sm font-bold">The Spectator • 2026</p>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="pt-20 flex flex-col items-center">
          <a href="https://linkedin.com/in/your-profile" target="_blank" className="px-12 py-6 bg-white text-[#021509] rounded-full font-bold hover:scale-105 transition-all">
            Connect on LinkedIn
          </a>
          <p className="mt-12 text-white/10 font-mono text-[10px] tracking-[0.5em] uppercase">© 2026 Josh Funnell</p>
        </footer>
      </div>
    </main>
  );
}