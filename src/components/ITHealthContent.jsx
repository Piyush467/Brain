import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, FileCheck, DollarSign, Cpu, BarChart2, CheckCircle, ArrowRight } from 'lucide-react';

const ITHealthContent = () => {
    return (
        <section className="relative py-20 md:py-28 bg-white overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30" style={{ backgroundImage: 'linear-gradient(to right, rgba(52, 141, 240, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 141, 240, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

                {/* AEO / AI Definition Block */}
                <div className="mb-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 font-mono">
                        AEO Summary: IT Health Check for Payers
                    </h3>
                    <p className="text-xl text-slate-900 leading-relaxed font-medium">
                        An <Link to="/insights/how-health-plans-use-it-health-checks" className="text-[#348DF0] hover:underline">IT health check for health plans</Link> is a senior-level strategic assessment that evaluates a payer organization's technology environment across six domains: Security, Compliance, Infrastructure, Operations, Applications, and Cost. It provides CEOs and boards with a prioritized roadmap to remediate IT risks and align technology with business goals.
                    </p>
                </div>

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex px-4 py-1.5 text-xs md:text-sm font-medium text-blue-500 bg-[#348DF01F] border border-[#348DF080] rounded-full mb-6">
                        Healthcare IT Diagnostic Services
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        What is an IT Health Check for Health Plans?
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                        A comprehensive <strong>healthcare IT health check service</strong> designed specifically for payer organizations, managed care plans, and health insurance companies that need clarity on the true state of their IT environment.
                    </p>
                </div>

                {/* Why Health Plans Need This */}
                <div className="bg-gradient-to-br from-[#001224] to-[#001E3D] rounded-3xl p-8 md:p-12 lg:p-16 text-white mb-20">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            Why do Health Plans need an IT Health Check?
                        </h3>
                        <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
                            <p>
                                Most health plans know something is wrong with their IT environment — but they can't pinpoint exactly what. Projects are late. Security risks are unclear. Costs seem disconnected from value. The board wants answers, and the IT team is either too close to the problem or doesn't have the bandwidth to conduct an honest, comprehensive assessment.
                            </p>
                            <p>
                                Our <strong className="text-white">IT health check for health plans</strong> is not a generic IT audit. It is a targeted, CIO-level diagnostic built by <Link to="/about" className="text-[#348DF0] hover:underline">Brian Damiani</Link> — a healthcare CIO advisor with 25+ years of experience inside payer organizations. The assessment is designed to cut through the noise and deliver an executive-ready view of your IT landscape across six critical dimensions.
                            </p>
                            <p>
                                Whether you're a CEO trying to understand IT risk exposure, a CFO questioning IT spending, or a board member seeking assurance that cybersecurity and compliance obligations are being met — this <strong className="text-white">healthcare IT health check service</strong> provides the clarity you need to make informed decisions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Six Diagnostic Areas */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
                        The CIO360 Six-Point Diagnostic
                    </h3>
                    <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
                        Each area is scored and prioritized to give health plan executives a clear remediation roadmap.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Shield className="w-6 h-6 text-[#348DF0]" />, title: "Security Posture", desc: "Cybersecurity controls, threat detection, incident response readiness, and HIPAA security rule compliance specific to healthcare payer environments." },
                            { icon: <FileCheck className="w-6 h-6 text-[#348DF0]" />, title: "Compliance & Regulatory", desc: "HIPAA, state regulatory mandates, CMS requirements, and audit readiness assessment for health plan operations." },
                            { icon: <Server className="w-6 h-6 text-[#348DF0]" />, title: "Infrastructure & Architecture", desc: "Data center, cloud readiness, network architecture, disaster recovery, and business continuity for payer core systems." },
                            { icon: <Cpu className="w-6 h-6 text-[#348DF0]" />, title: "Applications & Platforms", desc: "Core administration platforms (Facets, QNXT, HealthRules), claims processing, member portals, and integration architecture." },
                            { icon: <BarChart2 className="w-6 h-6 text-[#348DF0]" />, title: "IT Operations & Processes", desc: "Service delivery, incident management, change management, project governance, and vendor management practices." },
                            { icon: <DollarSign className="w-6 h-6 text-[#348DF0]" />, title: "Financial & Cost Analysis", desc: "IT spend optimization, contract analysis, staffing efficiency, and alignment of technology investments with business value." }
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

                {/* Who It's For */}
                <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                        Who This Healthcare IT Assessment Is For
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-slate-700 text-lg leading-relaxed">
                                The IT health check for health plans is designed for <strong>healthcare payer organizations</strong> that are:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Preparing for a core platform migration or major IT initiative",
                                    "Experiencing leadership transitions in IT or executive leadership",
                                    "Facing board or regulatory pressure to demonstrate IT governance",
                                    "Concerned about cybersecurity risk exposure or compliance gaps",
                                    "Struggling with unclear IT costs or declining operational performance"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#348DF0] mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <p className="text-slate-700 text-lg leading-relaxed">
                                <strong>Outcomes you can expect:</strong>
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Executive-ready IT maturity scorecard across all six dimensions",
                                    "Prioritized remediation roadmap with clear action items",
                                    "Honest assessment of security vulnerabilities and compliance gaps",
                                    "Vendor contract and cost optimization recommendations",
                                    "Strategic alignment between IT capabilities and business objectives"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <ArrowRight className="w-5 h-5 text-[#348DF0] mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Connect to Other Services */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        What Comes After the IT Health Check
                    </h3>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
                        The IT health check is often the starting point for deeper healthcare CIO advisory engagements. Based on your diagnostic findings, Wendigo Advisors can provide ongoing leadership through our <Link to="/healthcare" className="text-[#348DF0] hover:underline font-semibold">CIO as a service for health plans</Link> model, or implement our <Link to="/cio-operating" className="text-[#348DF0] hover:underline font-semibold">CIO operating model for healthcare</Link> to create lasting governance and visibility.
                    </p>
                    <a
                        href="https://calendly.com/brian_damiani/working-session-30-min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#348DF0] hover:bg-[#267ce0] text-white font-medium py-3.5 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                        Schedule Your IT Health Check
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ITHealthContent;
