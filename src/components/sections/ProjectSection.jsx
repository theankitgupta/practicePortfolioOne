import React, { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  FolderGit2, 
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils'; 

function ProjectSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const myProjects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'Real-time analytics and order management.',
      image: '/projects/project1.jpg',
      tags: ['React', "Tailwind", "Supabase"],
      demoUrl: '#',
      gitHubUrl: '#',
    },
    {
      id: 2,
      title: 'FinTech Analytics',
      description: 'High-performance charting and predictive modeling.',
      image: '/projects/project2.jpg',
      tags: ['TypeScript', "D3.js", "Next.js"],
      demoUrl: '#',
      gitHubUrl: '#',
    },
    {
      id: 3,
      title: 'Social Connect',
      description: 'Encrypted messaging with media sharing.',
      image: '/projects/project3.jpg',
      tags: ['HTML', "Express.js"],
      demoUrl: '#',
      gitHubUrl: '#',
    },
    {
      id: 4,
      title: 'Task Master AI',
      description: 'LLM-powered task prioritization app.',
      image: '/projects/project4.jpg',
      tags: ['React', "Stripe"],
      demoUrl: '#',
      gitHubUrl: '#',
    },
    {
      id: 5,
      title: 'DevPortfolio v1',
      description: 'Accessible, performant portfolio template.',
      image: '/projects/project5.jpg',
      tags: ['JavaScript', "GraphQL"],
      demoUrl: '#',
      gitHubUrl: '#',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % myProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + myProjects.length) % myProjects.length);
  };

  const getCardStyle = (index) => {
    // Calculate distance from active index, handling circular wrap logic visually
    // However, for a simple carousel, standard distance is often cleaner:
    const total = myProjects.length;
    
    // Check direct neighbors for the tilt effect
    const isCenter = index === activeIndex;
    const isRight = index === (activeIndex + 1) % total;
    const isLeft = index === (activeIndex - 1 + total) % total;

    // Base styles
    let style = {
      zIndex: 0,
      opacity: 0,
      transform: 'translateX(0) scale(0.8) rotateY(0deg)',
      pointerEvents: 'none',
      filter: 'blur(10px) brightness(0.5)',
    };

    if (isCenter) {
      style = {
        zIndex: 20,
        opacity: 1,
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        pointerEvents: 'auto',
        filter: 'blur(0px) brightness(1)',
      };
    } else if (isRight) {
      style = {
        zIndex: 10,
        opacity: 0.6,
        // Move right (50%), tilt so right edge goes back (-25deg)
        transform: 'translateX(60%) scale(0.85) rotateY(-25deg)',
        pointerEvents: 'auto', // Allow clicking to select
        filter: 'blur(2px) brightness(0.7)',
      };
    } else if (isLeft) {
      style = {
        zIndex: 10,
        opacity: 0.6,
        // Move left (-50%), tilt so left edge goes back (25deg)
        transform: 'translateX(-60%) scale(0.85) rotateY(25deg)',
        pointerEvents: 'auto',
        filter: 'blur(2px) brightness(0.7)',
      };
    }

    return style;
  };

  // Helper to handle click on side cards to navigate
  const handleCardClick = (index) => {
    if (index === activeIndex) return;
    // Determine shortest direction (optional, or just set active)
    setActiveIndex(index);
  };

  return (
    <section id="projects" className="relative w-full py-20 px-6 bg-background border-t border-border/40 overflow-hidden">
      
      {/* --- Ambient Background --- */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      {/* Central Glow behind the carousel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 flex flex-col items-center">
        
        {/* --- Header (Compact) --- */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-medium text-muted-foreground shadow-sm">
            <FolderGit2 className="w-3 h-3 text-primary" />
            Selected Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
        </div>

        {/* --- 3D Carousel Stage --- */}
        {/* Fixed height container to condense the section */}
        <div className="relative w-full max-w-5xl h-[450px] md:h-[500px] flex justify-center perspective-container">
          
          {myProjects.map((project, index) => {
            const style = getCardStyle(index);
            
            return (
              <div
                key={project.id}
                onClick={() => handleCardClick(index)}
                className={cn(
                  "absolute top-0 w-[300px] sm:w-[380px] md:w-[450px] aspect-[4/5] md:aspect-[4/4.5] rounded-2xl border border-border/60 bg-card/90 backdrop-blur-xl shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col overflow-hidden preserve-3d cursor-pointer",
                  index !== activeIndex && "hover:bg-secondary/40" 
                )}
                style={style}
              >
                {/* Image Area */}
                <div className="relative h-1/2 w-full overflow-hidden bg-secondary/20 border-b border-border/40 group">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay (Only visible on active card hover) */}
                  <div className={cn(
                    "absolute inset-0 bg-black/40 flex items-center justify-center gap-4 backdrop-blur-[2px] transition-opacity duration-300",
                    index === activeIndex ? "opacity-0 group-hover:opacity-100" : "opacity-0 pointer-events-none"
                  )}>
                     <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white backdrop-blur-md transition-colors border border-white/20">
                        <ExternalLink className="w-5 h-5" />
                     </a>
                     <a href={project.gitHubUrl} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white backdrop-blur-md transition-colors border border-white/20">
                        <Github className="w-5 h-5" />
                     </a>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 flex flex-col items-start text-left">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-secondary/60 text-muted-foreground border border-border/40">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    {project.title}
                    {index === activeIndex && (
                       <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500 animate-pulse-subtle" />
                    )}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className={cn(
                    "mt-auto pt-4 w-full flex items-center text-xs font-medium text-primary transition-opacity duration-300",
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  )}>
                    Explore Case Study <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>

                {/* Glass Shine Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* --- Controls --- */}
        <div className="flex items-center gap-6 mt-2 md:mt-0 z-20">
          <button 
            onClick={handlePrev}
            className="p-4 rounded-full bg-secondary/20 border border-border/50 text-foreground hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all duration-300 backdrop-blur-sm shadow-lg group"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <div className="flex gap-2">
            {myProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === idx ? "w-6 bg-primary" : "bg-border hover:bg-primary/50"
                )}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="p-4 rounded-full bg-secondary/20 border border-border/50 text-foreground hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all duration-300 backdrop-blur-sm shadow-lg group"
            aria-label="Next Project"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default ProjectSection;