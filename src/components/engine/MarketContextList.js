export default function MarketContextList() {
  return (
    <div
      className="box-border flex flex-col justify-center items-start p-0 absolute
      w-74.25 h-61.75 left-196.75 top-240.25"
    >
      {/* Background Card */}
      <div
        className="flex flex-col justify-between items-start p-6 gap-6.5
        w-full h-full bg-[rgba(21,21,21,0.5)]
        border border-[rgba(79,69,56,0.15)]
        rounded-[48px]"
      >
        {/* HEADER */}
        <div className="pb-4">
          <h5 className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#E5E2E1]">
            Network Liquidity
          </h5>
        </div>

        {/* LIST */}
        <div className="flex flex-col gap-6 w-full">

          {/* Row 1 */}
          <div className="flex justify-between items-center w-full">
            <span className="text-[14px] text-[#D3C4B2]">USD Flow</span>
            <span className="text-[14px] font-bold text-[#E5E2E1]">$12.4M</span>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between items-center w-full">
            <span className="text-[14px] text-[#D3C4B2]">NGN Demand</span>
            <span className="text-[14px] font-bold text-[#E5E2E1]">High</span>
          </div>

          {/* Row 3 */}
          <div className="flex justify-between items-center w-full">
            <span className="text-[14px] text-[#D3C4B2]">Spread Pressure</span>
            <span className="text-[14px] font-bold text-[#E5E2E1]">Rising</span>
          </div>

        </div>

        {/* BUTTON */}
        <div className="pt-6 w-full">
          <button className="w-full py-2 bg-[#353534] rounded-4xl text-[11px] font-bold uppercase tracking-[1.1px] text-[#E5E2E1]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}