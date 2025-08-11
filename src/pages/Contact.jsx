// src/pages/Contact.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const MAX_LEN = 1000;

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    time: new Date().toLocaleString(),
    // honeypot (spam trap) – do not remove
    company: "",
  });

  const [status, setStatus] = useState(null); // "loading" | "success" | "error" | null
  const [errors, setErrors] = useState({});
  const liveRegionRef = useRef(null);

  const suggestions = useMemo(
    () => [
      "I want to integrate the widget on my site",
      "Do you have a startup discount?",
      "Can Botify answer questions from my FAQs?",
      "What’s included in Pro vs Pro Max?",
    ],
    []
  );

  // a11y: announce status changes
  useEffect(() => {
    if (!status || !liveRegionRef.current) return;
    const msg =
      status === "loading"
        ? "Sending message…"
        : status === "success"
        ? "Message sent successfully."
        : "Sending failed. Please try again.";
    liveRegionRef.current.textContent = msg;
  }, [status]);

  const validate = () => {
    const next = {};
    if (!formData.from_name.trim()) next.from_name = "Please enter your name.";
    if (!formData.from_email.trim()) next.from_email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.from_email))
      next.from_email = "Please enter a valid email.";
    if (!formData.message.trim()) next.message = "Tell us a little about your request.";
    if (formData.message.length > MAX_LEN) next.message = `Please keep it under ${MAX_LEN} characters.`;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
    setStatus(null);
  };

  const handleSuggestion = (text) => {
    setFormData((s) => ({ ...s, message: s.message ? `${s.message}\n\n${text}` : text }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // honeypot: if filled, silently ignore
    if (formData.company) return;

    if (!validate()) return;
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...formData, time: new Date().toLocaleString() },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({
        from_name: "",
        from_email: "",
        message: "",
        time: "",
        company: "",
      });
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const remaining = MAX_LEN - formData.message.length;
  const sending = status === "loading";

  return (
    <div className="relative min-h-screen px-6 md:px-20 pt-24 pb-16 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      {/* Ambient aurora / brand glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.10),transparent_55%)]" />
        <div className="absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full bg-indigo-500/15 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute -bottom-24 right-0 w-[28rem] h-[28rem] rounded-full bg-sky-400/15 blur-3xl animate-[pulse_12s_ease-in-out_infinite_reverse]" />
      </div>

      <header className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur border border-white/50 dark:border-white/10 text-xs font-semibold text-indigo-700 dark:text-indigo-200">
          <span>🤖</span> Chat with Botify Team
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
          Let’s talk about{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 text-transparent bg-clip-text">
            your use case
          </span>
          .
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Tell us what you’re building and we’ll help you get there faster.
        </p>
      </header>

      <div className="mt-10 grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {/* Contact form (glass card with gradient ring) */}
        <div className="lg:col-span-3">
          <div className="rounded-[22px] p-[1.4px] bg-gradient-to-br from-indigo-400/60 via-fuchsia-400/60 to-sky-400/60 shadow-[0_18px_44px_rgba(2,6,23,.12)]">
            <form
              onSubmit={handleSubmit}
              className="rounded-[20px] bg-white/85 dark:bg-gray-900/80 backdrop-blur-xl border border-white/60 dark:border-white/10 p-6 md:p-8 space-y-6"
              noValidate
            >
              {/* a11y live region */}
              <p ref={liveRegionRef} role="status" aria-live="polite" className="sr-only" />

              {/* Honeypot field (hidden) */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Name */}
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1.5"
                >
                  Your name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.from_name}
                  aria-describedby={errors.from_name ? "name-err" : undefined}
                  className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border ${
                    errors.from_name
                      ? "border-rose-500 focus:ring-rose-500/40"
                      : "border-gray-300 dark:border-gray-600 focus:ring-indigo-500/40"
                  } outline-none focus:ring-2 transition`}
                  placeholder="Jane Doe"
                />
                {errors.from_name && (
                  <p id="name-err" className="mt-1 text-sm text-rose-500">
                    {errors.from_name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="from_email"
                  className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.from_email}
                  aria-describedby={errors.from_email ? "email-err" : undefined}
                  className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border ${
                    errors.from_email
                      ? "border-rose-500 focus:ring-rose-500/40"
                      : "border-gray-300 dark:border-gray-600 focus:ring-indigo-500/40"
                  } outline-none focus:ring-2 transition`}
                  placeholder="you@company.com"
                />
                {errors.from_email && (
                  <p id="email-err" className="mt-1 text-sm text-rose-500">
                    {errors.from_email}
                  </p>
                )}
              </div>

              {/* Message + counter + suggestions chips */}
              <div>
                <div className="flex items-end justify-between">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1.5"
                  >
                    How can we help?
                  </label>
                  <span
                    className={`text-xs ${
                      remaining < 0 ? "text-rose-500" : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {Math.max(remaining, 0)} / {MAX_LEN}
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "msg-err" : undefined}
                  maxLength={MAX_LEN + 1}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border ${
                    errors.message
                      ? "border-rose-500 focus:ring-rose-500/40"
                      : "border-gray-300 dark:border-gray-600 focus:ring-indigo-500/40"
                  } outline-none focus:ring-2 transition resize-none`}
                  placeholder="Tell us about your project, use case, or timeline…"
                  onKeyDown={(e) => {
                    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "enter") {
                      handleSubmit(e);
                    }
                  }}
                />
                {errors.message && (
                  <p id="msg-err" className="mt-1 text-sm text-rose-500">
                    {errors.message}
                  </p>
                )}

                <div className="mt-3 flex flex-wrap gap-2">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleSuggestion(s)}
                      className="text-xs px-3 py-1.5 rounded-full border border-indigo-300/60 dark:border-indigo-600/40 text-indigo-700 dark:text-indigo-200 hover:bg-indigo-50/70 dark:hover:bg-white/5 transition"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit + status */}
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={sending}
                  className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/40
                    ${sending ? "opacity-80 cursor-not-allowed" : ""}
                    bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600`}
                >
                  {sending ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>

                {status === "success" && (
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    ✅ Sent! We’ll get back soon.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-rose-600 dark:text-rose-400 font-medium">
                    ❌ Something went wrong. Please try again.
                  </span>
                )}
              </div>

              <p className="text-[11px] text-gray-500 dark:text-gray-400">
                By submitting, you agree to our data handling. We’ll only use your info to reply to this
                inquiry.
              </p>
            </form>
          </div>
        </div>

        {/* Right rail: helpful info / alt contact */}
        <aside className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl bg-white/85 dark:bg-gray-900/70 backdrop-blur-xl border border-white/60 dark:border-white/10 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 grid place-items-center rounded-xl bg-indigo-600/10 text-indigo-700 dark:text-indigo-300">
                🤖
              </div>
              <div>
                <div className="font-semibold">Botify Support</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average reply: under 24 hours</div>
              </div>
            </div>
            <ul className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="inline-block h-5 w-5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 grid place-items-center">✅</span>
                <span>
                  <span className="font-semibold">Priority replies</span> for{" "}
                  <span className="px-2 py-[2px] rounded-full text-[11px] font-semibold bg-amber-400/20 text-amber-700 dark:text-amber-300 border border-amber-400/30">Growth</span>{" "}
                  &amp;{" "}
                  <span className="px-2 py-[2px] rounded-full text-[11px] font-semibold bg-fuchsia-400/20 text-fuchsia-700 dark:text-fuchsia-300 border border-fuchsia-400/30">Scale</span>{" "}
                  (SLA on Growth, Premium SLA on Scale)
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="inline-block h-5 w-5 rounded-md bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 grid place-items-center">🛠️</span>
                <span>
                  <span className="font-semibold">Starter</span> gets standard support •{" "}
                  <span className="font-semibold">Free</span> is community support
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="inline-block h-5 w-5 rounded-md bg-sky-500/15 text-sky-600 dark:text-sky-300 grid place-items-center">🔗</span>
                <span>
                  Attach links or public docs (GDrive, Notion, GitHub README, website URLs) for faster context
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="inline-block h-5 w-5 rounded-md bg-pink-500/15 text-pink-600 dark:text-pink-300 grid place-items-center">📧</span>
                <span>
                  For billing, include your <span className="font-semibold">workspace email</span> + plan (<em>Starter</em>/<em>Growth</em>/<em>Scale</em>) and cycle (<em>Monthly</em>/<em>Yearly</em>)
                </span>
              </li>
            </ul>

          </div>

          <div className="rounded-2xl bg-white/85 dark:bg-gray-900/70 backdrop-blur-xl border border-white/60 dark:border-white/10 p-6">
            <div className="font-semibold">Prefer email?</div>
            <a
              href="mailto:botify.assist@gmail.com"
              className="mt-1 inline-block text-indigo-700 dark:text-indigo-300 hover:underline"
            >
              botify.assist@gmail.com
            </a>
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              We’ll route your note to the right human. Promise no bots on billing issues 😉
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
