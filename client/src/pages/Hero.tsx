import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663461160876/iDjPnzdgxwxftb2XBwSWdK/engineer-1_196880f2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/75 to-transparent"></div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-white">
            Civil Engineer
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light">
            Master's Graduate • Infrastructure Design • Project Leadership
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-white hover:bg-blue-50 text-blue-900 px-8 font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex animate-bounce">
            <ArrowDown size={24} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
