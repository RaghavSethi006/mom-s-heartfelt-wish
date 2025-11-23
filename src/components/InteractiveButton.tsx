import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export const InteractiveButton = ({
  children,
  onClick,
  variant = 'default',
  size = 'lg',
  className = '',
}: InteractiveButtonProps) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 1000);

    onClick?.();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Button
        onClick={handleClick}
        variant={variant}
        size={size}
        className={`relative overflow-hidden breathe glow-pulse ${className}`}
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
          border: 'none',
        }}
      >
        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              left: ripple.x,
              top: ripple.y,
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.6)',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Shimmer effect */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'linear',
          }}
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
          }}
        />

        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  );
};
