import React, { 
  memo,
  useMemo,
  useState,
  useEffect,
} from 'react'
import { cn } from '@/lib/utils';

/**
 * Generates a static array of star objects.
 * Spawns stars randomly across the entire container.
 */
const generateStars = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100, // 0% to 100% (Horizontal)
    y: Math.random() * 100, // 0% to 100% (Vertical)
    size: Math.random() * 2 + 1, // 1px to 3px
    opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
    duration: Math.random() * 3 + 2, // Twinkle speed: 2s to 5s
    delay: Math.random() * 2, // Animation offset
  }));
};

/**
 * Generates a static array of meteor objects.
 * Spawns meteors mostly on the Top/Left edges to ensure they travel visible across the screen (Top-Left -> Bottom-Right).
 */
const generateMeteors = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    // Spawn mostly on the left half (-20% to 70%) to allow travel room
    x: Math.floor(Math.random() * 90) - 20, 
    // Spawn mostly in the top portion (-20% to 40%)
    y: Math.floor(Math.random() * 60) - 20, 
    size: Math.random() * 1.5 + 0.5,
    duration: Math.random() * 2 + 3, // 3s to 5s travel time
    delay: Math.random() * 10, // Stagger start times significantly
  }));
};

const StarBackground = memo(() => {
  
  // 1. Dynamic Configuration State
  // Default to mobile settings to prevent hydration mismatch, updates on mount
  const [config, setConfig] = useState({ stars: 30, meteors: 4 });

  // 2. Handle Screen Resizing
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newConfig;

      // Define Breakpoints
      if (width < 768) {
        // Mobile
        newConfig = { stars: 30, meteors: 4 };
      } else if (width < 1024) {
        // Tablet
        newConfig = { stars: 50, meteors: 8 };
      } else {
        // Desktop
        newConfig = { stars: 70, meteors: 12 };
      }

      // Only update state if the config actually changes to avoid unnecessary re-renders
      setConfig((prev) => 
        (prev.stars === newConfig.stars) ? prev : newConfig
      );
    };

    // Initial check
    handleResize();

    // Add listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3. Memoized Data Generation
  // Re-generate only when the configuration (count) changes
  const stars = useMemo(() => generateStars(config.stars), [config.stars]);
  const meteors = useMemo(() => generateMeteors(config.meteors), [config.meteors]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <style>
        {`
          @keyframes meteor-fall {
            0% { 
              width: var(--size); 
              transform: rotate(45deg) translateX(0); 
              opacity: 1; 
            }
            15% {
              /* Rapidly expand tail as it accelerates */
              width: var(--tail);
              opacity: 1;
            }
            100% { 
              width: var(--tail);
              transform: rotate(45deg) translateX(100vh); 
              opacity: 0; 
            }
          }
        `}
      </style>

      {/* --- Layer 1: Twinkling Stars --- */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={cn(
            "absolute rounded-full bg-white",
            "shadow-[0_0_4px_1px_rgba(255,255,255,0.4)]",
            "animate-twinkle" // Relies on index.css definition
          )}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* --- Layer 2: Falling Meteors --- */}
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={cn(
            "absolute rounded-full",
            // FIXED: Gradient direction flipped (Transparent -> Slate)
            // "Right" side is now the bright head, "Left" side is the fading tail
            "bg-linear-to-r from-transparent to-slate-300", 
            "shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
          )}
          style={{
            // Pass dynamic values as CSS variables to be used in Keyframes
            '--size': `${meteor.size}px`,
            '--tail': `${meteor.size * 30}px`,

            // Initial Position
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            
            // Initial Dimensions: Start as a circle (Star state)
            width: `${meteor.size}px`, 
            height: `${meteor.size}px`,
            
            // Apply Animation
            animation: `meteor-fall ${meteor.duration}s linear infinite`,
            animationDelay: `${meteor.delay}s`,
          }}
        >
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" />
        </span>
      ))}
    </div>
  );
});

// Display name for debugging in React DevTools
StarBackground.displayName = 'StarBackground';

export default StarBackground;
