import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleTestimonialsClick = () => {
    navigate("/", { state: { scrollTo: "test" } });
  };

  return (
    <footer
      className="text-slate-300 py-10 font-sans"
      style={{
        background: "linear-gradient(180deg, #001325 0%, #00050B 100%)",
      }}
    >
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                "@id": "https://www.wendigoadvisors.com/#organization",
                "name": "Wendigo Advisors",
                "alternateName": "Wendigo Advisors - Healthcare CIO Advisory",
                "description": "Wendigo Advisors is a specialized healthcare CIO advisory firm serving health plans and payer organizations. We provide fractional CIO leadership, executive IT strategy, and healthcare-specific IT health checks to drive digital transformation and core platform stability.",
                "url": "https://www.wendigoadvisors.com",
                "logo": {
                  "@type": "ImageObject",
                  "@id": "https://www.wendigoadvisors.com/#logo",
                  "url": "https://www.wendigoadvisors.com/logo.png"
                },
                "image": "https://www.wendigoadvisors.com/logo.png",
                "priceRange": "$$$",
                "founder": {
                  "@type": "Person",
                  "@id": "https://www.wendigoadvisors.com/about#brian-damiani"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Business Inquiries",
                  "url": "https://calendly.com/brian_damiani/working-session-30-min",
                  "availableLanguage": "English"
                },
                "areaServed": {
                  "@type": "Place",
                  "name": "United States"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "US"
                },
                "knowsAbout": [
                  "healthcare CIO advisory services",
                  "health plan CIO consulting",
                  "CIO advisory for health plans",
                  "CIO as a service for health plans",
                  "IT health check for health plans",
                  "healthcare IT health check service",
                  "CIO operating model for healthcare",
                  "CIO as operating system"
                ],
                "serviceType": [
                  "healthcare CIO advisory services",
                  "health plan CIO consulting",
                  "CIO advisory for health plans",
                  "CIO as a service for health plans",
                  "IT health check for health plans",
                  "healthcare IT health check service",
                  "CIO operating model for healthcare",
                  "CIO as operating system"
                ],
                "sameAs": [
                  "https://www.linkedin.com/company/wendigo-advisors/"
                ]
              },
              {
                "@type": "Person",
                "@id": "https://www.wendigoadvisors.com/about#brian-damiani",
                "name": "Brian Damiani",
                "jobTitle": "Healthcare CIO Advisor & Founder",
                "description": "Brian Damiani is a veteran Healthcare CIO Advisor and Payer IT Strategy expert with 25+ years experience leading IT transformations for health plans and payer organizations.",
                "url": "https://www.wendigoadvisors.com/about",
                "sameAs": [
                  "https://www.linkedin.com/in/brian-damiani"
                ],
                "worksFor": { "@id": "https://www.wendigoadvisors.com/#organization" },
                "knowsAbout": [
                  "healthcare CIO advisory services",
                  "health plan CIO consulting",
                  "CIO advisory for health plans",
                  "CIO as a service for health plans",
                  "IT health check for health plans",
                  "healthcare IT health check service",
                  "CIO operating model for healthcare",
                  "CIO as operating system"
                ]
              }
            ]
          }
        `}
      </script>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* --- TOP SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 items-start">

          {/* BRAND */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Wendigo Advisors - Healthcare CIO Advisory by Brian Damiani"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-[16px] leading-relaxed text-[#FFFFFFCC] max-w-xs mb-8">
              Fractional CIO Services & Strategic IT Advisory for Healthcare Organizations
            </p>

            <a
              href="https://www.linkedin.com/company/wendigo-advisors/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-slate-600 rounded hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-3 lg:ml-auto">
            <h3 className="text-[14px] font-semibold tracking-widest text-white uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              <li><a href="https://calendly.com/brian_damiani/working-session-30-min" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Free Working Session</a></li>
              <li><a href="/ITservices" className="hover:text-blue-400">IT Health Check Services</a></li>
              <li><a href="/cio-operating" className="hover:text-blue-400">CIO Operating System</a></li>
              <li><a href="/healthcare" className="hover:text-blue-400">CIO as a Service for Health Plans</a></li>

            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-3 lg:ml-auto">
            <h3 className="text-[14px] font-semibold tracking-widest text-white uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/services" className="hover:text-blue-400">Services</a></li>

              {/* ✅ FIXED Testimonials */}
              <li>
                <button
                  onClick={handleTestimonialsClick}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Testimonials
                </button>
              </li>

              <li><a href="/resources" className="hover:text-blue-400">Resources</a></li>
              <li><a href="/insights" className="hover:text-blue-400">Insights</a></li>
              <li><a href="https://yourhealthcarecio.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Blogs</a></li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM --- */}
        <div className="border-t border-[#D0D5DD1A] pt-8 text-sm text-[#71717A]">
          © Copyright 2026. All Rights Reserved by Wendigo Advisors.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
