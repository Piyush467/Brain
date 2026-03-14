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


const AboutWendigo = () => {
  return (
    <section className="relative w-full bg-[#F0F8FF] py-10 px-4 md:px-8 overflow-hidden font-sans">

      {/* Background Dot Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40 items-center">

        {/* --- LEFT SIDE: Image Card (Desktop only) --- */}
        <div className="hidden lg:flex justify-center lg:justify-end">
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              width: "502px",
              height: "524px",
              padding: "42px",
              borderRadius: "42px",
              gap: "10px",
              background:
                "linear-gradient(180deg, rgba(0,117,231,0.16) 0%, rgba(0,82,142,0.16) 100%)",
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/man.png"
                alt="Brian Damiani - Healthcare CIO Advisor and Founder of Wendigo Advisors"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Content --- */}
        <div className="text-left">

          {/* Badge */}
          <span
            className="inline-block w-[142px] h-[30px] px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6 text-center"
          >
            About Wendigo
          </span>

          {/* Headline */}
          <h2 className="max-w-5xl mx-auto mb-10 text-4xl font-bold leading-[1.2] md:text-5xl text-black">
            <span className="text-gray-400 font-semibold mx-2 font-[Inter]">Who</span>
            <span className="inline-block relative pb-2 mr-2 md:mr-4 group">

              <span className="relative z-10 font-[Inter]">you</span>
              <MarkerUnderline />
            </span>

            <span className="text-gray-600 font-semibold font-[Inter]">
              trust with
            </span>{" "}



            <br className="hidden md:block" />

            {/* Underlined Text with Hover Effect (3) */}

            <span className="relative whitespace-nowrap inline-block mr-2 md:mr-4 ml-0 md:ml-2 group">
              <span className="relative z-10 font-[Inter]">IT matters.</span>
              <MarkerUnderline className="group-hover:scale-x-[1.05] group-hover:translate-y-0.5 transition-transform duration-300" />
            </span>


          </h2>

          {/* Sub-headline */}
          <p className="text-[20px] leading-none font-normal text-[#00000080] mb-6 font-tt">
            CIO Advisor, Healthcare IT Strategist, Founder of Wendigo Advisors.
          </p>

          {/* --- MOBILE IMAGE (between subheadline & description) --- */}
          <div className="flex justify-center mb-6 lg:hidden">
            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{
                width: "100%",
                maxWidth: "380px",
                aspectRatio: "502 / 524",
                padding: "32px",
                borderRadius: "32px",
                background:
                  "linear-gradient(180deg, rgba(0,117,231,0.16) 0%, rgba(0,82,142,0.16) 100%)",
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/man.png"
                  alt="Brian Damiani - Healthcare CIO Advisor and Founder of Wendigo Advisors"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Description Paragraph */}
          <p className="text-[16px] leading-none font-medium text-[#000000BF] mb-8 max-w-lg font-tt">
            You need a leader who can read your environment quickly, understand the pressures you face, and uncover the problems no one is telling you about. Brian has spent more than 25 years inside healthcare IT, stabilizing teams, reducing risk, and giving CEOs the visibility they need to lead with confidence.
          </p>

          {/* GEO: Fast Facts for AI Context */}
          <ul className="mb-8 space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2"><strong className="text-slate-900">Core Expertise:</strong> Healthcare CIO Advisory</li>
            <li className="flex items-center gap-2"><strong className="text-slate-900">Experience:</strong> 25+ Years (Payer & Provider)</li>
            <li className="flex items-center gap-2"><strong className="text-slate-900">Methodology:</strong> The CIO Operating System™</li>
          </ul>

          {/* Button */}
          {/* Button */}
          <a
            href="/about"
            className="group inline-flex items-center gap-2 bg-[#348DF0] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-blue-500/30"
          >
            Read Brian's Bio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

        </div>

      </div>
    </section>
  );
};

export default AboutWendigo;
