// src/components/StatsSection.jsx
import React from "react";
import CountUp from "react-countup";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { label: "Messages We Aim to Handle", endValue: 1_200_000, suffix: "+" },
  { label: "Target Active Users", endValue: 8_500, suffix: "+" },
  { label: "Productive Hours to Save", endValue: 370_000, suffix: "+" },
];

// Pretty K/M/B formatting for the animated number
function formatAbbrev(value) {
  const abs = Math.abs(value);
  const fmt = (n) => {
    const s = n.toFixed(1);
    return s.endsWith(".0") ? s.slice(0, -2) : s;
  };
  if (abs >= 1e9) return `${fmt(value / 1e9)}B`;
  if (abs >= 1e6) return `${fmt(value / 1e6)}M`;
  if (abs >= 1e3) return `${fmt(value / 1e3)}K`;
  return `${Math.round(value)}`;
}

const StatCard = ({ label, endValue, suffix }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 20, scale: reduceMotion ? 1 : 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-40px" }}
      className="rounded-3xl p-[1.5px] bg-gradient-to-br from-fuchsia-400/60 to-indigo-400/60 shadow-xl"
    >
      <div className="h-full rounded-3xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl border border-white/60 dark:border-white/10 p-8 text-center">
        <p
          className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600 bg-clip-text text-transparent tracking-tight"
          aria-label={`${label}: ${endValue.toLocaleString()}${suffix || ""}`}
        >
          <CountUp
            end={endValue}
            duration={1.8}
            formattingFn={formatAbbrev}
            enableScrollSpy
            scrollSpyOnce
          />
          {suffix}
        </p>
        <p className="text-gray-800 dark:text-gray-200 font-medium text-base">{label}</p>
      </div>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="relative py-20 px-6 md:px-20">
      {/* Aurora backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.08),transparent_55%)]" />
        <div className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full bg-indigo-500/15 blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 -right-16 w-[28rem] h-[28rem] rounded-full bg-pink-500/15 blur-3xl animate-[pulse_11s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur border border-white/50 dark:border-white/10 text-xs font-semibold text-indigo-700 dark:text-indigo-200">
          📈 Momentum
        </span>
        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Our Vision in Numbers
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Botify is on a mission to empower businesses with intelligent, 24/7 automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
