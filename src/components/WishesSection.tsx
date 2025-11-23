import { birthdayData } from '@/data/birthdayData';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export const WishesSection = () => {
  return (
    <section id="wishes" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-playfair text-center mb-16 gradient-text">
          What You Mean to Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {birthdayData.short_wishes.map((wish, index) => (
            <Card
              key={index}
              className="glass-card p-8 hover:scale-105 transition-transform duration-300 border-2"
              style={{
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out forwards',
                animationDelay: `${index * 0.15}s`
              }}
            >
              <Heart className="w-8 h-8 text-primary mb-4 mx-auto" />
              <p className="text-xl text-center font-inter text-foreground font-medium">
                {wish}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
