"use client";

export default function EngineRoomRow() {
  return (
    <div className="flex gap-6 mt-8">

      {/* CARD 1 */}
      <div className="flex-1 bg-[var(--glass)] border border-white/10 backdrop-blur-xl rounded-card p-6">

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-xs uppercase text-[var(--text-secondary)] tracking-widest">
              Model Status
            </p>
            <h3 className="text-lg font-bold">Neural Engine</h3>
          </div>
          <div className="w-4 h-4 bg-[var(--gold)] rounded-sm" />
        </div>

        {/* Stats */}
        <div className="space-y-3">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-sm text-[var(--text-secondary)]">Accuracy</span>
            <span className="text-sm text-green-400">94%</span>
          </div>

          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-sm text-[var(--text-secondary)]">Latency</span>
            <span className="text-sm">12ms</span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6 bg-black/50 rounded-pill p-3">
          <div className="flex justify-between text-xs text-[var(--text-secondary)] mb-2">
            <span>Confidence</span>
            <span className="text-[var(--gold)]">82%</span>
          </div>

          <div className="w-full h-1 bg-gray-700 rounded-full">
            <div className="h-1 bg-[var(--gold)] rounded-full w-[82%]" />
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="flex-1 bg-[rgba(21,21,21,0.5)] border border-white/10 backdrop-blur-xl rounded-card p-6">

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-xs uppercase text-[var(--text-secondary)] tracking-widest">
              Sequence Model
            </p>
            <h3 className="text-lg font-bold">LSTM</h3>
          </div>
          <div className="w-4 h-2 bg-[var(--gold)]" />
        </div>

        {/* Fake Chart */}
        <div className="flex items-end gap-1 h-24 mt-6">
          {[40, 60, 50, 80, 65, 90, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-lg bg-[var(--gold)]/30"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between mt-4 text-xs text-[var(--text-secondary)]">
          <span>Sequence Strength</span>
          <span className="text-green-400">Strong</span>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="flex-1 bg-[rgba(21,21,21,0.5)] border border-white/10 backdrop-blur-xl rounded-card p-6">

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-xs uppercase text-[var(--text-secondary)] tracking-widest">
              Risk Engine
            </p>
            <h3 className="text-lg font-bold">Poly/Bayes</h3>
          </div>
          <div className="w-4 h-4 bg-[var(--gold)]" />
        </div>

        {/* Center Metric */}
        <div className="flex flex-col items-center justify-center py-6">
          <h1 className="text-3xl font-black text-red-400">HIGH</h1>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Risk Level Detected
          </p>
        </div>

        {/* Progress Bars */}
        <div className="mt-4 w-full h-2 bg-gray-700 rounded-full flex overflow-hidden">
          <div className="bg-red-400 w-3/4" />
          <div className="bg-green-400 w-1/4" />
        </div>
      </div>

    </div>
  );
}