import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

const Pricing = () => {
    const plan = {
        title: "CIO Operating System™",
        price: "$25,000",
        frequency: "Project Based",
        description: "The complete overhaul. Stabilize, Strengthen, and Scale your IT organization.",
        timeframe: "3–4 Months Duration",
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
        buttonText: "Start Transformation"
    };

    return (
        <section className="py-20 px-4 md:px-8 bg-slate-100 font-sans min-h-screen flex items-center justify-center">
            
            <div className="max-w-6xl mx-auto w-full">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Strategic IT Transformation
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Clear deliverables. Fixed costs. No surprises.
                    </p>
                </div>

                {/* Main Container - Split Layout */}
                <div className="bg-white rounded-[30px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">
                    
                    {/* LEFT PANEL: The Offer (Dark Blue) */}
                    <div className="lg:col-span-2 bg-[#0F172A] text-white p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
                        
                        {/* Abstract Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>

                        <div className="relative z-10">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wider uppercase mb-8">
                                <Star className="w-3 h-3 fill-current" />
                                Premium Engagement
                            </div>

                            <h3 className="text-3xl font-bold mb-2 leading-tight">
                                {plan.title}
                            </h3>
                            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                                {plan.description}
                            </p>

                            <div className="my-8 border-t border-slate-700/50 pt-8">
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Estimated Investment</p>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {plan.price}
                                </div>
                                <p className="text-blue-400 font-medium">
                                    {plan.frequency} • {plan.timeframe}
                                </p>
                            </div>
                        </div>

                        {/* Button Area */}
                        <div className="relative z-10 mt-8">
                             <a 
                                href="https://calendly.com/brian_damiani/cio-operating-system-discussion" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <button className="group w-full bg-[#348DF0] hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-between shadow-lg shadow-blue-900/20">
                                    <span>{plan.buttonText}</span>
                                    <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </button>
                            </a>
                            <p className="text-center text-slate-500 text-xs mt-4">
                                Includes free initial consultation.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT PANEL: The Deliverables (White) */}
                    <div className="lg:col-span-3 bg-white p-10 md:p-14 flex flex-col justify-center">
                        <div className="mb-10">
                            <h4 className="text-2xl font-bold text-slate-900 mb-2">
                                What's included?
                            </h4>
                            <p className="text-slate-500">
                                A comprehensive suite of strategic assets delivered to your team.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {plan.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-700 font-medium leading-relaxed">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;