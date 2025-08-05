// src/components/FeaturesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  RocketIcon,
  BrainCircuitIcon,
  ClockIcon,
  ShieldCheckIcon,
  MessageCircleIcon,
  TrendingUpIcon,
} from "lucide-react";

const features = [
  {
    icon: RocketIcon,
    title: "⚡ Instant Replies",
    description:
      "Engage visitors in real-time with blazing fast, AI-powered responses that never sleep.",
  },
  {
    icon: BrainCircuitIcon,
    title: "🧠 Smart Learning AI",
    description:
      "Botify adapts and evolves with every interaction, constantly improving your user experience.",
  },
  {
    icon: ClockIcon,
    title: "🌙 24/7 Automation",
    description:
      "Offer seamless customer service day or night, without ever hiring night-shift agents.",
  },
  {
    icon: ShieldCheckIcon,
    title: "🔒 Secure & Private",
    description:
      "Your data stays safe with enterprise-grade encryption and secure cloud infrastructure.",
  },
  {
    icon: MessageCircleIcon,
    title: "💬 Multi-Channel",
    description:
      "Deploy your bot on web, WhatsApp, Messenger, and more — all managed from one dashboard.",
  },
  {
    icon: TrendingUpIcon,
    title: "📈 Built for Growth",
    description:
      "From startups to enterprises, Botify scales with you — effortlessly and reliably.",
  },
];

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, duration: 0.35, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-20 px-6 md:px-20 overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.10),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.08),transparent_55%)]" />
        <div className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute -bottom-28 right-10 w-[28rem] h-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* Section header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur border border-white/50 dark:border-white/10 text-xs font-semibold text-indigo-700 dark:text-indigo-200">
          <span>✨</span> Why Teams ❤️ Botify
        </div>
        <h2
          id="features-heading"
          className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          AI features that feel like magic—built for scale
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Unlock the full potential of AI-powered support with speed,
          intelligence, and unmatched reliability.
        </p>
      </div>

      {/* Feature grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map(({ icon: Icon, title, description }, i) => (
          <motion.article
            key={title}
            variants={item}
            className="relative group rounded-3xl p-[1.2px] bg-gradient-to-br from-fuchsia-400/50 to-indigo-400/50"
          >
            <div
              className="relative h-full rounded-3xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl
                         border border-white/60 dark:border-white/10 p-6 transition-all duration-300
                         hover:shadow-2xl hover:-translate-y-0.5"
            >
              {/* Icon / glow */}
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <div className="grid place-items-center w-14 h-14 rounded-2xl text-white shadow-lg
                                  bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-sky-500">
                    <Icon className="w-7 h-7 drop-shadow" />
                  </div>
                  <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md
                                  bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/40 to-sky-500/40" />
                </div>
              </div>

              <h3 className="text-lg font-extrabold text-gray-900 dark:text-white text-center">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-center text-gray-600 dark:text-gray-300">
                {description}
              </p>

              {/* subtle bottom divider beam */}
              <div className="pointer-events-none absolute left-6 right-6 bottom-6 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Bottom accent line */}
      <div className="mt-12 h-[2px] w-40 mx-auto rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 opacity-60" />
    </section>
  );
}
