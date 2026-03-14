import React, { useState } from 'react';
import {
    LayoutGrid,
    UserCircle,
    HeartPulse,
    MessageSquare,
    Waypoints,
    Crown,
    ArrowRight,
    ArrowUpRight,
    Coffee
} from 'lucide-react';

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

const Services = () => {
    // State to track which service is currently active (default is 1)
    const [activeId, setActiveId] = useState(1);

    const services = [
        {
            id: 1,
            title: "Free Working Session",
            description:
                "A 30-minute working session focused on a real technology or operational problem you’re facing—no sales pitch, just practical guidance and clarity.",
            icon: <Coffee className="w-6 h-6" /> // or any icon you prefer
        },
        {
            id: 2,
            title: "IT Health Check",
            description:
                "A focused assessment of your current IT environment to identify risks, gaps, and opportunities with clear, prioritized recommendations.",
            icon: <HeartPulse className="w-6 h-6" />
        },
        {
            id: 3,
            title: "CIO Operating System",
            description:
                "A structured 3–4 month assessment that brings clarity, control, and accountability to how technology supports the business.",
            icon: <LayoutGrid className="w-6 h-6" />
        },
        {
            id: 4,
            title: "CIO as a Service",
            description:
                "Ongoing fractional CIO leadership providing strategic, operational, and executive-level technology support without a full-time hire.",
            icon: <UserCircle className="w-6 h-6" />
        }
    ];


    return (
        <section className="bg-[#F2F9FF] py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <span
                            className="inline-block w-[130px] h-[30px] px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6 text-center"
                        >
                            How we help
                        </span>

                        <h2 className="max-w-5xl mx-auto mb-10 text-4xl font-bold leading-[1.2] md:text-5xl text-black">
                            <span className="inline-block relative pb-2 mr-2 md:mr-4 group">

                                <span className="relative z-10 font-[Inter]">What changes</span>
                                <MarkerUnderline />
                            </span>

                            <span className="text-gray-400 font-semibold font-[Inter]">
                                when
                            </span>{" "}

                            <span className="inline-block relative pb-2 group">
                                <span className="relative z-10 font-[Inter]">
                                    someone
                                </span>
                                <MarkerUnderline />
                            </span>

                            <br className="hidden md:block" />

                            {/* Underlined Text with Hover Effect (3) */}
                            <span className="text-gray-400 font-semibold mx-2 font-[Inter]">finally</span>
                            <span className="relative whitespace-nowrap inline-block mr-2 md:mr-4 ml-0 md:ml-2 group">
                                <span className="relative z-10 font-[Inter]">tells</span>
                                <MarkerUnderline />
                            </span>

                            <span className="text-gray-400 font-semibold mx-2 font-[Inter]">you</span>

                            {/* Underlined Text with Hover Effect (4) */}
                            <span className="relative whitespace-nowrap inline-block group">
                                <span className="relative z-10 font-[Inter]">the truth.</span>
                                <MarkerUnderline />
                            </span>
                        </h2>

                        <p
                            className="font-tt-hoves font-medium text-[20px] leading-[100%] tracking-[0px] text-[#00000080]"
                        >
                            Healthcare CEOs bring Wendigo in because they need clarity and control fast.
                        </p>

                    </div>

                    {/* <div>
                        <a href="/resources">
                            <button className="bg-[#348DF0] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full inline-flex items-center gap-3 transition-colors">
                                Explore Services

                                White Circle Wrapper
                                <span className="w-7 h-7 rounded-full border border-white flex items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </span>
                            </button>
                        </a>

                    </div> */}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center"> {/* Added items-center here */}

                    {/* Left Column: Image Box */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div
                            className="rounded-[24px] p-[40px] md:p-[64px] w-full lg:w-[515px] h-[442px] flex items-center justify-center bg-[#D6EAFE]"
                            style={{
                                background: `linear-gradient(180deg,rgba(0,117,231,0.2) 0%,rgba(0,82,142,0.2) 100%),#D6EAFE`
                            }}
                        >
                            <div className="relative rounded-2xl overflow-hidden w-full h-full">
                                <img
                                    src="/service.png"
                                    alt="IT Strategy Meeting"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Services List (Now vertically centered) */}
                    <div className="flex flex-col gap-3">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                onClick={() => setActiveId(service.id)}
                                className=""
                            >
                                {activeId === service.id ? (
                                    /* Active Card */
                                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 transform scale-[1.02]">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#348DF0] font-bold">{service.icon}</span>
                                                <h3 className="font-inter font-bold text-[20px] text-gray-900">
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="font-tt-hoves font-normal text-[14px] leading-relaxed text-[#000000BF] mt-2">
                                            {service.description}
                                        </p>
                                    </div>
                                ) : (
                                    /* Inactive List Item */
                                    <div className="group flex items-center gap-3 p-4 rounded-xl hover:bg-white/60 transition-colors duration-200">
                                        <span className="text-gray-400 group-hover:text-[#348DF0] transition-colors">
                                            {service.icon}
                                        </span>
                                        <h3 className="text-lg font-bold text-gray-500 group-hover:text-gray-900 transition-colors">
                                            {service.title}
                                        </h3>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;