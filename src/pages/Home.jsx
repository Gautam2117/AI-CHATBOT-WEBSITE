import { motion } from "framer-motion";
import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
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

const Home = () => {
  return (
    <>
      {/* SEO */}
      <SeoHead
        title="Botify – AI Chatbot for Sales, Support, and Lead Capture"
        description="Botify is your intelligent AI assistant, automating customer service, increasing lead conversion, and scaling 24/7 support — without hiring more agents."
        url="https://botify-website.vercel.app/"
        image="https://botify-website.vercel.app/og-image.png"
      />

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <p className="uppercase text-indigo-600 font-semibold tracking-wider">
            🤖 Conversational AI for Business
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight drop-shadow-sm">
            Boost Sales & Support with <span className="text-indigo-600">AI-Powered Conversations</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Botify is your 24/7 AI assistant that handles customer queries,
            captures leads, and scales your business—all without hiring more agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <Link
              to="https://ai-chatbot-saas-eight.vercel.app/"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transition duration-300"
            >
              Get Started for Free
            </Link>
            <a
              href="/features"
              className="px-8 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700 font-semibold rounded-xl transition duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          <Lottie
            animationData={chatbotAnimation}
            loop={true}
            className="w-full h-auto max-w-md mx-auto"
          />
        </motion.div>
      </div>

      {/* Page Sections */}
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
