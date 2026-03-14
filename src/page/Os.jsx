import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Shield, BarChart, Layers, Clock, Activity, Zap, TrendingUp } from 'lucide-react';
import OsHero from '../components/OsHero';
import ProblemSolutionSection from '../components/OsCore';
import CIOOperatingContent from '../components/CIOOperatingContent';
import PricingSection from '../components/OsPrice';
import ConclusionCTA from '../components/OsCTA';
import Footer from '../components/Footer.jsx'
import CTA from '../components/CTA.jsx'
import FromCeo from '../components/FromCeo.jsx'
import ConclusionSection from '../components/Conclusion.jsx';
import RoadmapSection from '../components/Road.jsx';
import FAQSection from '../components/FAQSection.jsx';

const CioLandingPage = () => {
  const colors = {
    navy: '#001224',
    blue: '#348DF0',
    white: '#ffffff',
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="font-sans antialiased selection:bg-blue-500 selection:text-white" style={{ backgroundColor: colors.white }}>
      <Helmet>
        <title>CIO Operating Model for Healthcare | Wendigo Advisors</title>
        <meta name="description" content="The CIO Operating System™ acts as a CIO as operating system for healthcare, transforming health plan IT into a transparent, governed business function." />
        <link rel="canonical" href="https://www.wendigoadvisors.com/cio-operating" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wendigoadvisors.com/cio-operating" />
        <meta property="og:title" content="CIO Operating Model for Healthcare | Wendigo Advisors" />
        <meta property="og:description" content="Proprietary CIO operating model designed for healthcare payer organizations." />
        <meta property="og:image" content="https://www.wendigoadvisors.com/card1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wendigoadvisors.com/cio-operating" />
        <meta property="twitter:title" content="CIO Operating Model for Healthcare | Wendigo Advisors" />
        <meta property="twitter:description" content="Formalize healthcare IT governance with the CIO Operating System™." />
        <meta property="twitter:image" content="https://www.wendigoadvisors.com/card1.png" />

        <script type="application/ld+json">
          {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "CIO Operating System™",
                    "brand": {
                      "@type": "Brand",
                      "name": "Wendigo Advisors"
                    },
                    "creator": {
                      "@type": "Person",
                      "@id": "https://www.wendigoadvisors.com/about#brian-damiani",
                      "name": "Brian Damiani",
                      "jobTitle": "Healthcare CIO Advisor & Founder"
                    },
                    "description": "A strategic operating model and framework for Healthcare CIOs to restore control and alignment, developed by Brian Damiani.",
                    "audience": {
                      "@type": "BusinessAudience",
                      "audienceType": "Healthcare Executives"
                    }
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "DefinedTerm",
                    "name": "CIO Operating System™",
                    "termCode": "CIO-OS",
                    "description": "A proprietary IT management framework designed by Wendigo Advisors specifically for Healthcare Payers and Providers to ensure IT-Business alignment.",
                    "inDefinedTermSet": {
                        "@type": "DefinedTermSet",
                        "name": "Healthcare IT Management Frameworks"
                    }
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                      "@type": "Question",
                      "name": "What is the CIO Operating System?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The CIO Operating System is a comprehensive framework for managing healthcare IT, focusing on visible metrics, clear governance, and alignment between IT capabilities and business goals."
                      }
                    }, {
                      "@type": "Question",
                      "name": "How long does it take to implement?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The initial assessment and roadmap phase (CIO360) typically takes 2-3 weeks, with full operating model implementation rolling out over 3-6 months."
                      }
                    }]
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.wendigoadvisors.com/"
                    }, {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "CIO Operating System",
                      "item": "https://www.wendigoadvisors.com/cio-operating"
                    }]
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": "https://www.wendigoadvisors.com/cio-operating#webpage",
                    "name": "CIO Operating System",
                    "description": "Strategic framework for healthcare CIO management developed by Brian Damiani",
                    "url": "https://www.wendigoadvisors.com/cio-operating",
                    "inLanguage": "en-US",
                    "isPartOf": { "@id": "https://www.wendigoadvisors.com/#webpage" },
                    "about": {
                      "@type": "Product",
                      "name": "CIO Operating System™",
                      "creator": {
                        "@type": "Person",
                        "name": "Brian Damiani"
                      }
                    }
                  }
                `}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <OsHero />

      {/* CORE PROBLEM & OUTCOME */}

      {/* AI Summary Block */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">In Simple Terms</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The <strong>CIO Operating System™</strong> is not software you install. It is a <strong>strategic management framework</strong> (like an Operating Model) that gives CEOs visibility into IT performance, costs, and risks—turning "Black Box" IT departments into transparent business partners.
          </p>
        </div>
      </section>

      <CIOOperatingContent />

      <ProblemSolutionSection />

      {/* NEW REDESIGNED PROCESS SECTION */}
      <RoadmapSection />

      {/* PRICING SECTION */}
      <PricingSection />

      <ConclusionSection />
      <FromCeo />
      <ConclusionCTA />

      <FAQSection
        title="Common Questions about the CIO Operating System™"
        items={[
          {
            question: "What is the CIO Operating System™?",
            answer: "It is a proprietary CIO operating model for healthcare designed to transform IT from a 'black box' into a strategic, governed business function. It focuses on Visibility, Governance, Security, and Strategic Alignment specifically for health plans and payer organizations."
          },
          {
            question: "How long does implementation take?",
            answer: "The initial assessment and roadmap (CIO360 IT Health Check) takes 2-3 weeks. Full operating model implementation typically rolls out over 3-6 months depending on organization size and complexity."
          },
          {
            question: "Is this software or consulting?",
            answer: "It is a strategic operating model (consulting framework) that may leverage your existing software tools to create better visibility, governance, and reporting dashboards. It is not a software product you install."
          },
          {
            question: "Do we need a CIO to implement this operating model?",
            answer: "No. The CIO Operating System™ can be implemented through our CIO as a Service model, where Brian Damiani serves as your fractional CIO during and after implementation. It also works alongside an existing internal CIO."
          },
          {
            question: "What size health plans benefit from a CIO operating model?",
            answer: "Health plans of all sizes benefit from structured IT governance. Small to mid-market plans (50,000-500,000 members) see the most dramatic improvements because they often lack formal IT governance structures entirely."
          }
        ]}
      />

      <Footer />

    </div>
  );
};

export default CioLandingPage;