// src/pages/Terms.jsx
import React, { useMemo } from "react";
import SeoHead from "../components/SeoHead";

const SECTIONS = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "license", label: "2. Use License" },
  { id: "disclaimer", label: "3. Disclaimer" },
  { id: "limitations", label: "4. Limitations" },
  { id: "modifications", label: "5. Modifications" },
  { id: "law", label: "6. Governing Law" },
];

export default function Terms() {
  const LAST_UPDATED = useMemo(() => "July 2025", []);

  return (
    <>
      <SeoHead
        title="Terms of Service — Botify"
        description="Review the Terms of Service for using Botify. Learn about acceptable use, licenses, disclaimers, and governing law."
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
                📜
              </span>
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Terms of Service
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Last updated: {LAST_UPDATED}
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-gray-700 dark:text-gray-300">
              Welcome to <strong>Botify</strong>! By using our website or services, you
              agree to comply with and be bound by the following terms and conditions.
              Please review them carefully.
            </p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6">
            {/* Main content */}
            <div className="space-y-6">
              <ArticleCard id="acceptance" title="1. Acceptance of Terms">
                <p>
                  By accessing or using Botify, you agree to be legally bound by these
                  terms. If you do not agree with any part of the terms, please refrain
                  from using our services.
                </p>
              </ArticleCard>

              <ArticleCard id="license" title="2. Use License">
                <p>
                  Permission is granted to temporarily download one copy of Botify
                  materials for personal, non-commercial use only. This license does not
                  grant ownership or allow redistribution or commercial usage.
                </p>
              </ArticleCard>

              <ArticleCard id="disclaimer" title="3. Disclaimer">
                <p>
                  All materials on Botify’s website are provided “as is.” Botify makes no
                  warranties, either expressed or implied, and disclaims all other
                  warranties including merchantability or fitness for a particular
                  purpose.
                </p>
              </ArticleCard>

              <ArticleCard id="limitations" title="4. Limitations">
                <p>
                  In no event shall Botify or its suppliers be liable for any damages
                  arising from the use or inability to use the services or materials on
                  the website.
                </p>
              </ArticleCard>

              <ArticleCard id="modifications" title="5. Modifications">
                <p>
                  Botify reserves the right to update or revise these terms at any time
                  without prior notice. Continued use of the site means you accept the
                  current terms.
                </p>
              </ArticleCard>

              <ArticleCard id="law" title="6. Governing Law">
                <p>
                  These terms are governed by the laws of India, without regard to
                  conflict of law principles. Disputes arising from these terms will be
                  handled in Indian jurisdiction.
                </p>
              </ArticleCard>

              <div className="rounded-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl border border-white/60 dark:border-white/10 p-4 text-sm text-gray-700 dark:text-gray-300">
                <strong>Heads up:</strong> When we change these Terms, we’ll update the
                “Last updated” date above. Significant changes may be communicated via
                product notices or email.
              </div>
            </div>

            {/* Sticky in-page nav */}
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

/* ---- Local UI helper ---- */
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
