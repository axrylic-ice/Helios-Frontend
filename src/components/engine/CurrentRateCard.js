export default function CurrentRateCard() {
  return (
    <div
      className="absolute w-[300px] h-[120px] left-[1108px] top-[1114px]
      bg-[#151515] rounded-[24px] box-border"
    >
      {/* TITLE */}
      <div className="absolute left-[15px] top-4.5 text-[#E5E2E1] text-[12px] font-bold">
        CURRENT RATE
      </div>

      {/* LEFT LABELS */}
      <div className="absolute left-3.75 top-[54px] text-[#5E5E5E] text-[12px] font-bold">
        1 NGN =
      </div>

      <div className="absolute left-[16px] top-[82px] text-[#5E5E5E] text-[12px] font-bold">
        1 USD =
      </div>

      {/* RIGHT VALUES */}
      <div className="absolute left-[186px] top-[54px] text-[#E5E2E1] text-[14px] font-bold">
        0.000667 USD
      </div>

      <div className="absolute left-[210px] top-[82px] text-[#E5E2E1] text-[12px] font-bold">
        ₦1,500 NGN
      </div>
    </div>
  );
}