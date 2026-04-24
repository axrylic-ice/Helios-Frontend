export default function EngineCard({ children }) {
  return (
    <div className="bg-[rgba(30,30,30,0.6)] border border-white/10 backdrop-blur-xl rounded-2xl p-6 h-67.5 flex flex-col">
      {children}
    </div>
  );
}