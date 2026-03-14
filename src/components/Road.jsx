import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const RoadmapSection = () => {
    const colors = {
        navy: '#0f172a', 
        blue: '#3b82f6',
    };

    const phases = [
        {
            id: "01",
            title: "Stabilize",
            icon: Activity,
            objective: "Gain control over existing IT assets by mapping systems, identifying gaps, and halting inefficiencies.",
            advisorActions: [
                "Conduct an IT Health Check",
                "Review tools, systems, infrastructure",
                "Interview key staff"
            ],
            clientActions: [
                "Provide access and documentation",
                "Coordinate internal interviews"
            ],
            deliverables: [
                "Executive IT Summary",
                "Risk & Performance Scorecard",
                "Priority Issues List"
            ]
        },
        {
            id: "02",
            title: "Strengthen",
            icon: Shield,
            objective: "Enhance security and compliance by addressing vulnerabilities and creating resilient operations.",
            advisorActions: [
                "Develop a 90-day action plan",
                "Support compliance efforts",
                "Improve IT governance"
            ],
            clientActions: [
                "Implement critical fixes",
                "Assign compliance owners"
            ],
            deliverables: [
                "90-Day Action Plan",
                "Updated IT & Security Policies",
                "Compliance Dashboard"
            ]
        },
        {
            id: "03",
            title: "Scale",
            icon: TrendingUp,
            objective: "Align IT with business strategy by developing a roadmap that supports organizational requirements.",
            advisorActions: [
                "Facilitate alignment sessions",
                "Identify capability gaps",
                "Build a 1-year roadmap"
            ],
            clientActions: [
                "Share business priorities",
                "Approve the roadmap",
                "Assign ownership"
            ],
            deliverables: [
                "1-Year Strategic IT Roadmap",
                "Capability Gap Plan",
                "Executive Briefing Deck"
            ]
        }
    ];

    return (
        <section className="py-24 relative text-white overflow-hidden font-sans" style={{ backgroundColor: colors.navy }}>
            
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-bold uppercase tracking-wider mb-6">
                        Our Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Roadmap to Control</h2>
                    <p className="text-xl text-blue-200/70 max-w-2xl mx-auto leading-relaxed">
                        We don't just "fix IT." We install a proven operating system for long-term success.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid lg:grid-cols-3 gap-8 relative items-stretch">
                    
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-8 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-0"></div>

                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 group h-full flex flex-col"
                        >
                            {/* ICON */}
                            <div className="relative z-20 flex justify-center mb-[-32px]">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-xl shadow-blue-900/50 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 border-4 border-[#0f172a]">
                                    <phase.icon size={32} className="text-white" />
                                </div>
                            </div>

                            {/* MAIN CARD */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 pt-12 hover:bg-white/10 transition-all duration-300 group-hover:border-blue-500/30 h-full relative overflow-hidden flex flex-col">
                                
                                {/* Background Watermark Number */}
                                <div className="absolute top-2 right-4 text-6xl lg:text-9xl font-black text-white/[0.03] select-none pointer-events-none z-0">
                                    {phase.id}
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* TOP SECTION: Title, Objective, Lists */}
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold mb-4 text-white text-center">{phase.title}</h3>
                                        
                                        <div className="mb-8 text-center border-b border-white/10 pb-6">
                                            <p className="text-blue-100/80 text-sm leading-relaxed">
                                                {phase.objective}
                                            </p>
                                        </div>

                                        <div className="space-y-6 text-left">
                                            {/* Advisor Actions */}
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span> Advisor Actions
                                                </h4>
                                                <ul className="space-y-2">
                                                    {phase.advisorActions.map((action, i) => (
                                                        <li key={i} className="text-sm text-gray-400 pl-4 border-l-2 border-white/5 leading-snug">
                                                            {action}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Client Actions */}
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                     <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span> Client Actions
                                                </h4>
                                                <ul className="space-y-2">
                                                    {phase.clientActions.map((action, i) => (
                                                        <li key={i} className="text-sm text-gray-400 pl-4 border-l-2 border-white/5 leading-snug">
                                                            {action}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BOTTOM SECTION: Deliverables (Aligned at Bottom) */}
                                    <div className="mt-8">
                                        <div className="bg-blue-900/20 rounded-xl p-4 border border-blue-500/20 group-hover:bg-blue-900/30 transition-colors h-full">
                                            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Deliverables</h4>
                                            <ul className="space-y-2">
                                                {phase.deliverables.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-blue-100/90">
                                                        <CheckCircle size={14} className="text-blue-400 shrink-0 mt-0.5" /> 
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;