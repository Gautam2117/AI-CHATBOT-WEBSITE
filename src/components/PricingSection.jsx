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
  { id: "free", name: "Free", tagline: "Kick the tyres", monthly: 0, yearly: 0,
    features: ["1 000 messages / month","Botify branding","Basic analytics","Community support"],
    cta: "Start Free", popular: false
  },
  // Kept in catalogue but not rendered as a full card (shown inside Starter)
  { id: "starterlite", name: "Starter Lite", tagline: "Branding kept", monthly: 499, yearly: null,
    features: ["1 500 messages / month","Botify branding","Basic analytics","Community support"],
    cta: "Choose Starter Lite", popular: false
  },
  { id: "starter", name: "Starter", tagline: "For small teams",
    monthly: 1_599, yearly: 15_990,
    features: ["3 000 messages / month","Remove Botify branding","Lead capture & email hand-off","Priority support"],
    cta: "Get Starter", popular: false
  },
  { id: "growth", name: "Growth", tagline: "Most popular",
    monthly: 4_899, yearly: 48_990,
    features: ["15 000 messages / month","All integrations & workflows","Advanced analytics","White-label launcher","Priority support + SLA"],
    cta: "Upgrade to Growth", popular: true
  },
  { id: "scale", name: "Scale", tagline: "50 000 msgs / mo",
    monthly: 12_399, yearly: 123_990,
    features: ["50 000 messages / month","Unlimited integrations","Dedicated CSM & Slack channel","Premium uptime SLA","Early-access features"],
    cta: "Go Scale", popular: false
  },
];

/* external app endpoint for real signup */
const APP_URL = "https://ai-chatbot-saas-eight.vercel.app";
const planHref = (planId, cycle) =>
  `${APP_URL}/?signup=1&plan=${encodeURIComponent(planId)}&cycle=${encodeURIComponent(cycle)}`;

/* -------------------------------- helpers -------------------------------- */
function Badge({ children, tone = "indigo" }) {
  const palette =
    tone === "gold"
      ? "from-amber-400 via-yellow-400 to-amber-500 text-amber-900"
      : "from-indigo-500 via-fuchsia-500 to-sky-500 text-white";
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-r ${palette} shadow-sm whitespace-nowrap`}>
      {children}
    </span>
  );
}

/* ================================ main =================================== */
export default function PricingSection() {
  const [billing, setBilling] = useState("monthly"); // 'monthly' | 'yearly'
  const currency = "₹";

  // Show 4 cards always; surface Starter Lite inside Starter
  const starterLite = useMemo(() => RAW_PLANS.find(p => p.id === "starterlite"), []);
  const plans = useMemo(
    () => RAW_PLANS.filter(p => p.id !== "starterlite"),
    []
  );

  return (
    <section id="pricing" className="relative py-16 sm:py-20 px-6 sm:px-10 md:px-16">
      {/* Premium background: soft aurora + faint grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(217,70,239,0.10),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.12),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(0,0,0,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.12)_1px,transparent_1px)] dark:opacity-[0.08] [background-size:28px_28px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            💸 Flexible Pricing for Everyone
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Start free. Scale when you’re ready. No contracts. Cancel anytime.
          </p>

          {/* Perks */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] sm:text-xs">
            {["No credit card required", "Set up in minutes", "Cancel anytime"].map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 text-gray-700 dark:text-gray-300 whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white/80 dark:bg-gray-900/70 backdrop-blur border border-white/60 dark:border-white/10 shadow-sm">
            {["monthly", "yearly"].map((key) => (
              <button
                key={key}
                onClick={() => setBilling(key)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  billing === key
                    ? "bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600 text-white shadow"
                    : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300"
                }`}
              >
                {key === "monthly" ? "Monthly" : (
                  <>
                    Yearly
                    <span className="ml-2 inline-flex items-center gap-1 text-[10px] px-2 py-[2px] rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 whitespace-nowrap">
                      <Sparkles size={12} /> 2&nbsp;months free
                    </span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop grid (4-up) */}
        <div className="hidden sm:grid auto-rows-fr grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {plans.map((p) => (
            <PlanCard
              key={p.id}
              p={p}
              billing={billing}
              currency={currency}
              starterLite={starterLite}
            />
          ))}
        </div>

        {/* Mobile horizontal snap-scroller */}
        <div className="sm:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory">
          <div className="flex gap-4 min-w-max">
            {plans.map((p) => (
              <div key={p.id} className="snap-start shrink-0 w-[80%]">
                <PlanCard
                  p={p}
                  billing={billing}
                  currency={currency}
                  starterLite={starterLite}
                  compact
                />
              </div>
            ))}
          </div>
        </div>

        {/* Included in all plans */}
        <div className="mt-10 rounded-2xl p-5 bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl border border-white/60 dark:border-white/10">
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            Included in all plans: GDPR-ready, role-based access, API &amp; webhooks, and analytics dashboard.
          </p>
        </div>

        {/* Footnotes + Compare */}
        <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          Prices in INR. Taxes may apply. Message quotas reset monthly.
        </p>
        <div className="mt-5 text-center">
          <Link
            to="/faq"
            className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 hover:underline inline-flex items-center gap-1"
          >
            <TrendingUp size={14} /> Compare all features →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Card ------------------------------------ */
