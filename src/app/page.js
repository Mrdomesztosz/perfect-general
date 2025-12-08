import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import References from '@/components/sections/References';
import RealEstate from '@/components/sections/RealEstate';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <References />
      <RealEstate />
      <Footer />
    </main>
  );
}