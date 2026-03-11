"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";

// Expanded to 9 to allow the 3-column scroll effect to look full. 
const baseTestimonials = [
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

const UnsplashImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150", 
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150", 
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150"
];

const testimonials: Testimonial[] = [
  ...baseTestimonials,
  ...baseTestimonials,
  ...baseTestimonials,
].map((t, i) => ({
  ...t,
  image: UnsplashImages[i]
}));

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" style={{ padding: "96px 0", background: "#F8FAFB", overflow: "hidden" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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

        {/* Animated Columns */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[650px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
