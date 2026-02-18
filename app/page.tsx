"use client";

import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
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

  const videos = [
    "https://assets.mixkit.co/videos/preview/mixkit-panning-over-a-british-flag-on-top-of-a-building-34244-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-curvy-road-along-the-coastline-43224-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
  ];

  return (
    // Changed background color to deep slate blue and selection to sky blue
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-sky-500/30">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* --- NEW DUAL BACKGROUND IMAGES --- */}
        {/* Layer 1: City of London (Dramatic Night Shot) */}
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-luminosity pointer-events-none"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=2070')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        />
        {/* Layer 2: Westminster (Dramatic Night Shot) - Faded over the city */}
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-lighten pointer-events-none"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1520986604055-aea6a3866991?auto=format&fit=crop&q=80&w=2070')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to right, transparent, black)' // Creates the fade effect between the two
          }}
        />
         {/* A subtle blue gradient overlay to unify the "shiny" look */}
         <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/80 pointer-events-none"></div>
        {/* ---------------------------------- */}


        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10 w-full max-w-7xl">
          {/* Updated Gradient to Sky Blue */}
          <h1 className="text-[7vw] md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-sky-400 whitespace-nowrap">
            Hello, I'm Josh Funnell
          </h1>
          {/* Updated accent colors to Sky Blue */}
          <p className="text-xl md:text-2xl text-sky-50/90 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
            I work at the intersection between <span className="text-white font-medium border-b border-sky-500/50">Westminster and business</span>. 
            I take complex issues and communicate them as compelling stories. 
            You can see some of the stories below.
          </p>
        </motion.div>
      </section>

      {/* Video Section */}
      <div className="py-32 relative z-10">
        <motion.div {...slideUp} className="max-w-4xl mx-auto px-6 mb-16 text-center">
          {/* Updated accent color */}
          <h2 className="text-xs font-medium tracking-[0.4em] text-sky-400 uppercase mb-8">Video</h2>
          <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
            These days, there's so much information. It's difficult to know where to start. 
            But <span className="text-white font-normal">cutting through to what's important</span> is crucial for businesses and politicians alike. 
            Video bridges that gap — transforming abstract policy and complex corporate strategy into human stories.
          </p>
        </motion.div>

        {/* Carousel with Edge Fading Mask */}
        <div className="relative group">
          {/* Updated masks to match the new dark blue background */}
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4">
              {videos.map((src, index) => (
                <div key={index} className="flex-[0_0_80%] md:flex-[0_0_60%] min-w-0 pl-4 relative">
                  {/* Added a subtle sky blue border glow for shininess */}
                  <div className="aspect-video rounded-[2rem] overflow-hidden border border-sky-500/10 shadow-2xl shadow-sky-900/20 transition-transform duration-700 group-hover:scale-[1.02]">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000">
                      <source src={src} type="video/mp4" />
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Speeches & Writing Section */}
      <div className="max-w-5xl mx-auto px-6 space-y-48 pb-48 relative z-10">
        
        {/* Speeches */}
        <motion.section {...slideUp} className="space-y-16">
          <div className="text-center">
            {/* Updated accent color */}
            <h2 className="text-xs font-medium tracking-[0.4em] text-sky-400 uppercase mb-4">Speeches</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { date: "Feb 2026", title: "Strategic Efficiency", desc: "Keynote on legislative frameworks." },
              { date: "Jan 2026", title: "Digital Westminster", desc: "A roadmap for technological integration." }
            ].map((s, i) => (
              // Updated borders and hover states for blue vibe
              <div key={i} className="p-10 rounded-[2rem] bg-white/[0.02] border border-sky-500/10 hover:bg-sky-900/[0.1] transition-all group">
                <span className="text-sky-400 font-mono text-xs mb-4 block uppercase tracking-widest group-hover:text-sky-300 transition-colors">{s.date}</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Writing */}
        <motion.section {...slideUp} className="space-y-16 text-center">
          {/* Updated accent color */}
          <h2 className="text-xs font-medium tracking-[0.4em] text-sky-400 uppercase">Writing</h2>
          {/* Updated border color */}
          <div className="py-24 border-y border-sky-500/10">
            {/* Updated text colors */}
            <h3 className="text-4xl md:text-5xl font-bold mb-8 italic tracking-tight text-sky-50/90 leading-tight">
              "The verifiable truth about digital infrastructure."
            </h3>
            <p className="text-sky-400 uppercase tracking-[0.3em] text-sm font-bold">The Spectator • 2026</p>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="pt-24 flex flex-col items-center border-t border-sky-500/10">
          <a href="https://linkedin.com/in/your-profile" target="_blank" className="px-12 py-6 bg-white text-slate-950 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-sky-900/10">
            Connect on LinkedIn
          </a>
          <p className="mt-12 text-white/10 font-mono text-[10px] tracking-[0.5em] uppercase">© 2026 Josh Funnell</p>
        </footer>
      </div>
    </main>
  );
}