import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen px-6 md:px-20 py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
          Terms of Service
        </h1>

        <p className="text-gray-700 dark:text-gray-300">
          Welcome to <strong>Botify</strong>! By using our website or services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-8">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            By accessing or using Botify, you agree to be legally bound by these terms. If you do not agree with any part of the terms, please refrain from using our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-8">
            2. Use License
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Permission is granted to temporarily download one copy of Botify materials for personal, non-commercial use only. This license does not grant ownership or allow redistribution or commercial usage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-8">
            3. Disclaimer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            All materials on Botify’s website are provided “as is.” Botify makes no warranties, either expressed or implied, and disclaims all other warranties including merchantability or fitness for a particular purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-8">
            4. Limitations
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            In no event shall Botify or its suppliers be liable for any damages arising from the use or inability to use the services or materials on the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-8">
            5. Modifications
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Botify reserves the right to update or revise these terms at any time without prior notice. Continued use of the site means you accept the current terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-8">
            6. Governing Law
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            These terms are governed by the laws of India, without regard to conflict of law principles. Disputes arising from these terms will be handled in Indian jurisdiction.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
