import React from "react";
import {
  RocketIcon,
  BrainCircuitIcon,
  ClockIcon,
} from "lucide-react"; // Or replace with custom SVGs or Lottie

const features = [
  {
    icon: <RocketIcon className="w-10 h-10 text-indigo-600 drop-shadow-md" />,
    title: "⚡ Instant Replies",
    description: "Engage visitors in real-time with blazing fast, AI-powered responses that never sleep.",
  },
  {
    icon: <BrainCircuitIcon className="w-10 h-10 text-indigo-600 drop-shadow-md" />,
    title: "🧠 Smart Learning AI",
    description: "Botify adapts and evolves with every interaction, constantly improving your user experience.",
  },
  {
    icon: <ClockIcon className="w-10 h-10 text-indigo-600 drop-shadow-md" />,
    title: "🌙 24/7 Automation",
    description: "Offer seamless customer service day or night, without ever hiring night-shift agents.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-20 px-6 md:px-20 transition-all">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-4">
          Why Teams ❤️ Botify
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Unlock the full potential of AI-powered support with speed, intelligence, and unmatched reliability.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 group"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-indigo-700 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
