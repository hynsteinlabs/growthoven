"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "GrowthOven completely changed how we approach social media. Our engagement went from 2% to 18% in just two months.",
    name: "Sarah Chen",
    role: "Head of Marketing, Flux Studio",
    rating: 5,
  },
  {
    quote: "The hook intelligence feature alone is worth it. We're creating content that consistently outperforms our competitors by 4x.",
    name: "Marcus Rivera",
    role: "Content Lead, Drift Labs",
    rating: 5,
  },
  {
    quote: "I used to spend 20+ hours a week on content. Now it's under 3 hours with better results. Essential for any serious creator.",
    name: "Aisha Patel",
    role: "Founder, Bloom Digital",
    rating: 5,
  },
];

const avatarColors = ["#0EA5E9", "#8B5CF6", "#EC4899"];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" style={{ padding: "96px 0", background: "#F8FAFB" }}>
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
            <h2 id="testimonials-heading" className="section-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0A0A0A" }}>
              What customers say.
            </h2>
            <p style={{ marginTop: "12px", fontSize: "15px", color: "#6B7280", maxWidth: "400px", lineHeight: 1.6 }}>
              Real results from real creators who use GrowthOven every day.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} style={{ width: "14px", height: "14px", fill: "#F59E0B", color: "#F59E0B" }} />
              ))}
            </div>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "#374151" }}>4.9/5</span>
            <span style={{ fontSize: "13px", color: "#9CA3AF" }}>from 200+ reviews</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
              className="flex flex-col p-7 bg-white border border-gray-200 rounded-[20px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300"
            >
              <Quote style={{ width: "32px", height: "32px", color: "#E5E7EB", marginBottom: "16px" }} aria-hidden="true" />

              <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} style={{ width: "13px", height: "13px", fill: "#F59E0B", color: "#F59E0B" }} aria-hidden="true" />
                ))}
              </div>

              <blockquote style={{ fontSize: "15px", color: "#374151", lineHeight: 1.7, flex: 1, marginBottom: "20px" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid #F3F4F6" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#fff",
                  background: avatarColors[i],
                  flexShrink: 0,
                }}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#0A0A0A" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "#9CA3AF" }}>{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
