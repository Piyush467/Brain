import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from './Navbar';

const MarkerUnderline = ({ className = "" }) => (
  <svg viewBox="0 0 200 12" preserveAspectRatio="none" className={`absolute bottom-0 left-0 w-full h-[8px] md:h-[10px] -mb-1 -z-10 ${className}`}>
    <defs>
      <filter id="markerNoise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <rect x="0" y="2" width="200" height="6" fill="#348DF0" filter="url(#markerNoise)" opacity="0.7" />
  </svg>
);

const App = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const mainContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsContentVisible(true);
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });
    if (mainContentRef.current) observer.observe(mainContentRef.current);
    return () => { if (mainContentRef.current) observer.unobserve(mainContentRef.current); };
  }, []);

  const getAnimClass = () => `${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`;

  return (
    <div className="relative w-full overflow-hidden bg-white font-sans">
      <Navbar />

      {/* Background Layers - Unchanged Desktop, Optimized Density for Mobile */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, rgba(52, 141, 240, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 141, 240, 0.1) 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(52, 141, 240, 0.05) 70%, rgba(52, 141, 240, 0.4) 100%)' }} />

      <main ref={mainContentRef} className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] md:min-h-screen px-6 py-10 pt-[50px] md:pt-[50px] text-center">
        {/* Tag */}
        <div className={`mb-6 md:mb-8 ${getAnimClass()}`}>
          <span className="inline-flex px-4 py-1.5 text-xs md:text-sm font-medium text-blue-500 bg-[#348DF01F] border border-[#348DF080] rounded-full">
            Who We Are?
          </span>
        </div>

        {/* Heading - Responsive text sizes */}
        {/* Heading - Responsive text sizes */}
        <h1 className={`max-w-5xl mb-6 md:mb-10 text-3xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.2] text-slate-900 ${getAnimClass()}`} style={{ transitionDelay: '200ms' }}>
          <span className="text-gray-400">Brian Damiani</span>
          <br />
          <span className="relative inline-block mr-1.5 md:mr-2 group">
            <span className="relative z-10">Healthcare CIO Advisor</span>
            <MarkerUnderline />
          </span>
        </h1>

        {/* Subheading - Removed extra mobile space */}
        <p className={`max-w-3xl mb-12 md:mb-20 text-base md:text-xl text-gray-400 leading-relaxed ${getAnimClass()}`} style={{ transitionDelay: '400ms' }}>
          Wendigo Advisors is a <strong className="text-slate-800">healthcare-focused CIO advisory</strong> firm led by <br className="hidden md:block" />
          <strong className="text-slate-800">Brian Damiani</strong> — bringing <strong className="text-slate-800">25+ years of experience</strong> in <br className="md:hidden" />
          <strong className="text-slate-800">technology, strategy, culture, & leadership.</strong>
        </p>

        {/* Scroll Button */}
        <div className={`${getAnimClass()}`} style={{ transitionDelay: '600ms' }}>
          <button className="flex items-center justify-center  w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-full text-blue-500 shadow-sm">
            <ChevronDown size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;