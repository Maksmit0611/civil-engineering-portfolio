import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Trophy, Info } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Student-as-Staff Award',
      date: '2024',
      tooltip: 'Recognized for outstanding contribution and leadership as a student staff member at Victoria University. Acknowledged for exceptional service and dedication to student support.',
      bgColor: 'from-yellow-500 to-orange-500',
    },
    {
      id: 2,
      title: 'VUPA Leadership',
      date: '2024 - Present',
      tooltip: 'Elected as President of Victoria University Postgraduate Association. Leading major events including Holi Celebration 2026 with 106 tickets sold and 70+ attendees.',
      bgColor: 'from-green-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'EA Elevation 2026 Student Ambassador',
      date: '2026',
      tooltip: 'Selected as Student Ambassador for Engineers Australia Careers Expo. Assisted 70+ students, facilitated connections with leading engineering companies including Gamuda, Symal, ADF, and Babcock.',
      bgColor: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Event Organization Excellence',
      date: '2026',
      tooltip: 'Successfully organized Holi Celebration: Festival of Colours at Victoria University within 3 weeks. Managed council permissions, university approvals, vendor coordination, and team leadership.',
      bgColor: 'from-blue-500 to-indigo-500',
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-gradient-to-b from-white via-purple-50 to-slate-100">
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <TooltipProvider>
            {achievements.map((achievement) => (
              <Tooltip key={achievement.id}>
                <TooltipTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-105 border-0">
                    <div className={`p-8 bg-gradient-to-br ${achievement.bgColor} text-white`}>
                      <Trophy size={32} className="mb-4 drop-shadow-lg" />
                      <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-sm opacity-90">{achievement.date}</p>
                    </div>
                    <div className="p-4 bg-white">
                      <Info size={18} className="text-slate-400" />
                    </div>
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
