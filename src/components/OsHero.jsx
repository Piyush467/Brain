import React, { useId } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
// import Navbar from "./Navbar"; // Assuming you have this component

/* ---------------- Marker Underline (Safe SVG) ---------------- */
const MarkerUnderline = ({ className = "" }) => {
  const id = useId();
  const filterId = `markerNoise-${id}`;

  return (
    <svg
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className={`absolute bottom-0 left-0 w-full h-[12px] ${className} z-0 pointer-events-none`}
      aria-hidden="true"
    >
      <defs>
        <filter id={filterId}>
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
        height="8"
        fill="#348DF0"
        filter={`url(#${filterId})`}
        opacity="0.6"
      />
    </svg>
  );
};

/* ---------------- Hero Section ---------------- */
const OsHero = () => {
  return (
    <div className="bg-[#F0F7FF] relative overflow-hidden">

      {/* Assuming Navbar is imported */}
      <Navbar />

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(52, 141, 240, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(52, 141, 240, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-20 text-center relative z-10">

        {/* Badge */}
        <div className="inline-block mb-8 animate-fade-in-up">
          <span className="bg-[#348DF01F] text-[#005bb5] px-5 py-2 rounded-full text-sm font-bold border border-[#348DF060] tracking-wide uppercase">
            CIO Operating System™
          </span>
        </div>

        {/* Main Heading */}
        {/* Main Heading */}
        <h1 className="max-w-5xl mx-auto mb-10 text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.15] text-[#001224]">

          {/* Top Line */}
          <span className="relative inline-block mr-3 group">
            <span className="relative z-10">The CIO Operating System™</span>
            <MarkerUnderline className="hidden md:block" />
          </span>

          <br className="hidden md:block" />

          {/* Bottom Line */}
          <span className="relative inline-block mt-2 group">
            <span className="relative z-10 text-3xl md:text-6xl text-gray-400 font-medium">Strategic Operating Model</span>
          </span>
          <br className="hidden md:block" />
          <span className="relative inline-block mt-2 group">
            <span className="relative z-10 text-2xl md:text-4xl text-gray-400 font-medium">for Healthcare</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Stop pouring resources into misaligned technology. We help CEOs
          <span className="font-bold text-[#001224]"> restore control</span>,
          <span className="font-bold text-[#001224]"> mitigate risk</span>, and
          <span className="font-bold text-[#001224]"> align IT strategy </span>
          with business objectives.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://calendly.com/brian_damiani/working-session-30-min">
            <button className="bg-[#348DF0] hover:bg-[#267ce0] text-white font-bold py-4 px-10 rounded-full shadow-[0_10px_30px_-10px_rgba(52,141,240,0.5)] transition-all transform hover:-translate-y-1 hover:shadow-xl text-lg flex items-center gap-2">
              Book a Strategy Call <ArrowRight size={20} />
            </button>
          </a>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <button
            className="mx-auto w-12 h-12 rounded-full bg-white border border-blue-100 hover:bg-blue-50 flex items-center justify-center transition-colors shadow-sm"
            onClick={() => window.scrollBy({ top: 600, behavior: "smooth" })}
            aria-label="Scroll down"
          >
            <ChevronDown className="w-5 h-5 text-[#348DF0]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OsHero;