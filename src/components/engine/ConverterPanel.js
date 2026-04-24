"use client";

import { useState } from "react";
import EngineCard from "./EngineCard";

export default function ConverterPanel() {
  const [amount, setAmount] = useState(1);

  const rate = 0.000667;
  const result = amount * rate;

  return (
    <div className="bg-[#151515] rounded-3xl p-6 h-115.5 flex flex-col">
      <h2 className="text-white font-bold text-lg">
        NGN / USD Converter
      </h2>

      {/* Input */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mt-4 bg-[#333] text-white p-3 rounded-lg outline-none"
      />

      {/* From */}
      <div className="mt-4 border border-dashed border-gray-500 p-3 rounded-lg text-gray-300">
        FROM: NGN
      </div>

      {/* To */}
      <div className="mt-2 border border-dashed border-gray-500 p-3 rounded-lg text-gray-300">
        TO: USD
      </div>

      {/* Result */}
      <div className="mt-auto text-center">
        <p className="text-gray-400 text-sm">Converted Value</p>
        <h1 className="text-2xl font-bold text-[#C29241]">
          {result.toFixed(6)} USD
        </h1>
        <p className="text-xs text-gray-500">
          1 NGN = {rate}
        </p>
      </div>
    </div>
  );
}