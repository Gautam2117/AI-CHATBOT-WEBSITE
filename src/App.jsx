// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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

/* -------- Tiny, dependency-free route progress bar -------- */
function RouteProgressBar() {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    const t = setTimeout(() => setActive(false), 600);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div
      aria-hidden="true"
      className={`fixed top-0 left-0 h-[3px] z-[60] transition-all duration-500 ${
        active ? "w-full opacity-100" : "w-0 opacity-0"
      }`}
      style={{
        background:
          "linear-gradient(90deg,#7c3aed 0%,#ec4899 50%,#0ea5e9 100%)",
      }}
    />
  );
}

/* -------- Scroll reset on route change -------- */
function ScrollToTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/* -------- Page enter animation wrapper -------- */
function PageFade({ children }) {
  const location = useLocation();
  return (
    <div
      key={location.pathname}
      className="animate-[routeEnter_.35s_ease] will-change-transform"
    >
      {children}
    </div>
  );
}

/* -------- Subtle “AI aurora” background FX -------- */
function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.12),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.10),transparent_55%)]" />
      {/* Slow glow blobs */}
      <div
        className="absolute -top-24 -left-24 w-[38rem] h-[38rem] rounded-full bg-indigo-500 opacity-[.16] blur-3xl"
        style={{ animation: "botifyBlob 12s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -right-16 w-[34rem] h-[34rem] rounded-full bg-pink-500 opacity-[.14] blur-3xl"
        style={{ animation: "botifyBlob 14s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute -bottom-24 left-1/4 w-[28rem] h-[28rem] rounded-full bg-sky-400 opacity-[.14] blur-3xl"
        style={{ animation: "botifyBlob 16s ease-in-out infinite" }}
      />
      {/* Optional subtle grid lines */}
      <div className="absolute inset-0 opacity-[.06] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:48px_48px]" />
    </div>
  );
}

export default function App() {
  // Respect user’s system preference for dark on first load
  const prefersDark = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );

  useEffect(() => {
    const root = document.documentElement;
    if (prefersDark) root.classList.add("dark");
  }, [prefersDark]);

  return (
    <>
      {/* Local keyframes without extra files */}
      <style>{`
        @keyframes routeEnter {
          from { opacity: .0; transform: translateY(6px) scale(.985); }
          to   { opacity: 1;  transform: none; }
        }
        @keyframes botifyBlob {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          50%     { transform: translate3d(0,18px,0) scale(1.06); }
        }
      `}</style>

      {/* Accessibility: Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-3 focus:left-3 focus:px-3 focus:py-2 focus:rounded-lg focus:bg-indigo-600 focus:text-white"
      >
        Skip to content
      </a>

      <div className="relative min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <BackgroundFX />
        <RouteProgressBar />
        <ScrollToTopOnRoute />

        <Navbar />

        <main id="main" className="pt-[72px]">
          <PageFade>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<PricingSection />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </PageFade>
        </main>

        {/* Always-on growth hooks */}
        <StickyCTABar />
        <FloatingChatWidget />
      </div>
    </>
  );
}
