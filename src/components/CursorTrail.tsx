import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Trail {
  id: number;
  x: number;
  y: number;
}

export const CursorTrail = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    let throttleTimer: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          const newTrail: Trail = {
            id: Date.now() + Math.random(),
            x: e.clientX,
            y: e.clientY,
          };
          
          setTrails(prev => [...prev.slice(-20), newTrail]);
          throttleTimer = null as any;
        }, 50);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: trail.x - 4,
              top: trail.y - 4,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: `hsl(${340 + index * 5}, 82%, 67%)`,
              mixBlendMode: 'screen',
              pointerEvents: 'none',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
