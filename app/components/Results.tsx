"use client";

import { TrendingUp, Users, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "10x", label: "Average Growth Rate", description: "Users see 10x engagement improvement within the first 60 days", icon: TrendingUp, color: "#0EA5E9" },
  { value: "2,400+", label: "Active Creators", description: "Growing community of content creators using GrowthOven daily", icon: Users, color: "#8B5CF6" },
  { value: "50M+", label: "Posts Analyzed", description: "Our AI has analyzed 50M+ posts across all major platforms", icon: Zap, color: "#EC4899" },
  { value: "89%", label: "Accuracy Rate", description: "Viral score predictor correctly identifies top-performing content", icon: Target, color: "#10B981" },
];

export default function Results() {
  return (
    <section id="results" aria-labelledby="results-heading" style={{ padding: "96px 0", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "56px" }}
        >
          <h2 id="results-heading" className="section-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0A0A0A" }}>
            Results.
          </h2>
          <p style={{ marginTop: "12px", fontSize: "15px", color: "#6B7280", maxWidth: "400px", lineHeight: 1.6 }}>
            Numbers don&apos;t lie. Here&apos;s the impact GrowthOven delivers.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
              style={{
                padding: "28px",
                background: "#F8FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: "20px",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                background: `${stat.color}10`,
                border: `1px solid ${stat.color}20`,
              }}>
                <stat.icon style={{ width: "20px", height: "20px", color: stat.color }} aria-hidden="true" />
              </div>
              <div style={{ fontSize: "36px", fontWeight: 700, color: stat.color, letterSpacing: "-0.02em", marginBottom: "8px" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#0A0A0A", marginBottom: "8px" }}>
                {stat.label}
              </div>
              <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.5 }}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
