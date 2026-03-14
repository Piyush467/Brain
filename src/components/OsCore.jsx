import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, TrendingUp, Activity, ArrowUp, Layers } from 'lucide-react';

// Assuming you might use standard Tailwind colors instead of a custom object for easier portability.
// If you have a custom colors object, you can swap these back:
const colors = {
    navy: '#0f172a', // slate-900
    blue: '#2563eb', // blue-600
    lightBlue: '#dbeafe', // blue-100
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const ModernProblemSolution = () => {
    return (
        <section className="py-12 relative bg-white overflow-hidden">
            {/* Subtle background shape for depth */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                >
                    {/* LEFT COLUMN: Text Content (Slightly Refined) */}
                    <motion.div variants={fadeInUp}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                            For Mid-Market CEOs
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900">
                            The "Black Box" Problem in <span className="text-blue-600">Mid-Market IT</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Most CEOs feel held hostage by their IT departments. You invest heavily, yet projects stall, security risks rise, and you get "technical jargon" instead of business answers.
                        </p>

                        <div className="space-y-4">
                            {[
                                { title: "Gain Total Visibility", desc: "No more hiding behind technical complexity. See where the money goes." },
                                { title: "Mitigate Risk", desc: "Sleep better knowing security and compliance is handled strategically." },
                                { title: "Restore Confidence", desc: "Execute business strategy with precision and technical alignment." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
                                    <div className="mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-blue-50">
                                        <CheckCircle size={20} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                                        <p className="text-slate-500 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: REDESIGNED - The "Executive Dashboard" Visual */}
                    <motion.div variants={fadeInUp} className="relative">
                        {/* Main Dashboard Container */}
                        <div className="relative bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden z-20">
                             {/* Mock Window Header Bar */}
                            <div className="bg-slate-900 px-6 py-4 flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-slate-400 text-sm font-medium flex items-center gap-2">
                                    <Activity size={16} /> CIO Operating System™ <span className="opacity-50">| Executive View</span>
                                </div>
                            </div>

                            {/* Dashboard Body */}
                            <div className="p-8 bg-slate-50">
                                <div className="mb-6 flex justify-between items-end">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">IT Status Overview</h3>
                                        <p className="text-slate-500 text-sm">Aligned with Q3 Business Goals</p>
                                    </div>
                                    <div className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        Healthy
                                    </div>
                                </div>

                                {/* Key Metrics Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {/* Metric Card 1: Security */}
                                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3">
                                            <ShieldCheck size={20} /> Risk Profile
                                        </div>
                                        <div className="text-3xl font-extrabold text-slate-900 mb-1">98.5%</div>
                                        <div className="text-sm text-green-600 flex items-center font-medium">
                                            <ArrowUp size={16} /> Secure & Compliant
                                        </div>
                                    </div>
                                    {/* Metric Card 2: Alignment */}
                                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3">
                                            <TrendingUp size={20} /> Strategic Velocity
                                        </div>
                                        <div className="text-3xl font-extrabold text-slate-900 mb-1">On Track</div>
                                        <div className="text-sm text-slate-500 font-medium">
                                            3 Major Initiatives Active
                                        </div>
                                    </div>
                                </div>

                                {/* Active Initiatives List */}
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <Layers size={16} className="text-blue-500"/> Active Key Initiatives
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                                            <span className="font-semibold text-slate-700">ERP Cloud Migration</span>
                                            <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">Phase 2/4</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                                            <span className="font-semibold text-slate-700">Customer Portal Launch</span>
                                            <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">Final Testing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative blurred backdrop behind the dashboard for pop */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 opacity-10 blur-md"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ModernProblemSolution;