// src/pages/PrivacyPolicy.jsx
import React, { useMemo } from "react";
import SeoHead from "../components/SeoHead";

const SECTIONS = [
  { id: "info", label: "1. Information We Collect" },
  { id: "use", label: "2. How We Use Information" },
  { id: "security", label: "3. Data Protection" },
  { id: "third-parties", label: "4. Third-Party Services" },
  { id: "contact", label: "5. Contact" },
];

export default function PrivacyPolicy() {
  // Tweak this whenever you update the policy
  const LAST_UPDATED = useMemo(() => "July 2025", []);

  return (
    <>
      <SeoHead
        title="Privacy Policy — Botify"
        description="Learn how Botify collects, uses, and protects your data. We take privacy seriously and follow industry-standard security practices."
      />

      <section className="relative min-h-screen pt-[92px] pb-16 px-6 md:px-16 xl:px-24 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300 overflow-hidden">
        {/* Ambient aurora backdrop */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.10),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.08),transparent_55%)]" />
          <div className="absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full bg-indigo-500/12 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute -bottom-20 right-0 w-[28rem] h-[28rem] rounded-full bg-pink-500/12 blur-3xl animate-[pulse_12s_ease-in-out_infinite_reverse]" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="inline-flex items-center gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md">
                🔒
              </span>
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Privacy Policy
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Last updated: {LAST_UPDATED}
                </p>
              </div>
            </div>

            {/* Intro / summary pill */}
            <p className="mt-4 max-w-3xl text-gray-700 dark:text-gray-300">
              At <strong>Botify</strong>, your privacy is critically important to us. This
              policy explains what we collect, how we use it, and the measures we
              take to protect your data.
            </p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6">
            {/* Main content */}
            <div className="space-y-6">
              <ArticleCard id="info" title="1. Information We Collect">
                <p>
                  We may collect personal information such as your name, email
                  address, and usage behavior when you register, interact with our
                  chatbot, or use our platform features.
                </p>
              </ArticleCard>

              <ArticleCard id="use" title="2. How We Use Information">
                <p>
                  Your data is used to operate and improve Botify services, enhance
                  user experience, send relevant updates, and maintain system
                  security.
                </p>
              </ArticleCard>

              <ArticleCard id="security" title="3. Data Protection">
                <p>
                  We implement industry-standard security controls and encryption to
                  help prevent unauthorized access, disclosure, or misuse of your
                  personal data.
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Transport-layer encryption (HTTPS/TLS)</li>
                  <li>Least-privilege access controls</li>
                  <li>Regular security reviews & monitoring</li>
                </ul>
              </ArticleCard>

              <ArticleCard id="third-parties" title="4. Third-Party Services">
                <p>
                  Botify may integrate third-party services such as analytics,
                  payment providers, or hosting platforms. Their handling of your
                  information is governed by their respective privacy policies.
                </p>
              </ArticleCard>

              <ArticleCard id="contact" title="5. Contact">
                <p>
                  Questions or concerns? Reach us at{" "}
                  <a
                    href="mailto:botify.assist@gmail.com"
                    className="text-indigo-600 dark:text-indigo-300 underline decoration-indigo-300/60 hover:decoration-indigo-500"
                  >
                    botify.assist@gmail.com
                  </a>
                  .
                </p>
              </ArticleCard>

              {/* Bottom helper */}
              <div className="rounded-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl border border-white/60 dark:border-white/10 p-4 text-sm text-gray-700 dark:text-gray-300">
                <strong>Note:</strong> This policy may change as we launch new
                features. We’ll update the “Last updated” date whenever changes
                occur.
              </div>
            </div>

            {/* Sticky in-page nav (desktop) */}
            <aside className="hidden xl:block">
              <nav className="sticky top-[92px] rounded-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 px-2">
                  On this page
                </p>
                <ul className="mt-2 space-y-1">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block px-3 py-2 rounded-lg text-sm text-gray-800 dark:text-gray-200 hover:bg-indigo-50/70 dark:hover:bg-white/5 transition"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-white/60 dark:border-white/10 pt-4">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="w-full px-3 py-2 text-sm rounded-lg bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600 text-white font-semibold shadow hover:shadow-lg transition"
                  >
                    Back to top
                  </button>
                </div>
              </nav>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

/* --------- Local UI helper --------- */
function ArticleCard({ id, title, children }) {
  return (
    <article
      id={id}
      className="rounded-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-xl p-6"
    >
      <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
        {title}
      </h2>
      <div className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </article>
  );
}
