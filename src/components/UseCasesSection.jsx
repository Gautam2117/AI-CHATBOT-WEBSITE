// src/components/UseCasesSection.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Headphones, Clock } from "lucide-react";

const useCases = [
  {
    title: "E-commerce Support",
    description:
      "Automate customer service, returns, and order inquiries to reduce load on human agents.",
    icon: Briefcase,
  },
  {
    title: "24/7 Lead Capture",
    description:
      "Qualify leads instantly by engaging visitors outside of business hours with smart prompts.",
    icon: Clock,
  },
  {
    title: "IT Helpdesk",
    description:
      "Resolve internal employee queries using an AI bot trained on company FAQs.",
    icon: Headphones,
  },
];

export default function UseCasesSection() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: (i = 1) => ({
      opacity: 1,
      transition: prefersReduced
        ? { duration: 0 }
        : { staggerChildren: 0.12, delayChildren: 0.08 * i },
    }),
  };

  const card = {
    hidden: { opacity: 0, y: 22, scale: 0.985, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: prefersReduced
        ? { duration: 0 }
        : { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative py-20 px-6 md:px-20 overflow-hidden transition-colors duration-300
                 bg-gradient-to-br from-white via-indigo-50 to-indigo-100
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      aria-labelledby="usecases-heading"
    >
      {/* Ambient aurora + soft blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.10),transparent_55%)]" />
        <div className="absolute -top-24 -left-20 w-[28rem] h-[28rem] rounded-full bg-indigo-500/15 blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />
        <div className="absolute -bottom-20 -right-10 w-[24rem] h-[24rem] rounded-full bg-sky-400/15 blur-3xl animate-[pulse_11s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="text-center mb-14">
        <motion.h2
          id="usecases-heading"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.5 }}
          className="text-4xl font-extrabold text-indigo-900 dark:text-white drop-shadow-sm"
        >
          🚀 Powerful Use Cases
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
          className="mt-3 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Discover how <span className="font-semibold text-indigo-700 dark:text-indigo-300">Botify</span>{" "}
          transforms operations across industries with smart, scalable automation.
        </motion.p>
      </div>

      {/* Cards grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-8 md:grid-cols-3"
      >
        {useCases.map(({ title, description, icon: Icon }, i) => (
          <motion.div
            key={title}
            variants={card}
            className="group relative"
          >
            {/* Gradient ring wrapper */}
            <div className="rounded-[22px] p-[1.2px] bg-gradient-to-br from-indigo-400/60 via-fuchsia-400/60 to-sky-400/60 shadow-[0_18px_48px_rgba(2,6,23,.12)]">
              {/* Glass card */}
              <div
                className="h-full rounded-[20px] bg-white/85 dark:bg-gray-900/80 backdrop-blur-xl
                           border border-white/60 dark:border-white/10 p-6 transition
                           group-hover:-translate-y-0.5 group-hover:shadow-[0_16px_40px_rgba(2,6,23,.14)]"
              >
                {/* Icon chip */}
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl
                                bg-indigo-600/10 dark:bg-indigo-500/15 border border-indigo-600/20
                                text-indigo-700 dark:text-indigo-300 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-gray-700/90 dark:text-gray-300 text-sm leading-relaxed">
                  {description}
                </p>

                {/* Mini chatbot hint bubble */}
                <div className="mt-5 inline-flex items-center gap-2 text-xs text-indigo-700 dark:text-indigo-300
                                px-3 py-1.5 rounded-full bg-indigo-50/80 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-500/20">
                  <span>🤖</span>
                  <span>Try a guided flow for this use case</span>
                </div>
              </div>
            </div>

            {/* Subtle sheen on hover */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100
                         transition duration-300"
              style={{
                background:
                  "radial-gradient(600px 160px at 20% -20%, rgba(255,255,255,.18), transparent 60%)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA under grid */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="/features"
          className="px-5 py-2.5 rounded-xl border border-indigo-300/70 dark:border-indigo-600/40
                     text-indigo-700 dark:text-indigo-200 hover:bg-indigo-50/60 dark:hover:bg-white/5
                     font-medium transition"
        >
          Explore all capabilities
        </a>
        <a
          href="/pricing"
          className="px-5 py-2.5 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl
                     transition transform hover:-translate-y-0.5
                     bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
        >
          Get started in minutes
        </a>
      </div>
    </section>
  );
}
