import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Heart, Info } from 'lucide-react';

export default function Volunteer() {
  const activities = [
    {
      id: 1,
      title: 'Engineering Student Society - President',
      period: '2023-2024',
      tooltip: 'Led student organization. Organized workshops, coordinated industry events, mentored members, managed operations.',
    },
    {
      id: 2,
      title: 'Community Infrastructure Initiative',
      period: '2023-Present',
      tooltip: 'Active volunteer in community projects. Conducted surveys, provided design support, engaged stakeholders.',
    },
    {
      id: 3,
      title: 'Engineering Mentorship Program',
      period: '2023-2024',
      tooltip: 'Mentored junior students. Provided academic guidance, shared industry insights, facilitated networking.',
    },
  ];

  return (
    <section id="volunteer" className="section-padding bg-card/50">
      <div className="container">
        <h2 className="section-title">Volunteer Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <TooltipProvider>
            {activities.map((activity) => (
              <Tooltip key={activity.id}>
                <TooltipTrigger asChild>
                  <Card className="p-6 bg-card border border-border hover:border-primary/50 cursor-pointer transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <Heart size={24} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <Info size={18} className="text-muted-foreground flex-shrink-0" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">{activity.period}</p>
                  </Card>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p className="text-sm">{activity.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
