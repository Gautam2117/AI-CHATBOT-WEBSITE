import React from "react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    features: [
      "1,000 tokens/day",
      "Basic Support",
      "Community Access",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹149/month",
    features: [
      "10,000 tokens/day",
      "Priority Support",
      "Advanced Analytics",
      "Chat Widget Customization",
    ],
    highlight: true,
  },
  {
    name: "Pro Max",
    price: "₹399/month",
    features: [
      "Up to 2M tokens/month",
      "Premium Support",
      "White-label Branding",
      "Full Feature Access",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-20 px-6 sm:px-10 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
        💸 Flexible Pricing for Everyone
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 shadow-xl border transition-all duration-300 transform hover:scale-105 ${
              plan.highlight
                ? "bg-indigo-600 text-white border-indigo-500"
                : "bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700"
            }`}
          >
            {plan.highlight && (
              <div className="mb-3 inline-block bg-white text-indigo-600 font-semibold text-xs px-3 py-1 rounded-full shadow-md">
                ⭐ Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
            <p className="text-4xl font-extrabold mb-6">{plan.price}</p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-sm"
                >
                  <span className="text-green-400 mr-2">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              aria-label={`Choose ${plan.name} plan`}
              className={`w-full py-3 rounded-xl font-semibold text-lg transition-all ${
                plan.highlight
                  ? "bg-white text-indigo-600 hover:bg-gray-100"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {plan.name === "Free" ? "Start Free" : `Get ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
