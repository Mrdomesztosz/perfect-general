'use client';

import React from 'react';
import { PaintRoller, Home, ThermometerSun, Users } from 'lucide-react';

const Services = () => {
  const features = [
    {
      icon: <PaintRoller size={40} />,
      title: "Festés Mesterfokon",
      description: "A cég szíve és eredete. 1994 óta foglalkozunk festéssel, így házaink végső felületképzése, esztétikája garantáltan prémium minőségű."
    },
    {
      icon: <Home size={40} />,
      title: "Saját Ingatlanfejlesztés",
      description: "Nem másnak építünk, hanem saját beruházásban hozunk létre értékálló otthonokat. Derecskén 4 társasház, jelenleg Hajdúszoboszlón sorházak épülnek."
    },
    {
      icon: <ThermometerSun size={40} />,
      title: "Korszerű Gépészet",
      description: "Megbízható szakági partnereinkkel a legmodernebb hőszivattyús rendszereket és padlófűtést építjük be az alacsony rezsi érdekében."
    },
    {
      icon: <Users size={40} />,
      title: "Koordinált Kivitelezés",
      description: "A burkolástól a gépészetig minden munkafolyamatot összeszokott alvállalkozói csapatunk végez, a mi szigorú szakmai felügyeletünk mellett."
    }
  ];

  return (
    // JAVÍTÁS: 
    // 1. 'min-h-screen': A szekció minimum akkora, mint a képernyő.
    // 2. 'flex flex-col justify-center': A tartalmat függőlegesen középre igazítjuk.
    <section 
      id="szolgaltatasok" 
      className="py-20 bg-white scroll-mt-14 lg:scroll-mt-32 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-black mb-4">A Szakértelem Találkozása</h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A Perfect Generál Kft. több mint egy kivitelező. A festő szakma precizitását ötvözzük a modern ingatlanfejlesztéssel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="mb-6 text-brand group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;