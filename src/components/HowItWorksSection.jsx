// src/components/HowItWorksSection.jsx
import React from "react";
import { Zap, Settings, Send } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Zap className="w-6 h-6" />,
    title: "Connect Botify to Your Platform",
    description:
      "Drop in a lightweight widget or use our developer-friendly API. Most teams go live in under a minute.",
  },
  {
    id: 2,
    icon: <Settings className="w-6 h-6" />,
    title: "Train with Your Knowledge",
    description:
      "Point Botify at your FAQs, docs, or paste responses. It learns instantly and improves with real conversations.",
  },
  {
    id: 3,
    icon: <Send className="w-6 h-6" />,
    title: "Deploy & Support Instantly",
    description:
      "Flip the switch and let Botify handle questions, capture leads, and route edge cases — 24/7, effortlessly.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="relative py-24 px-6 md:px-20"
      aria-labelledby="how-it-works-title"
    >
      {/* Soft aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.08),transparent_55%)]" />
        <div className="absolute -top-16 -left-16 w-[32rem] h-[32rem] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-20 right-0 w-[26rem] h-[26rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="how-it-works-title"
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            🚀 How <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">Botify</span> Works
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get from zero to live in minutes — no heavy setup, no code required.
            Let AI handle the busywork while your team focuses on growth.
          </p>
        </div>

        {/* Desktop: 3 columns with connector line. Mobile: vertical stepper */}
        <div className="relative">
          {/* Horizontal connector (desktop only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[34px] w-[72%] h-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500/90 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <article
                key={step.id}
                className="relative group rounded-3xl p-[1.3px] bg-gradient-to-br from-fuchsia-400/60 to-indigo-400/60 shadow-[0_18px_46px_rgba(2,6,23,0.12)]"
              >
                <div className="rounded-3xl h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/60 dark:border-white/10 p-6">
                  {/* Step badge */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-11 h-11 rounded-2xl grid place-items-center text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5 bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-sky-600">
                        {step.icon}
                      </div>
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-[2px] rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 border border-indigo-600/20">
                        {String(step.id).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                    {step.description}
                  </p>

                  {/* micro-CTA */}
                  <div className="mt-5">
                    <a
                      href={idx === 0 ? "/features" : idx === 1 ? "/faq" : "/pricing"}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 dark:text-indigo-300 hover:underline"
                    >
                      {idx === 0 && "View quick start"}
                      {idx === 1 && "See training tips"}
                      {idx === 2 && "Compare plans"}
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Time-to-value highlight */}
        <div className="mt-12 flex flex-col items-center">
          <div className="rounded-2xl px-4 py-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur border border-white/60 dark:border-white/10 text-xs text-gray-700 dark:text-gray-300">
            Average setup time:{" "}
            <span className="font-bold text-indigo-700 dark:text-indigo-300">under 60 seconds</span> ⚡
          </div>
        </div>
      </div>
    </section>
  );
}
