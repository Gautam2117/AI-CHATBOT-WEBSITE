// src/components/StickyCTABar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StickyCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 400); // show after 400px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50">
      <div className="bg-indigo-600 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center justify-between gap-4">
        <p className="font-semibold text-sm sm:text-base">
          🚀 Ready to boost your support with Botify?
        </p>
        <Link
          to="/get-started"
          className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-xl hover:bg-indigo-100 transition"
        >
          Get Started Free
        </Link>
      </div>
    </div>
  );
};

export default StickyCTABar;
