import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
import Problems from "../components/Problems";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import Why from "../components/Why";
import AboutWendigo from "../components/AboutWendigo";
import CEOPerspective from "../components/CEOPerspective";
import ExposureCTA from "../components/ExposureCTA";
import Footer from "../components/Footer";
import EntityRegistry from '../components/EntityRegistry';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "test") {
      const el = document.getElementById("test");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>Healthcare CIO Advisory Services | Wendigo Advisors</title>
        <meta name="description" content="Wendigo Advisors is a premier firm providing healthcare CIO advisory services, health plan CIO consulting, and CIO advisory for health plans." />
        <link rel="canonical" href="https://www.wendigoadvisors.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wendigoadvisors.com/" />
        <meta property="og:title" content="Healthcare CIO Advisory Services | Wendigo Advisors" />
        <meta property="og:description" content="Dedicated healthcare CIO advisory for health plans. CIO as a service, IT health checks, and IT operating models for payers." />
        <meta property="og:image" content="https://www.wendigoadvisors.com/card1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wendigoadvisors.com/" />
        <meta property="twitter:title" content="Healthcare CIO Advisory Services | Wendigo Advisors" />
        <meta property="twitter:description" content="Dedicated healthcare CIO advisory for health plans. Specialized IT leadership for payer organizations." />
        <meta property="twitter:image" content="https://www.wendigoadvisors.com/card1.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.wendigoadvisors.com/#website",
                  "url": "https://www.wendigoadvisors.com",
                  "name": "Wendigo Advisors",
                  "publisher": { "@id": "https://www.wendigoadvisors.com/#organization" }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.wendigoadvisors.com/#webpage",
                  "url": "https://www.wendigoadvisors.com",
                  "name": "Healthcare CIO Advisory Services | Wendigo Advisors",
                  "isPartOf": { "@id": "https://www.wendigoadvisors.com/#website" },
                  "about": { "@id": "https://www.wendigoadvisors.com/#organization" },
                  "description": "Wendigo Advisors is the premier Healthcare CIO Advisor for Health Plans. We provide CIO as a Service, IT Health Checks, and the CIO Operating System™.",
                  "hasPart": [
                    { "@id": "https://www.wendigoadvisors.com/healthcare#webpage" },
                    { "@id": "https://www.wendigoadvisors.com/ITservices#webpage" },
                    { "@id": "https://www.wendigoadvisors.com/cio-operating#webpage" },
                    { "@id": "https://www.wendigoadvisors.com/about#webpage" },
                    { "@id": "https://www.wendigoadvisors.com/insights#webpage" },
                    { "@id": "https://www.wendigoadvisors.com/pricing#webpage" },
                    { "@id": "https://www.wendigoadvisors.com/resources#webpage" }
                  ]
                },
                {
                  "@type": "ItemList",
                  "@id": "https://www.wendigoadvisors.com/#sitelinks",
                  "name": "Main Navigation",
                  "itemListElement": [
                    {
                      "@type": "SiteNavigationElement",
                      "position": 1,
                      "name": "CIO as a Service",
                      "url": "https://www.wendigoadvisors.com/healthcare"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 2,
                      "name": "IT Health Check",
                      "url": "https://www.wendigoadvisors.com/ITservices"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 3,
                      "name": "CIO Operating System",
                      "url": "https://www.wendigoadvisors.com/cio-operating"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 4,
                      "name": "Insights & Blog",
                      "url": "https://www.wendigoadvisors.com/insights"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 5,
                      "name": "About Brian Damiani",
                      "url": "https://www.wendigoadvisors.com/about"
                    }
                  ]
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <Hero />
      <HomeContent />
      <EntityRegistry type="organization" />
      <Problems />
      <Services />
      <Pricing />
      <Process />
      <Why />
      <AboutWendigo />

      <div id="test">
        <CEOPerspective />
      </div>

      <ExposureCTA />
      <Footer />
    </div>
  );
};

export default Home;
