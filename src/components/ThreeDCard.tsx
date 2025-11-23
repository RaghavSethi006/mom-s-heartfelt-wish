import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ThreeDCard = ({ children, className = '', delay = 0 }: ThreeDCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        <Card
          className={`glass-card relative overflow-hidden ${className}`}
          style={{
            transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: isHovered
              ? 'var(--shadow-strong), var(--shadow-glow)'
              : 'var(--shadow-soft)',
          }}
        >
          {/* Glass highlight */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.6 : 0,
              background: 'linear-gradient(135deg, transparent 0%, hsla(0 0% 100% / 0.2) 50%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />
          
          {/* Content with depth */}
          <div style={{ transform: 'translateZ(50px)' }}>
            {children}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};
