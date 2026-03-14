import React from 'react';

const ConclusionSection = () => {
    return (
        <section className="py-10 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center">
                    
                    {/* Label */}
                    
                    <span className="inline-block px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6 text-center">
                      Conclusion
                    </span>

                    {/* Main Headline */}
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-inter leading-tight">
                        Transforming IT from a <br className="hidden md:block" />
                        <span className="text-blue-500">Liability into an Asset.</span>
                    </h2>

                    {/* The Provided Text */}
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-sans">
                        The <strong className="text-slate-900">CIO Operating System™</strong> empowers CEOs to bring IT into alignment with business priorities, manage risk requirements, and ensure comprehensive executive oversight. 
                        <br /><br />
                        This transformative solution restores control and confidence, making IT a valued partner in achieving strategic objectives.
                    </p>

                    {/* Decorative Divider */}
                    <div className="mt-12 flex justify-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 rounded-full"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ConclusionSection;