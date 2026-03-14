import React, { useId } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

/* ---------------- Marker Underline ---------------- */
function MarkerUnderline({ className = "" }) {
  const id = useId();
  const filterId = `markerNoise-${id}`;

  return (
    <svg
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className={`absolute bottom-0 left-0 w-full h-[8px] md:h-[10px] -mb-1 -z-10 ${className}`}
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
}

/* ---------------- Page Component ---------------- */
export default function Tools() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative min-h-screen overflow-x-hidden">

      {/* Navbar imported from Navbar.jsx */}
      <Navbar />

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(52, 141, 240, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(52, 141, 240, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial Vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(52, 141, 240, 0.1) 70%, rgba(52, 141, 240, 0.54) 100%)",
        }}
      />

      {/* Vertical Fade Mask */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #FFF 0%, rgba(248,250,252,0) 20%, rgba(248,250,252,0) 80%, #FFF 100%)",
        }}
      />

      {/* ---------------- Main Content ---------------- */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 mt-16 md:mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Centered on Mobile, Left-aligned on Desktop */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-flex mb-6 px-5 py-1.5 text-sm font-medium text-blue-500 bg-[#348DF01F] border border-[#348DF080] rounded-full">
              Resources
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 leading-[1.2] lg:leading-[1.1] tracking-tight">
              <span className="relative inline-block">
                Tools
                <MarkerUnderline />
              </span>
              <span className="text-gray-400 font-bold mx-2">to help you</span>
              <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                make smarter IT
                <MarkerUnderline />
              </span>
              <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                decisions.
                <MarkerUnderline />
              </span>
            </h1>

            <p className="text-gray-500 text-base md:text-lg my-6 md:my-8 leading-relaxed max-w-md lg:max-w-none">
              Get clarity into your <strong className="text-black">IT operations</strong>,{" "}
              <strong className="text-black">eliminate unknown risks</strong>, &
              <strong className="text-black"> gain a trusted partner</strong> who
              <br className="hidden lg:block" />{" "}
              <strong className="text-black">speaks</strong> both{" "}
              <strong className="text-black">technology</strong> &{" "}
              <strong className="text-black">healthcare fluently</strong>.
            </p>

            {/* <a href="https://calendly.com/brian_damiani/working-session-30-min"
              target="_blank"
              rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#348DF0] hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-full inline-flex items-center justify-center gap-3 transition-colors shadow-lg shadow-blue-500/20">
                Explore Resources
                <span className="w-7 h-7 rounded-full border border-white flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </a> */}
          </div>

          {/* Right Column - Responsive Image Container */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{
                /* Mobile: 100% width, dynamic height. Desktop: Fixed values as requested */
                width: "min(100%, 502px)",
                aspectRatio: "502/524",
                padding: "clamp(20px, 5vw, 42px)",
                borderRadius: "42px",
                background:
                  "linear-gradient(180deg, rgba(0,117,231,0.16) 0%, rgba(0,82,142,0.16) 100%)",
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/res.png"
                  alt="Resources graphic"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}