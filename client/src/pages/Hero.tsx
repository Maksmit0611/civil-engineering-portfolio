import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="hero" className="section-padding min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-foreground">
            Civil Engineer
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
            Master's Graduate • Infrastructure Design • Project Leadership
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact
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
