import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

/* --- Marker Underline --- */
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
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
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

const AdvisoryPackages = () => {
  const plans = [
    {
      id: "strategic",
      link: "/ITservices",
      title: "Strategic Advisor",
      price: "Starting at $5,000 per month",
      hours: "Approximately 20 hours per month",
      highlight: false,
      items: [
        "Advisory and Decision Support",
        "Rapid IT Health Check Assessment",
        "IT Strategy / Roadmap evaluation",
        "System Reviews and Recommendations",
        "Direct Collaboration with the Executive Team"
      ],
      description:
        "Provides executive-level guidance to help leaders understand the strengths and weaknesses of their IT function.",
      outcomes: [
        "Clear understanding of the current state of IT",
        "Business / IT Strategy Alignment Recommendations",
        "Improved decision-making capabilities related to IT systems"
      ]
    },

    {
      id: "cio",
      link: "/cio-operating",
      title: "CIO Advisor",
      price: "Starting at $7,500 per month",
      hours: "Approximately 30 hours per month",
      highlight: true,
      items: [
        "Includes everything in Strategic Advisor plus:",
        "IT Strategy planning and execution assistance",
        "Monthly Executive Calls",
        "Monthly Working Sessions",
        "Monthly Risk Reports",
        "Quarterly Business Reviews",
        "Annual Board Presentation Support"
      ],
      description:
        "Increased involvement to monitor risks and ensure IT supports business objectives.",
      outcomes: [
        "Ongoing risk reviews and recommendations",
        "Audit readiness",
        "Reduced operational and regulatory risk"
      ]
    },

    {
      id: "virtual",
      link: "/healthcare",
      title: "Virtual CIO",
      price: "Starting at $15,000 per month",
      hours: "Approximately 60 hours per month",
      highlight: false,
      items: [
        "Includes everything in Strategic Advisor and CIO Advisor plus:",
        "Ad hoc advisory hours",
        "Weekly Executive Calls",
        "Mentoring to senior IT resources",
        "Vendor Management framework"
      ],
      description:
        "Full-scale CIO leadership as part of your executive team.",
      outcomes: [
        "Improved IT strategy planning and execution",
        "Improved vendor management functions",
        "Documented CIO Operating System Assessment"
      ]
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans bg-[#F2F9FF]">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: "radial-gradient(#348DF033 2px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6">
            Advisory Services
          </span>

          <h2 className="max-w-5xl mx-auto mb-10 text-4xl font-bold leading-[1.2] md:text-5xl text-black">
            <span className="text-gray-600 font-semibold font-[Inter]">Trusted</span>{" "}
            <span className="inline-block relative pb-2 mr-2 group">
              <span className="relative z-10 font-[Inter]">
                CIO Leadership for Complex Healthcare Environments
              </span>
              <MarkerUnderline />
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-[#00000080] text-lg">
            Flexible advisory engagements designed to stabilize operations,
            reduce risk, and guide critical technology decisions.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <Link key={plan.id} to={plan.link} className="block">
              <div
                id={plan.id}
                className={`relative rounded-[32px] p-8 transition-all duration-300 cursor-pointer ${
                  plan.highlight
                    ? "bg-[#348DF0] text-white scale-105 lg:scale-110 shadow-2xl hover:scale-110"
                    : "bg-white text-gray-900 border border-gray-100 hover:-translate-y-2 hover:shadow-xl"
                }`}
              >
                {/* TITLE */}
                <h3 className="font-bold text-xl mb-2">{plan.title}</h3>

                {/* PRICE */}
                <p className={`font-semibold ${plan.highlight ? "text-blue-100" : "text-blue-600"}`}>
                  {plan.price}
                </p>

                <p className={`text-sm mb-6 ${plan.highlight ? "text-blue-50" : "text-gray-500"}`}>
                  {plan.hours}
                </p>

                {/* FEATURES */}
                <ul className="space-y-3 mb-6">
                  {plan.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2
                        className={`w-5 h-5 ${
                          plan.highlight ? "text-blue-200" : "text-blue-500"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* DESCRIPTION */}
                <p className={`mb-6 ${plan.highlight ? "text-blue-50" : "text-gray-600"}`}>
                  {plan.description}
                </p>

                {/* OUTCOMES */}
                <p className="font-semibold mb-2">Outcomes</p>
                <ul className="space-y-2">
                  {plan.outcomes.map((o, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 ${
                          plan.highlight ? "text-green-200" : "text-green-500"
                        }`}
                      />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        {/* SINGLE CTA */}
        <div className="text-center mt-16">
          <a
            href="https://calendly.com/brian_damiani/working-session-30-min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#348DF0] hover:bg-blue-600 text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg transition-all hover:-translate-y-1">
              Meet with us to discuss your needs
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryPackages;