import { useEffect, useState } from 'react';
import { birthdayData } from '@/data/birthdayData';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = birthdayData.title;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToWishes = () => {
    document.getElementById('wishes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Sparkle effects */}
      <div className="absolute top-20 left-20 text-4xl sparkle">✨</div>
      <div className="absolute top-40 right-32 text-3xl sparkle" style={{ animationDelay: '0.5s' }}>✨</div>
      <div className="absolute bottom-32 left-40 text-3xl sparkle" style={{ animationDelay: '1s' }}>✨</div>
      <div className="absolute bottom-20 right-20 text-4xl sparkle" style={{ animationDelay: '1.5s' }}>✨</div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8 fade-in-up">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-4 gradient-text">
            {displayedText}
            {showCursor && <span className="typewriter-cursor">|</span>}
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mt-6 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
            {birthdayData.subtitle}
          </p>
        </div>

        <div className="heartbeat text-8xl mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_1.5s_forwards]">
          💖
        </div>

        <Button
          onClick={scrollToWishes}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] opacity-0 animate-[fadeInUp_1s_ease-out_2s_forwards]"
        >
          Read Your Birthday Wishes
          <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </div>
    </section>
  );
};
