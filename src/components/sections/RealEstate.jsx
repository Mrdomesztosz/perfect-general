'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Maximize2, X, ChevronLeft, ChevronRight, BedDouble, Expand, CheckCircle, Phone, Mail, Copy, Check } from 'lucide-react';
import { client, urlFor } from '../../sanity'; // Importáljuk a kapcsolatot

const RealEstate = () => {
  const [houses, setHouses] = useState([]); // Itt tároljuk a letöltött házakat
  const [loading, setLoading] = useState(true); // Töltőképernyő állapot
  
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [copiedState, setCopiedState] = useState(null);

  // --- ADATOK LETÖLTÉSE A SANITY-BŐL ---
  useEffect(() => {
    const fetchHouses = async () => {
      // Ez a lekérdezés (GROQ) kéri el az adatokat
      const query = `*[_type == "house"] | order(_createdAt desc)`;
      const data = await client.fetch(query);
      setHouses(data);
      setLoading(false);
    };

    fetchHouses();
  }, []);

  // --- SEGÉDFÜGGVÉNYEK ---

  // Státusz színek kezelése
  const getStatusColor = (status) => {
    switch (status) {
      case 'ELADÓ': return 'bg-brand';
      case 'ELKELVE': return 'bg-red-500';
      case 'TERVEZÉS ALATT': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const openModal = (house) => {
    setSelectedHouse(house);
    setCurrentImageIndex(0); 
    setShowContactPopup(false); 
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedHouse(null);
    document.body.style.overflow = 'unset'; 
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedHouse?.images) {
      setCurrentImageIndex((prev) => (prev === selectedHouse.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedHouse?.images) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedHouse.images.length - 1 : prev - 1));
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedState(type);
    setTimeout(() => setCopiedState(null), 2000); 
  };

  return (
    <section id="ingatlanok" className="py-20 bg-gray-50 scroll-mt-14 lg:scroll-mt-32">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-black mb-4">Eladó Ingatlanaink</h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">Saját kivitelezésű, minőségi otthonok közvetlenül tőlünk.</p>
        </div>

        {/* TÖLTŐKÉPERNYŐ (Amíg az adat megérkezik) */}
        {loading && (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto"></div>
            <p className="mt-4 text-gray-500">Ingatlanok betöltése...</p>
          </div>
        )}

        {/* LISTA */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {houses.map((house) => (
              <div 
                key={house._id} // Sanity _id-t használunk
                onClick={() => openModal(house)}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 flex flex-col"
              >
                <div className="relative h-72 overflow-hidden bg-gray-200">
                  {house.images && house.images.length > 0 ? (
                    <img 
                      src={urlFor(house.images[0]).url()} // Sanity kép konvertálása URL-re
                      alt={house.title} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">Nincs kép</div>
                  )}
                  
                  {/* Státusz címke */}
                  {house.status && (
                    <div className={`absolute top-4 right-4 ${getStatusColor(house.status)} text-white px-3 py-1 rounded-full text-sm font-bold shadow-md`}>
                      {house.status}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full text-brand-black shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <MapPin size={16} />
                    {house.location}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{house.title}</h3>
                  <div className="text-2xl font-bold text-brand mb-6">{house.price}</div>
                  
                  {/* Specifikációk */}
                  {house.specs && (
                    <div className="grid grid-cols-2 gap-4 mb-6 text-gray-600 text-sm">
                      <div className="flex items-center gap-2">
                        <Expand size={18} className="text-brand" />
                        {house.specs.area || '-'}
                      </div>
                      <div className="flex items-center gap-2">
                        <BedDouble size={18} className="text-brand" />
                        {house.specs.rooms || '-'}
                      </div>
                    </div>
                  )}

                  {/* Extrák (első 3) */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-100">
                    {house.extras && house.extras.slice(0, 3).map((extra, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium">{extra}</span>
                    ))}
                    {house.extras && house.extras.length > 3 && <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium">+</span>}
                  </div>
                  
                  <button className="w-full mt-6 bg-brand-black text-white py-3 rounded-xl font-bold hover:bg-brand transition-colors">
                    Részletek és Képek
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* --- MODAL (FELUGRÓ ABLAK) --- */}
      {selectedHouse && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={closeModal}
        >
          <div 
            className="bg-white w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] lg:h-[80vh]"
            onClick={e => e.stopPropagation()}
          >
            
            {/* BAL OLDAL: GALÉRIA */}
            <div className="lg:w-2/3 bg-black relative flex items-center justify-center h-[40vh] lg:h-full group">
              {selectedHouse.images && selectedHouse.images.length > 0 ? (
                <img 
                  src={urlFor(selectedHouse.images[currentImageIndex]).url()} 
                  alt="Galéria" 
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="text-white">Nincs feltöltött kép</div>
              )}

              {selectedHouse.images && selectedHouse.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all backdrop-blur-md hover:scale-110">
                    <ChevronLeft size={32} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all backdrop-blur-md hover:scale-110">
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
              
              {selectedHouse.images && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full text-white text-sm font-medium backdrop-blur-sm border border-white/10">
                  {currentImageIndex + 1} / {selectedHouse.images.length}
                </div>
              )}
            </div>

            {/* JOBB OLDAL: LEÍRÁS */}
            <div className="lg:w-1/3 p-6 lg:p-10 overflow-y-auto bg-white relative flex flex-col">
              <button onClick={closeModal} className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-red-100 hover:text-red-500 transition-colors">
                <X size={24} />
              </button>

              <div className="mb-3 inline-block">
                 <span className={`${getStatusColor(selectedHouse.status)} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>
                   {selectedHouse.status}
                 </span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight">{selectedHouse.title}</h3>
              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <MapPin size={18} />
                {selectedHouse.location}
              </div>

              <div className="text-3xl font-bold text-brand mb-8 border-b border-gray-100 pb-6">
                {selectedHouse.price}
              </div>

              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Ingatlan jellemzők</h4>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-gray-700">
                    {selectedHouse.specs && (
                      <>
                        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                          <Expand size={20} className="text-brand" />
                          <span className="font-medium">{selectedHouse.specs.area || '-'}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                          <BedDouble size={20} className="text-brand" />
                          <span className="font-medium">{selectedHouse.specs.rooms || '-'}</span>
                        </div>
                      </>
                    )}
                    
                    {selectedHouse.extras && selectedHouse.extras.map((extra, idx) => (
                      <div key={idx} className="flex items-center gap-2 col-span-2">
                        <CheckCircle size={18} className="text-brand shrink-0" />
                        <span>{extra}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Részletes leírás</h4>
                  <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                    {selectedHouse.description}
                  </p>
                </div>
              </div>
              
              {/* --- KAPCSOLAT GOMBOK --- */}
              <div className="mt-8 pt-6 border-t border-gray-100 relative">
                 
                 {/* MOBIL (Hívás) */}
                 <a 
                   href="tel:+36309150429" 
                   className="lg:hidden block w-full bg-brand hover:bg-brand-dark text-white text-center py-4 rounded-xl font-bold text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                 >
                   <Phone size={20} />
                   Hívás Indítása
                 </a>

                 {/* DESKTOP (Popup) */}
                 <button 
                   onClick={() => setShowContactPopup(!showContactPopup)}
                   className="hidden lg:flex w-full bg-brand hover:bg-brand-dark text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand/30 items-center justify-center gap-2"
                 >
                   <Mail size={20} />
                   Kapcsolatfelvétel
                 </button>

                 {/* POPUP ABLAK */}
                 {showContactPopup && (
                   <div className="absolute bottom-full left-0 w-full mb-4 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 animate-in fade-in slide-in-from-bottom-2 z-20">
                      <h5 className="font-bold text-gray-900 mb-3">Elérhetőségeink:</h5>
                      
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg mb-2 group hover:bg-gray-100 transition-colors">
                        <div className="flex items-center gap-3 text-gray-700 font-medium">
                          <Phone size={18} className="text-brand" />
                          <span>+36 30 915 0429</span>
                        </div>
                        <button 
                          onClick={() => copyToClipboard('+36309150429', 'phone')}
                          className="text-gray-400 hover:text-brand transition-colors p-1"
                          title="Másolás"
                        >
                          {copiedState === 'phone' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                        </button>
                      </div>

                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg group hover:bg-gray-100 transition-colors">
                        <div className="flex items-center gap-3 text-gray-700 font-medium">
                          <Mail size={18} className="text-brand" />
                          <span>perfectgeneralkft@gmail.com</span>
                        </div>
                        <button 
                          onClick={() => copyToClipboard('perfectgeneralkft@gmail.com', 'email')}
                          className="text-gray-400 hover:text-brand transition-colors p-1"
                          title="Másolás"
                        >
                          {copiedState === 'email' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                        </button>
                      </div>
                      
                      <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
                   </div>
                 )}

              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default RealEstate;