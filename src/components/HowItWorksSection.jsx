import React from "react";
import { Zap, Settings, Send } from "lucide-react";
// You can optionally use Lottie icons instead of Lucide by importing animations

const steps = [
  {
    icon: <Zap className="w-10 h-10 text-indigo-600 drop-shadow-md" />,
    title: "Connect Botify to Your Platform",
    description: "Seamlessly integrate Botify with your website or app in under 60 seconds using our plug-and-play widget or developer-friendly API.",
  },
  {
    icon: <Settings className="w-10 h-10 text-indigo-600 drop-shadow-md" />,
    title: "Train with Your Knowledge",
    description: "Upload FAQs, help docs, or enter custom responses—Botify learns in real-time to give accurate, helpful replies instantly.",
  },
  {
    icon: <Send className="w-10 h-10 text-indigo-600 drop-shadow-md" />,
    title: "Deploy and Support Instantly",
    description: "Go live with one click and let Botify handle customer questions, collect leads, and support users—24/7, effortlessly.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight mb-4">
          🚀 How Botify Works
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get started in minutes and scale your support effortlessly—without writing a single line of code.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl border shadow-xl hover:shadow-indigo-200 transition-transform transform hover:-translate-y-1"
          >
            <div className="mb-6 flex items-center justify-center">{step.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
