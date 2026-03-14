import { ArrowRight } from 'lucide-react';
import React from 'react';

const OsCTA = () => {
    return (
        <div className="relative w-full min-h-[75vh] flex items-center justify-center font-sans py-10 -mt-18 lg:mt-0 px-4 md:px-8 overflow-hidden">

            {/* --- OUTER BACKGROUND LAYER --- */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(180deg, #EEF7FF 0%, #00AAFF00 50%, #001224 100%)'
                }}
            ></div>

            {/* --- MAIN CARD (with card.png background) --- */}
            <div
                className="relative z-10 w-full max-w-6xl rounded-[30px] md:rounded-[32px] overflow-hidden text-center shadow-2xl"
                style={{
                    backgroundImage: 'url("/card1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >

                {/* Inner content container */}
                <div className="relative z-20 py-10 px-6 md:py-10 md:px-12 flex flex-col items-center">

                    {/* Badge */}
                    <div className="inline-block px-5 py-2 mb-5 rounded-full border border-white/40 bg-white/10 backdrop-blur-md shadow-sm">
                        <span className="text-[14px] leading-none font-medium text-white text-center font-tt">
                            From a CEO
                        </span>

                    </div>

                    {/* Headline */}
                    <h2 className="text-[48px] leading-[48px] font-bold tracking-[-2px] text-white text-center mb-4 max-w-6xl font-inter">
                        Ready to transform?
                    </h2>

                    {/* Subtitle */}
                    <p className="text-[20px] leading-none font-normal text-blue-50 text-center mb-12 max-w-5xl opacity-95 font-tt">
                        Start your journey to aligning technology with your business vision today. Choose your path below:
                    </p>

                    {/* CTA Button */}
                    <a href="https://calendly.com/brian_damiani/working-session-30-min" target="_blank"
                        rel="noopener noreferrer">
                        <button
                            className="bg-white hover:bg-blue-50 text-[#348DF0] font-bold w-[220px] h-[42px] px-[32px] py-[12px] rounded-[30px] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 text-[16px] tracking-wide flex items-center justify-center gap-[12px]"
                        >
                            Book a strategy call
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OsCTA;
