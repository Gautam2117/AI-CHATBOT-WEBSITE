import React from "react";
import { Briefcase, Headphones, Clock } from "lucide-react";
import { motion } from "framer-motion";

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

const UseCasesSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-indigo-800 dark:text-white drop-shadow"
        >
          🚀 Powerful Use Cases
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
        >
          Discover how <span className="text-indigo-700 dark:text-indigo-400 font-semibold">Botify</span> can transform your business operations across industries.
        </motion.p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition transform duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="bg-indigo-100 dark:bg-indigo-900 w-14 h-14 flex items-center justify-center rounded-full mb-5 shadow-md">
                <Icon className="w-6 h-6 text-indigo-700 dark:text-indigo-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {useCase.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                {useCase.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default UseCasesSection;
