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
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Internship - Civil Engineering',
      company: 'Engineering Consultancy',
      period: '2023 - 2024',
      tooltip: 'Supported design and project management. Responsibilities: Site surveys, technical reports, project coordination.',
      bgColor: 'from-cyan-500 to-blue-500',
    },
    {
      id: 3,
      title: 'Student Engineer',
      company: 'University Projects',
      period: '2022 - 2024',
      tooltip: 'Academic and research projects. Responsibilities: Team leadership, engineering solutions, technical presentations.',
      bgColor: 'from-purple-500 to-cyan-500',
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-white via-blue-50 to-slate-100">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="max-w-3xl mx-auto">
          <TooltipProvider>
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-8">
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-transparent"></div>
                )}

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="p-6 bg-white border border-blue-100 hover:border-blue-300 cursor-pointer transition-all hover:shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${exp.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Briefcase size={20} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-slate-900">{exp.title}</h3>
                          <p className="text-sm text-blue-600 font-medium">{exp.company}</p>
                          <p className="text-xs text-slate-500">{exp.period}</p>
                        </div>
                        <Info size={18} className="text-slate-400 flex-shrink-0" />
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
