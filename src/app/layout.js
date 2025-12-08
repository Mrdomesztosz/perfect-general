import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
