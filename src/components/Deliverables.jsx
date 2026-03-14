import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

// --- SVGs & GRAPHICS ---

const MarkerUnderline = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    className={`absolute bottom-0 left-0 w-full h-[10px] -mb-1 -z-10 ${className}`}
  >
    <defs>
      <filter id="markerNoise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" />
      </filter>
    </defs>
    <rect x="0" y="2" width="200" height="6" fill="#348DF0" opacity="0.7" filter="url(#markerNoise)" />
  </svg>
);

const TimelineIcon = ({ children }) => (
  <div className="relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 shrink-0">
    <div className="absolute inset-0 bg-[#E0F2FE] rounded-full scale-[1.5]" />
    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border border-[#60A5FA] shadow-sm">
      {children}
    </div>
  </div>
);

const TimelineCard = ({ title, description }) => (
  <div className="flex-1 p-6 bg-white border border-[#60A5FA] rounded-2xl shadow-md hover:shadow-xl transition-all">
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm md:text-base">{description}</p>
  </div>
);

const TimelineItem = ({ title, description, isLast, isVisible, index }) => {
  const delay = index * 150;

  return (
    <div
      className={`flex gap-4 md:gap-8 mb-8 relative transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {!isLast && (
        <div className="absolute left-5 md:left-6 top-10 bottom-[-32px] w-px bg-blue-300 -translate-x-1/2" />
      )}

      <TimelineIcon>
        <Check size={18} className="text-blue-600" />
      </TimelineIcon>

      <div className="w-full">
        <div className="md:hidden">
          <h3 className="font-bold text-slate-900">{title}</h3>
          <p className="text-slate-600 text-sm">{description}</p>
        </div>
        <div className="hidden md:block">
          <TimelineCard title={title} description={description} />
        </div>
      </div>
    </div>
  );
};

// --- MAIN ---

const App = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // ✅ UPDATED – IT Health Check (Stabilize Phase)
  const timelineData = [
    {
      title: "Executive Summary",
      description: "High-level risks, priorities, and recommendations for leadership.",
    },
    {
      title: "Scorecard",
      description: "Snapshot of security, compliance, infrastructure, and operations.",
    },
    {
      title: "Prioritized & Actionable Issues List",
      description: "Clearly ranked issues with impact, urgency, and next steps.",
    },
  ];

  return (
    <div className="bg-white relative overflow-hidden font-sans">
      <main className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-20">

        {/* LEFT */}
        <div className="lg:sticky lg:top-20 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#348DF01F] border border-[#348DF080] text-blue-600 text-xs font-semibold mb-6">
            IT Health Check · Stabilize (CIO360 Phase 1)
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold tracking-tight text-slate-900 mb-8 animate-heading-slide-in"> <span className="text-slate-400 block mt-2">Clear</span> <span className="relative inline-block"> Documentation <MarkerUnderline /> </span> <br className="hidden md:block" /> <span className="text-slate-400"> You</span>{' '} <span className="relative inline-block"> Can Act On. <MarkerUnderline /> </span> </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-lg">
            These deliverables provide a clear, executive-ready view of IT health —
            forming the foundation of the CIO360 engagement.
          </p>

          <a
            href="https://calendly.com/brian_damiani/working-session-30-min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center gap-3 bg-[#2589FE] text-white px-8 py-4 rounded-full font-semibold shadow hover:-translate-y-0.5 transition">
              Book an Assessment
              <ArrowRight size={16} />
            </button>
          </a>
        </div>

        {/* RIGHT – TIMELINE */}
        <div ref={ref}>
          {timelineData.map((item, i) => (
            <TimelineItem
              key={i}
              {...item}
              index={i}
              isLast={i === timelineData.length - 1}
              isVisible={visible}
            />
          ))}
        </div>
      </main>

      {/* OTHER PHASES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Strengthen */}
          <div className="bg-[#F8FAFF] p-8 rounded-2xl border">
            <h3 className="text-xl font-bold mb-4">
              Strengthen (CIO360 Phase 2)
            </h3>
            <p className="text-slate-600 mb-4">
              <strong>Standalone:</strong> Deep Dive Assessment
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• 90-Day Action Plan</li>
              <li>• Updated IT & Security Policies</li>
              <li>• Compliance Dashboard</li>
            </ul>
          </div>

          {/* Scale */}
          <div className="bg-[#F8FAFF] p-8 rounded-2xl border">
            <h3 className="text-xl font-bold mb-4">
              Scale (CIO360 Phase 3)
            </h3>
            <p className="text-slate-600 mb-4">
              <strong>Standalone:</strong> Fractional CIO Support
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• 1-Year Strategic IT Roadmap</li>
              <li>• Capability Gap Plan</li>
              <li>• Executive Briefing Deck</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default App;
