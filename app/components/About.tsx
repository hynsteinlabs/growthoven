"use client";

import { MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" style={{ padding: "96px 0", background: "#F8FAFB" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "64px", alignItems: "center" }}>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="about-heading" className="section-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0A0A0A", marginBottom: "28px" }}>
              About us.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
              <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.7 }}>
                GrowthOven was built by social media strategists, data scientists, and AI engineers who were tired of seeing creators struggle with the guesswork of content marketing.
              </p>
              <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>
                We believe every creator deserves access to the same data-driven insights that big agencies charge thousands for. Our AI-powered platform democratizes social media intelligence.
              </p>
              <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>
                Founded in 2024, we&apos;re on a mission to help 100,000 creators build sustainable, growing audiences through smarter content strategies.
              </p>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "24px" }}>
              {[
                { icon: MapPin, text: "London, UK" },
                { icon: Briefcase, text: "Est. 2024" },
              ].map((item, i) => (
                <motion.div 
                  key={item.text} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.4 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    background: "#fff",
                    border: "1px solid #E5E7EB",
                    borderRadius: "999px",
                    fontSize: "13px",
                    color: "#6B7280",
                  }}
                >
                  <item.icon style={{ width: "14px", height: "14px", color: "#0EA5E9" }} />
                  {item.text}
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              style={{ display: "flex", gap: "16px" }}
            >
              {["Twitter", "LinkedIn", "Instagram"].map((s) => (
                <a key={s} href="#" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "14px", fontWeight: 500, color: "#6B7280", textDecoration: "none" }}>
                  {s}
                  <ArrowUpRight style={{ width: "12px", height: "12px" }} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative" }}>
              <div style={{
                maxWidth: "360px",
                width: "100%",
                background: "#fff",
                border: "1px solid #E5E7EB",
                borderRadius: "24px",
                padding: "32px",
              }}>
                <div style={{
                  width: "100%",
                  aspectRatio: "1",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #E0F2FE, #DBEAFE)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "56px", marginBottom: "8px" }}>🚀</div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#0284C7" }}>The GrowthOven Team</div>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {[
                    { val: "12", label: "Team Members" },
                    { val: "2.4K", label: "Happy Users" },
                  ].map((item) => (
                    <div key={item.label} style={{
                      textAlign: "center",
                      padding: "12px",
                      background: "#F8FAFB",
                      borderRadius: "12px",
                      border: "1px solid #E5E7EB",
                    }}>
                      <div style={{ fontSize: "22px", fontWeight: 700, color: "#0A0A0A" }}>{item.val}</div>
                      <div style={{ fontSize: "11px", color: "#9CA3AF" }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative */}
              <div style={{ position: "absolute", top: "-16px", right: "-16px", width: "96px", height: "96px", background: "#0EA5E9", borderRadius: "16px", opacity: 0.1, zIndex: -1 }} aria-hidden="true" />
              <div style={{ position: "absolute", bottom: "-16px", left: "-16px", width: "64px", height: "64px", background: "#8B5CF6", borderRadius: "12px", opacity: 0.1, zIndex: -1 }} aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
