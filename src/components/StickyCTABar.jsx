// src/components/StickyCTABar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StickyCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 px-4 sm:px-6 z-50 animate-fade-in-up">
      <div className="max-w-2xl mx-auto bg-indigo-600 dark:bg-indigo-700 text-white px-6 py-4 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 transition-all duration-300">
        <p className="font-semibold text-center sm:text-left text-sm sm:text-base">
          🚀 Ready to boost your support with <strong>Botify</strong>?
        </p>
        <Link
          to="https://ai-chatbot-saas-eight.vercel.app/"
          className="bg-white dark:bg-gray-100 text-indigo-600 font-semibold px-5 py-2 rounded-xl hover:bg-indigo-100 dark:hover:bg-gray-200 transition duration-300 text-sm sm:text-base"
          aria-label="Get Started with Botify"
        >
          Get Started Free
        </Link>
      </div>
    </div>
  );
};

export default StickyCTABar;
