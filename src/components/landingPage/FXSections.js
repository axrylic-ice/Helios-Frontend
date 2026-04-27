"use client";

import React from "react";
import { motion } from "framer-motion";



export default function FXVolatilitySection() {
  return (
    <section className="relative w-full min-h-screen lg:h-[850px] flex flex-col lg:flex-row justify-center items-center px-6 md:px-16 py-20 gap-12 lg:gap-24 bg-[#050505] overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#C2924105_0%,transparent_70%)] pointer-events-none" />

      {/* LEFT TEXT BLOCK */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left z-10"
      >
        <h1 className="font-['IBM_Plex_Serif'] font-normal text-4xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-tighter text-white">
          Turn FX Volatility into Your <span className="italic text-[#C29241]">Edge.</span>
        </h1>

        <p className="font-['IBM_Plex_Sans_Condensed'] font-light text-lg md:text-xl lg:text-[24px] leading-relaxed text-[#B7B7B7] max-w-[550px] mx-auto lg:mx-0">
          Fotuna identifies the optimal window for hedging, turning market 
          inefficiencies into calculated strategic opportunities.
        </p>

        {/* Subtle Status Indicator */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mt-4">
          <div className="w-2 h-2 rounded-full bg-[#C29241] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C29241]/60 font-bold">
            Live Model Inference Active
          </span>
        </div>
      </motion.div>

      {/* RIGHT CARDS GRID */}
      <div className="w-full lg:w-1/2 max-w-[650px] z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          <Card
            index={0}
            icon={<TargetIcon />}
            title="Maximized Potential"
            text="Move with high confidence, supported by the Meta-Learner’s synthesized probability."
          />
          <Card
            index={1}
            icon={<StrategyIcon />}
            title="Strategic Hedging"
            text="Utilize our predictive capabilities to plan the optimal timing, minimizing losses."
          />
          <Card
            index={2}
            icon={<SignalIcon />}
            title="Systemic Advantage"
            text="Stay functional even in low-connectivity areas with our Offline-First architecture."
          />
          <Card
            index={3}
            icon={<SyncIcon />}
            title="Continuous Learning"
            text="Grounded in a 5-year data standard and continuously learning during inference."
          />
        </div>
      </div>
    </section>
  );
}

/* --- REUSABLE CARD --- */
function Card({ title, text, index, icon }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="
        group w-full min-h-[220px] p-8 rounded-3xl 
        bg-[rgba(15,15,15,0.4)] border border-white/5 
        backdrop-blur-xl flex flex-col gap-4
        transition-all duration-500 hover:border-[#C29241]/30 hover:bg-[rgba(20,20,20,0.6)]
      "
    >
      <div className="text-[#C29241] opacity-60 group-hover:opacity-100 transition-opacity">
        {icon}
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl leading-tight text-white group-hover:text-[#C29241] transition-colors">
          {title}
        </h3>
        <p className="font-normal text-sm leading-relaxed text-[#B7B7B7]/70 group-hover:text-[#B7B7B7] transition-colors">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

/* --- HOISTED ICONS (Prevents TDZ Error) --- */
function TargetIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 20V4"/>
    </svg>
  );
}

function SyncIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>
    </svg>
  );
}