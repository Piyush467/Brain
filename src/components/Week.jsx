import React from "react";

/* ---------- Marker Underline (Kept for the Header) ---------- */
const MarkerUnderline = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    className={`absolute bottom-0 left-0 w-full h-[10px] -mb-1 ${className}`}
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

/* ---------- GRID BACKGROUND ---------- */
const GridBackground = () => (
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute inset-0 bg-[#F4F9FF]" />
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage: `
          linear-gradient(to right, #DCEAF9 1px, transparent 1px),
          linear-gradient(to bottom, #DCEAF9 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  </div>
);

/* ---------- MAIN COMPONENT ---------- */
export default function ThreeWeekProcess() {
  // Note: Refs, state, and useEffect were removed as they are no longer needed for the image replacement.

  return (
    <section className="relative  px-6 py-10 flex justify-center overflow-hidden">
      <GridBackground />

      <div className="max-w-6xl w-full relative z-10">
        {/* ---------- Header (Unchanged) ---------- */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#348DF01F] border border-[#348DF080] text-blue-600 text-xs font-semibold mb-8">
            How it works?
          </span>

          <h1 className="relative text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 mb-8 leading-tight">
            <span className="text-slate-400">A </span>
            <span className="relative inline-block z-10">
              Simple<span className="text-slate-400">,</span> Non-Disruptive 3-Week
              <MarkerUnderline />
            </span>
            <br className="hidden md:block" />{" "}
            <span className="relative inline-block z-10 mt-2 md:mt-4">
              Process
              <MarkerUnderline />
            </span>
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            <span className="font-semibold text-black">Fast, structured,</span>{" "}
            and <span className="font-semibold text-black">low-friction.</span>
          </p>
        </div>

        {/* ---------- NEW IMAGE REPLACEMENT ---------- */}
        {/* The fixed height container and svg lines were removed. */}
        <div className="flex justify-center items-center w-full mt-10">
          <img
            src="week.png"
            alt="3-Week Process Flow Diagram"
            className="w-full h-auto max-w-5xl object-contain drop-shadow-xl"
            loading="lazy"
          />
          {/* Visual SEO: Definition for Google Lens */}
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "ImageObject",
              "contentUrl": "https://www.wendigoadvisors.com/week.png",
              "creator": {
                "@type": "Organization",
                "name": "Wendigo Advisors"
              },
              "creditText": "Wendigo Advisors",
              "copyrightNotice": "© 2026 Wendigo Advisors",
              "license": "https://www.wendigoadvisors.com/license",
              "acquireLicensePage": "https://www.wendigoadvisors.com/contact",
              "caption": "The 3-Week Non-Disruptive IT Health Check Process",
              "description": "A visual diagram showing the 3-week timeline for Wendigo Advisors' IT Health Check: Week 1 Discovery, Week 2 Interviews, Week 3 Roadmap."
            }
          `}
          </script>
        </div>
      </div>
    </section>
  );
}