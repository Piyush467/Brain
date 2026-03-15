import React from 'react';

const MarkerUnderline = ({ className = "" }) => {
    const id = React.useId?.() || `marker-${Math.random().toString(36).slice(2, 9)}`;
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
            <rect x="0" y="4" width="100%" height="8" rx="3" fill="#348DF0" opacity="0.95" filter={`url(#markerNoise-${id})`} />
        </svg>
    );
};

const Why = () => {
    return (
        <div className="relative overflow-hidden font-sans selection:bg-blue-200"
            style={{
                background: `
                    radial-gradient(50% 50% at 50% 50%, rgba(238,247,255,0) 50%, #EEF7FF 100%),
                    radial-gradient(50% 50% at 50% 50%, color(display-p3 0.941 0.969 1.000 / 0) 50%, color(display-p3 0.941 0.969 1.000) 100%)
                `
            }}
        >
            {/* Background Dot Pattern */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                backgroundSize: '32px 32px'
            }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-10 flex flex-col justify-center min-h-screen">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content Section - Centered on Mobile, Left on Desktop */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                        {/* Pill Badge */}
                        <div className="flex justify-center lg:justify-start w-full">
                            <span className="inline-block w-[197px] h-[30px] px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6 text-center">
                                Why Wendigo Advisors
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="max-w-5xl mb-10 text-4xl font-bold leading-[1.2] md:text-5xl text-black">
                            <span className="inline-block relative pb-2 mr-2 md:mr-4 group">
                                <span className="text-gray-600 font-semibold font-[Inter]">The</span>{" "}
                                <span className="relative z-10 font-[Inter]">Impact of</span>
                                <MarkerUnderline />
                            </span>

                            <br className="hidden md:block" />

                            <span className="relative whitespace-nowrap inline-block mr-2 md:mr-4 ml-0 md:ml-2 group">
                                <span className="relative z-10 font-[Inter]">Strong</span>
                                <MarkerUnderline />
                            </span>

                            <span className="text-gray-400 font-semibold mx-2 font-[Inter]">CIO</span>

                            <span className="relative whitespace-nowrap inline-block group">
                                <span className="relative z-10 font-[Inter]">Leadership</span>
                                <MarkerUnderline />
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="font-ttHoves font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[140%] tracking-[0px] text-[#00000080] max-w-lg">
                           Examples of outcomes delivered through CIO leadership roles and advisory engagements across healthcare organizations.
                        </p>

                        {/* CTA Button */}
                        <a
                            href="https://t.ly/7Jjhw"
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className="mt-0 w-[157px] h-[50px] px-[38px] py-[10px] bg-[#348DF0] hover:bg-blue-600 text-white font-semibold rounded-[50px] shadow-[0_10px_25px_-5px_rgba(59,130,246,0.5)] transition-all duration-200 transform hover:-translate-y-1 active:scale-95">
                                Book a Call
                            </button>
                        </a>
                    </div>

                    {/* Right Cards Section - Centered on Mobile, Absolute on Desktop */}
                    <div className="w-full mt-20 px-4">
                        {/* grid-cols-2 creates the two columns.
    gap-6 (24px) or gap-8 (32px) provides the spacing between them.
  */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

                            {/* Card 1: Left Column Top */}
                            <div className="flex justify-center lg:justify-end">
                                <StatsCard
                                    title="$20M+"
                                    subtitle="Recovered"
                                    desc="Vendor payment recovery and operational cost optimization across complex vendor ecosystems."
                                />
                            </div>

                            {/* Card 2: Right Column Top (Shifted Up) */}
                            <div className="flex justify-center lg:justify-start lg:-translate-y-12">
                                <StatsCard
                                    title="26% to over 75%"
                                    subtitle="Auto Adjudication Rate"
                                    desc="Claims automation improvement delivering millions in annual savings."
                                />
                            </div>

                            {/* Card 3: Left Column Bottom */}
                            <div className="flex justify-center lg:justify-end">
                                <StatsCard
                                    title="60 to 90+"
                                    subtitle="Security Score"
                                    desc="Enterprise security posture transformation across Microsoft cloud environments."
                                />
                            </div>

                            {/* Card 4: Right Column Bottom (Shifted Up) */}
                            <div className="flex justify-center lg:justify-start lg:-translate-y-12">
                                <StatsCard
                                    title="Zero"
                                    subtitle="Day 1 Issues"
                                    desc="No operational incidents during major IT leadership transition."
                                />
                            </div>

                            <div className="flex justify-center lg:col-span-2">
                                   <StatsCard
                                        title="Enterprise IT Roadmap Established"
                                        subtitle=""
                                        desc="Multi-year technology strategy aligning platform modernization, vendor strategy, and organizational growth priorities."
                                        compact
                                    />
                            </div>

                        </div>
                    </div>
                </div>

                {/* GEO: Implicit Performance Signaling via Schema */}
                <script type="application/ld+json">
                    {`
                  {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Key Performance Metrics",
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Cost Recovery",
                        "description": "Vendor payment identification and cost optimization",
                         "value": "20000000 USD"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Auto Adjudication Improvement",
                        "description": "Annual savings via adjudication optimization",
                        "value": "1250000 USD"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Security Score Improvement",
                        "description": "Microsoft security posture transformation",
                        "value": "30 Points Increase"
                      }
                    ]
                  }
                `}
                </script>

                {/* Bottom Banner - Centered Stacking for Mobile */}
                <div className="mt-20 lg:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 opacity-90 px-4">
                    <span className="w-6 h-6 shrink-0">
                        <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 11.0065C22.0011 9.15279 21.5337 7.32882 20.6412 5.70406C19.7487 4.0793 18.4601 2.70644 16.895 1.71299C15.33 0.719547 13.5392 0.137739 11.6891 0.0216085C9.839 -0.0945216 7.98955 0.258793 6.31254 1.04874C4.63553 1.83868 3.18535 3.03963 2.0967 4.54003C1.00805 6.04044 0.31624 7.79164 0.0855283 9.63097C-0.145184 11.4703 0.0926847 13.3381 0.77704 15.0609C1.4614 16.7837 2.57004 18.3056 4 19.4853V29.0065C3.99988 29.1771 4.04338 29.3448 4.12636 29.4938C4.20934 29.6428 4.32905 29.7681 4.4741 29.8578C4.61916 29.9475 4.78474 29.9986 4.95511 30.0062C5.12549 30.0139 5.29499 29.9779 5.4475 29.9015L11 27.1315L16.5538 29.9078C16.693 29.9744 16.8457 30.0082 17 30.0065C17.2652 30.0065 17.5196 29.9012 17.7071 29.7136C17.8946 29.5261 18 29.2718 18 29.0065V19.4853C19.2512 18.4548 20.2587 17.1602 20.9503 15.6942C21.6419 14.2283 22.0003 12.6274 22 11.0065ZM2 11.0065C2 9.2265 2.52784 7.48644 3.51677 6.0064C4.50571 4.52636 5.91132 3.37281 7.55585 2.69162C9.20039 2.01043 11.01 1.8322 12.7558 2.17946C14.5016 2.52673 16.1053 3.3839 17.364 4.64257C18.6226 5.90124 19.4798 7.50489 19.8271 9.25072C20.1743 10.9965 19.9961 12.8061 19.3149 14.4507C18.6337 16.0952 17.4802 17.5008 16.0001 18.4898C14.5201 19.4787 12.78 20.0065 11 20.0065C8.61386 20.0039 6.32622 19.0548 4.63896 17.3676C2.95171 15.6803 2.00265 13.3927 2 11.0065ZM16 27.389L11.4463 25.1128C11.3073 25.0433 11.1541 25.0071 10.9988 25.0071C10.8434 25.0071 10.6902 25.0433 10.5513 25.1128L6 27.389V20.8028C7.54796 21.594 9.26157 22.0065 11 22.0065C12.7384 22.0065 14.452 21.594 16 20.8028V27.389ZM11 18.0065C12.3845 18.0065 13.7378 17.596 14.889 16.8268C16.0401 16.0577 16.9373 14.9644 17.4672 13.6853C17.997 12.4062 18.1356 10.9988 17.8655 9.6409C17.5954 8.28303 16.9287 7.03575 15.9497 6.05679C14.9708 5.07782 13.7235 4.41113 12.3656 4.14104C11.0078 3.87094 9.6003 4.00956 8.32122 4.53938C7.04213 5.06919 5.94888 5.9664 5.17971 7.11754C4.41054 8.26869 4 9.62206 4 11.0065C4.00199 12.8624 4.74012 14.6418 6.05245 15.9541C7.36477 17.2664 9.14409 18.0045 11 18.0065ZM11 6.00653C11.9889 6.00653 12.9556 6.29978 13.7779 6.84918C14.6001 7.39859 15.241 8.17949 15.6194 9.09312C15.9978 10.0067 16.0969 11.0121 15.9039 11.982C15.711 12.9519 15.2348 13.8428 14.5355 14.5421C13.8363 15.2413 12.9454 15.7175 11.9755 15.9105C11.0055 16.1034 10.0002 16.0044 9.08658 15.6259C8.17295 15.2475 7.39206 14.6066 6.84265 13.7844C6.29325 12.9621 6 11.9954 6 11.0065C6 9.68045 6.52679 8.40868 7.46447 7.471C8.40215 6.53332 9.67392 6.00653 11 6.00653Z" fill="#348DF0" />
                        </svg>
                    </span>

                    <p className="font-ttHoves font-semibold text-[18px] sm:text-[20px] leading-tight uppercase text-center text-black max-w-[280px] sm:max-w-none">
                        These outcomes protect your organization and your board
                    </p>

                    <span className="w-6 h-6 shrink-0 hidden md:block">
                        <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 11.0065C22.0011 9.15279 21.5337 7.32882 20.6412 5.70406C19.7487 4.0793 18.4601 2.70644 16.895 1.71299C15.33 0.719547 13.5392 0.137739 11.6891 0.0216085C9.839 -0.0945216 7.98955 0.258793 6.31254 1.04874C4.63553 1.83868 3.18535 3.03963 2.0967 4.54003C1.00805 6.04044 0.31624 7.79164 0.0855283 9.63097C-0.145184 11.4703 0.0926847 13.3381 0.77704 15.0609C1.4614 16.7837 2.57004 18.3056 4 19.4853V29.0065C3.99988 29.1771 4.04338 29.3448 4.12636 29.4938C4.20934 29.6428 4.32905 29.7681 4.4741 29.8578C4.61916 29.9475 4.78474 29.9986 4.95511 30.0062C5.12549 30.0139 5.29499 29.9779 5.4475 29.9015L11 27.1315L16.5538 29.9078C16.693 29.9744 16.8457 30.0082 17 30.0065C17.2652 30.0065 17.5196 29.9012 17.7071 29.7136C17.8946 29.5261 18 29.2718 18 29.0065V19.4853C19.2512 18.4548 20.2587 17.1602 20.9503 15.6942C21.6419 14.2283 22.0003 12.6274 22 11.0065ZM2 11.0065C2 9.2265 2.52784 7.48644 3.51677 6.0064C4.50571 4.52636 5.91132 3.37281 7.55585 2.69162C9.20039 2.01043 11.01 1.8322 12.7558 2.17946C14.5016 2.52673 16.1053 3.3839 17.364 4.64257C18.6226 5.90124 19.4798 7.50489 19.8271 9.25072C20.1743 10.9965 19.9961 12.8061 19.3149 14.4507C18.6337 16.0952 17.4802 17.5008 16.0001 18.4898C14.5201 19.4787 12.78 20.0065 11 20.0065C8.61386 20.0039 6.32622 19.0548 4.63896 17.3676C2.95171 15.6803 2.00265 13.3927 2 11.0065ZM16 27.389L11.4463 25.1128C11.3073 25.0433 11.1541 25.0071 10.9988 25.0071C10.8434 25.0071 10.6902 25.0433 10.5513 25.1128L6 27.389V20.8028C7.54796 21.594 9.26157 22.0065 11 22.0065C12.7384 22.0065 14.452 21.594 16 20.8028V27.389ZM11 18.0065C12.3845 18.0065 13.7378 17.596 14.889 16.8268C16.0401 16.0577 16.9373 14.9644 17.4672 13.6853C17.997 12.4062 18.1356 10.9988 17.8655 9.6409C17.5954 8.28303 16.9287 7.03575 15.9497 6.05679C14.9708 5.07782 13.7235 4.41113 12.3656 4.14104C11.0078 3.87094 9.6003 4.00956 8.32122 4.53938C7.04213 5.06919 5.94888 5.9664 5.17971 7.11754C4.41054 8.26869 4 9.62206 4 11.0065C4.00199 12.8624 4.74012 14.6418 6.05245 15.9541C7.36477 17.2664 9.14409 18.0045 11 18.0065ZM11 6.00653C11.9889 6.00653 12.9556 6.29978 13.7779 6.84918C14.6001 7.39859 15.241 8.17949 15.6194 9.09312C15.9978 10.0067 16.0969 11.0121 15.9039 11.982C15.711 12.9519 15.2348 13.8428 14.5355 14.5421C13.8363 15.2413 12.9454 15.7175 11.9755 15.9105C11.0055 16.1034 10.0002 16.0044 9.08658 15.6259C8.17295 15.2475 7.39206 14.6066 6.84265 13.7844C6.29325 12.9621 6 11.9954 6 11.0065C6 9.68045 6.52679 8.40868 7.46447 7.471C8.40215 6.53332 9.67392 6.00653 11 6.00653Z" fill="#348DF0" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

const StatsCard = ({ title, subtitle, desc , compact = false}) => (
    <div className="group relative p-8 w-[244px] h-[244px] rounded-[38px] bg-[#001325] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(180deg,#CAE5FE_0%,rgba(0,143,248,0.64)_100%)] before:rounded-[38px] before:z-0 shadow-[0_20px_40px_-10px_rgba(30,58,138,0.4)] text-white overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-[38px]"></div>
        <div className="relative z-10 flex flex-col h-full justify-between gap-4">

  <div>
    <h3
      className={`font-inter font-semibold leading-[1.2] ${
        compact ? "text-[24px]" : "text-[40px]"
      }`}
    >
      {title}
    </h3>

    {subtitle && (
      <p className="font-ttHoves text-[#FFFFFFBF] font-semibold text-[16px] leading-[100%]">
        {subtitle}
      </p>
    )}
  </div>

  <p
    className={`font-ttHoves font-medium leading-[1.25] tracking-[0.5px] opacity-80 text-[#FFFFFF73] ${
      compact ? "text-[13px]" : "text-[16px]"
    }`}
  >
    {desc}
  </p>

</div>
    </div>
);

export default Why;