// src/components/layout/Sidebar.js

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="relative w-[214px] h-screen ml-[21px] mt-[108px]">

      {/* LEFT RAIL */}
      <div className="absolute w-[71px] h-full bg-[#0E0E0E] rounded-[32px] flex flex-col items-center py-6">

        {/* Menu Icon */}
        <div className="mb-10 text-gray-500 text-xl">
          ☰
        </div>

        {/* NAV ICONS */}
        <div className="flex flex-col gap-9 flex-1 items-center">

          <div className="w-5 h-5 bg-gray-500 rounded-sm" />

          <div className="w-5 h-5 bg-white rounded-sm" /> {/* active */}

          <div className="w-4.5 h-4.5 bg-gray-500 rounded-sm" />

          <div className="w-5 h-5 bg-gray-500 rounded-sm" />

        </div>

        {/* HELP ICON */}
        <div className="mb-6 text-gray-500 text-lg">
          ?
        </div>
      </div>

      {/* ACTIVE CARD */}
      <div className="absolute left-[80px] top-[170px]">

        <Link href="/signal-history">
          <div className="
            w-33.75 h-[46px]
            flex items-center gap-3 px-5
            bg-gradient-to-r from-[rgba(243,190,104,0.2)] to-[rgba(194,146,65,0.2)]
            border border-[#432C00]
            rounded-lg
            shadow-md
          ">

            <div className="w-4.5 h-4.5 bg-white rounded-sm" />

            <span className="text-sm font-bold text-[#E5E2E1]">
              Signal History
            </span>

          </div>
        </Link>

      </div>

    </div>
  );
}