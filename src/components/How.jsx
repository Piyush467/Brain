import React from 'react';

const How = () => {
    return (
        <section className="relative w-full bg-[#F0F8FF] py-10 px-4 md:px-8 overflow-hidden font-sans">

            {/* Background Dot Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px'
                }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40 items-center">

                {/* --- LEFT SIDE: Image Card (Desktop only) --- */}
                <div className="hidden lg:flex justify-center lg:justify-end">
                    <div
                        className="relative flex items-center justify-center overflow-hidden"
                        style={{
                            width: "502px",
                            height: "524px",
                            padding: "42px",
                            borderRadius: "42px",
                            gap: "10px",
                            background:
                                "linear-gradient(180deg, rgba(0,117,231,0.16) 0%, rgba(0,82,142,0.16) 100%)",
                        }}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img
                                src="/man.png"
                                alt="Brian Damiani - Healthcare CIO Advisor and Founder of Wendigo Advisors"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* --- RIGHT SIDE: Content --- */}
                <div className="text-left">

                    {/* Badge */}
                    <span
                        className="inline-block w-[102px] h-[30px] px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6 text-center"
                    >
                        Our Story
                    </span>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl font-bold text-[#00000052] leading-[1.1] mb-6 tracking-tight">
                        How{" "}
                        <span className="relative inline-block text-black">
                            Wendigo
                            <img
                                src="/line.png"
                                alt=""
                                className="absolute left-0 -bottom-2 w-full h-auto object-contain pointer-events-none"
                            />
                        </span>{" "}
                        <br />
                        <span className="relative inline-block text-black mt-2">
                            Advisors
                            <img
                                src="/line.png"
                                alt=""
                                className="absolute left-0 -bottom-2 w-full h-auto object-contain pointer-events-none"
                            />
                        </span>
                        <span>{" "}Came to Life</span>

                    </h2>

                    {/* --- MOBILE IMAGE (between subheadline & description) --- */}
                    <div className="flex justify-center mb-6 lg:hidden">
                        <div
                            className="relative flex items-center justify-center overflow-hidden"
                            style={{
                                width: "100%",
                                maxWidth: "380px",
                                aspectRatio: "502 / 524",
                                padding: "32px",
                                borderRadius: "32px",
                                background:
                                    "linear-gradient(180deg, rgba(0,117,231,0.16) 0%, rgba(0,82,142,0.16) 100%)",
                            }}
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <img
                                    src="/man.png"
                                    alt="Brian Damiani - Healthcare CIO Advisor and Founder of Wendigo Advisors"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="font-[TT Hoves Pro Trial] font-normal text-[18px] leading-[100%] tracking-normal text-[#000000BF]">
                        Brian began in engineering at a healthcare software vendor, quickly advancing
                        to lead the entire engineering division overseeing core systems and product
                        development.
                    </p>

                    <p className="font-[TT Hoves Pro Trial] font-normal text-[18px] leading-[100%] tracking-normal text-[#000000BF] mt-4">
                        He later moved into client-facing roles, gaining operational insight into how
                        healthcare organizations actually use technology.
                    </p>

                    <p className="font-[TT Hoves Pro Trial] font-normal text-[18px] leading-[100%] tracking-normal text-[#000000BF] mt-4">
                        After helping a firm grow revenue by 40% and serving as Interim CIO multiple
                        times, Brian saw a gap: mid-market healthcare organizations needed expert IT
                        leadership but couldn't afford full-time CIOs.
                    </p>

                    <p className="font-[TT Hoves Pro Trial] font-normal text-[18px] leading-[100%] tracking-normal text-[#000000BF] mt-4">
                        Wendigo Advisors was created to fill that gap.
                    </p>


                    {/* Button */}
                    <button className="group flex items-center gap-2 bg-[#348DF0] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-blue-500/30 mt-5">
                        Know Brian’s Journey
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>

                </div>

            </div>
        </section>
    );
};

export default How;
