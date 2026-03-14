import React from 'react';
import { Shield, ClipboardCheck, Network, DollarSign, Settings, TrendingUp } from 'lucide-react';

/** * GRAPHIC ICON COMPONENT */
const GraphicIcon = ({ Icon, className = "" }) => (
  <div className={`absolute z-20 flex items-center justify-center ${className}`}>

    {/* The User's Custom SVG Background (Centered behind icon) */}
    <div className="absolute flex items-center justify-center pointer-events-none w-[291px] h-[104px]">
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

    {/* The Gradient Icon Box */}
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

/** Decorative Underline */
export function MarkerUnderline({ className = "" }) {
  const uid = React.useId?.() ?? `m-${Math.random().toString(36).slice(2, 9)}`;
  const filterId = `markerNoise-${uid}`;
  return (
    <svg viewBox="0 0 200 12" preserveAspectRatio="none" className={`absolute left-0 bottom-0 w-full h-3 pointer-events-none ${className}`}>
      <defs>
        <filter id={filterId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
        </filter>
      </defs>
      <rect x="0" y="3" width="200" height="6" fill="#348DF0" filter={`url(#${filterId})`} opacity="0.9" rx="2" />
    </svg>
  );
}

/** * Reusable Card Shell */
const CardShell = ({ title, description, children, className = "" }) => {
  const gridId = React.useId();
  const maskId = React.useId();

  return (
    <div className={`relative bg-white rounded-[32px] border border-[#E6ECF5] shadow-[0_12px_30px_rgba(30,58,138,0.06)] overflow-hidden p-8 flex flex-col justify-end ${className}`}>

      {/* Faded Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={gridId} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1072DF4D" strokeWidth="1" />
            </pattern>
            <mask id={maskId}>
              <radialGradient id="fadeGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="black" stopOpacity="0" />
              </radialGradient>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#fadeGradient)" />
            </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#${gridId})`} mask={`url(#${maskId})`} />
        </svg>
      </div>

      {/* Card Content (Text) */}
      <div className="relative z-10 pointer-events-none">
        <h3 className="text-[32px] leading-tight font-bold text-black mb-3">{title}</h3>
        <p className="text-[16px] leading-relaxed text-gray-500 font-medium">{description}</p>
      </div>

      {/* Children (Icons and specific SVGs) */}
      {children}
    </div>
  );
};

export default function CriticalAreasSection() {
  return (
    <div className="relative w-full py-10 px-4 bg-[#F8FAFC]">

      {/* SECTION HEADER */}
      <div className="text-center mb-20">
        <div className="inline-block mb-4">
          <span className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full">
            What you get
          </span>
        </div>

        {/* --- HEADING START --- */}
        <h2 className="max-w-4xl mx-auto mb-6 text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">

          {/* MOBILE VIEW: Split #6 Critical and Areas */}
          <span className="md:hidden">
            <span className="relative inline-block mr-2">
              <span className="relative z-10">6 Critical</span>
              <MarkerUnderline />
            </span>
            <span className="relative inline-block mr-3">
              <span className="relative z-10">Areas</span>
              <MarkerUnderline />
            </span>
          </span>

          {/* DESKTOP VIEW: Keep #6 Critical Areas together */}
          <span className="hidden md:inline-block relative mr-3">
            <span className="relative z-10">6 Critical Areas</span>
            <MarkerUnderline />
          </span>

          <span className="text-gray-400">We </span>

          <span className="relative inline-block ml-2">
            <span className="relative z-10">Examine</span>
            <MarkerUnderline />
          </span>
        </h2>
        {/* --- HEADING END --- */}

        <p className="text-lg text-slate-600 font-medium">
          Every critical part of your IT environment reviewed and explained clearly.
        </p>
      </div>

      {/* BENTO GRID LAYOUT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* 1. SECURITY (Top Left) */}
        <CardShell
          title="Security"
          description="Our cybersecurity experts will review your environment to find high-level risks."
          className="h-[300px]"
        >
          <GraphicIcon Icon={Shield} className="top-8 right-8" />
        </CardShell>

        {/* 2. COMPLIANCE (Top Right) */}
        <CardShell
          title="Compliance"
          description="We assess your HIPAA compliance status and evaluate your audit readiness."
          className="h-[300px]"
        >
          <GraphicIcon Icon={ClipboardCheck} className="top-8 right-8" />
        </CardShell>

        {/* 3. INFRASTRUCTURE (Middle Full Width) */}
        <CardShell
          title="Infrastructure"
          description="We examine system health, identify legacy risks, and analyze scalability for growth."
          className="md:col-span-2 h-[300px]"
        >
          <GraphicIcon Icon={Network} className="top-8 left-1/2 -translate-x-1/2" />
        </CardShell>

        {/* 4. OPERATIONS (Bottom Left - TALL CARD) */}
        <CardShell
          title="Operations"
          description="We evaluate IT team capabilities, incident management, and disaster recovery readiness."
          // h-auto ensures it wraps content on mobile
          // lg:h-[624px] restores the specific height for desktop
          className="md:row-span-2 h-auto lg:h-[624px] flex flex-col justify-between"
        >
          <div className="relative h-48 lg:h-full w-full">
            <GraphicIcon
              Icon={Settings}
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </CardShell>

        {/* 5. COST (Bottom Right Column - Top) */}
        <CardShell
          title="Cost"
          description="We review your technology spending to identify cost optimization opportunities."
          className="h-[300px]"
        >
          <GraphicIcon Icon={DollarSign} className="top-8 right-8" />
        </CardShell>

        {/* 6. STRATEGY (Bottom Right Column - Bottom) */}
        <CardShell
          title="Strategy"
          description="We assess how your IT roadmap aligns with business goals and identify capability gaps."
          className="h-[300px]"
        >
          <GraphicIcon Icon={TrendingUp} className="top-8 right-8" />
        </CardShell>

      </div>
    </div >
  );
}