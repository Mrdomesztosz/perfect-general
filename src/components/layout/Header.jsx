'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import ContactModal from '@/components/ui/ContactModal';
import { sendGAEvent } from '@next/third-parties/google'; // <--- 1. ÚJ IMPORT

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // JAVÍTOTT LOGIKA: Nem a szélességet nézzük, hanem az eszköz típusát
  const handlePhoneClick = (e) => {
    
    // <--- 2. ITT KÜLDJÜK AZ ADATOT A GOOGLE-NEK
    sendGAEvent('event', 'phone_click', { value: 'header_button' });

    // Ellenőrizzük, hogy asztali környezet-e (van-e egér/hover képesség)
    // VAGY ha széles a képernyő (biztonsági tartalék)
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.innerWidth > 1024;

    if (typeof window !== 'undefined' && isDesktop) {
      e.preventDefault(); // Megállítjuk a tárcsázást
      setIsModalOpen(true); // Kinyitjuk az ablakot
    }
    // Ha érintőképernyős (mobil), akkor nem lépünk be az if-be, és engedi a tárcsázást.
  };

  const navLinks = [
    { name: 'Szolgáltatások', href: '#szolgaltatasok' },
    { name: 'Referenciák', href: '#referenciak' },
    { name: 'Eladó Házak', href: '#ingatlanok' },
    { name: 'Rólunk', href: '#rolunk' },
  ];

  return (
    <>
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
          
          <Link href="/" className="text-2xl font-bold tracking-tighter shrink-0">
            <span className={`transition-colors ${isScrolled ? 'text-brand-black' : 'text-white'}`}>PERFECT</span>
            <span className="text-brand">GENERÁL</span>
          </Link>

          {/* ASZTALI MENÜ */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`font-medium text-sm xl:text-base hover:text-brand transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href="tel:+36301234567"
              onClick={handlePhoneClick} // Itt már jó volt
              className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-4 py-2.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand/50 cursor-pointer shrink-0"
            >
              <Phone size={18} />
              <span className="hidden xl:block whitespace-nowrap">+36 30 123 4567</span>
              <span className="block xl:hidden">Hívás</span>
            </a>
          </nav>

          {/* MOBIL MENÜ NYITÓ */}
          <button 
            className="lg:hidden text-brand"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-brand-black' : 'text-white'} />}
          </button>
        </div>

        {/* MOBIL / BURGER MENÜ TARTALOM */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4">
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
            
            {/* JAVÍTÁS: Itt hiányzott eddig a 'handlePhoneClick'! */}
            <a 
              href="tel:+36301234567"
              onClick={handlePhoneClick} // <--- MOST MÁR ITT IS FIGYELÜNK
              className="flex justify-center items-center gap-2 bg-brand text-white py-3 rounded-xl font-bold mt-2 cursor-pointer"
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