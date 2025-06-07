// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

// Components
import Navbar from "./components/Navbar";
import StickyCTABar from "./components/StickyCTABar";
import FloatingChatWidget from "./components/FloatingChatWidget";
import PricingSection from "./components/PricingSection";

const App = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <Navbar />

      <main className="pt-[72px]"> {/* Adjusts for fixed navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      <StickyCTABar />
      <FloatingChatWidget />
    </div>
  );
};

export default App;
