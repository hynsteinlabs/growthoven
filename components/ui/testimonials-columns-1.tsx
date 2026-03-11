"use client";
import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export type Testimonial = {
  quote: string;
  image: string;
  name: string;
  role: string;
  rating: number;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ quote, image, name, role, rating }, i) => (
                <div 
                  className="flex flex-col p-7 bg-white border border-gray-200 rounded-[20px] transition-all duration-300 hover:shadow-xl hover:border-gray-300 max-w-xs w-full" 
                  key={i}
                >
                  <Quote style={{ width: "32px", height: "32px", color: "#E5E7EB", marginBottom: "16px" }} aria-hidden="true" />

                  <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                    {[...Array(rating)].map((_, j) => (
                      <Star key={j} style={{ width: "13px", height: "13px", fill: "#F59E0B", color: "#F59E0B" }} aria-hidden="true" />
                    ))}
                  </div>

                  <blockquote style={{ fontSize: "15px", color: "#374151", lineHeight: 1.7, flex: 1, marginBottom: "20px" }}>
                    &ldquo;{quote}&rdquo;
                  </blockquote>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid #F3F4F6" }}>
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      style={{ height: "40px", width: "40px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                    />
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#0A0A0A" }}>{name}</div>
                      <div style={{ fontSize: "12px", color: "#9CA3AF" }}>{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
