import React from 'react';
import { references } from '@/data/referencesData';
import BeforeAfter from '@/components/ui/BeforeAfter';

const References = () => {
  return (
    <section id="referenciak" className="py-20 bg-brand-black text-white ring-1 ring-brand-black">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Munkáink Beszélnek</h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">
            Húzza a csúszkát a képeken, és tekintse meg az átalakulást!
          </p>
        </div>

        <div className="space-y-20">
          {references.map((ref) => (
            <div key={ref.id} className="flex flex-col lg:flex-row gap-12 items-center">
              
              {/* A Szöveges Rész */}
              <div className="lg:w-1/3 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">{ref.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {ref.description}
                </p>
                <div className="inline-block bg-brand/20 text-brand font-semibold px-4 py-2 rounded-lg border border-brand/30">
                  Sikeres átadás
                </div>
              </div>

              {/* A Csúszkás Kép Rész */}
              <div className="lg:w-2/3 w-full">
                <BeforeAfter 
                  beforeImage={ref.beforeImage} 
                  afterImage={ref.afterImage} 
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default References;