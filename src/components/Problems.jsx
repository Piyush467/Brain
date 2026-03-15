import React, { useState } from "react";
import {
  EyeOff,
  AlertCircle,
  TrendingDown,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

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

const Problems = () => {
  const [expanded, setExpanded] = useState(false);

  const problems = [
    {
      icon: <EyeOff className="w-8 h-8" />,
      title: "Unclear technology direction",
      description:
        "IT investments accumulate without a clear roadmap aligned to business priorities.",
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Vendor-driven decisions",
      description: "Vendor partners begin shaping strategy instead of supporting it.",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Leadership gaps in IT",
      description:
        "Without strong technology leadership, accountability across systems, vendors, and teams becomes fragmented.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Growing operational risk",
      description:
        "Security exposure, compliance issues, and technical debt increase when governance is weak.",
    },
  ];

  return (
    <section className="bg-[#F2F9FF] py-10 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6">
            Problems
          </span>

          <h2 className="max-w-5xl mx-auto mb-10 text-4xl font-bold leading-[1.2] md:text-5xl text-black">
            <span className="text-gray-600 font-semibold font-[Inter]">Technology</span>{" "}
            <span className="inline-block relative pb-2 mr-2 md:mr-4 group">
              <span className="relative z-10 font-[Inter]">leadership gaps</span>
              <MarkerUnderline />
            </span>
            <span className="text-gray-600 font-semibold font-[Inter]">create</span>{" "}
            <span className="inline-block relative pb-2 group">
              <span className="relative z-10 font-[Inter]">
                 invisible risk
              </span>
              <MarkerUnderline />
            </span>
          </h2>

          <p className="font-tt-hoves font-normal text-[20px] text-[#000000B2] text-center max-w-3xl mx-auto">
            When healthcare organizations lack clear CIO leadership, technology decisions become reactive, vendors drive strategy, and risk quietly increases. Most CEOs don’t see the problem until projects stall, costs rise, or compliance issues emerge.
          </p>
        </div>

        {/* PROBLEM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative w-full mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative group"
            >
              {index !== problems.length - 1 && (
                <div
                  className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 h-44 border-r-2 border-dashed border-[#FF4D4D]"
                  style={{ right: "-1rem" }}
                />
              )}

              <div className="bg-red-50 text-[#FF0000] p-5 rounded-[20px] mb-6 shadow-sm border border-[#FF000052]">
                {problem.icon}
              </div>

              <h3 className="font-inter font-bold text-[24px] text-black mb-3">
                {problem.title}
              </h3>

              <p className="font-tt-hoves text-[16px] text-[#00000085] max-w-xs mx-auto transition-all duration-300">
                {problem.description}
              </p>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-[20px] font-small text-[#000000CC] mb-6">
           Experienced CIO leadership brings clarity and control.<br/> Schedule a conversation to discuss your organization’s technology leadership needs.
          </p>
          <a
            href="https://t.ly/7Jjhw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#348DF0] hover:bg-[#267ce0] text-white font-medium py-3.5 px-12 rounded-full shadow-[0_10px_30px_-10px_rgba(45,140,255,0.4)] transition-transform transform hover:-translate-y-0.5 active:translate-y-0 text-base">
              Schedule a Conversation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Problems;
