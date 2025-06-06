// src/components/StatsSection.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Messages Handled", endValue: 1200000 },
  { label: "Active Users", endValue: 8500 },
  { label: "Hours Saved", endValue: 370000 },
];

const StatCard = ({ label, endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // total animation time in ms
    const stepTime = 20; // how often to update the count (ms)
    const steps = duration / stepTime;
    const increment = endValue / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(counter);
        setCount(endValue);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [endValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md text-center border border-gray-100 dark:border-gray-700"
    >
      <p className="text-4xl font-extrabold text-indigo-600 mb-2">
        {count.toLocaleString()}
      </p>
      <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">
        {label}
      </p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white via-indigo-50 to-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          📊 Botify in Numbers
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We're proud to help thousands of businesses save time and grow faster with intelligent automation.
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
