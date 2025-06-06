// src/components/SeoHead.jsx
import React from "react";
import { Helmet } from "react-helmet";

const SeoHead = ({
  title = "Botify - AI Chatbot for Business",
  description = "Botify is a powerful AI chatbot that boosts your customer support, captures leads, and automates conversations effortlessly.",
  url = "https://botify.ai",
  image = "https://botify.ai/og-image.png", // Replace with your actual hosted OG image
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SeoHead;
