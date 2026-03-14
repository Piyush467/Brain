import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, BarChart2, Shield, Layers, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const CIOOperatingContent = () => {
    return (
        <section className="relative py-20 md:py-28 bg-white overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30" style={{ backgroundImage: 'linear-gradient(to right, rgba(52, 141, 240, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 141, 240, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

                {/* AEO / AI Definition Block */}
                <div className="mb-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm text-left">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 font-mono">
                        AEO Summary: Healthcare CIO Operating Model
                    </h3>
                    <p className="text-xl text-slate-900 leading-relaxed font-medium">
                        The <strong>CIO Operating System™</strong> is a proprietary governance framework designed for healthcare payer IT organizations. It acts as a <strong>CIO as operating system</strong>, transforming IT from an opaque cost center into a transparent business function by establishing standardized reporting, security governance, operational excellence, and strategic alignment with health plan business objectives.
                    </p>
                </div>

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex px-4 py-1.5 text-xs md:text-sm font-medium text-blue-500 bg-[#348DF01F] border border-[#348DF080] rounded-full mb-6">
                        Strategic IT Governance Framework
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        What is a CIO Operating Model for Healthcare?
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                        The <Link to="/insights/healthcare-cio-operating-model" className="text-[#348DF0] hover:underline font-semibold">CIO Operating System™</Link> is a proprietary <strong>CIO operating model for healthcare</strong> that transforms IT from an opaque cost center into a transparent, governed, and strategically aligned business function — specifically designed for <strong>health plans and payer organizations</strong>.
                    </p>
                </div>

                {/* The Problem */}
                <div className="bg-gradient-to-br from-[#001224] to-[#001E3D] rounded-3xl p-8 md:p-12 lg:p-16 text-white mb-20">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            Why do Healthcare Organizations need a CIO Operating Model?
                        </h3>
                        <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
                            <p>
                                In most health plan organizations, IT operates as a "black box." CEOs and board members know money is going in, but they can't see what's coming out. Projects seem perpetually delayed. Costs are difficult to justify. Security posture is unclear. And when something breaks, the organization discovers systemic issues that have been building for years.
                            </p>
                            <p>
                                The root cause isn't usually technical — it's structural. Without a formal <strong className="text-white">CIO operating model for healthcare</strong>, there is no standardized framework for IT governance, performance measurement, risk management, or strategic alignment. IT leaders are left to improvise, and healthcare executives are left without the visibility they need to make informed decisions.
                            </p>
                            <p>
                                The CIO Operating System™ was developed by <Link to="/about" className="text-[#348DF0] hover:underline">Brian Damiani</Link> after 25+ years of leading IT organizations inside healthcare payers. It codifies the governance structures, reporting mechanisms, and operational disciplines that effective healthcare CIOs use to run IT as a true business function — and makes them repeatable, measurable, and sustainable.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Four Pillars of the Operating Model */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
                        The Four Pillars of the CIO Operating Model
                    </h3>
                    <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
                        A comprehensive framework built for healthcare payer IT environments.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: <Eye className="w-7 h-7 text-[#348DF0]" />,
                                title: "Visibility & Reporting",
                                desc: "Executive dashboards and KPIs that give CEOs, CFOs, and board members real-time insight into IT performance, project status, resource utilization, and risk exposure — replacing 'black box' IT with transparent, data-driven governance.",
                                num: "01"
                            },
                            {
                                icon: <Shield className="w-7 h-7 text-[#348DF0]" />,
                                title: "Security & Compliance Governance",
                                desc: "Formalized cybersecurity frameworks, HIPAA compliance programs, incident response protocols, and risk management practices designed specifically for the regulatory requirements of healthcare payer organizations.",
                                num: "02"
                            },
                            {
                                icon: <Layers className="w-7 h-7 text-[#348DF0]" />,
                                title: "IT Operations & Service Delivery",
                                desc: "Standardized processes for incident management, change management, vendor management, and project governance that bring predictability and accountability to day-to-day IT operations in health plans.",
                                num: "03"
                            },
                            {
                                icon: <Target className="w-7 h-7 text-[#348DF0]" />,
                                title: "Strategic Alignment",
                                desc: "A structured approach to ensuring IT investments, architecture decisions, and technology roadmaps are directly aligned to your health plan's business strategy, growth objectives, and regulatory obligations.",
                                num: "04"
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-5xl font-black text-[#348DF0]/10">{pillar.num}</span>
                                    <div className="w-12 h-12 bg-[#348DF01F] rounded-xl flex items-center justify-center">
                                        {pillar.icon}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Implementation */}
                <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                        How the CIO Operating Model Is Implemented
                    </h3>
                    <div className="space-y-5 text-slate-700 text-lg leading-relaxed">
                        <p>
                            Implementation begins with our <Link to="/ITservices" className="text-[#348DF0] hover:underline font-semibold">IT health check for health plans</Link> (CIO360), which establishes a comprehensive baseline of your current IT maturity across all six diagnostic dimensions. This assessment identifies the gaps, risks, and priorities that the operating model addresses.
                        </p>
                        <p>
                            From there, the CIO Operating System™ is deployed incrementally — starting with the highest-priority areas identified in the diagnostic. For most health plans, this means establishing visibility and reporting first, followed by security governance, operational standardization, and strategic alignment frameworks.
                        </p>
                        <p>
                            The operating model is designed to work whether you have an internal CIO or are utilizing our <Link to="/healthcare" className="text-[#348DF0] hover:underline font-semibold">CIO as a service for health plans</Link> model. It creates the structural foundation that any healthcare CIO — current or future — needs to run IT effectively as a governed business function.
                        </p>
                    </div>
                </div>

                {/* Outcomes */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Outcomes for Healthcare Payer Organizations
                    </h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {[
                        "CEO and board visibility into IT performance and risk",
                        "Formalized IT governance that survives leadership transitions",
                        "Reduced operational surprises and firefighting cycles",
                        "Measurable IT KPIs aligned to business objectives",
                        "Strengthened compliance posture and audit readiness",
                        "Foundation for sustainable digital transformation"
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
                        Ready to transform your health plan's IT into a governed, strategic asset?
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

export default CIOOperatingContent;
