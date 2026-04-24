import EngineMetricsCard from "../engine/EngineMetricsCard";
import LSTMCard from "../engine/LSTMCard";
import PolyBayseCard from "../engine/PolyBayseCard";
import ConverterPanel from "../engine/ConverterPanel";
import LargePriceCard from "@/components/engine/LargePriceCard"
import MarketContextList from "@/components/engine/MarketContextList"
import CurrentRateCard from "@/components/engine/CurrentRateCard";

export default function EngineRoomRow() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Cards */}
      <div className="h-full">
        <EngineMetricsCard />
      </div>

      <div className="h-full">
        <LSTMCard />
      </div>

      <div className="h-full">
        <PolyBayseCard />
      </div>

      <div className="h-full">
        <ConverterPanel />
      </div>
       <div className="h-full">
        <LargePriceCard />
      </div>
      <div className="h-full">
        <MarketContextList />
      </div>
      <div className="h-full">
        <CurrentRateCard />
      </div>
    </section>
  );
}