import React from "react";

// --- DUMMY DATA (6 Items) ---
const testimonials = [
  {
    id: 1,
    quote:
      "Brian is an outstanding partner, a trusted advisor, and someone who will not only fix problems but also position organizations for future success.",
    name: "Cathy Mahaffey, CEO",
    title: "Common Ground Healthcare Cooperative",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    quote:
      "Brian, thank you for being our technology champion. Your team saved us in our time of need.",
    name: "Victor Fields",
    title: "CEO Health Services for Children with Special Needs",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  // {
  //     id: 3,
  //     quote: "The clarity Brian brought to our chaotic infrastructure was invaluable. We moved from reactive firefighting to proactive strategy in six months.",
  //     name: "Sarah Jenkins",
  //     title: "COO, Mercy Regional Systems",
  //     avatar: "https://i.pravatar.cc/150?img=5"
  // },
  // {
  //     id: 4,
  //     quote: "A true partner in every sense. They didn't just talk strategy; they rolled up their sleeves and helped our interim leaders execute the plan.",
  //     name: "Michael O'Connell",
  //     title: "Founder, HealthTech Solutions",
  //     avatar: "https://i.pravatar.cc/150?img=60"
  // },
  // {
  //     id: 5,
  //     quote: "Before working with Wendigo, we were bleeding talent. Brian helped us define roles, improve culture, and retain our critical senior engineers.",
  //     name: "Priya Patel",
  //     title: "VP of Engineering, OmniCare",
  //     avatar: "https://i.pravatar.cc/150?img=45"
  // },
  // {
  //     id: 6,
  //     quote: "Their assessment was brutally honest, which is exactly what we needed. It was the wakeup call that saved our major migration project.",
  //     name: "James Wilson",
  //     title: "CTO, Statewide Medical Group",
  //     avatar: "https://i.pravatar.cc/150?img=15"
  // },
];

// --- SINGLE CARD COMPONENT ---
const TestimonialCard = ({ item }) => (
  <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-slate-100 mb-6 mx-auto w-full max-w-[500px]">
    {/* Quote Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#000000BF] mb-6"
    >
      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
    </svg>

    {/* Quote Text */}
    <p className="text-[#334155] text-lg leading-relaxed font-medium mb-6">
      "{item.quote}"
    </p>

    {/* Author Info */}
    <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
      {/* <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover grayscale" /> */}
      <div>
        <h4 className="font-bold text-slate-900 leading-tight">{item.name}</h4>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">
          {item.title}
        </p>
      </div>
    </div>
  </div>
);

const CEOPerspective = () => {
  // We duplicate the data to create the seamless loop
  const scrollingData = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full bg-[#F0F8FF] py-10 px-4 md:px-8 overflow-hidden font-sans">
      {/* Schema.org Review Markup for SEO */}
      <script type="application/ld+json">
        {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Wendigo Advisors",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5",
                            "reviewCount": "2",
                            "bestRating": "5",
                            "worstRating": "1"
                        },
                        "review": [
                            {
                                "@type": "Review",
                                "author": {
                                    "@type": "Person",
                                    "name": "Cathy Mahaffey"
                                },
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "5",
                                    "bestRating": "5"
                                },
                                "reviewBody": "Brian is an outstanding partner, a trusted advisor, and someone who will not only fix problems but also position organizations for future success.",
                                "itemReviewed": {
                                    "@type": "ProfessionalService",
                                    "name": "Wendigo Advisors Healthcare CIO Advisory"
                                }
                            },
                            {
                                "@type": "Review",
                                "author": {
                                    "@type": "Person",
                                    "name": "Victor Fields"
                                },
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "5",
                                    "bestRating": "5"
                                },
                                "reviewBody": "Brian, thank you for being our technology champion. Your team saved HSCSN in our time of need.",
                                "itemReviewed": {
                                    "@type": "ProfessionalService",
                                    "name": "Wendigo Advisors Healthcare CIO Advisory"
                                }
                            }
                        ]
                    }
                `}
      </script>

      {/* --- CSS FOR ANIMATION (Injected directly) --- */}
      <style>{`
        @keyframes smoothScrollY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          animation: smoothScrollY 60s linear infinite; /* Adjust 60s to change speed */
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Dot Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* --- LEFT SIDE: Static Content --- */}
        <div className="text-left lg:pr-8 mb-10 lg:mb-0">
          {/* Badge */}

          <span className="inline-block w-[142px] h-[30px] px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6 text-center">
            From a CEO
          </span>

          {/* Headline */}

          <h2 className="text-[52px] leading-none font-bold tracking-[-2px] text-[#00000052] mb-6 font-inter">
            <span className="relative inline-block text-slate-900 z-10">
              What Healthcare CEOs Say
              <img
                src="/line.png"
                alt="underline"
                className="absolute left-0 -bottom-4 w-full h-auto object-contain pointer-events-none -z-10"
              />
            </span>
          </h2>

          {/* Subtext (NEW — required by client) */}
          <p className="text-[#00000080] text-lg md:text-xl leading-relaxed max-w-lg mb-10 font-medium">
            Healthcare leaders turn to Wendigo when experienced CIO leadership
            is needed to stabilize operations, reduce risk, and guide complex
            technology decisions.
          </p>

          {/* Button */}
          <a
            href="https://t.ly/7Jjhw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group flex items-center gap-3 bg-[#348DF0] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-1">
              Book a Call with Brian Damiani
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </a>
        </div>

        {/* --- RIGHT SIDE: Infinite Vertical Scrolling Carousel --- */}
        {/* The container has a fixed height and hides overflow to create the "window" */}
        <div className="relative h-[600px] overflow-hidden w-full">
          {/* Top Fade Gradient */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F0F8FF] to-transparent z-20 pointer-events-none"></div>

          {/* Bottom Fade Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F0F8FF] to-transparent z-20 pointer-events-none"></div>

          {/* The Moving Track */}
          <div className="animate-scroll-vertical w-full">
            {scrollingData.map((item, index) => (
              <div key={index} className="px-2">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOPerspective;
