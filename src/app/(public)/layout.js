import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7570178788317531"
     crossorigin="anonymous"></script>
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Fotuna",
  verification: {
    google: "CWo4pho8DROD76x-T8_iFsrGvgTeUO4dJV9sSKqFw1U",
  },
  description: "Mitigate currency volatility with predictive FX insights.",
  icons: {
    icon: "/favicon.svg",
  },
};
