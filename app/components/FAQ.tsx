"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  { question: "How does GrowthOven analyze competitor content?", answer: "GrowthOven connects to your competitors' social media profiles and uses AI to track engagement metrics, posting patterns, content formats, and audience reactions in real-time. Our algorithms identify what makes their content perform so you can replicate success." },
  { question: "What social media platforms are supported?", answer: "We currently support Instagram, TikTok, Twitter/X, LinkedIn, and YouTube. We're continuously expanding platform support based on demand." },
  { question: "How accurate is the viral score predictor?", answer: "Our viral score predictor has an 89% accuracy rate. It evaluates content across 40+ factors including hook strength, timing, format, trending topics, and audience behavior patterns." },
  { question: "Can I cancel my subscription at any time?", answer: "Yes, all plans come with no long-term commitment. Cancel anytime from your account settings. We also offer a 14-day free trial on all plans." },
  { question: "Do you offer custom enterprise solutions?", answer: "Yes! Our Enterprise plan includes custom integrations, white-label reporting, dedicated account management, and API access. Contact our sales team for tailored solutions." },
  { question: "How quickly can I see results?", answer: "Most users see measurable improvements in engagement within the first 2-4 weeks. The average user sees 10x growth in engagement within 60 days." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" style={{ padding: "96px 0", background: "#F8FAFB" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px" }}
        >
          <h2 id="faq-heading" className="section-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0A0A0A" }}>
            FAQ.
          </h2>
          <p style={{ marginTop: "12px", fontSize: "15px", color: "#6B7280" }}>
            Common questions about GrowthOven.
          </p>
        </motion.div>

        <div style={{ borderTop: "1px solid #E5E7EB" }}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              style={{ borderBottom: "1px solid #E5E7EB" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#0A0A0A",
                }}
              >
                <span style={{ paddingRight: "32px" }}>{faq.question}</span>
                {openIndex === index ? (
                  <Minus style={{ width: "18px", height: "18px", color: "#9CA3AF", flexShrink: 0 }} />
                ) : (
                  <Plus style={{ width: "18px", height: "18px", color: "#9CA3AF", flexShrink: 0 }} />
                )}
              </button>
              <div
                style={{
                  maxHeight: openIndex === index ? "200px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  paddingBottom: openIndex === index ? "20px" : "0px",
                }}
              >
                <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7, paddingRight: "48px" }}>
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
