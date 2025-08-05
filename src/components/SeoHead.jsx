// src/components/SeoHead.jsx
import React from "react";
import { Helmet } from "react-helmet";

const SeoHead = ({
  title = "Botify — AI Chatbot for Business",
  description = "Botify automates customer support, captures leads, and scales 24/7 conversations — without hiring more agents.",
  url = "https://botify-website.vercel.app/",
  image = "https://botify-website.vercel.app/og-image.png",
  siteName = "Botify",
  locale = "en_US",
  canonical,             // optional: override canonical URL
  noIndex = false,       // optional: set true for non-indexable pages
  twitterHandle = "@botify", // optional: your brand handle
  logo = "https://botify-website.vercel.app/Botify_logo.png",
}) => {
  const robots = noIndex ? "noindex, nofollow, noarchive" : "index, follow";
  const canonicalHref = canonical || url;

  // Structured data: Organization + SoftwareApplication (pricing in INR)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteName,
        url,
        logo,
        sameAs: [
          // Add/keep the ones you actually have:
          // "https://twitter.com/yourhandle",
          // "https://www.linkedin.com/company/yourcompany",
          // "https://github.com/yourorg"
        ],
      },
      {
        "@type": "WebSite",
        name: siteName,
        url,
      },
      {
        "@type": "SoftwareApplication",
        name: "Botify",
        operatingSystem: "Web",
        applicationCategory: "BusinessApplication",
        offers: [
          { "@type": "Offer", price: "0",   priceCurrency: "INR", name: "Free" },
          { "@type": "Offer", price: "149", priceCurrency: "INR", name: "Pro",   priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" } },
          { "@type": "Offer", price: "399", priceCurrency: "INR", name: "Pro Max", priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" } },
        ],
        url,
        image,
        description,
        publisher: { "@type": "Organization", name: siteName, url },
      },
    ],
  };

  return (
    <Helmet
      defaultTitle="Botify — AI Chatbot for Business"
      titleTemplate="%s • Botify"
    >
      <title>{title}</title>

      {/* Primary meta */}
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalHref} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Theming (dark/light-aware) */}
      <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      <meta name="color-scheme" content="light dark" />

      {/* Icons (harmless to keep here; usually also in index.html) */}
      <link rel="icon" href="/Botify_logo.ico" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

      {/* Performance niceties if you use hosted fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SeoHead;
