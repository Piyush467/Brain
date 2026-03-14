import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';

// --- SVGs & GRAPHICS ---

const MarkerUnderline = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    className={`absolute bottom-0 left-0 w-full h-[8px] md:h-[10px] -mb-1 -z-10 ${className}`}
  >
    <defs>
      <filter id="markerNoise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <rect x="0" y="2" width="200" height="6" fill="#348DF0" filter="url(#markerNoise)" opacity="0.7" />
  </svg>
);

const SpecialtyCard = ({ text, index, isVisible, isWide }) => {
  const delay = index * 100;

  return (
    <div
      className={`
        relative group w-full 
        ${isWide ? "md:w-[380px] lg:w-[450px]" : "md:w-[320px] lg:w-[340px]"}
        flex-shrink-0 transition-all duration-700 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-[#DCEAFE] hover:bg-[#d0e4fe] transition-all duration-300 rounded-2xl p-5 md:p-6 flex items-center min-h-[70px] md:min-h-[90px] shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        <p className="text-[#0F172A] font-medium text-base md:text-lg leading-snug text-left">
          {text}
        </p>
      </div>

      {/* Floating Checkmark - Adjusted size for mobile */}
      <div className="absolute -top-3 -right-3 md:-top-5 md:-right-5 w-10 h-10 md:w-14 md:h-14 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-md z-10">
        <Check size={20} className="text-white md:hidden" strokeWidth={4} />
        <Check size={30} className="text-white hidden md:block" strokeWidth={3} />
      </div>
    </div>
  );
};

const App = () => {
  const [isCardSectionVisible, setIsCardSectionVisible] = useState(false);
  const cardSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    if (cardSectionRef.current) observer.observe(cardSectionRef.current);
    return () => { if (cardSectionRef.current) observer.unobserve(cardSectionRef.current); };
  }, []);

  const specialtyItems = [
    "Simplifying IT for executive decision-makers",
    "Stabilizing distressed or unclear IT environments",
    "Strengthening security and compliance posture",
    "Transforming team culture and leadership",
    "Aligning IT with business strategy",
  ];

  return (
    <div className="relative w-full overflow-x-hidden bg-white font-sans selection:bg-[#F0F7FF] selection:text-blue-900">

      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255) 20%, rgba(248,250,252,0.8) 50%, rgba(219, 234, 254, 0.4) 100%)' }} />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto px-6 py-10">

        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full mb-16 md:mb-24 items-center lg:items-start pt-8 md:pt-16 animate-hero-fade">

          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#348DF080] bg-[#348DF01F] text-blue-500 text-xs md:text-sm font-medium animate-tag-fade-in">
              Wendigo Advisors
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-slate-900 leading-[1.2] lg:leading-[1.1] tracking-tight animate-heading-slide-in">
              <span className="relative inline-block">
                Your Partner
                <MarkerUnderline className="text-blue-300" />
              </span>{' '}
              <span className="text-[#94A3B8] font-bold">in</span>
              <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                Payer
                <MarkerUnderline className="text-blue-300" />
              </span>{' '}
              <span className="relative inline-block mt-2">
                Technology
                <MarkerUnderline className="text-blue-300" />
              </span>
              <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                Strategy
                <MarkerUnderline className="text-blue-300" />
              </span>
            </h1>
          </div>

          {/* Right Column */}
          <div className="flex-1 lg:pt-20 text-center lg:text-left animate-desc-fade-in">
            <p className="text-lg md:text-xl leading-relaxed text-slate-800 mb-6 font-semibold">
              Wendigo Advisors is a specialized firm providing <strong>healthcare CIO advisory services</strong>, expert <strong>health plan CIO consulting</strong>, and comprehensive <strong>CIO advisory for health plans</strong> to help organizations reduce risk and align technology with business strategy.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-slate-800 font-semibold">
              We work with Healthcare CEOs and boards to bring structural governance to complex IT environments — without technical jargon or wasted capital.
            </p>
          </div>
        </div>

        {/* SPECIALIZE SECTION */}
        <div className="w-full" ref={cardSectionRef}>
          <div className="text-center mb-10 md:mb-12 transition-opacity duration-1000" style={{ transitionDelay: '50ms', opacity: isCardSectionVisible ? 1 : 0 }}>
            <h2 className="text-base md:text-lg font-bold text-slate-900 uppercase tracking-widest">We Specialize In</h2>
          </div>

          {/* Card Grid */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-2 md:px-0">
            {specialtyItems.map((text, index) => (
              <SpecialtyCard
                key={index}
                text={text}
                index={index}
                isVisible={isCardSectionVisible}
                isWide={index >= specialtyItems.length - 2}
              />
            ))}
          </div>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
        @keyframes heroFadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-hero-fade { animation: heroFadeIn .8s ease-out forwards; }
        .animate-tag-fade-in { animation: fadeIn .6s ease-out forwards .2s; opacity: 0; }
        .animate-heading-slide-in { animation: slideInLeft .8s ease-out forwards .3s; opacity: 0; }
        .animate-desc-fade-in { animation: heroFadeIn .8s ease-out forwards .4s; opacity: 0; }
      `}</style>
    </div>
  );
};

export default App;