// src/components/IntegrationsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import slack from "../assets/integrations/slack.svg";
import whatsapp from "../assets/integrations/whatsapp.svg";
import messenger from "../assets/integrations/messenger.svg";
import zapier from "../assets/integrations/zapier.svg";

const integrations = [
  { name: "Slack", logo: slack },
  { name: "WhatsApp", logo: whatsapp },
  { name: "Messenger", logo: messenger },
  { name: "Zapier", logo: zapier },
];

const IntegrationsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          🔌 Seamless Integrations
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Connect Botify to your favorite tools and platforms for a smoother, automated workflow.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
        {integrations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-16 h-16 object-contain mx-auto mb-2"
            />
            <p className="text-sm text-center text-gray-700 font-medium">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationsSection;
