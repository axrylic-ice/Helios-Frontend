"use client";

import React from "react";

export default function LargePriceCard({ data }) {

  const parallel =
    data?.signal_sources?.parallel || 0;

  const official =
    data?.signal_sources?.official || 0;

  const spread =
    data?.signal_sources?.spread || 0;

  // optional derived FX price display
  const fxRate = parallel || 1520;

  const change =
    official > 0
      ? (((parallel - official) / official) * 100).toFixed(2)
      : 0;

  const animationStyles = `
    @keyframes drawPath {
      0% { stroke-dashoffset: 1000; opacity: 0.1; }
      50% { opacity: 0.4; }
      100% { stroke-dashoffset: 0; opacity: 0.2; }
    }
  `;

  return (
    <div className="
      relative w-full h-auto min-h-[300px]
      p-6 md:p-8 rounded-3xl bg-[#151515]/50
      hover:bg-[#151515] border border-white/10
      shadow-2xl flex flex-col justify-between overflow-hidden
    ">

      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* BACKGROUND CHART */}
      <div className="absolute inset-x-0 bottom-0 opacity-20 pointer-events-none translate-y-4">
        <svg viewBox="0 0 600 120" className="w-full h-32">
          <path
            d="M0,80 C100,20 200,140 300,60 C400,-10 500,120 600,40"
            stroke="#F3BE68"
            strokeWidth="3"
            fill="none"
            strokeDasharray="1000"
            style={{
              animation: "drawPath 5s ease-out infinite alternate",
            }}
          />
        </svg>
      </div>

      {/* TOP */}
      <div className="flex justify-between items-start z-10 relative">

        <div className="flex flex-col gap-1">
          <p className="text-[10px] tracking-[0.2em] text-[#D3C4B2]/70 uppercase font-bold">
            Currency Index
          </p>

          <div className="flex items-baseline gap-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#E5E2E1]">
              ₦{Math.round(fxRate)}
            </h1>
            <span className="text-base md:text-xl text-[#D3C4B2]/60">
              / USD
            </span>
          </div>
        </div>

        {/* CHANGE BADGE */}
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md
          ${change >= 0
            ? "border-green-400/20 bg-green-400/10 text-green-400"
            : "border-red-400/20 bg-red-400/10 text-red-400"
          }`}>

          <div className="w-1.5 h-1.5 rounded-full animate-pulse bg-current" />

          <span className="text-[11px] font-black">
            {change > 0 ? "+" : ""}{change}%
          </span>
        </div>

      </div>

      {/* METRICS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 z-10 relative mt-auto pt-8">

        <div className="flex flex-col gap-1">
          <p className="text-[9px] text-[#D3C4B2]/40 uppercase font-bold">
            Parallel Rate
          </p>
          <p className="text-lg md:text-xl font-bold text-white">
            ₦{Math.round(parallel)}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[9px] text-[#D3C4B2]/40 uppercase font-bold">
            Official Rate
          </p>
          <p className="text-lg md:text-xl font-bold text-[#D3C4B2]/80">
            ₦{Math.round(official)}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[9px] text-[#D3C4B2]/40 uppercase font-bold">
            Spread
          </p>
          <p className="text-lg md:text-xl font-bold text-[#F3BE68]">
            ₦{Math.round(spread)}
          </p>
        </div>

      </div>
    </div>
  );
}