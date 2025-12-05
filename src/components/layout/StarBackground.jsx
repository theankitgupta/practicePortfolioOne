import React, { memo, useMemo, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const generateStars = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1, // 1px to 3px
    opacity: Math.random(), 
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));
};

const generateMeteors = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.floor(Math.random() * 90) - 20, 
    y: Math.floor(Math.random() * 60) - 20, 
    size: Math.random() * 1.5 + 0.5,
    duration: Math.random() * 2 + 3,
    delay: Math.random() * 10,
  }));
};

const StarBackground = memo(() => {
  const [config, setConfig] = useState({ stars: 30, meteors: 4 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setConfig({ stars: 30, meteors: 2 });
      else if (width < 1024) setConfig({ stars: 50, meteors: 4 });
      else setConfig({ stars: 70, meteors: 6 });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stars = useMemo(() => generateStars(config.stars), [config.stars]);
  const meteors = useMemo(() => generateMeteors(config.meteors), [config.meteors]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(0.8); }
          }
          @keyframes meteor-fall {
            0% { width: var(--size); transform: rotate(45deg) translateX(0); opacity: 1; }
            15% { width: var(--tail); opacity: 1; }
            100% { width: var(--tail); transform: rotate(45deg) translateX(100vh); opacity: 0; }
          }
        `}
      </style>

      {/* Stars: Subtler in light mode (slate-400), White in dark mode */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-slate-400 dark:bg-white transition-colors duration-500"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity * 0.5, // Reduced base opacity for subtlety
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={cn(
            "absolute rounded-full",
            "bg-linear-to-r from-transparent to-slate-400 dark:to-white", 
            "shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
          )}
          style={{
            '--size': `${meteor.size}px`,
            '--tail': `${meteor.size * 30}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            width: `${meteor.size}px`, 
            height: `${meteor.size}px`,
            animation: `meteor-fall ${meteor.duration}s linear infinite`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  );
});

StarBackground.displayName = 'StarBackground';
export default StarBackground;