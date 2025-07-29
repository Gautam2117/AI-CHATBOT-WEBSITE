import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-600 text-white py-20 px-6 md:px-20 text-center rounded-t-3xl overflow-hidden shadow-inner dark:shadow-md">
      {/* Moving Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-noise.png')] bg-cover bg-center opacity-10 animate-pulse pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          <span className="inline-block bg-gradient-to-r from-white/80 to-indigo-200 text-transparent bg-clip-text">
            Ready to Revolutionize Your Customer Support?
          </span>
        </h2>
        <p className="text-lg md:text-xl mb-10 text-white/90 dark:text-white/80">
          Sign up today and experience the power of AI with{" "}
          <span className="font-bold">Botify</span> — free to start, no credit card needed!
        </p>

        <Link
          to="https://ai-chatbot-saas-eight.vercel.app/"
          className="inline-block bg-white text-indigo-700 hover:text-white hover:bg-indigo-800 font-semibold py-3 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 dark:bg-indigo-100 dark:hover:bg-indigo-700"
        >
          🚀 Get Started for Free
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
