import React from 'react';

const HeroScene = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto py-12 px-6">
      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes hero-float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes hero-flow-right {
            0% { transform: translateX(-20px); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateX(20px); opacity: 0; }
        }
        @keyframes hero-pulse-soft {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-hero-float { animation: hero-float 5s ease-in-out infinite; }
        .animate-hero-flow { animation: hero-flow-right 2s linear infinite; }
        .animate-hero-pulse { animation: hero-pulse-soft 3s ease-in-out infinite; }
      `}</style>

      {/* Subtle Flow Connectors */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-[120px]">

        {/* STEP 1: PREP */}
        <div className="flex flex-col items-center gap-5 w-full lg:w-[280px] flex-shrink-0">
          <div className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border bg-slate-50 border-slate-200 text-slate-400 shadow-sm">
            Step 01: Prep
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-7 w-full transform lg:-rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center text-white flex-shrink-0">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </div>
              <span className="text-[12px] font-extrabold text-slate-900 uppercase tracking-wide">Market Data</span>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-slate-50 rounded-full"></div>
              <div className="h-2 w-full bg-slate-50 rounded-full"></div>
              <div className="h-2 w-2/3 bg-blue-100 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center text-blue-300 animate-hero-flow hidden lg:flex">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </div>
        </div>

        {/* STEP 2: BAKE */}
        <div className="flex flex-col items-center gap-5 w-full lg:w-auto lg:flex-1 lg:max-w-[360px]">
          <div className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border bg-blue-50 border-blue-100 text-blue-500 shadow-sm">
            Step 02: Bake
          </div>

          <div className="relative group">
            <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-200 relative overflow-hidden">
              <svg width="280" height="280" viewBox="0 0 200 200" fill="none">
                <defs>
                  <linearGradient id="silver-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#F1F5F9" />
                  </linearGradient>
                </defs>
                <rect x="10" y="20" width="180" height="160" rx="35" fill="url(#silver-grad)" stroke="#E2E8F0" strokeWidth="1" />
                <rect x="35" y="55" width="130" height="90" rx="15" fill="#0F172A" />
                <rect x="40" y="60" width="120" height="80" rx="12" fill="#1E293B" />
                <rect x="50" y="80" width="100" height="40" rx="4" fill="#3B82F6" className="animate-hero-pulse" fillOpacity="0.2" />

                <text x="100" y="45" textAnchor="middle" fill="#3B82F6" fontSize="6" fontWeight="900" fontFamily="monospace" letterSpacing="2">ANALYZING PATTERNS...</text>

                <circle cx="170" cy="50" r="8" fill="#F8FAFC" stroke="#E2E8F0" />
                <circle cx="170" cy="50" r="3" fill="#3B82F6" />
              </svg>
            </div>

            <div className="absolute -top-5 -right-6 bg-white shadow-xl shadow-slate-200/30 border border-slate-100 rounded-2xl px-5 py-2.5 flex items-center gap-3 animate-hero-float">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-[11px] font-black text-slate-900 uppercase tracking-wide">High Heat</span>
            </div>
          </div>
        </div>

        {/* STEP 3: SERVE */}
        <div className="flex flex-col items-center gap-5 w-full lg:w-[310px] flex-shrink-0">
          <div className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border bg-slate-900 border-slate-800 text-white shadow-md">
            Step 03: Serve
          </div>

          <div className="flex items-center text-blue-300 animate-hero-flow hidden lg:flex">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-6 w-full animate-hero-float transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </div>
                <span className="text-[12px] font-extrabold text-slate-900 tracking-wide">VIRAL RECIPE</span>
              </div>
              <span className="text-[10px] font-mono text-slate-300">#402</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl mb-5 border border-slate-100">
              <p className="text-[12px] text-slate-500 leading-relaxed italic">
                &quot;Most gym owners waste 90% of their time on...&quot;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="py-4 px-4 bg-blue-50 rounded-2xl text-center border border-blue-100/50">
                <div className="text-[9px] font-bold text-blue-400 uppercase tracking-wider mb-1.5">Virality</div>
                <div className="text-lg font-black text-blue-600">8.4</div>
              </div>
              <div className="py-4 px-4 bg-slate-50 rounded-2xl text-center border border-slate-100">
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Growth</div>
                <div className="text-lg font-black text-slate-900">High</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Descriptive Captions */}
      <div className="mt-16 flex justify-center">
        <div className="flex flex-wrap justify-center gap-16 text-center max-w-4xl">
          <div className="w-48">
            <h5 className="text-[12px] font-bold text-slate-900 mb-1.5">Input Intelligence</h5>
            <p className="text-[11px] text-slate-400 leading-relaxed">AI scans competitor hooks and niche patterns.</p>
          </div>
          <div className="w-48">
            <h5 className="text-[12px] font-bold text-slate-900 mb-1.5">Growth Baking</h5>
            <p className="text-[11px] text-slate-400 leading-relaxed">Strategies are processed through viral frameworks.</p>
          </div>
          <div className="w-48">
            <h5 className="text-[12px] font-bold text-slate-900 mb-1.5">Automated Serving</h5>
            <p className="text-[11px] text-slate-400 leading-relaxed">High-retention content ready for your audience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScene;