import GlassPanel from "../ui/GlassPanel";

export default function ActPanel() {
  return (
    <GlassPanel>
      <div className="text-center">
        <p className="text-sm text-gray-400">SYSTEM DECISION</p>

        <h1 className="text-6xl text-gold font-bold">ACT</h1>

        <p className="mt-4 text-xl">
          94% Confidence
        </p>

        <p className="mt-2 text-gray-400">
          Estimated 2.4% devaluation (48–72h)
        </p>
      </div>
    </GlassPanel>
  );
}