"use client";

import React from "react";
import { motion } from "framer-motion";

/* --- THE 11 ICONS --- */

const OilIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C7.5 7 4 11.5 4 15.5C4 19.5 7.5 22.5 12 22.5C16.5 22.5 20 19.5 20 15.5C20 11.5 16.5 7 12 2Z"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18.5C13.6569 18.5 15 17.1569 15 15.5C15 13.8431 13.6569 12.5 12 12.5C10.3431 12.5 9 13.8431 9 15.5C9 17.1569 10.3431 18.5 12 18.5Z"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
  </svg>
);

const LiquidityIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 8H4V4H8V8Z"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 20H16V16H20V20Z"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 8H16V4H20V8Z"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
    <path
      d="M8 20H4V16H8V20Z"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
    <path d="M6 16V8" stroke="#F3BE68" strokeWidth="1.5" />
    <path d="M18 16V8" stroke="#F3BE68" strokeWidth="1.5" />
    <path d="M8 6H16" stroke="#F3BE68" strokeWidth="1.5" />
    <path d="M8 18H16" stroke="#F3BE68" strokeWidth="1.5" />
  </svg>
);

const BankIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 10H21L12 3L3 10Z"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 10V20M10 10V20M14 10V20M19 10V20"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
    <path
      d="M2 20H22V21H2 22Z"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BalanceIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#F3BE68"
      strokeWidth="1.5"
    />
    <path
      d="M12 6V18"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 10L12 6L16 10"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 14L12 18L8 14"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InflationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 6L13.5 14.5L8.5 9.5L2 16"
      stroke="#F3BE68"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 6H22V12"
      stroke="#F3BE68"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6L13.5 14.5"
      stroke="#F3BE68"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="5"
      cy="5"
      r="3"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
  </svg>
);

const VaultIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="#F3BE68"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="3" stroke="#F3BE68" strokeWidth="2" />
    <path
      d="M12 9V15M9 12H15"
      stroke="#F3BE68"
      strokeWidth="2"
      strokeLinecap="round"
      strokeOpacity="0.4"
    />
  </svg>
);

const PercentIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 5L5 19"
      stroke="#F3BE68"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6.5" cy="6.5" r="2.5" stroke="#F3BE68" strokeWidth="2" />
    <circle cx="17.5" cy="17.5" r="2.5" stroke="#F3BE68" strokeWidth="2" />
  </svg>
);

const HealthIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.57 14.86L12 21.6L3.43 14.86C2.22 13.92 1.5 12.5 1.5 11V3L12 1L22.5 3V11C22.5 12.5 21.78 13.92 20.57 14.86Z"
      stroke="#F3BE68"
      strokeWidth="2"
    />
    <path
      d="M8 11L11 14L16 9"
      stroke="#F3BE68"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.4"
    />
  </svg>
);

const WorldIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="#F3BE68" strokeWidth="1.5" />
    <path d="M12 2V22" stroke="#F3BE68" strokeWidth="1.5" strokeOpacity="0.4" />
    <path d="M2 12H22" stroke="#F3BE68" strokeWidth="1.5" strokeOpacity="0.4" />
    <path
      d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22"
      stroke="#F3BE68"
      strokeWidth="1.5"
    />
    <path
      d="M12 2C9.5 4.5 8 8 8 12C8 16 9.5 19.5 12 22"
      stroke="#F3BE68"
      strokeWidth="1.5"
    />
  </svg>
);

const CargoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 11V16.5C2 17.88 3.12 19 4.5 19H19.5C20.88 19 22 17.88 22 16.5V11"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M2 11L5 4H19L22 11H2Z"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14V16"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
    <path
      d="M14 14V16"
      stroke="#F3BE68"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
  </svg>
);

const FlowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 17L21 12L17 7"
      stroke="#F3BE68"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12H21"
      stroke="#F3BE68"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 7L3 12L7 17"
      stroke="#F3BE68"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.4"
    />
  </svg>
);

const vectors = [
  {
    title: "Oil Price (Brent)",
    desc: "Anticipate inputs for energy costs.",
    icon: <OilIcon />,
  },
  {
    title: "Parallel Rate",
    desc: "Monitor real-time market liquidity.",
    icon: <LiquidityIcon />,
  },
  {
    title: "Official Rate",
    desc: "Track central bank policy shifts.",
    icon: <BankIcon />,
  },
  {
    title: "Trade Balance",
    desc: "Analyze import/export flow pressure.",
    icon: <BalanceIcon />,
  },
  {
    title: "Inflation Data",
    desc: "Forecast domestic purchasing power.",
    icon: <InflationIcon />,
  },
  {
    title: "Foreign Reserves",
    desc: "Gauge intervention capabilities.",
    icon: <VaultIcon />,
  },
  {
    title: "Interest Rates",
    desc: "Measure capital flow attraction.",
    icon: <PercentIcon />,
  },
  {
    title: "Debt Ratios",
    desc: "Assess sovereign structural health.",
    icon: <HealthIcon />,
  },
  {
    title: "Global Indices",
    desc: "Correlate with macro sentiment.",
    icon: <WorldIcon />,
  },
  {
    title: "Port Activity",
    desc: "Real-world volume validation.",
    icon: <CargoIcon />,
  },
  {
    title: "Commodity Flow",
    desc: "Track sector-specific momentum.",
    icon: <FlowIcon />,
  },
];

export default function TradeIntelligenceSection() {
  return (
    <section className="relative w-full min-h-screen py-32 px-6 md:px-12 flex flex-col items-center bg-[#050505] overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-[#F3BE68]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Heading Container */}
      <div className="w-full max-w-[1400px] mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif font-medium text-4xl md:text-[64px] leading-[1.1] text-white max-w-[900px] tracking-tight"
        >
          A Complete <span className="text-[#F3BE68]">11-Vector</span> Model{" "}
          <br className="hidden md:block" />
          of Trade Intelligence.
        </motion.h1>
      </div>

      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1400px]">
        {vectors.map((vector, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`
              relative flex flex-col items-start p-8 gap-6
              bg-[rgba(15,15,15,0.5)] border border-white/5 
              backdrop-blur-xl rounded-[24px] overflow-hidden
              hover:border-[#F3BE68]/30 group transition-all duration-500
              ${i === 0 ? "lg:col-span-2 bg-gradient-to-br from-[rgba(30,30,30,0.8)] to-transparent" : ""}
            `}
          >
            {/* Ambient Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#F3BE68]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Icon Box - Integrated Hover Style */}
            <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#F3BE68]/10 border border-[#F3BE68]/20 transition-colors duration-500 group-hover:bg-[#F3BE68]/20 group-hover:border-[#F3BE68]/40">
              <div className="scale-110 opacity-70 group-hover:opacity-100 transition-opacity">
                {vector.icon}
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-2 relative z-10">
              <h3 className="font-bold text-lg text-white group-hover:text-[#F3BE68] transition-colors">
                {vector.title}
              </h3>
              <p className="text-sm text-[#D3C4B2]/50 leading-relaxed group-hover:text-[#D3C4B2]/80 transition-colors">
                {vector.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
