import React from "react";
import {
  RefreshCw,
  ListChecks,
  ArrowRight,
  Medal,
  Coffee,
  HeartPulse,
  LayoutGrid,
  UserCircle,
} from "lucide-react";

/* ---------------- Background ---------------- */
const GridBackground = () => (
  <div className="absolute inset-0 -z-10">
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

/* ---------------- CARD (EXACT MATCH TO IMAGE) ---------------- */
const CardBackground = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 400 325"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full drop-shadow-sm"
  >
    <defs>
      <linearGradient id="card-grad" x1="200" y1="0" x2="200" y2="325" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#EEF6FF" />
        <stop offset="100%" stopColor="#DCEBFF" />
      </linearGradient>
    </defs>
    <path
      d="M284 84C284 101.673 298.327 116 316 116H368C385.673 116 400 130.327 400 148V293C400 310.673 385.673 325 368 325H32C14.3269 325 0 310.673 0 293V32C0 14.3269 14.3269 0 32 0H252C269.673 0 284 14.3269 284 32V84Z"
      fill="url(#card-grad)"
      stroke="#348DF029"
      strokeWidth="1"
    />
  </svg>
);

const Card = ({ title, description, Icon, link }) => {
  return (
    <div className="relative w-full max-w-[400px] min-h-[325px] flex flex-col group">
      <CardBackground />

      <div className="relative z-10 flex flex-col h-full p-10">
        <div className="absolute top-4 right-4">
          <div className="w-[72px] h-[72px] rounded-full bg-[#348DF0] flex items-center justify-center shadow-lg ">
            <Icon size={28} className="text-white" strokeWidth={2} />
          </div>
        </div>

        <div className="-mt-5">
          <h3 className="text-[30px] font-extrabold text-black leading-tight mb-6">
            {title}
          </h3>

          <p className="font-['TT_Hoves_Pro_Trial'] text-[17px] font-medium leading-[1.4] tracking-normal text-[#000000BF]">
            {description}
          </p>
        </div>

        {/* View Button Link */}
        <a
          href={link}
          className="
            mt-auto
            w-full
            h-[56px]
            rounded-full
            bg-[#348DF0]
            text-white
            font-semibold
            flex
            items-center
            justify-center
            gap-3
            transition-all
            active:scale-95
            hover:bg-[#2b7ac9]
            no-underline
          "
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

const ComplimentaryTools = () => {
  const CALENDLY_URL = "https://calendly.com/brian_damiani/working-session-30-min";

  const cards = [
  {
    title: <>Free Working<br />Session</>,
    description:
      "A 30-minute working session focused on a real technology or operational problem you’re facing—no sales pitch, just practical guidance and clarity.",
    icon: Coffee,
    link: "https://calendly.com/brian_damiani/working-session-30-min."
  },
  {
    title: <>IT Health<br />Check</>,
    description:
      "A focused assessment of your current IT environment to identify risks, gaps, and opportunities with clear, prioritized recommendations.",
    icon: HeartPulse,
    link: "/ITservices"
  },
  {
    title: <>CIO Operating<br />System</>,
    description:
      "A structured 3–4 month assessment that brings clarity, control, and accountability to how technology supports the business.",
    icon: LayoutGrid,
    link: "/cio-operating"
  },
  {
    title: <>CIO as a<br />Service</>,
    description:
      "Ongoing fractional CIO leadership providing strategic, operational, and executive-level technology support without a full-time hire.",
    icon: UserCircle,
    link: "/healthcare"
  }
];


  return (
    <section className="relative  py-10 lg:py-24 overflow-hidden font-sans">
      <GridBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#348DF01F] border border-[#348DF080] text-[#348DF0] text-sm font-bold tracking-wide">
              Complimentary Tools
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Get clarity today! No cost, No
              <br className="hidden md:block" />
              {" "}commitment.
            </h1>
          </div>

          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 rounded-full bg-[#348DF0] hover:bg-[#2563eb] text-white font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
              Know More
            </button>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              Icon={card.icon}
              link={card.link}
            />
          ))}
        </div>

        {/* Footer Guarantee */}
        <div className="flex items-center justify-center gap-3 text-slate-900 font-bold text-sm tracking-[0.2em]">
          <Medal className="text-[#348DF0] w-5 h-5" />
          GUARANTEED RESULT
          <Medal className="text-[#348DF0] w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default ComplimentaryTools;