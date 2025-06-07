import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-6 md:px-20 py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
          Privacy Policy
        </h1>

        <p className="text-gray-700 dark:text-gray-300">
          At <strong>Botify</strong>, your privacy is critically important to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our platform.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-8">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            We may collect personal information such as your name, email address, and usage behavior when you register, interact with our chatbot, or use our platform features.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-8">
            2. How We Use Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Your data is used to operate and improve Botify services, enhance user experience, send relevant updates, and maintain system security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-8">
            3. Data Protection
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            We implement industry-standard security protocols and encryption to prevent unauthorized access, disclosure, or misuse of your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-8">
            4. Third-Party Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Botify may integrate third-party services like analytics, payment providers, and hosting platforms. Their use of your information is governed by their respective privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-8">
            5. Contact
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            If you have any questions or concerns regarding this policy, feel free to contact us at{" "}
            <a
              href="mailto:botify.assist@gmail.com"
              className="text-indigo-600 hover:underline dark:text-indigo-400"
            >
              botify.assist@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
