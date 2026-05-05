"use client";
import React, { useState } from "react";
import { Info } from "lucide-react";
import InfoOverlay from "./InfoOverlay";

export default function MarketContextList({ data }) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const usdFlow = data?.market_state?.usd_flow || "Stable";
  const liquidity = data?.market_state?.liquidity_level || "High";
  const spread = data?.signal_sources?.spread || 0;
  const spreadLabel = spread > 50 ? "Rising" : "Stable";

  // Data for the overlay
  const infoData = {
    title: "Network Liquidity Intelligence",
    weight: "Critical",
    mechanism: "Aggregates real-time inflow/outflow across primary FX corridors. It measures the depth of the order book and the speed at which large orders move the spot price.",
    signalEffect: `The current ${liquidity.toLowerCase()} liquidity coupled with ${spreadLabel.toLowerCase()} spread pressure indicates a ${spreadLabel === "Rising" ? "narrowing" : "stable"} window for high-volume transactions.`
  };

  return (
    <>
      <div className="
        w-full bg-[#151515]/50 hover:bg-[#151515]
        backdrop-blur-sm border border-white/5
        rounded-3xl p-5 md:p-6 flex flex-col
        hover:border-[#F3BE68]/20 transition-colors duration-500
      ">
        {/* HEADER */}
        <div className="pb-3 mb-4 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#E5E2E1]/40">
              Network Liquidity
            </h5>
            <button 
              onClick={() => setIsOverlayOpen(true)}
              className="hover:text-[#F3BE68] transition-colors"
            >
              <Info className="w-3 h-3 text-[#E5E2E1]/20 hover:text-inherit" />
            </button>
          </div>
          <div className="w-1 h-1 bg-green-500/60 rounded-full" />
        </div>

        {/* LIST */}
        <div className="flex flex-col gap-3.5 w-full flex-grow">
          <div className="flex justify-between items-center gap-10 group">
            <span className="text-[13px] text-[#D3C4B2]/70">USD Flow</span>
            <span className="text-[13px] font-bold text-[#E5E2E1]">{usdFlow}</span>
          </div>

          <div className="flex justify-between items-center gap-10 group">
            <span className="text-[13px] text-[#D3C4B2]/70">NGN Liquidity</span>
            <span className="text-[13px] font-bold text-[#E5E2E1]">{liquidity}</span>
          </div>

          <div className="flex justify-between items-center gap-10 group">
            <span className="text-[13px] text-[#D3C4B2]/70">Spread Pressure</span>
            <span className={`text-[13px] font-bold tabular-nums ${
              spreadLabel === "Rising" ? "text-red-400" : "text-green-400"
            }`}>
              {spreadLabel}
            </span>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-6">
          <button 
            onClick={() => setIsOverlayOpen(true)}
            className="
              w-full py-2.5 bg-[#1E1E1E] hover:bg-[#252525]
              rounded-xl text-[10px] font-bold uppercase tracking-widest
              text-[#E5E2E1]/60 hover:text-[#E5E2E1]
              transition-all border border-white/5 active:scale-[0.98]
            "
          >
            View Details
          </button>
        </div>
      </div>

      <InfoOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
        data={infoData} 
      />
    </>
  );
}