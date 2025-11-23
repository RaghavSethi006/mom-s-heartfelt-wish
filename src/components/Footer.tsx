import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-20 px-4 text-center relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="text-8xl mb-6 heartbeat filter drop-shadow-2xl"
        >
          💝
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-playfair text-muted-foreground mb-4"
        >
          Made with endless love and appreciation
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm text-muted-foreground"
        >
          {new Date().getFullYear()} • Forever in my heart
        </motion.p>

        {/* Decorative elements */}
        <div className="mt-8 flex justify-center gap-4">
          {['💕', '✨', '🌸', '✨', '💕'].map((emoji, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-2xl"
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </div>
    </footer>
  );
};
