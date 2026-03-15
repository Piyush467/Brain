import React from "react";
import {
  ChevronDown,
  Cpu,
  FileText,
  Lock,
  BarChart2,
  CheckCircle,
  Monitor,
  List,
} from "lucide-react";
import Navbar from "./Navbar"; // 👈 new separate file

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

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans text-white bg-[#001225] overflow-x-hidden">
      {/* --- GLOBAL BACKGROUND START --- */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(50% 100% at 50% 0%, rgba(0, 156, 255, 0.15) 0%, rgba(0, 19, 37, 0) 100%), linear-gradient(180deg, #001225 0%, #001225 100%)`,
        }}
      />
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* --- GLOBAL BACKGROUND END --- */}

      {/* 1. NAVBAR SECTION */}
      <Navbar />

      {/* 2. HERO CONTENT SECTION */}
      <HeroContent />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="relative flex-grow flex flex-col items-center justify-center pt-20 pb-20">
      {/* FLOATING ICONS (Background Decoration) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50">
        {/* Top Left - Shield */}
        <FloatingElement top="0%" left="3%" rotate="-12deg">
          <div className="w-[42px] h-[42px]">
            {/* your shield svg unchanged */}
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10_44)">
                <path
                  opacity="0.2"
                  d="M27.7658 8.28795L30.16 14.8658C34.2642 26.1421 24.9537 32.7234 24.9537 32.7234C24.9537 32.7234 13.591 33.6666 9.48675 22.3902L7.09261 15.8124C7.0019 15.5632 7.01391 15.2881 7.12599 15.0478C7.23808 14.8074 7.44106 14.6214 7.69028 14.5307L26.4841 7.69028C26.7334 7.59957 27.0084 7.61158 27.2488 7.72366C27.4891 7.83575 27.6751 8.03873 27.7658 8.28795Z"
                  fill="white"
                />
                <path
                  d="M26.1421 6.75058L7.34826 13.591C6.84981 13.7724 6.44385 14.1444 6.21968 14.6251C5.99551 15.1059 5.97149 15.656 6.15291 16.1544L8.54705 22.7323C10.801 28.9248 15.1645 31.5867 18.4284 32.7293C21.9434 33.9587 24.9116 33.7297 25.0406 33.7187C25.2181 33.7039 25.3884 33.6419 25.5339 33.5391C25.6398 33.4647 28.0573 31.7335 29.9631 28.531C31.7219 25.5603 33.3536 20.7164 31.0997 14.5238L28.7055 7.94593C28.5241 7.44749 28.1521 7.04153 27.6714 6.81735C27.1907 6.59318 26.6406 6.56917 26.1421 6.75058ZM29.2203 15.2078C30.8051 19.5621 30.487 23.6805 28.2743 27.447C27.3097 29.0827 26.0643 30.5356 24.5954 31.7391C22.7224 31.7636 20.8595 31.4597 19.0914 30.8412C14.936 29.3872 12.0211 26.4295 10.4264 22.0482L8.0323 15.4704L26.8261 8.62997L29.2203 15.2078ZM15.7281 24.064C15.4876 23.9519 15.3015 23.7488 15.2107 23.4994C15.12 23.25 15.132 22.9748 15.2441 22.7343C15.3563 22.4938 15.5594 22.3077 15.8088 22.217C16.0581 22.1262 16.3333 22.1382 16.5738 22.2504L19.5126 23.6217L23.273 15.5554C23.3285 15.4363 23.407 15.3293 23.5038 15.2405C23.6007 15.1518 23.7141 15.083 23.8376 15.038C23.9611 14.9931 24.0922 14.9729 24.2235 14.9786C24.3547 14.9844 24.4836 15.0159 24.6027 15.0714C24.7217 15.1269 24.8287 15.2054 24.9175 15.3023C25.0063 15.3991 25.0751 15.5125 25.12 15.636C25.165 15.7595 25.1851 15.8906 25.1794 16.0219C25.1737 16.1531 25.1422 16.282 25.0866 16.4011L20.9029 25.3731C20.8474 25.4922 20.769 25.5992 20.6722 25.688C20.5753 25.7769 20.4619 25.8457 20.3384 25.8906C20.2149 25.9356 20.0838 25.9558 19.9525 25.95C19.8212 25.9442 19.6923 25.9126 19.5732 25.857L15.7281 24.064Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_10_44">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0 10.9446) rotate(-20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </FloatingElement>

        {/* Middle Left - Chip */}
        <FloatingElement top="15%" left="18%" rotate="12deg">
          <Cpu size={28} strokeWidth={1.5} className="text-slate-400" />
        </FloatingElement>

        {/* Bottom Left - Certificate */}
        <FloatingElement top="45%" left="8%" rotate="-6deg">
          <FileText size={30} strokeWidth={1.5} className="text-slate-400" />
        </FloatingElement>

        {/* Lower Left - Lock */}
        <FloatingElement top="65%" left="20%" rotate="15deg">
          <Lock size={24} strokeWidth={1.5} className="text-slate-400" />
        </FloatingElement>

        {/* Top Right - Check Badge */}
        <FloatingElement top="1%" right="5%" rotate="12deg">
          <CheckCircle size={32} strokeWidth={1.5} className="text-slate-400" />
        </FloatingElement>

        {/* Middle Right - Monitor */}
        <FloatingElement top="16%" right="19%" rotate="-12deg">
          <Monitor size={30} strokeWidth={1.5} className="text-slate-400" />
        </FloatingElement>

        {/* Bottom Right - Chart */}
        <FloatingElement top="45%" right="8%" rotate="6deg">
          <BarChart2 size={32} strokeWidth={1.5} className="text-slate-400" />
        </FloatingElement>

        {/* Lower Right - List */}
        <FloatingElement top="65%" right="20%" rotate="-12deg">
          <List size={28} strokeWidth={1.5} className="text-slate-400" />
        </FloatingElement>
      </div>

      {/* MAIN TEXT CONTENT */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 inline-block animate-fade-in-up">
          <div className="px-5 py-2 rounded-full border border-[#B48F41]/30 bg-[#0A1A2F]/80 backdrop-blur-sm shadow-lg">
            <span className="text-[#E6B753] text-sm font-medium tracking-wide">
              25+ Years in Healthcare IT
            </span>
          </div>
        </div>

        {/* Heading */}
        {/* Heading */}
        <h1
          className="max-w-5xl mx-auto mb-10 text-4xl font-bold tracking-tight leading-[1.2] md:text-6xl lg:text-[4rem] text-white animate-fade-in-up"
          style={{ transitionDelay: "200ms" }}
        >
          {/* Main Keyword Block */}
          <span className="relative whitespace-nowrap inline-block mr-2 md:mr-4 group">
            <span className="relative z-10 font-[Inter]">Flexible CIO</span>
            <MarkerUnderline />
          </span>

          <span className="relative whitespace-nowrap inline-block mr-2 md:mr-4 group">
            <span className="relative z-10 font-[Inter]">Leadership</span>
            <MarkerUnderline />
          </span>

          <br className="hidden md:block" />

          <span className="text-gray-400 font-semibold mx-2 font-[Inter] text-3xl md:text-5xl">for</span>

          {/* Target Audience Block */}
          <span className="relative whitespace-nowrap inline-block mr-2 md:mr-4 group">
            <span className="relative z-10 font-[Inter]">Healthcare Organizations</span>
            <MarkerUnderline />
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-tt-hoves font-medium text-[16px] leading-[160%] tracking-[0px] text-[#FFFFFF80] text-center max-w-4xl mx-auto mb-6">
          Independent CIO leadership to assist <strong className="text-white">healthcare organizations</strong> in navigating<strong className="text-white"> critical technology </strong>, <strong className="text-white"></strong>and decisions and ensure strong business–IT alignment.
        </p>
        <p className="font-tt-hoves font-medium text-[14px] leading-[160%] tracking-[0px] text-[#FFFFFF60] text-center max-w-3xl mx-auto mb-10">
           With 25 years of healthcare expertise, Wendigo provides strategic CIO leadership that reduces risk, stabilizing operations, and aligning technology with business priorities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-5">
          <a
            href="https://t.ly/7Jjhw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#348DF0] hover:bg-[#267ce0] text-white font-medium py-3.5 px-12 rounded-full shadow-[0_10px_30px_-10px_rgba(45,140,255,0.4)] transition-transform transform hover:-translate-y-0.5 active:translate-y-0 text-base">
              Book a Call
            </button>
          </a>

          {/* <a
            href="https://it-maturity-assessment.replit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-500 hover:decoration-white transition-all text-sm font-normal"
          >
            Get Your IT Maturity Self-Assessment
          </a> */}

        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />


      {/* Scroll Arrow */}
      <div className="absolute bottom-8 mt-100 left-1/2 transform -translate-x-1/2 z-10">
        <div className="p-3 rounded-full bg-[#0F2236] text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer ">
          <ChevronDown size={20} />
        </div>
      </div>
    </div>
  );
}

const FloatingElement = ({ children, top, left, right, rotate }) => {
  return (
    <div
      className="absolute p-4 rounded-[20px] border border-white/[0.03] bg-white/[0.02] backdrop-blur-[1px] shadow-sm flex items-center justify-center transition-transform duration-700 hover:scale-110"
      style={{
        top,
        left,
        right,
        transform: `rotate(${rotate})`,
      }}
    >
      <div className="opacity-50">{children}</div>
    </div>
  );
};
