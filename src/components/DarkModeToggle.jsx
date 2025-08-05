// src/components/DarkModeToggle.jsx
import React, { useEffect, useMemo, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function getInitialTheme() {
  if (typeof window === "undefined") return false; // default light on SSR
  const saved = localStorage.getItem("theme"); // 'dark' | 'light' | null
  if (saved === "dark") return true;
  if (saved === "light") return false;
  // No saved preference -> follow system
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
}

export default function DarkModeToggle() {
  const [dark, setDark] = useState(getInitialTheme);
  const [explicitChoice, setExplicitChoice] = useState(() => {
    return localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === "light";
  });

  // Apply theme to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // If user hasn't explicitly picked, follow system changes live
  useEffect(() => {
    if (explicitChoice || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setDark(e.matches);
    try {
      mq.addEventListener("change", handler);
    } catch {
      // Safari
      mq.addListener(handler);
    }
    return () => {
      try {
        mq.removeEventListener("change", handler);
      } catch {
        mq.removeListener(handler);
      }
    };
  }, [explicitChoice]);

  const toggle = () => {
    setExplicitChoice(true);
    setDark((d) => !d);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label="Toggle dark mode"
      className={`
        relative ml-4 h-10 w-10 rounded-xl 
        border border-white/40 dark:border-white/10 
        bg-white/70 dark:bg-gray-900/70 
        shadow-md backdrop-blur 
        transition-all duration-300 
        hover:scale-[1.02] hover:shadow-lg
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
      `}
    >
      {/* gradient ring glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[2px] rounded-[14px] opacity-0 transition-opacity duration-300
                   group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,.45), rgba(236,72,153,.45))",
          filter: "blur(6px)",
        }}
      />

      {/* Icon container */}
      <span className="relative grid place-items-center h-full w-full">
        {/* Sun */}
        <SunIcon
          className={`absolute h-5 w-5 text-amber-400 transition-all duration-400 
                      ${dark ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"}`}
        />
        {/* Moon */}
        <MoonIcon
          className={`absolute h-5 w-5 text-indigo-300 transition-all duration-400 
                      ${dark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}`}
        />
      </span>
    </button>
  );
}
