"use client";

import { ArrowRight, Sparkles, BarChart3, Search, CalendarDays, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import HeroScene from './HeroScene';

export default function Hero() {
  const titleWordsLine1 = ["We", "build", "what", "fuels"];
  const titleWordsLine2 = ["your"];
  const titleWordsLine3 = ["digital", "growth"];

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* Premium Ambient Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-sky-400/20 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1300px", margin: "0 auto", padding: "140px 24px 60px" }}>
        
        {/* Two-column hero: Text Left + Image Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap" }}>
          
          {/* LEFT COLUMN — Text */}
          <div style={{ flex: "1 1 680px", textAlign: "left" }}>
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "32px" }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 18px",
                  background: "#F8FAFB",
                  border: "1px solid #E5E7EB",
                  borderRadius: "999px",
                  color: "#6B7280",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                <Sparkles style={{ width: "14px", height: "14px", color: "#0EA5E9" }} />
                AI-Powered Growth Engine
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              id="hero-heading" 
              initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-heading" 
              style={{ 
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)", 
                lineHeight: 1.08, 
                color: "#0A0A0A",
                textAlign: "left",
              }}
            >
              <span style={{ marginRight: "12px" }}>
                {titleWordsLine1.map((text, index) => (
                  <motion.span
                    key={`l1-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    style={{ display: "inline-block", marginRight: "12px" }}
                  >
                    {text}
                  </motion.span>
                ))}
              </span>
              <br />
              {titleWordsLine2.map((text, index) => (
                <motion.span
                  key={`l2-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (titleWordsLine1.length + index) * 0.15, duration: 0.6 }}
                  style={{ display: "inline-block", marginRight: "12px" }}
                >
                  {text}
                </motion.span>
              ))}
              <span style={{ color: "#0EA5E9" }}>
                {titleWordsLine3.map((text, index) => (
                  <motion.span
                    key={`l3-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (titleWordsLine1.length + titleWordsLine2.length + index) * 0.15, duration: 0.6 }}
                    style={{ display: "inline-block", marginRight: "12px" }}
                  >
                    {text}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              style={{ marginTop: "28px", fontSize: "18px", color: "#6B7280", maxWidth: "480px", lineHeight: 1.7, textAlign: "left" }}
            >
              AI-powered competitor intelligence, viral content strategies, and automated scheduling — all in one platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6, type: "spring", stiffness: 100, damping: 10 }}
              style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-[32px] py-[16px] bg-[#0A0A0A] text-white font-semibold text-[15px] rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-slate-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/20"
                style={{ textDecoration: "none" }}
              >
                <span>Start Your Project</span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" style={{ width: "16px", height: "16px" }} />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-[32px] py-[16px] bg-transparent text-[#0A0A0A] font-semibold text-[15px] rounded-full border border-[#E5E7EB] cursor-pointer transition-all duration-300 hover:bg-slate-50 hover:border-[#D1D5DB] hover:-translate-y-1"
                style={{ textDecoration: "none" }}
              >
                View Our Work
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Hero Image with floating elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 80, damping: 16 }}
            style={{ 
              flex: "0 1 480px", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center",
              position: "relative",
              minHeight: "480px",
            }}
          >
            {/* Animated CSS keyframes */}
            <style>{`
              @keyframes hero-orbit { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
              @keyframes hero-float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
              @keyframes hero-float-alt { 0%, 100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-8px) rotate(2deg); } }
              @keyframes hero-pulse-ring { 0% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.5; } 50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.3; } 100% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.5; } }
            `}</style>

            {/* Outer soft glow ring */}
            <div
              style={{
                position: "absolute",
                width: "420px",
                height: "420px",
                border: "1px solid rgba(96,165,250,0.12)",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
                animation: "hero-pulse-ring 4s ease-in-out infinite",
              }}
              aria-hidden="true"
            />

            {/* Inner soft glow */}
            <div
              style={{
                position: "absolute",
                width: "340px",
                height: "340px",
                background: "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              }}
              aria-hidden="true"
            />

            {/* Orbiting dots */}
            <div style={{ position: "absolute", width: "440px", height: "440px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", animation: "hero-orbit 20s linear infinite", zIndex: 0 }} aria-hidden="true">
              <div style={{ position: "absolute", top: "0", left: "50%", width: "6px", height: "6px", background: "#93C5FD", borderRadius: "50%", transform: "translateX(-50%)" }} />
              <div style={{ position: "absolute", bottom: "0", left: "50%", width: "4px", height: "4px", background: "#BFDBFE", borderRadius: "50%", transform: "translateX(-50%)" }} />
              <div style={{ position: "absolute", top: "50%", right: "0", width: "5px", height: "5px", background: "#60A5FA", borderRadius: "50%", transform: "translateY(-50%)" }} />
            </div>

            {/* The main hero image */}
            <img 
              src="/hero-cookies.png" 
              alt="Woman holding a tray of social media cookies representing GrowthOven's social media growth services"
              style={{
                width: "100%",
                maxWidth: "430px",
                height: "auto",
                position: "relative",
                zIndex: 2,
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
              }}
            />

            {/* Floating stat badge: +2.4K Followers */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
              style={{
                position: "absolute",
                bottom: "100px",
                left: "-30px",
                background: "#fff",
                borderRadius: "16px",
                padding: "14px 18px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                border: "1px solid #F1F5F9",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                zIndex: 3,
                animation: "hero-float-slow 4s ease-in-out infinite",
              }}
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #3B82F6, #0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TrendingUp style={{ width: "16px", height: "16px", color: "#fff" }} />
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.2 }}>+2.4K</div>
                <div style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 500 }}>Followers/week</div>
              </div>
            </motion.div>

            {/* Floating badge: Viral Score */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.6, type: "spring" }}
              style={{
                position: "absolute",
                top: "40px",
                right: "-20px",
                background: "#fff",
                borderRadius: "16px",
                padding: "14px 18px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                border: "1px solid #F1F5F9",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                zIndex: 3,
                animation: "hero-float-alt 5s ease-in-out infinite",
              }}
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #10B981, #34D399)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BarChart3 style={{ width: "16px", height: "16px", color: "#fff" }} />
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.2 }}>9.2</div>
                <div style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 500 }}>Viral Score</div>
              </div>
            </motion.div>

            {/* Floating badge: 5-star rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                background: "#fff",
                borderRadius: "12px",
                padding: "10px 14px",
                boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
                border: "1px solid #F1F5F9",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                zIndex: 3,
                animation: "hero-float-slow 6s ease-in-out 1s infinite",
              }}
            >
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#6B7280", marginLeft: "4px" }}>4.9</span>
            </motion.div>

            {/* Small accent: notification dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.4, duration: 0.3, type: "spring" }}
              style={{
                position: "absolute",
                top: "120px",
                left: "10px",
                width: "12px",
                height: "12px",
                background: "#EF4444",
                borderRadius: "50%",
                border: "2px solid #fff",
                boxShadow: "0 2px 8px rgba(239,68,68,0.4)",
                zIndex: 3,
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>

        {/* HeroScene cards — full width, centered */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          style={{ marginTop: "56px" }}
        >
          <HeroScene />
        </motion.div>

        {/* Trusted logos */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          style={{ marginTop: "56px", textAlign: "center" }}
        >
          <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "#9CA3AF", marginBottom: "20px" }}>
            Trusted by 2,400+ creators & brands
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "32px" }}>
            {["Vercel", "Stripe", "Linear", "Notion", "Figma"].map((brand, i) => (
              <motion.span 
                key={brand} 
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 2.6 + (i * 0.1), duration: 0.6 }}
                style={{ fontSize: "18px", fontWeight: 600, color: "#D1D5DB", letterSpacing: "-0.01em", userSelect: "none" }}
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
