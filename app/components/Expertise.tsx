"use client";

import { motion } from "framer-motion";

const expertise = [
  { name: "AI & Machine Learning", level: "Advanced" },
  { name: "Content Strategy", level: "Expert" },
  { name: "Social Media Analytics", level: "Expert" },
  { name: "Competitor Intelligence", level: "Advanced" },
  { name: "Audience Growth", level: "Expert" },
  { name: "SEO & Discoverability", level: "Advanced" },
  { name: "Brand Development", level: "Advanced" },
  { name: "Viral Marketing", level: "Expert" },
  { name: "Data Visualization", level: "Advanced" },
  { name: "Platform Optimization", level: "Expert" },
];

export default function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-heading" style={{ padding: "96px 0", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "40px" }}
        >
          <h2 id="expertise-heading" className="section-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0A0A0A" }}>
            Expertise.
          </h2>
          <p style={{ marginTop: "12px", fontSize: "15px", color: "#6B7280", maxWidth: "400px", lineHeight: 1.6 }}>
            Deep expertise across the tools and disciplines that matter most for social media growth.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {expertise.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.05, duration: 0.4, type: "spring", stiffness: 120, damping: 14 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 20px",
                background: "#F8FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: "999px",
                transition: "all 0.2s ease",
                cursor: "default",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: 500, color: "#374151" }}>
                {item.name}
              </span>
              <span style={{
                fontSize: "10px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "3px 8px",
                borderRadius: "999px",
                background: item.level === "Expert" ? "#E0F2FE" : "#F3F4F6",
                color: item.level === "Expert" ? "#0284C7" : "#6B7280",
              }}>
                {item.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
