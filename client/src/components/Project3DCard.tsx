import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface Project3DCardProps {
  id: number;
  title: string;
  role: string;
  tooltip: string;
  bgGradient: string;
  image: string;
}

export default function Project3DCard({
  title,
  role,
  tooltip,
  bgGradient,
  image,
}: Project3DCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            className="overflow-hidden cursor-pointer transition-all duration-300 border-0 h-full"
            style={{
              transform: isHovered
                ? 'translateZ(20px) rotateX(5deg) rotateY(-5deg) scale(1.05)'
                : 'translateZ(0px)',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Image Background with 3D effect */}
            <div 
              className={`h-40 bg-gradient-to-br ${bgGradient} relative overflow-hidden`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: isHovered ? 'scale(1.1) rotateZ(2deg)' : 'scale(1)',
                transition: 'transform 0.3s ease-out',
              }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* 3D Shine effect */}
              {isHovered && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  style={{
                    animation: 'shimmer 0.6s ease-in-out',
                  }}
                ></div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 bg-white">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <Info size={18} className="text-slate-400 flex-shrink-0" />
              </div>
              <p className="text-sm text-cyan-600 font-medium">{role}</p>
            </div>
          </Card>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs">
          <p className="text-sm">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
