import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[var(--surface-primary)] text-[var(--text-primary)]">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="flex-1 px-12 py-2">
          {children}
        </main>

      </div>

    </div>
  );
}