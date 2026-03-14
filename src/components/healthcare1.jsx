import React, { useId } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "./Navbar";

/* ---------------- Marker Underline (Safe SVG) ---------------- */
const MarkerUnderline = ({ className = "" }) => {
  const id = useId();
  const filterId = `markerNoise-${id}`;

  return (
    <svg
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className={`absolute bottom-0 left-0 w-full h-[10px] ${className} z-0 pointer-events-none`}
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
        height="6"
        fill="#348DF0"
        filter={`url(#${filterId})`}
        opacity="0.7"
      />
    </svg>
  );
};


/* ---------------- Hero Section ---------------- */
const HeroSection = () => {
  return (
    <div className="bg-[#F0F7FF]">

      {/* Shared Navbar */}
      <Navbar />

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(52, 141, 240, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(52, 141, 240, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 py-10  text-center">

        {/* Badge */}
        <div className="inline-block mb-8">
          <span className="bg-[#348DF01F] text-blue-600 px-4 py-2 rounded-full text-sm font-medium border border-[#348DF080]">
            Healthcare IT Services
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-5xl mx-auto mb-10 text-4xl font-bold tracking-tight leading-[1.2] md:text-6xl lg:text-[4rem] text-slate-900">

          {/* --- MOBILE VIEW --- */}
          <span className="md:hidden">
            <span className="relative inline-block mr-2 group">
              <span className="relative z-10">CIO as a</span>
              <MarkerUnderline />
            </span>
            <br />
            <span className="relative inline-block mr-2 group">
              <span className="relative z-10">Service</span>
              <MarkerUnderline />
            </span>
          </span>

          {/* --- DESKTOP VIEW --- */}
          <span className="hidden md:inline-block relative mr-3 group">
            <span className="relative z-10">CIO as a Service</span>
            <MarkerUnderline />
          </span>

          <span className="text-gray-500 font-semibold mx-2">&</span>
          <br className="hidden md:block" />

          <span className="relative inline-block group">
            <span className="relative z-10">IT Leadership</span>
            <MarkerUnderline />
          </span>

          <span className="text-gray-500 font-semibold mx-2">for</span>

          <span className="relative inline-block group">
            <span className="relative z-10">Health Plans</span>
            <MarkerUnderline />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          A <span className="font-semibold text-gray-900">dedicated CIO advisory firm</span>{" "}
          for <span className="font-semibold text-gray-900">health plans backed by</span>{" "}
          <span className="font-semibold text-gray-900">25+ years of experience</span>
          <br />
          in <span className="font-semibold text-gray-900">IT strategy</span>,{" "}
          <span className="font-semibold text-gray-900">Governance</span>,{" "}
          <span className="font-semibold text-gray-900">culture</span>, and{" "}
          <span className="font-semibold text-gray-900">Transformation</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://calendly.com/brian_damiani/working-session-30-min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#348DF0] hover:bg-[#267ce0] text-white font-medium py-3.5 px-12 rounded-full shadow-[0_10px_30px_-10px_rgba(45,140,255,0.4)] transition-transform transform hover:-translate-y-0.5 active:translate-y-0 text-base">
              Book a Call
            </button>
          </a>
          {/* <a
            href="https://it-maturity-assessment.replit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 text-sm font-medium underline"
          >
            Get your IT Maturity Self-Assessment
          </a> */}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12">
          <button
            className="mx-auto w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors"
            onClick={() => window.scrollBy({ top: 400, behavior: "smooth" })}
            aria-label="Scroll down"
          >
            <ChevronDown className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;