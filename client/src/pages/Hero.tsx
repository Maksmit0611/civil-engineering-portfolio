import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="hero" className="section-padding min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Credential Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-medium text-accent">Master of Civil Engineering</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Civil Engineering</span>
            <br />
            <span className="text-foreground">Professional & Innovator</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Dedicated to designing sustainable infrastructure and delivering impactful engineering solutions. 
            Experienced in project management, technical design, and collaborative teamwork across diverse engineering domains.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce">
            <ArrowDown size={24} className="text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
