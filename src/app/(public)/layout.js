import { Inter } from "next/font/google";
import "../globals.css";
import { icons } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
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
