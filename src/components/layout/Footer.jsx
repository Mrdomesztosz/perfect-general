import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    // JAVÍTÁS: Kivettük a '-mt-1'-et, de a 'relative z-10' maradhat
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Oszlop */}
          <div>
            <div className="text-3xl font-bold tracking-tighter mb-6">
              <span className="text-white">PERFECT</span>
              <span className="text-brand">GENERÁL</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Megbízható partner a felújításban és az otthonteremtésben. 
              Minőség, határidőre.
            </p>
          </div>

          {/* 2. Oszlop */}
          <div>
            <h4 className="text-xl font-bold mb-6">Navigáció</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#szolgaltatasok" className="hover:text-brand transition-colors">Szolgáltatások</a></li>
              <li><a href="#referenciak" className="hover:text-brand transition-colors">Referenciák</a></li>
              <li><a href="#ingatlanok" className="hover:text-brand transition-colors">Eladó Ingatlanok</a></li>
              <li><a href="#rolunk" className="hover:text-brand transition-colors">Rólunk</a></li>
            </ul>
          </div>

          {/* 3. Oszlop */}
          <div>
            <h4 className="text-xl font-bold mb-6">Szakterületek</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Szobafestés & Mázolás</li>
              <li>Teljes lakásfelújítás</li>
              <li>Hidegburkolás</li>
              <li>Villanyszerelés</li>
            </ul>
          </div>

          {/* 4. Oszlop */}
          <div id="kapcsolat">
            <h4 className="text-xl font-bold mb-6">Kapcsolat</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand shrink-0" />
                <span className="text-gray-400">4000 Debrecen,<br />Piac utca 1. (Iroda)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand shrink-0" />
                <a href="tel:+36301234567" className="text-gray-400 hover:text-white transition-colors">
                  +36 30 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand shrink-0" />
                <span className="text-gray-400">info@perfectgeneral.hu</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Alsó sáv */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2024 Perfect Generál Kft. Minden jog fenntartva.</p>
          <p className="mt-2 md:mt-0">Készítette: WebDesign</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;