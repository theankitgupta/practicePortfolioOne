import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  FolderGit2, 
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils'; 

function ProjectSection() {
  const myProjects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for managing products, orders, and analytics with real-time data visualization.',
      image: '/projects/project1.jpg',
      tags: [
        'React', 
        "TailwindCSS", 
        "Supabase"
      ],
      demoUrl: '#',
      gitHubUrl: '#',
    },
    {
      id: 2,
      title: 'FinTech Analytics',
      description: 'High-performance financial charting library integration with predictive modeling capabilities.',
      image: '/projects/project2.jpg',
      tags: [
        'TypeScript', 
        "D3.js", 
        "Next.js"
      ],
      demoUrl: '#',
      gitHubUrl: '#',
    },
    {
      id: 3,
      title: 'Social Connect',
      description: 'Real-time messaging platform with end-to-end encryption and media sharing features.',
      image: '/projects/project3.jpg',
      tags: [
        'HTML', 
        "CSS", 
        "Express.js"
      ],
      demoUrl: '#',
      gitHubUrl: '#',
    },
    {
      id: 4,
      title: 'Task Master AI',
      description: 'Productivity application leveraging LLMs to automatically prioritize and categorize user tasks.',
      image: '/projects/project4.jpg',
      tags: [
        'React', 
        "Node.js", 
        "Stripe"
      ],
      demoUrl: '#',
      gitHubUrl: '#',
    },
    {
      id: 5,
      title: 'DevPortfolio v1',
      description: 'A clean, accessible, and performant personal portfolio template for developers.',
      image: '/projects/project5.jpg',
      tags: [
        'JavaScript', 
        "MongoDB", 
        "GraphQL"
      ],
      demoUrl: '#',
      gitHubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="relative w-full py-24 px-6 md:py-32 bg-background/80 border-t border-border/40 overflow-hidden">
      
      {/* --- Ambient Background --- */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -right-40 top-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -left-40 bottom-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* --- Header --- */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-medium text-muted-foreground shadow-sm">
            <FolderGit2 className="w-3 h-3 text-primary" />
            Selected Work
          </div>
          
          <h2 
            className="animate-fade-in-up opacity-0 text-3xl md:text-5xl font-bold tracking-tight text-foreground"
            style={{ animationDelay: '100ms' }}
          >
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          
          <p 
            className="animate-fade-in-up opacity-0 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: '200ms' }}
          >
            A collection of applications that demonstrate my ability to solve complex problems with clean code and intuitive design.
          </p>
        </div>

        {/* --- Bento Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px] md:auto-rows-[350px]">
          {myProjects.map((project, index) => {
            // Logic for Bento Spans
            const isFeatured = index === 0 || index === 3; 
            const isFullWidth = index === 4 && myProjects.length === 5; 
            
            return (
              <div
                key={project.id}
                className={cn(
                  "group project-card animate-fade-in-up opacity-0 flex flex-col",
                  isFeatured ? "md:col-span-2 md:flex-row" : "md:col-span-1",
                  isFullWidth ? "md:col-span-3 md:flex-row" : ""
                )}
                style={{ animationDelay: `${300 + (index * 100)}ms` }}
              >
                {/* Shine Effect */}
                <div className="hover-shine" />

                {/* Image Section */}
                <div className={cn(
                  "project-image-container overflow-hidden bg-secondary/20",
                  (isFeatured || isFullWidth) ? "h-48 md:h-full md:w-1/2 border-b md:border-b-0 md:border-r" : "h-48 w-full border-b"
                )}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Glass Overlay Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-background/90 rounded-full hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
                      title="View Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.gitHubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-background/90 rounded-full hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Text Content Section */}
                <div className={cn(
                  "p-6 flex flex-col relative z-10",
                  (isFeatured || isFullWidth) ? "md:w-1/2 md:py-8 md:px-10" : "w-full"
                )}>
                  
                  {/* Top Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary/50 text-[10px] font-bold text-muted-foreground border border-border/40 tracking-wide uppercase shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      {project.title}
                      {(isFeatured || isFullWidth) && (
                        <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500 animate-pulse-subtle" />
                      )}
                    </h3>
                    
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-6 mt-auto border-t border-border/40 flex items-center justify-between">
                    <a 
                      href={project.demoUrl} 
                      className="project-link group/link text-sm font-semibold"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                    
                    <span className="text-xs font-medium text-muted-foreground/50 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* --- Bottom CTA --- */}
        <div 
          className="flex justify-center mt-20 animate-fade-in-up opacity-0"
          style={{ animationDelay: '800ms' }}
        >
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group px-8 py-3 rounded-full text-base"
          >
            <Github className="w-4 h-4 mr-2" />
            Explore Full Archive
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default ProjectSection;
