import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, BarChart2, Users, TrendingUp, CheckCircle } from 'lucide-react';

const HomeContent = () => {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30" style={{ backgroundImage: 'linear-gradient(to right, rgba(52, 141, 240, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 141, 240, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-1.5 text-xs md:text-sm font-medium text-blue-500 bg-[#348DF01F] border border-[#348DF080] rounded-full mb-6">
            When Healthcare Leaders turn to Wendigo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            CIO Advisory Services for<br className="hidden md:block" />
            <span className="text-[#348DF0]">Healthcare Organizations</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Wendigo Advisors is a specialized <strong>healthcare CIO advisory firm</strong> that delivers executive-level IT leadership exclusively to health plans, managed care organizations, and payer systems across the United States. Our founder, <Link to="/about" className="text-[#348DF0] hover:underline font-semibold">Brian Damiani</Link>, brings 25+ years of hands-on healthcare IT strategy experience to every engagement.
          </p>
        </div>

        {/* Three Pillars */}
        {/* Three Pillars */}
<div className="grid md:grid-cols-3 gap-8 mb-20">

  <ServicePillar
    icon={<Activity className="w-7 h-7 text-[#348DF0]" />}
    title="Strategic CIO Advisor"
    description="Strategic CIO Advisor services help healthcare leaders make confident technology decisions by providing experienced, independent CIO-level guidance on strategy, risk, and major initiatives."
    link="/pricing"
    linkText="Learn More →"
  />

  <ServicePillar
    icon={<Users className="w-7 h-7 text-[#348DF0]" />}
    title="Fractional CIO Leadership"
    description="Fractional CIO Leadership provides ongoing CIO-level leadership to help healthcare organizations guide technology strategy, oversee key initiatives, and strengthen IT governance."
    link="/pricing"
    linkText="Learn More →"
  />

  <ServicePillar
    icon={<BarChart2 className="w-7 h-7 text-[#348DF0]" />}
    title="Interim CIO Leadership"
    description="Interim CIO Leadership provides experienced executive technology guidance during CIO transitions to stabilize operations, guide critical decisions, and maintain momentum across the IT organization."
    link="/pricing"
    linkText="Learn More →"
  />

</div>

        

        {/* Outcomes Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Stronger Technology Leadership means Lower Operational Risk
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Our healthcare CIO advisory services deliver measurable results for health plans and payer systems.
          </p>
        </div>

        {/* Outcomes Grid — Categorized */}
<div className="grid md:grid-cols-3 gap-8 mb-16">

  {/* Leadership & Strategy */}
  <div className="bg-[#F8FAFC] rounded-2xl border border-slate-100 p-7">
    <h4 className="text-xl font-bold text-slate-900 mb-4">
      Leadership & Strategy
    </h4>

    <ul className="space-y-4">
      <li className="flex items-start gap-3 text-slate-700">
        <CheckCircle className="w-5 h-5 text-[#348DF0] mt-1 flex-shrink-0" />
        Technology roadmaps aligned with organizational strategy and objective
      </li>

      <li className="flex items-start gap-3 text-slate-700">
        <CheckCircle className="w-5 h-5 text-[#348DF0] mt-1 flex-shrink-0" />
        Leadership for digital transformation and modernization initiatives
      </li>

      <li className="flex items-start gap-3 text-slate-700">
        <CheckCircle className="w-5 h-5 text-[#348DF0] mt-1 flex-shrink-0" />
        A culture of accountability and ownership across the IT organization
      </li>
    </ul>
  </div>

  {/* Risk & Governance */}
  <div className="bg-[#F8FAFC] rounded-2xl border border-slate-100 p-7">
    <h4 className="text-xl font-bold text-slate-900 mb-4">
      Risk & Governance
    </h4>

    <ul className="space-y-4">
      <li className="flex items-start gap-3 text-slate-700">
        <CheckCircle className="w-5 h-5 text-[#348DF0] mt-1 flex-shrink-0" />
        Stronger cybersecurity and regulatory compliance posture
      </li>

      <li className="flex items-start gap-3 text-slate-700">
        <CheckCircle className="w-5 h-5 text-[#348DF0] mt-1 flex-shrink-0" />
        Improved vendor accountability and contract optimization
      </li>

      <li className="flex items-start gap-3 text-slate-700">
        <CheckCircle className="w-5 h-5 text-[#348DF0] mt-1 flex-shrink-0" />
        Stronger IT governance and executive decision frameworks
      </li>
    </ul>
  </div>

  {/* Operational Strength */}
  <div className="bg-[#F8FAFC] rounded-2xl border border-slate-100 p-7">
    <h4 className="text-xl font-bold text-slate-900 mb-4">
      Operational Strength
    </h4>

    <ul className="space-y-4">
      <li className="flex items-start gap-3 text-slate-700">
        <CheckCircle className="w-5 h-5 text-[#348DF0] mt-1 flex-shrink-0" />
        Stabilized IT operations and reduced technical debt
      </li>

      <li className="flex items-start gap-3 text-slate-700">
        <CheckCircle className="w-5 h-5 text-[#348DF0] mt-1 flex-shrink-0" />
        Clear executive visibility into IT risks, costs, and capability gaps
      </li>

      <li className="flex items-start gap-3 text-slate-700">
        <CheckCircle className="w-5 h-5 text-[#348DF0] mt-1 flex-shrink-0" />
        Improved collaboration between business and IT leadership
      </li>
    </ul>
  </div>

</div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-slate-600 text-lg mb-6">
            Ready to bring clarity and accountability to your technology environment?
          </p>
          <a
            href="https://t.ly/7Jjhw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#348DF0] hover:bg-[#267ce0] text-white font-medium py-3.5 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Get Strategic Insight
          </a>
        </div>
      </div>
    </section>
  );
};

const ServicePillar = ({ icon, title, description, link, linkText }) => (
  <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
    <div className="w-12 h-12 bg-[#348DF01F] rounded-xl flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-5 flex-grow">{description}</p>
    <Link to={link} className="text-[#348DF0] font-semibold hover:underline text-sm">
      {linkText}
    </Link>
  </div>
);

export default HomeContent;
