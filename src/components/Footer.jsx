import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-100 via-white to-white border-t py-10 px-6 md:px-20 text-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand Info */}
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-3xl font-extrabold text-indigo-600 tracking-tight">🤖 Botify</h2>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Botify. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          <Link to="/terms" className="hover:text-indigo-600 transition-all duration-200">
            Terms of Service
          </Link>
          <Link to="/privacy-policy" className="hover:text-indigo-600 transition-all duration-200">
            Privacy Policy
          </Link>
          <a href="mailto:botify.assist@gmail.com" className="hover:text-indigo-600 transition-all duration-200">
            Contact Us
          </a>
        </div>
      </div>

      {/* Optional: Socials */}
      {/* <div className="mt-6 text-center space-x-4">
        <a href="#" className="hover:text-indigo-600 text-xl"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-indigo-600 text-xl"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="hover:text-indigo-600 text-xl"><i className="fab fa-github"></i></a>
      </div> */}
    </footer>
  );
};

export default Footer;
