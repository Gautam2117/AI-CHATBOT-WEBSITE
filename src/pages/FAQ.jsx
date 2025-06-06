// src/pages/FAQ.jsx
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

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
  {
    question: "How customizable is the chatbot widget?",
    answer: "You can fully customize the look, feel, and behavior of the Botify widget, including colors, icon, greeting text, and more.",
  },
  {
    question: "Is Botify secure and GDPR compliant?",
    answer: "Yes. Botify follows industry-standard security practices and is compliant with GDPR and other major data protection regulations.",
  },
  {
    question: "Can my team collaborate inside Botify?",
    answer: "Yes. You can invite teammates, assign roles, and manage bot responses collaboratively via the Botify dashboard.",
  },
  {
    question: "Does Botify provide analytics?",
    answer: "Absolutely. Our dashboard gives you real-time insights, message volumes, user activity, satisfaction scores, and more.",
  },
  {
    question: "What support options are available?",
    answer: "We offer email and live chat support for all plans. Pro and Unlimited users also get dedicated onboarding assistance.",
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
              <div className="border border-indigo-200 rounded-xl shadow-md bg-white transition-all hover:shadow-lg">
                <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-left text-indigo-800 font-semibold text-lg focus:outline-none">
                  <span>{faq.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-indigo-500 transform transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-4 text-gray-600">
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
