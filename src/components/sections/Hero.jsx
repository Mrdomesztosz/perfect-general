'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Háttérkép */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hatter2.jpg" 
          alt="Modern Családi Ház" 
          className="w-full h-full object-cover"
        />
        {/* Sötétítő réteg */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Tartalom */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16">
        
        {/* --- ELEGÁNS, VISSZAFOGOTT VERZIÓ --- */}
        {/* bg-white/10: Csak 10%-os fehér háttér (alig látszik)
            border-white/20: Nagyon halvány keret
            text-gray-200: Nem vakító fehér, hanem törtfehér szöveg
        */}
        <div className="inline-block px-5 py-2 rounded-full mb-8 border border-white/20 bg-white/5 backdrop-blur-sm">
          <span className="text-gray-100 uppercase tracking-widest text-xs md:text-sm font-medium">
            1994 óta az építőiparban
          </span>
        </div>
        {/* --- VÉGE --- */}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
          A Szakértelem <br />
          <span className="text-brand">Otthont Teremt</span>
        </h1>
        
        <p className="text-lg md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto font-light">
          Saját tulajdonú, új építésű ingatlanok közvetlenül a kivitelezőtől. 
          A festőmester precizitásával építjük jövőjét Derecskétől Hajdúszoboszlóig.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#ingatlanok" 
            className="group bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-md hover:shadow-brand/50"
          >
            Aktuális Kínálatunk
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#rolunk" 
            className="bg-white/10 hover:bg-white hover:text-brand-black border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
          >
            Ismerjen meg minket
          </a>
        </div>
      </div>

      {/* Görgetés jelző */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;