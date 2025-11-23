import { motion } from 'framer-motion';

interface KineticTitleProps {
  text: string;
}

export const KineticTitle = ({ text }: KineticTitleProps) => {
  const letters = text.split('');
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariant = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateZ: -10,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      scale: 1,
    },
  };

  const letterTransition = {
    type: 'spring' as const,
    damping: 12,
    stiffness: 200,
  };

  const hoverVariant = {
    scale: 1.2,
    y: -10,
    rotateZ: 5,
  };

  const hoverTransition = {
    type: 'spring' as const,
    stiffness: 300,
  };

  return (
    <motion.h1
      className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold mb-4"
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        perspective: '1000px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.15em',
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariant}
          transition={letterTransition}
          whileHover={hoverVariant}
          className="gradient-text inline-block cursor-pointer"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};
