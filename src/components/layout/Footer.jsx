'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactModal from '@/components/ui/ContactModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhoneClick = (e) => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.innerWidth > 1024;
    
    if (typeof window !== 'undefined' && isDesktop) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <footer className="bg-brand-black text-white pt-24 pb-10 ring-1 ring-brand-black">
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Lépjen velünk kapcsolatba"
      />

      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Oszlop: LOGÓ ÉS LEÍRÁS */}
          <div>
            <div className="mb-8">
              {/* ÓRIÁS LOGÓ */}
              <div className="relative w-32 h-32 mb-6 bg-white rounded-full overflow-hidden shadow-xl">
                <Image 
                  src="/ujlogo.jpg" // <--- ITT A CSERE
                  alt="Perfect Generál Logo" 
                  fill 
                  className="object-contain scale-110 -ml-0 -mt-1 lg:-ml-0 lg:-mt-1" 
                />
              </div>
              {/* SZÖVEG ALATTA */}
              <div className="text-3xl font-bold tracking-normal leading-none">
                <span className="block text-white">PERFECT</span>
                <span className="block text-brand">GENERÁL</span>
              </div>
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

          {/* 4. Oszlop: Kapcsolat */}
          <div id="kapcsolat">
            <h4 className="text-xl font-bold mb-6">Kapcsolat</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand shrink-0" />
                <span className="text-gray-400">4000 Debrecen,<br />Piac utca 1. (Iroda)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand shrink-0" />
                <a 
                  href="tel:+36301234567" 
                  onClick={handlePhoneClick}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
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

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2024 Perfect Generál Kft. Minden jog fenntartva.</p>
          <p className="mt-2 md:mt-0">Készítette: WebDesign</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;