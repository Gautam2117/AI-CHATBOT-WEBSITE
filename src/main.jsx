// src/main.jsx or src/index.jsx
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

/* --- Prevent theme flash before React mounts --- */
try {
  const saved = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) {
    document.documentElement.classList.add("dark");
  }
} catch { /* no-op */ }

const rootEl = document.getElementById("root");
createRoot(rootEl).render(
  <StrictMode>
    {/* If hosting under a subpath, uncomment basename */}
    {/* <BrowserRouter basename={import.meta.env.BASE_URL}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

/* --- Optional: register a service worker for basic PWA/offline
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
--- */
