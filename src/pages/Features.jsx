// src/pages/Features.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Minus, Crown } from "lucide-react";
import SeoHead from "../components/SeoHead";

import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import UseCasesSection from "../components/UseCasesSection";
import CTASection from "../components/CTASection";

const SECTIONS = [
  { id: "core-features", label: "Features" },
  { id: "how-it-works", label: "How it works" },
  { id: "use-cases", label: "Use cases" },
  { id: "compare", label: "Compare" },         // <-- added
  { id: "get-started", label: "Get started" },
];

/* ---------------------------- Compare Section ---------------------------- */
function CompareSection() {
  // Plans in display order
  const plans = [
    { id: "free",    name: "Free",    price: "₹0",      note: "Kick the tyres" },
    { id: "starter", name: "Starter", price: "₹1,599",  note: "For small teams" },
    { id: "growth",  name: "Growth",  price: "₹4,899",  note: "Most popular", popular: true },
    { id: "scale",   name: "Scale",   price: "₹12,399", note: "For scale-ups" },
  ];

  // Rows: strings show as text; true/false render as icons
  const rows = [
    { label: "Messages per month",                 values: ["1,000", "3,000", "15,000", "50,000"] },
    { label: "Remove Botify branding",            values: [false, true,  true,  true] },
    { label: "Integrations & workflows",          values: ["Basic", "Standard", "All", "Unlimited"] },
    { label: "Analytics",                          values: ["Basic", "Standard", "Advanced", "Advanced"] },
    { label: "White-label launcher",               values: [false, false, true,  true] },
    { label: "Priority support & SLA",            values: [false, false, "Priority", "Premium"] },
    { label: "Dedicated CSM & Slack channel",     values: [false, false, false, true] },
    { label: "API & Webhooks",                    values: [true,  true,  true,  true] },
    { label: "Multilingual AI",                   values: [true,  true,  true,  true] },
    { label: "GDPR-ready & role-based access",    values: [true,  true,  true,  true] },
  ];

  const cell = (v) => {
    if (v === true)  return <Check className="h-5 w-5 shrink-0" />;
    if (v === false) return <Minus className="h-5 w-5 shrink-0 opacity-60" />;
    return <span className="text-sm">{v}</span>;
  };

  return (
    <section id="compare" className="relative py-16 px-6 md:px-16 xl:px-24 overflow-hidden">
      {/* ambient aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.10),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.10),transparent_55%)]" />
        <div className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full bg-indigo-500/15 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute -bottom-24 -right-20 w-[30rem] h-[30rem] rounded-full bg-sky-400/14 blur-3xl animate-[pulse_12s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur border border-white/50 dark:border-white/10 text-xs font-semibold text-indigo-700 dark:text-indigo-200">
            <span>📊</span> Feature Comparison
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            See what you get at each tier
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Transparent differences. No surprises.
          </p>
        </div>

        {/* Glass table card */}
        <div className="rounded-3xl p-[1.2px] bg-gradient-to-br from-indigo-400/60 via-fuchsia-400/60 to-sky-400/60 shadow-[0_18px_48px_rgba(2,6,23,.12)]">
          <div className="rounded-3xl bg-white/85 dark:bg-gray-900/80 backdrop-blur-xl border border-white/60 dark:border-white/10 overflow-hidden">
            {/* Scroll container */}
            <div className="overflow-x-auto">
              <table className="min-w-[760px] w-full text-left">
                {/* Header */}
                <thead className="sticky top-0 z-10">
                  <tr className="bg-gradient-to-r from-white/80 via-white/70 to-white/80 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/80 backdrop-blur">
                    <th className="sticky left-0 z-20 bg-inherit px-4 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Feature
                    </th>
                    {plans.map((p, idx) => (
                      <th key={p.id} className="px-4 py-4">
                        <div
                          className={`relative rounded-2xl px-3 py-2 text-sm font-semibold
                            ${p.popular
                              ? "text-indigo-900 dark:text-indigo-200"
                              : "text-gray-700 dark:text-gray-200"}`}
                        >
                          <div className={`flex items-center gap-2`}>
                            <span className="text-base font-extrabold">{p.name}</span>
                            {p.popular && (
                              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-[2px] rounded-full bg-amber-400/20 text-amber-700 dark:text-amber-300 border border-amber-400/30">
                                <Crown size={12} /> Most popular
                              </span>
                            )}
                          </div>
                          <div className="text-xs opacity-80">{p.price}/mo</div>

                          {/* column glow for Growth */}
                          {p.popular && (
                            <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-amber-400/60 shadow-[0_0_40px_rgba(245,158,11,.35)]" />
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Body */}
                <tbody className="divide-y divide-white/60 dark:divide-white/10">
                  {rows.map((r, i) => (
                    <tr
                      key={r.label}
                      className={`group hover:bg-indigo-50/60 dark:hover:bg-white/5 transition-colors`}
                    >
                      {/* Sticky first column */}
                      <th className="sticky left-0 z-10 bg-inherit px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">
                        {r.label}
                      </th>

                      {r.values.map((v, j) => (
                        <td
                          key={j}
                          className={`px-4 py-3 text-gray-800 dark:text-gray-100
                            ${j === 2 ? "relative" : ""}`}
                        >
                          <div className="flex items-center">
                            <span
                              className={`inline-flex items-center justify-center ${
                                v === true
                                  ? "text-emerald-500"
                                  : v === false
                                  ? "text-gray-400"
                                  : "text-current"
                              }`}
                            >
                              {cell(v)}
                            </span>
                          </div>

                          {/* subtle column highlight on hover for Growth */}
                          {j === 2 && (
                            <span className="pointer-events-none absolute inset-y-0 -inset-x-2 opacity-0 group-hover:opacity-100 transition rounded-xl bg-amber-400/10" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table footer CTA */}
            <div className="p-4 sm:p-5 border-t border-white/60 dark:border-white/10 flex items-center justify-between flex-col sm:flex-row gap-3">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Yearly plans available with 2 months free on eligible tiers.
              </p>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-white text-sm font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
              >
                View detailed pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tiny CSS for nicer scroll edge fade */}
      <div className="pointer-events-none absolute inset-x-0 top-[176px] h-6 bg-[linear-gradient(to_bottom,rgba(255,255,255,.85),transparent)] dark:bg-[linear-gradient(to_bottom,rgba(17,24,39,.85),transparent)]" />
    </section>
  );
}

/* --------------------------------- Page --------------------------------- */
export default function Features() {
  const [active, setActive] = useState(SECTIONS[0].id);

  // simple scroll spy
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-52px 0px -60% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 68, behavior: "smooth" });
  };

  const title = useMemo(
    () => "Features — Botify AI Chatbot for Sales, Support & Lead Capture",
    []
  );

  return (
    <>
      <SeoHead
        title={title}
        description="Explore Botify’s AI features: instant replies, multilingual chat, analytics, no-code embed, and secure automation your team will love."
      />

      {/* Hero */}
      <section className="relative pt-[92px] pb-10 px-6 md:px-16 xl:px-24 overflow-hidden">
        {/* ambient aurora */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.12),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.10),transparent_55%)]" />
          <div className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full bg-indigo-500/15 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] rounded-full bg-pink-500/14 blur-3xl animate-[pulse_12s_ease-in-out_infinite_reverse]" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur border border-white/50 dark:border-white/10 text-xs font-semibold text-indigo-700 dark:text-indigo-200">
            <span>🤖</span> Botify Feature Suite
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
              automate support
            </span>{" "}
            and convert more.
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
            Drop-in widget, multilingual AI, analytics, and enterprise-grade security—without heavy setup.
          </p>

          {/* sticky in-page nav */}
          <div className="sticky top-[64px] z-30 mt-6 -mx-1 overflow-x-auto no-scrollbar">
            <div className="inline-flex gap-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl rounded-2xl p-2">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition ${
                    active === s.id
                      ? "text-white shadow-lg bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
                      : "text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sections with anchors */}
      <div className="space-y-0">
        <section id="core-features"><FeaturesSection /></section>
        <section id="how-it-works"><HowItWorksSection /></section>
        <section id="use-cases"><UseCasesSection /></section>

        {/* New Compare section */}
        <CompareSection />

        <section id="get-started"><CTASection /></section>
      </div>

      {/* tiny CSS */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}
