import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const BlogPost = ({ title, metaTitle, metaDescription, canonical, ogImage, publishDate, author, authorUrl, content, faqItems, relatedLinks }) => {
    const formattedDate = new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen bg-white font-sans">
            <Helmet>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="author" content={author} />
                <link rel="canonical" href={canonical} />

                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonical} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={ogImage || 'https://www.wendigoadvisors.com/card1.png'} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={canonical} />
                <meta property="twitter:title" content={metaTitle} />
                <meta property="twitter:description" content={metaDescription} />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": title,
                        "description": metaDescription,
                        "url": canonical,
                        "datePublished": publishDate,
                        "dateModified": publishDate,
                        "author": {
                            "@type": "Person",
                            "@id": "https://www.wendigoadvisors.com/about#brian-damiani",
                            "name": author,
                            "url": authorUrl || "https://www.wendigoadvisors.com/about",
                            "jobTitle": "Healthcare CIO Advisor",
                            "worksFor": {
                                "@type": "Organization",
                                "@id": "https://www.wendigoadvisors.com/#organization"
                            }
                        },
                        "publisher": {
                            "@type": "Organization",
                            "@id": "https://www.wendigoadvisors.com/#organization",
                            "name": "Wendigo Advisors",
                            "url": "https://www.wendigoadvisors.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.wendigoadvisors.com/logo.png"
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": canonical
                        },
                        "inLanguage": "en-US",
                        "knowsAbout": [
                            "Healthcare CIO Advisory",
                            "Health Plan IT Strategy",
                            "Payer IT Operations",
                            "CIO as a Service",
                            "IT Health Check for Health Plans"
                        ],
                        "about": {
                            "@type": "Thing",
                            "name": "Healthcare CIO Strategy"
                        }
                    })}
                </script>

                {faqItems && faqItems.length > 0 && (
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqItems.map(item => ({
                                "@type": "Question",
                                "name": item.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": item.answer
                                }
                            }))
                        })}
                    </script>
                )}

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.wendigoadvisors.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://www.wendigoadvisors.com/insights" },
                            { "@type": "ListItem", "position": 3, "name": title, "item": canonical }
                        ]
                    })}
                </script>
            </Helmet>

            {/* Navbar */}
            <div className="relative min-h-[120px] w-full bg-[#001225]">
                <Navbar />
            </div>

            {/* Article */}
            <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-20">
                {/* Meta Info */}
                <div className="mb-8">
                    <Link to="/insights" className="text-[#348DF0] hover:underline text-sm font-medium">← Back to Insights</Link>
                </div>

                <header className="mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        {title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>By <Link to="/about" className="text-[#348DF0] hover:underline font-medium">{author}</Link></span>
                        <span>•</span>
                        <time dateTime={publishDate}>{formattedDate}</time>
                    </div>
                </header>

                {/* Article Content */}
                <div className="prose prose-lg prose-slate max-w-none
          [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-12 [&_h2]:mb-6
          [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-4
          [&_p]:text-slate-700 [&_p]:leading-relaxed [&_p]:mb-5 [&_p]:text-lg
          [&_ul]:space-y-2 [&_ul]:mb-6 [&_li]:text-slate-700 [&_li]:text-lg
          [&_strong]:text-slate-900
          [&_a]:text-[#348DF0] [&_a]:hover:underline [&_a]:font-medium
          [&_blockquote]:border-l-4 [&_blockquote]:border-[#348DF0] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-slate-600
        ">
                    {content}
                </div>

                {/* Related Links */}
                {relatedLinks && relatedLinks.length > 0 && (
                    <div className="mt-16 p-8 bg-[#F8FAFC] rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Related Services</h3>
                        <div className="space-y-3">
                            {relatedLinks.map((link, i) => (
                                <Link key={i} to={link.url} className="block text-[#348DF0] hover:underline text-lg font-medium">
                                    {link.text} →
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>

            <CTA />
            <Footer />
        </div>
    );
};

export default BlogPost;
