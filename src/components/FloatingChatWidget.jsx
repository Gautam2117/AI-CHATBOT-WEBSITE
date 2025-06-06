// src/components/FloatingChatWidget.jsx
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden flex flex-col">
          <div className="bg-indigo-600 text-white p-4 flex items-center justify-between">
            <span className="font-semibold">Botify Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
            <p className="mb-3">Hi there! 👋</p>
            <p className="mb-2">I’m Botify — your smart assistant.</p>
            <p className="mb-2">Ask me anything about our pricing, features, or how to get started!</p>
            <p className="italic text-indigo-500 mt-4">(This is a demo preview widget)</p>
          </div>

          <div className="p-3 border-t dark:border-gray-700">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-xl flex items-center justify-center"
          aria-label="Open Botify Widget"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default FloatingChatWidget;
