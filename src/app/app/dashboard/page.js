"use client";

import { useEffect, useState } from "react";
import ActPanel from "@/components/pages/dashboard/ActPanel";
import EngineRoomRow from "@/components/pages/dashboard/EngineRoomRow";
import MarketIntelligence from "@/components/pages/dashboard/MarketIntelligence";
import { analyzeDecision } from "@/lib/api";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      setLoading(true);

      const res = await analyzeDecision({
        fx_pair: "NGN/USD",
        amount: 1000,
        time_horizon_days: 2,
      });

      console.log("ENGINE RESPONSE:", res);

      setData(res);
    } catch (err) {
      console.error("Dashboard API error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await load();
    };

    fetchData();

    const interval = setInterval(load, 60000);
    return () => clearInterval(interval);
  }, []);

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
    <main className="min-h-screen animate-page-enter max-w-full overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: pageFadeStyle }} />

      <div className="max-w-[1600px] md:p-6 lg:p-8">

        <section className="w-full mb-4 md:mb-8">
          <ActPanel data={data} loading={loading} />
        </section>

        <section>
          <EngineRoomRow data={data} />
          <MarketIntelligence data={data} />
        </section>

      </div>
    </main>
  );
}