// src/pages/Features.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoHead from "../components/SeoHead";

import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import UseCasesSection from "../components/UseCasesSection";
import CTASection from "../components/CTASection";

const SECTIONS = [
  { id: "core-features", label: "Features" },
  { id: "how-it-works", label: "How it works" },
  { id: "use-cases", label: "Use cases" },
  { id: "get-started", label: "Get started" },
];

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
