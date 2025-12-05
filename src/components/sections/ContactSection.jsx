import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

function ContactSection() {
  const { toast } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget; // 1. Capture the form element
    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you shortly.",
      });
      setIsSubmitting(false);
      
      form.reset(); // 2. Reset all inputs to their default (empty) state
      
      // Optional: Close form after success
      // setIsFormOpen(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 md:py-32 bg-background/80 border-t border-border/40 overflow-hidden"
    >
      {/* --- Ambient Background --- */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 flex flex-col items-center">
        {/* --- Header --- */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-medium text-muted-foreground shadow-sm">
            <MessageSquare className="w-3 h-3 text-primary" />
            Inbox
          </div>
          <h2
            className="animate-fade-in-up opacity-0 text-3xl md:text-5xl font-bold tracking-tight text-foreground"
            style={{ animationDelay: "100ms" }}
          >
            Let's Start a{" "}
            <span className="text-gradient-primary">Conversation</span>
          </h2>
          <p
            className="animate-fade-in-up opacity-0 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: "200ms" }}
          >
            Have a project in mind? I'm always open to discussing new ideas,
            opportunities, and collaborations.
          </p>
        </div>

        {/* --- Interactive Dual Panel Card --- */}
        <div
          className="animate-fade-in-up opacity-0 w-full flex flex-col md:flex-row gap-4 md:gap-6 md:h-[560px]"
          style={{ animationDelay: "400ms" }}
        >
          {/* =======================
              PANEL 1: CONTACT INFO 
              ======================= */}
          <div
            className={cn(
              "relative w-full md:h-full rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col shadow-sm",
              isFormOpen ? "md:flex-[0.9] md:bg-secondary/30" : "md:flex-[1.1]"
            )}
            onMouseEnter={() => setIsFormOpen(false)}
          >
            {/* --- Expanded State Content --- */}
            <div
              className={cn(
                "relative md:absolute md:inset-0 p-6 md:p-12 flex flex-col justify-between transition-opacity duration-500 h-full",
                isFormOpen
                  ? "md:opacity-0 md:pointer-events-none md:delay-0"
                  : "md:opacity-100 md:delay-300"
              )}
            >
              {/* Decorative Background Blobs for this card */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-40 pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-40 pointer-events-none" />

              {/* Top Section */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold">Contact Details</h3>
                  
                  {/* New "Status" Badge to fill space */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Online
                  </div>
                </div>

                {/* Revamped Contact List: Now using "Cards" instead of plain text */}
                <div className="space-y-4">
                  {/* Email Card */}
                  <a
                    href="mailto:contact@huzaifa.dev"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary/60 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-background/80 shadow-sm text-primary group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Email
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        contact@huzaifa.dev
                      </span>
                    </div>
                  </a>

                  {/* Phone Card */}
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary/60 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-background/80 shadow-sm text-primary group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Phone
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        +91 12345 67890
                      </span>
                    </div>
                  </a>

                  {/* Location Card (Static) */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 group">
                    <div className="p-3 rounded-lg bg-background/80 shadow-sm text-primary group-hover:rotate-12 transition-transform duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Location
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        Kolkata, West Bengal
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials - Kept at bottom */}
              <div className="relative z-10 pt-8 border-t border-border/50 mt-auto">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                  Connect on Socials
                </h4>
                <div className="flex gap-3">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex-1 flex items-center justify-center p-3 rounded-xl bg-secondary/40 border border-border/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* --- Collapsed State Content (Vertical Strip) --- */}
            <div
              className={cn(
                "absolute inset-0 hidden md:flex items-center justify-center transition-opacity duration-500",
                isFormOpen
                  ? "opacity-100 delay-500"
                  : "opacity-0 pointer-events-none"
              )}
            >
              <span className="vertical-text text-xl font-bold tracking-widest text-muted-foreground/40 whitespace-nowrap uppercase">
                Contact Details
              </span>
            </div>
          </div>

          {/* =======================
              PANEL 2: CONTACT FORM 
              ======================= */}
          <div
            className={cn(
              "relative w-full md:h-full rounded-3xl border border-white/10 bg-linear-to-br from-background/95 via-secondary/20 to-background/95 backdrop-blur-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col shadow-2xl ring-1 ring-white/5",
              isFormOpen
                ? "md:flex-[1.4]" // Increased flex grow for more breathing room
                : "md:flex-[0.6] md:bg-secondary/30 md:cursor-pointer md:hover:bg-secondary/40"
            )}
            onMouseEnter={() => setIsFormOpen(true)}
          >
            {/* --- Collapsed State Content (Trigger Strip) --- */}
            <div
              className={cn(
                "absolute inset-0 hidden md:flex items-center justify-center transition-opacity duration-300",
                isFormOpen
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100 delay-200"
              )}
            >
              <div className="flex flex-col items-center gap-6">
                <div className="p-3 rounded-full bg-primary/20 text-primary animate-pulse-subtle">
                  <Send className="w-5 h-5" />
                </div>
                <span className="vertical-text text-lg font-bold tracking-widest text-foreground whitespace-nowrap uppercase">
                  Write to Me
                </span>
              </div>
            </div>

            {/* --- Expanded State Content (The Form) --- */}
            <div
              className={cn(
                "relative md:absolute md:inset-0 p-6 md:p-10 lg:p-12 overflow-y-visible md:overflow-y-auto transition-opacity duration-500 flex flex-col",
                isFormOpen
                  ? "md:opacity-100 md:delay-300"
                  : "md:opacity-0 md:pointer-events-none md:delay-0"
              )}
            >
              {/* Top badge + heading block */}
              <div className="mb-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary tracking-wide uppercase shadow-inner">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Project Inquiry
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Send a Message
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                  Share a brief about your project, timeline, or idea. I’ll
                  respond with next steps and clarifying questions.
                </p>
              </div>

              {/* Inner card for the actual form */}
              <div className="rounded-xl border border-border/60 bg-background/60 shadow-sm backdrop-blur-sm p-4 md:p-6 flex-1 flex flex-col">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 md:space-y-6 h-full flex flex-col"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-medium uppercase tracking-wide text-muted-foreground/80 ml-1"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-secondary/30 hover:bg-secondary/50 focus:bg-background border border-transparent focus:border-primary/30 rounded-lg px-4 py-3 text-sm transition-all duration-300 outline-none focus:ring-4 focus:ring-primary/10 placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-medium uppercase tracking-wide text-muted-foreground/80 ml-1"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-secondary/30 hover:bg-secondary/50 focus:bg-background border border-transparent focus:border-primary/30 rounded-lg px-4 py-3 text-sm transition-all duration-300 outline-none focus:ring-4 focus:ring-primary/10 placeholder:text-muted-foreground/50"
                      />
                      <p className="text-[11px] text-muted-foreground/70 ml-1">
                        I’ll only use this to reply to your message.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-medium uppercase tracking-wide text-muted-foreground/80 ml-1"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Landing page revamp, SaaS dashboard, e-commerce build..."
                      className="w-full bg-secondary/30 hover:bg-secondary/50 focus:bg-background border border-transparent focus:border-primary/30 rounded-lg px-4 py-3 text-sm transition-all duration-300 outline-none focus:ring-4 focus:ring-primary/10 placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <div className="space-y-1.5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between gap-2">
                      <label
                        htmlFor="message"
                        className="text-xs font-medium uppercase tracking-wide text-muted-foreground/80 ml-1"
                      >
                        Message
                      </label>
                      <span className="text-[11px] text-muted-foreground/70 mr-1">
                        Share scope, timeline, and budget (if known).
                      </span>
                    </div>
                    <textarea
                      id="message"
                      required
                      placeholder="Tell me about your product, audience, current challenges, and what success looks like..."
                      className="w-full bg-secondary/30 hover:bg-secondary/50 focus:bg-background border border-transparent focus:border-primary/30 rounded-lg px-4 py-3 text-sm transition-all duration-300 outline-none focus:ring-4 focus:ring-primary/10 placeholder:text-muted-foreground/50 resize-none min-h-21 leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 w-full md:w-auto px-8 py-3 rounded-xl bg-linear-to-r from-primary to-violet-600 text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group ml-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
