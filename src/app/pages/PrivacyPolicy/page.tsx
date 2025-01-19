"use client";

import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Privacy Policy</h1>
                <p className="text-lg text-gray-600 text-center mb-12">
                    Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
                </p>

                {/* Content */}
                <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
                    {/* Section 1: Information Collection */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
                        <p className="text-gray-600">
                            We may collect the following types of information:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4">
                            <li>Personal details (e.g., name, email address, phone number)</li>
                            <li>Payment information (e.g., credit card details)</li>
                            <li>Browsing behavior and preferences</li>
                            <li>Device and IP address information</li>
                        </ul>
                    </div>

                    {/* Section 2: Use of Information */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
                        <p className="text-gray-600">
                            We use your information to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4">
                            <li>Provide and manage our services</li>
                            <li>Process transactions securely</li>
                            <li>Enhance user experience</li>
                            <li>Send updates, promotions, and notifications</li>
                        </ul>
                    </div>

                    {/* Section 3: Information Sharing */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing</h2>
                        <p className="text-gray-600">
                            We do not sell, trade, or rent your personal information to third parties. However, we may share information with:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4">
                            <li>Trusted service providers for business operations</li>
                            <li>Legal authorities if required by law</li>
                        </ul>
                    </div>

                    {/* Section 4: Data Security */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
                        <p className="text-gray-600">
                            We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </div>

                    {/* Section 5: Cookies */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookies</h2>
                        <p className="text-gray-600">
                            We use cookies to enhance your browsing experience and analyze website traffic. You can manage your cookie preferences in your browser settings.
                        </p>
                    </div>

                    {/* Section 6: Changes to This Policy */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Changes to This Policy</h2>
                        <p className="text-gray-600">
                            We may update this Privacy Policy periodically. We encourage you to review it regularly to stay informed about how we are protecting your information.
                        </p>
                    </div>

                    {/* Section 7: Contact Us */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact Us</h2>
                        <p className="text-gray-600">
                            If you have any questions about this Privacy Policy or how your information is handled, please contact us at:
                        </p>
                        <ul className="mt-4 text-gray-600">
                            <li>Email: ha5755420@gmail.com </li>
                            <li>Phone: +92311-1234567</li>
                            <li>Address: Karachi, Pakistan</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;