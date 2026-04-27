"use client";

import React from "react";

export default function MarketContextList() {
  return (
    <div
      className="
      w-full 
      bg-[#151515]/50
      hover:bg-[#151515]
      backdrop-blur-sm
      border border-white/5
      rounded-3xl
      p-5 md:p-6
      flex flex-col
      hover:border-[#F3BE68]/20
      transition-colors
      duration-500
    "
    >
      {/* HEADER */}
      <div className="pb-3 mb-4 border-b border-white/5 flex justify-between items-center">
        <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#E5E2E1]/40">
          Network Liquidity
        </h5>
        {/* Minimalist Live Status */}
        <div className="w-1 h-1 bg-green-500/60 rounded-full" />
      </div>

      {/* LIST */}
      <div className="flex flex-col gap-3.5 w-full flex-grow">
        {[
          { label: "USD Flow", value: "$12.4M" },
          { label: "NGN Demand", value: "High" },
          { label: "Spread Pressure", value: "Rising", color: "text-red-400" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center gap-10 group"
          >
            <span className="text-[13px] text-[#D3C4B2]/70 group-hover:text-[#D3C4B2] transition-colors">
              {item.label}
            </span>
            <span
              className={`text-[13px] font-bold text-[#E5E2E1] tabular-nums ${item.color || ""}`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="mt-6">
        <button
          className="
          w-full py-2.5 
          bg-[#1E1E1E] hover:bg-[#252525] 
          rounded-xl 
          text-[10px] font-bold uppercase tracking-widest text-[#E5E2E1]/60 hover:text-[#E5E2E1]
          transition-all border border-white/5 active:scale-[0.98]
        "
        >
          View Details
        </button>
      </div>
    </div>
  );
}
