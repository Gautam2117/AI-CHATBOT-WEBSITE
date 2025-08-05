// src/components/StickyCTABar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DISMISS_KEY = "botify:cta_dismissed_at";
const DISMISS_FOR_MS = 24 * 60 * 60 * 1000; // 24h

export default function StickyCTABar() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // respect prior dismiss (24h)
    const last = localStorage.getItem(DISMISS_KEY);
    if (last && Date.now() - Number(last) < DISMISS_FOR_MS) return;

    const onScroll = () => {
      // show once user has scrolled a bit
      setVisible(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    setMounted(true);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted || !visible) return null;

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    setVisible(false);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-4 sm:bottom-6 z-50 px-3 sm:px-6 pointer-events-none"
      aria-live="polite"
    >
      <div className="max-w-2xl mx-auto pointer-events-auto">
        {/* gradient ring */}
        <div className="relative rounded-2xl p-[1.2px] bg-gradient-to-r from-indigo-500/70 via-fuchsia-500/70 to-sky-500/70 shadow-[0_20px_60px_rgba(2,6,23,.25)]">
          {/* glow blobs */}
          <div className="pointer-events-none absolute -inset-6 -z-10 opacity-60">
            <div className="absolute -bottom-10 right-4 w-44 h-44 rounded-full bg-indigo-500/20 blur-2xl" />
            <div className="absolute -top-8 left-8 w-32 h-32 rounded-full bg-fuchsia-500/20 blur-2xl" />
          </div>

          {/* card */}
          <div
            className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-4 rounded-[22px] bg-white/90 dark:bg-gray-900/80 backdrop-blur-xl border border-white/60 dark:border-white/10 px-5 sm:px-6 py-4"
            role="region"
            aria-label="Get started with Botify"
            style={{
              paddingBottom:
                "calc(1rem + env(safe-area-inset-bottom, 0px))",
            }}
          >
            {/* emoji badge */}
            <div className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white text-lg shadow-md select-none">
              🤖
            </div>

            {/* copy */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                Ready to boost support with <span className="text-indigo-600 dark:text-indigo-300">Botify</span>?
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">
                2-minute setup · no code · free to start
              </p>
            </div>

            {/* actions */}
            <div className="flex items-center gap-2">
              <Link
                to="https://ai-chatbot-saas-eight.vercel.app/"
                className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-xl text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                aria-label="Get started with Botify for free"
              >
                Get Started Free
              </Link>
              <button
                type="button"
                onClick={dismiss}
                className="group inline-flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200/70 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label="Dismiss"
                title="Dismiss"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="opacity-70 group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* subtle animated underline */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-4 right-4 -bottom-[3px] h-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 motion-safe:animate-[pulse_4s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
