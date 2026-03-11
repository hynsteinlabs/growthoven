"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: ["Services", "Pricing", "Changelog", "Roadmap"],
  Resources: ["Blog", "Documentation", "API", "Community"],
  Company: ["About", "Careers", "Contact", "Press Kit"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

export default function Footer() {
  return (
    <footer id="footer" role="contentinfo">
      {/* Dark CTA bar */}
      <div style={{ padding: "0 24px", paddingBottom: "32px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            background: "#0A0A0A",
            borderRadius: "24px",
            padding: "48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
            aria-hidden="true"
          />
          <div style={{ position: "relative", zIndex: 10, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
            <div>
              <h3 className="section-heading" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#fff", marginBottom: "8px" }}>
                Ready to start your <span style={{ color: "#0EA5E9" }}>project?</span>
              </h3>
              <p style={{ fontSize: "14px", color: "#9CA3AF" }}>
                Let&apos;s turn your social media into a growth engine.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 24px",
                background: "#0EA5E9",
                color: "#fff",
                fontWeight: 600,
                fontSize: "14px",
                borderRadius: "999px",
                textDecoration: "none",
              }}>
                Start Free Trial
                <ArrowRight style={{ width: "14px", height: "14px" }} />
              </a>
              <a href="#" style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "14px 24px",
                background: "transparent",
                color: "#fff",
                fontWeight: 600,
                fontSize: "14px",
                borderRadius: "999px",
                border: "1px solid #374151",
                textDecoration: "none",
              }}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 24px" }}>
        <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: "40px" }}>
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "16px" }}>
              <div style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "#0EA5E9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: "14px",
              }}>
                G
              </div>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#0A0A0A" }}>
                GrowthOven
              </span>
            </a>
            <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.6, maxWidth: "200px" }}>
              AI-powered social media growth for creators and brands.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} aria-label={category}>
              <h4 style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#0A0A0A", marginBottom: "16px" }}>
                {category}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ fontSize: "14px", color: "#9CA3AF", textDecoration: "none" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ marginTop: "56px", paddingTop: "24px", borderTop: "1px solid #E5E7EB", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <p style={{ fontSize: "12px", color: "#D1D5DB" }}>
            © {new Date().getFullYear()} GrowthOven. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a key={s} href="#" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#9CA3AF", textDecoration: "none" }}>
                {s}
                <ArrowUpRight style={{ width: "10px", height: "10px" }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
