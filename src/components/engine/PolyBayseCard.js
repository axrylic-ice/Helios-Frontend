import EngineCard from "./EngineCard";
import { marketPulseDetails } from "./DummyData";

export default function PolyBayseCard() {
  return (
    <EngineCard
      className=" flex flex-col p-4  bg-[#151515]/50
      hover:bg-[#151515]"
      details={marketPulseDetails}
      title="Poly / Bayes"
    >
      {/* Header - Aligned with other engine cards */}
      <div>
        <p className="text-[10px] text-[#D3C4B2]/60 uppercase tracking-[0.2em] font-bold">
          Decision Model
        </p>
        <h3 className="text-xl font-bold text-[#E5E2E1] leading-tight">
          Poly / Bayes
        </h3>
      </div>

      {/* Signal Area - Flex-grow ensures vertical centering */}
      <div className="flex flex-col items-center justify-center flex-grow py-4 px-1">
        <h1 className="text-4xl md:text-5xl font-black text-red-500 tracking-tighter animate-pulse">
          RISK
        </h1>
        <p className="text-[#D3C4B2]/80 text-[11px] mt-2 text-center leading-relaxed max-w-[140px]">
          High probability deviation detected
        </p>
      </div>

      {/* Balance/Sentiment Bar - Tightened and refined */}
      <div className="mt-2 pt-3 ">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[8px] uppercase tracking-wider text-[#D3C4B2]/40 font-bold">
            Bias
          </span>
          <span className="text-[9px] font-mono text-red-400">75% Short</span>
        </div>
        <div className="h-1.5 w-full flex rounded-full overflow-hidden bg-white/5">
          <div className="w-3/4 bg-red-400 " />
          <div className="w-1/4 bg-green-400 opacity-40" />
        </div>
      </div>
    </EngineCard>
  );
}
