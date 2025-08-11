// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

// Assets
import chatbotAnimation from "../assets/chatbot_lottie.json";

// Meta
import SeoHead from "../components/SeoHead";

// Sections
import FeaturesSection from "../components/FeaturesSection";
import UseCasesSection from "../components/UseCasesSection";
import IntegrationsSection from "../components/IntegrationsSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

/* ------------ Motion helpers ------------ */
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, amount: 0.6 },
};

const bubble = {
  initial: { opacity: 0, y: 10, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.35, ease: "easeOut" },
};

const Home = () => {
  return (
    <>
      {/* SEO */}
      <SeoHead
        title="Botify – AI Chatbot for Sales, Support, and Lead Capture"
        description="Botify automates customer service, increases lead conversion, and scales 24/7 support — without hiring more agents."
        url="https://botify-website.vercel.app/"
        image="https://botify-website.vercel.app/og-image.png"
      />

      {/* -------------------- Hero -------------------- */}
      <section className="relative overflow-hidden">
        {/* Ambient aurora */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.10),transparent_55%)]" />
          <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-indigo-500/15 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute top-1/3 -right-16 w-[34rem] h-[34rem] rounded-full bg-pink-500/15 blur-3xl animate-[pulse_10s_ease-in-out_infinite_reverse]" />
        </div>

        <div className="min-h-[86vh] flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 xl:px-24 pt-12 md:pt-16">
          {/* Left column */}
          <motion.div
            {...fadeUp}
            className="md:w-[52%] text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur border border-white/40 dark:border-white/10 text-xs font-semibold text-indigo-700 dark:text-indigo-200">
              <span className="text-lg">🤖</span> Conversational AI for Business
            </div>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] text-gray-900 dark:text-white">
              Boost Sales & Support with{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
                AI-Powered Conversations
              </span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Botify is your 24/7 assistant that answers questions, captures
              leads, and routes complex issues—so your team can focus on growth.
            </p>

            {/* Value bullets */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-700 dark:text-gray-300">
              {[
                "Instant replies (80+ languages)",
                "No-code embed in minutes",
                "Secure & privacy-first",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur border border-white/50 dark:border-white/10"
                >
                  <span className="text-emerald-600 dark:text-emerald-400">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="https://ai-chatbot-saas-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden px-7 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
                aria-label="Get started with Botify for free"
              >
                <span className="relative z-10">Get Started Free</span>
                {/* subtle shine */}
                <span className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:radial-gradient(600px_circle_at_var(--x,0%)_var(--y,0%),rgba(255,255,255,.25),transparent_40%)]" />
              </Link>
              <Link
                to="/features"
                className="px-7 py-3 rounded-xl font-semibold border border-indigo-300/70 dark:border-indigo-600/40 text-indigo-700 dark:text-indigo-200 hover:bg-indigo-50/60 dark:hover:bg-white/5 transition"
                aria-label="Explore Botify features"
              >
                Explore Features
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-8 opacity-85">
              <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 text-center md:text-left">
                Trusted by teams & creators
              </p>
              <div className="mt-3 grid grid-cols-3 sm:grid-cols-5 gap-3">
                {["Acme", "Volt", "Nimbus", "Helio", "Zenith"].map((brand) => (
                  <div
                    key={brand}
                    className="h-9 rounded-md bg-white/70 dark:bg-white/5 border border-white/50 dark:border-white/10 grid place-items-center text-xs text-gray-500 dark:text-gray-300"
                    aria-label={`Customer ${brand}`}
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column – Chatbot card + floating bubbles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-[48%] relative"
          >
            {/* Glassy card around Lottie */}
            <div className="relative rounded-[24px] p-[1.5px] bg-gradient-to-br from-fuchsia-400/60 to-indigo-400/60 shadow-2xl">
              <div className="rounded-[22px] bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl border border-white/60 dark:border-white/10 p-6">
                {/* Keeps layout stable while Lottie loads */}
                <div className="w-full max-w-xl mx-auto aspect-[4/3]">
                  <Lottie animationData={chatbotAnimation} loop className="w-full h-full" />
                </div>

                {/* Mini chat header strip (subtle) */}
                <div className="mt-3 flex items-center justify-between text-xs text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>Online</span>
                  </div>
                  <span className="opacity-70">Botify Assistant</span>
                </div>
              </div>
            </div>

            {/* Floating chat preview bubbles */}
            <motion.div {...bubble} className="absolute -left-3 top-3">
              <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-md px-4 py-2 text-sm border border-gray-100 dark:border-white/10">
                Hi! Need help choosing a plan?
              </div>
            </motion.div>

            <motion.div
              {...bubble}
              transition={{ ...bubble.transition, delay: 0.15 }}
              className="absolute -right-3 top-16"
            >
              <div className="rounded-2xl bg-indigo-600 text-white shadow-md px-4 py-2 text-sm">
                I can compare features for you.
              </div>
            </motion.div>

            <motion.div
              {...bubble}
              transition={{ ...bubble.transition, delay: 0.3 }}
              className="absolute left-10 -bottom-4"
            >
              <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-md px-4 py-2 text-sm border border-gray-100 dark:border-white/10">
                Or connect to your website FAQs.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* -------------------- Sections -------------------- */}
      <FeaturesSection />
      <UseCasesSection />
      <IntegrationsSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
