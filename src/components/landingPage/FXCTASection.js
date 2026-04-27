"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FXCTASection() {
  return (
    <section className="relative w-full min-h-[600px] py-[80px] px-5 overflow-hidden flex items-center justify-center bg-[#050505]">
      {/* BACKGROUND BLUR SHAPES */}
      <div
        className="hidden md:block absolute"
        style={{
          width: "626.83px",
          height: "600px",
          right: "0",
          top: 0,
          background: "#5E3D08",
          opacity: 0.1,
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      <div
        className="hidden md:block absolute"
        style={{
          width: "439.28px",
          height: "313.77px",
          left: 0,
          top: "126.11px",
          background: "#C29241",
          opacity: 0.1,
          border: "1px solid #C29241",
          filter: "blur(35px)",
          zIndex: 0,
        }}
      />

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-center"
        style={{
          width: "100%",
          maxWidth: "1080px",
          minHeight: "485px",
          background: "rgba(30, 30, 30, 0.2)",
          border: "1px solid rgba(243, 190, 104, 0.4)",
          backdropFilter: "blur(2px)",
          borderRadius: "32px",
          padding: "40px 20px",
          gap: "32px",
        }}
      >
        <h1
          style={{
            width: "100%",
            maxWidth: "754px",
            fontFamily: "var(--font-serif)", // Or "IBM Plex Serif"
            fontWeight: 400,
            fontSize: "clamp(32px, 8vw, 82px)",
            lineHeight: "clamp(40px, 9vw, 100px)",
            letterSpacing: "-0.0506em",
            background: "linear-gradient(180deg, #FFFFFF 54.17%, #CFAD72 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
          }}
        >
          FX Intelligence, Built for Decision Makers.
        </h1>

        <p
          className="font-['IBM_Plex_Sans_Condensed']"
          style={{
            width: "100%",
            maxWidth: "708px",
            fontWeight: 400,
            fontSize: "clamp(16px, 4vw, 20px)",
            lineHeight: "1.5",
            color: "#E5E2E1",
            margin: 0,
          }}
        >
          Turn uncertainty into structured opportunity with predictive FX
          intelligence designed for import-driven economies.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{
            width: "204px",
            height: "63px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "30px",
            padding: "6px",
            flexShrink: 0,
          }}
        >
          <Link href="/signup">
            <button
              style={{
                width: "192px",
                height: "51px",
                background: "#C29241",
                borderRadius: "30px",
                border: "none",
                fontSize: "20px",
                fontWeight: 500,
                fontFamily: "Inter",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Start for free
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
