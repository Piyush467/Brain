import React from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import FeaturedRes from '../components/resource2'
import Tools from '../components/resources1'
function Resources() {
  return (
    <div>
      <Helmet>
        <title>Healthcare CIO Resources & Tools | Wendigo Advisors</title>
        <meta name="description" content="Free resources, tools, and insights for Healthcare CIOs and IT leaders from Brian Damiani and Wendigo Advisors." />
        <meta name="keywords" content="healthcare CIO resources, IT leadership tools, Brian Damiani, healthcare technology insights, CIO best practices" />
        <meta name="author" content="Brian Damiani, Wendigo Advisors" />
        <link rel="canonical" href="https://www.wendigoadvisors.com/resources" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wendigoadvisors.com/resources" />
        <meta property="og:title" content="Healthcare CIO Resources & Tools | Wendigo Advisors" />
        <meta property="og:description" content="Free resources and insights for Healthcare CIOs from Brian Damiani" />
        <meta property="og:image" content="https://www.wendigoadvisors.com/card1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Healthcare CIO Resources & Tools" />
        <meta property="twitter:description" content="Free resources and insights for Healthcare CIOs from Brian Damiani" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Healthcare CIO Resources",
              "description": "Curated resources and tools for healthcare CIOs and IT leaders",
              "provider": {
                "@type": "Person",
                "name": "Brian Damiani",
                "jobTitle": "Healthcare CIO Advisor"
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
                  "name": "Resources",
                  "item": "https://www.wendigoadvisors.com/resources"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <Tools />
      <FeaturedRes />
      <CTA />
      <Footer />
    </div>
  )
}

export default Resources
