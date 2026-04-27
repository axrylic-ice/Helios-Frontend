"use client";

import React from "react";
import { motion } from "framer-motion";
import Logo from "../icons/Logo";

/* --- HOISTED SOCIAL ICONS (Zero Dependency) --- */

function TwitterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 20px",
        gap: "60px",
        width: "100%",
        borderTop: "1px solid rgba(243, 190, 104, 0.1)",
        color: "#fff",
        background: "#050505",
      }}
      className="md:flex-row md:justify-between md:items-start md:px-[60px]"
    >
      {/* LEFT BRAND SECTION */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "14px",
          minWidth: "220px",
        }}
      >
        <Logo style={{ width: "32px", height: "32px" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontSize: "28px",
              margin: 0,
              color: "#C29241",
              fontWeight: 600,
              letterSpacing: "-1px",
            }}
          >
            Fotuna
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "10px",
              letterSpacing: "2px",
              opacity: 0.5,
              fontWeight: 700,
            }}
          >
            FX DECISION INTELLIGENCE
          </p>
        </div>
      </div>

      {/* LINKS SECTION */}
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{
          gap: "40px",
          maxWidth: "700px",
          width: "100%",
        }}
      >
        <FooterColumn
          title="Product"
          links={["Features", "Integration", "Updates", "FAQ", "Pricing"]}
        />
        <FooterColumn
          title="Company"
          links={["Home", "About", "Blog", "Contact"]}
        />
        <FooterColumn
          title="Resources"
          links={["Examples", "Community", "Guides", "Docs", "Press"]}
        />
        <FooterColumn title="Legal" links={["Privacy", "Terms", "Security"]} />
      </div>

      {/* SOCIAL ICONS & DISCLAIMER */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
          width: "100%",
        }}
        className="md:items-end"
      >
        <div style={{ display: "flex", gap: "24px" }}>
          <SocialIcon icon={<TwitterIcon size={20} />} />
          <SocialIcon icon={<InstagramIcon size={20} />} />
          <SocialIcon icon={<YoutubeIcon size={20} />} />
        </div>

        <p
          style={{
            fontSize: "12px",
            opacity: 0.3,
            textAlign: "inherit",
            margin: 0,
            lineHeight: "1.8",
            fontFamily: "var(--font-sans-condensed)",
          }}
          className="text-center md:text-right"
        >
          &copy; 2026 Fotuna Intelligence. <br />
          Disclaimer: This tool is a decision support system and not financial
          advice. Data is for demonstration.
        </p>
      </div>
    </footer>
  );
}

/* --- HELPER COMPONENTS (Hoisted) --- */

function FooterColumn({ title, links }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <h4
        style={{
          margin: 0,
          color: "#C29241",
          fontSize: "14px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {title}
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {links.map((link) => (
          <motion.p
            key={link}
            whileHover={{ x: 3, color: "#fff", opacity: 1 }}
            style={{
              margin: 0,
              fontSize: "14px",
              opacity: 0.4,
              cursor: "pointer",
              transition: "opacity 0.2s ease",
            }}
          >
            {link}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, color: "#C29241" }}
      style={{ opacity: 0.4, cursor: "pointer", transition: "color 0.2s ease" }}
    >
      {icon}
    </motion.div>
  );
}
