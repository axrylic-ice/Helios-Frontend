export default function ActPanel() {
  return (
    <div className="
      w-full max-w-300
      mx-auto
      bg-[#1E1E1E]
      rounded-2xl
      shadow-[0_24px_48px_rgba(0,0,0,0.6)]
      p-6
      relative
    ">

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-10">

        {/* STATUS */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-[10px] tracking-widest uppercase text-green-400">
            System Active
          </span>
        </div>

        {/* TAG */}
        <div className="
          px-4 py-1 rounded-full
          border border-white/10
          bg-[rgba(243,190,104,0.1)]
          text-[11px] font-bold
          text-(--gold)
        ">
          AI Decision Engine
        </div>

      </div>

      {/* CENTER */}
      <div className="flex items-center justify-center gap-12">

        {/* GAUGE */}
        <div className="relative w-48 h-48 flex items-center justify-center">

          {/* Background ring */}
          <div className="absolute w-full h-full rounded-full border-8 border-[#353534]" />

          {/* Active ring (fake for now) */}
          <div className="absolute w-full h-full rounded-full border-12 border-(--gold) clip-half" />

          {/* TEXT */}
          <div className="text-center">
            <div className="text-[36px] font-black text-(--gold)">
              94%
            </div>
            <div className="text-[10px] uppercase tracking-widest text-(--text-secondary)">
              Confidence
            </div>
          </div>

        </div>

        {/* ACT BLOCK */}
        <div className="
          px-12 py-6
          bg-[rgba(19,19,19,0.4)]
          border border-white/10
          rounded-2xl
          backdrop-blur-md
        ">
          <h1 className="text-[96px] font-extrabold text-(--gold) leading-none tracking-[-4px]">
            ACT
          </h1>
        </div>

      </div>

      {/* BOTTOM TEXT */}
      <div className="mt-10 text-center text-[24px] text-(--text-secondary)">
        Estimated 2.4% devaluation within 48–72 hours
      </div>

    </div>
  );
}