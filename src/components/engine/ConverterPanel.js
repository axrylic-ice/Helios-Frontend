"use client";

import { useState, useEffect, useRef } from "react";

export default function ConverterPanel() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("USD");
  const [displayResult, setDisplayResult] = useState(0);

  const animationRef = useRef(null);

  // Example rates for 2026 trends
  const rates = {
    NGN: 1,
    USD: 0.00062,
    GBP: 0.00049,
    EUR: 0.00058,
  };

  const conversionRate = rates[toCurrency] / rates[fromCurrency];
  const actualResult = amount * conversionRate;

  // FIXED: Smooth, non-stacking animation logic
  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const start = displayResult;
    const end = actualResult;
    const duration = 400;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setDisplayResult(start + (end - start) * ease);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [actualResult]);

  return (
    <div className="w-full h-full bg-[#151515] rounded-3xl p-4 md:p-4 flex flex-col border border-white/5 transition-all duration-500 hover:border-[#F3BE68]/20">
      <h2 className="text-white font-bold text-lg mb-4">Currency Converter</h2>

      {/* Input Group */}
      <div className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-[#1E1E1E] border border-white/5 focus:border-[#F3BE68]/40 text-(--text-primary) text-xl p-4 rounded-2xl outline-none transition-all"
            placeholder="0.00"
          />
        </div>

        {/* Direction Indicator with Dropdowns */}
        <div className="relative py-2 space-y-2">
          <div className="flex justify-between items-center bg-white/[0.03] p-4 rounded-xl border border-white/5 group hover:bg-white/[0.05] transition-colors">
            <span className="text-gray-400 text-sm">From</span>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="bg-transparent text-white font-bold outline-none cursor-pointer appearance-none hover:text-[#F3BE68] transition-colors"
            >
              <option value="NGN">NGN</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </div>

          <div className="flex justify-between items-center bg-white/[0.03] p-4 rounded-xl border border-white/5 group hover:bg-white/[0.05] transition-colors">
            <span className="text-gray-400 text-sm">To</span>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="bg-transparent text-white font-bold outline-none cursor-pointer appearance-none hover:text-[#F3BE68] transition-colors"
            >
              <option value="USD">USD</option>
              <option value="NGN">NGN</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
      </div>

      {/* Result Section */}
      <div className="mt-auto pt-6 text-center border-t border-white/5">
        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">
          Converted Value
        </p>

        <h1 className="text-3xl md:text-3xl font-black text-[#F3BE68] leading-none mb-2 tabular-nums h-10 overflow-x-clip break-all overflow-y-auto drop-shadow-[0_0_10px_rgba(243,190,104,0.1)]">
          {toCurrency === "USD" ? "$" : toCurrency === "GBP" ? "£" : "₦"}
          {displayResult.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h1>

        <p className="text-[10px] text-gray-600 font-mono">
          Rate: 1 {fromCurrency} = {conversionRate.toFixed(6)} {toCurrency}
        </p>
      </div>
    </div>
  );
}