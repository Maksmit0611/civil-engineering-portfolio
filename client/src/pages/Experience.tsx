import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Briefcase, Info } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Graduate Engineer',
      company: 'Engineering Firm',
      period: '2024 - Present',
      tooltip: 'Contributing to infrastructure and design projects. Responsibilities: Project design, technical documentation, site inspections, CAD modeling.',
    },
    {
      id: 2,
      title: 'Internship - Civil Engineering',
      company: 'Engineering Consultancy',
      period: '2023 - 2024',
      tooltip: 'Supported design and project management. Responsibilities: Site surveys, technical reports, project coordination.',
    },
    {
      id: 3,
      title: 'Student Engineer',
      company: 'University Projects',
      period: '2022 - 2024',
      tooltip: 'Academic and research projects. Responsibilities: Team leadership, engineering solutions, technical presentations.',
    },
  ];

  return (
    <section id="experience" className="section-padding bg-card/50">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="max-w-3xl mx-auto">
          <TooltipProvider>
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-8">
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-border"></div>
                )}

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="p-6 bg-card border border-border hover:border-primary/50 cursor-pointer transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Briefcase size={20} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-sm text-primary font-medium">{exp.company}</p>
                          <p className="text-xs text-muted-foreground">{exp.period}</p>
                        </div>
                        <Info size={18} className="text-muted-foreground flex-shrink-0" />
                      </div>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs">
                    <p className="text-sm">{exp.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
