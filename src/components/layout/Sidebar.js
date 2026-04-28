"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav";
import { Menu, HelpCircle, X } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isExpanded]);

  return (
    <>
      {/* 1. MOBILE TRIGGER - Switched to Left to match standard UX if drawer is Right, 
          but kept Right based on your code. Added transition to fade it out. */}
      <button 
        onClick={() => setIsExpanded(true)}
        className={`fixed top-5 right-5 z-[60] p-2 bg-(--surface-primary) border border-white/10 rounded-lg text-(--text-secondary) md:hidden shadow-lg transition-opacity duration-300 ${
          isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Menu size={20} />
      </button>

      {/* 2. OVERLAY - Smoother fade */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] md:hidden transition-opacity duration-300 ${
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsExpanded(false)}
      />

      {/* 3. SIDEBAR - The Fix is here */}
      <aside 
        className={`
          fixed inset-y-0 right-0 z-50 
          md:sticky md:top-0 
          h-screen bg-(--surface-primary) border-l border-white/5 md:border-r md:border-l-0 flex flex-col py-10 
          /* Smooth hardware-accelerated movement */
          transition-transform duration-300 ease-out will-change-transform
          
          /* Visibility & Size Logic */
          w-[250px] /* Fixed width on mobile for smooth slide */
          ${isExpanded 
            ? "translate-x-0 items-start px-4 pb-4" 
            : "translate-x-full md:translate-x-0 md:w-17.75 md:items-center md:flex"
          }
        `}
      >
        
        {/* Toggle / Close Header */}
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-10 text-(--text-secondary) cursor-pointer hover:text-(--gold) transition-colors flex items-center justify-between w-full px-2"
        >
          <Menu size={20} className={!isExpanded ? "mx-auto" : ""} />
          {isExpanded && <X size={20} className="text-white/40 md:hidden" />}
        </div>

        {/* NAV CONTAINER */}
        <nav className="flex flex-col gap-8 flex-1 w-full overflow-hidden">
          {navItems.map((item, i) => {
            const active = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link 
                key={i} 
                href={item.path} 
                onClick={() => setIsExpanded(false)}
                className="relative group flex items-center w-full min-h-[40px]"
              >
                {/* ICON TAB */}
                <div
                  className={`
                    w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-200 shrink-0
                    ${active 
                      ? "bg-(--gold) shadow-[0_0_10px_rgba(194,146,65,0.4)] text-[#0A0A0A]" 
                      : "text-[#5E5E5E] group-hover:text-gray-200"}
                    ${isExpanded ? "ml-0" : "mx-auto"}
                  `}
                >
                  {Icon && <Icon size={20} strokeWidth={2} />}
                </div>

                {/* LABEL - Animate Opacity only to prevent layout jumping */}
                <span className={`ml-4 text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  isExpanded ? "opacity-100" : "opacity-0 pointer-events-none md:hidden"
                } ${active ? "text-(--gold)" : "text-(--text-primary)"}`}>
                  {item.name}
                </span>

                {/* DESKTOP HOVER TOOLTIP */}
                {!isExpanded && (
                  <div className="absolute right-20 hidden md:group-hover:flex items-center gap-3 px-4 w-fit h-11.5 bg-linear-to-r from-[rgba(243,190,104,0.15)] to-[rgba(194,146,65,0.15)] border border-[#432C00] rounded-lg shadow-xl backdrop-blur-md z-50 pointer-events-none">
                    <span className="text-sm font-bold text-(--text-primary) whitespace-nowrap">
                      {item.name}
                    </span>
                    <div className="absolute -right-1 w-2 h-2 bg-[#432C00] rotate-45" />
                  </div>
                )}

                {/* ACTIVE INDICATOR */}
                {active && (
                  <div className="absolute right-0 w-1 h-5 bg-(--gold) rounded-l-full shadow-[-2px_0_8px_rgba(194,146,65,0.5)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Help Section */}
        <div className={`mt-auto text-(--text-secondary) cursor-pointer hover:text-white transition-colors py-8 flex items-center w-full ${
          isExpanded ? "px-2 gap-4" : "justify-center"
        }`}>
          <HelpCircle size={20} />
          <span className={`text-sm font-bold text-(--text-primary) transition-opacity ${isExpanded ? "opacity-100" : "opacity-0 hidden"}`}>
            Help & Support
          </span>
        </div>
      </aside>
    </>
  );
}