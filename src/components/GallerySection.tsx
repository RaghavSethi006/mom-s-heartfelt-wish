import { birthdayData } from '@/data/birthdayData';
import { Card } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-playfair text-center mb-16 gradient-text">
          Beautiful Memories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {birthdayData.gallery_images.map((image, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300 aspect-square"
              style={{
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out forwards',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose/20 to-lavender/20">
                <div className="text-center">
                  <ImageIcon className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground px-4">
                    Place your photo here:<br />
                    <code className="text-xs bg-background/50 px-2 py-1 rounded">
                      /public/pics/{image}
                    </code>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Upload your favorite photos to the <code className="bg-background/50 px-2 py-1 rounded">/public/pics/</code> folder
        </p>
      </div>
    </section>
  );
};
