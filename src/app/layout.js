import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. ÚJ IMPORT: Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Perfect Generál - Szobafestés, Felújítás és Eladó Házak",
  description: "Profi szobafestés, teljes körű házfelújítás, hidegburkolás és kulcsrakész ingatlanok Debrecenben és környékén. Kérjen ingyenes árajánlatot!",
  keywords: ['szobafestés', 'házfelújítás', 'Debrecen', 'eladó ház', 'generálkivitelezés', 'burkolás'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* 2. IDE TESSZÜK BE A VERCEL MÉRŐKÓDJÁT */}
        {/* Ez automatikusan működik, nem kell neki ID */}
        <Analytics />
        
      </body>
    </html>
  );
}