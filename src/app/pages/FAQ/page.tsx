"use client";

import React, { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "We accept returns within 30 days of purchase. Items must be unused and in their original packaging.",
        },
        {
            question: "How can I track my order?",
            answer: "You can track your order using the tracking link provided in the confirmation email.",
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to select countries worldwide. Shipping fees and delivery times vary by location.",
        },
        {
            question: "Can I cancel or modify my order?",
            answer: "You can cancel or modify your order within 24 hours of placing it. After that, we may not be able to make changes.",
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact us at ha5755420@gmail.com or call us at 0311-1234567.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h1>
                <p className="text-lg text-gray-600 text-center mb-12">
                    Find answers to the most commonly asked questions below.
                </p>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full text-left"
                            >
                                <h2 className="text-xl font-bold text-gray-800">
                                    {faq.question}
                                </h2>
                                <span className="text-gray-500">
                                    {activeIndex === index ? "-" : "+"}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <p className="mt-4 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;