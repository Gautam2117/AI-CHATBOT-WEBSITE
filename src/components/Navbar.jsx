// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-indigo-600 tracking-wide"
        >
          Botify
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-indigo-600 transition-colors duration-200 ${
                isActive(link.to)
                  ? "text-indigo-600 font-semibold dark:text-indigo-400"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <DarkModeToggle />
        </nav>

        {/* CTA */}
        <Link
          to="https://ai-chatbot-saas-eight.vercel.app/"
          className="hidden md:inline-block bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-indigo-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md absolute top-[70px] left-0 w-full transition-all duration-300">
          <nav className="flex flex-col items-center space-y-4 py-6 text-gray-700 dark:text-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg font-medium hover:text-indigo-600 transition ${
                  isActive(link.to)
                    ? "text-indigo-600 dark:text-indigo-400"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
            <DarkModeToggle />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
