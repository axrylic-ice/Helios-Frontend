import EngineMetricsCard from "../../engine/EngineMetricsCard";
import LSTMCard from "../../engine/LSTMCard";
import PolyBayseCard from "../../engine/PolyBayseCard";
import ConverterPanel from "../../engine/ConverterPanel";
import LargePriceCard from "@/components/engine/LargePriceCard";
import MarketContextList from "@/components/engine/MarketContextList";
import CurrentRateCard from "@/components/engine/CurrentRateCard";

export default function EngineRoomRow() {
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
      <div>
        <EngineMetricsCard />
      </div>

      <div>
        <LSTMCard />
      </div>

      <div>
        <PolyBayseCard />
      </div>
      {/* 1. TOP LEFT: LARGE PRICE (Spans 2 columns) */}

      {/* 3. THE 2-ROW SIDEBAR: CONVERTER & RATE 
          This spans 2 rows vertically to balance the layout.
      */}
      <div className="lg:row-span-2 flex flex-col gap-6 h-full">
        <div className="flex-grow">
          <ConverterPanel />
        </div>
        <div className="mt-auto">
          <CurrentRateCard />
        </div>
      </div>

      {/* 4. BOTTOM ROW: ENGINE MODELS 
          These will naturally sit under the Large Price and Market Context
      */}

      <div className="lg:col-span-2">
        <LargePriceCard />
      </div>

      {/* 2. TOP RIGHT: MARKET CONTEXT */}
      <div>
        <MarketContextList ClassName="justify-self-center" />
      </div>
    </section>
  );
}
