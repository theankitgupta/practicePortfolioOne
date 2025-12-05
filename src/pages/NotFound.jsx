import React from "react";
import { Link } from "react-router-dom";
import { Home, AlertTriangle, MoveLeft } from "lucide-react";
import StarBackground from "@/components/layout/StarBackground";

function NotFound() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground flex items-center justify-center selection:bg-primary/20 selection:text-primary">
      
      {/* --- Layer 1: Global Background (Consistent with Home) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-subtle opacity-60" />
        {/* Vignette effect to focus on center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
        <StarBackground />
      </div>

      {/* --- Layer 2: Content --- */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center">
        
        {/* Main Glass Card */}
        <div 
          className="glass-card max-w-lg w-full p-8 md:p-12 flex flex-col items-center text-center animate-fade-in-up border-primary/20 shadow-2xl shadow-primary/5"
          style={{ animationDelay: '100ms' }}
        >
          {/* Animated Icon */}
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse-subtle" />
            <div className="relative p-4 rounded-full bg-secondary/50 border border-border/50 text-primary">
              <AlertTriangle className="w-10 h-10" />
            </div>
          </div>

          {/* 404 Heading */}
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-2 opacity-90">
            <span className="text-transparent bg-clip-text bg-linear-to-b from-foreground via-foreground/80 to-transparent">
              404
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Lost in <span className="text-gradient-primary">Space</span>?
          </h2>

          {/* Description */}
          <p className="text-muted-foreground mb-10 text-sm md:text-base leading-relaxed max-w-sm">
            The coordinates you are looking for seem to have drifted into a black hole. 
            Let's get you back to solid ground.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link 
              to="/" 
              className="btn-primary group w-full sm:w-auto"
            >
              <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Return to Base
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="btn-secondary group w-full sm:w-auto"
            >
              <MoveLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Go Back
            </button>
          </div>
        </div>

        {/* Decorative Technical Footer */}
        <div className="mt-8 flex items-center gap-2 text-[10px] text-muted-foreground/30 font-mono uppercase tracking-[0.2em] animate-fade-in opacity-0" style={{ animationDelay: '500ms' }}>
          <span>System Status: Critical</span>
          <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
          <span>Path Missing</span>
        </div>

      </div>
    </div>
  );
}

export default NotFound;
