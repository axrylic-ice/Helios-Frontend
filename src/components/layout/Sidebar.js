"use client";

import React, { useState } from "react"; // Added useState
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav";
import { Menu, HelpCircle } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false); // State for expansion

  return (
    <aside 
      className={`h-screen bg-(--surface-primary) border-r border-white/10 flex flex-col py-10 sticky top-0 z-40 transition-all duration-300 ease-in-out ${
        isExpanded ? "w-fit items-start px-4" : "w-17.75 items-center hidden md:flex"
      }`}
    >
      
      {/* Top Icon / Menu Toggle */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)} // Toggle click handler
        className={`mb-10 text-(--text-secondary) cursor-pointer hover:text-(--gold) transition-colors ${
          isExpanded ? "ml-2" : ""
        }`}
      >
        <Menu size={20} />
      </div>

      {/* NAV CONTAINER */}
      <nav className="flex flex-col gap-8 flex-1 w-full">
        {navItems.map((item, i) => {
          const active = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link key={i} href={item.path} className="relative group flex items-center w-full">
              
              {/* THE MAIN ICON TAB */}
              <div
                className={`
                  w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-200 shrink-0
                  ${active 
                    ? "bg-(--gold) shadow-[0_0_10px_rgba(194,146,65,0.4)] text-[#0A0A0A]" 
                    : "text-[#5E5E5E] group-hover:text-gray-200"}
                  ${isExpanded ? "ml-0" : "mx-auto"}
                `}
              >
                {/* Specific Icon Sizing from CSS */}
                {Icon && <Icon size={20} strokeWidth={2} />}
              </div>

              {/* LABEL (Visible only when expanded) */}
              {isExpanded && (
                <span className={`ml-4 text-sm font-bold transition-opacity duration-300 ${
                  active ? "text-(--gold)" : "text-(--text-primary)"
                }`}>
                  {item.name}
                </span>
              )}

              {/* HOVER EXPAND CARD (Hidden when sidebar is already expanded) */}
              {!isExpanded && (
                <div
                  className="
                    absolute left-20 
                    hidden group-hover:flex
                    items-center gap-3 px-4
                    w-fit h-11.5
                    bg-linear-to-r from-[rgba(243,190,104,0.15)] to-[rgba(194,146,65,0.15)]
                    border border-[#432C00]
                    rounded-lg
                    shadow-xl
                    backdrop-blur-md
                    z-50
                    pointer-events-none
                  "
                >
                  <div className="w-2 h-2 bg-(--gold) rounded-sm shrink-0" />
                  <span className="text-sm font-bold text-(--text-primary) whitespace-nowrap">
                    {item.name}
                  </span>
                  <div className="absolute -left-1 w-2 h-2 bg-[#432C00] rotate-45" />
                </div>
              )}

              {/* ACTIVE INDICATOR (Vertical bar) */}
              {active && (
                <div className="absolute left-0 w-1 h-5 bg-(--gold) rounded-r-full shadow-[2px_0_8px_rgba(194,146,65,0.5)]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Help/Support Icon */}
      <div className={`text-(--text-secondary) cursor-pointer hover:text-white transition-colors py-4 flex items-center w-full ${
        isExpanded ? "px-2 gap-4" : "justify-center"
      }`}>
        <HelpCircle size={20} />
        {isExpanded && <span className="text-sm font-bold text-(--text-primary)">Help & Support</span>}
      </div>
    </aside>
  );
}