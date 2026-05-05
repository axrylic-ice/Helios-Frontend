"use client";

import React from "react";
import EngineCard from "./EngineCard";
import { marketPulseDetails } from "./DummyData";

export default function EngineMetricsCard({ data }) {

  const healthScore = Math.round((data?.confidence ?? 0) * 100);

  const animationStyles = `
    @keyframes barShimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes iconPulse {
      0%, 100% { opacity: 1; filter: brightness(1); }
      50% { opacity: 0.8; filter: brightness(1.2); }
    }
  `;

  return (
    <EngineCard
      className="  bg-[#151515]/50
      hover:bg-[#151515]"
      details={marketPulseDetails}
      title="Market Pulse"
    >
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      <div className="flex justify-between items-start w-full mb-6 ">
        <div className="flex flex-col gap-1">
          <p className=" text-[10px] tracking-[1px] text-[#D3C4B2] uppercase">
            Engine Status
          </p>
          <h3 className=" text-[20px] font-bold text-[#E5E2E1] leading-[28px]">
            Market Pulse
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {[
          {
            label: "Volatility",
            value: data?.market_state?.volatility_level ?? "UNKNOWN",
            color:
              data?.market_state?.volatility_level === "HIGH"
                ? "text-red-400"
                : "text-[#43E188]",
          },
          {
            label: "Liquidity",
            value: data?.market_state?.liquidity_level ?? "UNKNOWN",
            color: "text-[#E5E2E1]",
          },
        ].map((metric, i) => (
          <div
            key={i}
            className="flex justify-between items-center h-[33px] border-b border-[rgba(79,69,56,0.05)] pb-2"
          >
            <span className=" text-[#D3C4B2] text-[12px] leading-[16px]">
              {metric.label}
            </span>
            <span
              className={` text-[12px] font-bold leading-[16px] ${metric.color}`}
            >
              {metric.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-auto bg-[#0E0E0E] rounded-[48px] py-3 px-4 flex align-center flex-col gap-2 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]">
        <div className="flex justify-between items-center w-full">
          <span className=" text-[10px] text-[#D3C4B2] leading-[15px]">
            Engine Health
          </span>
          <span className=" text-[10px] font-bold text-[#F3BE68] leading-[15px]">
            {healthScore}%
          </span>
        </div>

        <div className="h-1 w-full bg-[#353534] rounded-full relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[#F3BE68] transition-all duration-700 ease-out"
            style={{ width: `${healthScore}%` }}
          >
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                animation: "barShimmer 2s infinite",
                width: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </EngineCard>
  );
}