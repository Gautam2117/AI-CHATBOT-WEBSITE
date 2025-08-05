// src/components/IntegrationsSection.jsx
import React from "react";
import { motion } from "framer-motion";

// Logos
import slack from "../assets/integrations/slack.svg";
import whatsapp from "../assets/integrations/whatsapp.svg";
import messenger from "../assets/integrations/messenger.svg";
import zapier from "../assets/integrations/zapier.svg";

const INTEGRATIONS = [
  { name: "Slack", logo: slack, url: "#", desc: "Push handoffs & alerts" },
  { name: "WhatsApp", logo: whatsapp, url: "#", desc: "Talk to users where they are" },
  { name: "Messenger", logo: messenger, url: "#", desc: "Facebook page messaging" },
  { name: "Zapier", logo: zapier, url: "#", desc: "Automate everything" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function IntegrationsSection() {
  return (
    <section
      className="relative py-20 px-6 md:px-20 overflow-hidden"
      aria-labelledby="integrations-title"
    >
      {/* Soft aurora backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.08),transparent_55%)]" />
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-16 w-[32rem] h-[32rem] rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="integrations-title"
            className="text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            🔌 Seamless Integrations
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect Botify to the tools you already use. Ship faster with plug-and-play apps,
            or go deeper with our API & webhooks.
          </p>

          {/* Badges */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 text-gray-700 dark:text-gray-300">
              REST API
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 text-gray-700 dark:text-gray-300">
              Webhooks
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 text-gray-700 dark:text-gray-300">
              OAuth
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {INTEGRATIONS.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.url}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="group relative rounded-2xl p-[1.2px] bg-gradient-to-br from-fuchsia-400/60 to-indigo-400/60 shadow-[0_16px_40px_rgba(2,6,23,0.12)]"
              aria-label={`${item.name} integration`}
            >
              <div className="rounded-2xl h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/60 dark:border-white/10 p-6 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl grid place-items-center bg-white dark:bg-white/5 border border-white/60 dark:border-white/10 shadow-md transition-transform duration-300 group-hover:-translate-y-0.5">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  {/* subtle glow on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-sky-500/20" />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>

                {/* tiny CTA underline on hover */}
                <span className="mt-3 h-[3px] w-10 rounded-full bg-indigo-500/20 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-fuchsia-500 group-hover:to-sky-500 transition-all" />
              </div>

              {/* Focus ring */}
              <span className="absolute inset-0 rounded-2xl ring-0 ring-indigo-400/0 group-focus-visible:ring-4 transition" />
            </motion.a>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
          >
            View Developer Docs <span aria-hidden>→</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold border border-indigo-300/70 dark:border-indigo-600/40 text-indigo-700 dark:text-indigo-200 hover:bg-indigo-50/60 dark:hover:bg-white/5 transition"
          >
            Request an Integration
          </a>
        </div>

        {/* “More coming” note */}
        <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          More channels coming soon: Telegram, Intercom, HubSpot, Shopify…
        </p>
      </div>
    </section>
  );
}
