export default function CurrentRateCard() {
  return (
    <div
      className="absolute w-75 h-30 left-277 top-278.5
      bg-[#151515] rounded-3xl box-border"
    >
      {/* TITLE */}
      <div className="absolute left-3.75 top-4.5 text-[#E5E2E1] text-[12px] font-bold">
        CURRENT RATE
      </div>

      {/* LEFT LABELS */}
      <div className="absolute left-3.75 top-13.5 text-[#5E5E5E] text-[12px] font-bold">
        1 NGN =
      </div>

      <div className="absolute left-4 top-20.5 text-[#5E5E5E] text-[12px] font-bold">
        1 USD =
      </div>

      {/* RIGHT VALUES */}
      <div className="absolute left-46.5 top-13.5 text-[#E5E2E1] text-[14px] font-bold">
        0.000667 USD
      </div>

      <div className="absolute left-52.5 top-20.5 text-[#E5E2E1] text-[12px] font-bold">
        ₦1,500 NGN
      </div>
    </div>
  );
}