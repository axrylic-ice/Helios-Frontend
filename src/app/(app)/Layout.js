import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function AppLayout({ children }) {
  return (
    <main className="flex-1 px-12 py-2">
    <div className="flex min-h-screen bg-(--surface-primary) text-(--text-primary)">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        
          {children}
        

      </div>

    </div>
    </main>
  );
}