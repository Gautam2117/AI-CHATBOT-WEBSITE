import React from "react";
import { Zap, Settings, Send } from "lucide-react";

const steps = [
  {
    icon: <Zap className="w-10 h-10 text-indigo-600 drop-shadow-md" />,
    title: "Connect Botify to Your Platform",
    description:
      "Seamlessly integrate Botify with your website or app in under 60 seconds using our plug-and-play widget or developer-friendly API.",
  },
  {
    icon: <Settings className="w-10 h-10 text-indigo-600 drop-shadow-md" />,
    title: "Train with Your Knowledge",
    description:
      "Upload FAQs, help docs, or enter custom responses—Botify learns in real-time to give accurate, helpful replies instantly.",
  },
  {
    icon: <Send className="w-10 h-10 text-indigo-600 drop-shadow-md" />,
    title: "Deploy and Support Instantly",
    description:
      "Go live with one click and let Botify handle customer questions, collect leads, and support users—24/7, effortlessly.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white tracking-tight mb-4">
          🚀 How Botify Works
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get started in minutes and scale your support effortlessly—without writing a single line of code.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl border dark:border-gray-700 shadow-xl hover:shadow-indigo-100 dark:hover:shadow-indigo-900 transition-transform transform hover:-translate-y-1"
          >
            <div className="mb-6 flex items-center justify-center">
              {step.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
