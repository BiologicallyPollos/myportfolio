"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center', containScroll: false }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  // State to control the Reader Mode Modal
  const [selectedSpeech, setSelectedSpeech] = useState<null | any>(null);

  const headline = "Hello, I'm Josh Funnell";
  
  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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

  // The comprehensive speech data structure
  const speeches = [
    {
      date: "Feb 2026",
      title: "Strategic Efficiency & Economic Growth",
      desc: "Keynote on legislative agility and empowering free enterprise, delivered to the City of London Corporation.",
      content: "By 2026, the intersection of digital infrastructure and legislative agility has become the primary driver of national growth. We cannot afford the friction of outdated legacy systems when competing on a global stage.\n\nEmpowering businesses means scaling back bureaucratic inertia and ensuring our policies remain grounded in economic reality. Institutional integrity is vital, but it must be paired with operational efficiency to foster true innovation.",
      sources: [
        { label: "ONS Economic Output Data 2025", url: "#" },
        { label: "Centre for Policy Studies: Regulatory Reform", url: "#" }
      ]
    },
    {
      date: "Jan 2026",
      title: "Digital Westminster",
      desc: "A roadmap for technological integration while respecting institutional history.",
      content: "The modernization of our institutions isn't just a technical challenge; it is fundamentally a cultural one. Business must lead where government follows, providing the verifiable frameworks necessary for secure, scalable public infrastructure.\n\nWe must honor the heritage of Westminster not by keeping it frozen in amber, but by ensuring its mechanisms are robust enough to handle the velocity of modern commerce.",
      sources: [
        { label: "National Audit Office: Digital Transformation", url: "#" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-sky-500/30 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 flex pointer-events-none w-full h-full">
          <motion.div initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute left-0 top-0 bottom-0 w-1/2 h-full" style={{ backgroundImage: `url('/CoL Cover Photo.jpg')`, backgroundSize: 'cover', backgroundPosition: 'left center', maskImage: 'linear-gradient(to right, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)' }} />
          <motion.div initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }} className="absolute right-0 top-0 bottom-0 w-1/2 h-full" style={{ backgroundImage: `url('/Parliament Cover Photo.jpg')`, backgroundSize: 'cover', backgroundPosition: 'right center', maskImage: 'linear-gradient(to left, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 70%, transparent 100%)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950 z-10" />
        </div>

        <div className="relative z-[100] w-full max-w-7xl">
          <motion.h1 variants={sentence} initial="hidden" animate="visible" className="text-[7vw] md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400 whitespace-nowrap">
            {headline.split("").map((char, index) => (
              <motion.span key={index} variants={letter} className="inline-block">{char === " " ? "\u00A0" : char}</motion.span>
            ))}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1.5 }} className="text-xl md:text-2xl text-sky-50/80 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4">
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

      {/* --- NEW APPLE NEWSROOM GRID --- */}
      <div className="max-w-5xl mx-auto px-6 space-y-48 pb-48 relative z-10">
        <motion.section {...slideUp} className="space-y-16">
          <div className="text-center">
            <h2 className="text-xs font-medium tracking-[0.4em] text-sky-400 uppercase mb-4">Speeches & Transcripts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {speeches.map((s, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-white/[0.02] border border-sky-500/10 hover:bg-sky-900/[0.1] transition-all group flex flex-col justify-between h-full shadow-lg hover:shadow-sky-900/20">
                <div>
                  <span className="text-sky-400 font-mono text-xs mb-4 block uppercase tracking-widest">{s.date}</span>
                  <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed mb-10">{s.desc}</p>
                </div>
                <button 
                  onClick={() => setSelectedSpeech(s)}
                  className="w-full py-4 rounded-xl border border-sky-500/20 text-sky-400 font-medium hover:bg-sky-500 hover:text-slate-950 transition-all text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(56,189,248,0)] hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                >
                  Read Full Speech
                </button>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Writing Section */}
        <motion.section {...slideUp} className="space-y-16 text-center">
          <h2 className="text-xs font-medium tracking-[0.4em] text-sky-400 uppercase">Writing</h2>
          <div className="py-24 border-y border-sky-500/10">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 italic tracking-tight text-sky-50/90 leading-tight">
              "The verifiable truth about digital infrastructure."
            </h3>
            <p className="text-sky-400 uppercase tracking-[0.3em] text-sm font-bold">The Spectator • 2026</p>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="pt-24 flex flex-col items-center border-t border-white/5">
          <a href="https://linkedin.com/in/your-profile" target="_blank" className="px-12 py-6 bg-white text-slate-950 rounded-full font-bold hover:scale-105 transition-all shadow-xl">
            Connect on LinkedIn
          </a>
          <p className="mt-12 text-white/10 font-mono text-[10px] tracking-[0.5em] uppercase">© 2026 Josh Funnell</p>
        </footer>
      </div>

      {/* --- THE READER MODE MODAL --- */}
      <AnimatePresence>
        {selectedSpeech && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-end justify-center bg-slate-950/80 backdrop-blur-md p-2 md:p-8"
          >
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-3xl h-[95vh] bg-slate-900 border border-sky-500/20 rounded-t-[2.5rem] p-8 md:p-16 overflow-y-auto shadow-2xl relative flex flex-col"
            >
              {/* Sticky Close Button */}
              <div className="sticky top-0 right-0 flex justify-end pb-8 z-10 bg-slate-900/90 backdrop-blur-sm -mx-8 px-8 -mt-8 pt-8">
                <button 
                  onClick={() => setSelectedSpeech(null)} 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-sky-500 hover:text-slate-950 hover:border-sky-500 transition-all font-bold text-lg"
                >
                  ✕
                </button>
              </div>

              {/* Speech Header */}
              <div className="mb-12">
                <span className="text-sky-400 font-mono text-sm tracking-[0.3em] uppercase mb-6 block">{selectedSpeech.date}</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">{selectedSpeech.title}</h2>
                <div className="h-px w-24 bg-sky-500/50"></div>
              </div>

              {/* Speech Content */}
              <div className="prose prose-invert max-w-none flex-grow">
                <p className="text-xl text-slate-300 leading-[1.8] font-light whitespace-pre-line">
                  {selectedSpeech.content}
                </p>
              </div>

              {/* Verifiable Sources Block */}
              {selectedSpeech.sources && selectedSpeech.sources.length > 0 && (
                <div className="mt-16 pt-8 border-t border-white/10">
                  <h4 className="text-xs font-mono tracking-[0.2em] text-white/50 uppercase mb-4">Verifiable Sources</h4>
                  <ul className="space-y-3">
                    {selectedSpeech.sources.map((source: any, idx: number) => (
                      <li key={idx}>
                        <a href={source.url} target="_blank" className="text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}