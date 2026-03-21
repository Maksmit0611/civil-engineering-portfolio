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
      bgColor: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Community Infrastructure Initiative',
      period: '2023-Present',
      tooltip: 'Active volunteer in community projects. Conducted surveys, provided design support, engaged stakeholders.',
      bgColor: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: 'Engineering Mentorship Program',
      period: '2023-2024',
      tooltip: 'Mentored junior students. Provided academic guidance, shared industry insights, facilitated networking.',
      bgColor: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="volunteer" className="section-padding bg-gradient-to-b from-white via-green-50 to-slate-100">
      <div className="container">
        <h2 className="section-title">Volunteer Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <TooltipProvider>
            {activities.map((activity) => (
              <Tooltip key={activity.id}>
                <TooltipTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-105 border-0">
                    <div className={`p-8 bg-gradient-to-br ${activity.bgColor} text-white`}>
                      <Heart size={32} className="mb-4 drop-shadow-lg fill-white" />
                      <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                      <p className="text-sm opacity-90">{activity.period}</p>
                    </div>
                    <div className="p-4 bg-white">
                      <Info size={18} className="text-slate-400" />
                    </div>
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
