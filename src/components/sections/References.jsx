'use client';

import React, { useState } from 'react';
import { 
  Building2, Factory, Home, Trophy, MapPin, 
  LayoutDashboard, HardHat, Hotel, ChevronDown, ChevronUp 
} from 'lucide-react';

const References = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'all', label: 'Összes Projekt' },
    { id: 'ipari', label: 'Ipari & Gyártás' },
    { id: 'hotel', label: 'Hotel & Lakópark' },
    { id: 'kozulet', label: 'Közület & Iroda' },
  ];

  const projects = [
    // --- IPARI ---
    { id: 1, category: 'ipari', city: 'Nyíregyháza', title: 'LEGO Gyár', desc: 'Ipari festési munkálatok és karbantartás', icon: <Factory /> },
    { id: 2, category: 'ipari', city: 'Debrecen', title: 'Continental', desc: 'Gyártócsarnok felületképzési munkák', icon: <Factory /> },
    { id: 3, category: 'ipari', city: 'Tatabánya', title: 'Coloplast', desc: 'Gyártócsarnok speciális festése', icon: <Factory /> },
    { id: 4, category: 'ipari', city: 'Gyermely', title: 'Tésztagyár', desc: 'Új gyártósori csarnok felületképzése', icon: <Factory /> },
    { id: 5, category: 'ipari', city: 'Sáránd', title: 'Sertéstelep', desc: 'Technológiai korszerűsítés, szakipari munkák', icon: <LayoutDashboard /> },
    
    // --- HOTEL & LAKÓPARK ---
    { id: 6, category: 'hotel', city: 'Tokaj', title: 'Grand Hotel Tokaj', desc: 'Exkluzív belső terek felületképzése', icon: <Hotel /> },
    { id: 7, category: 'hotel', city: 'Balatonkenese', title: 'Kenese Liget', desc: 'Prémium Resort teljeskörű festése', icon: <Home /> },
    { id: 8, category: 'hotel', city: 'Csopak', title: 'Residence Lakópark', desc: 'Társasházi lakások festési munkálatai', icon: <Home /> },
    { id: 9, category: 'hotel', city: 'Debrecen', title: 'Bajcsy Szálloda', desc: 'Szobák és közösségi terek felújítása', icon: <Hotel /> },
    { id: 10, category: 'hotel', city: 'Dobogókő', title: 'Hotel Cardoner', desc: 'Képzési Központ komplett festése', icon: <Hotel /> },
    { id: 11, category: 'hotel', city: 'Derecske', title: 'Rózsakert Csárda', desc: 'Éteterem átalakítási és felújítási munkák', icon: <Building2 /> },
    
    // --- KÖZÜLET ---
    { id: 12, category: 'kozulet', city: 'Nyíregyháza', title: 'Atlétikai Centrum', desc: 'Sportlétesítmény speciális bevonatai', icon: <Trophy /> },
    { id: 13, category: 'kozulet', city: 'Budapest', title: 'BSZL Irodaház', desc: 'Nagyfelületű irodai festés', icon: <Building2 /> },
    { id: 14, category: 'kozulet', city: 'Derecske', title: 'Bocskai Iskola', desc: 'Intézménybővítés és korszerűsítés', icon: <HardHat /> },
  ];

  // Szűrés és darabolás logika
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section 
      id="referenciak" 
      className="py-24 bg-brand-black text-white scroll-mt-14 lg:scroll-mt-32 relative z-20 -mt-1 ring-4 ring-brand-black ring-offset-0"
    >
      <div className="container mx-auto px-6">
        
        {/* FEJLÉC */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Megbízható Partner <br />
              <span className="text-brand">Ipari Méretekben is</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Nemcsak lakossági megbízásokat teljesítünk. Büszkék vagyunk rá, hogy Magyarország legnagyobb gyárai, szállodái és közintézményei minket választottak.
            </p>
          </div>
          
          {/* STATISZTIKA MINI-BOX - JAVÍTVA */}
          <div className="hidden md:flex bg-gray-900 border border-gray-800 p-6 rounded-2xl gap-8 shadow-lg">
            <div>
               {/* Itt javítottuk a számot reálisabbra */}
               <div className="text-3xl font-bold text-white">500+</div>
               <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Sikeres Projekt</div>
            </div>
            <div className="w-px bg-gray-800"></div>
            <div>
               <div className="text-3xl font-bold text-brand">30</div>
               <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Év Tapasztalat</div>
            </div>
          </div>
        </div>

        {/* SZŰRŐ TABOK */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-8 border-b border-gray-800 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setFilter(cat.id); setShowAll(false); }}
              className={`px-6 py-3 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all border-b-2 ${
                filter === cat.id
                  ? 'border-brand text-brand'
                  : 'border-transparent text-gray-500 hover:text-white hover:border-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* KÁRTYÁK LISTÁJA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-brand/30 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-md"
            >
              {/* Háttér ikon (Halványítva) */}
              <div className="absolute -bottom-4 -right-4 text-white/5 group-hover:text-brand/5 transition-colors">
                {React.cloneElement(project.icon, { size: 100, strokeWidth: 1 })}
              </div>

              {/* Tartalom */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={14} className="text-brand" />
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-wide">
                    {project.city}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* "MUTASS TÖBBET" GOMB */}
        {filteredProjects.length > 6 && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-brand border border-gray-700 hover:border-brand rounded-full text-white font-medium transition-all duration-300"
            >
              {showAll ? (
                <>Kevesebb mutatása <ChevronUp size={18} /></>
              ) : (
                <>Összes referencia betöltése <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" /></>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default References;