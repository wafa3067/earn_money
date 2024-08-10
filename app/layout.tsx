import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Adsense from "./google_ads/adsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watch Ads ",
  description: "watch ads to earn money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
   <Adsense/>
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
