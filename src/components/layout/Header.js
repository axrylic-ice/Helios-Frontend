"use client";

import { useEffect, useState } from "react";
import Logo from "../icons/Logo";
import Link from "next/link";
import { analyzeDecision } from "@/lib/api"; // Adjust path as needed

export default function Header() {
  const [marketData, setMarketData] = useState([
    { pair: "NGN/USD", value: "---", change: "0.0%", active: true },
    { pair: "NGN/EUR", value: "---", change: "0.0%", active: false },
    { pair: "NGN/GBP", value: "---", change: "0.0%", active: false },
    { pair: "NGN/AUD", value: "---", change: "0.0%", active: false },
  ]);

  useEffect(() => {
    async function fetchMarketStatus() {
      try {
        // We call analyze for NGN/USD as our base anchor
        const data = await analyzeDecision({
          fx_pair: "NGN/USD",
          amount: 1000,
          time_horizon_days: 7,
        });

        if (data) {
          const { market_state, fx_other_pairs, signal_sources } = data;
          
          // Format change string based on estimated devaluation
          const changeVal = market_state.estimated_devaluation.toFixed(1);
          const changePrefix = market_state.estimated_devaluation > 0 ? "+" : "";

          const updatedData = [
            {
              pair: "NGN/USD",
              value: signal_sources.official.toLocaleString(undefined, { minimumFractionDigits: 2 }),
              change: `${changePrefix}${changeVal}%`,
              active: true,
            },
            {
              pair: "NGN/EUR",
              value: fx_other_pairs.EURNGN.toLocaleString(undefined, { minimumFractionDigits: 2 }),
              change: "LIVE", // Or calculate cross-pair changes if available
              active: false,
            },
            {
              pair: "NGN/GBP",
              value: fx_other_pairs.GBPNGN.toLocaleString(undefined, { minimumFractionDigits: 2 }),
              change: "LIVE",
              active: false,
            },
            {
              pair: "NGN/AUD",
              value: fx_other_pairs.AUDNGN.toLocaleString(undefined, { minimumFractionDigits: 2 }),
              change: "LIVE",
              active: false,
            },
          ];
          setMarketData(updatedData);
        }
      } catch (error) {
        console.error("Failed to fetch market data:", error);
      }
    }

    fetchMarketStatus();
    // Refresh every 5 minutes
    const interval = setInterval(fetchMarketStatus, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 px-4 md:px-6 py-3 lg:pb-3 h-fit pt-4 bg-(--surface-primary) border-b border-white/5 sticky top-0 z-40 backdrop-blur-md">
      
      {/* BRANDING SECTION */}
      <div className="flex items-center gap-2 self-start lg:self-center shrink-0">
        <Link href="/">
          <Logo className="cursor-pointer h-8 w-8" />
        </Link>
        <div className="flex flex-col justify-center">
          <div className="text-[#C29241] font-bold text-[18px] md:text-[20px] leading-none tracking-[-1px]">
            Fotuna
          </div>
          <div className="text-[#F6F3EA]/60 text-[8px] md:text-[10px] uppercase tracking-[1px] whitespace-nowrap mt-1">
            FX Decision Intelligence
          </div>
        </div>
      </div>

      {/* MARKET CARDS CONTAINER */}
      <div className="w-full lg:w-auto relative min-w-0">
        <div className="flex gap-3 overflow-x-auto py-2 lg:py-0 cursor-grab active:cursor-grabbing snap-x snap-mandatory [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative">
          <div className="min-w-[4px] shrink-0 lg:hidden" />
          
          {marketData.map((item) => (
            <MarketCard 
              key={item.pair}
              pair={item.pair} 
              value={item.value} 
              change={item.change} 
              active={item.active} 
            />
          ))}
          
          <div className="min-w-[40px] shrink-0 lg:hidden" />
        </div>
        <div className="absolute right-[-1px] top-0 bottom-0 w-16 bg-gradient-to-l from-(--surface-primary) via-(--surface-primary)/90 to-transparent pointer-events-none lg:hidden z-10" />
      </div>
    </header>
  );
}

function MarketCard({ pair, value, change, active }) {
  // Check for positive change or neutral "LIVE" tag
  const isNegative = change.startsWith("-");
  const isNeutral = change === "LIVE";

  return (
    <div
      className={`
        snap-center shrink-0 w-[160px] aspect-[16/5.5] rounded-2xl py-1 px-4
        flex flex-col justify-between h-fit bg-[#1E1E1E] border transition-all duration-300
        ${active
            ? "opacity-100 border-(--gold)/5 bg-[#252525] shadow-[0_0_15px_rgba(194,146,65,0.1)]"
            : "opacity-40 border-white/5 hover:opacity-70"
        }
      `}
    >
      <div className="text-[10px] font-bold text-white/20 uppercase tracking-wider">
        {pair}
      </div>

      <div className="flex justify-between items-end">
        <div className="text-[15px] font-bold text-(--text-primary) tabular-nums">
          {value}
        </div>
        <div
          className={`
            text-[11px] font-bold px-1.5 py-0.5 rounded
            ${isNeutral 
              ? "text-blue-400/90 bg-blue-400/10" 
              : isNegative
                ? "text-red-400/90 bg-red-400/10"
                : "text-green-400/90 bg-green-400/10"
            }
          `}
        >
          {change}
        </div>
      </div>
    </div>
  );
}