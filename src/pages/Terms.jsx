// src/pages/Terms.jsx
import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen px-6 md:px-20 py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold text-indigo-600">Terms of Service</h1>

        <p>
          Welcome to Botify! By using our website or services, you agree to comply with and be
          bound by the following terms and conditions. Please review them carefully.
        </p>

        <h2 className="text-2xl font-bold mt-8">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Botify, you agree to be legally bound by these terms. If you do not
          agree to these terms, please do not use our services.
        </p>

        <h2 className="text-2xl font-bold mt-8">2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of Botify's materials for personal,
          non-commercial use only. This is the grant of a license, not a transfer of title.
        </p>

        <h2 className="text-2xl font-bold mt-8">3. Disclaimer</h2>
        <p>
          The materials on Botify's website are provided “as is”. Botify makes no warranties,
          expressed or implied.
        </p>

        <h2 className="text-2xl font-bold mt-8">4. Limitations</h2>
        <p>
          In no event shall Botify be liable for any damages arising out of the use or inability to
          use the materials on its site.
        </p>

        <h2 className="text-2xl font-bold mt-8">5. Modifications</h2>
        <p>
          Botify may revise these terms of service at any time without notice. By using this
          platform, you agree to be bound by the current version.
        </p>

        <h2 className="text-2xl font-bold mt-8">6. Governing Law</h2>
        <p>
          Any claim relating to Botify shall be governed by the laws of India without regard to its
          conflict of law provisions.
        </p>
      </div>
    </div>
  );
};

export default Terms;
