"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "16px 16px 0 16px",
      }}
    >
      <nav
        id="navbar"
        role="navigation"
        aria-label="Main navigation"
        style={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "10px 20px" : "12px 20px",
          borderRadius: "999px",
          background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.65)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: scrolled ? "1px solid #E5E7EB" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
          aria-label="GrowthOven Home"
        >
          <div
            style={{
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
            }}
          >
            G
          </div>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#0A0A0A", letterSpacing: "-0.01em" }}>
            GrowthOven
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#6B7280",
                padding: "8px 16px",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#0A0A0A";
                e.currentTarget.style.background = "#F3F4F6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#6B7280";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "10px 20px",
              background: "#0A0A0A",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "999px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1a1a1a";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0A0A0A";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>Start Project</span>
            <ArrowRight style={{ width: "14px", height: "14px" }} />
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden flex items-center justify-center"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "999px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X style={{ width: "20px", height: "20px" }} /> : <Menu style={{ width: "20px", height: "20px" }} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            marginTop: "8px",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
            background: "#fff",
            border: "1px solid #E5E7EB",
            borderRadius: "24px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
            padding: "16px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontSize: "16px",
                fontWeight: 500,
                color: "#6B7280",
                padding: "12px 16px",
                borderRadius: "16px",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginTop: "8px",
              padding: "14px",
              background: "#0A0A0A",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "999px",
              textDecoration: "none",
            }}
          >
            <span>Start Project</span>
            <ArrowRight style={{ width: "16px", height: "16px" }} />
          </a>
        </div>
      )}
    </header>
  );
}
