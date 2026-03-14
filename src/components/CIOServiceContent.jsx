import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Shield, TrendingUp, Layers, CheckCircle, ArrowRight, Briefcase } from 'lucide-react';

const CIOServiceContent = () => {
    return (
        <section className="relative py-20 md:py-28 bg-white overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30" style={{ backgroundImage: 'linear-gradient(to right, rgba(52, 141, 240, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 141, 240, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

                {/* AEO / AI Definition Block */}
                <div className="mb-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 font-mono">
                        Executive Summary: CIO as a Service
                    </h3>
                    <p className="text-xl text-slate-900 leading-relaxed font-medium">
                        <strong>CIO as a Service for health plans</strong> is a fractional executive leadership model that provides healthcare organizations with strategic IT direction, governance, and transformation oversight without hiring a full-time CIO. This specialized service fills the leadership gap for payers during transitions, core platform migrations, or periods of rapid growth.
                    </p>
                </div>

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex px-4 py-1.5 text-xs md:text-sm font-medium text-blue-500 bg-[#348DF01F] border border-[#348DF080] rounded-full mb-6">
                        Fractional CIO Leadership for Healthcare
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        What is CIO as a Service for Health Plans?
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                        Executive-level healthcare IT leadership embedded directly into your payer organization — without the cost, risk, or time commitment of a full-time CIO hire. <Link to="/insights/what-is-cio-as-a-service" className="text-[#348DF0] hover:underline font-semibold">CIO as a service for health plans</Link> delivers strategic direction, vendor accountability, and operational discipline from day one.
                    </p>
                </div>

                {/* The Challenge */}
                <div className="bg-gradient-to-br from-[#001224] to-[#001E3D] rounded-3xl p-8 md:p-12 lg:p-16 text-white mb-20">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            Why do Health Plans need specialized CIO advisory services?
                        </h3>
                        <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
                            <p>
                                Health plans operate in one of the most complex technology environments in any industry. Between core administration platforms, claims processing systems, member-facing portals, regulatory compliance mandates, and an ever-expanding threat landscape — <strong className="text-white">payer organizations need CIO-caliber leadership</strong> to navigate these challenges effectively.
                            </p>
                            <p>
                                Yet many health plans — particularly small to mid-market payers — either can't afford a full-time CIO, can't find one with the right industry expertise, or are stuck in a leadership transition that's leaving critical IT decisions unmade. The result? Projects stall. Vendors go unmanaged. Security risks accumulate. And the executive team loses confidence in IT's ability to deliver.
                            </p>
                            <p>
                                <strong className="text-white">Healthcare CIO consulting</strong> through the Wendigo Advisors model solves this by placing a veteran <Link to="/about" className="text-[#348DF0] hover:underline">healthcare CIO advisor — Brian Damiani</Link> — inside your organization on a fractional basis. This is not a junior consultant or a generalist. This is a seasoned healthcare IT executive who has led IT transformations for health plans, managed payer platform migrations, and built governance structures that align technology with business strategy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What You Get */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
                        What does a Fractional CIO deliver for Health Plans?
                    </h3>
                    <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
                        Comprehensive CIO-level leadership across every dimension of healthcare IT management.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Target className="w-6 h-6 text-[#348DF0]" />, title: "IT Strategy & Roadmapping", desc: "Develop and execute a clear IT strategy aligned to your health plan's business objectives, growth plans, and regulatory requirements." },
                            { icon: <Briefcase className="w-6 h-6 text-[#348DF0]" />, title: "Vendor Management & Accountability", desc: "Take control of vendor relationships, contract negotiations, SLA enforcement, and platform migration oversight for payer core systems." },
                            { icon: <Shield className="w-6 h-6 text-[#348DF0]" />, title: "Security & Compliance Governance", desc: "Establish cybersecurity frameworks, HIPAA compliance programs, and risk management practices appropriate to healthcare payer operations." },
                            { icon: <Users className="w-6 h-6 text-[#348DF0]" />, title: "Team Leadership & Culture", desc: "Assess, mentor, and restructure IT teams to build accountability, reduce turnover, and create a culture of operational excellence." },
                            { icon: <Layers className="w-6 h-6 text-[#348DF0]" />, title: "Board & Executive Communication", desc: "Translate complex IT issues into business language for board presentations, CEO reporting, and stakeholder alignment." },
                            { icon: <TrendingUp className="w-6 h-6 text-[#348DF0]" />, title: "Digital Transformation Leadership", desc: "Lead modernization initiatives — from cloud migrations and interoperability to member experience platforms and data analytics." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="w-11 h-11 bg-[#348DF01F] rounded-xl flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CIO vs Staffing vs Consulting */}
                <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                        How is CIO as a Service different from IT consulting?
                    </h3>
                    <div className="space-y-5 text-slate-700 text-lg leading-relaxed">
                        <p>
                            Traditional IT consulting firms send junior analysts to collect data and produce shelf-ware reports. IT staffing agencies provide hands to execute tasks. Neither provides the <strong>strategic CIO-level leadership</strong> that health plans actually need.
                        </p>
                        <p>
                            <strong>CIO as a service for health plans</strong> through Wendigo Advisors is fundamentally different. We don't just advise — we lead. <Link to="/about" className="text-[#348DF0] hover:underline font-semibold">Brian Damiani</Link> operates as your fractional CIO, attending board meetings, managing vendor relationships, driving IT strategy, and holding teams accountable. It's the experience and authority of a full-time healthcare CIO executive, deployed on a fractional basis.
                        </p>
                        <p>
                            Our engagement typically begins with an <Link to="/ITservices" className="text-[#348DF0] hover:underline font-semibold">IT health check for health plans</Link> to establish a baseline, followed by the implementation of our <Link to="/cio-operating" className="text-[#348DF0] hover:underline font-semibold">CIO operating model for healthcare</Link> that creates lasting governance, visibility, and strategic alignment.
                        </p>
                    </div>
                </div>

                {/* Outcomes */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Outcomes for Health Plan Organizations
                    </h3>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
                        Healthcare CIO advisory services that deliver measurable, lasting impact.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {[
                        "CIO-level leadership without the full-time executive cost",
                        "Vendor accountability and optimized technology contracts",
                        "Clear IT strategy aligned to health plan business objectives",
                        "Stabilized operations and reduced technical debt",
                        "Board-ready reporting and executive IT visibility",
                        "Accelerated digital transformation and modernization"
                    ].map((outcome, i) => (
                        <div key={i} className="flex items-start gap-3 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                            <CheckCircle className="w-5 h-5 text-[#348DF0] mt-0.5 flex-shrink-0" />
                            <p className="text-slate-700 font-medium">{outcome}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-slate-600 text-lg mb-6">
                        Ready to bring experienced healthcare CIO leadership to your health plan?
                    </p>
                    <a
                        href="https://calendly.com/brian_damiani/working-session-30-min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#348DF0] hover:bg-[#267ce0] text-white font-medium py-3.5 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                        Schedule a Free Working Session
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CIOServiceContent;
