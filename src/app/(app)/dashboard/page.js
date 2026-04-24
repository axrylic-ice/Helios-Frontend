import ActPanel from "@/components/dashboard/ActPanel";
import EngineRoomRow from "@/components/dashboard/EngineRoomRow";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8 ">

      <ActPanel />

      <EngineRoomRow />

    </div>
  );
}