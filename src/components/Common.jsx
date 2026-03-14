import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

function MarkerUnderline({ className = '' }) {
  // safe useId fallback
  const id = React.useId?.() ?? `m-${Math.random().toString(36).slice(2, 9)}`;
  const filterId = `markerNoise-${id}`;

  return (
    <svg
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className={`absolute bottom-0 left-0 w-full h-[10px] pointer-events-none ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* noisy texture */}
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
            result="noise"
          />
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
        filter={`url(#${filterId})`}
        opacity="0.7"
        rx="2"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(-1); // no FAQ open initially

  const faqs = [
    {
      question: 'Is it disruptive',
      answer: 'Minimal, mostly documents, scans, and scheduled interviews.'
    },
    {
      question: 'Will IT feel threatened?',
      answer: 'We partner with internal teams — our focus is enablement, not replacement.'
    },
    {
      question: "How's this different from vendor assessments?",
      answer: 'Vendor assessments focus on a product; our assessment reviews people, process and platform with strategy and remediation planning.'
    },
    {
      question: 'What if major issues appear?',
      answer: 'We prioritise fixes, help build a remediation roadmap, and can support remediation planning and vendor selection if needed.'
    },
    {
      question: 'Remote or on-site?',
      answer: 'Mostly remote with targeted on-site workshops or interviews if required by the client.'
    },
    {
      question: 'What happens afterward?',
      answer: 'You receive a concise report with prioritized recommendations, an executive summary, and next-step options (implementation, advisory, or a follow-up engagement).'
    }
  ];

  function toggleFAQ(index) {
    setOpenFAQ((prev) => (prev === index ? -1 : index));
  }

  return (
    <div className="relative w-full py-10 px-4">
      {/* BACKGROUND with dots pattern */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* DOTS LAYER */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#93C5FD 1.5px, transparent 1.5px)',
            backgroundSize: '30px 30px',
            backgroundPosition: 'center top',
            opacity: 0.6
          }}
        />

        {/* VIGNETTE */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, transparent 0%, transparent 45%, #F0F6FF 100%)'
          }}
        />

        {/* WHITE CORNER VIGNETTE */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, transparent 0%, transparent 50%, white 100%)'
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center justify-center px-5 py-1.5 text-sm font-medium text-blue-500 bg-[#348DF01F] border border-[#348DF080] rounded-full">
              Common Questions
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            <span className="relative inline-block pb-2 z-10">
              IT Health
              <MarkerUnderline className="text-blue-300" />
            </span>{' '}
            <span className="text-gray-500">check</span>{' '}
            <span className="relative inline-block pb-2 z-10">
              FAQ's.
              <MarkerUnderline className="text-blue-300" />
            </span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className={`bg-white rounded-3xl border-2 transition-all ${
                  isOpen ? 'border-blue-400 shadow-lg' : 'border-gray-200 shadow-sm hover:border-gray-300'
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>

                  <div
                    className={`flex-shrink-0 ml-4 transition-all rounded-full p-2 ${
                      isOpen ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </div>
                </button>

                {/* Answer - Expanded */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 px-6 ${
                    isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className="text-gray-600 text-sm leading-relaxed">{faq.answer || 'Answer content goes here...'}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
