'use client';

import React, { useState } from 'react';
import { X, Phone, Copy, Check } from 'lucide-react'; // Importáljuk a másolás és pipa ikonokat

const ContactModal = ({ isOpen, onClose, title = "Kapcsolatfelvétel" }) => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+36 30 123 4567"; // A számot változóba tettük

  // Ha nincs nyitva, nem renderelünk semmit
  if (!isOpen) return null;

  // MÁSOLÁS FUNKCIÓ
  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber); // Vágólapra teszi a számot
    setCopied(true); // Átállítja az állapotot "Másolva" jelzésre
    
    // 2 másodperc múlva visszaállítja az eredeti állapotot
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Fejléc */}
        <div className="bg-brand-black p-6 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Phone size={24} className="text-brand" />
            {title}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={28} />
          </button>
        </div>

        {/* Tartalom */}
        <div className="p-8 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Hívjon minket bizalommal, vagy másolja ki a számot:
          </p>
          
          {/* A NAGY SZÁM (Most már nem Link, hanem Másoló Gomb) */}
          <button 
            onClick={handleCopy}
            className="group relative w-full flex items-center justify-center gap-3 text-3xl md:text-4xl font-extrabold text-brand mb-8 py-4 px-2 rounded-xl hover:bg-gray-50 transition-all border-2 border-transparent hover:border-gray-100"
            title="Kattintson a másoláshoz"
          >
            {/* A szám szövege */}
            <span>{phoneNumber}</span>
            
            {/* Ikon a szám mellett (Vagy másolás, vagy pipa ha kész) */}
            <span className="text-gray-400 group-hover:text-brand transition-colors">
              {copied ? <Check size={28} className="text-green-500" /> : <Copy size={28} />}
            </span>

            {/* "Másolva" felirat animáció */}
            {copied && (
              <span className="absolute -top-2 right-0 left-0 text-sm font-medium text-green-600 bg-green-100 py-1 px-3 rounded-full mx-auto w-max animate-in fade-in slide-in-from-bottom-2">
                Sikeresen másolva!
              </span>
            )}
          </button>

          <button 
            onClick={onClose}
            className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors"
          >
            Bezárás
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactModal;