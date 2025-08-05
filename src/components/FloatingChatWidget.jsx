// src/components/FloatingChatWidget.jsx
import React, { useEffect, useRef, useState } from "react";
import { X, MessageCircle, Mic } from "lucide-react";

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(1);
  const fieldRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setUnread(0);
      // slight focus delay for smoother open
      const t = setTimeout(() => fieldRef.current?.focus(), 140);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  return (
    <>
      {/* tiny keyframes local to this component */}
      <style>{`
        @keyframes botifyPop { 
          0% { transform: translateY(12px) scale(.96); opacity: 0; }
          100% { transform: none; opacity: 1; } 
        }
        @keyframes botifyPulse {
          0% { box-shadow: 0 0 0 0 rgba(124,58,237,.35); }
          70% { box-shadow: 0 0 0 18px rgba(124,58,237,0); }
          100% { box-shadow: 0 0 0 0 rgba(124,58,237,0); }
        }
        @keyframes typingDot {
          0%, 80%, 100% { transform: scale(.75); opacity: .35; }
          40% { transform: scale(1.08); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .botify-reduce { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50">
        {isOpen ? (
          <div
            role="dialog"
            aria-label="Botify Assistant"
            className="botify-reduce w-[22rem] max-w-[92vw] h-[26rem] rounded-3xl shadow-2xl overflow-hidden animate-[botifyPop_.28s_ease] 
                       p-[1.4px] bg-gradient-to-br from-fuchsia-400/60 to-indigo-400/60"
          >
            <div className="h-full rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/60 dark:border-white/10 flex flex-col">
              {/* Header */}
              <div className="relative px-4 py-3 flex items-center justify-between text-white 
                              rounded-t-3xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-white/20">
                    🤖
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold truncate">Botify Assistant</p>
                      <span className="text-[10px] px-2 py-[2px] rounded-full bg-white/20">Demo</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] opacity-90">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,.35)]" />
                      Online
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="relative flex-1 px-3 py-3 overflow-y-auto text-sm text-gray-800 dark:text-gray-100 space-y-2">
                {/* soft top+bottom fade mask */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white/80 dark:from-gray-900/80 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white/80 dark:from-gray-900/80 to-transparent" />

                {/* bot bubble */}
                <div className="max-w-[82%] rounded-2xl rounded-tl-md px-3.5 py-2.5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-white/10 shadow">
                  Hi there! 👋 I’m <strong>Botify</strong> — your friendly AI assistant.
                </div>

                {/* list bubble */}
                <div className="max-w-[84%] rounded-2xl rounded-tl-md px-3.5 py-2.5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-white/10 shadow">
                  Ask me anything about:
                  <ul className="mt-1.5 space-y-1.5">
                    {["💸 Pricing & Plans", "✨ Features", "🚀 Getting Started", "🤖 AI Capabilities"].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400 text-xs">●</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* typing indicator */}
                <div className="inline-flex items-center gap-2 max-w-[70%] rounded-2xl rounded-tl-md px-3.5 py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-white/10 shadow">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-[typingDot_1.2s_infinite_ease-in-out]" />
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-[typingDot_1.2s_.15s_infinite_ease-in-out]" />
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-[typingDot_1.2s_.3s_infinite_ease-in-out]" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">typing…</span>
                </div>

                <p className="mt-1.5 text-xs text-indigo-600 dark:text-indigo-300 italic">
                  (This is a demo preview)
                </p>
              </div>

              {/* Suggestion chips */}
              <div className="px-3 pb-2">
                <div className="flex flex-wrap gap-2">
                  {["Compare plans", "Install on my site", "What’s included?", "Contact sales"].map((c) => (
                    <button
                      key={c}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-indigo-200/70 dark:border-indigo-600/40
                                 bg-white/70 dark:bg-white/10 text-indigo-700 dark:text-indigo-200 hover:bg-indigo-50/60 dark:hover:bg-white/5 transition"
                      type="button"
                      onClick={() => {}}
                      title="Demo chip"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input (disabled for demo) */}
              <div className="relative p-3 border-t border-white/60 dark:border-white/10 bg-white/60 dark:bg-gray-900/60">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="grid place-items-center w-10 h-10 rounded-full bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-indigo-200"
                    disabled
                    aria-label="Voice input (disabled)"
                    title="Voice (demo)"
                  >
                    <Mic className="w-4.5 h-4.5" />
                  </button>
                  <input
                    ref={fieldRef}
                    type="text"
                    placeholder="Type your message…"
                    className="flex-1 h-10 px-3 rounded-xl text-sm border border-gray-200 dark:border-gray-700 
                               bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled
                  />
                  <button
                    type="button"
                    className="grid place-items-center w-10 h-10 rounded-full text-white shadow-lg 
                               bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
                    disabled
                    aria-label="Send (disabled)"
                    title="Send (demo)"
                  >
                    <MessageCircle className="w-4.5 h-4.5" />
                  </button>
                </div>
                <span className="absolute right-4 bottom-1.5 text-[10px] text-gray-500 dark:text-gray-400 italic">
                  input disabled in demo
                </span>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-16 h-16 rounded-full bg-white dark:bg-gray-900 overflow-hidden shadow-xl 
                       border border-indigo-300/70 dark:border-indigo-500/40 hover:scale-105 transition-transform botify-reduce"
            aria-label="Open Botify chat"
          >
            {/* pulse halo */}
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full"
              style={{ animation: "botifyPulse 2.2s infinite" }}
            />
            {/* avatar/logo */}
            <img
              src="/Botify_logo.png"
              alt="Botify avatar"
              className="relative z-10 w-full h-full object-contain"
              draggable="false"
            />
            {/* unread badge */}
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1.5 rounded-full grid place-items-center text-[11px] font-bold text-white bg-rose-500 shadow">
                {unread}
              </span>
            )}
          </button>
        )}
      </div>
    </>
  );
}
