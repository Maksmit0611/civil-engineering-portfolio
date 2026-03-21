import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Infrastructure Project',
      role: 'Project Engineer',
      tooltip: 'Led design and implementation of sustainable infrastructure solutions. Challenges: Complex site conditions. Solutions: Innovative design approaches. Outcomes: Delivered on time and within budget.',
      bgGradient: 'from-blue-600 to-cyan-500',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663461160876/iDjPnzdgxwxftb2XBwSWdK/engineer-2_46bb7ac4.jpg',
    },
    {
      id: 2,
      title: 'Broadmeadows Community Project',
      role: 'Volunteer Engineer',
      tooltip: 'Contributed to community infrastructure development. Challenges: Limited resources. Solutions: Collaborative problem-solving. Outcomes: Improved community infrastructure.',
      bgGradient: 'from-purple-600 to-pink-500',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663461160876/iDjPnzdgxwxftb2XBwSWdK/engineer-3_aa1a24be.jpg',
    },
    {
      id: 3,
      title: 'Structural Design Initiative',
      role: 'Design Engineer',
      tooltip: 'Developed structural solutions for complex challenges. Challenges: Multi-disciplinary coordination. Solutions: Advanced engineering principles. Outcomes: Cost-effective solutions.',
      bgGradient: 'from-orange-600 to-red-500',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663461160876/iDjPnzdgxwxftb2XBwSWdK/bridge_b9637231.jpg',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <TooltipProvider>
            {projects.map((project) => (
              <Tooltip key={project.id}>
                <TooltipTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-0">
                    {/* Image Background */}
                    <div 
                      className={`h-40 bg-gradient-to-br ${project.bgGradient} relative overflow-hidden`}
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-white">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {project.title}
                        </h3>
                        <Info size={18} className="text-slate-400 flex-shrink-0" />
                      </div>
                      <p className="text-sm text-blue-600 font-medium">{project.role}</p>
                    </div>
                  </Card>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p className="text-sm">{project.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
