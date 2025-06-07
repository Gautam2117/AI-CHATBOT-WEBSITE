// src/components/FloatingChatWidget.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

const FloatingChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 max-w-[90vw] h-96 bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden flex flex-col animate-fade-in">
          {/* Header */}
          <div className="bg-indigo-600 text-white p-4 flex items-center justify-between">
            <span className="font-semibold">🤖 Botify Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700 dark:text-gray-200 space-y-2 no-scrollbar">
            <p>Hi there! 👋</p>
            <p>I’m <strong>Botify</strong> — your friendly AI assistant.</p>
            <p>
              Ask me anything about:
              <ul className="list-disc list-inside ml-4">
                <li>💸 Pricing & Plans</li>
                <li>✨ Features</li>
                <li>🚀 Getting Started</li>
                <li>🤖 AI Capabilities</li>
              </ul>
            </p>
            <p>Let’s get your support experience to the next level!</p>
            <p className="italic text-indigo-500">(This is a demo widget preview)</p>
          </div>

          {/* Input (disabled for demo) */}
          <div className="p-3 border-t dark:border-gray-700 relative">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled
            />
            <span className="absolute right-4 bottom-3 text-xs text-gray-400 italic">
              (input disabled in demo)
            </span>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full overflow-hidden shadow-xl border border-indigo-300 dark:border-indigo-500 hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800"
          aria-label="Open Botify Widget"
        >
          <img
            src="/Botify_logo.png"
            alt="Botify Chatbot"
            className="w-full h-full object-contain"
          />
        </button>
      )}
    </div>
  );
};

export default FloatingChatWidget;
