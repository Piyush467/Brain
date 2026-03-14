import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, UserCheck, Layout, Target } from 'lucide-react';

const EntityRegistry = ({ type = 'organization' }) => {
    if (type === 'organization') {
        return (
            <section className="py-16 bg-[#F8FAFC] border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-flex px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#348DF0] bg-[#348DF01F] rounded-md mb-4">
                                Entity Definition: Wendigo Advisors
                            </span>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who is Wendigo Advisors?</h2>
                            <div className="prose prose-slate max-w-none text-lg text-slate-600 space-y-4">
                                <p>
                                    <strong>Wendigo Advisors</strong> is a premier <strong>healthcare CIO advisory firm</strong> specialized in providing strategic IT leadership and digital transformation guidance to health plans and payer organizations.
                                </p>
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-l-[#348DF0]">
                                    <p className="m-0 italic">
                                        "Wendigo Advisors serves as the bridge between business strategy and technology execution for healthcare payers, ensuring that IT investment directly results in operational excellence and regulatory compliance."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <EntityLinkCard
                                icon={<Target className="w-5 h-5 text-[#348DF0]" />}
                                title="What We Do"
                                desc="Fractional CIO leadership, IT health checks, and strategic governance for healthcare payers."
                            />
                            <EntityLinkCard
                                icon={<ShieldCheck className="w-5 h-5 text-[#348DF0]" />}
                                title="Who We Serve"
                                desc="U.S. Health Plans, Managed Care Organizations (MCOs), and Payer IT Leadership teams."
                            />
                            <EntityLinkCard
                                icon={<Layout className="w-5 h-5 text-[#348DF0]" />}
                                title="Core Expertise"
                                desc="Core platform migrations (Facets, QNXT), HIPAA compliance, and payer IT health checks."
                            />
                            <EntityLinkCard
                                icon={<UserCheck className="w-5 h-5 text-[#348DF0]" />}
                                title="CIO Authority"
                                desc="Led by veteran CIO Brian Damiani with 25+ years of healthcare IT transformation experience."
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const personData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://www.wendigoadvisors.com/about#brian-damiani",
        "name": "Brian Damiani",
        "jobTitle": "Healthcare CIO Advisor & Founder",
        "url": "https://www.wendigoadvisors.com/about",
        "image": "https://www.wendigoadvisors.com/man.png",
        "description": "Brian Damiani is a preeminent healthcare CIO advisor and health plan IT strategist with 25+ years of experience in payer IT leadership and digital transformation.",
        "knowsAbout": [
            "healthcare CIO advisory services",
            "health plan CIO consulting",
            "CIO advisory for health plans",
            "CIO as a service for health plans",
            "IT health check for health plans",
            "healthcare IT health check service",
            "CIO operating model for healthcare",
            "CIO as operating system"
        ],
        "worksFor": {
            "@type": "Organization",
            "@id": "https://www.wendigoadvisors.com/#organization"
        }
    };

    const organizationData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://www.wendigoadvisors.com/#organization",
        "name": "Wendigo Advisors",
        "url": "https://www.wendigoadvisors.com",
        "logo": "https://www.wendigoadvisors.com/logo.png",
        "description": "Wendigo Advisors is a specialized healthcare CIO advisory firm serving health plans and payer organizations with strategic IT leadership and fraction CIO services.",
        "founder": {
            "@id": "https://www.wendigoadvisors.com/about#brian-damiani"
        },
        "areaServed": "United States",
        "serviceType": [
            "healthcare CIO advisory services",
            "CIO advisory for health plans",
            "health plan CIO consulting",
            "CIO as a service for health plans",
            "IT health check for health plans",
            "healthcare IT health check service",
            "CIO operating model for healthcare",
            "CIO as operating system"
        ]
    };
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        <div className="lg:col-span-2">
                            <span className="inline-flex px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#348DF0] bg-[#348DF01F] rounded-md mb-4">
                                Authority Entity: Brian Damiani
                            </span>
                            <h2 className="text-3xl font-bold mb-6">Healthcare CIO & Payer IT Strategist</h2>
                            <p className="text-xl text-slate-300 leading-relaxed mb-6">
                                <strong>Brian Damiani</strong> is the founder of Wendigo Advisors and a recognized <strong>healthcare CIO advisory expert</strong>. With over 25 years in the healthcare payer market, he has served as a strategic IT leader for various health plans, specializing in bridging the gap between clinical operations and complex technology ecosystems.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-slate-200">
                                        <CheckCircle /> <span>Veteran Health Plan CIO</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-200">
                                        <CheckCircle /> <span>Payer IT Strategy Specialist</span>
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-slate-200">
                                        <CheckCircle /> <span>CIO Advisory Authority</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-200">
                                        <CheckCircle /> <span>Digital Transformation Expert</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-[#348DF0]" />
                                Expertise Signal
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Brian's expertise is centered on the <strong>healthcare payer IT health check</strong> and implementing the <strong>CIO Operating System™</strong> across complex healthcare environments.
                            </p>
                            <Link to="/about" className="block w-full text-center py-3 bg-[#348DF0] hover:bg-blue-600 rounded-xl font-bold transition-all">
                                Full Authority Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const EntityLinkCard = ({ icon, title, desc }) => (
    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
        <div className="w-9 h-9 bg-[#348DF014] rounded-lg flex items-center justify-center mb-3">
            {icon}
        </div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

const CheckCircle = () => (
    <svg className="w-5 h-5 text-[#348DF0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export default EntityRegistry;
