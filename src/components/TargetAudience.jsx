import React from 'react';
import { Check, X } from 'lucide-react';

const TargetAudience = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
                    Is Wendigo Advisors Right for You?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Who This IS For */}
                    <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
                        <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                            <span className="bg-blue-600 text-white rounded-full p-1"><Check size={16} /></span>
                            Who This Is For
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Health Plans ($500M - $5B Revenue) needing strategic IT leadership.",
                                "CEOs frustrated by 'Black Box' IT departments and surprise costs.",
                                "Organizations preparing for major platform migrations (Facets, QNXT).",
                                "Companies recovering from a security incident or compliance audit failure."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-slate-700">
                                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Who This Is NOT For */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center gap-2">
                            <span className="bg-slate-400 text-white rounded-full p-1"><X size={16} /></span>
                            Who This Is NOT For
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Early-stage startups needing a hands-on coding CTO.",
                                "Organizations looking for low-cost offshore staff augmentation.",
                                "Hospital systems (Providers) focus - we specialize in Payer/Health Plans.",
                                "Companies seeking only hardware/software resale."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-slate-600">
                                    <X className="text-slate-400 flex-shrink-0 mt-1" size={18} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
