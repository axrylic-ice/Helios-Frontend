"use client";

import React from "react";

export default function CurrentRateCard() {
  const animationStyles = `
    @keyframes ratePulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
  `;

  return (
    <div
      className="
      w-full 
      bg-[#151515] 
      rounded-3xl 
      p-5
      flex flex-col justify-between
      border border-white/5 hover:border-[#F3BE68]/20
      relative
    "
    >
      {/* Injecting keyframes safely for Next.js App Router */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* TITLE & LIVE INDICATOR */}
      <div className="flex justify-between items-center">
        <div className="text-[#E5E2E1]/60 text-[10px] tracking-widest uppercase font-bold">
          Current Rate
        </div>
        {/* Subtle dot to show connectivity */}
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.4)]" />
      </div>

      {/* DATA GRID */}
      <div className="space-y-3 mt-4">
        {/* NGN Row */}
        <div className="flex justify-between items-center">
          <span className="text-[#5E5E5E] text-[12px] font-bold">1 NGN =</span>
          <span
            className="text-[#E5E2E1] text-[14px] font-mono font-bold"
            style={{ animation: "ratePulse 3s ease-in-out infinite" }}
          >
            0.000667 USD
          </span>
        </div>

        {/* USD Row */}
        <div className="flex justify-between items-center">
          <span className="text-[#5E5E5E] text-[12px] font-bold">1 USD =</span>
          <span
            className="text-[#E5E2E1] text-[14px] font-mono font-bold"
            style={{
              animation: "ratePulse 3s ease-in-out infinite",
              animationDelay: "1.5s",
            }}
          >
            ₦1,500 NGN
          </span>
        </div>
      </div>
    </div>
  );
}
