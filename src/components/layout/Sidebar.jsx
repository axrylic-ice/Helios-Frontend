"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[71px] h-screen bg-[var(--surface-primary)] border-r border-white/10 flex flex-col items-center py-6">
      {/* Top Icon */}
      <div className="mb-10 text-[var(--text-secondary)]">☰</div>

      {/* NAV */}
    <div className="flex flex-col gap-8 flex-1 items-center">

  {navItems.map((item, i) => {
    const active = pathname === item.path;

    return (
      <Link key={i} href={item.path}>
        
        <div className="relative group flex items-center">

          {/* ICON */}
          <div
            className={`
              w-5 h-5 rounded-sm transition
              ${active ? "bg-[var(--gold)]" : "bg-gray-500/50 group-hover:bg-gray-400"}
            `}
          />

          {/* HOVER EXPAND CARD (FIGMA BEHAVIOR) */}
          <div
            className="
              absolute left-10
              hidden group-hover:flex
              items-center gap-3 px-4
              w-[135px] h-[46px]
              bg-gradient-to-r from-[rgba(243,190,104,0.2)] to-[rgba(194,146,65,0.2)]
              border border-[#432C00]
              rounded-[8px]
              shadow-md
              backdrop-blur-md
            "
          >
            <div className="w-[8px] h-[8px] bg-[var(--gold)] rounded-sm" />

            <span className="text-sm font-bold text-[var(--text-primary)]">
              {item.name}
            </span>
          </div>

        </div>

      </Link>
    );
  })}

</div>

      {/* Bottom Help */}
      <div className="text-[var(--text-secondary)]">?</div>
    </div>
  );
}
