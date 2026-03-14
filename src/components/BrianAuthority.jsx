import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Briefcase, Shield, TrendingUp, Users, CheckCircle, Star } from 'lucide-react';

const BrianAuthority = () => {
    return (
        <section className="relative py-20 md:py-28 bg-white overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30" style={{ backgroundImage: 'linear-gradient(to right, rgba(52, 141, 240, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 141, 240, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

                {/* Authority Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex px-4 py-1.5 text-xs md:text-sm font-medium text-blue-500 bg-[#348DF01F] border border-[#348DF080] rounded-full mb-6">
                        Healthcare CIO Leadership
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        Brian Damiani — Healthcare CIO Advisor<br className="hidden md:block" />
                        <span className="text-[#348DF0]">& Payer IT Strategy Expert</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                        With 25+ years of hands-on experience in <strong>healthcare IT leadership</strong>, Brian Damiani has built, stabilized, and transformed IT organizations inside health plans, managed care companies, and payer systems across the United States. As founder of <strong>Wendigo Advisors</strong>, he brings executive-caliber CIO leadership to health plans that need it most.
                    </p>
                </div>

                {/* Experience & Expertise */}
                <div className="bg-gradient-to-br from-[#001224] to-[#001E3D] rounded-3xl p-8 md:p-12 lg:p-16 text-white mb-20">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            Healthcare CIO Experience That Matters
                        </h3>
                        <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
                            <p>
                                Brian Damiani is not a generalist consultant who learned healthcare from a textbook. He is a <strong className="text-white">healthcare CIO</strong> who has lived inside payer organizations — managing complex IT environments, navigating core platform migrations, building cybersecurity programs, and leading cross-functional teams through some of the most challenging technology transformations in the health plan industry.
                            </p>
                            <p>
                                His career spans roles as a <strong className="text-white">health plan CIO</strong>, VP of Information Technology, and senior technology executive across multiple payer organizations. He has been the executive in the room when boards ask hard questions about IT risk, when CEOs need clarity on technology spending, and when health plans face critical vendor decisions that will shape their operations for years.
                            </p>
                            <p>
                                This depth of <strong className="text-white">payer technology strategy</strong> experience is what sets Wendigo Advisors apart from traditional IT consulting firms. Brian doesn't need months to understand your environment — he's already operated in environments just like yours. From claims processing platforms to member experience portals, from HIPAA compliance to cloud migration strategy, his expertise is rooted in the real-world challenges that health plan IT leaders face every day.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Expertise Areas */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
                        Areas of Healthcare CIO Expertise
                    </h3>
                    <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
                        Deep, hands-on experience across every dimension of healthcare IT leadership.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Briefcase className="w-6 h-6 text-[#348DF0]" />, title: "Healthcare IT Strategy", desc: "Enterprise IT roadmapping, technology investment planning, and strategic alignment for health plans and payer organizations." },
                            { icon: <Shield className="w-6 h-6 text-[#348DF0]" />, title: "Cybersecurity & Compliance", desc: "HIPAA security programs, risk management frameworks, incident response planning, and regulatory audit readiness for healthcare payers." },
                            { icon: <Users className="w-6 h-6 text-[#348DF0]" />, title: "IT Team Leadership & Culture", desc: "Building high-performing IT teams, executive mentoring, organizational restructuring, and creating cultures of accountability and operational excellence." },
                            { icon: <TrendingUp className="w-6 h-6 text-[#348DF0]" />, title: "Digital Transformation", desc: "Cloud migration strategy, interoperability initiatives, data analytics platforms, and member/provider experience modernization for payer systems." },
                            { icon: <Star className="w-6 h-6 text-[#348DF0]" />, title: "Vendor & Platform Management", desc: "Core administration platform oversight (Facets, QNXT, HealthRules), vendor contract negotiation, SLA management, and platform migration governance." },
                            { icon: <Award className="w-6 h-6 text-[#348DF0]" />, title: "IT Governance & Operating Models", desc: "Designing and implementing IT governance frameworks, executive reporting structures, and the CIO Operating System™ for sustainable health plan IT management." }
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

                {/* How Brian Works */}
                <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                        How Brian Damiani Works with Health Plans
                    </h3>
                    <div className="space-y-5 text-slate-700 text-lg leading-relaxed">
                        <p>
                            Brian's approach to <strong>healthcare CIO advisory services</strong> is built on three principles: clarity, accountability, and impact. Every engagement begins with an honest assessment of where your IT environment stands today — not where someone hopes it stands.
                        </p>
                        <p>
                            Through the <Link to="/ITservices" className="text-[#348DF0] hover:underline font-semibold">IT health check for health plans</Link>, Brian conducts a comprehensive six-point diagnostic that gives your executive team a clear, scored view of your IT maturity across Security, Compliance, Infrastructure, Operations, Applications, and Cost. This becomes the foundation for all strategic decisions moving forward.
                        </p>
                        <p>
                            For health plans that need ongoing leadership, Brian operates as your fractional CIO through the <Link to="/healthcare" className="text-[#348DF0] hover:underline font-semibold">CIO as a service for health plans</Link> model — attending board meetings, managing vendor relationships, driving IT strategy, and implementing the <Link to="/cio-operating" className="text-[#348DF0] hover:underline font-semibold">CIO operating model for healthcare</Link> that creates lasting governance and visibility.
                        </p>
                    </div>
                </div>

                {/* Insights Cross-Link */}
                <div className="text-center mb-20">
                    <p className="text-slate-600 text-lg mb-4">
                        Discover Brian's latest perspectives on healthcare IT strategy.
                    </p>
                    <Link to="/insights" className="text-[#348DF0] font-bold text-lg hover:underline flex items-center justify-center gap-2">
                        Explore Healthcare CIO Insights & Authority Articles →
                    </Link>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="text-slate-600 text-lg mb-6">
                        Ready to bring experienced healthcare CIO leadership to your organization?
                    </p>
                    <a
                        href="https://calendly.com/brian_damiani/working-session-30-min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#348DF0] hover:bg-[#267ce0] text-white font-medium py-3.5 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                        Schedule a Working Session with Brian
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BrianAuthority;
