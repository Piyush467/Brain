import React, { useState } from 'react';
import { RefreshCw, ListChecks, ArrowRight, Medal, Check } from 'lucide-react';
// Custom SVG component for the squiggly/marker underline
const MarkerUnderline = ({ className = "" }) => (
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

const GridBackground = () => (
  <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
    {/* Base background */}
    <div className="absolute inset-0 bg-[#F4F9FF]"></div>

    {/* Grid lines */}
    <div
      className="absolute inset-0 opacity-[0.4]"
      style={{
        backgroundImage: `
          linear-gradient(to right, #DCEAF9 1px, transparent 1px),
          linear-gradient(to bottom, #DCEAF9 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    ></div>

    {/* Fade overlay at bottom */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#F4F9FF] via-transparent to-transparent h-full w-full pointer-events-none"></div>
  </div>
);


const CardBackground = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 400 325"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none" // This allows the SVG to stretch with content
    className="absolute inset-0 w-full h-full drop-shadow-sm"
  >
    <defs>
      {/* Recreating your bg-gradient-to-b from-[#EEF6FF] to-[#DCEBFF] */}
      <linearGradient id="card-grad" x1="200" y1="0" x2="200" y2="325" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#EEF6FF" />
        <stop offset="100%" stopColor="#DCEBFF" />
      </linearGradient>
    </defs>

    {/* The Main Shape Path */}
    <path
      d="M284 84C284 101.673 298.327 116 316 116H368C385.673 116 400 130.327 400 148V293C400 310.673 385.673 325 368 325H32C14.3269 325 0 310.673 0 293V32C0 14.3269 14.3269 0 32 0H252C269.673 0 284 14.3269 284 32V84Z"
      fill="url(#card-grad)"
      stroke="#348DF029"
      strokeWidth="1"
    />
  </svg>
);

// ... (MarkerUnderline, BadgeIcon, GridBackground, CardBackground components remain the same)

const Card = ({ title, icon: Icon, description, isActive = false, link = "#" }) => {
  return (
    <div
      className={`relative w-full max-w-[400px] min-h-[325px] flex flex-col transition-all duration-300 ${
        isActive ? "scale-105 z-10" : "hover:scale-[1.02]"
      }`}
    >
      <CardBackground />

      <div className="relative z-10 flex flex-col h-full p-10">
        {/* Icon Bubble */}
        <div className="absolute top-4 right-4">
          <div className="w-[72px] h-[72px] rounded-full bg-[#348DF0] flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Icon size={28} strokeWidth={2} className="text-white" />
          </div>
        </div>

        {/* Text Content */}
        <div className="-mt-5">
          <h3 className="text-[34px] font-extrabold text-black leading-tight mb-6">
            {title}
          </h3>
          <p className="font-['TT_Hoves_Pro_Trial'] text-[18px] font-medium leading-[1.4] tracking-normal text-[#000000BF]">
            {description}
          </p>
        </div>

        {/* CTA Button Link */}
        <a
          href={link}
          
          className="
            mt-auto
            w-full
            h-[56px]
            rounded-full
            bg-[#348DF0]
            hover:bg-[#2563eb]
            text-white
            font-semibold
            flex
            items-center
            justify-center
            gap-3 
            transition-all
            active:scale-95"
        >
          View
          <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
            <ArrowRight size={14} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  const CALENDLY_LINK = "https://calendly.com/brian_damiani/working-session-30-min";

  const cards = [
    {
      title: <>CIO360&trade;<br />One-Pager</>,
      icon: RefreshCw,
      description: "A concise overview of the 3-phase assessment that stabilizes, strengthens, and scales your IT organization.",
      link: "/ITservices" // Link added here
    },
    {
      title: <>IT Health<br />Checklist</>,
      icon: ListChecks,
      description: "A comprehensive review of your current IT infrastructure, security, and processes to identify risks.",
      link: "/healthcare" // Link added here
    },
  ];

  return (
    <div className="relative w-full font-sans selection:bg-blue-100 text-slate-900 overflow-hidden flex flex-col items-center justify-center py-10">
      <GridBackground />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 rounded-full bg-[#E1EFFF] border border-[#D0E1F5] text-[#5A8BC5] text-sm font-semibold">
                Not ready yet?
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-950 tracking-tight leading-[1.1]">
              Start with these complimentary tools.
            </h1>
          </div>

          <div className="mb-2">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#348DF0] hover:bg-[#2563eb] text-white font-medium px-8 py-3.5 rounded-full shadow-lg shadow-blue-500/20 transition-all hover:scale-105">
                Know More
              </button>
            </a>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {cards.map((card, index) => (
            <Card
              key={index}
              {...card}
              isActive={index === 0} 
            />
          ))}
        </div>

        {/* Footer Guarantee */}
        <div className="flex justify-center opacity-90">
          <div className="inline-flex items-center gap-3 bg-[#EAF3FF] px-6 py-3 rounded-full">
            <BadgeIcon className="w-6 h-6" />
            <span className="text-sm font-bold tracking-tight text-slate-900 uppercase">
              Guaranteed Result
            </span>
            <BadgeIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}