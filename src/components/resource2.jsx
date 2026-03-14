import React from "react";
import {
  RefreshCw,
  ListChecks,
  ArrowRight,
} from "lucide-react";

/* ---------------- Badge Icon ---------------- */
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

/* ---------------- Card ---------------- */
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
          <h3 className="text-[34px] font-extrabold text-black leading-tight mb-6">
            {title}
          </h3>

          <p className="font-['TT_Hoves_Pro_Trial'] text-[18px] font-medium leading-[1.5] tracking-normal text-[#000000BF]">
            {description}
          </p>
        </div>

        {/* Updated Button to Link */}
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

/* ---------------- MAIN SECTION ---------------- */
const FeaturedRes = () => {
  const CALENDLY_URL = "https://calendly.com/brian_damiani/working-session-30-min";

  const cards = [
    {
      title: <>CIO Operating System<br />One-Pager</>,
      description:
        "A concise overview of the 3-phase assessment that stabilizes, strengthens, and scales your IT organization.",
      icon: RefreshCw,
      link: "/ITservices" 
    },
    {
      title: <>IT Health<br />Checklist</>,
      description:
        "A comprehensive guide to identifying infrastructure risks and opportunities for improvement.",
      icon: ListChecks,
      link: "/healthcare"
    },
  ];

  return (
    <section className="relative min-h-screen py-10 overflow-hidden font-sans">
      <GridBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Featured Resources
            </h1>

            <p className="text-gray-500 text-lg my-8 leading-relaxed">
              <strong className="text-black">Essential guides</strong> and{" "}
              <strong className="text-black">tools</strong> to{" "}
              <strong className="text-black">optimize your IT infrastructure</strong> and{" "}
              <strong className="text-black">drive <br />business success.</strong>
            </p>
          </div>

          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3.5 rounded-full bg-[#348DF0] hover:bg-[#2563eb] text-white font-medium shadow-md transition-transform hover:scale-105">
              Explore All
            </button>
          </a>
        </div>

        {/* Cards */}
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

        {/* Footer Badge */}
        <div className="flex justify-center opacity-90">
          <div className="inline-flex items-center gap-3 bg-[#EAF3FF] px-6 py-3 rounded-full">
            <BadgeIcon className="w-6 h-6" />
            <span className="text-sm font-bold tracking-tight text-slate-900">
              GUARANTEED RESULT
            </span>
            <BadgeIcon className="w-6 h-6" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedRes;