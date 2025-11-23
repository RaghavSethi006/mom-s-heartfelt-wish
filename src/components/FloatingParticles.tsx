import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
  duration: number;
  delay: number;
}

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const emojis = ['💕', '✨', '💖', '🌸', '🦋', '💫', '🌟', '💝'];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        duration: 15 + Math.random() * 15,
        delay: Math.random() * 5,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: `${particle.x}vw`,
              y: '100vh',
              opacity: 0,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              y: '-20vh',
              opacity: [0, 0.8, 0.8, 0],
              scale: [0, 1.2, 1, 0.8],
              rotate: 360,
              x: [
                `${particle.x}vw`,
                `${particle.x + Math.sin(particle.id) * 10}vw`,
                `${particle.x}vw`,
              ],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute text-4xl filter drop-shadow-lg"
            style={{
              textShadow: '0 0 20px rgba(255,255,255,0.8)',
            }}
          >
            {particle.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
