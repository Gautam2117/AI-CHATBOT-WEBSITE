// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import DarkModeToggle from "./DarkModeToggle";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Sticky glass on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Body scroll lock + Esc to close + click outside
  useEffect(() => {
    const root = document.documentElement;
    if (open) root.style.overflow = "hidden";
    else root.style.overflow = "";

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e) => {
      if (!open) return;
      if (!menuRef.current) return;
      if (
        !menuRef.current.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClickOutside);
    };
  }, [open]);

  // Close drawer if resized to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/40 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 h-[72px] flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="relative inline-flex items-center gap-2 group"
          aria-label="Botify home"
        >
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md">
            🤖
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Botify
          </span>
          <span className="ml-1 text-[10px] px-2 py-[2px] rounded-full bg-indigo-600/15 text-indigo-700 dark:text-indigo-300 border border-indigo-600/20">
            Live
          </span>
          {/* subtle outline glow on hover */}
          <span className="pointer-events-none absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[0_0_0_2px_rgba(99,102,241,0.15)]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2" role="navigation" aria-label="Primary">
          {NAV_LINKS.map(({ to, label }) => {
            const active = isActive(to);
            return (
              <Link
                key={to}
                to={to}
                aria-current={active ? "page" : undefined}
                className={`relative px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? "text-indigo-700 dark:text-indigo-300"
                    : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300"
                }`}
              >
                {label}
                {/* active gradient underline */}
                <span
                  className={`absolute left-2 right-2 -bottom-[2px] h-[3px] rounded-full transition-all ${
                    active
                      ? "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500"
                      : "bg-transparent"
                  }`}
                />
              </Link>
            );
          })}

          <div className="ml-2">
            <DarkModeToggle />
          </div>

          {/* Shiny CTA (mouse-follow glow) */}
          <a
            href="https://ai-chatbot-saas-eight.vercel.app/"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
            }}
            className="ml-3 relative overflow-hidden inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
          >
            <span className="relative z-10">Get Started</span>
            <span className="pointer-events-none absolute -inset-1 opacity-0 hover:opacity-100 transition-opacity duration-500 [background:radial-gradient(200px_circle_at_var(--x)_var(--y),rgba(255,255,255,.25),transparent_40%)]" />
          </a>
        </nav>

        {/* Mobile: CTA + burger */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="https://ai-chatbot-saas-eight.vercel.app/"
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-white text-sm font-semibold bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow-md"
          >
            Start
          </a>
          <button
            ref={buttonRef}
            className="text-3xl text-indigo-700 dark:text-indigo-300"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-height-open opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-4 mb-4 rounded-2xl border border-white/50 dark:border-white/10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl"
          role="navigation"
          aria-label="Mobile"
        >
          <ul className="flex flex-col divide-y divide-white/60 dark:divide-white/10">
            {NAV_LINKS.map(({ to, label }) => {
              const active = isActive(to);
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`flex items-center justify-between px-5 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "text-indigo-700 dark:text-indigo-300"
                        : "text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300"
                    }`}
                  >
                    <span>{label}</span>
                    {active && (
                      <span className="ml-3 h-[6px] w-[6px] rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500" />
                    )}
                  </Link>
                </li>
              );
            })}
            <li className="px-5 py-3 flex items-center justify-between">
              <span className="text-sm text-gray-800 dark:text-gray-200">Theme</span>
              <DarkModeToggle />
            </li>
            <li className="px-5 py-3">
              <a
                href="https://ai-chatbot-saas-eight.vercel.app/"
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-xl text-white font-semibold shadow-lg bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Tiny style to ensure smooth drawer height */}
      <style>{`
        #mobile-menu.max-height-open { max-height: 360px; }
      `}</style>
    </header>
  );
}
