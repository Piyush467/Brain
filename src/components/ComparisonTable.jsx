import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Strategic Advisory vs. Interim Staffing
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Why health plans choose Wendigo's <span className="font-semibold text-slate-900">CIO as a Service</span> over traditional staffing agencies.
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">
                    <div className="grid grid-cols-3 bg-slate-900 text-white py-6 px-4 md:px-8">
                        <div className="col-span-1 font-bold text-lg md:text-xl flex items-center">Feature</div>
                        <div className="col-span-1 font-bold text-lg md:text-xl text-center text-blue-400">Wendigo Advisors</div>
                        <div className="col-span-1 font-bold text-lg md:text-xl text-center text-slate-400">Staffing Agencies</div>
                    </div>

                    {[
                        { feature: "Focus", wendigo: "Strategic Roadmap & Governance", other: "Task Execution & Maintenance" },
                        { feature: "Leadership Level", wendigo: "Executive / Board Level", other: "Mid-Management / Operational" },
                        { feature: "Outcome", wendigo: "Business Alignment & Value", other: "Hours Billed & Seat Filled" },
                        { feature: "Vendor Management", wendigo: "Aggressive Accountability", other: "Passive Coordination" },
                        { feature: "Cost Structure", wendigo: "Fractional / Value-Based", other: "Full-Time Headcount / Hourly" },
                    ].map((row, index) => (
                        <div key={index} className={`grid grid-cols-3 py-5 px-4 md:px-8 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                            <div className="col-span-1 font-medium text-slate-900 flex items-center pr-4">{row.feature}</div>
                            <div className="col-span-1 flex justify-center items-center text-center font-semibold text-blue-700 bg-blue-50/50 rounded-lg mx-2">
                                {row.wendigo}
                            </div>
                            <div className="col-span-1 flex justify-center items-center text-center text-slate-500 text-sm md:text-base">
                                {row.other}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
