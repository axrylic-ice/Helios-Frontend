import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="flex min-h-screen bg-(--surface-primary) text-(--text-primary)">
          {/* SIDEBAR */}
          <Sidebar />

          {/* MAIN AREA */}
          <div className="flex-1 flex flex-col">
            {/* HEADER */}
            <Header />

            {/* PAGE CONTENT */}
            <main className="flex-1 px-12 py-2">{children}</main>
          </div>
        </div>

      </body>
    </html>
  );
}

export const metadata = {
  title: "Fotuna ",
  description: "A dashboard for monitoring and analyzing financial signals.",
  icons: {
    icon: "/favicon.svg",
  },
};
