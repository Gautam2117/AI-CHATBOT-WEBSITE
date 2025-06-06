import React from "react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    features: [
      "2,000 tokens/day",
      "Basic Support",
      "Community Access",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹99/month",
    features: [
      "5,000 tokens/day",
      "Priority Support",
      "Advanced Analytics",
      "Chat Widget Customization",
    ],
    highlight: true,
  },
  {
    name: "Unlimited",
    price: "₹249/month",
    features: [
      "Unlimited tokens/day",
      "Premium Support",
      "White-label Branding",
      "Full Feature Access",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white px-4 sm:px-10 md:px-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        💸 Flexible Pricing for Everyone
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 shadow-lg border transition-all duration-300 transform hover:scale-105 ${
              plan.highlight
                ? "bg-indigo-600 text-white border-transparent"
                : "bg-gray-50 text-gray-800"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">{plan.price}</p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex items-center text-sm ${
                    plan.highlight ? "text-white" : "text-gray-700"
                  }`}
                >
                  <span className="text-green-500 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              aria-label={`Choose ${plan.name} plan`}
              className={`w-full py-3 rounded-xl font-semibold text-lg transition ${
                plan.highlight
                  ? "bg-white text-indigo-600 hover:bg-gray-100"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {plan.name === "Free" ? "Start Free" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
