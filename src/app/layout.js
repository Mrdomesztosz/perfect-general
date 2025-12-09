import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'; // <--- 1. IMPORT

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
    // 2. ÁTÍRVA: "en" -> "hu" (hogy a Google tudja, ez magyar oldal)
    <html lang="hu">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* 3. IDE JÖN A SAJÁT KÓDOD */}
        {/* Cseréld le a G-XXXXXXXXXX részt a sajátodra! */}
        <GoogleAnalytics gaId="G-XP061FGNTG" />
        
      </body>
    </html>
  );
}