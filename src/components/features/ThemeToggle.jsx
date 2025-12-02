import { 
  Moon, 
  Sun 
} from 'lucide-react';
import React, { 
  useLayoutEffect, 
  useState 
} from 'react'
import { cn } from '@/lib/utils.js';

/**
 * ThemeToggle Component
 * * A floating control that toggles between 'light' and 'dark' modes.
 * Persists preference to localStorage and respects system settings initially.
 * * Styles: Uses 'glass-panel' utility for a frosted space-glass effect.
 */
function ThemeToggle() {

  // 1. Initialize State: Check localStorage -> System Preference -> Default to Light
  const [isDarkMode, setIsDarkMode] = useState(() => {

    if (typeof window === 'undefined') return false; // SSR Safety

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') return true;
    if (storedTheme === 'light') return false;

    // Fallback to System Preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 2. Synchronization Effect: Updates the DOM and LocalStorage whenever state changes
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // 3. Toggle Handler
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className={cn(
        // Layout & Positioning
        "fixed top-6 right-6 z-50 p-3 rounded-full",
        
        // Visuals (Space Glass Effect)
        "bg-background/30 backdrop-blur-md border border-white/10 shadow-lg",
        
        // Interactions
        "hover:bg-background/50 hover:scale-110 active:scale-95",
        "transition-all duration-300 ease-out cursor-pointer",
        
        // Focus States
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      )}
    >
      <div className="relative w-6 h-6 overflow-hidden">
        {/* Sun Icon (Visible in Light Mode) */}
        <Sun 
          className={cn(
            "absolute inset-0 w-full h-full text-yellow-500 transition-all duration-500",
            isDarkMode ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"
          )} 
        />
        
        {/* Moon Icon (Visible in Dark Mode) */}
        <Moon 
          className={cn(
            "absolute inset-0 w-full h-full text-blue-400 transition-all duration-500",
            isDarkMode ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"
          )} 
        />
      </div>
    </button>
  );
}

export default ThemeToggle;
