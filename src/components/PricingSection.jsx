// src/components/PricingSection.jsx
import React, { useMemo, useState } from "react";
import {
  CheckCircle2,
  Crown,
  Sparkles,
  Rocket,
  Info,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------------- */
/*  SINGLE SOURCE OF TRUTH — keep in sync with server-side PLAN_CATALOG data  */
/*  Backend reference (INR):                                                  */
/*    Free:        1,000 msgs/mo                                              */
/*    StarterLite: ₹499/mo (1,500 msgs/mo, branding kept)                     */
/*    Starter:     ₹1,599/mo • ₹15,990/yr (3,000 msgs/mo)                     */
/*    Growth:      ₹4,899/mo • ₹48,990/yr (15,000 msgs/mo)                    */
/*    Scale:       ₹12,399/mo • ₹1,23,990/yr (50,000 msgs/mo)                 */
/* ------------------------------------------------------------------------- */
const RAW_PLANS = [
  /* ────────── Free ────────── */
  {
    id: "free",
    name: "Free",
    tagline: "Kick the tyres",
    monthly: 0,
    yearly: 0,
    features: [
      "1 000 messages / month",
      "Botify branding",
      "Basic analytics",
      "Community support",
    ],
    cta: "Start Free",
    popular: false,
  },

  /* ────────── Starter Lite (1.5k) — monthly only ────────── */
  {
    id: "starterlite",
    name: "Starter Lite",
    tagline: "Branding kept",
    monthly: 499,            // ₹499 / mo
    yearly: null,            // monthly-only
    features: [
      "1 500 messages / month",
      "Botify branding",
      "Basic analytics",
      "Community support",
    ],
    cta: "Choose Starter Lite",
    popular: false,
  },

  /* ────────── Starter (3k) ────────── */
  {
    id: "starter",
    name: "Starter",
    tagline: "For small teams",
    monthly: 1_599,          // ₹1 599 / mo
    yearly: 15_990,          // 2 mo free
    features: [
      "3 000 messages / month",
      "Remove Botify branding",
      "Lead capture & email hand-off",
      "Priority support",
    ],
    cta: "Get Starter",
    popular: false,
  },

  /* ────────── Growth (15k) ────────── */
  {
    id: "growth",
    name: "Growth",
    tagline: "Most popular",
    monthly: 4_899,          // ₹4 899 / mo
    yearly: 48_990,          // 2 mo free
    features: [
      "15 000 messages / month",
      "All integrations & workflows",
      "Advanced analytics",
      "White-label launcher",
      "Priority support + SLA",
    ],
    cta: "Upgrade to Growth",
    popular: true,           // highlight this one
  },

  /* ────────── Scale (50k) ────────── */
  {
    id: "scale",
    name: "Scale",
    tagline: "50 000 msgs / mo",
    monthly: 12_399,         // ₹12 399 / mo
    yearly: 123_990,         // 2 mo free
    features: [
      "50 000 messages / month",
      "Unlimited integrations",
      "Dedicated CSM & Slack channel",
      "Premium uptime SLA",
      "Early-access features",
    ],
    cta: "Go Scale",
    popular: false,
  },
];

/* -------------------------------- helpers -------------------------------- */
function Badge({ children, tone = "indigo" }) {
  const palette =
    tone === "gold"
      ? "from-amber-400 via-yellow-400 to-amber-500 text-amber-900"
      : "from-indigo-500 via-fuchsia-500 to-sky-500 text-white";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-r ${palette} shadow-sm`}
    >
      {children}
    </span>
  );
}

/* ================================ main =================================== */
export default function PricingSection() {
  const [billing, setBilling] = useState("monthly"); // 'monthly' | 'yearly'
  const currency = "₹";

  const plans = useMemo(() => RAW_PLANS, []);

  // Support monthly-only plans gracefully (e.g., Starter Lite)
  const isMonthlyOnly = (p) => p.monthly > 0 && (p.yearly == null || p.yearly === 0);
  const priceFor = (p) =>
    billing === "yearly" && isMonthlyOnly(p) ? p.monthly : (billing === "monthly" ? p.monthly : p.yearly);
  const periodFor = (p) =>
    billing === "yearly" && isMonthlyOnly(p) ? "/month" : (billing === "monthly" ? "/month" : "/year");

  return (
    <section
      id="pricing"
      className="relative py-20 px-6 sm:px-10 md:px-20"
    >
      {/* background aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.08),transparent_55%)]" />
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-16 w-[32rem] h-[32rem] rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            💸 Flexible Pricing for Everyone
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            Start free. Scale when you’re ready. No contracts. Cancel anytime.
          </p>

          {/* Perks */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs">
            {["No credit card required", "Set up in minutes", "Cancel anytime"].map(
              (t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 text-gray-700 dark:text-gray-300"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex items-center gap-2 p-1 rounded-xl bg-white/80 dark:bg-gray-900/70 backdrop-blur border border-white/60 dark:border-white/10 shadow">
            {["monthly", "yearly"].map((key) => (
              <button
                key={key}
                onClick={() => setBilling(key)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  billing === key
                    ? "bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600 text-white shadow"
                    : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300"
                }`}
              >
                {key === "monthly" ? "Monthly" : (
                  <>
                    Yearly
                    <span className="ml-2 inline-flex items-center gap-1 text-[10px] px-2 py-[2px] rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                      <Sparkles size={12} /> 2&nbsp;months free
                    </span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((p) => {
            const isPopular = p.popular;
            const price     = priceFor(p);
            const showSlash = billing === "yearly" && p.monthly > 0 && p.yearly > 0;

            return (
              <div
                key={p.id}
                className={`group relative rounded-3xl p-[1.2px] bg-gradient-to-br ${
                  isPopular
                    ? "from-amber-400/70 to-fuchsia-400/70"
                    : "from-fuchsia-400/60 to-indigo-400/60"
                } shadow-[0_16px_40px_rgba(2,6,23,0.12)]`}
              >
                <div className="rounded-3xl h-full bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl border border-white/60 dark:border-white/10 p-6 flex flex-col">
                  {/* Badge row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {isPopular ? (
                        <Badge tone="gold">
                          <Crown size={14} /> Most&nbsp;Popular
                        </Badge>
                      ) : (
                        <Badge>
                          <Rocket size={14} /> Great&nbsp;Value
                        </Badge>
                      )}
                      {isMonthlyOnly(p) && (
                        <span className="ml-1 inline-flex items-center gap-1 px-2 py-[2px] rounded-full text-[10px] bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                          <Info size={12} /> Monthly only
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400">
                      {p.tagline}
                    </span>
                  </div>

                  {/* Title + price */}
                  <div className="mt-4">
                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                      {p.name}
                    </h3>
                    <div className="mt-2 flex items-end gap-2">
                      <div className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        {price === 0
                          ? "Free"
                          : `${currency}${Number(price).toLocaleString()}`}
                      </div>
                      {price !== 0 && (
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {periodFor(p)}
                        </span>
                      )}
                    </div>

                    {showSlash && (
                      <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Info size={12} />
                        <span>
                          Normally {currency}
                          {(p.monthly * 12).toLocaleString()}/yr — you save{" "}
                          {currency}
                          {((p.monthly * 12) - p.yearly).toLocaleString()}
                        </span>
                      </div>
                    )}

                    {isMonthlyOnly(p) && billing === "yearly" && (
                      <div className="mt-1 text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Info size={12} />
                        <span>This plan is billed monthly.</span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-200 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2
                          size={18}
                          className="text-emerald-500 mt-[2px]"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8">
                    {p.id === "free" ? (
                      <Link
                        to="/signup"
                        className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
                      >
                        {p.cta}
                      </Link>
                    ) : (
                      <Link
                        to="/signup"
                        className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold transition ${
                          isPopular
                            ? "bg-white text-indigo-700 hover:bg-gray-50 shadow"
                            : "text-white shadow-lg hover:shadow-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
                        }`}
                      >
                        {p.cta}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Included in all plans */}
        <div className="mt-10 rounded-2xl p-5 bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl border border-white/60 dark:border-white/10">
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            Included in all plans: GDPR-ready, role-based access, API &amp;
            webhooks, and analytics dashboard.
          </p>
        </div>

        {/* Footnotes */}
        <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          Prices in INR. Taxes may apply. Message quotas reset monthly.
        </p>

        {/* Help CTA */}
        <div className="mt-6 text-center">
          <Link
            to="/faq"
            className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 hover:underline inline-flex items-center gap-1"
          >
            <TrendingUp size={14}/> Compare all features →
          </Link>
        </div>
      </div>
    </section>
  );
}
