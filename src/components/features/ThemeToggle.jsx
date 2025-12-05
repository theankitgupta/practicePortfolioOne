import { Moon, Sun } from 'lucide-react';
import React, { useLayoutEffect, useState } from 'react';
import { cn } from '@/lib/utils.js';

function ThemeToggle({ className }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') return true;
    if (storedTheme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

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

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className={cn(
        // Base
        "relative p-2.5 rounded-full transition-all duration-300 ease-out cursor-pointer overflow-hidden",
        // Visuals (Matches new glass-card utility)
        "bg-background/80 backdrop-blur-md border border-border shadow-sm",
        // Hover
        "hover:bg-secondary hover:border-primary/20",
        // Focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
        className
      )}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={cn(
            "absolute inset-0 w-full h-full text-amber-500 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)", // Snappy easing
            isDarkMode ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"
          )} 
        />
        <Moon 
          className={cn(
            "absolute inset-0 w-full h-full text-primary transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)",
            isDarkMode ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"
          )} 
        />
      </div>
    </button>
  );
}

export default ThemeToggle;