import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Messages We Aim to Handle", endValue: 1200000, suffix: "+" },
  { label: "Target Active Users", endValue: 8500, suffix: "+" },
  { label: "Productive Hours to Save", endValue: 370000, suffix: "+" },
];

const StatCard = ({ label, endValue, suffix }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md text-center border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-transform hover:-translate-y-1"
    >
      <p
        className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2"
        aria-label={`${label}: ${endValue.toLocaleString()}${suffix || ""}`}
      >
        <CountUp end={endValue} duration={2} separator="," />{suffix}
      </p>
      <p className="text-gray-700 dark:text-gray-300 font-medium text-base">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white via-indigo-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
          📊 Our Vision in Numbers
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Botify is on a mission to empower businesses with intelligent, 24/7 automation.
          Here’s what we’re working towards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
