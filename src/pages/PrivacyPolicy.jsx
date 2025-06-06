// src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-6 md:px-20 py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold text-indigo-600">Privacy Policy</h1>
        <p>
          At Botify, your privacy is critically important to us. This Privacy Policy
          describes how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-bold mt-8">1. Information We Collect</h2>
        <p>
          We may collect personal information including your name, email address,
          and usage data when you use our platform or interact with our chatbot.
        </p>

        <h2 className="text-2xl font-bold mt-8">2. How We Use Information</h2>
        <p>
          We use this data to provide and improve our services, personalize user
          experience, and communicate important updates.
        </p>

        <h2 className="text-2xl font-bold mt-8">3. Data Protection</h2>
        <p>
          We implement industry-standard security measures to protect your data from
          unauthorized access, loss, or misuse.
        </p>

        <h2 className="text-2xl font-bold mt-8">4. Third-Party Services</h2>
        <p>
          Botify may use third-party tools like analytics, payment gateways, and
          hosting providers. These are governed by their own privacy policies.
        </p>

        <h2 className="text-2xl font-bold mt-8">5. Contact</h2>
        <p>
          For any privacy-related concerns, please email us at
          <a href="mailto:botify.assist@gmail.com" className="text-indigo-500 ml-1">botify.assist@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
