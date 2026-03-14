import React from 'react';
import {
  Users,
  Cpu,
  Rocket,
  TrendingUp,
  Activity,
  Stethoscope,
  ShieldCheck,
  HeartPulse
} from 'lucide-react';

function MarkerUnderline({ className = "" }) {
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

const PARTNERS = [
  { id: 1, label: "Executive leadership teams", icon: Users },
  { id: 2, label: "CIOs & IT directors", icon: Cpu },
  { id: 3, label: "Healthcare founders", icon: Rocket },
  { id: 4, label: "Operational leads", icon: TrendingUp },
  { id: 5, label: "Clinical Specialists", icon: Stethoscope },
  { id: 6, label: "Hospital Administrators", icon: Activity },
  { id: 7, label: "Compliance Officers", icon: ShieldCheck },
  { id: 8, label: "Care Coordinators", icon: HeartPulse },
];

const HealthcareMarquee = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: scroll-left 30s linear infinite;
          }
          .group:hover .animate-infinite-scroll {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className="relative w-full overflow-hidden py-10 md:py-16 font-sans group">
        {/* Background Dot Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#93c5fd 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div className="mb-4 md:mb-8 inline-flex items-center justify-center">
            <span
              className="inline-block w-[187px] h-[30px] px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 text-center"
            >
              Who We Work With
            </span>
          </div>

          {/* Main Heading - Responsive text sizes and centering */}
          <h2 className="px-4 text-center text-3xl md:text-5xl lg:text-5xl font-bold text-slate-900 leading-[1.2] tracking-tight">
            <span className="text-gray-400 font-semibold mr-1 md:mr-2">Supporting</span>

            <span className="relative inline-block pb-1 md:pb-2 mr-1 md:mr-2">
              <span className="relative z-10">Those</span>
              <MarkerUnderline className="text-blue-300" />
            </span>

            <span className="text-gray-400 font-semibold mr-1 md:mr-2">Who</span>

            {/* Added block on mobile to prevent awkward word breaks */}
            <span className="relative inline-block md:inline pb-1 md:pb-2">
              <span className="relative z-10">Shape Healthcare.</span>
              <MarkerUnderline className="text-blue-300" />
            </span>
          </h2>

          <div className="h-8 md:h-16" /> {/* Spacing */}

          {/* Marquee Container */}
          <div
            className="flex w-full overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          >
            <div className="flex w-max animate-infinite-scroll gap-4 md:gap-6 py-4 px-4">
              {[...PARTNERS, ...PARTNERS].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex items-center gap-2 md:gap-3 rounded-full border border-[#348DF080] bg-white px-4 py-3 md:px-6 md:py-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:shadow-md hover:border-blue-300"
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#348DF0] stroke-[2.5px]" />
                    <span className="whitespace-nowrap font-semibold text-base md:text-[20px] leading-none text-[#348DF0]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthcareMarquee;