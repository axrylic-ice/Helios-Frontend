"use client";

import React from "react";
import EngineCard from "./EngineCard";
import { lstmDetails } from "./DummyData";

export default function LSTMCard({ data }) {
  const sentiment = data?.model_outputs?.polymarket_sentiment || 0;

  // simulate sequence from real signal
  const sequence = [
    sentiment * 40,
    sentiment * 60,
    sentiment * 50,
    sentiment * 80,
    sentiment * 70,
    sentiment * 90,
    sentiment * 75,
  ];

  const strength =
    sentiment > 0.7 ? "HIGH" : sentiment > 0.4 ? "MEDIUM" : "LOW";

  return (
    <EngineCard
      className="flex flex-col p-4 bg-[#151515]/50 hover:bg-[#151515] border border-white/5 rounded-2xl"
      details={lstmDetails}
      title="LSTM Sequence"
    >
      <div className="mb-4">
        <p className="text-[10px] text-[#D3C4B2]/40 uppercase tracking-[0.2em] font-bold">
          Model
        </p>
        <h3 className="text-xl font-bold text-[#E5E2E1] leading-tight">
          LSTM Sequence
        </h3>
      </div>

      {/* REAL DATA DRIVEN BARS */}
      <div className="flex items-end gap-1.5 mt-2 h-24">
        {sequence.map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-[#F3BE68]/40 rounded-t-3xl hover:bg-[#F3BE68] transition-colors duration-300"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="mt-8 pt-3 flex justify-between items-center gap-4">
        <span className="text-[10px] text-[#D3C4B2]/30 uppercase font-medium">
          Strength
        </span>

        <div className="flex items-center gap-1.5">
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              strength === "HIGH"
                ? "bg-green-500"
                : strength === "MEDIUM"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          />
          <span
            className={`text-[10px] font-black tracking-wider ${
              strength === "HIGH"
                ? "text-green-500"
                : strength === "MEDIUM"
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          >
            {strength}
          </span>
        </div>
      </div>
    </EngineCard>
  );
}