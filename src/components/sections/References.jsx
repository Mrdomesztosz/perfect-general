'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Building2, Factory, Home, Trophy, MapPin, 
  LayoutDashboard, HardHat, Hotel, ChevronDown, ChevronUp, 
  X, ChevronLeft, ChevronRight, Camera, PaintBucket 
} from 'lucide-react';
import { client, urlFor } from '@/sanity';

const References = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [photoReferences, setPhotoReferences] = useState([]);
  
  // Modál állapotok
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- 1. ADATLEKÉRÉS (Új mezők: workType, description) ---
  useEffect(() => {
    const fetchReferences = async () => {
      try {
        const query = `*[_type == "referenceProject"] {
          _id,
          title,
          location,
          workType, 
          description,
          image,
          gallery 
        }`;
        const data = await client.fetch(query);
        setPhotoReferences(data);
      } catch (error) {
        console.error("Hiba a képek betöltésekor:", error);
      }
    };
    fetchReferences();
  }, []);

  // --- FUNKCIÓK ---
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const allImages = [selectedProject.image, ...(selectedProject.gallery || [])];
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const allImages = [selectedProject.image, ...(selectedProject.gallery || [])];
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const categories = [
    { id: 'all', label: 'Összes Projekt' },
    { id: 'sajat', label: 'Galéria 🏠' },
    { id: 'ipari', label: 'Ipari & Gyártás' },
    { id: 'hotel', label: 'Hotel & Lakópark' },
    { id: 'kozulet', label: 'Közület & Iroda' },
  ];

  const projects = [
    { id: 1, category: 'ipari', city: 'Nyíregyháza', title: 'LEGO Gyár', desc: 'Ipari festési munkálatok és karbantartás', icon: <Factory /> },
    { id: 2, category: 'ipari', city: 'Debrecen', title: 'Continental', desc: 'Gyártócsarnok felületképzési munkák', icon: <Factory /> },
    { id: 3, category: 'ipari', city: 'Tatabánya', title: 'Coloplast', desc: 'Gyártócsarnok speciális festése', icon: <Factory /> },
    { id: 4, category: 'ipari', city: 'Gyermely', title: 'Tésztagyár', desc: 'Új gyártósori csarnok felületképzése', icon: <Factory /> },
    { id: 5, category: 'ipari', city: 'Sáránd', title: 'Sertéstelep', desc: 'Technológiai korszerűsítés, szakipari munkák', icon: <LayoutDashboard /> },
    { id: 6, category: 'hotel', city: 'Tokaj', title: 'Grand Hotel Tokaj', desc: 'Exkluzív belső terek felületképzése', icon: <Hotel /> },
    { id: 7, category: 'hotel', city: 'Balatonkenese', title: 'Kenese Liget', desc: 'Prémium Resort teljeskörű festése', icon: <Home /> },
    { id: 8, category: 'hotel', city: 'Csopak', title: 'Residence Lakópark', desc: 'Társasházi lakások festési munkálatai', icon: <Home /> },
    { id: 9, category: 'hotel', city: 'Debrecen', title: 'Bajcsy Szálloda', desc: 'Szobák és közösségi terek felújítása', icon: <Hotel /> },
    { id: 10, category: 'hotel', city: 'Dobogókő', title: 'Hotel Cardoner', desc: 'Képzési Központ komplett festése', icon: <Hotel /> },
    { id: 11, category: 'hotel', city: 'Derecske', title: 'Almavirág Étterem', desc: 'Éteterem átalakítási és felújítási munkák', icon: <Building2 /> },
    { id: 12, category: 'kozulet', city: 'Nyíregyháza', title: 'Atlétikai Centrum', desc: 'Sportlétesítmény speciális bevonatai', icon: <Trophy /> },
    { id: 13, category: 'kozulet', city: 'Budapest', title: 'BSZL Irodaház', desc: 'Nagyfelületű irodai festés', icon: <Building2 /> },
    { id: 14, category: 'kozulet', city: 'Derecske', title: 'Bocskai Iskola', desc: 'Intézménybővítés és korszerűsítés', icon: <HardHat /> },
  ];

  const filteredProjects = filter === 'sajat' ? [] : (filter === 'all' ? projects : projects.filter(p => p.category === filter));
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const showPhotos = (filter === 'all' || filter === 'sajat') && photoReferences.length > 0;

  return (
    <section id="referenciak" className="py-24 bg-brand-black text-white scroll-mt-14 lg:scroll-mt-32 relative z-20 -mt-1 ring-4 ring-brand-black ring-offset-0">
      <div className="container mx-auto px-6">
        
        {/* FEJLÉC */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Megbízható Partner <br />
            <span className="text-brand">Ipari Méretekben is</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Nemcsak lakossági megbízásokat teljesítünk. Büszkék vagyunk rá, hogy Magyarország legnagyobb gyárai, szállodái és közintézményei minket választottak.
          </p>
        </div>

        {/* SZŰRŐ TABOK */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-8 border-b border-gray-800 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setFilter(cat.id); setShowAll(false); }}
              className={`px-6 py-3 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all border-b-2 ${
                filter === cat.id ? 'border-brand text-brand' : 'border-transparent text-gray-500 hover:text-white hover:border-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {/* SAJÁT KIVITELEZÉS (KÉPES) */}
          {showPhotos && (
            <div className="animate-in fade-in duration-500">
               {filter === 'all' && <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2"><Home className="text-brand"/> Saját Kivitelezés</h3>}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photoReferences.map((ref) => (
                  <div key={ref._id} onClick={() => openModal(ref)} className="group relative h-72 rounded-xl overflow-hidden shadow-2xl border border-gray-800 cursor-pointer hover:border-brand/50 transition-colors">
                    {ref.image && <Image src={urlFor(ref.image).url()} alt={ref.title || 'Referencia'} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />}
                    
                    {/* Overlay - ITT IS MEGJELENIK A TÍPUS */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 flex flex-col justify-end p-6">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-brand text-xs font-bold uppercase flex items-center gap-1"><MapPin size={12} /> {ref.location}</p>
                        {/* Munka típusa címke a kártyán */}
                        <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-white font-medium uppercase border border-white/10">
                          {ref.workType || 'Kivitelezés'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <h4 className="text-white text-lg font-bold leading-tight w-4/5">{ref.title}</h4>
                        {ref.gallery && ref.gallery.length > 0 && (<div className="bg-brand/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-brand group-hover:text-black transition-colors"><Camera size={20} /></div>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STATIKUS KÁRTYÁK */}
          {filteredProjects.length > 0 && (
             <div className="animate-in fade-in duration-500">
              {filter === 'all' && <h3 className="text-xl font-bold mb-6 mt-12 text-white flex items-center gap-2"><Factory className="text-brand"/> Ipari & Közületi Referenciák</h3>}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleProjects.map((project) => (
                  <div key={project.id} className="group relative bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-brand/30 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-md">
                    <div className="absolute -bottom-4 -right-4 text-white/5 group-hover:text-brand/5 transition-colors">{React.cloneElement(project.icon, { size: 100, strokeWidth: 1 })}</div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-4"><MapPin size={14} className="text-brand" /><span className="text-gray-400 text-xs font-bold uppercase tracking-wide">{project.city}</span></div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* MUTASS TÖBBET */}
        {filteredProjects.length > 6 && (
          <div className="mt-12 text-center">
            <button onClick={() => setShowAll(!showAll)} className="group inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-brand border border-gray-700 hover:border-brand rounded-full text-white font-medium transition-all duration-300">
              {showAll ? <>Kevesebb mutatása <ChevronUp size={18} /></> : <>Összes referencia betöltése <ChevronDown size={18} /></>}
            </button>
          </div>
        )}
      </div>

      {/* --- PROJEKT MODÁL --- */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeModal} 
        >
          <div 
            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* BAL OLDAL: KÉP */}
            <div className="relative w-full md:w-2/3 h-64 md:h-[600px] bg-gray-100 group">
              {(() => {
                const allImages = [selectedProject.image, ...(selectedProject.gallery || [])];
                const imgData = allImages[currentImageIndex];
                return imgData ? (
                  <Image src={urlFor(imgData).url()} alt={selectedProject.title} fill className="object-cover" priority />
                ) : null;
              })()}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button onClick={prevImage} className="p-2 rounded-full bg-white/80 hover:bg-white text-black shadow-lg transition-transform hover:scale-110"><ChevronLeft size={24} /></button>
                 <button onClick={nextImage} className="p-2 rounded-full bg-white/80 hover:bg-white text-black shadow-lg transition-transform hover:scale-110"><ChevronRight size={24} /></button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                {currentImageIndex + 1} / {[selectedProject.image, ...(selectedProject.gallery || [])].length}
              </div>
            </div>

            {/* JOBB OLDAL: INFÓK (DINAMIKUS) */}
            <div className="w-full md:w-1/3 p-8 flex flex-col bg-white text-gray-900 relative">
              <button onClick={closeModal} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"><X size={24} /></button>

              <div className="mt-8">
                <div className="flex items-center gap-2 text-brand font-bold uppercase text-xs tracking-wider mb-2">
                  <MapPin size={14} />
                  {selectedProject.location}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 leading-tight">{selectedProject.title}</h3>
                <div className="w-12 h-1 bg-brand mb-6"></div>

                {/* EGYEDI LEÍRÁS - Itt jelenik meg amit a Sanity-be írtál */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[80px]">
                  {selectedProject.description 
                    ? selectedProject.description 
                    : "Ehhez a projekthez nem adtak meg részletes leírást. Kérjük keressen minket bővebb információért!"}
                </p>

                {/* MUNKA TÍPUSA - Itt jelenik meg amit a Sanity-be írtál */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mt-auto">
                   <p className="text-xs text-gray-500 font-semibold uppercase mb-2">Elvégzett munka</p>
                   <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
                      <PaintBucket size={16} className="text-brand"/>
                      {selectedProject.workType || 'Generálkivitelezés'}
                   </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default References;