import React, { useEffect, useRef } from 'react';
import { Shield, Building2, Box, Rocket, Route, Share2, Award, ArrowRight } from 'lucide-react';

const BadgeIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* outer circle */}
    <circle
      cx="12"
      cy="9"
      r="6.8"
      stroke="#3B82F6"
      strokeWidth="1.8"
    />
    {/* inner circle */}
    <circle
      cx="12"
      cy="9"
      r="3.8"
      stroke="#3B82F6"
      strokeWidth="1.6"
    />
    {/* ribbon */}
    <path
      d="M8 14.5V22L12 20.2L16 22V14.5"
      stroke="#3B82F6"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Fuzzy marker underline (matches your reference image, reused everywhere) ---
const SoftMarkerUnderline = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    className={`absolute left-0 bottom-0 w-full h-[14px] translate-y-1 ${className}`}
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

// Keep this one only if you still need it somewhere else
const ScribbleWendigo = () => (
  <svg
    viewBox="0 0 180 12"
    className="absolute -bottom-1 left-0 w-full h-3 text-blue-400 opacity-90"
    preserveAspectRatio="none"
  >
    <path
      d="M5,6 Q45,2 90,6 T175,6"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// --- Data ---

const cards = [
  {
    title: "Health Plans",
    desc: "Health plan operations and core systems.",
    icon: Shield,
    variant: "icon-top"
  },
  {
    title: "Providers",
    desc: "Hospital, clinic, and physician group strategy.",
    icon: Building2,
    variant: "icon-bottom"
  },
  {
    title: "TPAs",
    desc: "Claims workflows and operational efficiency improvements.",
    icon: Box,
    variant: "icon-top"
  },
  {
    title: "Healthcare Startups",
    desc: "Helping health tech founders scale and audit.",
    icon: Rocket,
    variant: "icon-bottom"
  },
  {
    title: "Clearinghouses",
    desc: "Clearinghouse routing, EDI, and compliance visibility.",
    icon: Route,
    variant: "icon-top"
  },
  {
    title: "Pricing Engines",
    desc: "Supporting health plan pricing and modeling.",
    icon: Share2,
    variant: "icon-bottom"
  }
];

// --- Card Components ---

const TextContent = ({ title, desc, isIconTop }) => (
  <div className={`px-4 ${isIconTop ? 'pt-2 pb-2' : 'pb-2 pt-2'}`}>
    <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
      {title}
    </h3>
    <p className="text-slate-900 text-[18px] leading-relaxed font-semibold">
      {desc}
    </p>
  </div>
);

const GraphicContent = ({ Icon }) => (
  <div className="relative w-[90%] h-[120px] m-3 self-center bg-white rounded-[12px] flex items-center justify-center overflow-hidden shadow-sm">

    {/* SVG Background */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none py-3">
      <svg
        viewBox="0 0 291 104"
        className="w-full h-full"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M133 33V21C133 9.95431 124.046 1 113 1H0" stroke="#338CF0" strokeOpacity="0.24" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M157 33V21C157 9.95431 165.954 1 177 1H291" stroke="#338CF0" strokeOpacity="0.24" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M133 71V83C133 94.0457 124.046 103 113 103H0" stroke="#338CF0" strokeOpacity="0.24" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M157 71V83C157 94.0457 165.954 103 177 103H291" stroke="#338CF0" strokeOpacity="0.24" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    </div>

    {/* Center Icon */}
    <div
      className="relative z-10 w-[72px] h-[72px] rounded-[12px] flex items-center justify-center shadow-sm"
      style={{
        background: `
      linear-gradient(0deg, #E1F2FF, #E1F2FF),
      linear-gradient(180deg, rgba(0, 117, 231, 0.16) 0%, rgba(0, 82, 142, 0.16) 100%)
    `
      }}
    >
      <Icon className="w-8 h-8 stroke-[2] text-[#0B0B0B]" />
    </div>

  </div>
);


const Card = ({ title, desc, icon, variant }) => {
  const isIconTop = variant === "icon-top";

  return (
    <div className="h-full bg-[#348DF012] border border-[#348DF029] rounded-[28px] p-[24px] flex flex-col gap-[16px] transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.01]">
      <div className={`flex flex-col h-full ${isIconTop ? '' : 'flex-col-reverse justify-end'}`}>
        <GraphicContent Icon={icon} />
        <TextContent title={title} desc={desc} isIconTop={isIconTop} />
      </div>
    </div>
  );
};


// --- Story Section Component ---



// --- Main App Component ---

export default function App() {
  const footerRef = useRef(null);
  const cardRefs = useRef([]);
  const storyRef = useRef(null);

  // --- Scroll Animation Logic ---
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .fade-in-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      .animate-reveal {
        opacity: 1;
        transform: translateY(0);
        transition-delay: var(--animation-delay, 0ms); 
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    // Observe Elements
    const elementsToObserve = [...cardRefs.current];
    if (footerRef.current) elementsToObserve.push(footerRef.current);
    if (storyRef.current) elementsToObserve.push(storyRef.current);

    elementsToObserve.forEach((el, index) => {
      if (el) {
        const delay = index < cards.length ? index * 100 : 0;
        el.style.setProperty('--animation-delay', `${delay}ms`);
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div className=" bg-[#F0F7FF] font-sans selection:bg-blue-200">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">

          {/* --- SECTION 1: HEALTHCARE EXPERTISE --- */}

          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#348DF01F] border border-[#348DF080] mb-8">
              <span className="text-blue-600 text-xs font-bold tracking-wide uppercase">
                Healthcare Expertise
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-8 tracking-tight">
              <span className="text-slate-400">Why We </span>
              <span className="relative inline-block mx-2">
                Focus
                <SoftMarkerUnderline />
              </span>
              <br className="hidden md:block" />
              <span className="relative inline-block mr-3">
                Exclusively
                <SoftMarkerUnderline />
              </span>
              <span className="text-slate-400 mr-2">on</span>
              <span className="relative inline-block">
                Healthcare
                <SoftMarkerUnderline />
              </span>
            </h1>

            <p className="text-black text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Healthcare is one of the most complex and regulated industries. Our exclusive focus ensures deep expertise, not generic consulting.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="text-center mb-10">
            <span className="text-lg font-bold tracking-tight text-slate-900 uppercase">
              Industries Served
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {cards.map((card, index) => (
              <div
                key={index}
                className="h-full w-full fade-in-scroll"
                ref={el => (cardRefs.current[index] = el)}
              >
                <Card {...card} />
              </div>
            ))}
          </div>

          {/* Footer Banner */}
          <div
            ref={footerRef}
            className="flex justify-center fade-in-scroll opacity-90"
          >
            <div className="inline-flex items-center gap-3 bg-[#EAF3FF] px-4 md:px-6 py-2 md:py-3 rounded-full">
              <BadgeIcon className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-[11px] md:text-sm font-bold tracking-tight text-slate-900">
                25+ YEARS INSIDE HEALTHCARE ECOSYSTEMS, NOT OUTSIDE THEM
              </span>
              <BadgeIcon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>

        </main>
      </div>

    </>
  );
}