function PlanCard({ p, billing, currency, starterLite, compact = false }) {
  const price = billing === "monthly" ? p.monthly : (p.yearly ?? p.monthly);
  const showSlash = billing === "yearly" && p.monthly > 0 && p.yearly > 0;
  const monthlyOnly = p.monthly > 0 && (p.yearly == null || p.yearly === 0);
  const isPopular = p.popular;

  const href = planHref(p.id, billing);

  const openPlan = () => {
    try {
      window.open(href, "_blank", "noopener,noreferrer");
    } catch {
      // no-op
    }
  };

  return (
    <div
      className={`group relative rounded-3xl p-[1.2px] bg-gradient-to-br ${
        isPopular ? "from-amber-400/70 to-fuchsia-400/70" : "from-fuchsia-400/60 to-indigo-400/60"
      } shadow-[0_16px_40px_rgba(2,6,23,0.12)] transition-transform hover:-translate-y-[3px]`}
    >
      <div
        className="rounded-3xl h-full bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl border border-white/60 dark:border-white/10 p-6 lg:p-7 flex flex-col cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={openPlan}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openPlan()}
        aria-label={`Choose ${p.name} plan`}
      >
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
            {monthlyOnly && (
              <span className="ml-1 inline-flex items-center gap-1 px-2 py-[2px] rounded-full text-[10px] bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 whitespace-nowrap">
                <Info size={12} /> Monthly only
              </span>
            )}
          </div>
          <span className="text-[11px] text-gray-500 dark:text-gray-400 whitespace-nowrap">{p.tagline}</span>
        </div>

        {/* Title + price */}
        <div className="mt-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">{p.name}</h3>
          <div className="mt-2 flex items-end gap-2 whitespace-nowrap">
            <div className="text-[28px] sm:text-[32px] leading-none font-extrabold text-gray-900 dark:text-white tracking-tight">
              {price === 0 ? "Free" : `${currency}${Number(price).toLocaleString()}`}
            </div>
            {price !== 0 && (
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                {billing === "monthly" || monthlyOnly ? "/month" : "/year"}
              </span>
            )}
          </div>

          {showSlash && (
            <div className="mt-1 text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Info size={12} />
              <span>
                Normally {currency}
                {(p.monthly * 12).toLocaleString()}/yr — you save {currency}
                {((p.monthly * 12) - (p.yearly || 0)).toLocaleString()}
              </span>
            </div>
          )}
          {monthlyOnly && billing === "yearly" && (
            <div className="mt-1 text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Info size={12} />
              <span>This plan is billed monthly.</span>
            </div>
          )}
        </div>

        {/* Starter Lite chip (inside Starter card) */}
        {p.id === "starter" && starterLite && (
          <div className="mt-3 rounded-xl border border-white/10 bg-white/50 dark:bg-white/5 px-3 py-2 flex items-center justify-between gap-3">
            <div className="text-[11px] text-gray-800 dark:text-white/80">
              <span className="font-semibold">Or Starter Lite</span>{" "}
              <span className="text-gray-600 dark:text-white/60">₹499/mo · 1,500 msgs</span>
            </div>
            <a
              href={planHref("starterlite", "monthly")}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 inline-flex items-center rounded-lg px-2.5 py-1.5 text-[11px] font-semibold text-white bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600 hover:opacity-95"
            >
              Choose
            </a>
          </div>
        )}

        {/* Features */}
        <ul className="mt-5 space-y-2.5 text-sm text-gray-700 dark:text-gray-200 leading-6 flex-1">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-emerald-500 mt-[2px]" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-6">
          {p.id === "free" ? (
            <a
              href={planHref("free", billing)}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
            >
              {p.cta}
            </a>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold transition ${
                isPopular
                  ? "bg-white text-indigo-700 hover:bg-gray-50 shadow"
                  : "text-white shadow-lg hover:shadow-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600"
              }`}
            >
              {p.cta}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
