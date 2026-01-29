'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactModal from '@/components/ui/ContactModal';

const Footer = () => {
  // Állapotok a modálokhoz
  const [isModalOpen, setIsModalOpen] = useState(false); // Telefonos modál
  const [isImpresszumOpen, setIsImpresszumOpen] = useState(false); // Impresszum
  const [isAdatvedelemOpen, setIsAdatvedelemOpen] = useState(false); // Adatvédelem

  // Automatikus évszám
  const currentYear = new Date().getFullYear();

  const handlePhoneClick = (e) => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.innerWidth > 1024;
    
    if (typeof window !== 'undefined' && isDesktop) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <footer className="bg-brand-black text-white pt-24 pb-10 ring-1 ring-brand-black relative">
      
      {/* --- TELEFONOS KAPCSOLAT MODÁL (Meglévő) --- */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Lépjen velünk kapcsolatba"
      />

      {/* --- JOGI MODÁLOK (Új) --- */}
      
      {/* 1. IMPRESSZUM MODAL */}
      {isImpresszumOpen && (
        <LegalModal title="Impresszum" onClose={() => setIsImpresszumOpen(false)}>
          <div className="space-y-4 text-sm text-gray-700">
            <section>
              <h3 className="font-bold text-gray-900 mb-1">A Szolgáltató (Weboldal üzemeltetője) adatai:</h3>
              <p><strong>Cégnév:</strong> Perfect Generál Kft.</p>
              <p><strong>Székhely:</strong> 4130 Derecske, Kossuth utca 34/A</p>
              <p><strong>Cégjegyzékszám:</strong> 0909025625</p>
              <p><strong>Adószám:</strong> 14461934-2-09</p>
              <p><strong>E-mail:</strong> perfectgeneralkft@gmail.com</p>
              <p><strong>Telefonszám:</strong> +36 30 915 0429</p>
            </section>

            <hr className="border-gray-200 my-4" />

            <section>
              <h3 className="font-bold text-gray-900 mb-1">Tárhelyszolgáltatók:</h3>
              <div className="mb-3">
                <p className="font-semibold text-xs text-gray-500 uppercase tracking-wide">Frontend (Weboldal megjelenítése):</p>
                <p><strong>Név:</strong> Vercel Inc.</p>
                <p><strong>Cím:</strong> 340 S Lemon Ave #4133 Walnut, CA 91789, USA</p>
                <p><strong>Web:</strong> vercel.com</p>
              </div>
              <div>
                <p className="font-semibold text-xs text-gray-500 uppercase tracking-wide">Backend (Adatbázis és képek):</p>
                <p><strong>Név:</strong> Sanity AS</p>
                <p><strong>Cím:</strong> Thorvald Meyers gate 11, 0555 Oslo, Norway</p>
                <p><strong>Web:</strong> sanity.io</p>
              </div>
            </section>
          </div>
        </LegalModal>
      )}

      {/* 2. ADATVÉDELEM MODAL */}
      {isAdatvedelemOpen && (
        <LegalModal title="Adatkezelési Tájékoztató" onClose={() => setIsAdatvedelemOpen(false)}>
           <div className="space-y-4 text-sm text-gray-700">
            <section>
              <h3 className="font-bold text-gray-900 mb-1">Általános tájékoztató</h3>
              <p>
                A weboldal látogatása során nem gyűjtünk marketing célú adatokat, nem használunk követőkódokat (tracking cookies) és nem készítünk profilalkotást.
                A weboldal célja kizárólag az ingatlanok bemutatása.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-gray-900 mb-1">Kapcsolatfelvétel</h3>
              <p>
                Amennyiben Ön e-mailben vagy telefonon felveszi velünk a kapcsolatot, az önkéntesen megadott adatait (név, elérhetőség) kizárólag az érdeklődésének megválaszolása céljából kezeljük. Az adatokat harmadik félnek nem adjuk ki.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-gray-900 mb-1">Szervernaplók</h3>
              <p>
                A weboldal technikai kiszolgálása során a tárhelyszolgáltató (Vercel Inc.) informatikai biztonsági okokból automatikusan rögzítheti a látogató IP címét és az eszköz típusát. Ezeket az adatokat nem kapcsoljuk össze személyes azonosítókkal.
              </p>
            </section>

            <hr className="border-gray-200 my-4" />

            <section>
              <h3 className="font-bold text-gray-900 mb-1">Szerzői jogok (Copyright)</h3>
              <p>
                A weboldalon található minden tartalom (szöveg, fotó, grafika, logó) a Perfect Generál Kft. szellemi tulajdona. Azok engedély nélküli másolása, felhasználása tilos és jogi következményeket von maga után.
              </p>
            </section>
          </div>
        </LegalModal>
      )}


      {/* --- FŐ TARTALOM --- */}
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* 1. Oszlop: LOGÓ ÉS LEÍRÁS */}
          <div>
            <div className="mb-8">
              <div className="relative w-32 h-32 mb-6 bg-white rounded-full overflow-hidden shadow-xl">
                 <Image 
                  src="/ujlogo.jpg" 
                  alt="Perfect Generál Logo" 
                  fill 
                  className="object-contain scale-110 -ml-0 -mt-1 lg:-ml-0 lg:-mt-1" 
                />
              </div>
              <div className="text-3xl font-bold tracking-tighter leading-none">
                <span className="block text-white">PERFECT</span>
                <span className="block text-brand">GENERÁL</span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              Festő egyéni vállalkozásból nőttünk ingatlanfejlesztő céggé. 
              Saját beruházású társasházak és sorházak Derecskén és Hajdúszoboszlón.
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
          <div id="kapcsolat" className="scroll-mt-32">
            <h4 className="text-xl font-bold mb-6">Kapcsolat</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand shrink-0" />
                <span className="text-gray-400">4130 Derecske,<br />Hajdú-Bihar Vármegye (Iroda)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand shrink-0" />
                <a 
                  href="tel:+36309150429" 
                  onClick={handlePhoneClick}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  +36 30 915 0429
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand shrink-0" />
                <span className="text-gray-400">perfectgeneralkft@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- LÁBLÉC ALJ: COPYRIGHT ÉS JOGI LINKEK --- */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          
          <div className="text-center md:text-left">
            <p>&copy; {currentYear} Perfect Generál Kft. Minden jog fenntartva.</p>
            <p className="mt-1">Készítette: <span className='text-gray-400'>[Rácz Donát]</span></p>
          </div>

          {/* Jogi gombok */}
          <div className="flex gap-6">
            <button 
              onClick={() => setIsImpresszumOpen(true)}
              className="hover:text-brand transition-colors underline decoration-gray-700 hover:decoration-brand"
            >
              Impresszum
            </button>
            <button 
              onClick={() => setIsAdatvedelemOpen(true)}
              className="hover:text-brand transition-colors underline decoration-gray-700 hover:decoration-brand"
            >
              Adatkezelés
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

// --- SEGÉD KOMPONENS: A felugró ablak kerete (Jogi szövegekhez) ---
function LegalModal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* Sötét háttér */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Fehér doboz */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col animate-in fade-in zoom-in duration-200">
        
        {/* Fejléc */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50 rounded-t-xl">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-full transition-colors"
          >
            {/* X ikon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Tartalom (Görgethető) */}
        <div className="p-6 overflow-y-auto custom-scrollbar text-left">
          {children}
        </div>

        {/* Lábléc gomb */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end rounded-b-xl">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-brand-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Bezárás
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;