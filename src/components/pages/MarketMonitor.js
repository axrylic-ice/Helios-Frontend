"use client";
import React from "react";
import {
  TrendingUp,
  Droplets,
  Landmark,
  Activity,
  Coins,
  BarChart3,
  PieChart,
  Globe,
  Flame,
} from "lucide-react";

export default function Workspace() {
  return (
    <main className="flex flex-col gap-8 px-8 py-2 pb-12 w-full">
      {/* DASHBOARD HEADER */}
      <header className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full">
        <div className="flex flex-col gap-1">
          <p className="text-2xl leading-relaxed text-[#43E188] ">Market Monitor</p>
          <p className="font-['Inter'] text-lg text-[#D3C4B2] opacity-80">
            Real-time decision intelligence and market liquidity analysis.
          </p>
        </div>

        {/* ACCOUNT STATUS PILL */}
        <div className="group flex items-center gap-4 bg-[#1C1B1B] border-t border-[rgba(53,53,52,0.2)] px-3 py-3 rounded-[48px]  transition-all duration-300 hover:border-[#43E188]/30 hover:shadow-[0_0_20px_rgba(67,225,136,0.05)] cursor-pointer">
          <div className="flex flex-col flex-1 text-right">
            <span className=" text-[10px] uppercase text-[#D3C4B2] group-hover:text-white transition-colors">
              Aggregate risk
            </span>
            <div className="relative flex items-center justify-end">
              <span className=" font-bold text-[20px] text-[#E5E2E1] pr-4">
                2.4%
              </span>
              <span className="absolute right-0 text-[#43E188] text-[14px]">
                ▼
              </span>
            </div>
          </div>
          <div className="relative w-12 h-12 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
            <CircularProgress percentage={2.4} size={48} strokeWidth={6} />
          </div>
        </div>
      </header>

      {/* MARKET GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {/* ROW 1: BRENT CRUDE & CORE STATS */}
        <div className="lg:col-span-2 bg-[#1C1B1B] border-t border-[rgba(53,53,52,0.2)] rounded-[16px] p-6 flex flex-col justify-between h-[262px] transition-all duration-500 hover:bg-[#222121] hover:-translate-y-1 group">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Droplets className="w-[15px] h-[15px] text-[#F3BE68] group-hover:animate-bounce" />
                <span className=" text-[12px] tracking-[1.2px] uppercase text-[#D3C4B2]">
                  Brent Crude
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <h2 className=" font-bold text-[36px] text-[#E5E2E1] tabular-nums">
                  $120.03
                </h2>
                <span className="text-[#43E188]  text-[14px] font-medium">
                  +0.45%
                </span>
              </div>
            </div>
            <div className="bg-[#0E0E0E] border border-[rgba(2,193,109,0.2)] rounded-[16px] px-3 py-1 group-hover:border-[#02C16D] transition-colors align-center justify-center items-center">
              <span className=" text-[10px] text-[#02C16D]">
                Low Volatility
              </span>
            </div>
          </div>
          <div className="flex items-end gap-1 h-24 mt-4">
            {[38, 52, 48, 62, 76, 67, 86, 81].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-[rgba(53,53,52,0.2)] rounded-t-md hover:bg-[#F3BE68] transition-all duration-300 cursor-crosshair group/bar relative"
                style={{ height: `${h}%` }}
              >
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#F3BE68] text-black text-[9px] px-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                  {h}%
                </div>
              </div>
            ))}
          </div>
        </div>

        <StatCard
          label="Parallel Market"
          value="₦1,450.00"
          change="-0.15% (24h)"
          changeColor="text-[#FFB4AB]"
          subLabel="Spread"
          subValue="Low"
          icon={<Activity className="w-3.75" />}
        />
        <StatCard
          label="Foreign Reserves"
          value="$34.2B"
          change="+0.02% (24h)"
          changeColor="text-[#43E188]"
          subLabel="Status"
          subValue="Stable"
          icon={<Landmark className="w-3.5" />}
        />

        {/* ROW 2: COMMODITIES & GLOBAL INDICES */}
        <StatCard
          label="Gold Spot Price"
          value="$2,034.12"
          change="NEUTRAL (24h)"
          changeColor="text-[#D3C4B2]"
          subLabel="Integrity"
          subValue="High"
          icon={<Coins className="w-3.75" />}
        />
        <StatCard
          label="S&P 500 Futures"
          value="5,021.50"
          change="+0.11% (24h)"
          changeColor="text-[#43E188]"
          subLabel="Sentiment"
          subValue="Bullish"
          icon={<BarChart3 className="w-[13.5px]" />}
        />

        <div className="bg-[#222121]/50 border-t border-[rgba(53,53,52,0.2)] rounded-[16px] p-6 h-60 flex flex-col justify-between hover:bg-[#222121] hover:-translate-y-1 transition-all duration-500 group">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className=" text-[10px] uppercase text-[#D3C4B2]">
                USD Index (DXY)
              </span>
              <TrendingUp className="w-3.75 text-[#D3C4B2] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <h3 className=" font-bold text-[24px] text-[#E5E2E1] tabular-nums">
              104.22
            </h3>
            <span className="text-[#43E188]  text-[12px]">+0.45% (24h)</span>
          </div>
          <div className="mt-auto bg-[#0E0E0E] rounded-[48px] py-3 px-4 flex align-center flex-col gap-2 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]">
            <div className="w-full h-1.5 bg-[#1e1e1e] rounded-full relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-[#F3BE68] shadow-[0_0_8px_#F3BE68] transition-all duration-1000 w-[65%] group-hover:brightness-125" />
            </div>
          </div>
        </div>

        <StatCard
          label="Inflation Rate"
          value="29.90%"
          change="CRITICAL THRESHOLD"
          changeColor="text-[#FFB4AB]"
          subLabel="Forecast"
          subValue="Rising"
          icon={<PieChart className="w-[15px]" />}
        />

        {/* ROW 3: FX & YIELDS (RESTORED) */}
        <StatCard
          label="EUR / USD"
          value="1.0768"
          change="+0.00% (24h)"
          changeColor="text-[#D3C4B2]"
          subLabel="Liquidity"
          subValue="Deep"
          icon={
            <Globe className="w-[13.5px] group-hover:rotate-180 transition-transform duration-700" />
          }
        />
        <StatCard
          label="Natural Gas"
          value="$1.84"
          change="-2.40% (24h)"
          changeColor="text-[#FFB4AB]"
          subLabel="Volatility"
          subValue="68/100"
          icon={
            <Flame className="w-3 group-hover:scale-125 transition-transform" />
          }
        />

        <div className="bg-[#222121]/50 border-t border-[rgba(53,53,52,0.2)] rounded-2xl p-6 h-60 flex flex-col justify-between hover:bg-[#222121] hover:-translate-y-1 transition-all duration-500 group">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className=" text-[10px] uppercase text-[#D3C4B2] tracking-wider">
                10Y Treasury Yield
              </span>
              <Activity className="w-3 text-[#D3C4B2] group-hover:animate-pulse" />
            </div>
            <h3 className=" font-bold text-[24px] text-[#E5E2E1] tabular-nums">
              4.24%
            </h3>
            <span className="text-[#43E188]  text-[12px]">+0.01% (24h)</span>
          </div>
          <div className=" text-[10px] text-[#D3C4B2] uppercase opacity-50 group-hover:opacity-100 transition-opacity">
            Integrity: 100% (FED)
          </div>
        </div>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  change,
  changeColor,
  subLabel,
  subValue,
  icon,
}) {
  return (
    <div className="bg-[#222121]/50 border-t border-[rgba(53,53,52,0.2)] rounded-2xl p-6 h-60 flex flex-col justify-between transition-all duration-500 hover:bg-[#222121] hover:-translate-y-1 group hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <span className=" text-[10px] uppercase text-[#D3C4B2] tracking-[1px] group-hover:text-white transition-colors">
            {label}
          </span>
          <div className="text-[#D3C4B2] group-hover:text-[#F3BE68] transition-colors duration-300">
            {icon}
          </div>
        </div>
        <h3 className=" font-bold text-[24px] text-[#E5E2E1] leading-none mb-2 tabular-nums">
          {value}
        </h3>
        <span className={` text-[12px] ${changeColor}`}>{change}</span>
      </div>

      <div className="flex justify-between items-end pt-4 border-t border-white/5">
        <div className="flex flex-col gap-1">
          <span className=" text-[10px] text-[#D3C4B2]">{subLabel}</span>
          <span className=" font-bold text-[14px] text-[#E5E2E1]">
            {subValue}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className=" text-[10px] text-[#D3C4B2]">Confidence</span>
          <span className=" text-[10px] text-[#02C16D] font-bold">98%</span>
        </div>
      </div>
    </div>
  );
}

const CircularProgress = ({ percentage = 2.4, size = 48, strokeWidth = 3 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="shrink-0" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="rotate-[-90deg]"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-white/10"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#43E188"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: offset,
            transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          strokeLinecap="round"
          fill="transparent"
          className="drop-shadow-[0_0_5px_rgba(67,225,136,0.5)]"
        />
      </svg>
    </div>
  );
};
