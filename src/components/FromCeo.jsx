import React from 'react';

/** MarkerUnderline: safe unique id + visible underline */
function MarkerUnderline({ className = '' }) {
  const id = React.useId?.() ?? `m-${Math.random().toString(36).slice(2, 9)}`;
  const filterId = `markerNoise-${id}`;

  return (
    <svg
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className={`absolute bottom-0 left-0 w-full h-[10px] pointer-events-none ${className}`}
      aria-hidden="true"
      focusable="false"
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
        rx="2"
      />
    </svg>
  );
}

// --- DUMMY DATA ---
const testimonials = [
  {
    id: 1,
    quote: "Brian is an outstanding partner, a trusted advisor, and someone who will not only fix problems but also position organizations for future success.",
    name: "Cathy Mahaffey, CEO",
    title: "Common Ground Healthcare Cooperative",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 2,
    quote: "Brian, thank you for being our technology champion. Your team saved HSCSN in our time of need.",
    name: "Victor Fields",
    title: "CEO Health Services for Children with Special Needs",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
];

const TestimonialCard = ({ item }) => (
  <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-slate-100 mb-6 mx-auto w-full max-w-[500px]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#000000BF] mb-4 md:mb-6"
      aria-hidden="true"
    >
      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
    </svg>

    <p className="text-[#334155] text-base md:text-lg leading-relaxed font-medium mb-6">"{item.quote}"</p>

    <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
      {/* <img
        src={item.avatar}
        alt={item.name}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover grayscale"
      /> */}
      <div>
        <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">{item.name}</h4>
        <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">{item.title}</p>
      </div>
    </div>
  </div>
);

const CEOPerspective = () => {
  const scrollingData = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full bg-[#F0F8FF] py-12 md:py-20 px-4 md:px-8 overflow-hidden font-sans">
      <style>{`
        @keyframes smoothScrollY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          animation: smoothScrollY 60s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-scroll-vertical {
            animation-duration: 40s;
          }
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Dot Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* --- LEFT SIDE: Static Content --- */}
        <div className="text-center lg:text-left lg:pr-8 mb-4 lg:mb-0 flex flex-col items-center lg:items-start">
          {/* Badge */}
          <span className="inline-block px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6 text-center">
            From a CEO
          </span>

          {/* Headline - Responsive Scaling */}
          <h2 className="text-4xl md:text-6xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            <span className='text-gray-500'>Proof </span>
            <span className="relative inline-block pb-2">
              From
              <MarkerUnderline className="text-blue-300" />
            </span>
            <span className='text-gray-500'> the</span> {" "}
            <br className="hidden sm:block" />
            <span className="relative inline-block pb-2">
              People
              <MarkerUnderline className="text-blue-300" />
            </span> <span className='text-gray-500'>who </span>
            <span className="relative inline-block pb-2">
              Matter
              <MarkerUnderline className="text-blue-300" />
            </span>
            <br />
            <span className="relative inline-block pb-2">
              Most
              <MarkerUnderline className="text-blue-300" />
            </span>
          </h2>

          {/* Button */}
          <a href="https://calendly.com/brian_damiani/working-session-30-min" target="_blank"
            rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="group mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#348DF0] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-1">
              Book a Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </a>
        </div>

        {/* --- RIGHT SIDE: Infinite Vertical Scrolling Carousel --- */}
        {/* Adjusted mobile height to 450px to keep layout tight */}
        <div className="relative h-[450px] md:h-[600px] overflow-hidden w-full">
          {/* Top Fade Gradient */}
          <div className="absolute top-0 left-0 w-full h-16 md:h-24 bg-gradient-to-b from-[#F0F8FF] to-transparent z-20 pointer-events-none" />

          {/* Bottom Fade Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-[#F0F8FF] to-transparent z-20 pointer-events-none" />

          {/* The Moving Track */}
          <div className="animate-scroll-vertical w-full">
            {scrollingData.map((item, index) => (
              <div key={`${item.id}-${index}`} className="px-2">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOPerspective;