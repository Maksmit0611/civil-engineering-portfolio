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
      bgColor: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Digital Tools in Civil Engineering',
      conference: 'Engineering Technology Summit',
      tooltip: 'Discussed the role of digital tools and BIM in modern civil engineering projects',
      bgColor: 'from-indigo-500 to-purple-500',
    },
    {
      id: 3,
      title: 'Community-Focused Engineering',
      conference: 'Regional Engineering Forum',
      tooltip: 'Shared experiences from volunteer work and community infrastructure initiatives',
      bgColor: 'from-pink-500 to-orange-500',
    },
  ];

  return (
    <section id="presentations" className="section-padding bg-gradient-to-b from-slate-100 to-white">
      <div className="container">
        <h2 className="section-title">Presentations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
