import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-600 text-white py-20 px-6 md:px-20 text-center rounded-t-3xl overflow-hidden shadow-inner">
      {/* Background Pattern or Decorative Element (optional) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-noise.png')] bg-cover bg-center pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-md">
          Ready to Revolutionize Your Customer Support?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-white/90">
          Sign up today and experience the power of AI with <span className="font-bold">Botify</span> — free to start, no credit card needed!
        </p>

        <Link
          to="/get-started"
          className="inline-block bg-white text-indigo-700 hover:text-white hover:bg-indigo-800 font-semibold py-3 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          🚀 Get Started for Free
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
