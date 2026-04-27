"use client";
import React, { useState } from "react";

export default function SystemSettings() {
  const [threshold, setThreshold] = useState(72);
  const [alerts, setAlerts] = useState({
    email: true,
    push: true,
    risk: false,
  });

  const toggleAlert = (key) => {
    setAlerts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full min-h-screen text-[#E5E2E1] p-2 flex flex-col items-center mb-10">
      <div className="w-full flex flex-col gap-10">
        {/* Header */}
        <header className="flex flex-col gap-3 justify-center ">
          <p className="text-2xl leading-relaxed text-[#43E188] ">Settings</p>
        </header>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* 1. Sensitivity Adjustment */}
          <section className="lg:col-span-7 bg-[#222121]/50 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-8 shadow-2xl transition-all duration-500 hover:border-white/20">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold tracking-tight">
                Sensitivity Adjustment
              </h2>
              <p className="text-sm text-[#D3C4B2]/70 leading-relaxed max-w-[480px]">
                Define the confidence threshold for automated ACT signals.
                Higher values prioritize accuracy over frequency.
              </p>
            </div>

            <div className="bg-[#0E0E0E] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-[#F3BE68] font-black">
                    Current Parameter
                  </p>
                  <p className="text-[11px] text-[#D3C4B2]/50 font-medium mt-1">
                    Threshold Level
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-[#F3BE68] tracking-tighter tabular-nums transition-all">
                    {threshold}
                  </span>
                  <span className="text-xl text-[#F3BE68]/40 font-bold">%</span>
                </div>
              </div>

              {/* Functional Slider UI */}
              <div className="relative group py-4 cursor-pointer">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={threshold}
                  onChange={(e) => setThreshold(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                />
                <div className="h-1.5 w-full bg-[#1F2022] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#F3BE68] shadow-[0_0_10px_rgba(243,190,104,0.3)] transition-all duration-200"
                    style={{ width: `${threshold}%` }}
                  />
                </div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-[#F3BE68] rounded-full shadow-[0_0_15px_rgba(243,190,104,0.4)] transition-all duration-200 pointer-events-none group-hover:scale-110"
                  style={{ left: `calc(${threshold}% - 12px)` }}
                />
              </div>

              <div className="flex justify-between text-[9px] text-[#D3C4B2]/40 font-bold uppercase tracking-tighter">
                <span>Low (Scalping)</span>
                <span
                  className={
                    threshold > 40 && threshold < 60 ? "text-[#F3BE68]" : ""
                  }
                >
                  Neutral
                </span>
                <span>Strict (Hedge)</span>
              </div>
            </div>

            {/* Status Banner */}
            <div className="flex items-center gap-4 bg-[#02C16D]/5 border border-[#02C16D]/20 rounded-2xl p-4">
              <div className="w-2 h-2 bg-[#02C16D] rounded-full animate-pulse shadow-[0_0_8px_#02C16D]" />
              <p className="text-[#02C16D] text-[11px] font-bold uppercase tracking-wide">
                System operating within optimal risk parameters
              </p>
            </div>
          </section>

          {/* 2. Alert Configuration */}
          <section className="lg:col-span-5 bg-[#222121]/50 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl">
            <h2 className="text-xl font-bold tracking-tight">
              Alert Configuration
            </h2>

            <div className="flex flex-col gap-3">
              {[
                {
                  id: "email",
                  title: "Email Alerts",
                  desc: "Trading notifications",
                },
                {
                  id: "push",
                  title: "Push Alerts",
                  desc: "Mobile instant updates",
                },
                {
                  id: "risk",
                  title: "Risk Alerts",
                  desc: "High-risk warnings",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleAlert(item.id)}
                  className="flex justify-between items-center bg-white/5 hover:bg-white/[0.08] transition-all duration-300 rounded-2xl p-4 border border-white/5 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                        alerts[item.id]
                          ? "bg-[#F3BE68] text-[#432C00]"
                          : "bg-[#353534] text-[#D3C4B2]/40"
                      }`}
                    >
                      {item.title[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{item.title}</p>
                      <p className="text-[11px] text-[#D3C4B2]/50">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Functional Toggle */}
                  <div
                    className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${
                      alerts[item.id] ? "bg-[#F3BE68]" : "bg-[#353534]"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-4 h-4 rounded-full shadow-sm transition-all duration-300 ${
                        alerts[item.id]
                          ? "right-0.5 bg-[#432C00]"
                          : "left-0.5 bg-[#D3C4B2]/20"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. API Management */}
          <section className="lg:col-span-12 bg-[#222121]/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl mt-4 transition-all duration-500 hover:border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 gap-6 border-b border-white/5 bg-white/[0.01]">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-[#F3BE68]">
                  API Key Management
                </h2>
                <p className="text-sm text-[#D3C4B2]/60 mt-1">
                  Integrate external execution engines and data feeds.
                </p>
              </div>
              <button className="group w-full md:w-auto px-6 py-3 bg-[#F3BE68] hover:bg-[#ffcf81] active:scale-95 text-[#432C00] font-black text-[10px] uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2">
                Generate New Key
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[700px]">
                {[1, 2, 3].map((row) => (
                  <div
                    key={row}
                    className="flex items-center justify-between px-8 py-5 border-t border-white/5 first:border-t-0 hover:bg-white/[0.03] transition-colors group"
                  >
                    <div className="flex items-center gap-4 w-1/4">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-mono group-hover:border-[#F3BE68]/30 transition-colors">
                        0{row}
                      </div>
                      <span className="font-bold text-sm group-hover:text-white transition-colors">
                        Engine_Service_{row}
                      </span>
                    </div>

                    <div className="w-1/3">
                      <code className="bg-black/40 px-3 py-1.5 rounded-md text-[#F3BE68] text-[11px] font-mono border border-white/5 group-hover:border-[#F3BE68]/20 transition-all">
                        SL-••••••••••AX{row}9
                      </code>
                    </div>

                    <div className="flex items-center gap-2 w-1/6">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#02C16D] shadow-[0_0_8px_#02C16D]" />
                      <span className="text-[#02C16D] text-[10px] font-bold uppercase tracking-wide">
                        Active
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <button className="text-[10px] font-bold text-[#D3C4B2]/40 hover:text-[#F3BE68] transition-colors uppercase">
                        Edit
                      </button>
                      <button className="text-[10px] font-bold text-red-500/60 hover:text-red-500 transition-colors uppercase">
                        Revoke
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
