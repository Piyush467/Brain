import React from "react";
import { Check } from "lucide-react";
import Navbar from "./Navbar";

/* ---------- Marker Underline ---------- */
const MarkerUnderline = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    className={`absolute bottom-0 left-0 w-full h-[10px] -mb-1 ${className}`}
  >
    <defs>
      <filter id="markerNoisePricing">
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
      filter="url(#markerNoisePricing)"
      opacity="0.7"
    />
  </svg>
);

/* ---------- Check Icon ---------- */
const CheckIcon = ({ isLight }) => (
  <div
    className={`
      flex items-center justify-center w-[18px] h-[18px] rounded-full flex-shrink-0 mt-[3px]
      ${isLight
        ? "bg-transparent border border-blue-200 text-blue-100"
        : "bg-[#E5E7EB] text-gray-800"
      }
    `}
  >
    <Check size={12} strokeWidth={3} />
  </div>
);

/* ---------- Pricing Component ---------- */
const Pricing = () => {
  const plans = [
    {
      title: "CIO as a Service",
      price: "$7,000",
      frequency: "Starting / Month",
      description:
        "Get C-level IT leadership without hiring full-time. Strategy, culture, systems, cybersecurity — all led with hands-on involvement and clear communication.",
      features: [
        "Advisory & decision support",
        "Team leadership & coaching",
        "System reviews & recommendations",
        "Ongoing strategic roadmap execution",
        "Direct collaboration with the executive team",
      ],
      buttonText: "Explore CIO as a Service",
      isPopular: false, // Card white rahega
      showBadge: true,  // Lekin badge dikhega
    },
    {
      title: "CIO Operating System Assessment",
      price: "$25,000",
      frequency: "Starting",
      description:
        "A structured 3–4 month engagement designed to stabilize, strengthen, and scale your IT organization.\nClear findings. No jargon. Actionable next steps.",
      features: [
        "Risk & Performance Scorecard",
        "Executive IT Summary",
        "Prioritized Issues List",
        "Updated IT & Security Policies",
        "IT Compliance Dashboard",
        "90-Day Action Plan",
        "Capability Gap Assessment",
        "1-Year IT Roadmap",
      ],
      buttonText: "Get CIO360 Assessment",
      isPopular: true, // Card blue rahega
      showBadge: true,
    },
    {
      title: "IT Health Check",
      price: "$5,000",
      frequency: "Starting",
      description:
        "A fast 2–3 week diagnostic that reveals the health of your IT environment. See what's working, what's failing, and where your highest-risk blind spots are.",
      features: [
        "Rapid IT environment review",
        "Security & compliance risk scan",
        "Technology & process gap identification",
        "Prioritized recommendations",
        "Executive-ready summary findings",
      ],
      buttonText: "Get Health Check Now",
      isPopular: false,
      showBadge: false,
    },
  ];

  return (
    <section className="relative w-full bg-[#F0F7FF] font-sans overflow-hidden">
      <Navbar />

      <div className="relative max-w-[1200px] mx-auto px-4 py-10 lg:py-20 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-[#E0EFFE] border border-[#BFDBFE] mb-8">
            <span className="text-[#3B82F6] text-[13px] font-semibold tracking-wide">
              Pricing & Engagement Options
            </span>
          </div>

          <h2 className="text-[27px] md:text-[50px] leading-[1.1] text-gray-900 mb-6 tracking-tight">
            <span className="relative inline-block font-bold z-10">
              Simple
              <MarkerUnderline className="z-0 opacity-70" />
            </span>
            <span className="font-bold text-gray-500">, </span>
            <span className="relative inline-block font-bold z-10">
              transparent pricing
              <MarkerUnderline className="z-0 opacity-70" />
            </span>
            <span className="font-bold text-[#9CA3AF]"> for</span>
            <br />
            <span className="relative inline-block font-bold z-10">
              healthcare IT leadership.
              <MarkerUnderline className="z-0 opacity-70" />
            </span>
          </h2>

          <p className="max-w-[800px] mx-auto text-[17px] md:text-[18px] leading-[1.6]">
            <span className="font-bold text-gray-900">
              No surprises. No hidden fees. Just clear, predictable pricing
            </span>
            <span className="text-[#9CA3AF] font-medium"> for the  </span>
            <br />
            <span className="font-bold text-gray-500"> services </span>
            <span className="font-bold text-gray-900">
              that bring stability, strategy,
            </span>
            <span className="text-[#9CA3AF] font-medium"> and </span>
            <span className="font-bold text-gray-900">clarity to your IT.</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:mx-20 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col p-8 rounded-[24px] transition-all duration-300
                ${plan.isPopular
                  ? "bg-[#348DF0] text-white shadow-[0_20px_50px_-12px_rgba(52,141,240,0.5)] lg:scale-105 z-10"
                  : "bg-white text-gray-900 shadow-sm border border-gray-100"
                }
              `}
            >
              {/* Badge Condition: showBadge use kiya hai */}
              {plan.showBadge && (
                <div className="absolute top-4 right-4">
                  <span className={`
                    text-[11px] font-bold px-3 py-1 rounded-full border
                    ${plan.isPopular 
                      ? "bg-[#5CA6F4] text-white border-[#7BB9F6]" 
                      : "bg-[#E0EFFE] text-[#3B82F6] border-[#BFDBFE]"
                    }
                  `}>
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-[32px] font-bold">{plan.price}</span>
                  <span
                    className={`text-[13px] font-semibold ${plan.isPopular ? "text-blue-100" : "text-gray-900"
                      }`}
                  >
                    {plan.frequency}
                  </span>
                </div>

                <h3 className="text-[20px] font-bold mb-5">{plan.title}</h3>

                <div
                  className={`mb-6 text-[14px] leading-[1.6] ${plan.isPopular ? "text-blue-50" : "text-gray-500"
                    }`}
                >
                  {plan.description.split("\n").map((line, i) => (
                    <p key={i} className={i > 0 ? "mt-4" : ""}>
                      {line}
                    </p>
                  ))}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon isLight={plan.isPopular} />
                      <span
                        className={`text-[13px] font-medium ${plan.isPopular ? "text-white" : "text-gray-700"
                          }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://calendly.com/brian_damiani/working-session-30-min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className={`mt-8 w-full h-[52px] rounded-full text-[14px] font-semibold transition-all
                  ${plan.isPopular
                      ? "bg-white text-gray-900 hover:bg-gray-50"
                      : "bg-[#EBF5FF] text-[#2563EB] hover:bg-blue-100"
                    }
                `}
                >
                  {plan.buttonText}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;