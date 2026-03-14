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
      className={`absolute bottom-0 left-0 w-full h-[10px] -mb-1 -z-10 ${className}`}
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
export default function ITHealthCheck() {
  return (
    <div className=" bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative">

      {/* ✅ Navbar imported from Navbar.jsx */}
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
      <main className="max-w-7xl mx-auto px-8 py-16 mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div>
            <div className="flex items-center gap-2 text-lg text-gray-600 mb-6">
              <span>Services</span>
              <span className="font-semibold">{">"}</span>
              <span className="font-semibold text-gray-900">IT Health Check</span>
            </div>

            <span className="inline-flex mb-6 px-5 py-1.5 text-sm font-medium text-blue-500 bg-[#348DF01F] border border-[#348DF080] rounded-full">
              IT HEALTH CHECK
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              <span className="relative inline-block">
                Know Exactly
                <MarkerUnderline />
              </span>
              <br />
              <span className="relative inline-block">
                Where Your IT
                <MarkerUnderline />
              </span>
              <br />
              <span className="relative inline-block">
                Stands
                <MarkerUnderline />
              </span>
            </h1>

            <p className="text-gray-500 text-lg my-8 leading-relaxed">
              A <strong className="text-black">6-point comprehensive diagnostic</strong> that gives{" "}
              <strong className="text-black">healthcare<br /> leaders  clear,
                actionable insight</strong> into
              <strong className="text-black"> security, compliance, and cost</strong> — minus the jargon.
            </p>

            {/* <a
              href="https://it-maturity-assessment.replit.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#348DF0] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full inline-flex items-center gap-3 transition-colors">
                Take Assessment
                <span className="w-7 h-7 rounded-full border border-white flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </a> */}
          </div>

          {/* Right Column */}
          <div className="hidden lg:flex justify-end">
            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{
                width: "502px",
                height: "524px",
                padding: "42px",
                borderRadius: "42px",
                background:
                  "linear-gradient(180deg, rgba(0,117,231,0.16) 0%, rgba(0,82,142,0.16) 100%)",
              }}
            >
              <img
                src="/image.png"
                alt="Checklist illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
