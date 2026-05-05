"use client";

import EngineMetricsCard from "../../engine/EngineMetricsCard";
import LSTMCard from "../../engine/LSTMCard";
import PolyBayseCard from "../../engine/PolyBayseCard";
import ConverterPanel from "../../engine/ConverterPanel";
import LargePriceCard from "@/components/engine/LargePriceCard";
import MarketContextList from "@/components/engine/MarketContextList";
import CurrentRateCard from "@/components/engine/CurrentRateCard";

export default function EngineRoomRow({ data }) {
  return (
    <section
      className="
      max-w-100% 
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
      gap-6 items-center 
      p-6
      bg-[#0A0A0A] 
      rounded-3xl
      border border-white/5
    "
    >
      {/* ENGINE CORE (NOW REAL DATA) */}
      <div>
        <EngineMetricsCard data={data} />
      </div>

      <div>
        <LSTMCard data={data} />
      </div>

      <div>
        <PolyBayseCard data={data} />
      </div>

      {/* SIDE PANEL */}
      <div className="lg:row-span-2 flex flex-col gap-6 h-full">
        <div className="flex-grow">
          <ConverterPanel />
        </div>
        <div className="mt-auto">
          <CurrentRateCard data={data}  />
        </div>
      </div>

      {/* PRICE */}
      <div className="lg:col-span-2">
        <LargePriceCard data={data} />
      </div>

      {/* MARKET CONTEXT */}
      <div>
        <MarketContextList className="justify-self-center" data={data}  />
      </div>
    </section>
  );
}