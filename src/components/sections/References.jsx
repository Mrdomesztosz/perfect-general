'use client';

import React from 'react';
import { Paintbrush, Building2, CheckCircle, Star, Users, Trophy } from 'lucide-react';

const References = () => {
  const stats = [
    { label: 'Lefestett falfelület', value: '150.000+', suffix: 'm²', icon: <Paintbrush size={32} /> },
    { label: 'Sikeres projekt', value: '500+', suffix: 'db', icon: <CheckCircle size={32} /> },
    { label: 'Szakmai tapasztalat', value: '30', suffix: 'év', icon: <Star size={32} /> },
    { label: 'Elégedett ügyfél', value: '100%', suffix: '', icon: <Users size={32} /> },
  ];

  const partners = [
    { 
      name: 'LEGO Gyár', 
      location: 'Nyíregyháza', 
      desc: 'Ipari festési munkálatok és karbantartás',
      icon: <Building2 className="text-brand" size={40} />
    },
    { 
      name: 'Luxus Apartmanok', 
      location: 'Balatonkense', 
      desc: 'Teljeskörű belső festés és dekorációs munkák',
      icon: <Star className="text-brand" size={40} />
    },
    { 
      name: 'Társasházak', 
      location: 'Derecske & Debrecen', 
      desc: 'Saját beruházású ingatlanok generálkivitelezése',
      icon: <Trophy className="text-brand" size={40} />
    }
  ];

  return (
    <section 
      id="referenciak" 
      className="py-20 bg-brand-black text-white scroll-mt-14 lg:scroll-mt-32"
    >
      <div className="container mx-auto px-6">
        
        {/* CÍM ÉS BEVEZETŐ */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">
            Nemcsak Építünk, <span className="text-brand">Alkotunk</span>
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Fő profilunk a <strong className="text-white">professzionális festés</strong>. Legyen szó ipari létesítményről vagy luxuslakásról, a Perfect Generál Kft. évtizedek óta garancia a minőségre.
          </p>
        </div>

        {/* 1. RÉSZ: KIEMELT PARTNEREK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group text-center"
            >
              <div className="bg-brand/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {partner.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
              <div className="text-brand text-sm font-bold uppercase tracking-wider mb-4">{partner.location}</div>
              <p className="text-gray-400">{partner.desc}</p>
            </div>
          ))}
        </div>

        {/* 2. RÉSZ: STATISZTIKA (Számok ereje) */}
        {/* JAVÍTÁS: p-6 mobilon (hogy több legyen a hely), md:p-12 nagy képernyőn */}
        <div className="bg-brand rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Háttér díszítés */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          {/* JAVÍTÁS: grid-cols-1 mobilon (egymás alá kerülnek), sm:grid-cols-2 (tablet), lg:grid-cols-4 (PC) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-white/80 mb-4 flex justify-center opacity-80">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">
                  {stat.value}<span className="text-2xl lg:text-3xl text-white/70 ml-1">{stat.suffix}</span>
                </div>
                <div className="text-white/80 font-medium uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default References;