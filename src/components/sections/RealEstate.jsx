'use client';

import React, { useState } from 'react';
import { MapPin, Maximize2, X, ChevronLeft, ChevronRight, BedDouble, Expand, CheckCircle, Phone, Mail, Copy, Check } from 'lucide-react';

const RealEstate = () => {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Állapotok a "Kapcsolat" felugró ablakhoz (Desktop)
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [copiedState, setCopiedState] = useState(null); // 'phone' vagy 'email'

  // --- ADATOK ---
  const houses = [
    {
      id: 1,
      status: "ELADÓ",
      statusColor: "bg-brand", 
      title: "Új Építésű Társasházi Lakás",
      price: "Kérje árajánlatunkat", 
      location: "Derecske",
      specs: { 
        area: "77 m²", 
        rooms: "Nappali + 3 szoba", 
        extras: ["Azonnal költözhető", "Padlófűtés", "Klíma", "Zárt parkoló"] 
      },
      images: [
        "/ingatlanok/derecske_tarsashaz1/Derecske_Erkely.jpg",
        "/ingatlanok/derecske_tarsashaz1/Derecske_nappali1.jpg", 
        "/ingatlanok/derecske_tarsashaz1/Derecske_nappali2.jpg",
        "/ingatlanok/derecske_tarsashaz1/Derecske_nappali3.jpg",
        "/ingatlanok/derecske_tarsashaz1/Derecske_furdo.jpg",
        "/ingatlanok/derecske_tarsashaz1/Derecske_furdo2.jpg", 
        "/ingatlanok/derecske_tarsashaz1/Derecske_szoba1.jpg", 
        "/ingatlanok/derecske_tarsashaz1/Derecske_szoba2.jpg",
        "/ingatlanok/derecske_tarsashaz1/Derecske_szoba3.jpg",
        "/ingatlanok/derecske_tarsashaz1/Derecske_WC.jpg",
      ],
      description: `
        Eladó Derecskén egy első emeleti, 77 m²-es, nappali + 3 szobás új építésű lakás.
        A 2 emeletes tégla építésű társasházban mindössze 8 lakást alakítottak ki, saját udvarral és zárt parkolóval.

        Főbb jellemzők:
        - Építés éve: 2023 (Új építés)
        - Emelet: 1. emelet
        - Erkély: Van (3,86 m²)
        - Fűtés: Padlófűtés mindenhol (saját vezérléssel) + törölközőszárító radiátorok
        - Hűtés: Légkondicionáló
        - Nyílászárók: Korszerű műanyag
        
        Helyiségek:
        - Amerikai nappali-konyha-étkező
        - 3 különnyíló, laminált parkettás szoba
        - Fürdőszoba és külön WC
        - Előszoba
        - Erkély

        Az ingatlan rendkívül jó tájolású és elosztású, azonnal költözhető!
        Lakáshitel és CSOK Plusz igénylésére is alkalmas.
      `
    },
    // --- MÁSODIK HÁZ: HAJDÚSZOBOSZLÓ ---
    {
      id: 2,
      status: "ELADÓ",
      statusColor: "bg-brand",
      title: "Modern Sorházi Otthon",
      price: "99 500 000 Ft",
      location: "Hajdúszoboszló, Központ",
      specs: { 
        area: "103 m²", 
        rooms: "Nappali + 2 szoba", 
        extras: ["Új építés (2025)", "Hőszivattyú", "Garázs", "Saját kert"] 
      },
      images: [
        "/ingatlanok/hajduszoboszlo_sorhaz1/haz1.jpg",
        "/ingatlanok/hajduszoboszlo_sorhaz1/haz2.jpg",
        "/ingatlanok/hajduszoboszlo_sorhaz1/haz3.jpg",
        "/ingatlanok/hajduszoboszlo_sorhaz1/haz4.jpg",
        "/ingatlanok/hajduszoboszlo_sorhaz1/haz5.jpg", 
      ], 
      description: `
        Hajdúszoboszló szívében, ugyanakkor nyugodt, csendes környezetben kínálunk eladásra egy új építésű, prémium kivitelezésű sorházi otthont.
        
        A 2025-ös átadású ingatlan modern technológiával, Ytong téglából épül, betoncserepes tetővel és 3 rétegű hővisszaverős nyílászárókkal.

        Méretek és Elosztás:
        - Teljes hasznos alapterület: 102,96 m²
        - Ebből lakótér: 80,13 m²
        - Amerikai konyhás nappali
        - 2 hálószoba
        - 2 fürdőszoba/WC
        - Saját garázs
        - Saját kert

        Műszaki tartalom és Extrák:
        - Energetikai besorolás: A+ (Fenntartható otthon)
        - Fűtés: Hőszivattyús rendszer + Padlófűtés
        - Hűtés: Saját split klíma (hűtő-fűtő)
        - Parkolás: Garázsban
        - Kilátás: Udvari
        
        Kiváló ár-érték arány, rugalmas fizetési feltételek. Ne maradjon le róla!
      `
    },

    {
      id: 3, // JAVÍTVA: Átírtam 3-asra, hogy ne akadjon össze a 2-essel
      status: "ELADÓ",
      statusColor: "bg-brand",
      title: "Modern Sorházi Otthon",
      price: "98 000 000 Ft",
      location: "Hajdúszoboszló, Központ",
      specs: { 
        area: "87 m²",
        rooms: "Nappali + 2 szoba", 
        extras: ["Új építés (2025)", "Hőszivattyú", "Garázs", "Saját kert"] 
      },
      images: [
        "/ingatlanok/hajduszoboszlo_sorhaz1/haz1.jpg",
        "/ingatlanok/hajduszoboszlo_sorhaz1/haz2.jpg",
        "/ingatlanok/hajduszoboszlo_sorhaz1/haz3.jpg",
        "/ingatlanok/hajduszoboszlo_sorhaz1/haz4.jpg",
        "/ingatlanok/hajduszoboszlo_sorhaz1/haz5.jpg", 
      ], 
      description: `
        Hajdúszoboszló szívében, ugyanakkor nyugodt, csendes környezetben kínálunk eladásra egy új építésű, prémium kivitelezésű sorházi otthont.
        
        A 2025-ös átadású ingatlan modern technológiával, Ytong téglából épül, betoncserepes tetővel és 3 rétegű hővisszaverős nyílászárókkal.

        Méretek és Elosztás:
        - Teljes hasznos alapterület: 87,06 m²
        - Ebből lakótér: 62,94 m²
        - Amerikai konyhás nappali
        - 2 hálószoba
        - 2 fürdőszoba/WC
        - Saját garázs
        - Nagy méretű saját kert

        Műszaki tartalom és Extrák:
        - Energetikai besorolás: A+ (Fenntartható otthon)
        - Fűtés: Hőszivattyús rendszer + Padlófűtés
        - Hűtés: Saját split klíma (hűtő-fűtő)
        - Parkolás: Garázsban
        - Kilátás: Udvari
        
        Kiváló ár-érték arány, rugalmas fizetési feltételek. Ne maradjon le róla!
      `
    }
    
  ];

  // --- FUNKCIÓK ---

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
    if (selectedHouse) {
      setCurrentImageIndex((prev) => (prev === selectedHouse.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedHouse) {
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

        {/* JAVÍTÁS ITT: lg:grid-cols-3 és max-w-7xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {houses.map((house) => (
            <div 
              key={house.id} 
              onClick={() => openModal(house)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 flex flex-col"
            >
              <div className="relative h-72 overflow-hidden bg-gray-200">
                {house.images.length > 0 ? (
                  <img 
                    src={house.images[0]} 
                    alt={house.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">Nincs kép</div>
                )}
                <div className={`absolute top-4 right-4 ${house.statusColor} text-white px-3 py-1 rounded-full text-sm font-bold shadow-md`}>
                  {house.status}
                </div>
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
                <div className="grid grid-cols-2 gap-4 mb-6 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Expand size={18} className="text-brand" />
                    {house.specs.area}
                  </div>
                  <div className="flex items-center gap-2">
                    <BedDouble size={18} className="text-brand" />
                    {house.specs.rooms}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-100">
                  {house.specs.extras.slice(0, 3).map((extra, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium">{extra}</span>
                  ))}
                  {house.specs.extras.length > 3 && <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium">+</span>}
                </div>
                <button className="w-full mt-6 bg-brand-black text-white py-3 rounded-xl font-bold hover:bg-brand transition-colors">
                  Részletek és Képek
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL --- */}
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
              <img 
                src={selectedHouse.images[currentImageIndex]} 
                alt="Galéria" 
                className="max-h-full max-w-full object-contain"
              />
              {selectedHouse.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all backdrop-blur-md hover:scale-110">
                    <ChevronLeft size={32} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all backdrop-blur-md hover:scale-110">
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full text-white text-sm font-medium backdrop-blur-sm border border-white/10">
                {currentImageIndex + 1} / {selectedHouse.images.length}
              </div>
            </div>

            {/* JOBB OLDAL: LEÍRÁS */}
            <div className="lg:w-1/3 p-6 lg:p-10 overflow-y-auto bg-white relative flex flex-col">
              <button onClick={closeModal} className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-red-100 hover:text-red-500 transition-colors">
                <X size={24} />
              </button>

              <div className="mb-3 inline-block">
                 <span className={`${selectedHouse.statusColor} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>
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
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                      <Expand size={20} className="text-brand" />
                      <span className="font-medium">{selectedHouse.specs.area}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                      <BedDouble size={20} className="text-brand" />
                      <span className="font-medium">{selectedHouse.specs.rooms}</span>
                    </div>
                    {selectedHouse.specs.extras.map((extra, idx) => (
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
                          <span>info@perfectgeneral.hu</span>
                        </div>
                        <button 
                          onClick={() => copyToClipboard('info@perfectgeneral.hu', 'email')}
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