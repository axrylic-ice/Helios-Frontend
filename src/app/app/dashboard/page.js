"use client";

import ActPanel from "@/components/pages/dashboard/ActPanel";
import EngineRoomRow from "@/components/pages/dashboard/EngineRoomRow";
import MarketIntelligence from "@/components/pages/dashboard/MarketIntelligence";

export default function DashboardPage() {
  const pageFadeStyle = `
    @keyframes pageEnter {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-page-enter {
      animation: pageEnter 0.8s ease-out forwards;
    }
  `;

  return (
    <main className="min-h-screen  animate-page-enter max-w-full">
      {/* Injecting a one-time entry animation */}
      <style dangerouslySetInnerHTML={{ __html: pageFadeStyle }} />
      
      <div className="max-w-[1600px]  md:p-6 lg:p-8 ">
        
        {/* ACTIONABLE INTELLIGENCE */}
        <section aria-label="Action Panel" className="w-full">
          <ActPanel />
        </section>

        {/* LIVE ENGINE DATA */}
        <section aria-label="Engine Status" className="overflow-x-hidden">
          {/* Header for the Engine Room section */}
          <div className="flex items-center gap-4 mb-6 px-2">
            <h2 className="text-[#D3C4B2]/40 text-[10px] font-black uppercase tracking-[0.3em]">
              Real-time Analysis Engine
            </h2>
            <div className="h-[1px] flex-grow bg-white/5" />
          </div>
          
          <EngineRoomRow />
          <MarketIntelligence />
        </section>
        
      </div>
    </main>
  );
}