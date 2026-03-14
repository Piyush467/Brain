import React from 'react'
import { Helmet } from 'react-helmet-async'
import About1 from '../components/About1'
import About2 from '../components/About2'
import About3 from '../components/About3'
import About4 from '../components/About4'
import About5 from '../components/About5'
import About6 from '../components/About6'
import BrianAuthority from '../components/BrianAuthority'
import Footer from '../components/Footer'
import How from '../components/How'
import CTA from '../components/CTA'
import HealthcareMarquee from '../components/HealthcareMarquee'
import EntityRegistry from '../components/EntityRegistry'

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Brian Damiani — Healthcare CIO Advisor & Payer IT Strategy Expert | Wendigo Advisors</title>
        <meta name="description" content="Meet Brian Damiani, Healthcare CIO Advisor and Founder of Wendigo Advisors. 25+ years as a health plan CIO and IT leadership expert helping payer organizations with strategic IT guidance, CIO as a service, and digital transformation." />
        <link rel="canonical" href="https://www.wendigoadvisors.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.wendigoadvisors.com/about" />
        <meta property="og:title" content="About Brian Damiani - Healthcare CIO Advisor | Wendigo Advisors" />
        <meta property="og:description" content="Meet Brian Damiani, Healthcare CIO Advisor with 25+ years helping health plans with IT strategy and leadership." />
        <meta property="og:image" content="https://www.wendigoadvisors.com/man.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wendigoadvisors.com/about" />
        <meta property="twitter:title" content="About Brian Damiani - Healthcare CIO Advisor | Wendigo Advisors" />
        <meta property="twitter:description" content="Meet Brian Damiani, Healthcare CIO Advisor with 25+ years helping health plans with IT strategy and leadership." />
        <meta property="twitter:image" content="https://www.wendigoadvisors.com/man.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.wendigoadvisors.com/about#brian-damiani",
              "name": "Brian Damiani",
              "jobTitle": "Healthcare CIO Advisor & Founder",
              "description": "Healthcare CIO Advisor with 25+ years of experience in healthcare IT strategy, leadership, and digital transformation for health plans and payer organizations.",
              "url": "https://www.wendigoadvisors.com/about",
              "image": "https://www.wendigoadvisors.com/man.png",
              "worksFor": {
                "@type": "Organization",
                "name": "Wendigo Advisors",
                "url": "https://www.wendigoadvisors.com"
              },
              "knowsAbout": [
                "Healthcare CIO Strategy",
                "Healthcare IT Leadership",
                "CIO as a Service",
                "Fractional CIO Services",
                "Health Plan IT Strategy",
                "Payer Technology Leadership",
                "Healthcare Digital Transformation",
                "IT Health Checks",
                "CIO Operating System",
                "Healthcare IT Governance"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/brian-damiani"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.wendigoadvisors.com/about#webpage",
              "name": "About Brian Damiani - Healthcare CIO Advisor",
              "description": "Learn about Brian Damiani, founder of Wendigo Advisors and healthcare IT strategy expert.",
              "url": "https://www.wendigoadvisors.com/about",
              "inLanguage": "en-US",
              "isPartOf": { "@id": "https://www.wendigoadvisors.com/#webpage" },
              "mainEntity": {
                "@type": "Person",
                "@id": "https://www.wendigoadvisors.com/about#brian-damiani"
              }
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
                "name": "About Brian Damiani",
                "item": "https://www.wendigoadvisors.com/about"
              }]
            }
          `}
        </script>
      </Helmet>
      <About1 />
      <About2 />
      <About3 />
      <EntityRegistry type="person" />
      <BrianAuthority />
      {/* <AboutWendigo /> */}
      <How />
      <About4 />
      <About5 />
      <HealthcareMarquee />
      <CTA />
      <Footer />
    </div>
  )
}

export default About;
