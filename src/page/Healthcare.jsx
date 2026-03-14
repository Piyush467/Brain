import React from 'react'
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/healthcare1.jsx'
import ServicesSection from '../components/healthcare2.jsx'
import ComplimentaryTools from '../components/healthcare3.jsx'
import CIOServiceContent from '../components/CIOServiceContent.jsx'
import Footer from '../components/Footer.jsx'
import CTA from '../components/CTA.jsx'
import FromCeo from '../components/FromCeo.jsx'
import FAQSection from '../components/FAQSection.jsx'
import ComparisonTable from '../components/ComparisonTable.jsx'
import TargetAudience from '../components/TargetAudience.jsx'
function Services() {
  return (
    <div>
      <Helmet>
        <title>CIO as a Service for Health Plans | Fractional CIO leadership | Wendigo</title>
        <meta name="description" content="Dedicated CIO as a service for health plans and payer organizations. We provide fractional executive IT leadership, vendor management, and strategic transformation." />
        <meta name="keywords" content="CIO as a service for health plans, healthcare CIO consulting, Brian Damiani, Wendigo Advisors, fractional CIO healthcare, health plan CIO, CIO advisory healthcare, interim CIO services, healthcare IT leadership" />
        <meta name="author" content="Brian Damiani, Wendigo Advisors" />
        <link rel="canonical" href="https://www.wendigoadvisors.com/healthcare" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wendigoadvisors.com/healthcare" />
        <meta property="og:title" content="CIO as a Service for Health Plans | Wendigo Advisors" />
        <meta property="og:description" content="Dedicated fractional CIO leadership for healthcare payer organizations." />
        <meta property="og:image" content="https://www.wendigoadvisors.com/card1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wendigoadvisors.com/healthcare" />
        <meta property="twitter:title" content="CIO as a Service for Health Plans | Wendigo Advisors" />
        <meta property="twitter:description" content="Fractional healthcare CIO leadership for health plans and payers." />
        <meta property="twitter:image" content="https://www.wendigoadvisors.com/card1.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "CIO as a Service for Health Plans",
              "provider": {
                "@type": "Organization",
                "name": "Wendigo Advisors",
                "founder": {
                  "@type": "Person",
                  "@id": "https://www.wendigoadvisors.com/about#brian-damiani",
                  "name": "Brian Damiani",
                  "jobTitle": "Healthcare CIO Advisor & Founder"
                }
              },
              "description": "Information Technology Leadership and CIO Advisory specifically for Health Plans, led by Brian Damiani.",
              "areaServed": "Healthcare Industry"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is CIO as a Service for health plans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CIO as a Service is a high-level strategic leadership model where a Fractional CIO provides ongoing governance, IT strategy, and operational oversight for health plans without the cost of a full-time executive."
                }
              }, {
                "@type": "Question",
                "name": "How does this differ from IT staffing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unlike staffing, which provides hands for tasks, CIO as a Service provides the 'head'—strategic direction, vendor management, and capability roadmapping."
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
                "name": "Healthcare CIO Services",
                "item": "https://www.wendigoadvisors.com/healthcare"
              }]
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.wendigoadvisors.com/healthcare#webpage",
              "name": "Healthcare CIO as a Service",
              "description": "Fractional CIO services for healthcare organizations led by Brian Damiani",
              "url": "https://www.wendigoadvisors.com/healthcare",
              "inLanguage": "en-US",
              "isPartOf": { "@id": "https://www.wendigoadvisors.com/#webpage" },
              "about": {
                "@type": "Service",
                "name": "CIO as a Service",
                "provider": {
                  "@type": "Person",
                  "name": "Brian Damiani",
                  "jobTitle": "Healthcare CIO Advisor"
                }
              }
            }
          `}
        </script>
      </Helmet>
      <HeroSection />

      {/* AI Summary Block */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">In Simple Terms</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            <strong>CIO as a Service</strong> is not just "expert advice." It is a <strong>fractional executive leadership model</strong> that places a veteran CIO inside your health plan to own Strategy, Vendor Management, and Core Platform Migrations—at a fraction of the cost of a full-time hire.
          </p>
        </div>
      </section>

      <CIOServiceContent />
      <ServicesSection />
      <ComplimentaryTools />
      <FromCeo />
      <CTA />

      <ComparisonTable />

      <TargetAudience />

      <FAQSection
        title="Frequently Asked Questions"
        description="Common questions health plan leaders ask about our CIO as a Service model."
        items={[
          {
            question: "What is CIO as a service for health plans?",
            answer: "CIO as a service for health plans is a strategic fractional leadership model where a senior Healthcare CIO provides ongoing IT governance, strategy, vendor management, and operational oversight tailored specifically to payer organizations — without the full-time executive cost."
          },
          {
            question: "How is this different from interim IT staffing?",
            answer: "Staffing provides 'hands' to execute tasks. CIO as a service provides the 'head' — strategic direction, vendor accountability, board communication, roadmap planning, and executive alignment that only a veteran CIO can deliver."
          },
          {
            question: "Can you help with payer platform migrations?",
            answer: "Yes. We specialize in navigating complex core administration platform migrations (e.g., Facets, QNXT, HealthRules) by ensuring technical readiness, vendor accountability, and stakeholder alignment throughout the transition."
          },
          {
            question: "How quickly can a fractional CIO be engaged?",
            answer: "Most engagements begin within 1–2 weeks of initial consultation. We typically start with an IT health check (CIO360) to establish a baseline, then transition into ongoing CIO advisory within the first month."
          },
          {
            question: "What size health plans benefit from CIO as a service?",
            answer: "Our model is designed for small to mid-market health plans (50,000–500,000 members) that need senior IT leadership but may not have the budget or need for a full-time CIO, as well as larger plans in leadership transitions."
          }
        ]}
      />
      <Footer />
    </div>
  )
}

export default Services
