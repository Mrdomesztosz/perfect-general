import React from 'react';
import { services } from '@/data/servicesData';

const Services = () => {
  return (
    <section id="szolgaltatasok" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Címsor */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-black mb-4">Szolgáltatásaink</h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Minden, ami egy tökéletes otthonhoz kell. Szakértelem, garancia és minőségi anyagok egy helyen.
          </p>
        </div>

        {/* Kártyák Rácsos Elrendezése */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            
            return (
              <div 
                key={service.id}
                className={`group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 ${
                  service.highlight ? 'ring-2 ring-brand/20' : ''
                }`}
              >
                {/* Ikon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  service.highlight ? 'bg-brand text-white' : 'bg-gray-100 text-brand group-hover:bg-brand group-hover:text-white'
                }`}>
                  <Icon size={28} />
                </div>

                {/* Szöveg */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;