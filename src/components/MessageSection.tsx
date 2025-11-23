import { motion } from 'framer-motion';
import { birthdayData } from '@/data/birthdayData';
import { ThreeDCard } from './ThreeDCard';

export const MessageSection = () => {
  return (
    <section id="message" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-playfair text-center mb-12 gradient-text"
        >
          A Letter for You
        </motion.h2>

        <ThreeDCard className="p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {birthdayData.long_message.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-lg leading-relaxed text-foreground mb-6 font-inter first-letter:text-6xl first-letter:font-playfair first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:mt-1"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};
