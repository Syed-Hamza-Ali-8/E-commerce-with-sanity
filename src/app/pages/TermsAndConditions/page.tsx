"use client";

import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Terms and Conditions</h1>
                <p className="text-lg text-gray-600 text-center mb-12">
                    These Terms and Conditions govern your use of our website and services. Please read them carefully before using our site.
                </p>

                {/* Content */}
                <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
                    {/* Section 1: Acceptance of Terms */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-600">
                            By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using our site.
                        </p>
                    </div>

                    {/* Section 2: Use of the Website */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use of the Website</h2>
                        <p className="text-gray-600">
                            You agree to use the website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use of the website. Prohibited activities include:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4">
                            <li>Unauthorized access to our systems or data</li>
                            <li>Distributing malware or engaging in hacking activities</li>
                            <li>Posting harmful, offensive, or misleading content</li>
                        </ul>
                    </div>

                    {/* Section 3: Intellectual Property */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Intellectual Property</h2>
                        <p className="text-gray-600">
                            All content, trademarks, logos, and intellectual property on this website are owned by us or licensed to us. You may not reproduce, distribute, or exploit any content without prior written permission.
                        </p>
                    </div>

                    {/* Section 4: Limitation of Liability */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Limitation of Liability</h2>
                        <p className="text-gray-600">
                            We are not responsible for any direct, indirect, incidental, or consequential damages arising from your use of the website or services, to the maximum extent permitted by law.
                        </p>
                    </div>

                    {/* Section 5: Third-Party Links */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Third-Party Links</h2>
                        <p className="text-gray-600">
                            Our website may contain links to third-party websites for your convenience. We are not responsible for the content, policies, or practices of these third-party sites.
                        </p>
                    </div>

                    {/* Section 6: Termination */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Termination</h2>
                        <p className="text-gray-600">
                            We reserve the right to terminate or suspend your access to our website without notice if you violate these Terms and Conditions or engage in unlawful behavior.
                        </p>
                    </div>

                    {/* Section 7: Governing Law */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Governing Law</h2>
                        <p className="text-gray-600">
                            These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes shall be resolved in the courts of [Your Jurisdiction].
                        </p>
                    </div>

                    {/* Section 8: Changes to Terms */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Changes to Terms</h2>
                        <p className="text-gray-600">
                            We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page, and your continued use of the website constitutes acceptance of the revised terms.
                        </p>
                    </div>

                    {/* Section 9: Contact Us */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Contact Us</h2>
                        <p className="text-gray-600">
                            If you have any questions or concerns about these Terms and Conditions, please contact us at:
                        </p>
                        <ul className="mt-4 text-gray-600">
                            <li>Email: ha5755420@gmail.com</li>
                            <li>Phone: +92311-1234567</li>
                            <li>Address: Karachi, Pakistan</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;