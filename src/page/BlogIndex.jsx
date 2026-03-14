import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { ArrowRight, Clock } from 'lucide-react';

const blogArticles = [
    {
        slug: 'what-is-healthcare-cio-advisory',
        title: 'What is a Healthcare CIO Advisory Firm?',
        excerpt: 'An authoritative guide defining the role of healthcare CIO advisory firms for health plans. Learn why payers use fractional CIO leadership.',
        readTime: '12 min read',
        date: '2025-02-18'
    },
    {
        slug: 'what-is-cio-as-a-service',
        title: 'What is CIO as a Service in Healthcare?',
        excerpt: 'Understand the benefits of fractional IT leadership, cost vs. value, and how it differs from staffing and traditional consulting.',
        readTime: '11 min read',
        date: '2025-02-18'
    },
    {
        slug: 'how-health-plans-use-it-health-checks',
        title: 'How Health Plans Use IT Health Checks to De-Risk Operations',
        excerpt: 'Why and how healthcare payer organizations use IT health checks to identify risks, optimize costs, and prepare for platform migrations.',
        readTime: '10 min read',
        date: '2025-02-18'
    },
    {
        slug: 'healthcare-cio-operating-model',
        title: 'A Guide to the Healthcare CIO Operating Model',
        excerpt: 'An authoritative explanation of healthcare IT operating models and the CIO Operating System™. Transform IT through structured governance.',
        readTime: '11 min read',
        date: '2025-02-18'
    },
    {
        slug: 'interim-cio-health-plans',
        title: 'When Health Plans Need an Interim CIO: Triggers and Strategy',
        excerpt: 'Learn when and why healthcare payer organizations should hire an interim CIO during leadership gaps and core platform migrations.',
        readTime: '10 min read',
        date: '2025-02-18'
    },
    {
        slug: 'healthcare-cio-consulting',
        title: 'Healthcare CIO Consulting: What Health Plans Need to Know in 2025',
        excerpt: 'Healthcare CIO consulting has become essential for payer organizations navigating complex IT challenges. Learn what to look for in a partner.',
        readTime: '8 min read',
        date: '2025-02-15'
    },
    {
        slug: 'cio-strategy-consulting',
        title: 'CIO Strategy Consulting & Interim CIO Services for Healthcare Organizations',
        excerpt: 'When health plans face IT leadership gaps, CIO strategy consulting and interim CIO services provide the executive-level guidance needed.',
        readTime: '9 min read',
        date: '2025-02-10'
    },
    {
        slug: 'cio-advisory-firm',
        title: 'Choosing the Right CIO Advisory Firm: A Guide for Health Plan Executives',
        excerpt: 'Not all CIO advisory firms understand healthcare payer environments. Learn what differentiates a specialized firm for health plans.',
        readTime: '8 min read',
        date: '2025-02-05'
    }
];

const BlogIndex = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Helmet>
                <title>Healthcare CIO Insights & Advisory Articles | Wendigo Advisors</title>
                <meta name="description" content="Expert insights on healthcare CIO consulting, CIO strategy, and IT leadership for health plans and payer organizations from Brian Damiani and Wendigo Advisors." />
                <link rel="canonical" href="https://www.wendigoadvisors.com/insights" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.wendigoadvisors.com/insights" />
                <meta property="og:title" content="Healthcare CIO Insights & Advisory Articles | Wendigo Advisors" />
                <meta property="og:description" content="Expert insights on healthcare CIO consulting and IT leadership for health plans." />
                <meta property="og:image" content="https://www.wendigoadvisors.com/card1.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Healthcare CIO Insights & Advisory Articles" />
                <meta property="twitter:description" content="Expert insights on healthcare CIO consulting and IT leadership for health plans." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Healthcare CIO Insights",
                        "description": "Expert advisory articles on healthcare CIO consulting, IT strategy, and CIO leadership for health plans",
                        "url": "https://www.wendigoadvisors.com/insights",
                        "provider": {
                            "@type": "Organization",
                            "name": "Wendigo Advisors"
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.wendigoadvisors.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://www.wendigoadvisors.com/insights" }
                        ]
                    })}
                </script>
            </Helmet>

            {/* Navbar */}
            <div className="relative min-h-[120px] w-full bg-[#001225]">
                <Navbar />
            </div>

            {/* Header */}
            <section className="py-16 md:py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <span className="inline-flex px-4 py-1.5 text-xs md:text-sm font-medium text-blue-500 bg-[#348DF01F] border border-[#348DF080] rounded-full mb-6">
                        Healthcare CIO Insights
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        Healthcare CIO Advisory Insights
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
                        Expert perspectives on <strong>healthcare CIO consulting</strong>, CIO strategy, and IT leadership for health plans and payer organizations — from <Link to="/about" className="text-[#348DF0] hover:underline">Brian Damiani</Link> at Wendigo Advisors.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogArticles.map((article, i) => (
                            <Link
                                key={i}
                                to={`/insights/${article.slug}`}
                                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                <div className="bg-gradient-to-br from-[#001224] to-[#0A2A4E] p-8 min-h-[140px] flex items-end">
                                    <h2 className="text-xl font-bold text-white leading-snug group-hover:text-[#348DF0] transition-colors">
                                        {article.title}
                                    </h2>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{article.excerpt}</p>
                                    <div className="flex items-center justify-between text-sm text-slate-400">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{article.readTime}</span>
                                        </div>
                                        <span className="text-[#348DF0] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Read <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default BlogIndex;
