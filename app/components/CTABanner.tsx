"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section id="contact" aria-labelledby="cta-banner-heading" style={{ padding: "32px 24px" }}>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "#0A0A0A",
          borderRadius: "28px",
          padding: "80px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow accents */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        <div style={{ position: "relative", zIndex: 10 }}>
          <h2
            id="cta-banner-heading"
            className="section-heading"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Ready for your <span style={{ color: "#0EA5E9" }}>project?</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#9CA3AF", maxWidth: "440px", margin: "0 auto 40px", lineHeight: 1.6 }}>
            Let&apos;s build a growth strategy that turns your social media into a viral content machine.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                background: "#0EA5E9",
                color: "#fff",
                fontWeight: 600,
                fontSize: "15px",
                borderRadius: "999px",
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Start Free Trial
              <ArrowRight style={{ width: "16px", height: "16px" }} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 28px",
                background: "transparent",
                color: "#fff",
                fontWeight: 600,
                fontSize: "15px",
                borderRadius: "999px",
                border: "1px solid #374151",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Schedule a Call
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
