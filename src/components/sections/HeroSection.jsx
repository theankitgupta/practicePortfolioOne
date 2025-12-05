import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mouse } from 'lucide-react';

function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 pt-20 text-center overflow-hidden"
    >
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 -z-10 bg-grid-subtle" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      {/* --- Content Container --- */}
      <div className="max-w-4xl space-y-8 relative z-10 flex flex-col items-center">
        
        {/* 1. Status Pill */}
        <div 
          className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-md text-xs font-medium text-muted-foreground hover:bg-secondary transition-colors cursor-default"
          style={{ animationDelay: '100ms' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new projects
        </div>

        {/* 2. Main Heading */}
        <h1 
          className="animate-fade-in-up opacity-0 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground"
          style={{ animationDelay: '300ms' }}
        >
          Building Digital <br />
          <span className="text-gradient-primary">Experiences</span>
        </h1>

        {/* 3. Bio Paragraph */}
        <p 
          className="animate-fade-in-up opacity-0 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          style={{ animationDelay: '500ms' }}
        >
          I am <span className="text-foreground font-semibold">MD. Huzaifa</span>. 
          I craft accessible, high-performance web applications with a focus on 
          <span className="italic"> engineered precision</span> and user interaction.
        </p>

        {/* 4. Action Buttons */}
        <div 
          className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row gap-4 pt-4 items-center"
          style={{ animationDelay: '700ms' }}
        >
          <a href="#projects" className="btn-primary group flex items-center gap-2">
            View My Work
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a href="/resume.pdf" className="btn-secondary group flex items-center gap-2">
            Download CV
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* 5. Social Icons (Fixed: Individual Hover) */}
        <div 
          className="animate-fade-in-up opacity-0 flex items-center gap-8 pt-8"
          style={{ animationDelay: '900ms' }}
        >
          {/* GitHub */}
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-300 hover:text-foreground hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-300 hover:text-foreground hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* --- Scroll Indicator Animation --- */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0"
        style={{ animationDelay: '1200ms' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">Scroll</span>
          <div className="h-10 w-6 border-2 border-muted-foreground/30 rounded-full p-1">
            <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
