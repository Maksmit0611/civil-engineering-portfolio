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
    },
    {
      id: 2,
      title: 'Broadmeadows Community Project',
      role: 'Volunteer Engineer',
      tooltip: 'Contributed to community infrastructure development. Challenges: Limited resources. Solutions: Collaborative problem-solving. Outcomes: Improved community infrastructure.',
    },
    {
      id: 3,
      title: 'Structural Design Initiative',
      role: 'Design Engineer',
      tooltip: 'Developed structural solutions for complex challenges. Challenges: Multi-disciplinary coordination. Solutions: Advanced engineering principles. Outcomes: Cost-effective solutions.',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <TooltipProvider>
            {projects.map((project) => (
              <Tooltip key={project.id}>
                <TooltipTrigger asChild>
                  <Card className="p-6 bg-card border border-border hover:border-primary/50 cursor-pointer transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Info size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground">{project.role}</p>
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
