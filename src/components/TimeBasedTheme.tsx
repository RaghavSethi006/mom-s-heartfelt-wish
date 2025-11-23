import { useEffect, useState } from 'react';

export const TimeBasedTheme = () => {
  const [timeTheme, setTimeTheme] = useState<'morning' | 'day' | 'evening' | 'night'>('day');

  useEffect(() => {
    const updateTheme = () => {
      const hour = new Date().getHours();
      
      if (hour >= 5 && hour < 12) {
        setTimeTheme('morning');
      } else if (hour >= 12 && hour < 17) {
        setTimeTheme('day');
      } else if (hour >= 17 && hour < 21) {
        setTimeTheme('evening');
      } else {
        setTimeTheme('night');
      }
    };

    updateTheme();
    const interval = setInterval(updateTheme, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-time-theme', timeTheme);
  }, [timeTheme]);

  return null;
};
