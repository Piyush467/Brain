import React from 'react';

const MarkerUnderline = ({ className = "" }) => {
  const id =
    React.useId?.() || `marker-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <svg
      width="100%"
      viewBox="0 0 200 18"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`absolute left-0 right-0 bottom-0 h-[14px] ${className} z-0 pointer-events-none`}
    >
      <defs>
        <filter id={`markerNoise-${id}`}>
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
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      <rect
        x="0"
        y="4"
        width="100%"
        height="8"
        rx="3"
        fill="#348DF0"
        opacity="0.95"
        filter={`url(#markerNoise-${id})`}
      />
    </svg>
  );
};

const CIOProcessDiagram = () => {
  return (
    <div className="bg-[#F4F9FF] font-sans flex flex-col items-center py-10 relative overflow-hidden">

      {/* Background Dot Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      {/* --- HEADER SECTION --- */}
      <div className="z-10 text-center max-w-3xl px-4 mb-10 md:mb-16">
        {/* Badge */}
        <span className="inline-block w-[250px] h-[30px] px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6 text-center">
          CIO Operating System Process
        </span>

        {/* Main Title */}
        <h1 className="max-w-5xl mx-auto mb-10 text-4xl font-bold leading-[1.2] md:text-5xl text-black">
          <span className="text-gray-600 font-semibold font-[Inter]">
            How
          </span>{" "}
          <span className="inline-block relative pb-2 mr-2 md:mr-4 group">

            <span className="relative z-10 font-[Inter]">we remove chaos</span>
            <MarkerUnderline />
          </span>

          <span className="text-gray-600 font-semibold font-[Inter]">
            and
          </span>{" "}

          <br className="hidden md:block" />
          <span className="inline-block relative pb-2 group">
            <span className="relative z-10 font-[Inter]">
              restore control.
            </span>
            <MarkerUnderline />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-ttHoves font-normal text-[18px] md:text-[20px] leading-[140%] text-center text-[#00000080] max-w-2xl mx-auto">
          When IT feels chaotic, CIO360 gives you a clear starting point, a path
          to stability, and a strategy you can trust.
        </p>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10 w-full max-w-[1218px] mx-auto mt-6 md:mt-10 px-4">

        {/* 1. DESKTOP VIEW: Single Image (Hidden on Mobile) */}
        <div className="hidden md:block w-full">
          <img
            src="/curve.png"
            alt="CIO Process Diagram"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* 2. MOBILE VIEW: Stacked Cards (Hidden on Desktop) */}
        {/* We use flex-col to stack them vertically for better readability on phones */}
        <div className="md:hidden flex flex-col gap-12 items-center w-full">

          {/* Card 1: Stabilize */}
          <div className="relative w-full max-w-[320px] flex flex-col items-center">
            <h3 className="font-bold text-slate-800 text-xl mb-3">Stabilize</h3>
            <div className="w-full bg-gradient-to-br from-[#9ACDFD] to-[#5CA6FA] rounded-3xl p-6 text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)] text-left relative min-h-[160px] flex items-center">
              <p className="font-ttHoves font-medium text-[18px] leading-[120%]">
                Expose the real issues. Stop the bleeding. Restore control.
              </p>
              {/* Number Badge */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-2 border-blue-400 rounded-full flex items-center justify-center text-blue-600 font-bold shadow-md z-30">
                1
              </div>
            </div>
          </div>

          {/* Down Arrow for flow visualization (Optional) */}
          <div className="text-blue-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
          </div>

          {/* Card 2: Strengthen */}
          <div className="relative w-full max-w-[320px] flex flex-col items-center">
            <h3 className="font-bold text-slate-800 text-xl mb-3">Strengthen</h3>
            <div className="w-full bg-gradient-to-br from-[#9ACDFD] to-[#5CA6FA] rounded-3xl p-6 text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)] text-left relative min-h-[160px] flex items-center">
              <p className="font-ttHoves font-medium text-[18px] leading-[120%]">
                Close gaps. Fix processes. Support the team. Remove operational risk.
              </p>
              {/* Number Badge */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-2 border-blue-400 rounded-full flex items-center justify-center text-blue-600 font-bold shadow-md z-30">
                2
              </div>
            </div>
          </div>

          {/* Down Arrow */}
          <div className="text-blue-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
          </div>

          {/* Card 3: Scale */}
          <div className="relative w-full max-w-[320px] flex flex-col items-center">
            <h3 className="font-bold text-slate-800 text-xl mb-3">Scale</h3>
            <div className="w-full bg-gradient-to-br from-[#9ACDFD] to-[#5CA6FA] rounded-3xl p-6 text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)] text-left relative min-h-[160px] flex items-center">
              <p className="font-ttHoves font-medium text-[18px] leading-[120%]">
                Build a roadmap that supports growth and gives executives predictable results.
              </p>
              {/* Number Badge */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-2 border-blue-400 rounded-full flex items-center justify-center text-blue-600 font-bold shadow-md z-30">
                3
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- BOTTOM CTA --- */}
      <div className="mt-16 z-20">
        <a
          href="https://calendly.com/brian_damiani/working-session-30-min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#348DF0] hover:bg-blue-600 text-white font-medium py-3 px-10 rounded-full shadow-lg transition-all transform hover:scale-105">
            Book a Call
          </button>
        </a>
      </div>
    </div>
  );
};

export default CIOProcessDiagram;