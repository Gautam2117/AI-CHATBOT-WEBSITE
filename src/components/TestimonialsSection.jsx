// src/components/TestimonialsSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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

const variants = {
  enter: { opacity: 0, y: 16, scale: 0.985, filter: "blur(4px)" },
  center: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, y: -16, scale: 0.985, filter: "blur(4px)" },
};

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);
  const touchStartX = useRef(null);
  const prefersReduced = useReducedMotion();

  const go = (dir) =>
    setIndex((i) =>
      dir === "left"
        ? (i - 1 + testimonials.length) % testimonials.length
        : (i + 1) % testimonials.length
    );

  // Autoplay (pause on hover/blur/out-of-view)
  useEffect(() => {
    if (prefersReduced || paused) return;
    const id = setInterval(() => go("right"), 6000);
    return () => clearInterval(id);
  }, [paused, prefersReduced]);

  // Pause when section not visible
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Pause when tab hidden
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go("left");
      if (e.key === "ArrowRight") go("right");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Touch swipe
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 42;
    if (dx > threshold) go("left");
    else if (dx < -threshold) go("right");
    touchStartX.current = null;
  };

  const t = testimonials[index];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 md:px-20 bg-gradient-to-b from-white via-indigo-50/40 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-14">
        🌟 What Our Users Say
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Fancy gradient ring + glass card */}
        <div className="rounded-[26px] p-[1.4px] bg-gradient-to-br from-indigo-400/70 via-fuchsia-400/70 to-sky-400/70 shadow-[0_20px_60px_rgba(2,6,23,.20)]">
          <div className="rounded-[24px] bg-white/85 dark:bg-gray-900/80 backdrop-blur-xl border border-white/60 dark:border-white/10 px-6 sm:px-10 py-10">
            {/* Soft ambient blobs */}
            <div className="pointer-events-none absolute -z-10 -inset-10 opacity-60">
              <div className="absolute -top-16 left-10 w-44 h-44 rounded-full bg-indigo-500/15 blur-2xl" />
              <div className="absolute -bottom-14 right-6 w-44 h-44 rounded-full bg-fuchsia-500/15 blur-2xl" />
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={index}
                variants={prefersReduced ? {} : variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: prefersReduced ? 0 : 0.4, ease: "easeOut" }}
                className="text-center"
                aria-live="polite"
              >
                <FaQuoteLeft className="text-indigo-400 dark:text-indigo-500 text-4xl mb-4 mx-auto drop-shadow-sm" />
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  “{t.feedback}”
                </blockquote>

                {/* rating stars for vibe */}
                <div className="mt-5 flex items-center justify-center gap-1 text-amber-400" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .587l3.668 7.431L24 9.748l-6 5.85 1.417 8.263L12 19.771l-7.417 4.09L6 15.598 0 9.748l8.332-1.73z" />
                    </svg>
                  ))}
                </div>

                <figcaption className="mt-5">
                  <div className="flex items-center justify-center gap-3">
                    {/* Avatar initials with gradient */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center text-sm font-bold shadow">
                      {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div className="text-left">
                      <div className="text-indigo-700 dark:text-indigo-300 font-semibold text-lg">
                        {t.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-1 sm:px-3">
          <button
            onClick={() => go("left")}
            className="p-3 rounded-full bg-white/90 dark:bg-gray-800/90 text-indigo-600 dark:text-indigo-400 shadow-md hover:scale-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => go("right")}
            className="p-3 rounded-full bg-white/90 dark:bg-gray-800/90 text-indigo-600 dark:text-indigo-400 shadow-md hover:scale-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={active ? "true" : "false"}
                className={`h-[10px] rounded-full transition-all ${
                  active
                    ? "w-6 bg-indigo-600 dark:bg-indigo-400"
                    : "w-2.5 bg-indigo-200 dark:bg-indigo-700 hover:bg-indigo-300 dark:hover:bg-indigo-600"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
