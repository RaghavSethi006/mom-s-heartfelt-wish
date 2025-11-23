import { Suspense, lazy, useEffect, useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { WishesSection } from '@/components/WishesSection';
import { MessageSection } from '@/components/MessageSection';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';
import { FloatingParticles } from '@/components/FloatingParticles';
import { CursorTrail } from '@/components/CursorTrail';
import { TimeBasedTheme } from '@/components/TimeBasedTheme';

// Lazy load 3D components for better performance
const ParticleField = lazy(() =>
  import('@/components/ParticleField').then(mod => ({ default: mod.ParticleField }))
);

const Index = () => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    // Enable 3D particles after initial load
    const timer = setTimeout(() => setShowParticles(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <TimeBasedTheme />
      <CursorTrail />
      <FloatingParticles />
      
      {/* 3D Particle field - lazy loaded */}
      {showParticles && (
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      )}
      
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
