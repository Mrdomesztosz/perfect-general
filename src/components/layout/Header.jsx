'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import ContactModal from '@/components/ui/ContactModal'; // <--- IMPORTÁLJUK A MODALT

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // <--- ÚJ ÁLLAPOT A MODALNAK

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // A KATTINTÁS KEZELŐ FÜGGVÉNY
  const handlePhoneClick = (e) => {
    // Csak asztali gépen nyitjuk meg a modalt
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      e.preventDefault(); // Megállítja a tárcsázást
      setIsModalOpen(true); // Kinyitja az ablakot
    }
    // Mobilon engedi a tárcsázást
  };

  const navLinks = [
    { name: 'Szolgáltatások', href: '#szolgaltatasok' },
    { name: 'Referenciák', href: '#referenciak' },
    { name: 'Eladó Házak', href: '#ingatlanok' },
    { name: 'Rólunk', href: '#rolunk' },
  ];

  return (
    <>
      {/* A MODAL BEILLESZTÉSE */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Lépjen velünk kapcsolatba"
      />

      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            <span className={`transition-colors ${isScrolled ? 'text-brand-black' : 'text-white'}`}>PERFECT</span>
            <span className="text-brand">GENERÁL</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`font-medium hover:text-brand transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* A JOBB FELSŐ HÍVÁS GOMB */}
            <a 
              href="tel:+36301234567"
              onClick={handlePhoneClick} // <--- Itt aktiváljuk az okos funkciót
              className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand/50 cursor-pointer"
            >
              <Phone size={18} />
              <span>+36 30 123 4567</span>
            </a>
          </nav>

          <button 
            className="md:hidden text-brand"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-brand-black' : 'text-white'} />}
          </button>
        </div>

        {/* MOBIL MENÜ */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+36301234567"
              className="flex justify-center items-center gap-2 bg-brand text-white py-3 rounded-xl font-bold mt-2"
            >
              <Phone size={20} />
              Hívás Most
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;