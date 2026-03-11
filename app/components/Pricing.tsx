"use client";

import { Check, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    tag: "Budget-friendly",
    price: "29",
    description: "Perfect for solo creators just starting to grow their presence.",
    features: [
      "3 Competitor Profiles",
      "50 AI-generated hooks/month",
      "Basic content calendar",
      "Email support",
      "Mobile optimized",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    tag: "Most Popular",
    price: "79",
    description: "For serious creators ready to scale their content strategy.",
    features: [
      "10 Competitor Profiles",
      "Unlimited AI hooks",
      "Smart scheduling engine",
      "Viral score predictions",
      "Priority support",
      "Performance analytics",
    ],
    featured: true,
    cta: "Start Growing",
  },
  {
    name: "Enterprise",
    tag: "Full Power",
    price: "199",
    description: "For agencies and brands that need the full suite of tools.",
    features: [
      "Unlimited competitors",
      "Unlimited AI hooks",
      "Advanced scheduling + API",
      "Brand safety guard",
      "White-label reports",
      "Dedicated account manager",
      "Custom integrations",
    ],
    featured: false,
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      style={{ padding: "96px 0", background: "#fff" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "56px" }}
        >
          <div>
            <h2 id="pricing-heading" className="section-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0A0A0A" }}>
              Prices.
            </h2>
            <p style={{ marginTop: "12px", fontSize: "15px", color: "#6B7280", maxWidth: "400px", lineHeight: 1.6 }}>
              Simple, transparent pricing. No hidden fees. Cancel anytime.
            </p>
          </div>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "#F8FAFB",
            border: "1px solid #E5E7EB",
            borderRadius: "999px",
            fontSize: "13px",
            color: "#6B7280",
          }}>
            <Star style={{ width: "14px", height: "14px", color: "#0EA5E9", fill: "#0EA5E9" }} />
            14-day free trial on all plans
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
              className={`flex flex-col p-8 rounded-[20px] transition-all duration-300 w-full group hover:-translate-y-2 cursor-pointer ${
                plan.featured 
                  ? "bg-[#0A0A0A] text-white border-transparent hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]" 
                  : "bg-white text-[#0A0A0A] border border-[#E5E7EB] hover:shadow-xl hover:border-[#D1D5DB]"
              }`}
            >
              {/* Tag */}
              <span style={{
                display: "inline-block",
                width: "fit-content",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "4px 12px",
                borderRadius: "999px",
                background: plan.featured ? "#0EA5E9" : "#F3F4F6",
                color: plan.featured ? "#fff" : "#6B7280",
                marginBottom: "16px",
              }}>
                {plan.tag}
              </span>

              {/* Name */}
              <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>
                {plan.name}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "14px", color: plan.featured ? "#9CA3AF" : "#6B7280", lineHeight: 1.6, marginBottom: "24px" }}>
                {plan.description}
              </p>

              {/* Price */}
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontSize: "48px", fontWeight: 700, letterSpacing: "-0.03em" }}>
                  ${plan.price}
                </span>
                <span style={{ fontSize: "14px", color: plan.featured ? "#9CA3AF" : "#6B7280" }}>
                  /month
                </span>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: plan.featured ? "#1F2937" : "#E5E7EB", marginBottom: "24px" }} />

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, flex: 1, marginBottom: "28px" }}>
                {plan.features.map((feature) => (
                  <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                    <Check style={{
                      width: "16px",
                      height: "16px",
                      marginTop: "2px",
                      flexShrink: 0,
                      color: plan.featured ? "#0EA5E9" : "#10B981",
                    }} />
                    <span style={{ fontSize: "14px", color: plan.featured ? "#D1D5DB" : "#374151" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button 
                className={`group w-full flex items-center justify-center gap-2 p-[14px] rounded-full font-semibold text-[14px] transition-all duration-300 ${
                  plan.featured 
                    ? "bg-white text-[#0A0A0A] hover:bg-slate-100" 
                    : "bg-[#0A0A0A] text-white hover:bg-slate-800"
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" style={{ width: "16px", height: "16px" }} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
