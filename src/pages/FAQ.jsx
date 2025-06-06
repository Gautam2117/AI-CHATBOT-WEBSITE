// src/pages/FAQ.jsx
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "What is Botify?",
    answer: "Botify is an AI-powered chatbot platform that helps businesses automate customer support, capture leads, and scale engagement effortlessly.",
  },
  {
    question: "Is there a free plan available?",
    answer: "Yes! Botify offers a free plan with 2,000 tokens per day, perfect for small teams or testing out the platform.",
  },
  {
    question: "Can I integrate Botify with my website?",
    answer: "Absolutely. You can integrate using our lightweight JavaScript widget or developer-friendly API for full customization.",
  },
  {
    question: "Does Botify support multi-language conversations?",
    answer: "Yes, Botify supports multi-language input and output, helping you communicate with users globally.",
  },
  {
    question: "Can I train the bot with my own data?",
    answer: "Yes, you can upload your FAQs, documents, or custom knowledge base and Botify will learn from them in real-time.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white px-6 md:px-20 pt-24 pb-16">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">
        ❓ Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <div className="border border-indigo-200 rounded-xl p-4 shadow-md bg-white">
                <Disclosure.Button className="flex justify-between w-full text-left text-indigo-800 font-semibold text-lg">
                  <span>{faq.question}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-indigo-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 text-gray-600">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
