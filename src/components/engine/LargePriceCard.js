export default function LargePriceCard() {
  return (
    <div className="relative w-full lg:w-153.5 h-75 p-8 rounded-[48px] bg-[rgba(21,21,21,0.5)] border border-white/10 shadow-inner flex flex-col justify-between overflow-hidden">
      
      {/* faint background chart */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 600 120" className="w-full h-30">
          <path
            d="M0,80 C100,20 200,140 300,60 C400,-10 500,120 600,40"
            stroke="#F3BE68"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* TOP SECTION */}
      <div className="flex justify-between items-start z-10">
        
        {/* LEFT */}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] tracking-widest text-[#D3C4B2] uppercase">
            Currency Index
          </p>

          <div className="flex items-end gap-2">
            <h1 className="text-[48px] font-black text-[#E5E2E1] leading-none">
              ₦1,520
            </h1>
            <span className="text-[18px] text-[#D3C4B2]">/ USD</span>
          </div>
        </div>

        {/* RIGHT BADGE */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-green-400 text-xs font-bold">
            +1.2%
          </span>
        </div>
      </div>

      {/* MIDDLE METRICS */}
      <div className="grid grid-cols-3 gap-6 z-10 mt-6">
        
        <div>
          <p className="text-[10px] text-[#D3C4B2] uppercase opacity-60">
            Parallel Rate
          </p>
          <p className="text-xl font-bold text-white">₦1,520</p>
        </div>

        <div>
          <p className="text-[10px] text-[#D3C4B2] uppercase opacity-60">
            Official Rate
          </p>
          <p className="text-xl font-bold text-[#D3C4B2]">₦1,450</p>
        </div>

        <div>
          <p className="text-[10px] text-[#D3C4B2] uppercase opacity-60">
            Spread
          </p>
          <p className="text-xl font-bold text-[#F3BE68]">₦70</p>
        </div>

      </div>

    </div>
  );
}