import React from 'react'
import { Helmet } from 'react-helmet-async'

import Footer from '../components/Footer'
// import Pricing1 from '../components/pricing1'
import Pricing2 from '../components/pricing2'
import Pricing3 from '../components/pricing3'
import Pricing4 from '../components/pricing4'
import Pricing5 from '../components/pricing5'
import Pricing from "../components/Pricing";
// import Pricing6 from '../components/pricing6'
 import AdvisoryPackages from "../components/AdvisoryPackages";


const About = () => {
  return (
    <div>
      <Helmet>
        <title>Pricing & Packages - Healthcare CIO Advisory | Wendigo Advisors</title>
        <meta name="description" content="Transparent pricing for Healthcare CIO Advisory services by Brian Damiani. CIO as a Service, IT Health Checks, and CIO Operating System implementation packages." />
        <meta name="keywords" content="healthcare CIO pricing, Brian Damiani, Wendigo Advisors, CIO as a service cost, healthcare IT consulting rates, fractional CIO pricing" />
        <meta name="author" content="Brian Damiani, Wendigo Advisors" />
        <link rel="canonical" href="https://www.wendigoadvisors.com/pricing" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wendigoadvisors.com/pricing" />
        <meta property="og:title" content="Pricing & Packages - Healthcare CIO Advisory | Wendigo Advisors" />
        <meta property="og:description" content="Transparent pricing for Healthcare CIO Advisory services by Brian Damiani." />
        <meta property="og:image" content="https://www.wendigoadvisors.com/card1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wendigoadvisors.com/pricing" />
        <meta property="twitter:title" content="Pricing & Packages - Healthcare CIO Advisory | Wendigo Advisors" />
        <meta property="twitter:description" content="Transparent pricing for Healthcare CIO Advisory services by Brian Damiani." />
        <meta property="twitter:image" content="https://www.wendigoadvisors.com/card1.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.wendigoadvisors.com/pricing#webpage",
              "name": "Pricing - Wendigo Advisors",
              "description": "Healthcare CIO Advisory pricing and service packages",
              "url": "https://www.wendigoadvisors.com/pricing",
              "inLanguage": "en-US",
              "isPartOf": { "@id": "https://www.wendigoadvisors.com/#webpage" },
              "provider": {
                "@type": "Organization",
                "name": "Wendigo Advisors",
                "founder": {
                  "@type": "Person",
                  "name": "Brian Damiani",
                  "jobTitle": "Healthcare CIO Advisor & Founder"
                }
              }
            }
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
                  "name": "Pricing",
                  "item": "https://www.wendigoadvisors.com/pricing"
                }
              ]
            }
          `}
        </script>
      </Helmet>
     
      <AdvisoryPackages/>
      {/* <Pricing/> */}
      <Pricing2 />
      <Pricing3 />
      <Pricing4 />
      <Pricing5 />
      {/* <Pricing6/> */}
      <Footer />
    </div>
  )
}

export default About;
