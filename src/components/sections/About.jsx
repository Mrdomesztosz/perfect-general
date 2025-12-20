'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="rolunk" className="py-20 bg-brand-black text-white relative overflow-hidden scroll-mt-14 lg:scroll-mt-32">
      {/* Díszítő elem a háttérben */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 skew-x-12 transform origin-top pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Szöveges rész */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              Egyéni Vállalkozásból <br />
              <span className="text-brand">Ingatlanfejlesztő Cég</span>
            </h2>
            <div className="w-20 h-1 bg-brand mb-8 rounded-full" />
            
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                Történetünk <strong className="text-white">1994-ben kezdődött</strong>, amikor elindítottam egyéni vállalkozásomat, melynek fő profilja a festés volt. A precizitás és a minőség iránti elkötelezettség hamar meghozta gyümölcsét.
              </p>
              <p>
                A folyamatos fejlődés eredményeként <strong className="text-white">2013 februárjában</strong> megalapítottam a <span className="text-brand font-bold">Perfect Generál Kft.-t</span>. Bár a cég gyökerei és fő tevékenysége továbbra is a festés maradt, profilunk jelentősen bővült.
              </p>
              <p>
                Mára a tevékenységi körünk kiegészült a <strong className="text-white">saját tulajdonú ingatlanok építésével és értékesítésével</strong>. Büszkék vagyunk rá, hogy Derecskén már 4 társasházat építettünk fel és adtunk át sikeresen új tulajdonosaiknak.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-xl border-l-4 border-brand mt-4">
                <p className="text-white font-medium italic">
                  "Jelenleg Hajdúszoboszlón dolgozunk legújabb projektünkön, egy modern, 3 lakásos sorház kivitelezésén."
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['30+ Év Tapasztalat', 'Saját Beruházások', 'Prémium Festés', 'Hajdúszoboszlói Projekt'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-brand shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Képes rész - ITT A CSERE */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
              
              {/* Most már a helyi 'hatter.jpg' fájlt tölti be */}
              <Image 
                src="/hatter.jpg" 
                alt="Perfect Generál Munka közben" 
                fill 
                className="object-cover"
              />
              
              {/* Statisztika kártya a képen */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur text-brand-black p-6 rounded-xl shadow-lg">
                <div className="flex justify-between text-center divide-x divide-gray-200">
                  <div className="px-4">
                    <span className="block text-3xl font-bold text-brand">1994</span>
                    <span className="text-sm text-gray-600 font-bold">Óta a szakmában</span>
                  </div>
                  <div className="px-4">
                    <span className="block text-3xl font-bold text-brand">100%</span>
                    <span className="text-sm text-gray-600 font-bold">Saját fejlesztés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;