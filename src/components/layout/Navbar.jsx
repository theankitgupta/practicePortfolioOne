import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { cn } from '@/lib/utils.js';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/features/ThemeToggle';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = useMemo(() => [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ], []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setIsScrolled(window.scrollY > 20));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', 
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isScrolled 
          ? "h-16 bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm" 
          : "h-20 bg-transparent border-transparent"
      )}
    >
      <div className="container-custom h-full flex items-center justify-between">
        
        {/* --- Brand --- */}
        <a 
          href='#hero' 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-lg font-bold tracking-tight flex items-center gap-2 z-50 focus-visible:outline-none group"
        >
          <div className="w-8 h-8 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center transition-colors group-hover:bg-foreground/10">
            <span className="text-foreground text-sm font-bold">M</span>
          </div>
          <span className="text-foreground/90 group-hover:text-foreground transition-colors">Huzaifa</span>
        </a>

        {/* --- Desktop Nav (Updated for Soft Contrast) --- */}
        <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ease-out",
                  
                  // Active State:
                  // uses 'bg-foreground/10' (10% opacity black/white) for a perfect subtle tint
                  activeSection === item.href.substring(1) 
                    ? "text-foreground bg-foreground/10" 
                    
                  // Inactive + Hover State:
                  // Hover adds a very faint 5% background, text goes from muted to full opacity
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
              >
                {item.name}
              </a>
            ))}
        </div>

        {/* --- Mobile Controls --- */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground/80 hover:bg-foreground/5 rounded-full transition-colors focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- Mobile Menu Overlay --- */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden",
            "transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-2xl font-medium tracking-tight transition-colors duration-200",
                // Mobile active state softened as well
                activeSection === item.href.substring(1) 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;