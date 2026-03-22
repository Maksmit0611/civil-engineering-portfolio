import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Heart, Info } from 'lucide-react';

export default function Volunteer() {
  const activities = [
    {
      id: 1,
      title: 'VUPA President',
      period: '2024 - Present',
      tooltip: 'Leading Victoria University Postgraduate Association. Organizing major events, managing team, coordinating with university and external stakeholders, fostering community engagement.',
      bgColor: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Student Mentor',
      company: 'Victoria University',
      period: '2023 - 2024',
      tooltip: 'Mentored junior students providing academic guidance, career advice, and professional development support. Facilitated networking and industry connections.',
      bgColor: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: 'Careers Hub Member',
      company: 'Victoria University',
      period: '2023 - 2024',
      tooltip: 'Worked under Trish Gray\'s leadership supporting student career development. Organized career events, facilitated employer connections, and provided career guidance.',
      bgColor: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Event Organization & Community Engagement',
      company: 'Victoria University',
      period: '2024 - Present',
      tooltip: 'Organized major cultural and professional events including Holi Celebration 2026 (106 tickets, 70 attendees), International Women\'s Day events, and networking sessions.',
      bgColor: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="volunteer" className="section-padding bg-gradient-to-b from-white via-green-50 to-slate-100">
      <div className="container">
        <h2 className="section-title">Volunteer Work & Leadership</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
