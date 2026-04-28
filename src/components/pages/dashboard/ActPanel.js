"use client";

import React from "react";

export default function ActPanel() {
  const confidence = 94;
  const strokeDasharray = 2 * Math.PI * 70;
  const strokeDashoffset = strokeDasharray - (confidence / 100) * strokeDasharray;

  return (
    <div className="max-w-full bg-[#1E1E1E] rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.6)] p-6 md:p-10 relative overflow-hidden">
      {/* TOP BAR - Stacked on tiny screens, Row on mobile+ */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-[10px] tracking-widest uppercase text-green-400 font-bold">
            UPDATED: 10:45 AM (NEXT SYNC IN 12M)
          </span>
        </div>

        <div className="px-3 py-1 rounded-full border border-white/10 bg-[rgba(243,190,104,0.1)] text-[10px] md:text-[11px] font-bold text-[#F3BE68]/60">
          30-Day Accuracy: 84.2%
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        {/* GAUGE */}
        <div className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center shrink-0">
          <svg
            className="absolute w-full h-full -rotate-90"
            viewBox="0 0 160 160"
          >
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="transparent"
              stroke="#353534"
              strokeWidth="10"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="transparent"
              stroke="#F3BE6860"
              strokeWidth="12"
              strokeDasharray={strokeDasharray}
              style={{
                strokeDashoffset,
                transition: "stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              strokeLinecap="round"
            />
          </svg>

          <div className="text-center z-10">
            <div className="text-3xl md:text-[36px] font-black text-[#F3BE68] tabular-nums">
              {confidence}%
            </div>
            <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#D3C4B2] opacity-50">
              Confidence
            </div>
          </div>
        </div>

        {/* ACT BLOCK */}
        <div className="relative w-full md:w-auto">
          <div className="absolute inset-0 bg-[#F3BE68]/2 blur-xl rounded-full scale-75 animate-soft-pulse" />

          <div className="relative w-full md:w-auto px-6 py-4 md:px-12 md:py-6 bg-[rgba(19,19,19,0.4)] border border-white/10 rounded-2xl backdrop-blur-md flex justify-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F3BE68]/30 to-transparent animate-scan-slow" />

            {/* Scaled text for mobile to prevent overflow */}
            <h1 className="text-4xl sm:text-5xl md:text-[96px] font-extrabold text-[#F3BE68]/80 leading-none tracking-tighter md:tracking-[-4px] text-center whitespace-nowrap z-10">
              BUY USD NOW
            </h1>
          </div>
        </div>
      </div>

      {/* BOTTOM TEXT */}
      <div className="mt-8 md:mt-10 text-center text-lg md:text-[24px] text-[#D3C4B2] opacity-70 leading-relaxed">
        Estimated{" "}
        <span className="text-red-500 font-bold">
          2.4% Naira devaluation
        </span>{" "}
        <br className="md:hidden" /> {/* Force break on mobile for better rhythm */}
        within 48–72 hours
      </div>

      <style jsx>{`
        @keyframes scan-slow {
          0% { transform: translateY(-10px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(110px); opacity: 0; }
        }
        @keyframes soft-pulse {
          0%, 100% { transform: scale(0.85); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.6; }
        }
        .animate-scan-slow { animation: scan-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-soft-pulse { animation: soft-pulse 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}