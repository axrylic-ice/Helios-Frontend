"use client";

import Logo from "../icons/Logo";
import Link from "next/link";

export default function Header() {
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
        <div
          className="
            flex gap-3 
            overflow-x-auto 
            py-2 lg:py-0 
            cursor-grab active:cursor-grabbing
            snap-x snap-mandatory
            
            /* STRIKE 1: FIXED SCROLLBAR HIDE (Cross-browser) */
            [ms-overflow-style:none] 
            [scrollbar-width:none] 
            [&::-webkit-scrollbar]:hidden

            /* STRIKE 2: ALIGNMENT FIX */
            /* We remove the negative margin and use a spacer for the bleed effect */
            relative
          "
        >
          {/* Internal padding spacer - ensures the first card aligns with the Logo */}
          <div className="min-w-[4px] shrink-0 lg:hidden" />
          
          <MarketCard pair="NGN/USD" value="1,610.40" change="-2.3%" active />
          <MarketCard pair="NGN/EUR" value="1,750.20" change="-1.1%" />
          <MarketCard pair="NGN/GBP" value="2,040.15" change="+0.5%" />
          <MarketCard pair="NGN/AUD" value="1,050.80" change="-0.8%" />
          
          {/* End spacer to allow scrolling past the last card for the fade */}
          <div className="min-w-[40px] shrink-0 lg:hidden" />
        </div>

        {/* Subtle Gradient Fade - Pinned to the very edge of the header container */}
        <div className="absolute right-[-1px] top-0 bottom-0 w-16 bg-gradient-to-l from-(--surface-primary) via-(--surface-primary)/90 to-transparent pointer-events-none lg:hidden z-10" />
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
        border transition-all duration-300
        ${
          active
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
            ${
              isNegative
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