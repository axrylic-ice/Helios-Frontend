import EngineCard from "./EngineCard";

export default function PolyBayseCard() {
  return (
    <EngineCard>
      <div>
        <p className="text-[10px] text-[#D3C4B2] uppercase tracking-widest">
          Decision Model
        </p>
        <h3 className="text-[20px] font-bold text-[#E5E2E1]">
          Poly/Bayes
        </h3>
      </div>

      {/* Big signal */}
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-[40px] font-black text-red-500">RISK</h1>
        <p className="text-[#D3C4B2] text-sm mt-2">
          High probability deviation detected
        </p>
      </div>

      {/* Balance bar */}
      <div className="h-2 w-full flex rounded-full overflow-hidden mt-auto">
        <div className="w-3/4 bg-red-400" />
        <div className="w-1/4 bg-green-400" />
      </div>
    </EngineCard>
  );
}