 import { Paintbrush, Hammer, Zap, Home, Thermometer, Layers } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'Szobafestés & Mázolás',
    description: 'Prémium minőségű tisztasági és dekorációs festés, glettelés, tapétázás precíz kivitelezéssel.',
    icon: Paintbrush,
  },
  {
    id: 2,
    title: 'Teljes Házfelújítás',
    description: 'A bontástól a kulcsátadásig. Gipszkartonozás, válaszfalak építése és szerkezeti átalakítások.',
    icon: Hammer,
  },
  {
    id: 3,
    title: 'Hidegburkolás',
    description: 'Fürdőszobák, konyhák és teraszok profi burkolása. Csempézés és járólapozás garanciával.',
    icon: Layers,
  },
  {
    id: 4,
    title: 'Villanyszerelés & Fűtés',
    description: 'Korszerűsítés, vezetékcsere, fűtésrendszerek kiépítése és karbantartása szakértőkkel.',
    icon: Zap,
  },
  {
    id: 5,
    title: 'Eladó Ingatlanok',
    description: 'Saját felújítású, kulcsrakész házak és lakások értékesítése. Költözzön be azonnal!',
    icon: Home,
    highlight: true, // Ez a kártya ki lesz emelve!
  },
];
