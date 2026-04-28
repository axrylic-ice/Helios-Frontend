"use client";
import React, { useState, useRef } from "react";

export default function SignalHistorySection() {
  return (
    <section className="w-full mx-auto flex flex-col gap-6 md:gap-8 text-[#E5E2E1] px-4">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-2xl leading-relaxed text-[#43E188]">
            Signal History
          </p>
          <p className="text-base leading-relaxed text-[#D3C4B2] max-w-[520px]">
            Real-time FX signal monitoring across USD/NGN spreads, volatility
            clusters, and execution triggers.
          </p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <MetricCard label="Accuracy" value="98.4%" color="#43E188" />
          <MetricCard label="Signals" value="128" color="#F3BE68" />
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CHART CARD */}
        <div className="lg:col-span-2 bg-[#222121]/70 border border-white/10 rounded-2xl p-6 flex flex-col gap-6 hover:border-white/20 transition-all duration-500">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="text-sm md:text-base font-bold">
              USD/NGN 30-Day Performance Overlay
            </h3>
            <div className="flex gap-4 text-[9px] uppercase tracking-wider text-[#D3C4B2]/60 font-bold">
              <span className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-[#F3BE68]" /> Price
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#02C16D]" /> Signals
              </span>
            </div>
          </div>

          <InteractiveGraph />
        </div>

        {/* SIDE INSIGHTS */}
        <div className="flex flex-col gap-4">
          <div className="group bg-[#222121]/50 p-6 rounded-2xl border border-white/10 flex-1 hover:bg-[#222121] transition-all duration-300">
            <p className="text-[9px] uppercase text-[#02C16D] tracking-widest font-bold group-hover:tracking-[4px] transition-all">
              Insight
            </p>
            <h4 className="text-xl font-bold mt-2 text-[#E5E2E1]">
              Parallel Spread
            </h4>
            <p className="text-sm text-[#D3C4B2]/80 mt-3 leading-relaxed">
              Widening FX gaps triggered 42% of signals this month.
            </p>
          </div>

          <div className="bg-[#F3BE68]/5 p-6 rounded-2xl border border-[#F3BE68]/10 hover:bg-[#F3BE68]/10 transition-colors cursor-pointer">
            <h4 className="font-bold text-sm text-[#F3BE68] uppercase tracking-tight">
              Audit Readiness
            </h4>
            <p className="text-[11px] mt-2 text-[#D3C4B2]/70 leading-normal">
              All signals are cryptographically signed for compliance export.
            </p>
          </div>
        </div>
      </div>

      {/* EXECUTION LOG */}
      <div className="bg-[#222121]/50 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/[0.01]">
          <h3 className="font-bold text-lg">Execution Log</h3>
          <div className="flex gap-2">
            {["All", "Active"].map((btn) => (
              <button
                key={btn}
                className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-[#F3BE68] hover:text-black text-[9px] font-bold uppercase transition-all duration-300"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:grid grid-cols-6 text-[9px] uppercase font-bold tracking-[2px] text-white/30 border-b border-white/5 p-6 bg-white/[0.01]">
          <div>Date</div>
          <div>Status</div>
          <div>Pair</div>
          <div>Strategy</div>
          <div>Confidence</div>
          <div className="text-right">Change</div>
        </div>

        <div className="flex flex-col">
          <TableRow status="active" change="+2.4%" color="#02C16D" delay="0ms" />
          <TableRow status="active" change="+1.1%" color="#02C16D" delay="100ms" />
          <TableRow status="inactive" change="-0.8%" color="#FFB4AB" delay="200ms" />
        </div>
      </div>
    </section>
  );
}

function TableRow({ status, change, color, delay }) {
  return (
    <div
      className="flex flex-col md:grid md:grid-cols-6 p-6 border-b border-white/[0.03] items-center hover:bg-white/[0.04] transition-all duration-300 group cursor-pointer animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      {/* Mobile Meta Row */}
      <div className="flex justify-between w-full md:hidden mb-4">
        <span className="text-xs font-mono opacity-40">2026-04-24</span>
        <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-md ${status === "active" ? "bg-green-500/10 text-green-400" : "bg-white/5 text-white/40"}`}>
          {status}
        </span>
      </div>

      <div className="hidden md:block text-xs font-mono opacity-40 group-hover:opacity-100 transition-opacity">
        2026-04-24
      </div>
      
      <div className="hidden md:block">
        <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-md transition-all ${
            status === "active" ? "bg-green-500/10 text-green-400 border border-green-500/20 group-hover:bg-green-500/20" : "bg-white/5 text-white/40 border border-white/10"
          }`}>
          {status}
        </span>
      </div>

      <div className="flex justify-between w-full md:block">
        <span className="text-[10px] md:hidden text-white/30 uppercase font-bold">Pair</span>
        <span className="text-xs font-bold text-[#E5E2E1] group-hover:text-[#F3BE68] transition-colors">USD / NGN</span>
      </div>

      <div className="flex justify-between w-full md:block mt-2 md:mt-0">
        <span className="text-[10px] md:hidden text-white/30 uppercase font-bold">Strategy</span>
        <span className="text-xs text-[#D3C4B2]/70">Spread Break</span>
      </div>

      <div className="flex justify-between w-full md:flex md:items-center md:gap-2 mt-2 md:mt-0">
        <span className="text-[10px] md:hidden text-white/30 uppercase font-bold">Confidence</span>
        <div className="flex items-center gap-2">
          <div className="hidden md:block w-12 h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#02C16D] w-[98.4%]" />
          </div>
          <span className="text-xs font-mono">98.4%</span>
        </div>
      </div>

      <div className="flex justify-between w-full md:block md:text-right mt-4 md:mt-0 pt-4 md:pt-0 border-t border-white/5 md:border-0">
        <span className="text-[10px] md:hidden text-white/30 uppercase font-bold">Change</span>
        <span className="font-bold font-mono text-sm" style={{ color }}>{change}</span>
      </div>
    </div>
  );
}

function MetricCard({ label, value, color }) {
  return (
    <div className="group bg-[#1C1B1B] py-2 px-4 rounded-2xl border border-white/10 flex-1 md:min-w-[140px] items-center hover:border-white/30 transition-all duration-300">
      <p className="text-[10px] uppercase text-white/40 font-bold tracking-widest group-hover:text-white/60 transition-colors">
        {label}
      </p>
      <p className="text-2xl font-black mt-1 transition-transform group-hover:scale-105" style={{ color }}>
        {value}
      </p>
    </div>
  );
}

function InteractiveGraph() {
  const [hoverData, setHoverData] = useState({ x: 0, val: 1610, visible: false });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const xPercent = (x / rect.width) * 100;
    const mockPrice = (1610 + xPercent * 0.5).toFixed(2);
    setHoverData({ x, val: mockPrice, visible: true });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[260px] bg-black/40 rounded-2xl overflow-hidden border border-white/5 cursor-crosshair group/graph"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverData((prev) => ({ ...prev, visible: false }))}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-4 py-8 pointer-events-none opacity-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full border-t border-dashed border-white/40" />
        ))}
      </div>

      <svg className="absolute inset-0 w-full h-full p-4" preserveAspectRatio="none" viewBox="0 0 500 100">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F3BE68" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F3BE68" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 0 100 L 0 80 L 50 60 L 100 90 L 150 40 L 200 70 L 250 30 L 300 45 L 350 10 L 400 35 L 450 25 L 500 50 L 500 100 Z" fill="url(#lineGradient)" />
        <path d="M 0 80 L 50 60 L 100 90 L 150 40 L 200 70 L 250 30 L 300 45 L 350 10 L 400 35 L 450 25 L 500 50" fill="none" stroke="#F3BE68" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="150" cy="40" r="3" fill="#02C16D" className="animate-pulse shadow-[0_0_10px_#02C16D]" />
        <circle cx="350" cy="10" r="3" fill="#02C16D" className="animate-pulse" />
      </svg>

      {hoverData.visible && (
        <>
          <div className="absolute top-0 bottom-0 w-[1px] bg-white/20 pointer-events-none transition-transform duration-75" style={{ transform: `translateX(${hoverData.x}px)` }} />
          <div className="absolute z-30 pointer-events-none flex flex-col items-center" style={{ left: hoverData.x, top: "20%" }}>
            <div className="bg-black/90 border border-[#F3BE68]/50 p-3 rounded-xl backdrop-blur-xl shadow-2xl -translate-x-1/2">
              <p className="text-[8px] text-[#F3BE68] uppercase font-black tracking-tighter">Live Tracker</p>
              <p className="text-lg font-mono font-bold text-white tracking-tighter">₦{hoverData.val}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}