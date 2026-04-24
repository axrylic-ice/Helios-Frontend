export default function Header() {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4">

      {/* LEFT BRAND */}
      <div className="flex items-center gap-3">

        {/* Logo */}
        <div className="w-[40px] h-[40px] border border-[var(--gold)] bg-[var(--gold)]/10" />

        {/* Text */}
        <div>
          <h1 className="text-[var(--gold)] font-bold text-[20px] leading-7">
            Fotuna
          </h1>

          <p className="text-[10px] tracking-widest uppercase text-[var(--text-secondary)] opacity-60">
            FX Decision Intelligence Engine
          </p>
        </div>

      </div>

      {/* MARKET CARDS */}
      <div className="flex gap-4">

        <MarketCard pair="NGN/USD" value="1,610.40" change="-2.3%" active />
        <MarketCard pair="NGN/EUR" value="1,610.40" change="-2.3%" />
        <MarketCard pair="NGN/GBP" value="1,610.40" change="-2.3%" />
        <MarketCard pair="NGN/AUD" value="1,610.40" change="-2.3%" />

      </div>

    </div>
  );
}
function MarketCard({ pair, value, change, active }) {
  return (
    <div
      className={`
        w-[196px] h-[68px]
        rounded-[16px]
        p-3
        flex flex-col justify-between
        bg-[#1E1E1E]
        ${active ? "opacity-100" : "opacity-60"}
      `}
    >

      <div className="text-[14px] font-bold text-white/20">
        {pair}
      </div>

      <div className="flex justify-between items-center">

        <div className="text-[14px] font-bold text-[var(--text-primary)]">
          {value}
        </div>

        <div className="text-[12px] font-bold text-red-400/60">
          {change}
        </div>

      </div>

    </div>
  );
}