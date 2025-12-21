'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import ContactModal from '@/components/ui/ContactModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneClick = (e) => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.innerWidth > 1024;
    if (typeof window !== 'undefined' && isDesktop) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const navLinks = [
    { name: 'Szolgáltatások', href: '#szolgaltatasok' },
    { name: 'Referenciák', href: '#referenciak' },
    { name: 'Eladó Ingatlanok', href: '#ingatlanok' },
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
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2 lg:py-3' : 'bg-transparent py-4 lg:py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* --- LOGÓ RÉSZ --- */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group relative z-10">
            <div className={`relative w-14 h-14 lg:w-28 lg:h-28 bg-white rounded-full overflow-hidden shadow-lg border-2 border-transparent group-hover:border-brand transition-all duration-300 ${isScrolled ? 'lg:w-20 lg:h-20' : ''} `}>
              <Image 
                src="/ujlogo.jpg" // <--- ITT A CSERE
                alt="Perfect Generál Logo" 
                fill 
                className="object-contain scale-110 -ml-0 -mt-0.5 lg:-ml-0 lg:-mt-0.6"
              />
            </div>
            
            <div className="flex flex-col leading-none lg:hidden">
              <span className={`text-xl font-bold tracking-normal transition-colors ${isScrolled ? 'text-brand-black' : 'text-white'}`}>
                PERFECT
              </span>
              <span className="text-sm font-bold text-brand tracking-widest">
                GENERÁL
              </span>
            </div>
          </Link>
          {/* --- LOGÓ RÉSZ VÉGE --- */}

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
              onClick={handlePhoneClick}
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

        {/* MOBIL MENÜ TARTALOM */}
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
            
            <a 
              href="tel:+36301234567"
              onClick={handlePhoneClick}
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