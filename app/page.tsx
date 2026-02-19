"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center', containScroll: false });

  const [selectedSpeech, setSelectedSpeech] = useState<null | any>(null);
  const [selectedVideo, setSelectedVideo] = useState<null | string>(null); 

  // Logic for the Reading Progress Bar (for the Speech Reader)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headline = "Hello, I'm Josh Funnell";
  
  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const slideUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const videos = [
    "/Video-1.mp4",
    "/Video-2.mp4",
    "/Video-3.mp4",
    "/Video-4.mp4"
  ];

  const speeches = [
    {
      id: "speech-1",
      date: "FEB 2026",
      title: "Risks and Priorities in Public Affairs",
      desc: "A report on legislative priorities and pressing external challenges.",
      takeaways: ["Legislative Agility", "Infrastructure Reform", "Global Competition"],
      content: "PASTE FULL TEXT OF FILE 1 HERE...",
      sources: [{ label: "ONS Economic Data", url: "#" }]
    },
    {
      id: "speech-2",
      date: "JAN 2026",
      title: "Managing Geopolitical Risk & Change",
      desc: "How organizations stay ahead of shifting political landscapes and trade tensions.",
      takeaways: ["Trade Security", "Policy Forecasting", "Risk Mitigation"],
      content: "PASTE FULL TEXT OF FILE 2 HERE...",
      sources: [{ label: "Audit Office Report", url: "#" }]
    },
    {
      id: "speech-3",
      date: "DEC 2025",
      title: "The Business of Westminster",
      desc: "Analyzing the evolving relationship between corporate strategy and public policy.",
      takeaways: ["Corporate Diplomacy", "Lobbying Transparency", "Fiscal Impact"],
      content: "PASTE FULL TEXT OF FILE 3 HERE...",
      sources: [{ label: "Hansard Society Records", url: "#" }]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-blue-500/30 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 flex pointer-events-none w-full h-full">
          <motion.div initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute left-0 top-0 bottom-0 w-1/2 h-full" style={{ backgroundImage: `url('/CoL Cover Photo.jpg')`, backgroundSize: 'cover', backgroundPosition: 'left center', maskImage: 'linear-gradient(to right, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)' }} />
          <motion.div initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }} className="absolute right-0 top-0 bottom-0 w-1/2 h-full" style={{ backgroundImage: `url('/Parliament Cover Photo.jpg')`, backgroundSize: 'cover', backgroundPosition: 'right center', maskImage: 'linear-gradient(to left, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 70%, transparent 100%)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950 z-10" />
        </div>
        
        <div className="relative z-[100] w-full max-w-7xl">
          <motion.h1 variants={sentence} initial="hidden" animate="visible" className="text-[7vw] md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 whitespace-nowrap">
            {headline.split("").map((char, index) => (<motion.span key={index} variants={letter} className="inline-block">{char === " " ? "\u00A0" : char}</motion.span>))}
          </motion.h1>
          {/* UPDATED TEXT BELOW */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1.5 }} className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4">
            I'm experienced at <span className="text-white font-medium border-b border-slate-600">joining up the dots between Westminster and business</span>. I take complex issues and communicate them as compelling stories. You can see some of those stories below.
          </motion.p>
        </div>
      </section>

      {/* Video Carousel Section */}
      <div className="py-32 relative z-10">
        <motion.div {...slideUp} className="max-w-4xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-8">Video</h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
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
                <div key={index} className="flex-[0_0_85%] md:flex-[0_0_65%] min-w-0 pl-4 relative group/video cursor-pointer" onClick={() => setSelectedVideo(src)}>
                  <div className="aspect-video rounded-sm overflow-hidden border border-slate-800 shadow-2xl transition-transform duration-500 group-hover/video:scale-[1.02] relative">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src={src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-white shadow-xl group-hover/video:bg-blue-500 transition-all duration-300">
                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Speeches & Transcripts Grid */}
      <div className="max-w-5xl mx-auto px-6 space-y-48 pb-48 relative z-10">
        <motion.section {...slideUp} className="space-y-16">
          <div className="text-center">
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">Speeches & Transcripts</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {speeches.map((s, i) => (
              <div key={i} className="group relative flex flex-col justify-between h-full bg-[#0f172a] border border-slate-800 p-8 rounded-sm hover:border-slate-600 transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 group-hover:bg-blue-500 transition-colors duration-300 rounded-t-sm" />
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-50 leading-tight group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">{s.desc}</p>
                </div>
                <button onClick={() => setSelectedSpeech(s)} className="inline-flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors gap-2">
                  Read Transcript <span aria-hidden="true">→</span>
                </button>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Writing Section */}
        <motion.section {...slideUp} className="space-y-16 text-center">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase">Writing</h2>
          <div className="py-24 border-y border-slate-800">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-slate-100 leading-tight">
              "The verifiable truth about digital infrastructure."
            </h3>
            <p className="text-blue-400 uppercase tracking-widest text-sm font-bold">The Spectator • 2026</p>
          </div>
        </motion.section>

        <footer className="pt-24 flex flex-col items-center border-t border-slate-800 pb-12">
          <a href="https://linkedin.com/in/your-profile" target="_blank" className="px-12 py-4 bg-white text-slate-950 rounded-sm font-bold hover:bg-slate-200 transition-colors shadow-lg">
            Connect on LinkedIn
          </a>
          <p className="mt-12 text-slate-500 font-sans text-xs tracking-widest uppercase">© 2026 Josh Funnell</p>
        </footer>
      </div>

      {/* Cinematic Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 md:p-12">
            <div className="absolute top-6 right-6 z-10">
              <motion.button onClick={() => setSelectedVideo(null)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest bg-slate-900/50 px-4 py-2 rounded-sm border border-slate-700">
                Close [X]
              </motion.button>
            </div>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="w-full max-w-6xl aspect-video bg-black rounded-sm overflow-hidden shadow-2xl border border-slate-800 relative">
              <video controls autoPlay className="w-full h-full object-contain">
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Speech Reader Modal */}
      <AnimatePresence>
        {selectedSpeech && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-end justify-center bg-slate-950/90 backdrop-blur-sm p-0 md:p-8">
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="w-full max-w-4xl h-[95vh] bg-[#0f172a] border border-slate-700 rounded-t-[2rem] overflow-y-auto shadow-2xl relative flex flex-col">
              
              {/* Reading Progress Bar */}
              <motion.div className="sticky top-0 left-0 right-0 h-1.5 bg-blue-500 z-[210] origin-left" style={{ scaleX }} />

              <div className="sticky top-0 right-0 flex justify-end pb-8 z-10 bg-[#0f172a]/95 px-8 pt-8">
                <button onClick={() => setSelectedSpeech(null)} className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Close Reader</button>
              </div>

              <div className="px-8 md:px-20 pb-20">
                <div className="mb-12 border-b border-slate-800 pb-12">
                  <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 block">{selectedSpeech.date}</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">{selectedSpeech.title}</h2>
                  
                  {/* Key Takeaways Tags */}
                  <div className="flex flex-wrap gap-3">
                    {selectedSpeech.takeaways.map((t: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-slate-300 text-xl leading-[1.8] whitespace-pre-line font-light">
                    {selectedSpeech.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}