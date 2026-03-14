import React, { useState } from 'react';
import { Quote } from 'lucide-react';

/* --------- Soft Marker Underline Component --------- */
const SoftMarkerUnderline = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    className={`absolute bottom-0 left-0 w-full h-[10px] -mb-1 -z-10 ${className}`}
  >
    <defs>
      <filter id="markerNoise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="3"
          stitchTiles="stitch"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="12"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>

    <rect
      x="0"
      y="2"
      width="200"
      height="6"
      fill="#348DF0"
      filter="url(#markerNoise)"
      opacity="0.7"
    />
  </svg>
);

/* --------- Mission Section --------- */

const MissionSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  // 4-way fade mask for dotted background
  const fadeMaskStyle = {
    maskImage:
      'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)',
    WebkitMaskImage:
      'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)',
  };

  return (
    <div className="relative w-full  flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden bg-[#FFF] font-sans">
      
      {/* Dotted background with 4-way fade */}
      <div
        className="absolute inset-0 z-0"
        style={{
          ...fadeMaskStyle,
          backgroundImage: 'radial-gradient(#93C5FD 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
          backgroundPosition: 'center',
          opacity: 0.6,
        }}
      />

      {/* Corner vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, transparent 0%, transparent 40%, #FFF 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl space-y-8 mt-10">
        
        {/* Tag */}
        <div className="relative flex items-center justify-center">
          {/* Left dot */}
          <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60" />
          
          <div className="px-5 py-1.5 rounded-full border border-[#348DF080] bg-[#348DF01F] backdrop-blur-sm shadow-sm">
            <span className="text-xs md:text-sm font-medium text-blue-500 tracking-wide uppercase">
              Purpose & Direction
            </span>
          </div>

          {/* Right dot */}
          <div className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60" />
        </div>

        {/* Heading */}
        <div className="text-center relative mb-2">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8 leading-tight tracking-tight">
            What{' '}
            <span className="text-slate-900 relative inline-block">
              Drives our work
              {/* Soft marker underline under the text */}
              <SoftMarkerUnderline />
            </span>{' '}
          
          </h2>
        </div>

        {/* Toggle Switch */}
        <div className="bg-[#348DF04D] p-1.5 rounded-full flex items-center space-x-1 mt-2 shadow-inner">
          <button
            onClick={() => setActiveTab('mission')}
            className={`px-6 md:px-10 py-2 rounded-full text-base font-semibold transition-all duration-300 ease-out ${
              activeTab === 'mission'
                ? 'bg-white text-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.15)]'
                : 'text-blue-400 hover:text-blue-500 bg-transparent'
            }`}
          >
            Mission
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-6 md:px-10 py-2 rounded-full text-base font-semibold transition-all duration-300 ease-out ${
              activeTab === 'vision'
                ? 'bg-white text-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.15)]'
                : 'text-[#8BAAD8] hover:text-blue-500 bg-transparent'
            }`}
          >
            Vision
          </button>
        </div>

        {/* Blue Card Content */}
        <div className="relative mt-12 w-full max-w-[850px] mx-auto px-4 md:px-0">
          {/* Floating Quote Icon */}
          <div className="absolute -top-7 -left-2 md:-left-6 z-20 filter drop-shadow-xl">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3B82F6] rounded-full flex items-center justify-center border-4 border-[#F0F6FF]">
              <Quote className="text-white w-8 h-8 md:w-10 md:h-10 fill-white" strokeWidth={1.5} />
            </div>
          </div>

          {/* Card Body */}
          <div className="relative bg-gradient-to-br from-[#CDE4FD] to-[#B3D6FC] rounded-[2.5rem] p-8 md:p-14 shadow-sm text-center border border-blue-100/50">
            <p className="text-lg md:text-[1.35rem] leading-[1.8] text-[#0F172A] font-medium max-w-3xl mx-auto tracking-wide">
              {activeTab === 'mission'
                ? 'To help healthcare organizations transform their technology strategy so every IT investment supports business objectives, improves outcomes, and strengthens operational resilience.'
                : 'To create a future where technology and healthcare seamlessly integrate to improve patient lives globally through sustainable and resilient digital ecosystems.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --------- Default export for preview --------- */

export default function App() {
  return <MissionSection />;
}
