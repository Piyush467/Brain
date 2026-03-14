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
            title: "CIO as a Service",
            price: "$7,000",
            frequency: "Starting / Month",
            description: "Get C-level IT leadership without hiring full-time. Strategy, culture, systems, cybersecurity — all led with hands-on involvement and clear communication.",
            features: [
                "Advisory & decision support",
                "Team leadership & coaching",
                "System reviews & recommendations",
                "Ongoing strategic roadmap execution",
                "Direct collaboration with the executive team"
            ],
            buttonText: "Get Started Now",
            isPopular: false, // Keeps card background white
            showBadge: true,  // Displays the badge
        },
        {
            title: "CIO Operating System Assessment",
            price: "$25,000",
            frequency: "Starting",
            description: "A structured 3–4 month engagement designed to stabilize, strengthen, and scale your IT organization.\nClear findings. No jargon. Actionable next steps.",
            features: [
                "Risk & Performance Scorecard",
                "Executive IT Summary",
                "Prioritized Issues List",
                "Updated IT & Security Policies",
                "IT Compliance Dashboard",
                "90-Day Action Plan",
                "Capability Gap Assessment",
                "1-Year IT Roadmap"
            ],
            buttonText: "Get Started Now",
            isPopular: true, // Card is blue
            showBadge: true,
        },
        {
            title: "IT Health Check",
            price: "$5,000",
            frequency: "Starting",
            description: "A fast 2–3 week diagnostic that reveals the health of your IT environment. See what's working, what's failing, and where your highest-risk blind spots are.",
            features: [
                "Rapid IT environment review",
                "Security & compliance risk scan",
                "Technology & process gap identification",
                "Prioritized recommendations",
                "Executive-ready summary findings"
            ],
            buttonText: "Get Started Now",
            isPopular: false,
            showBadge: false,
        },
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
                        Pricing
                    </span>
                    <h2 className="max-w-5xl mx-auto mb-10 text-4xl font-bold leading-[1.2] md:text-5xl text-black">
                        <span className="text-gray-600 font-semibold font-[Inter]">Simple,</span>{" "}
                        <span className="inline-block relative pb-2 mr-2 md:mr-4 group">
                            <span className="relative z-10 font-[Inter]">Transparent pricing</span>
                            <MarkerUnderline />
                        </span>
                    </h2>
                    <p className="font-tt-hoves font-medium text-[20px] leading-[100%] max-w-3xl mx-auto tracking-[0px] text-[#00000080]">
                        Fixed-cost assessments and flexible leadership options designed to give CEOs clarity, stability, and long-term strategic direction.
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
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="font-inter font-bold text-[28px] leading-none tracking-[-1px] align-middle">
                                        {plan.price}
                                    </span>
                                    <span className={`font-ttHoves font-semibold text-[12px] leading-none tracking-[0px] align-middle ${plan.isPopular ? 'text-blue-100' : 'text-gray-500'}`}>
                                        {plan.frequency}
                                    </span>
                                </div>
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
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        {plan.isPopular ? (
                                            <CheckCircle2 className="w-5 h-5 text-blue-200 opacity-100 flex-shrink-0" />
                                        ) : (
                                            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                            </div>
                                        )}
                                        <span className={`font-ttHoves font-medium text-[14px] leading-none tracking-[0px] align-middle ${plan.isPopular ? 'text-white' : 'text-gray-700'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="w-full flex justify-center">
                                <a href="https://calendly.com/brian_damiani/working-session-30-min" target="_blank" rel="noopener noreferrer">
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