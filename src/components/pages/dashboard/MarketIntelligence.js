"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export default function MarketIntelligence({ className, data }) {

  // USE BACKEND DATA IF AVAILABLE, OTHERWISE FALLBACK
  const newsData =
    data?.news?.map((item, i) => ({
      id: i + 1,
      impact: item.impact === "HIGH" ? "High Impact"
        : item.impact === "LOW" ? "Low Impact"
        : "Neutral",
      impactColor:
        item.impact === "HIGH"
          ? "#ffb4ab"
          : item.impact === "LOW"
          ? "#d3c4b2"
          : "#43e188",
      time: "live", // backend doesn't provide time yet
      title: item.headline,
      description: item.summary,
      source: item.source,
      pulse: item.impact === "HIGH",
      url: item.url,
    })) || [];

  return (
    <div className={`mt-4 w-full ${className || ""} max-w-100%`}>

      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-s font-bold text-[#d3c4b2]/30">
          Market Intelligence
        </h2>
        <button className="text-[#f3be68] text-xs font-medium hover:underline transition-all">
          View All Intelligence
        </button>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

/* --- Sub-Component for individual cards --- */
function NewsCard({
  impact,
  impactColor,
  time,
  title,
  description,
  source,
  pulse,
  url,
}) {
  return (
    <div className="bg-[rgba(30,30,30,0.4)] border border-[rgba(79,69,56,0.2)] backdrop-blur-sm rounded-xl p-6 hover:bg-[rgba(40,40,40,0.5)] transition-all hover:shadow-lg group flex flex-col h-full">

      {/* Badge & Timestamp */}
      <div className="flex items-center gap-3 mb-4">
        <div
          style={{
            backgroundColor: `${impactColor}1A`,
            borderColor: `${impactColor}33`,
          }}
          className="border px-2.5 py-1 rounded-md flex items-center gap-1.5"
        >
          <div
            style={{ backgroundColor: impactColor }}
            className={`w-1.5 h-1.5 rounded-full ${pulse ? "animate-pulse shadow-[0_0_8px_rgba(255,180,171,0.5)]" : ""}`}
          />
          <span
            style={{ color: impactColor }}
            className="text-[10px] font-bold tracking-wider uppercase"
          >
            {impact}
          </span>
        </div>

        <span className="text-xs text-[#d3c4b2]/60">{time}</span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-[#e5e2e1] mb-3 group-hover:text-[#f3be68] transition-colors leading-tight">
        {title}
      </h3>

      <p className="text-sm text-[#d3c4b2] mb-6 line-clamp-3 leading-relaxed">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
        <a
          href={url}
          target="_blank"
          className="flex items-center gap-2 text-sm text-[#f3be68] hover:text-white transition-colors group/link"
        >
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          <span className="font-medium">View Source ({source})</span>
        </a>
      </div>
    </div>
  );
}