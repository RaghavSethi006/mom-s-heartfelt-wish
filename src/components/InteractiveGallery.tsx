import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayData } from '@/data/birthdayData';
import { X, ZoomIn } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';

export const InteractiveGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-playfair text-center mb-16 gradient-text"
        >
          Beautiful Memories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {birthdayData.gallery_images.map((image, index) => (
            <ThreeDCard key={index} delay={index * 0.1}>
              <motion.div
                className="aspect-square relative overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={`/pics/${image}`}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-2 text-primary-foreground"
                  >
                    <ZoomIn className="w-5 h-5" />
                    <span className="font-medium">View Memory</span>
                  </motion.div>
                </div>

                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </ThreeDCard>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 30 }}
                transition={{ type: 'spring', damping: 20 }}
                className="max-w-5xl w-full relative"
                style={{ transformStyle: 'preserve-3d' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={`/pics/${birthdayData.gallery_images[selectedImage]}`}
                    alt={`Memory ${selectedImage + 1}`}
                    className="w-full h-auto max-h-[85vh] object-contain"
                  />
                  
                  {/* Ambient glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Image counter */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 font-inter"
                >
                  {selectedImage + 1} / {birthdayData.gallery_images.length}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
