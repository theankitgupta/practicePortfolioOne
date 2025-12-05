import React from "react";
import {
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  Heart,
  Terminal,
} from "lucide-react";

function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
  ];

  return (
    <footer className="relative w-full bg-background border-t border-border/40 overflow-hidden pt-16 pb-8">
      {/* --- Ambient Background Effects (Consistent with other sections) --- */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Subtle Glow at bottom */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Column 1: Brand Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Huzaifa<span className="text-primary">.dev</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm text-sm">
              Building digital experiences that merge creativity with technical excellence. 
              Focused on performance, accessibility, and modern design patterns.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 w-fit relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary/30 border border-border/50 text-muted-foreground hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <span>&copy; {currentYear} Huzaifa.</span>
            <span className="hidden md:inline">All rights reserved.</span>
            <span className="mx-2 hidden md:inline text-border">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> in India
            </span>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border/50 text-xs font-medium text-foreground transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
