import { FloatingHearts } from '@/components/FloatingHearts';
import { HeroSection } from '@/components/HeroSection';
import { WishesSection } from '@/components/WishesSection';
import { MessageSection } from '@/components/MessageSection';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingHearts />
      
      <main className="relative z-10">
        <HeroSection />
        <WishesSection />
        <MessageSection />
        <GallerySection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
