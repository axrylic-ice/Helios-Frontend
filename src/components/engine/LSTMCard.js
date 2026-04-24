import EngineCard from "./EngineCard";

export default function LSTMCard() {
  return (
    <EngineCard>
      {/* Header */}
      <div>
        <p className="text-[10px] text-[#D3C4B2] uppercase tracking-widest">
          Model
        </p>
        <h3 className="text-[20px] font-bold text-[#E5E2E1]">
          LSTM Sequence
        </h3>
      </div>

      {/* Fake bars */}
      <div className="flex items-end gap-1 mt-6 h-[100px]">
        {[40, 60, 50, 80, 70, 90, 75].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-[#F3BE68]/40 rounded-t-xl"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>

      <div className="mt-auto text-xs text-[#D3C4B2] flex justify-between">
        <span>Prediction Strength</span>
        <span className="text-green-400 font-bold">High</span>
      </div>
    </EngineCard>
  );
}