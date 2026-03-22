import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FileText, Info } from 'lucide-react';

export default function Presentations() {
  const presentations = [
    {
      id: 1,
      title: 'Advanced Transportation Engineering',
      conference: 'Victoria University',
      tooltip: 'Presented on EDCM (Engineering Design and Construction Manual) and its application in Melbourne\'s urban growth areas. Covered council adoption and implementation strategies.',
      bgColor: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Sustainable Design and Development',
      conference: 'Victoria University',
      tooltip: 'Discussed alternative bio-materials including Mycelium, Hempcrete, and recycled wood as sustainable replacements for traditional construction materials. Focus on CO2 reduction and environmental impact.',
      bgColor: 'from-indigo-500 to-purple-500',
    },
    {
      id: 3,
      title: 'Leadership and Team Dynamics',
      conference: 'Victoria University Staff Meetings',
      tooltip: 'Shared insights on team dynamics as the most important factor in success. Discussed communication, student ownership, and continuous improvement in team environments.',
      bgColor: 'from-pink-500 to-orange-500',
    },
    {
      id: 4,
      title: 'Networking and Career Development',
      conference: 'EA Elevation 2026',
      tooltip: 'Presented on the importance of networking and direct company engagement for career advancement. Discussed connections with leading engineering firms and industry insights.',
      bgColor: 'from-emerald-500 to-green-500',
    },
  ];

  return (
    <section id="presentations" className="section-padding bg-gradient-to-b from-slate-100 to-white">
      <div className="container">
        <h2 className="section-title">Presentations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <TooltipProvider>
            {presentations.map((presentation) => (
              <Tooltip key={presentation.id}>
                <TooltipTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-105 border-0">
                    <div className={`p-8 bg-gradient-to-br ${presentation.bgColor} text-white`}>
                      <FileText size={32} className="mb-4 drop-shadow-lg" />
                      <h3 className="text-lg font-semibold mb-2">{presentation.title}</h3>
                      <p className="text-sm opacity-90">{presentation.conference}</p>
                    </div>
                    <div className="p-4 bg-white">
                      <Info size={18} className="text-slate-400" />
                    </div>
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
