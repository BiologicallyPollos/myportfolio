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

  const headline = "Hello, I'm Josh Funnell";
  
  // High-visibility typewriter logic
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 } 
    },
  };

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
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-sky-500/30 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Background Visuals Layer */}
        <div className="absolute inset-0 z-0 flex pointer-events-none w-full h-full">
          
          {/* Left: City of London (Sharper, more visible) */}
          <motion.div 
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 0.4 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute left-0 top-0 bottom-0 w-1/2 h-full"
            style={{ 
              backgroundImage: `url('/CoL Cover Photo.jpg')`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'left center',
              maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)'
            }}
          />

          {/* Right: Parliament (Sharper, more visible) */}
          <motion.div 
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 0.4 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
            className="absolute right-0 top-0 bottom-0 w-1/2 h-full"
            style={{ 
              backgroundImage: `url('/Parliament Cover Photo.jpg')`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'right center',
              maskImage: 'linear-gradient(to left, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 70%, transparent 100%)'
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950 z-10" />
        </div>

        {/* Content Layer - FORCED TO TOP */}
        <div className="relative z-[100] w-full max-w-7xl">
          <motion.h1 
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-[7vw] md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400 whitespace-nowrap"
          >
            {headline.split("").map((char, index) => (
              <motion.span key={index} variants={letter} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1.5 }}
            className="text-xl md:text-2xl text-sky-50/80 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4"
          >
            I work at the intersection between <span className="text-white font-medium border-b border-sky-500/30">Westminster and business</span>. 
            I take complex issues and communicate them as compelling stories. 
            You can see some of the stories below.
          </motion.p>
        </div>
      </section>

      {/* Video Section */}
      <div className="py-32 relative z-10">
        <motion.div {...slideUp} className="max-w-4xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-xs font-medium tracking-[0.4em] text-sky-400 uppercase mb-8">Video</h2>
          <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
            These days, there's so much information. It's difficult to know where to start. 
            But <span className="text-white font-normal">cutting through to what's important</span> is crucial for businesses and politicians alike. 
            Video bridges that gap — transforming abstract policy and complex corporate strategy into human stories.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative group px-4">
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4">
              {videos.map((src, index) => (
                <div key={index} className="flex-[0_0_85%] md:flex-[0_0_65%] min-w-0 pl-4 relative">
                  <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
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

      {/* Speeches & Writing */}
      <div className="max-w-5xl mx-auto px-6 space-y-48 pb-48 relative z-10">
        <motion.section {...slideUp} className="space-y-16">
          <div className="text-center">
            <h2 className="text-xs font-medium tracking-[0.4em] text-sky-400 uppercase mb-4">Speeches</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { date: "Feb 2026", title: "Strategic Efficiency", desc: "Keynote on legislative frameworks." },
              { date: "Jan 2026", title: "Digital Westminster", desc: "A roadmap for technological integration." }
            ].map((s, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-white/[0.02] border border-sky-500/10 hover:bg-sky-900/[0.1] transition-all">
                <span className="text-sky-400 font-mono text-xs mb-4 block uppercase tracking-widest">{s.date}</span>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/40 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...slideUp} className="space-y-16 text-center">
          <h2 className="text-xs font-medium tracking-[0.4em] text-sky-400 uppercase">Writing</h2>
          <div className="py-24 border-y border-sky-500/10">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 italic tracking-tight text-sky-50/90 leading-tight">
              "The verifiable truth about digital infrastructure."
            </h3>
            <p className="text-sky-400 uppercase tracking-[0.3em] text-sm font-bold">The Spectator • 2026</p>
          </div>
        </motion.section>

        <footer className="pt-24 flex flex-col items-center border-t border-white/5">
          <a href="https://linkedin.com/in/your-profile" target="_blank" className="px-12 py-6 bg-white text-slate-950 rounded-full font-bold hover:scale-105 transition-all shadow-xl">
            Connect on LinkedIn
          </a>
          <p className="mt-12 text-white/10 font-mono text-[10px] tracking-[0.5em] uppercase">© 2026 Josh Funnell</p>
        </footer>
      </div>
    </main>
  );
}