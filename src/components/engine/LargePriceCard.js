"use client";

import React from "react";

export default function LargePriceCard() {
  const animationStyles = `
    @keyframes drawPath {
      0% { stroke-dashoffset: 1000; opacity: 0.1; }
      50% { opacity: 0.4; }
      100% { stroke-dashoffset: 0; opacity: 0.2; }
    }
    @keyframes floatingGlow {
      0%, 100% { transform: translateY(0px) opacity: 0.3; }
      50% { transform: translateY(-10px) opacity: 0.5; }
    }
  `;

  return (
    <div
      className="
      relative 
      w-full  
      h-auto min-h-[300px]
      p-6 md:p-8 
      rounded-3xl 
      bg-[#151515]/50
      hover:bg-[#151515]
      border border-white/10 
      shadow-2xl 
      flex flex-col justify-between 
      overflow-hidden
    "
    >
      {/* Injecting keyframes safely */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* Ambient background glow */}

      {/* faint background chart with drawing animation */}
      <div className="absolute inset-x-0 bottom-0 opacity-20 pointer-events-none translate-y-4">
        <svg
          viewBox="0 0 600 120"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <path
            d="M0,80 C100,20 200,140 300,60 C400,-10 500,120 600,40"
            stroke="#F3BE68"
            strokeWidth="3"
            fill="none"
            strokeDasharray="1000"
            style={{
              animation: "drawPath 5s ease-out infinite alternate",
              strokeLinecap: "round",
            }}
          />
        </svg>
      </div>

      {/* TOP SECTION */}
      <div className="flex justify-between items-start z-10 relative">
        <div className="flex flex-col gap-1">
          <p className="text-[10px] tracking-[0.2em] text-[#D3C4B2]/70 uppercase font-bold">
            Currency Index
          </p>

          <div className="flex items-baseline gap-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#E5E2E1] leading-none tracking-tighter tabular-nums">
              ₦1,520
            </h1>
            <span className="text-base md:text-xl text-[#D3C4B2]/60 font-medium">
              / USD
            </span>
          </div>
        </div>

        {/* RIGHT BADGE */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-400/20 bg-green-400/10 backdrop-blur-md transition-all hover:bg-green-400/20">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-[11px] font-black tracking-tight">
            +1.2%
          </span>
        </div>
      </div>

      {/* MIDDLE METRICS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 z-10 relative mt-auto pt-8  border-white/5 ">
        <div className="flex flex-col gap-1 group">
          <p className="text-[9px] text-[#D3C4B2]/40 uppercase font-bold tracking-widest group-hover:text-[#F3BE68]/50 transition-colors">
            Parallel Rate
          </p>
          <p className="text-lg md:text-xl font-bold text-white">₦1,520</p>
        </div>

        <div className="flex flex-col gap-1 group">
          <p className="text-[9px] text-[#D3C4B2]/40 uppercase font-bold tracking-widest group-hover:text-[#F3BE68]/50 transition-colors">
            Official Rate
          </p>
          <p className="text-lg md:text-xl font-bold text-[#D3C4B2]/80">
            ₦1,450
          </p>
        </div>

        <div className="flex flex-col gap-1 col-span-2 md:col-span-1 group">
          <p className="text-[9px] text-[#D3C4B2]/40 uppercase font-bold tracking-widest group-hover:text-[#F3BE68]/50 transition-colors">
            Spread
          </p>
          <p className="text-lg md:text-xl font-bold text-[#F3BE68]">₦70</p>
        </div>
      </div>
    </div>
  );
}
