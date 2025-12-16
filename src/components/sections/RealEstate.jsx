'use client';

import React, { useState } from 'react';
import { houses } from '@/data/housesData';
import { formatCurrency } from '@/utils/formatCurrency';
import { MapPin, Maximize, Bed, Phone } from 'lucide-react';
import ContactModal from '@/components/ui/ContactModal';


const RealEstate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Módosított függvény: várja a ház nevét is!
  const handlePhoneClick = (e, houseTitle) => {
    

    // Okos platform ellenőrzés (ugyanaz, mint a Headerben)
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.innerWidth > 1024;

    if (typeof window !== 'undefined' && isDesktop) {
      e.preventDefault(); // Megállítjuk a tárcsázást
      setIsModalOpen(true); // Kinyitjuk az ablakot
    }
  };

  return (
    <section id="ingatlanok" className="py-20 bg-gray-50">
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Ingatlan Érdeklődés"
      />

      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-black mb-4">Eladó Ingatlanaink</h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">
            Saját kivitelezésű, minőségi otthonok közvetlenül tőlünk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map((house) => (
            <div 
              key={house.id} 
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                house.status === 'sold' ? 'opacity-75 grayscale' : ''
              }`}
            >
              {/* Kép + Státusz címke */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={house.image} 
                  alt={house.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-sm font-bold shadow-md ${
                  house.status === 'active' ? 'bg-brand text-white' : 'bg-gray-800 text-white'
                }`}>
                  {house.status === 'active' ? 'ELADÓ' : 'ELKELT'}
                </div>
              </div>

              {/* Tartalom */}
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin size={16} className="mr-1 text-brand" />
                  {house.location}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{house.title}</h3>
                
                <div className="text-2xl font-bold text-brand mb-4">
                  {formatCurrency(house.price)}
                </div>

                {/* Paraméterek ikonokkal */}
                <div className="flex items-center gap-6 border-y border-gray-100 py-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Maximize size={20} />
                    <span>{house.size} m²</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed size={20} />
                    <span>{house.rooms} szoba</span>
                  </div>
                </div>

                {/* Extrák felsorolása */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {house.features.map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Gomb */}
                {house.status === 'active' ? (
                  <a 
                    href="tel:+36301234567"
                    // 3. JAVÍTÁS: Átadjuk a 'house.title'-t a függvénynek
                    onClick={(e) => handlePhoneClick(e, house.title)}
                    className="flex items-center justify-center gap-2 w-full bg-brand-black text-white py-3 rounded-xl font-bold hover:bg-brand transition-colors cursor-pointer"
                  >
                    <Phone size={18} />
                    Érdekel
                  </a>
                ) : (
                  <button disabled className="w-full bg-gray-200 text-gray-400 py-3 rounded-xl font-bold cursor-not-allowed">
                    Már nem elérhető
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RealEstate;