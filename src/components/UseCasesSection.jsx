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
    <section className="relative py-20 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 px-6 md:px-20 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-indigo-800 drop-shadow"
        >
          🚀 Powerful Use Cases
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-600 max-w-xl mx-auto"
        >
          Discover how <span className="text-indigo-700 font-semibold">Botify</span> can transform your business operations across industries.
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
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition transform duration-300 border border-gray-100"
            >
              <div className="bg-indigo-100 w-14 h-14 flex items-center justify-center rounded-full mb-5 shadow-md">
                <Icon className="w-6 h-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {useCase.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{useCase.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default UseCasesSection;
