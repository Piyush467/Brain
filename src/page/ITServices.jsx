import React from 'react'
import { Helmet } from 'react-helmet-async';
import ITHealthCheck from '../components/ITHealth'
import ITHealthContent from '../components/ITHealthContent'
import What from '../components/What'
import HealthcareMarquee from '../components/HealthcareMarquee'
import FromCeo from '../components/FromCeo'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import Common from '../components/Common'
import Deliverables from "../components/Deliverables";
import Week from '../components/Week'
import FAQSection from '../components/FAQSection.jsx'

function ITServices() {
  return (
    <main className="w-full min-h-[300vh] overflow-visible">
      <Helmet>
        <title>IT Health Check for Health Plans | Wendigo Advisors</title>
        <meta name="description" content="Our IT health check for health plans is a premier healthcare IT health check service providing an independent, CIO-level diagnostic of your technology environment." />
        <link rel="canonical" href="https://www.wendigoadvisors.com/ITservices" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wendigoadvisors.com/ITservices" />
        <meta property="og:title" content="IT Health Check for Health Plans | Wendigo Advisors" />
        <meta property="og:description" content="Independent IT health check and CIO-level diagnostic for healthcare payer organizations." />
        <meta property="og:image" content="https://www.wendigoadvisors.com/card1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wendigoadvisors.com/ITservices" />
        <meta property="twitter:title" content="IT Health Check for Health Plans | Wendigo Advisors" />
        <meta property="twitter:description" content="Independent IT health check and CIO-level diagnostic for health plans." />
        <meta property="twitter:image" content="https://www.wendigoadvisors.com/card1.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "IT Health Check (CIO360)",
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
              "description": "Comprehensive IT diagnostics for healthcare organizations covering Security, Compliance, Infrastructure, Operations, Cost, and Strategy led by Brian Damiani.",
              "areaServed": "Healthcare Industry"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What does an IT Health Check cover?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our 6-point diagnostic covers Security, Compliance, Infrastructure, Applications, IT Operations/Processes, and Financial/Cost Analysis."
                }
              }, {
                "@type": "Question",
                "name": "How disruptive is the assessment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We design our process to be low-friction. We conduct targeted interviews and request read-only access to documentation, minimizing impact on your daily operations."
                }
              }]
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "Conduct a Healthcare IT Health Check",
              "description": "A 3-week non-disruptive process to assess healthcare IT stability, security, and cost-efficiency.",
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Week 1: Discovery & Documentation",
                  "text": "Review of current architecture, contracts, and grid-level IT documentation to establish a baseline."
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Week 2: Diagnostic Interviews",
                  "text": "Targeted interviews with key IT and business stakeholders to identify friction points and operational risks."
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Week 3: Analysis & Roadmap",
                  "text": "Synthesis of findings into a prioritized remediation roadmap and executive presentation of the 6-point diagnostic score."
                }
              ],
              "totalTime": "P3W"
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.wendigoadvisors.com/ITservices#webpage",
              "name": "IT Health Check Services",
              "description": "Comprehensive 6-point IT diagnostic for healthcare organizations",
              "url": "https://www.wendigoadvisors.com/ITservices",
              "inLanguage": "en-US",
              "isPartOf": { "@id": "https://www.wendigoadvisors.com/#webpage" },
              "about": {
                "@type": "Service",
                "name": "IT Health Check (CIO360)",
                "provider": {
                  "@type": "Person",
                  "name": "Brian Damiani"
                }
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.wendigoadvisors.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "IT Health Check",
                  "item": "https://www.wendigoadvisors.com/ITservices"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <ITHealthCheck />

      {/* AI Summary Block */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">In Simple Terms</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The <strong>IT Health Check</strong> is not a generic audit. It is a <strong>6-point diagnostic</strong> (Security, Compliance, Operations, Infrastructure, Applications, Cost) that gives Healthcare CEOs a clear, prioritized roadmap to fix risks and stabilize their platform.
          </p>
        </div>
      </section>

      <ITHealthContent />
      <What />
      <Week />
      <Deliverables />
      <HealthcareMarquee />
      <FromCeo />
      <Common />
      <CTA />

      <FAQSection
        title="Frequently Asked Questions About IT Health Checks for Health Plans"
        description="Common questions from health plan executives about our healthcare IT diagnostic services."
        items={[
          {
            question: "What does the IT health check for health plans cover?",
            answer: "Our 6-point CIO360 diagnostic evaluates Security, Compliance, Infrastructure, Applications, IT Operations/Processes, and Financial/Cost Analysis — specifically tailored to healthcare payer environments and regulatory requirements."
          },
          {
            question: "How long does the healthcare IT health check take?",
            answer: "The assessment typically takes 3 weeks: Week 1 for Discovery & Documentation, Week 2 for Diagnostic Interviews with key stakeholders, and Week 3 for Analysis, Scoring, and Roadmap delivery."
          },
          {
            question: "How disruptive is the IT assessment process?",
            answer: "We design our process to be low-friction. We conduct targeted interviews and request read-only access to documentation, minimizing impact on your daily operations. Most stakeholder interviews are 45–60 minutes."
          },
          {
            question: "Who should request an IT health check?",
            answer: "CEOs, CFOs, and board members of health plans who need an independent, objective view of their IT environment — especially during leadership transitions, before major platform migrations, or when IT costs and risks are unclear."
          },
          {
            question: "What happens after the IT health check is completed?",
            answer: "You receive an executive-ready IT maturity scorecard, prioritized remediation roadmap, and strategic recommendations. Many health plans then engage our CIO as a Service model or implement the CIO Operating System™ for ongoing governance."
          }
        ]}
      />

      <Footer />
    </main>
  )
}

export default ITServices
