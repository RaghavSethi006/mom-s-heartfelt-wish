import { birthdayData } from '@/data/birthdayData';
import { Card } from '@/components/ui/card';

export const MessageSection = () => {
  return (
    <section id="message" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-playfair text-center mb-12 gradient-text">
          A Letter for You
        </h2>

        <Card className="glass-card p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {birthdayData.long_message.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-relaxed text-foreground mb-6 font-inter"
                style={{
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease-out forwards',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
