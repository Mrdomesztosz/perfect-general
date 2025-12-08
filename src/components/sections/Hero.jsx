'use client';

import React, { useState } from 'react'; // <--- useState importálása
import ContactModal from '@/components/ui/ContactModal'; // <--- A közös ablak importálása

const Hero = () => {
  // Állapot a modal nyitásához/zárásához
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhoneClick = (e) => {
    // Csak asztali gépen nyitjuk meg a modalt
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      e.preventDefault(); // Megállítja a tárcsázást
      setIsModalOpen(true); // <--- KINYITJUK A MODALT
    }
    // Mobilon engedjük a tárcsázást
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* <--- IDE TESSZÜK BE A MODALT (Itt más címet adhatunk neki!) */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Kérjen Ingyenes Árajánlatot" // Egyedi cím a Hero részhez
      />

      {/* HÁTTÉRKÉP */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
      </div>

      {/* TARTALOM */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block px-3 py-1 mb-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium">
          Generálkivitelezés & Ingatlaneladás
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Minőségi Otthon,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">
            Megbízható Kezekből.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          A szobafestéstől a teljes körű felújításig, egészen a kulcsrakész házakig. 
          Mi megvalósítjuk álmai otthonát.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+36301234567" 
            onClick={handlePhoneClick} // <--- A módosított függvény hívása
            className="px-8 py-4 bg-brand hover:bg-brand-dark text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-brand/25 cursor-pointer"
          >
            Ingyenes Árajánlat
          </a>
          <a 
            href="#referenciak" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg transition-all"
          >
            Munkáink
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;