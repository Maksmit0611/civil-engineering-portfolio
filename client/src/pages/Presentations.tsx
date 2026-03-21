import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FileText, Info } from 'lucide-react';

export default function Presentations() {
  const presentations = [
    {
      id: 1,
      title: 'Sustainable Infrastructure Design',
      conference: 'National Engineering Conference 2024',
      tooltip: 'Presented innovative approaches to sustainable infrastructure design and their implementation in modern projects',
    },
    {
      id: 2,
      title: 'Digital Tools in Civil Engineering',
      conference: 'Engineering Technology Summit',
      tooltip: 'Discussed the role of digital tools and BIM in modern civil engineering projects',
    },
    {
      id: 3,
      title: 'Community-Focused Engineering',
      conference: 'Regional Engineering Forum',
      tooltip: 'Shared experiences from volunteer work and community infrastructure initiatives',
    },
  ];

  return (
    <section id="presentations" className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">Presentations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <TooltipProvider>
            {presentations.map((presentation) => (
              <Tooltip key={presentation.id}>
                <TooltipTrigger asChild>
                  <Card className="p-6 bg-card border border-border hover:border-primary/50 cursor-pointer transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <FileText size={24} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <Info size={18} className="text-muted-foreground flex-shrink-0" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{presentation.title}</h3>
                    <p className="text-sm text-muted-foreground">{presentation.conference}</p>
                  </Card>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p className="text-sm">{presentation.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
