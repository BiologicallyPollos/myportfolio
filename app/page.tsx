import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#021509] text-white selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle Westminster Overlay - Replace URL with your actual image path later */}
        <div 
          className="absolute inset-0 z-0 opacity-20 grayscale"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=2070')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, black 60%, transparent)'
          }}
        ></div>

        {/* Gradient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] z-0 animate-pulse"></div>
        
        <div className="z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-emerald-400">
            Josh Funnell
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/60 font-medium tracking-wide max-w-2xl mx-auto uppercase">
            Project Management • Strategy • Communication
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-emerald-400 to-transparent"></div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 space-y-32 pb-32">
        
        {/* Videos Section */}
        <section id="videos" className="space-y-8 pt-20">
          <h2 className="text-4xl font-bold tracking-tight border-l-4 border-emerald-500 pl-6">Videos</h2>
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-emerald-900/20 border border-white/10 shadow-2xl">
            {/* Auto-playing video placeholder */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-panning-over-a-british-flag-on-top-of-a-building-34244-large.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* Speeches Section */}
        <section id="speeches" className="space-y-8">
          <h2 className="text-4xl font-bold tracking-tight border-l-4 border-emerald-500 pl-6">Speeches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition group">
              <span className="text-emerald-400 font-mono text-sm mb-4 block">FEBRUARY 2026</span>
              <h3 className="text-2xl font-bold mb-2">Keynote on Strategic Efficiency</h3>
              <p className="text-white/60">Exploring the intersection of modern project management and legislative frameworks.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition group">
              <span className="text-emerald-400 font-mono text-sm mb-4 block">JANUARY 2026</span>
              <h3 className="text-2xl font-bold mb-2">Digital Transformation in Westminster</h3>
              <p className="text-white/60">A roadmap for 2026 and beyond.</p>
            </div>
          </div>
        </section>

        {/* Op-Eds Section */}
        <section id="op-eds" className="space-y-8">
          <h2 className="text-4xl font-bold tracking-tight border-l-4 border-emerald-500 pl-6">Op-Eds</h2>
          <div className="bg-gradient-to-br from-emerald-900/40 to-transparent p-1 rounded-3xl border border-white/5">
            <div className="bg-[#021509] p-10 rounded-[calc(1.5rem-1px)]">
              <h3 className="text-3xl font-bold mb-4 italic text-emerald-50 tracking-tight">"The verifiable truth about digital infrastructure."</h3>
              <p className="text-lg text-white/70 mb-6">Published in The Spectator | Feb 2026</p>
              <a href="#" className="text-emerald-400 font-bold hover:underline">Read Article →</a>
            </div>
          </div>
        </section>

        {/* Footer / LinkedIn */}
        <footer className="pt-20 border-t border-white/10 flex flex-col items-center">
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            className="flex items-center gap-3 px-8 py-4 bg-[#0077B5] hover:bg-[#0077B5]/80 rounded-full transition font-bold"
          >
            Connect on LinkedIn
          </a>
          <p className="mt-8 text-white/20 text-sm">© 2026 Josh Funnell</p>
        </footer>
      </div>
    </main>
  );
}