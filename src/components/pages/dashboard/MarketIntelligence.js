import React from "react";
import { ExternalLink } from "lucide-react"; // Assuming lucide-react, or swap for your icon set

export default function MarketIntelligence({ className }) {
  const newsData = [
    {
      id: 1,
      impact: "High Impact",
      impactColor: "#ffb4ab",
      time: "2h ago",
      title: "OPEC+ Unexpectedly Cuts Production Quotas",
      description:
        "Major oil-producing nations announced a sudden cut of 2 million barrels per day, creating immediate upward pressure on Brent crude and tightening FX liquidity.",
      source: "Reuters",
      pulse: true,
    },
    {
      id: 2,
      impact: "Bullish Trend",
      impactColor: "#43e188",
      time: "5h ago",
      title: "US Fed Minutes Suggest Rate Stabilization",
      description:
        "Latest FOMC minutes indicate the Federal Reserve may pause interest rate hikes, offering a slight reprieve for emerging market currencies.",
      source: "Bloomberg",
      pulse: false,
    },
    {
      id: 3,
      impact: "Neutral",
      impactColor: "#d3c4b2",
      time: "12h ago",
      title: "CBN Policy Update: FX Clearing Framework",
      description:
        "Central Bank releases updated guidelines for commercial banks regarding foreign exchange clearance. Institutional backlogs may see faster processing.",
      source: "CBN Press",
      pulse: false,
    },
  ];

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
}) {
  return (
    <div className="bg-[rgba(30,30,30,0.4)] border border-[rgba(79,69,56,0.2)] backdrop-blur-sm rounded-xl p-6 hover:bg-[rgba(40,40,40,0.5)] transition-all hover:shadow-lg group flex flex-col h-full">
      {/* Badge & Timestamp */}
      <div className="flex items-center gap-3 mb-4">
        <div
          style={{
            backgroundColor: `${impactColor}1A`, // 10% opacity hex
            borderColor: `${impactColor}33`, // 20% opacity hex
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
          href="#"
          className="flex items-center gap-2 text-sm text-[#f3be68] hover:text-white transition-colors group/link"
        >
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          <span className="font-medium">View Source ({source})</span>
        </a>
      </div>
    </div>
  );
}
