"use client";

import Logo from "../icons/Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 px-4 md:px-6 py-3 lg:pb-3 h-fit pt-4 bg-(--surface-primary) border-b border-white/5 sticky top-0 z-50 backdrop-blur-md">
      <div className=" flex items-center gap-2">
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

      {/* MARKET CARDS CONTAINER - Improved touch area */}
      <div className="w-full lg:w-auto relative group">
        <div
          className="
          flex gap-3 
          overflow-x-auto 
          py-1 lg:py-0 
          cursor-grab active:cursor-grabbing
          scrollbar-hide 
          snap-x snap-mandatory
          -mx-4 px-4 lg:mx-0 lg:px-0 /* Bleeds to edge of screen on mobile */
        "
        >
          <MarketCard pair="NGN/USD" value="1,610.40" change="-2.3%" active />
          <MarketCard pair="NGN/EUR" value="1,750.20" change="-1.1%" />
          <MarketCard pair="NGN/GBP" value="2,040.15" change="+0.5%" />
          <MarketCard pair="NGN/AUD" value="1,050.80" change="-0.8%" />
          <div className="w-4 shrink-0 lg:hidden" /> {/* Increased spacer */}
        </div>

        {/* Subtle Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-(--surface-primary) to-transparent pointer-events-none lg:hidden" />
      </div>
    </header>
  );
}

function MarketCard({ pair, value, change, active }) {
  const isNegative = change.startsWith("-");

  return (
    <div
      className={`
        snap-center
        shrink-0
        w-[160px]
        aspect-[16/5.5]
        rounded-2xl
        py-1 px-4
        flex flex-col justify-between h-fit
        bg-[#1E1E1E]
        border border-white/5
        transition-all duration-300
        ${
          active
            ? "opacity-100 border border-(--gold) bg-[#252525]"
            : "opacity-40 hover:opacity-80"
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
          ${
            isNegative
              ? "text-red-400/90 bg-red-400/5"
              : "text-green-400/90 bg-green-400/5"
          }
        `}
        >
          {change}
        </div>
      </div>
    </div>
  );
}
