import EngineCard from "../engine/EngineCard";
import LSTMCard from "../engine/LSTMCard";
import PolyBayseCard from "../engine/PolyBayseCard";
import ConverterPanel from "../engine/ConverterPanel";

export default function EngineRoomRow() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
      <EngineCard />
      <LSTMCard />
      <PolyBayseCard />
      <ConverterPanel />
    </section>
  );
}