import React, { useRef } from "react";
import { ClipboardList, PieChart, DollarSign, Award } from "lucide-react";

/**
 * Custom SVG component for the squiggly/marker underline
 * Provided by user
 */
const SoftMarkerUnderline = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    className={`absolute bottom-0 left-0 w-full h-[10px] -mb-1 -z-10 ${className}`}
  >
    <defs>
      <filter id="markerNoise">
        {/* Create random noisy pattern */}
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="3"
          stitchTiles="stitch"
          result="noise"
        />
        {/* Distort it */}
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

/**
 * Blue Ribbon Badge Icon for the bottom CTA section
 */
const BadgeIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="9" r="6.8" stroke="#3B82F6" strokeWidth="1.8" />
    <circle cx="12" cy="9" r="3.8" stroke="#3B82F6" strokeWidth="1.6" />
    <path
      d="M8 14.5V22L12 20.2L16 22V14.5"
      stroke="#3B82F6"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TextContent = ({ title, desc, isIconTop }) => (
  <div className={`px-4 ${isIconTop ? "pt-2 pb-2" : "pb-2 pt-2"}`}>
    <h3 className="font-inter text-[24px] font-bold leading-[100%] tracking-normal text-center text-black align-middle mb-3">
      {title}
    </h3>

    <p className="font-['TT_Hoves_Pro_Trial'] text-[18px] font-medium leading-[100%] tracking-normal text-center text-black align-middle">
      {desc}
    </p>
  </div>
);

const GraphicContent = ({ Icon }) => (
  <div className="relative w-[90%] h-30 m-3 self-center bg-white rounded-[12px] flex items-center justify-center overflow-hidden shadow-sm">

    {/* REPLACED SVG: The original detailed background */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none py-3 px-2">
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
    <div className="relative z-10 w-[72px] h-[72px] bg-[#CFE5FF] rounded-[20px] flex items-center justify-center shadow-sm text-slate-900">
      <Icon className="w-8 h-8 stroke-[2]" />
    </div>
  </div>
);

const Card = ({ title, desc, icon }) => {
  return (
    <div
      className="
        w-full
        h-full
        bg-[#348DF012]
        border border-[#348DF029]
        rounded-[28px]
        p-[24px]
        flex flex-col
        gap-[16px]
        transition-all duration-300 ease-out
        hover:shadow-lg hover:scale-[1.01]
        
      "
    >
      <GraphicContent Icon={icon} />
      <TextContent title={title} desc={desc} />
    </div>
  );
};


const EngagementModels = () => {
  const cards = [
    {
      title: "Transparent, predictable pricing",
      desc: "Fixed or monthly options with zero surprises.",
      icon: DollarSign,
    },
    {
      title: "Clear Deliverables & Timelines",
      desc: "Know exactly what you'll receive and when.",
      icon: ClipboardList,
    },
    {
      title: "Flexible Engagement Models",
      desc: "One-time assessments, projects, or ongoing support.",
      icon: PieChart, // Using PieChart as a proxy for the circular diagram
    },
  ];
  const cardRefs = useRef([]);

  return (
    <section className="relative w-full py-10 px-4 font-sans bg-gradient-to-b from-[#DBECFF] via-[#FFFFFF00] to-[#DBECFF] overflow-hidden">
      {/* Background Gradients/Glows matching the image style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 via-blue-50/30 to-blue-100/20"></div>
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* --- HEADER --- */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#E0EFFE] border border-[#BFDBFE] mb-10 shadow-sm">
            <span className="text-[#3B82F6] text-[14px] font-semibold tracking-wide">
              Every engagement includes
            </span>
          </div>

          {/* Title - Responsive font sizing implemented with text-4xl md:text-[52px] */}
          <h2 className="text-[25px] md:text-[52px] leading-[1.15] text-gray-900 font-bold tracking-tight">
            <span className="relative inline-block z-10">
              Expert guidance
              <SoftMarkerUnderline className="opacity-80" />
            </span>
            <span>, clear communication, </span>
            <span className="text-[#9CA3AF]">and</span>
            <br />
            <span className="relative 	inline-block z-10">
              <span>
                healthcare-
                <SoftMarkerUnderline className="opacity-80" />
              </span>
              <span>
                specific
                <SoftMarkerUnderline className="opacity-80" />
              </span>
              <span>
                {" "}
                insight.
                <SoftMarkerUnderline className="opacity-80" />
              </span>
            </span>
          </h2>
        </div>

        {/* --- CARDS GRID - Responsive layout implemented with grid-cols-1 md:grid-cols-3 --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className="h-full w-full fade-in-scroll"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <Card {...card} />
            </div>
          ))}
        </div>

        {/* --- BOTTOM CTA - Responsive layout implemented with flex-col md:flex-row --- */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-10">
            <BadgeIcon className="w-6 h-6 text-blue-500 hidden md:block" />
            <span className="text-[15px] md:text-[16px] font-bold tracking-tight text-gray-900 uppercase">
              READY TO DISCUSS WHICH ENGAGEMENT MODEL FITS YOUR NEEDS?
            </span>
            <BadgeIcon className="w-6 h-6 text-blue-500 hidden md:block" />
          </div>

          <a
            href="https://calendly.com/brian_damiani/working-session-30-min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#348DF0] hover:bg-[#2c7ddb] text-white text-[16px] font-semibold py-4 px-10 rounded-full shadow-[0_10px_30px_rgba(52,141,240,0.3)] transition-all duration-200 transform hover:-translate-y-1">
              Schedule a Working Session
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;