'use client';

import React from 'react';
import { CheckCircle2, Users, Home, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Sikeres Projekt', value: '250+', icon: Home },
    { label: 'Év Tapasztalat', value: '15+', icon: Clock },
    { label: 'Szakember', value: '12', icon: Users },
  ];

  return (
    
    // A 'relative z-10' marad, hogy a fekete réteg felül legyen.
    <section id="rolunk" className="py-20 bg-brand-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* 1. BAL OLDAL: KÉPEK */}
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-4 border-brand/30 rounded-2xl -z-10"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
              alt="Építkezés folyamata" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] lg:h-[500px] grayscale hover:grayscale-0 transition-all duration-700"
            />

            <div className="absolute -bottom-8 -right-8 bg-white text-gray-900 p-6 rounded-xl shadow-2xl border-l-4 border-brand max-w-[200px] hidden md:block">
              <p className="text-4xl font-extrabold text-brand mb-1">15+</p>
              <p className="font-bold leading-tight">Év szakmai tapasztalat Debrecenben</p>
            </div>
          </div>

          {/* 2. JOBB OLDAL: SZÖVEG */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            
            <div className="inline-block px-3 py-1 mb-4 bg-brand/20 text-brand font-bold rounded-full text-sm border border-brand/20">
              Rólunk
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Nem csak felújítunk.<br />
              <span className="text-brand">Otthont teremtünk.</span>
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              A Perfect Generál története egyetlen ecsettel kezdődött 15 évvel ezelőtt. 
              Mára Debrecen egyik legmegbízhatóbb generálkivitelező csapatává nőttük ki magunkat.
            </p>
            <p className="text-gray-400 mb-8">
              Célunk egyszerű: levenni a felújítás terhét a válláról. Legyen szó egy szoba kifestéséről 
              vagy egy teljes családi ház kulcsrakész átadásáról, mi ugyanolyan precizitással dolgozunk.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Ingyenes helyszíni felmérés és árajánlat",
                "Fix árak – nincsenek rejtett költségek",
                "Tiszta munkavégzés, takarítás átadás előtt",
                "Garancia minden elvégzett munkára"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-brand text-white p-1 rounded-full shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;