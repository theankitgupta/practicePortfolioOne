import React, { useState } from 'react';
import { 
  Smartphone, 
  Clapperboard, 
  Briefcase, 
  Layers, 
  Zap, 
  Bot, 
  Cpu 
} from 'lucide-react';
import { cn } from '@/lib/utils';

function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  // --- CONFIGURATION: UPDATE SKILLS HERE ---
  const filters = [
    { 
      id: 'all', 
      label: 'Full Perspective' 
    },
    { 
      id: 'engineering', 
      label: 'Engineering' 
    },
    { 
      id: 'creative', 
      label: 'Creative' 
    },
    { 
      id: 'management', 
      label: 'Management' 
    },
    { 
      id: 'ai', 
      label: 'AI & Arch' 
    },
  ];
  
  const skillCategories = [
    {
      id: "engineering",
      title: "Product Engineering",
      role: "Full Stack Developer",
      description: "Architecting scalable, type-safe applications with a focus on performance and clean code principles.",
      icon: <Smartphone className="w-5 h-5" />,
      // Bento Layout Logic: Wide on desktop if 'all' is selected
      wide: true, 
      colorStyles: {
        iconPill: "group-hover:bg-blue-500/10 group-hover:text-blue-500 group-hover:border-blue-500/20",
        title: "group-hover:text-blue-500",
        badge: "group-hover:border-blue-500/30 group-hover:bg-blue-500/5"
      },
      mainSkills: [
        "React Native", 
        "Next.js", 
        "TypeScript", 
        "Node.js"
      ],
      subSkills: [
        "PostgreSQL", 
        "Docker", 
        "Redis", 
        "System Design", 
        "CI/CD Pipelines"
      ]
    },
    {
      id: "ai",
      title: "AI & Architecture",
      role: "Solutions Architect",
      description: "Integrating LLMs and modern cloud infrastructure to build intelligent, autonomous systems.",
      icon: <Bot className="w-5 h-5" />,
      wide: false,
      colorStyles: {
        iconPill: "group-hover:bg-purple-500/10 group-hover:text-purple-500 group-hover:border-purple-500/20",
        title: "group-hover:text-purple-500",
        badge: "group-hover:border-purple-500/30 group-hover:bg-purple-500/5"
      },
      mainSkills: [
        "OpenAI API", 
        "Python", 
        "RAG", 
        "Vector DBs"
      ],
      subSkills: [
        "LangChain", 
        "Microservices", 
        "Terraform", 
        "AWS"
      ]
    },
    {
      id: "creative",
      title: "Visual Narrative",
      role: "Editor & Creator",
      description: "Translating technical concepts into engaging visual stories through high-fidelity editing.",
      icon: <Clapperboard className="w-5 h-5" />,
      wide: false,
      colorStyles: {
        iconPill: "group-hover:bg-pink-500/10 group-hover:text-pink-500 group-hover:border-pink-500/20",
        title: "group-hover:text-pink-500",
        badge: "group-hover:border-pink-500/30 group-hover:bg-pink-500/5"
      },
      mainSkills: [
        "Premiere Pro", 
        "After Effects", 
        "Motion Graphics"
      ],
      subSkills: [
        "DaVinci Resolve", 
        "Sound Design", 
        "Color Grading", 
        "Scripting"
      ]
    },
    {
      id: "management",
      title: "Strategic Leadership",
      role: "Project Lead",
      description: "Bridging the gap between stakeholders and developers to ship value efficiently.",
      icon: <Briefcase className="w-5 h-5" />,
      wide: true,
      colorStyles: {
        iconPill: "group-hover:bg-emerald-500/10 group-hover:text-emerald-500 group-hover:border-emerald-500/20",
        title: "group-hover:text-emerald-500",
        badge: "group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5"
      },
      mainSkills: [
        "Agile & Scrum", 
        "Product Strategy", 
        "Team Leadership"
      ],
      subSkills: [
        "Jira / Linear", 
        "Roadmapping", 
        "Client Relations", 
        "Mentorship"
      ]
    }
  ];

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section 
      id="skills" 
      className="relative w-full py-24 px-6 md:py-32 bg-background/80 border-t border-border/40 overflow-hidden"
    >
      
      {/* --- Ambient Background --- */}
      <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />
      {/* Soft gradient blob */}
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 flex flex-col items-center">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-medium text-muted-foreground shadow-sm">
            <Cpu className="w-3 h-3 text-primary" />
            Capabilities
          </div>
          
          <h2 
            className="animate-fade-in-up opacity-0 text-3xl md:text-5xl font-bold tracking-tight text-foreground"
            style={{ animationDelay: '100ms' }}
          >
            The <span className="text-gradient-primary">Technical Toolkit</span>
          </h2>
          
          <p 
            className="animate-fade-in-up opacity-0 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: '200ms' }}
          >
            A hybrid skillset designed to handle the entire product lifecycle—from code and architecture to content and delivery.
          </p>

          {/* --- Glass Filter Bar --- */}
          <div 
            className="animate-fade-in-up opacity-0 mt-8 p-1.5 rounded-full bg-secondary/30 border border-border/40 backdrop-blur-md flex flex-wrap justify-center gap-1"
            style={{ animationDelay: '300ms' }}
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveTab(filter.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeTab === filter.id 
                    ? "bg-background text-foreground shadow-md ring-1 ring-border/50 scale-105" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- Skills Grid --- */}
        <div 
          className={cn(
            "grid gap-6 w-full animate-fade-in-up opacity-0",
            activeTab === 'all' 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr" 
              : "grid-cols-1 place-items-center"
          )}
          style={{ animationDelay: '400ms' }}
        >
          {filteredCategories.map((category) => (
            <div 
              key={`${category.id}-${activeTab}`} 
              className={cn(
                "bento-card group h-full flex flex-col",
                // Grid Span Logic for "All" tab
                activeTab === 'all' && category.wide ? "md:col-span-2" : "md:col-span-1",
                // Centering logic for single filtered items
                filteredCategories.length === 1 && "w-full max-w-3xl mx-auto"
              )}
            >
              
              {/* Card Top: Icon & Title */}
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start justify-between">
                  <div className={cn(
                    "icon-pill transition-all duration-300 mb-0", 
                    category.colorStyles.iconPill
                  )}>
                    {category.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/60 border border-border/40 px-2 py-1 rounded bg-secondary/20">
                    {category.role}
                  </span>
                </div>
                
                <div>
                  <h3 className={cn(
                    "text-xl font-bold text-foreground mb-2 transition-colors duration-300",
                    category.colorStyles.title
                  )}>
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Card Bottom: Tech Stack */}
              <div className="mt-auto space-y-5">
                
                {/* Primary Skills (Badges) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70 uppercase tracking-widest">
                    <Zap className="w-3 h-3 text-primary" />
                    <span>Core Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.mainSkills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className={cn(
                          "skill-badge",
                          category.colorStyles.badge
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Secondary Skills (Text List) */}
                {category.subSkills.length > 0 && (
                  <>
                    <div className="h-px w-full bg-linear-to-r from-transparent via-border to-transparent opacity-50" />
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest">
                        <Layers className="w-3 h-3" />
                        <span>
                          Ecosystem
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {category.subSkills.map((skill, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="text-xs text-muted-foreground transition-colors hover:text-foreground cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-20 text-muted-foreground animate-pulse">
            No skills found for this category yet.
          </div>
        )}

      </div>
    </section>
  );
}

export default SkillsSection;
