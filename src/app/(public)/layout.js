import { Inter } from "next/font/google";
import "../globals.css";

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
  description: "Mitigate currency volatility with predictive FX insights.",
  icons: {
    icon: "/favicon.svg",
  },
};
