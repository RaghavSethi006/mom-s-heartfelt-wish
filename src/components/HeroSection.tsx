import { motion } from 'framer-motion';
import { birthdayData } from '@/data/birthdayData';
import { ChevronDown } from 'lucide-react';
import { KineticTitle } from './KineticTitle';
import { InteractiveButton } from './InteractiveButton';

export const HeroSection = () => {
  const scrollToWishes = () => {
    document.getElementById('wishes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated sparkles with better positioning */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-20 left-[10%] text-5xl sparkle"
      >
        ✨
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute top-40 right-[15%] text-4xl sparkle"
        style={{ animationDelay: '0.5s' }}
      >
        ✨
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-32 left-[20%] text-4xl sparkle"
        style={{ animationDelay: '1s' }}
      >
        ✨
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-20 right-[12%] text-5xl sparkle"
        style={{ animationDelay: '1.5s' }}
      >
        ✨
      </motion.div>

      {/* Floating light orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${
              i % 2 === 0 ? 'hsl(340 82% 67% / 0.3)' : 'hsl(280 65% 85% / 0.3)'
            } 0%, transparent 70%)`,
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="text-center z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <KineticTitle text={birthdayData.title} />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light mt-8"
          >
            {birthdayData.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 2.5,
            type: 'spring',
            stiffness: 200,
            damping: 10,
          }}
          className="heartbeat text-9xl mb-12 filter drop-shadow-2xl"
        >
          💖
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <InteractiveButton onClick={scrollToWishes}>
            Read Your Birthday Wishes
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2 inline-block"
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </InteractiveButton>
        </motion.div>
      </div>
    </section>
  );
};
