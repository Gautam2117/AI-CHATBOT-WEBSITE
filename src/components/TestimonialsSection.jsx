import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Early User",
    role: "E-commerce Store Owner",
    feedback:
      "Botify feels like having an extra teammate. Can’t wait to use it more once it launches publicly!",
  },
  {
    name: "Beta Tester",
    role: "Startup Founder",
    feedback:
      "Even in testing, Botify impressed us. Setup was smooth and responses were blazing fast.",
  },
  {
    name: "Preview Access User",
    role: "Customer Support Lead",
    feedback:
      "Looking forward to integrating this fully. Our support load could be cut in half!",
  },
  {
    name: "Private Launch Customer",
    role: "SaaS Product Owner",
    feedback:
      "We tried Botify for FAQs during our product launch. It handled basic queries without needing code. Super helpful!",
  },
  {
    name: "Trial User",
    role: "Freelancer",
    feedback:
      "Loved how easy it was to plug in my FAQs. Excited to see where this goes as features expand!",
  },
  {
    name: "Preview Waitlist Member",
    role: "Small Business Owner",
    feedback:
      "Botify feels lightweight and promising. The interface is clean and intuitive, even for non-tech users like me.",
  },
  {
    name: "Early Access Tester",
    role: "Marketing Agency",
    feedback:
      "Tried Botify on a few landing pages. Early results look promising and the support was responsive.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const scroll = (direction) => {
    setCurrentIndex((prev) =>
      direction === "left"
        ? (prev - 1 + testimonials.length) % testimonials.length
        : (prev + 1) % testimonials.length
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      scroll("right");
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="relative py-20 bg-white dark:bg-gray-900 px-6 md:px-20 transition-colors duration-300">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-14">
        🌟 What Our Users Say
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 shadow-xl text-center"
        >
          <FaQuoteLeft className="text-indigo-400 dark:text-indigo-500 text-4xl mb-4 mx-auto" />
          <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
            “{testimonials[currentIndex].feedback}”
          </p>
          <div className="text-indigo-700 dark:text-indigo-400 font-semibold text-xl">
            {testimonials[currentIndex].name}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonials[currentIndex].role}
          </p>
        </motion.div>

        {/* Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-md hover:scale-110 transition"
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-md hover:scale-110 transition"
            aria-label="Next Testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "bg-indigo-600 dark:bg-indigo-400"
                  : "bg-indigo-200 dark:bg-indigo-700"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
