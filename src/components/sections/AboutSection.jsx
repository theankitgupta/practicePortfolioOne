import React from 'react';
import {  
  Clapperboard, 
  Smartphone, 
  Users, 
  Trophy, 
  Briefcase,
  Zap
} from 'lucide-react';

function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 px-6 md:py-32 bg-background/80 border-t border-border/40 overflow-hidden">
      
      {/* --- Background Ambient Effects --- */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -left-20 top-40 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-40 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* --- Header --- */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            About Me
          </div>
          
          <h2 className="animate-fade-in-up opacity-0 text-3xl md:text-5xl font-bold tracking-tight text-foreground" style={{ animationDelay: '100ms' }}>
            Building <span className="text-gradient-primary">Products</span>, Leading <span className="text-gradient-primary">Teams</span>.
          </h2>
          
          <p className="animate-fade-in-up opacity-0 max-w-2xl text-lg text-muted-foreground leading-relaxed" style={{ animationDelay: '200ms' }}>
            I’m a multidimensional developer who blends engineering precision with creative storytelling and strategic leadership.
          </p>
        </div>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Card 1: The Narrative (Engineering + Leadership) */}
          <div 
            className="col-span-1 md:col-span-4 bento-card animate-fade-in-up opacity-0 group" 
            style={{ animationDelay: '300ms' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="icon-pill group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <Briefcase size={20} />
              </div>
              <span className="text-xs font-medium text-muted-foreground/60 border border-border/40 px-2 py-1 rounded-md">
                Project Management
              </span>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                The "Full-Picture" Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Development isn't just about writing code—it's about shipping value. 
                I combine <span className="text-foreground font-medium">technical expertise</span> with <span className="text-foreground font-medium">project management</span> skills to lead initiatives from concept to deployment. 
                Whether managing timelines in Jira or architecting scalable backends, I thrive in taking ownership and driving team success.
              </p>
            </div>
          </div>

          {/* Card 2: Stats (Vertical Anchor) */}
          <div 
            className="col-span-1 md:col-span-2 md:row-span-2 bento-card animate-fade-in-up opacity-0 bg-secondary/30 border-secondary/50 relative overflow-hidden" 
            style={{ animationDelay: '400ms' }}
          >
             {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-subtle opacity-50" />
            
            <div className="relative z-10 space-y-8 h-full flex flex-col justify-center px-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-background rounded-xl border border-border/50 shadow-sm">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    15+
                  </div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Projects Shipped
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-border/40" />
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-background rounded-xl border border-border/50 shadow-sm">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    5+
                  </div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Teams Led
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-border/40" />

              <div className="flex items-center gap-4">
                <div className="p-3 bg-background rounded-xl border border-border/50 shadow-sm">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    100%
                  </div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Impact Driven
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: App Development */}
          <div 
            className="col-span-1 md:col-span-2 bento-card animate-fade-in-up opacity-0 group" 
            style={{ animationDelay: '500ms' }}
          >
            <div className="icon-pill group-hover:bg-green-500/10 group-hover:text-green-500 transition-colors">
              <Smartphone size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                App Development
              </h3>
              <p className="text-sm text-muted-foreground">
                Building accessible, cross-platform mobile experiences that feel native and performant.
              </p>
            </div>
          </div>

          {/* Card 4: Video Editing & Creative */}
          <div 
            className="col-span-1 md:col-span-2 bento-card animate-fade-in-up opacity-0 group" 
            style={{ animationDelay: '600ms' }}
          >
            <div className="icon-pill group-hover:bg-pink-500/10 group-hover:text-pink-500 transition-colors">
              <Clapperboard size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Visual Storytelling
              </h3>
              <p className="text-sm text-muted-foreground">
                Translating technical concepts into engaging video content. Proficient in editing and narrative flow.
              </p>
            </div>
          </div>

          {/* Card 5: Tools & Leadership Ticker */}
          <div 
            className="col-span-1 md:col-span-6 bento-card animate-fade-in-up opacity-0 flex flex-col md:flex-row items-start md:items-center overflow-hidden px-4 py-6 bg-card/30 gap-3 md:gap-0"
            style={{ animationDelay: '700ms' }}
          >
            {/* Label: Full width & centered on mobile, Left-aligned with margin on desktop */}
            <span
              className="flex items-center justify-center md:justify-start text-[11px] md:text-sm font-semibold text-muted-foreground/80 whitespace-nowrap uppercase tracking-widest w-full md:w-auto text-center md:text-left md:mr-12"
            >
              <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-secondary-foreground/40 mr-2" />
              Workflow & Ecosystem
            </span>
            
            {/* Ticker Container: Takes full width on mobile, flex-1 on desktop */}
            <div className="block md:hidden w-full h-px bg-border/40 my-2" />
            <div className="relative w-full md:flex-1 overflow-hidden mask-image-gradient-r px-1 md:px-0">
              <div className="flex gap-12 animate-shimmer whitespace-nowrap">
                {['Jira', 'Figma', 'React Native', 'Premiere Pro', 'Agile', 'Notion', 'Docker', 'Team Leadership', 'CI/CD', 'Storytelling'].map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 text-foreground/70 font-medium text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-foreground/30" />
                    {tool}
                  </div>
                ))}
                {/* Repeat for seamless loop */}
                {['Jira', 'Figma', 'React Native', 'Premiere Pro', 'Agile', 'Notion', 'Docker', 'Team Leadership'].map((tool, i) => (
                  <div key={`dup-${i}`} className="flex items-center gap-2 text-foreground/70 font-medium text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-foreground/30" />
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
