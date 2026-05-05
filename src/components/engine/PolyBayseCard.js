"use client";

import EngineCard from "./EngineCard";
import { polyBayseDetails } from "./DummyData";

export default function PolyBayseCard({ data }) {
  const sentiment = data?.model_outputs?.polymarket_sentiment || 0;
  const spread = data?.signal_sources?.spread || 0;
  const volatility = data?.market_state?.volatility_level;

  // ---- BAYES STYLE RISK SCORE (simple fusion logic) ----
  const riskScore = Math.min(
    100,
    Math.round(sentiment * 100 + (spread / 50) * 20)
  );

  const isRisk = riskScore > 60;

  const biasShort = Math.round(riskScore);
  const biasLong = 100 - biasShort;

  return (
    <EngineCard
      className="flex flex-col p-4 bg-[#151515]/50 hover:bg-[#151515]"
      details={polyBayseDetails}
      title="Poly / Bayes"
    >
      {/* HEADER */}
      <div>
        <p className="text-[10px] text-[#D3C4B2]/60 uppercase tracking-[0.2em] font-bold">
          Decision Model
        </p>
        <h3 className="text-xl font-bold text-[#E5E2E1] leading-tight">
          Poly / Bayes
        </h3>
      </div>

      {/* SIGNAL */}
      <div className="flex flex-col items-center justify-center flex-grow py-4 px-1">
        <h1
          className={`text-4xl md:text-5xl font-black tracking-tighter animate-pulse ${
            isRisk ? "text-red-500" : "text-green-500"
          }`}
        >
          {isRisk ? "RISK" : "STABLE"}
        </h1>

        <p className="text-[#D3C4B2]/80 text-[11px] mt-2 text-center leading-relaxed max-w-[140px]">
          {volatility === "HIGH"
            ? "Volatility spike detected"
            : "Market conditions within range"}
        </p>
      </div>

      {/* BIAS BAR */}
      <div className="mt-2 pt-3">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[8px] uppercase tracking-wider text-[#D3C4B2]/40 font-bold">
            Bias
          </span>

          <span className="text-[9px] font-mono text-red-400">
            {biasShort}% Short
          </span>
        </div>

        <div className="h-1.5 w-full flex rounded-full overflow-hidden bg-white/5">
          <div
            className="bg-red-400"
            style={{ width: `${biasShort}%` }}
          />
          <div
            className="bg-green-400 opacity-40"
            style={{ width: `${biasLong}%` }}
          />
        </div>
      </div>
    </EngineCard>
  );
}