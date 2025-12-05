import React from 'react';

// Features
import ThemeToggle from '@/components/features/ThemeToggle';

// Layout
import StarBackground from '@/components/layout/StarBackground';
import Navbar from '@/components/layout/Navbar';

// Section
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectSection from '@/components/sections/ProjectSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground transition-colors duration-500 selection:bg-primary/20 selection:text-primary">
      
      {/* --- Layer 1: Global Background (Fixed) --- */}
      {/* Using 'fixed' ensures the stars and grid stay stable while you scroll, 
          creating a "viewport" effect rather than stretching the background.
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-subtle opacity-60" />
        <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/50 to-background" />
        <StarBackground />
      </div>

      {/* --- Layer 2: Content Flow --- */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        
        {/* Navigation */}
        <Navbar />
        
        {/* Floating Theme Toggle (Desktop) */}
        {/* Adjusted top position and added hover transition */}
        <ThemeToggle className="fixed top-3 right-8 z-50 hidden md:flex items-center justify-center glass-card p-2 hover:scale-110 hover:border-primary/50 transition-all duration-300 shadow-lg" />

        {/* Main Content Sections */}
        <main className="flex-1 flex flex-col">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
        </main>

        {/* Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
}

export default Home;