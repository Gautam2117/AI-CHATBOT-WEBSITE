// src/components/CTASection.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden rounded-t-[28px] px-6 md:px-20 py-20 text-center text-white"
    >
      {/* Aurora gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-700 via-fuchsia-600 to-sky-600" />

      {/* Soft grid + noise */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-soft-light [background-image:linear-gradient(rgba(255,255,255,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.09)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[.12] bg-[url('https://www.transparenttextures.com/patterns/diagonal-noise.png')]" />

      {/* Floating glow blobs */}
      <div className="absolute -top-28 -left-28 -z-10 w-[38rem] h-[38rem] rounded-full bg-white/10 blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />
      <div className="absolute -bottom-24 left-1/3 -z-10 w-[28rem] h-[28rem] rounded-full bg-black/10 blur-3xl mix-blend-overlay animate-[pulse_12s_ease-in-out_infinite]" />

      {/* Sparkles (subtle) */}
      <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(2px_2px_at_20%_30%,rgba(255,255,255,0.6),transparent_60%),radial-gradient(2px_2px_at_80%_70%,rgba(255,255,255,0.5),transparent_60%),radial-gradient(3px_3px_at_60%_40%,rgba(255,255,255,0.35),transparent_60%)]" />

      <div className="mx-auto max-w-3xl relative">
        {/* Gradient border “chip” above title */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm">
          <span>🤖</span> AI Helpdesk · Sales & Support
        </span>

        <h2
          id="cta-title"
          className="mt-4 text-3xl md:text-5xl font-extrabold leading-[1.05]"
        >
          <span className="bg-gradient-to-r from-white via-indigo-100 to-emerald-100 bg-clip-text text-transparent">
            Ready to Revolutionize Your Customer Support?
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-white/90 text-lg md:text-xl">
          Start with{" "}
          <span className="font-bold">Botify</span>—launch a 24/7 AI agent that
          answers instantly, captures leads, and never sleeps.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="https://ai-chatbot-saas-eight.vercel.app/"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
            }}
            className="relative inline-flex items-center justify-center px-7 py-3 rounded-2xl font-semibold text-white shadow-xl transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70
                       bg-gradient-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-md border border-white/30"
          >
            <span className="relative z-10">🚀 Get Started for Free</span>
            {/* mouse-follow shimmer */}
            <span className="pointer-events-none absolute -inset-1 opacity-0 hover:opacity-100 transition-opacity duration-500 [background:radial-gradient(200px_200px_at_var(--x)_var(--y),rgba(255,255,255,.25),transparent_36%)] rounded-2xl" />
          </Link>

          <Link
            to="/pricing"
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold bg-white/10 hover:bg-white/15 border border-white/25 backdrop-blur-md text-white shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
          >
            View Pricing
          </Link>
        </div>

        {/* Trust mini-bar */}
        <div className="mt-8 text-xs text-white/80">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-emerald-300 animate-pulse" />
            No credit card required · Setup in minutes · Cancel anytime
          </span>
        </div>
      </div>

      {/* Local keyframes (no extra CSS files) */}
      <style>{`
        @keyframes pulse {
          0%,100% { transform: translateY(0) scale(1); }
          50%     { transform: translateY(10px) scale(1.04); }
        }
      `}</style>
    </section>
  );
}
