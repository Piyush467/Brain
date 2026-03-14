import React from 'react';
import { 
  Rocket, 
  Cpu, 
  Users, 
  TrendingUp, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Flame 
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#FFF] font-sans overflow-x-hidden">
      
      {/* --- GLOBAL BACKGROUND PATTERN --- */}
      <div className="absolute inset-0 z-0 pointer-events-none h-[150vh]">
        {/* Dotted Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#93C5FD 1.5px, transparent 1.5px)',
            backgroundSize: '30px 30px',
            backgroundPosition: 'center top',
            opacity: 0.6,
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
          }}
        />
        
        {/* ORIGINAL VIGNETTE (Fades to background color #F0F6FF) */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, transparent 0%, transparent 45%, #F0F6FF 100%)'
          }}
        />

        {/* NEW: WHITE VIGNETTE LAYER (Requested)
            - White on outer region, transparent in center.
            - Adds the specific corner fade effect.
        */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, transparent 0%, transparent 50%, white 100%)'
          }}
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 w-full pt-20">
        
        {/* 1. SECTION: Who We Work With */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mb-24 space-y-6">
          
          {/* Tag */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#348DF080] bg-[#348DF01F] backdrop-blur-sm">
            <span className="text-xs font-semibold text-blue-500 tracking-wide uppercase">
              Who We Work With
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-950 tracking-tight leading-tight">
            Supporting Those Who Shape Healthcare
          </h1>

          {/* Grid Items */}
          <div className="w-full mt-12 overflow-hidden">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-90">
              <div className="group flex items-center space-x-3 px-6 py-3 bg-white rounded-full border border-[#348DF080] shadow-sm hover:shadow-md transition-all cursor-default">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-base font-semibold text-blue-500">Executive leadership teams</span>
              </div>
              <div className="group flex items-center space-x-3 px-6 py-3 bg-white rounded-full border border-[#348DF080] shadow-sm hover:shadow-md transition-all cursor-default">
                <Cpu className="w-5 h-5 text-blue-500" />
                <span className="text-base font-semibold text-blue-500">CIOs & IT directors</span>
              </div>
              <div className="group flex items-center space-x-3 px-6 py-3 bg-white rounded-full border border-[#348DF080] shadow-sm hover:shadow-md transition-all cursor-default">
                <Rocket className="w-5 h-5 text-blue-500" />
                <span className="text-base font-semibold text-blue-500">Healthcare founders</span>
              </div>
               <div className="group flex items-center space-x-3 px-6 py-3 bg-white rounded-full border border-[#348DF080] shadow-sm hover:shadow-md transition-all cursor-default">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span className="text-base font-semibold text-blue-500">Operational leads</span>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default function App() {
  return <LandingPage />;
}