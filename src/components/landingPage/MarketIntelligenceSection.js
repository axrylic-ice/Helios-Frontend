"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MarketIntelligenceSection() {
  return (
    <section className="relative w-full  py-30 overflow-hidden flex flex-col items-center bg-[#050505]">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 opacity-[0.12] bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('/6_Africa_s_Trade_Momentum_is_Strengthening.png')",
        }}
      />

      <div className="relative z-10 w-full max-w-[1320px] px-6 flex flex-col items-center">
        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-['IBM_Plex_Sans_Condensed'] italic font-light text-2xl md:text-[40px] leading-tight text-[#C29241] text-center max-w-[900px]"
        >
          &quot;The goods are moving, but the currency value isn&apos;t waiting
          for you.&quot;
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-12 font-serif font-medium text-4xl md:text-[56px] leading-tight text-white text-center max-w-[900px]"
        >
          Multi-Layer Intelligence,{" "}
          <span className="text-[#C29241]">Simplified</span>
        </motion.h2>

        {/* ===== CARDS GRID ===== */}
        <div className="mt-24 md:mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          <IntelligenceCard
            index={0}
            title="Fast-Moving Markets (LSTM)"
            desc="Processes sequential market signals like oil and official rates with a 7-day lookback to capture immediate volatility."
            icon={<PulseIcon />}
          />

          <IntelligenceCard
            index={1}
            title="Structural Risk Layer"
            desc="Evaluates macroeconomic exposure across import cycles, identifying delayed FX impact risks before settlement."
            className="lg:translate-y-20"
            icon={<ShieldIcon />}
          />

          <IntelligenceCard
            index={2}
            title="Settlement Risk Engine"
            desc="Models timing mismatches between shipment delivery and FX settlement exposure windows."
            icon={<TimerIcon />}
          />
        </div>
      </div>
    </section>
  );
}

/* --- ICON COMPONENTS --- */

const PulseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 12H5L8 4L12 20L16 12H22"
      stroke="#C29241"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="#C29241"
      strokeOpacity="0.2"
      strokeWidth="1"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L4 5V10C4 15.55 7.41 20.74 12 22C16.59 20.74 20 15.55 20 10V5L12 2Z"
      stroke="#C29241"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="#C29241"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TimerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9" stroke="#C29241" strokeWidth="2" />
    <path
      d="M12 7V12L15 15"
      stroke="#C29241"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2V4M12 20V22M4 12H2M22 12H20"
      stroke="#C29241"
      strokeOpacity="0.4"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/* --- CARD COMPONENT --- */

function IntelligenceCard({ title, desc, className, index, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`
        w-full max-w-[413px] min-h-[340px] 
        bg-[rgba(20,20,20,0.4)] border border-[rgba(243,190,104,0.15)] 
        rounded-[24px] backdrop-blur-[30px] 
        p-10 flex flex-col gap-6 group
        ${className}
      `}
    >
      {/* Icon Container */}
      <div className="w-[64px] h-[64px] rounded-2xl bg-[#C29241]/10 border border-[#C29241]/20 flex items-center justify-center transition-all duration-500 group-hover:bg-[#C29241]/20 group-hover:border-[#C29241]/40">
        <div className="scale-125">{icon}</div>
      </div>

      <h3 className="text-white font-bold text-xl md:text-[24px] leading-tight">
        {title}
      </h3>

      <p className="text-white/60 text-base md:text-[18px] leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
