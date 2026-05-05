"use client";

import React, { useState, useEffect } from "react";
import InfoOverlay from "../engine/InfoOverlay"; // Ensure this path is correct

// Reusable Status Badge Component
const StatusBadge = ({ type, text }) => {
  const isSuccess = type === "success";
  return (
    <div
      className={`flex flex-row items-center px-3 py-1 gap-1.5 rounded-full border transition-all duration-300 ${
        isSuccess
          ? "bg-[rgba(67,225,136,0.1)] border-[rgba(67,225,136,0.2)] text-[#43E188]"
          : "bg-[rgba(243,190,104,0.1)] border-[rgba(243,190,104,0.2)] text-[#F3BE68]"
      }`}
    >
      <div
        className={`w-2.5 h-2.5 rounded-full animate-pulse ${isSuccess ? "bg-[#43E188]" : "bg-[#F3BE68]"}`}
      />
      <span className="font-['Inter'] font-bold text-[10px] tracking-wider uppercase whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};

const TableStatus = ({ type, text }) => {
  const styles = {
    success:
      "bg-[rgba(67,225,136,0.2)] border-[rgba(67,225,136,0.3)] text-[#43E188]",
    error:
      "bg-[rgba(255,180,171,0.2)] border-[rgba(255,180,171,0.3)] text-[#FFB4AB]",
  };
  return (
    <div
      className={`flex flex-row items-start px-2 py-[2px] rounded-[16px] border ${styles[type]}`}
    >
      <span className="font-['Inter'] font-bold text-[10px] leading-[12px] flex items-center">
        {text}
      </span>
    </div>
  );
};

const MainCanvas = () => {
  const [progress, setProgress] = useState(82);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [overlayData, setOverlayData] = useState(null);

  const [tickerData, setTickerData] = useState([
    { label: "Uptime", val: "82.14", color: "#43E188" },
    { label: "Throughput", val: "1.092", color: "#43E188" },
    { label: "Jitter", val: "0.82", color: "#F3BE68" },
    { label: "Volatility", val: "+2.1%", color: "#43E188" },
    { label: "Cap", val: "12T", color: "#43E188" },
    { label: "Sentiment", val: "NEUTRAL", color: "#43E188" },
  ]);

  const executionData = [
    {
      time: "12:04",
      eng: "LSTM-Alpha-7",
      out: "0.84221.99",
      lat: "14ms",
      type: "success",
      mech: "Long Short-Term Memory network processing sequential market vectors for alpha generation.",
      signal:
        "Strong buy signal detected in the USD/NGN pair based on momentum divergence.",
    },
    {
      time: "11:58",
      eng: "XGB-Regime-V2",
      out: "MARKET_NEUTRAL",
      lat: "32ms",
      type: "success",
      mech: "Gradient boosting model identifying current market regime (Trending vs Sideways).",
      signal:
        "Current state classified as sideways; suggest reducing high-frequency execution.",
    },
    {
      time: "11:45",
      eng: "Poly_Bayes_Ref",
      out: "NULL_SIG_DET",
      lat: "--",
      type: "error",
      mech: "Bayesian inference engine analyzing cross-asset correlations.",
      signal:
        "Failed to resolve signal due to insufficient liquidity data in the local exchange node.",
    },
  ];

  const handleOpenOverlay = (
    title,
    mechanism,
    signalEffect,
    weight = "High",
  ) => {
    setOverlayData({ title, mechanism, signalEffect, weight });
    setIsOverlayOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerData((prev) =>
        prev.map((item) => ({
          ...item,
          val:
            item.label === "Jitter"
              ? (Math.random() * 1.5).toFixed(2)
              : item.val,
        })),
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen p-4 md:p-2 flex flex-col gap-6 md:gap-8 font-['Inter'] text-[#D3C4B2] ">
      <InfoOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        data={overlayData}
      />

      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6 md:gap-4 px-2">
        <div className="flex flex-col gap-1 max-w-[600px]">
          <p className="text-2xl leading-relaxed text-[#43E188]">Audit Logs</p>
          <h1 className="text-sm md:text-base font-normal leading-6 text-[#D3C4B2]">
            Restricted Technical Paper Trail & Feature Integrity Analysis
          </h1>
        </div>
        <button
          onClick={() =>
            handleOpenOverlay(
              "System Audit Report",
              "Compiles all execution logs, latency metrics, and engine drifts into a single cryptographically signed document.",
              "The system is currently operating within 99.8% integrity bounds.",
              "Critical",
            )
          }
          className="group w-full md:w-auto flex flex-row items-center justify-center px-6 py-4 md:py-3 gap-2 bg-[#222121]/50 border border-white/5 rounded-full hover:bg-[#2A2A2A] hover:border-[#F3BE68]/50 active:scale-95 transition-all duration-300"
        >
          <div className="w-4 h-4 bg-[#F3BE68] rounded-sm group-hover:rotate-45 transition-transform" />
          <span className="font-bold text-sm md:text-base text-[#F3BE68]">
            Download Report
          </span>
        </button>
      </header>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4 w-full">
        {/* Data Sync Status */}
        <div
          onClick={() =>
            handleOpenOverlay(
              "Data Sync Protocol",
              "Handles the bi-directional synchronization of market state across global nodes.",
              "Current sync rate is optimized for low-latency market entries.",
              "High",
            )
          }
          className="group bg-[#222121]/70 border border-white/5 rounded-[16px] p-6 flex flex-col gap-6 transition-all duration-500 hover:bg-[#222121] cursor-pointer"
        >
          <div className="flex justify-between items-center uppercase font-bold text-sm tracking-[0.7px]">
            <span>Data Sync Status</span>
          </div>
          <div className="flex items-center gap-6">
            <CircularProgress percentage={progress} size={80} strokeWidth={8} />
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#A3A3A3]">Total Sync</span>
              <span className="font-bold text-[28px] text-[#43E188] tracking-tighter tabular-nums">
                {progress}%
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="bg-[#222121]/50 border border-[#4F45384D] rounded-[24px] p-3 flex flex-col group/item hover:border-[#E5E2E1]/20 transition-colors">
              <span className="text-[10px] text-[#737373] uppercase">
                Integrity
              </span>
              <span className="font-bold text-sm text-[#E5E2E1]">99.8%</span>
            </div>
            <div className="bg-[#222121]/50 border border-[#4F45384D] rounded-[24px] p-3 flex flex-col hover:border-[#E5E2E1]/20 transition-colors">
              <span className="text-[10px] text-[#737373] uppercase">
                Latency
              </span>
              <span className="font-bold text-sm text-[#E5E2E1]">142ms</span>
            </div>
          </div>
        </div>

        {/* Node Ticker */}
        <div className="bg-[#222121]/50 border border-white/5 rounded-[16px] p-6 overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-sm tracking-[0.7px] uppercase">
              Node Status Ticker
            </h3>
            <span className="hidden sm:inline text-xs text-[#737373]">
              Updates Active
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">
            {tickerData.map((item, i) => (
              <div
                key={i}
                onClick={() =>
                  handleOpenOverlay(
                    `${item.label} Metric`,
                    `Real-time tracking of ${item.label.toLowerCase()} performance across the compute cluster.`,
                    `Metric is currently ${item.val} and holding within established standard deviations.`,
                  )
                }
                className="bg-[#131313] border border-[#4F453833] rounded-[24px] p-4 flex flex-col gap-2 hover:border-[#F3BE6855] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full group-hover:scale-150 transition-transform"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-bold text-[11px] text-[#E5E2E1] group-hover:text-white">
                    {item.label}
                  </span>
                </div>
                <span className="font-bold text-sm text-[#E5E2E1] tabular-nums">
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Integrity Matrix */}
      <div className="w-full bg-[#131313B3] border border-white/5 backdrop-blur-[6px] rounded-[16px] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border-b border-white/5 gap-4 bg-white/[0.01]">
          <div className="flex flex-col">
            <h3 className="font-bold text-[18px] text-[#F3BE68]">
              Feature Integrity Matrix
            </h3>
            <p className="text-xs text-[#D3C4B2] opacity-60">
              Audit trail of active system features.
            </p>
          </div>
          <div className="flex gap-2">
            <StatusBadge type="success" text="Live" />
            <StatusBadge type="warning" text="Risk Monitored" />
          </div>
        </div>
        <div className="hidden md:block overflow-x-auto w-full custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead className="bg-[#2A2A2A80] font-bold text-[10px] text-[#737373] uppercase tracking-[2px]">
              <tr>
                <th className="px-6 py-4">Node ID</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Feature Vector</th>
                <th className="px-6 py-4">Drift</th>
                <th className="px-6 py-4">Entropy</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="font-bold text-sm text-[#E5E2E1]">
              {[1, 2, 3].map((row) => (
                <tr
                  key={row}
                  className="border-b border-[#4F45381A] hover:bg-white/[0.03] transition-all duration-300 group cursor-default"
                >
                  <td className="px-6 py-5 group-hover:text-[#F3BE68] transition-colors">
                    #0042{row}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#43E188]" />
                      <span className="text-[#43E188]">Active</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-normal text-[#D3C4B2]">
                    XGB_Macro_V4
                  </td>
                  <td className="px-6 py-5 font-mono text-xs opacity-60">
                    0.00{row}2
                  </td>
                  <td className="px-6 py-5 font-normal">Stable</td>
                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() =>
                        handleOpenOverlay(
                          `Node Verification #0042${row}`,
                          "Performs a cryptographic checksum validation of the feature vector stored at this compute node.",
                          "Vector is verified and consistent with the master branch.",
                        )
                      }
                      className="text-[#F3BE68] text-xs uppercase tracking-wider hover:text-white transition-colors underline underline-offset-4"
                    >
                      Verify
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Model Execution History */}
      <section className="flex flex-col w-full bg-[#222121]/50 border border-white/5 rounded-[16px] overflow-hidden hover:border-white/5/80 transition-all">
        <div className="flex flex-row items-center p-6 gap-3 bg-[rgba(42,42,42,0.3)] border-b border-white/5">
          <div className="w-5 h-5 bg-[#F3BE68] flex items-center justify-center rounded-[4px]">
            <div className="w-2 h-2 bg-[#222121]/50" />
          </div>
          <h3 className="font-bold text-lg text-[#E5E2E1]">
            Model Execution History
          </h3>
        </div>

        <div className="w-full">
          {/* Mobile View */}
          <div className="block md:hidden">
            {executionData.map((item, idx) => (
              <div
                key={idx}
                onClick={() =>
                  handleOpenOverlay(item.eng, item.mech, item.signal)
                }
                className="p-5 border-b border-[#4F45381A] flex flex-col gap-3 cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] text-[#737373] tabular-nums">
                    2026.04.26 : {item.time}
                  </span>
                  <TableStatus
                    type={item.type}
                    text={item.type === "success" ? "COMPLETED" : "FAILED"}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#D3C4B2] font-bold text-sm">
                    {item.eng}
                  </span>
                  <span className="font-mono text-[10px] opacity-60">
                    {item.lat}
                  </span>
                </div>
                <p
                  className={`text-sm font-bold ${item.type === "error" ? "text-[#737373]" : "text-[#F3BE68]"}`}
                >
                  {item.out}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead className="bg-[rgba(23,23,23,0.5)] font-bold text-[10px] text-[#737373] uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Timestamp</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Engine</th>
                  <th className="px-6 py-4">Target Output</th>
                  <th className="px-6 py-4 text-right">Latency</th>
                </tr>
              </thead>
              <tbody className="text-sm text-[#E5E2E1]">
                {executionData.map((item, idx) => (
                  <tr
                    key={idx}
                    onClick={() =>
                      handleOpenOverlay(item.eng, item.mech, item.signal)
                    }
                    className="border-t border-[rgba(79,69,56,0.1)] first:border-t-0 hover:bg-white/[0.02] transition-colors group cursor-pointer"
                  >
                    <td className="px-6 py-4 opacity-50 group-hover:opacity-100 transition-opacity">
                      2026.04.26 : {item.time}
                    </td>
                    <td className="px-6 py-4">
                      <TableStatus
                        type={item.type}
                        text={item.type === "success" ? "COMPLETED" : "FAILED"}
                      />
                    </td>
                    <td className="px-6 py-4 font-normal text-[#D3C4B2]">
                      {item.eng}
                    </td>
                    <td
                      className={`px-6 py-4 font-bold ${item.type === "error" ? "text-[#737373]" : "text-[#F3BE68]"}`}
                    >
                      {item.out}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-xs">
                      {item.lat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 bg-[rgba(42,42,42,0.2)]">
          <button className="font-bold text-xs text-[#F3BE68] uppercase hover:text-white transition-colors tracking-[1px]">
            View Full Execution Logs →
          </button>
        </div>
      </section>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4f4538;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

const CircularProgress = ({ percentage = 82, size = 80, strokeWidth = 8 }) => {
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
          className="text-white/5"
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
        />
      </svg>
    </div>
  );
};

export default MainCanvas;
