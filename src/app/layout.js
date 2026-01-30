import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ITT A FELTUNINGOLT METADATA 🚀
// MODOSÍTOTT METADATA (Országos fókusz + Festés) 🎨🌍
export const metadata = {
  metadataBase: new URL('https://perfectgeneral.hu'),
  title: {
    default: 'Perfect Generál Kft. | Ipari Festés, Szobafestés és Lakásfelújítás',
    template: '%s | Perfect Generál Kft.'
  },
  description: 'Perfect Generál Kft. - Professzionális ipari festés, csarnokfestés, szobafestés és teljes körű lakásfelújítás. Megbízható szakemberek, 30 év tapasztalat országosan.',
  keywords: ['ipari festés', 'szobafestés', 'lakásfelújítás', 'Perfect Generál Kft.', 'csarnokfestés', 'gipszkartonozás', 'országos kivitelezés', 'eladó ház', 'hőszigetelés', 'festő vállalkozás'],
  
  icons: {
    icon: '/ujlogo.jpg',      // Ellenőrizd: ha a képed neve más, írd át! (pl. /icon.png)
    shortcut: '/ujlogo.jpg',
    apple: '/ujlogo.jpg',     // Ez jelenik meg iPhone-on és iPaden
  },

  openGraph: {
    title: 'Perfect Generál Kft. - Ipari Festés és Felújítás Országosan',
    description: '30 év tapasztalat ipari festésben és felújításban. Minőség garanciával az egész ország területén. Kérjen ajánlatot!',
    url: 'https://perfectgeneral.hu',
    siteName: 'Perfect Generál Kft.',
    locale: 'hu_HU',
    type: 'website',
  },
  
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* 2. VERCEL MÉRŐKÓD */}
        <Analytics />
        
      </body>
    </html>
  );
}