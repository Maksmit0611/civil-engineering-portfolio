import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Canvas3D from '@/components/Canvas3D';
import RotatingCube from '@/components/RotatingCube';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas3D cameraPosition={[0, 0, 4]} enableControls={false} background="transparent">
          <RotatingCube />
        </Canvas3D>
      </div>

      {/* Content Overlay */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Profile Picture */}
          <div className="mb-8">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663461160876/iDjPnzdgxwxftb2XBwSWdK/smit-profile_d63412c4.webp"
              alt="Smit Makwana"
              className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg object-cover ring-4 ring-cyan-400/30"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Smit Makwana
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-cyan-300 mb-4 font-light drop-shadow-md">
            Master of Civil Engineering
          </p>
          
          <p className="text-lg md:text-xl text-blue-200 mb-12 font-light drop-shadow-md">
            EA Student Ambassador • Project Leadership • Team Dynamics
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 font-semibold shadow-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex animate-bounce">
            <ArrowDown size={24} className="text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
