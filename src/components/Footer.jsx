import React from "react";
import { Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24">
      {/* subtle top glow line */}
      <div className="pointer-events-none absolute -top-px inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* premium glass panel with gradient edge */}
        <div className="rounded-3xl p-[1.4px] bg-gradient-to-br from-fuchsia-400/60 to-indigo-400/60 shadow-[0_20px_60px_rgba(2,6,23,0.12)]">
          <div className="rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/60 dark:border-white/10">
            {/* top CTA strip */}
            <div className="px-6 sm:px-8 py-6 border-b border-white/60 dark:border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Ready to launch your AI assistant?
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Start free — no credit card required.
                </p>
              </div>
              <a
                href="https://ai-chatbot-saas-eight.vercel.app/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
              >
                Get Started
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* link columns */}
            <div className="px-6 sm:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md">
                    🤖
                  </span>
                  <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Botify
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  AI chat that converts, supports, and delights — 24/7.
                </p>

                {/* socials */}
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="mailto:botify.assist@gmail.com"
                    aria-label="Email"
                    className="p-2 rounded-lg border border-white/60 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:text-indigo-500 hover:border-indigo-400/60 transition"
                  >
                    <Mail className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="p-2 rounded-lg border border-white/60 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:text-indigo-500 hover:border-indigo-400/60 transition"
                  >
                    <Twitter className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="p-2 rounded-lg border border-white/60 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:text-indigo-500 hover:border-indigo-400/60 transition"
                  >
                    <Linkedin className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="p-2 rounded-lg border border-white/60 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:text-indigo-500 hover:border-indigo-400/60 transition"
                  >
                    <Github className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>

              {/* Product */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Product</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <Link
                      to="/features"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pricing"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://ai-chatbot-saas-eight.vercel.app/"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition"
                    >
                      Launch App
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Company</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter (front-end only) */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Stay in the loop</h4>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  Product updates, tips & tricks. No spam.
                </p>
                <form
                  className="mt-3 flex items-center gap-2"
                  onSubmit={(e) => e.preventDefault()}
                  aria-label="Subscribe to updates (demo)"
                >
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="flex-1 h-10 px-3 rounded-xl text-sm border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled
                  />
                  <button
                    className="h-10 px-4 rounded-xl text-white font-semibold shadow-lg bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
                    disabled
                  >
                    Subscribe
                  </button>
                </form>
                <p className="mt-1 text-[10px] text-gray-500 dark:text-gray-400 italic">
                  (demo only — form disabled)
                </p>
              </div>
            </div>

            {/* install pill */}
            <div className="px-6 sm:px-8 -mt-2">
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs
                                  border border-emerald-400/30 bg-emerald-500/10
                                  text-emerald-700 dark:text-emerald-200">
                  ⚡ Installs in 2 minutes
                </span>
              </div>
            </div>

            {/* trust row */}
            <div className="px-6 sm:px-8 mt-3">
              <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
                <span className="inline-flex items-center rounded-full px-2.5 py-1
                                  bg-white/60 text-gray-800 border border-white/70
                                  dark:bg-white/5 dark:text-white/80 dark:border-white/10">
                  🇮🇳 Made in India
                </span>
                <span className="text-gray-400 dark:text-white/20">•</span>
                <span className="inline-flex items-center rounded-full px-2.5 py-1
                                  bg-white/60 text-gray-800 border border-white/70
                                  dark:bg-white/5 dark:text-white/80 dark:border-white/10">
                  GDPR-ready
                </span>
                <span className="text-gray-400 dark:text-white/20">•</span>
                <span className="inline-flex items-center rounded-full px-2.5 py-1
                                  bg-white/60 text-gray-800 border border-white/70
                                  dark:bg-white/5 dark:text-white/80 dark:border-white/10">
                  🔒 Data encrypted at rest/in transit
                </span>
              </div>
            </div>

            {/* bottom line */}
            <div className="px-6 sm:px-8 py-5 border-t border-white/60 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600 dark:text-gray-300">
              <p>
                &copy; {year} <span className="font-semibold">Botify</span>. All rights reserved.
              </p>
              <p className="opacity-80">
                Built with ❤️ for delightful conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
