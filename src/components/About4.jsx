import React, { useState, useEffect, useRef } from 'react';
import { Search, Users, ShieldCheck, TrendingUp, Tag, ArrowRight } from 'lucide-react';

// --- SVGs & GRAPHICS ---

const MarkerUnderline = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    className={`absolute bottom-0 left-0 w-full h-[8px] md:h-[10px] -mb-1 -z-10 ${className}`}
  >
    <defs>
      <filter id="markerNoise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <rect x="0" y="2" width="200" height="6" fill="#348DF0" filter="url(#markerNoise)" opacity="0.7" />
  </svg>
);

const TimelineIcon = ({ children }) => (
  <div className="relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 shrink-0">
    <div className="absolute inset-0 bg-[#E0F2FE] rounded-full transform scale-[1.4] md:scale-[1.6]" />
    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border border-[#60A5FA] shadow-sm text-slate-800">
      {children}
    </div>
  </div>
);

const TimelineCard = ({ title, description }) => (
  <div className="flex-1 p-6 bg-white border border-[#60A5FA] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 shadow-[0_0px_15px_0_rgba(96,165,250,0.2)] hover:shadow-[0_0px_25px_0_rgba(96,165,250,0.3)] transform hover:-translate-y-1">
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{description}</p>
  </div>
);

const TimelineItem = ({ icon: Icon, title, description, isLast, isVisible, index }) => {
  const delay = index * 150;

  return (
    <div
      className={`flex gap-4 md:gap-8 mb-8 relative items-start md:items-center transition-all duration-700 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {!isLast && (
        <div className="absolute left-5 md:left-6 top-10 md:top-12 bottom-[-32px] w-px bg-blue-300 transform -translate-x-1/2" />
      )}

      <div className="flex flex-col items-center self-stretch">
        <TimelineIcon>
          <Icon size={18} strokeWidth={2.5} className="text-blue-600 md:hidden" />
          <Icon size={20} strokeWidth={2} className="hidden md:block" />
        </TimelineIcon>
      </div>

      <div className="w-full">
        {/* Mobile: Title and Description stacked with specific spacing */}
        <div className="md:hidden">
          <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
          <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
        </div>

        {/* Desktop: Original Card View */}
        <div className="md:block hidden">
          <TimelineCard title={title} description={description} />
        </div>
      </div>
    </div>
  );
};

// --- Main Application ---

const App = () => {
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTimelineVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -100px 0px', threshold: 0.1 }
    );

    if (timelineRef.current) observer.observe(timelineRef.current);
    return () => { if (timelineRef.current) observer.unobserve(timelineRef.current); };
  }, []);

  const timelineData = [
    { icon: Search, title: "Clarity over Complexity", description: "We translate technology into language CEOs can act on." },
    { icon: Users, title: "Culture defines success", description: "Technology succeeds only when IT teams feel supported, understood, and aligned." },
    { icon: ShieldCheck, title: "Security is non-negotiable", description: "Healthcare organizations must have a strong security and compliance foundation." },
    { icon: TrendingUp, title: "Business-first technology", description: "IT must accelerate business objectives, not slow them down." },
    { icon: Tag, title: "Fixed, transparent pricing", description: "No hidden costs. No surprises. No inflated estimates." }
  ];

  return (
    <div className=" bg-[#FFF] relative font-sans overflow-hidden selection:bg-blue-100 selection:text-blue-900">

      {/* Background Decor (Resized for mobile) */}
      <div className="absolute left-0 top-0 h-full w-20 md:w-40 bg-gradient-to-r from-[#B5D8FF] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 md:w-40 bg-gradient-to-l from-[#B5D8FF] to-transparent pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
        }}
      />

      <main className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-10  relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left Column - Centered for mobile */}
          <div className="lg:sticky lg:top-20 pt-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#348DF01F] border border-[#348DF080] text-blue-600 text-xs font-semibold tracking-wide mb-6 md:mb-8 shadow-sm backdrop-blur-sm animate-tag-fade-in">
              Our Philosophy
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.2] lg:leading-[1.1] font-bold tracking-tight text-slate-900 mb-6 md:mb-8 animate-heading-slide-in">
              <span className="relative inline-block">Executive-Level IT<MarkerUnderline /></span><br />
              <span className="relative inline-block mt-1 md:mt-2">Guidance<MarkerUnderline /></span>{' '}
              <span className="text-slate-400">for</span>{' '}
              <span className="relative inline-block">Healthcare<MarkerUnderline /></span><br className="hidden md:block" />
              <span className="text-slate-400 block mt-1 md:mt-2">Organizations</span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 max-w-lg leading-relaxed animate-desc-fade-in">
              <span className="text-slate-400">At Wendigo Advisors,</span>{' '}
              <strong className="text-slate-800">We believe that IT leadership isn't just technical</strong>
              — <strong className="text-slate-800">it's cultural, <a href="/cio-operating" className="text-blue-600 underline hover:text-blue-800">strategic</a>,</strong> and <strong className="text-slate-800">human.</strong>
            </p>

            <a href="https://calendly.com/brian_damiani/working-session-30-min" target="_blank"
              rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto justify-center flex items-center gap-3 bg-[#2589FE] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_4px_14px_0_rgba(37,137,254,0.39)] hover:shadow-[0_6px_20px_rgba(37,137,254,0.23)] hover:-translate-y-0.5 active:translate-y-0 animate-cta-fade-in">
                Book a Call
                <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                  <ArrowRight size={16} />
                </div>
              </button>
            </a>
          </div>

          {/* Right Column - Optimized for mobile width */}
          <div className="relative pt-2 lg:pt-0" ref={timelineRef}>
            <div className="absolute left-5 md:left-6 top-0 h-10 w-px bg-gradient-to-b from-transparent to-blue-200 transform -translate-x-1/2" />

            <div className="space-y-2 md:space-y-4">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  isLast={index === timelineData.length - 1}
                  isVisible={isTimelineVisible}
                  index={index}
                />
              ))}
            </div>

            <div className="absolute left-5 md:left-6 bottom-[-20px] h-20 w-px bg-gradient-to-b from-blue-200 to-transparent transform -translate-x-1/2" />
          </div>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes simpleFadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-tag-fade-in { animation: simpleFadeIn 0.5s ease-out forwards 0.1s; opacity: 0; }
        .animate-heading-slide-in { animation: slideInLeft 0.8s ease-out forwards 0.2s; opacity: 0; }
        .animate-desc-fade-in { animation: fadeIn 0.8s ease-out forwards 0.4s; opacity: 0; }
        .animate-cta-fade-in { animation: fadeIn 0.8s ease-out forwards 0.5s; opacity: 0; }
      `}</style>
    </div>
  );
};

export default App;