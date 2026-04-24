"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[71px] h-screen bg-[var(--surface-primary)] border-r border-white/10 flex flex-col items-center py-6">
      
      {/* Top Icon */}
      <div className="mb-10 text-[var(--text-secondary)]">
        ☰
      </div>

      {/* NAV */}
      <div className="flex flex-col gap-8 flex-1 items-center">
        {navItems.map((item, i) => {
          const active = pathname === item.path;

          return (
            <Link
              key={i}
              href={item.path}
              className={`
                w-5 h-5 rounded-sm transition
                ${active ? "bg-[var(--gold)]" : "bg-gray-500/50 hover:bg-gray-400"}
              `}
              title={item.name}
            />
          );
        })}
      </div>

      {/* Bottom Help */}
      <div className="text-[var(--text-secondary)]">
        ?
      </div>
    </div>
  );
}