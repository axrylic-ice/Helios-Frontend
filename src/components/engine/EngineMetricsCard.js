import EngineCard from "./EngineCard";

export default function EngineMetricsCard() {
  return (
    <EngineCard>
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] tracking-widest text-[#D3C4B2] uppercase">
            Engine Status
          </p>
          <h3 className="text-[20px] font-bold text-[#E5E2E1]">
            Market Pulse
          </h3>
        </div>

        <div className="w-4 h-4 bg-[#F3BE68]" />
      </div>

      {/* Metrics */}
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span className="text-[#D3C4B2]">Volatility</span>
          <span className="text-green-400 font-bold">Stable</span>
        </div>

        <div className="flex justify-between border-b border-white/5 pb-2">
          <span className="text-[#D3C4B2]">Liquidity</span>
          <span className="text-[#E5E2E1] font-bold">High</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#D3C4B2]">Spread</span>
          <span className="text-green-400 font-bold">Low</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto">
        <div className="h-2 w-full bg-[#353534] rounded-full overflow-hidden">
          <div className="h-full w-[70%] bg-[#F3BE68]" />
        </div>
      </div>
    </EngineCard>
  );
}