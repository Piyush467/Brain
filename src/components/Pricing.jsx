import React from 'react';
import { Check, CheckCircle2 } from 'lucide-react';

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

const Pricing = () => {
    const plans = [
  {
    title: "Strategic CIO Advisor",
    description:
      "Executive guidance for critical technology decisions\n\nBest for organizations that need experienced CIO perspective to guide strategy, investments, and leadership discussions.",
    features: [
      "Typical engagement",
      "Monthly or periodic advisory support",
      "Participation in executive leadership discussions",
      "Strategic guidance on technology initiatives",
      "Independent perspective on vendors and investments",
      "Outcomes",
      "Clear technology strategy and priorities",
      "Stronger business–IT alignment",
      "More confident executive decision-making",
      "Independent guidance on major technology investments"
    ],
    buttonText: "Get Started Now",
    isPopular: false,
    showBadge: false
  },
  {
    title: "Fractional CIO Leadership",
    description:
      "Ongoing CIO leadership without hiring a full-time executive\n\nBest for organizations that need consistent CIO-level leadership but do not require a full-time role.",
    features: [
      "Typical engagement",
      "One or more days per week of CIO leadership",
      "Oversight of IT leadership and major initiatives",
      "Technology roadmap development and execution",
      "Vendor and partner strategy",
      "Outcomes",
      "Consistent executive technology leadership",
      "Stronger IT governance and accountability",
      "Technology initiatives moving forward with clear oversight",
      "IT strategy translated into operational execution"
    ],
    buttonText: "Get Started Now",
    isPopular: true,   // KEEP emphasis on middle card
    showBadge: false   // REMOVE “Most Popular”
  },
  {
    title: "Interim CIO Leadership",
    description:
      "Full-time CIO leadership during executive transitions\n\nBest for organizations navigating a sudden CIO departure or major leadership transition.",
    features: [
      "Typical engagement",
      "Immediate executive leadership for the IT organization",
      "Stabilization of operations and key initiatives",
      "Leadership of the CIO search or transition process",
      "Strategic and operational oversight during the transition period",
      "Outcomes",
      "Stable IT leadership during a critical transition",
      "Reduced operational and technology risk",
      "Continuity across projects, vendors, and teams",
      "A stronger foundation for the incoming CIO"
    ],
    buttonText: "Get Started Now",
    isPopular: false,
    showBadge: false
  }
];

    return (
        <section className="relative py-10 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans bg-[#F2F9FF]">

            {/* BACKGROUND ELEMENTS */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-50" style={{
                    backgroundImage: 'radial-gradient(#348DF033 2px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}></div>
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#348DF0] opacity-[0.08] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/4"></div>
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#348DF0] opacity-[0.08] rounded-full blur-[120px] translate-x-1/2 translate-y-1/4"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F2F9FF]/40 to-[#F2F9FF]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6 text-center">
                        Services
                    </span>
                    <h2 className="max-w-5xl mx-auto mb-10 text-4xl font-bold leading-[1.2] md:text-5xl text-black">
                        <span className="text-gray-600 font-semibold font-[Inter]">Flexible</span>{" "}
                        <span className="inline-block relative pb-2 mr-2 md:mr-4 group">
                            <span className="relative z-10 font-[Inter]">CIO Leadership for Healthcare Organizations</span>
                            <MarkerUnderline />
                        </span>
                    </h2>
                    <p className="font-tt-hoves font-medium text-[20px] leading-[100%] max-w-3xl mx-auto tracking-[0px] text-[#00000080]">
                        Wendigo provides flexible engagement options designed to give CEOs clarity, stability, and long-term strategic direction.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-[32px] p-8 transition-all duration-300 ${plan.isPopular
                                ? 'bg-[#348DF0] text-white scale-105 lg:scale-110 z-20 border-2 border-blue-400/50 shadow-2xl shadow-blue-500/20'
                                : 'bg-white text-gray-900 border border-gray-100 hover:-translate-y-1'
                                }`}
                        >
                            {/* BADGE LOGIC */}
                            {plan.showBadge && (
                                <div className={`absolute top-6 right-6 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm border border-1 shadow-sm ${
                                    plan.isPopular 
                                    ? 'bg-[#FFFFFF29] text-white border-[#FFFFFF3D]' 
                                    : 'bg-[#348DF01A] text-[#348DF0] border-[#348DF04D]'
                                }`}>
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                
                                <h3 className="font-inter font-bold text-[20px] leading-none tracking-[0px] align-middle mb-4">
                                    {plan.title}
                                </h3>
                                <p className={`font-ttHoves font-medium text-[14px] leading-tight tracking-[0px] align-middle ${plan.isPopular ? 'text-blue-50' : 'text-gray-500'}`}>
                                    {plan.description.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < plan.description.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-10">
  {plan.features.map((feature, i) => {
    const isSectionHeader =
      feature === "Typical engagement" || feature === "Outcomes";

    return (
      <li key={i} className="flex items-start gap-3">
        {!isSectionHeader && (
          plan.isPopular ? (
            <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
          ) : (
            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
            </div>
          )
        )}

        <span
          className={`font-ttHoves text-[14px] ${
            isSectionHeader
  ? plan.isPopular
      ? "font-bold text-white mt-2"
      : "font-bold text-black mt-2"
              : plan.isPopular
              ? "text-white"
              : "text-gray-700"
          }`}
        >
          {feature}
        </span>
      </li>
    );
  })}
</ul>

                            <div className="w-full flex justify-center">
                                <a href="https://t.ly/7Jjhw" target="_blank" rel="noopener noreferrer">
                                    <button className={`w-[260px] h-[42px] px-4 pr-3 pl-4 py-3 rounded-[30px] border border-solid font-ttHoves font-medium text-[14px] leading-none tracking-[0px] text-center align-middle flex items-center justify-center gap-[12px] opacity-100 transition-all duration-200 ${
                                        plan.isPopular
                                            ? 'bg-white text-black hover:bg-blue-50 shadow-lg'
                                            : 'bg-blue-50 text-[#008AFF] hover:bg-blue-100 hover:shadow-md'
                                    }`}>
                                        {plan.buttonText}
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;