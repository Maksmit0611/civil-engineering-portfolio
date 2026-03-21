import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Trophy, Info } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Student-as-Staff Award',
      date: '2024',
      tooltip: 'Recognized for outstanding contribution and leadership as a student staff member',
    },
    {
      id: 2,
      title: 'Volunteer Excellence',
      date: '2023-2024',
      tooltip: 'Acknowledged for dedicated volunteer work in community infrastructure projects',
    },
    {
      id: 3,
      title: 'Engineering Leadership',
      date: '2024',
      tooltip: 'Honored for demonstrating exceptional leadership in team projects',
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-card/50">
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <TooltipProvider>
            {achievements.map((achievement) => (
              <Tooltip key={achievement.id}>
                <TooltipTrigger asChild>
                  <Card className="p-6 bg-card border border-border hover:border-primary/50 cursor-pointer transition-all group">
                    <div className="flex items-start gap-3 mb-4">
                      <Trophy size={24} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <Info size={18} className="text-muted-foreground flex-shrink-0" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  </Card>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p className="text-sm">{achievement.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
