import Sidebar from "@/components/layout/Sidebar";

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-(--surface-primary) text-(--text-primary)">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
