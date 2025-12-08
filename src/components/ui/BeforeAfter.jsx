'use client';

import React, { useState, useRef } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import Image from 'next/image';

const BeforeAfter = ({ beforeImage, afterImage, alt }) => {
  // Java analógia: Ez egy "field", ami tárolja az állapotot (0-100 között)
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  
  // Java analógia: Ez egy referencia a DOM elemre (mint egy változó a Swing komponensre)
  const containerRef = useRef(null);

  // Ez számolja ki, hol van az egér/ujj
  const handleMove = (event) => {
    if (!containerRef.current) return;

    // Megszerezzük a konténer méreteit
    const rect = containerRef.current.getBoundingClientRect();
    
    // Eldöntjük, hogy egér (clientX) vagy érintés (touches[0].clientX) történt
    const x = 'touches' in event ? event.touches[0].clientX : event.clientX;
    
    // Kiszámoljuk a pozíciót a konténeren belül
    // Math.max és Math.min biztosítja, hogy ne menjünk 0% alá vagy 100% fölé
    const position = Math.max(0, Math.min(x - rect.left, rect.width));
    
    // Átkonvertáljuk százalékra
    const percentage = (position / rect.width) * 100;
    
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-2xl cursor-col-resize select-none shadow-2xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* 1. RÉTEG: A "Kész" (After) kép - Ez van alul, teljesen látszik */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt="Kész állapot" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-brand-black/70 text-white px-3 py-1 rounded-md text-sm font-bold">
          UTÁNA
        </div>
      </div>

      {/* 2. RÉTEG: Az "Előtte" (Before) kép - Ez van felül, és vágjuk */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }} // ITT A MÁGIA: A szélesség változik!
      >
        <img 
          src={beforeImage} 
          alt="Előtte állapot" 
          className="absolute top-0 left-0 max-w-none h-full w-full object-cover" 
          // Fontos: a 'w-full' itt a szülő konténerre vonatkozik, nem a vágott div-re!
          // Ezért kell trükközni, hogy a kép ne nyomódjon össze.
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
        />
        <div className="absolute top-4 left-4 bg-brand/80 text-white px-3 py-1 rounded-md text-sm font-bold">
          ELŐTTE
        </div>
      </div>

      {/* 3. RÉTEG: A Csúszka (Handle) - A függőleges vonal */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          <ChevronsLeftRight className="text-brand w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;