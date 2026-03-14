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
            Why Health Plans Choose Wendigo Advisors
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Healthcare CIO Advisory Services<br className="hidden md:block" />
            <span className="text-[#348DF0]">Built for Payer Organizations</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Wendigo Advisors is a specialized <strong>healthcare CIO advisory firm</strong> that delivers executive-level IT leadership exclusively to health plans, managed care organizations, and payer systems across the United States. Our founder, <Link to="/about" className="text-[#348DF0] hover:underline font-semibold">Brian Damiani</Link>, brings 25+ years of hands-on healthcare IT strategy experience to every engagement.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <ServicePillar
            icon={<Activity className="w-7 h-7 text-[#348DF0]" />}
            title="IT Health Check for Health Plans"
            description="Our proprietary CIO360 diagnostic evaluates your IT environment across six critical dimensions — Security, Compliance, Infrastructure, Operations, Applications, and Cost — giving your executive team a clear, prioritized remediation roadmap."
            link="/ITservices"
            linkText="Explore IT Health Check Services →"
          />
          <ServicePillar
            icon={<Users className="w-7 h-7 text-[#348DF0]" />}
            title="CIO as a Service for Health Plans"
            description="Fractional CIO leadership designed specifically for payer organizations. We embed a veteran Healthcare CIO into your organization to own IT strategy, vendor management, platform migrations, and executive alignment — without the cost of a full-time hire."
            link="/healthcare"
            linkText="Explore CIO as a Service →"
          />
          <ServicePillar
            icon={<BarChart2 className="w-7 h-7 text-[#348DF0]" />}
            title="CIO Operating Model for Healthcare"
            description="The CIO Operating System™ transforms healthcare IT from a 'black box' into a transparent, governed business function. This strategic framework gives CEOs and boards real-time visibility into IT performance, costs, risks, and strategic alignment."
            link="/cio-operating"
            linkText="Explore CIO Operating System →"
          />
        </div>

        {/* Authority Content Block */}
        <div className="bg-gradient-to-br from-[#001224] to-[#001E3D] rounded-3xl p-8 md:p-12 lg:p-16 text-white mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why Health Plans Need Dedicated CIO Advisory Services
            </h3>
            <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
              <p>
                Health plans face a unique set of technology challenges that generic IT consulting firms simply cannot address. From core administration platform migrations (Facets, QNXT, HealthRules) to regulatory compliance mandates, cybersecurity threats, and the pressure to modernize member and provider experiences — <strong className="text-white">healthcare payer organizations need CIO-level leadership</strong> that understands the industry from the inside.
              </p>
              <p>
                As a <strong className="text-white">health plan CIO consulting</strong> firm, Wendigo Advisors specializes in the operational, strategic, and cultural dimensions of healthcare IT leadership. We don't just advise — we embed. Our <Link to="/healthcare" className="text-[#348DF0] hover:underline">CIO as a service for health plans</Link> model places a senior technology executive inside your organization to drive IT governance, reduce capability drift, and align technology investments with your business objectives.
              </p>
              <p>
                Whether you're navigating a platform migration, recovering from a failed IT initiative, or simply need an objective <Link to="/ITservices" className="text-[#348DF0] hover:underline">healthcare IT health check</Link> to understand where your IT environment truly stands, our team delivers clarity, accountability, and measurable outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Outcomes Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Outcomes for Healthcare Payer Organizations
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Our healthcare CIO advisory services deliver measurable results for health plans and payer systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            "Clear visibility into IT risks, costs, and capability gaps",
            "Executive-ready IT roadmaps aligned to business strategy",
            "Vendor accountability and contract optimization",
            "Stabilized IT operations and reduced technical debt",
            "Strengthened cybersecurity and compliance posture",
            "Digital transformation leadership for payer systems"
          ].map((outcome, i) => (
            <div key={i} className="flex items-start gap-3 p-5 bg-[#F8FAFC] rounded-xl border border-slate-100">
              <CheckCircle className="w-5 h-5 text-[#348DF0] mt-0.5 flex-shrink-0" />
              <p className="text-slate-700 font-medium">{outcome}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-slate-600 text-lg mb-6">
            Ready to bring clarity to your health plan's IT environment?
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
