import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {question}
                </span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0 ml-4" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0 ml-4" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="pb-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQSection = ({ title, description, items }) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    {title && (
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 md:p-10 border border-slate-100 shadow-sm">
                    {items.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
