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
export const metadata = {
  metadataBase: new URL('https://perfectgeneral.hu'), // Ez segít a Google-nek azonosítani a domaint
  title: {
    default: 'Perfect General | Generálkivitelezés és Felújítás',
    template: '%s | Perfect General'
  },
  description: 'Professzionális generálkivitelezés, ipari festés, lakásfelújítás és építőipari munkák 30 év tapasztalattal. Perfect General - Minőség garanciával Debrecenben és országosan.',
  keywords: ['generálkivitelezés', 'lakásfelújítás', 'ipari festés', 'szobafestés', 'Perfect General', 'építőipar', 'Debrecen', 'eladó ház', 'csarnok festés'],
  
  // Ez felel azért, hogy ha megosztod Facebookon/Messengeren, szép kártya legyen képpel:
  openGraph: {
    title: 'Perfect General - Megbízható Építőipari Partner',
    description: '30 év tapasztalat, 500+ sikeres projekt. Kérjen ajánlatot még ma!',
    url: 'https://perfectgeneral.hu',
    siteName: 'Perfect General',
    locale: 'hu_HU',
    type: 'website',
  },
  
  // Ez a robotoknak szól:
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