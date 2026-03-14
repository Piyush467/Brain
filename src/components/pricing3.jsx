import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';

// --- Custom Components ---
// Custom SVG component for the squiggly/marker underline
const MarkerUnderline = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    className={`absolute bottom-0 left-0 w-full h-[10px] -mb-1 -z-10 ${className}`}
  >
    <defs>
      <filter id="markerNoise">
        {/* Create random noisy pattern */}
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="3"
          stitchTiles="stitch"
          result="noise"
        />
        {/* Distort it */}
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="12"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>

    <rect
      x="0"
      y="2"
      width="200"
      height="6"
      fill="#348DF0"
      filter="url(#markerNoise)"
      opacity="0.7"
    />
  </svg>
);


// 2. Data for the FAQ
const faqData = [
  {
  id: 1,
  question: "How do I choose the right service?",
  answer: [
    { text: "If you ", bold: false },
    { text: "want quick, no-pressure clarity", bold: true },
    { text: ", start with a ", bold: false },
    { text: "Free Working Session", bold: true },
    { text: ".", bold: false },
  ],
  answer2: [
    { text: "If you ", bold: false },
    { text: "need fast insight into your current environment", bold: true },
    { text: ", start with the ", bold: false },
    { text: "IT Health Check", bold: true },
    { text: ".", bold: false },
  ],
  answer3: [
    { text: "If you ", bold: false },
    { text: "want a structured, end-to-end plan", bold: true },
    { text: ", choose the ", bold: false },
    { text: "CIO Operating System", bold: true },
    { text: ".", bold: false },
  ],
  answer4: [
    { text: "If you ", bold: false },
    { text: "need ongoing executive leadership", bold: true },
    { text: ", choose ", bold: false },
    { text: "CIO as a Service", bold: true },
    { text: ".", bold: false },
  ]
},
  {
    id: 2,
    question: "Can you customize packages?",
    answer: "Yes, we tailor our services to meet your specific organizational needs."
  },
  {
    id: 3,
    question: "Do you work only with healthcare organizations?",
    answer: "We specialize in healthcare but apply our expertise to similar regulated industries."
  },
  {
    id: 4,
    question: "Do you offer onsite work?",
    answer: "We offer both remote and onsite engagement options depending on the project requirements."
  },
  {
    id: 5,
    question: "What's the average engagement length?",
    answer: "Engagements typically range from 3 to 12 months, but can be adjusted based on goals."
  }
];

export default function App() {
  const [openId, setOpenId] = useState(0);
  const [activeTab, setActiveTab] = useState('General');

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="-mt-5 bg-[#F0F6FF] font-sans selection:bg-blue-200 text-slate-900 relative overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, transparent 0%, #F0F6FF 100%),
            radial-gradient(rgb(120,120,120,1) 1.5px, transparent 1.5px)
          `,
          // Define size for each layer: 100% for the radial fade, 24px 24px for the dots
          backgroundSize: '100% 100%, 24px 24px',
          opacity: 0.4 // Apply overall faintness to the whole pattern
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 flex flex-col items-center">
        
        {/* Badge */}
        <div className="mb-8">
          <span className="px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 text-blue-500 text-sm font-medium shadow-sm backdrop-blur-sm">
            FAQ's
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[25px] sm:text-5xl font-bold text-center leading-[1.2] mb-10 tracking-tight text-slate-900">
          <span className="relative inline-block whitespace-nowrap z-0">
            Common questions
            <MarkerUnderline className="text-blue-400" />
          </span>
          <span className="text-gray-400 font-bold"> from</span>
          <br />
          <span className="relative inline-block whitespace-nowrap z-0 mt-2">
            healthcare leaders.
            <MarkerUnderline />
          </span>
        </h1>

        {/* FAQ List */}
        <div className="w-full space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            
            return (
              <div
                key={item.id}
                onClick={() => toggleFAQ(item.id)}
                // Added 'shadow-md' for a permanent shadow on the item, 
                // and changed the hover to 'shadow-lg' for the lift effect.
                className={`
                  group w-full bg-white rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden shadow-md
                  ${isOpen 
                    ? 'border-2 border-blue-400 shadow-[0_4px_20px_-2px_rgba(59,130,246,0.15)] ring-4 ring-blue-50/50' // Open State Styles
                    : 'border border-transparent hover:border-blue-100 hover:shadow-lg' // Closed/Hover Styles
                  }
                `}
              >
                <div className="p-5 md:p-6 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* ** Question Text (H3) Styles ** */}
                    <h3 className={`text-lg font-semibold pr-4 transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-800'}`}>
                      {item.question}
                    </h3>
                    
                    {/* Content Area - Animated Height */}
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      {/* ** Answer Text (P/UL) Styles ** */}
                      <div className="overflow-hidden text-slate-600 leading-relaxed text-[15px]">
                        {/* Custom rendering for the complex first item */}
                        {item.id === 1 ? (
                          <ul className="space-y-2 list-disc pl-4 marker:text-gray-400">
                             <li>
                                {item.answer.map((part, idx) => (
                                    <span key={idx} className={part.bold ? "font-bold text-slate-900" : ""}>{part.text}</span>
                                ))}
                             </li>
                             <li>
                                {item.answer2.map((part, idx) => (
                                    <span key={idx} className={part.bold ? "font-bold text-slate-900" : ""}>{part.text}</span>
                                ))}
                             </li>
                             <li>
                                {item.answer3.map((part, idx) => (
                                    <span key={idx} className={part.bold ? "font-bold text-slate-900" : ""}>{part.text}</span>
                                ))}
                             </li>
                             <li>
                                {item.answer4.map((part, idx) => (
                                    <span key={idx} className={part.bold ? "font-bold text-slate-900" : ""}>{part.text}</span>
                                ))}
                             </li>
                          </ul>
                        ) : (
                          <p>{item.answer}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0 pt-1">
                    <div 
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                        ${isOpen ? 'bg-blue-500 rotate-180' : 'bg-slate-100 group-hover:bg-slate-200'}
                      `}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-white" strokeWidth={2.5} />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-slate-400" strokeWidth={2.5} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}