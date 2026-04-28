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
    <main className="min-h-screen  animate-page-enter max-w-full   overflow-hidden items-center">
      {/* Injecting a one-time entry animation */}
      <style dangerouslySetInnerHTML={{ __html: pageFadeStyle }} />
      
      <div className="max-w-[1600px]  md:p-6 lg:p-8 ">
        
        {/* ACTIONABLE INTELLIGENCE */}
        <section aria-label="Action Panel" className="w-full mb-4 md:mb-8">
          <ActPanel />
        </section>

        {/* LIVE ENGINE DATA */}
        <section aria-label="Engine Status" className="overflow-x-hidden">
          {/* Header for the Engine Room section */}     
          <EngineRoomRow />
          <MarketIntelligence />
        </section>
        
      </div>
    </main>
  );
}