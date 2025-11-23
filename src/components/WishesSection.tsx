import { motion } from 'framer-motion';
import { birthdayData } from '@/data/birthdayData';
import { Heart } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';

export const WishesSection = () => {
  return (
    <section id="wishes" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-playfair text-center mb-16 gradient-text"
        >
          What You Mean to Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {birthdayData.short_wishes.map((wish, index) => (
            <ThreeDCard key={index} delay={index * 0.1}>
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    type: 'spring',
                    stiffness: 200,
                  }}
                >
                  <Heart className="w-10 h-10 text-primary mb-6 mx-auto heartbeat" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-xl font-inter text-foreground font-medium leading-relaxed"
                >
                  {wish}
                </motion.p>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </section>
  );
};
