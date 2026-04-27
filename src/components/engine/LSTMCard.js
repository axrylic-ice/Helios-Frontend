"use client";
import React from "react";
import EngineCard from "./EngineCard";
import { lstmDetails } from "./DummyData";

export default function LSTMCard() {
  return (
    <EngineCard
      className=" flex flex-col p-4  bg-[#151515]/50
      hover:bg-[#151515] border border-white/5 rounded-2xl"
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

      <div className="flex items-end gap-1.5 mt-2 h-24">
        {[40, 60, 50, 80, 70, 90, 75].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-[#F3BE68]/40 rounded-t-3xl hover:bg-[#F3BE68] transition-colors duration-300"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="mt-8 pt-3   flex justify-between items-center gap-4">
        <span className="text-[10px] text-[#D3C4B2]/30 uppercase font-medium">
          Strength
        </span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-500/80 rounded-full" />
          <span className="text-green-500 text-[10px] font-black tracking-wider">
            HIGH
          </span>
        </div>
      </div>
    </EngineCard>
  );
}
