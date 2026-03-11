"use client";

import { ArrowDown, Zap, Eye, CalendarCheck, TrendingUp, Sparkles, Shield } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Hook Intelligence",
    description: "AI-powered hook analysis decodes viral opening lines. Know exactly what grabs attention in your niche.",
    icon: Zap,
    tag: "Popular",
  },
  {
    title: "Competitor Spy",
    description: "Real-time monitoring of competitor content performance. Reverse-engineer their growth strategies.",
    icon: Eye,
    tag: "New",
  },
  {
    title: "1-Click Content Plans",
    description: "Generate a full month of data-backed content in a single click. From hooks to hashtags.",
    icon: CalendarCheck,
    tag: null,
  },
  {
    title: "Smart Timing Engine",
    description: "Post when your audience is most active. Our engine finds peak performance windows automatically.",
    icon: TrendingUp,
    tag: null,
  },
  {
    title: "Viral Score Predictor",
    description: "Score your content before publishing. Get predictions on virality with actionable suggestions.",
    icon: Sparkles,
    tag: null,
  },
  {
    title: "Brand Safety Guard",
    description: "AI-powered content review ensures brand voice consistency. Catch tone mismatches before they go live.",
    icon: Shield,
    tag: null,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{ padding: "96px 0", background: "#F8FAFB" }}
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
            <h2 id="services-heading" className="section-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0A0A0A" }}>
              Services.
            </h2>
            <p style={{ marginTop: "12px", fontSize: "15px", color: "#6B7280", maxWidth: "400px", lineHeight: 1.6 }}>
              Everything you need to turn your social media into a viral growth engine.
            </p>
          </div>
          <a
            href="#pricing"
            className="group"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "12px 24px",
              background: "transparent",
              color: "#0A0A0A",
              fontSize: "14px",
              fontWeight: 600,
              border: "1px solid #E5E7EB",
              borderRadius: "999px",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e: any) => {
              e.currentTarget.style.background = "#F9FAFB";
              e.currentTarget.style.borderColor = "#D1D5DB";
            }}
            onMouseLeave={(e: any) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "#E5E7EB";
            }}
          >
            View Pricing
            <ArrowDown className="transition-transform duration-300 group-hover:translate-y-1" style={{ width: "14px", height: "14px" }} />
          </a>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
              className="group relative p-7 bg-white border border-gray-200 rounded-[20px] cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Tag */}
              {service.tag && (
                <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                  <span style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: service.tag === "Popular" ? "#E0F2FE" : "#ECFDF5",
                    color: service.tag === "Popular" ? "#0284C7" : "#059669",
                  }}>
                    {service.tag}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "#F3F4F6",
                border: "1px solid #E5E7EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}>
                <service.icon style={{ width: "20px", height: "20px", color: "#6B7280" }} aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#0A0A0A", marginBottom: "8px" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6 }}>
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
