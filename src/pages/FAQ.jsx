// src/pages/FAQ.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const RAW_FAQS = [
  {
    q: "What is Botify?",
    a: "Botify is an AI-powered chatbot platform that helps businesses automate customer support, capture leads, and scale engagement effortlessly.",
  },
  {
    q: "Is there a free plan available?",
    a: "Yes! Botify offers a free plan with 2,000 tokens per day, perfect for small teams or testing out the platform.",
  },
  {
    q: "Can I integrate Botify with my website?",
    a: "Absolutely. You can integrate using our lightweight JavaScript widget or developer-friendly API for full customization.",
  },
  {
    q: "Does Botify support multi-language conversations?",
    a: "Yes, Botify supports multi-language input and output, helping you communicate with users globally.",
  },
  {
    q: "Can I train the bot with my own data?",
    a: "Yes, you can upload your FAQs, documents, or custom knowledge base and Botify will learn from them in real-time.",
  },
  {
    q: "How customizable is the chatbot widget?",
    a: "You can fully customize the look, feel, and behavior of the Botify widget, including colors, icon, greeting text, and more.",
  },
  {
    q: "Is Botify secure and GDPR compliant?",
    a: "Yes. Botify follows industry-standard security practices and is compliant with GDPR and other major data protection regulations.",
  },
  {
    q: "Can my team collaborate inside Botify?",
    a: "Yes. You can invite teammates, assign roles, and manage bot responses collaboratively via the Botify dashboard.",
  },
  {
    q: "Does Botify provide analytics?",
    a: "Absolutely. Our dashboard gives you real-time insights, message volumes, user activity, satisfaction scores, and more.",
  },
  {
    q: "What support options are available?",
    a: "We offer email and live chat support for all plans. Pro and Unlimited users also get dedicated onboarding assistance.",
  },
];

/* ---------- utils ---------- */
const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightHTML = (text, q) => {
  if (!q) return text;
  try {
    const re = new RegExp(`(${escapeRegExp(q)})`, "ig");
    return text.replace(
      re,
      `<mark class="bg-yellow-200/70 dark:bg-yellow-300/30 rounded px-1">$1</mark>`
    );
  } catch {
    return text;
  }
};

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [expandAll, setExpandAll] = useState(false);
  const [reseed, setReseed] = useState(0); // force re-mount disclosures to update defaultOpen
  const searchRef = useRef(null);

  // Press "/" to focus search
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Build enriched FAQs with ids
  const faqs = useMemo(
    () =>
      RAW_FAQS.map((f) => ({
        ...f,
        id: slugify(f.q),
      })),
    []
  );

  // Filter
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      ({ q: Q, a: A }) =>
        Q.toLowerCase().includes(q) || A.toLowerCase().includes(q)
    );
  }, [faqs, query]);

  // Deep-link opener (#question-slug)
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace("#", ""));
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      // expand all once so the targeted item is open
      setExpandAll(true);
      setReseed((x) => x + 1);
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    }
  }, []);

  const copyLink = (id) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard?.writeText(url);
  };

  const onToggleAll = () => {
    setExpandAll((s) => !s);
    setReseed((x) => x + 1);
  };

  // JSON-LD for FAQ rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="relative min-h-screen px-6 md:px-20 pt-24 pb-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Ambient brand aura */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.08),transparent_55%)]" />
        <div className="absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full bg-indigo-500/15 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute -bottom-24 right-0 w-[28rem] h-[28rem] rounded-full bg-sky-400/15 blur-3xl animate-[pulse_12s_ease-in-out_infinite_reverse]" />
      </div>

      {/* SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur border border-white/50 dark:border-white/10 text-xs font-semibold text-indigo-700 dark:text-indigo-200">
          <span>🤖</span> Botify Knowledge Base
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Quick answers to everything about Botify. Press <kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-800 text-xs">/</kbd> to search.
        </p>
      </div>

      {/* Tools: search + actions */}
      <div className="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: pricing, integrations, multilingual, security…"
            className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white/85 dark:bg-gray-900/70 backdrop-blur px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-indigo-500/40"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm px-2 py-1"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <button
          onClick={onToggleAll}
          className="whitespace-nowrap rounded-xl px-4 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
        >
          {expandAll ? "Collapse all" : "Expand all"}
        </button>
      </div>

      {/* Results count */}
      <div className="max-w-3xl mx-auto mt-3 text-xs text-gray-500 dark:text-gray-400">
        {filtered.length} result{filtered.length !== 1 ? "s" : ""} {query ? `for “${query}”` : ""}
      </div>

      {/* List */}
      <div className="max-w-3xl mx-auto mt-6 space-y-3">
        {filtered.map((faq, idx) => {
          const id = faq.id;
          const qHTML = highlightHTML(faq.q, query);
          const aHTML = highlightHTML(faq.a, query);

          return (
            <Disclosure key={`${reseed}-${id}-${idx}`} defaultOpen={expandAll}>
              {({ open }) => (
                <div
                  id={id}
                  className="rounded-2xl border border-white/60 dark:border-white/10 bg-white/85 dark:bg-gray-900/70 backdrop-blur-xl shadow-[0_8px_28px_rgba(2,6,23,.08)] transition hover:shadow-[0_12px_34px_rgba(2,6,23,.12)]"
                >
                  <Disclosure.Button
                    className="w-full flex items-center justify-between gap-3 px-4 md:px-5 py-3.5 text-left"
                    aria-controls={`${id}-panel`}
                  >
                    <div
                      className="font-semibold text-indigo-900 dark:text-indigo-200"
                      dangerouslySetInnerHTML={{ __html: qHTML }}
                    />
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyLink(id);
                        }}
                        title="Copy link"
                        className="hidden sm:inline-flex text-xs px-2 py-1 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60"
                      >
                        Link
                      </button>
                      <ChevronDownIcon
                        className={`w-5 h-5 text-indigo-500 dark:text-indigo-300 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </div>
                  </Disclosure.Button>

                  <Disclosure.Panel
                    id={`${id}-panel`}
                    className="px-4 md:px-5 pb-4 text-sm text-gray-700 dark:text-gray-300"
                    static={false}
                  >
                    <div dangerouslySetInnerHTML={{ __html: aHTML }} />
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          );
        })}
      </div>

      {/* Didn’t find answer */}
      <div className="max-w-3xl mx-auto mt-10">
        <div className="rounded-[22px] p-[1.2px] bg-gradient-to-r from-indigo-400/60 via-fuchsia-400/60 to-sky-400/60">
          <div className="rounded-[20px] bg-white/85 dark:bg-gray-900/70 backdrop-blur-xl border border-white/60 dark:border-white/10 p-5 flex items-center justify-between gap-4">
            <div className="text-sm md:text-base">
              <div className="font-semibold text-gray-900 dark:text-white">Still stuck?</div>
              <div className="text-gray-600 dark:text-gray-300">
                Ask us anything—real humans reply under 24 hours.
              </div>
            </div>
            <a
              href="/contact"
              className="whitespace-nowrap rounded-xl px-4 py-2.5 font-semibold text-white shadow-lg hover:shadow-xl transition bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
