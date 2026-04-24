export default function GlassPanel({ children }) {
  return (
    <div className="bg-[rgba(53,53,52,0.2)] backdrop-blur-xl border border-white/10 rounded-card p-6">
      {children}
    </div>
  );
}