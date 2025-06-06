// src/pages/Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    time: new Date().toLocaleString(),
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...formData, time: new Date().toLocaleString() },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "", time: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 pt-24 pb-16 dark:bg-gray-900">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 dark:text-white mb-10">
        📬 Get in Touch
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">Name</label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">Email</label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-green-600 dark:text-green-400 font-medium">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400 font-medium">Something went wrong. Try again.</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
