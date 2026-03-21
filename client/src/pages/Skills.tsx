import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Skills() {
  const technicalSkills = [
    { name: 'AutoCAD', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'STAAD Pro', level: 85, color: 'from-purple-500 to-blue-500' },
    { name: 'SAP2000', level: 80, color: 'from-pink-500 to-purple-500' },
    { name: 'Civil 3D', level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'QGIS', level: 75, color: 'from-green-500 to-cyan-500' },
    { name: 'Revit', level: 80, color: 'from-indigo-500 to-blue-500' },
  ];

  const softSkills = [
    'Leadership',
    'Team Collaboration',
    'Problem Solving',
    'Communication',
    'Project Management',
    'Critical Thinking',
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-slate-100 to-white">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Technical</h3>
              <TooltipProvider>
                <div className="space-y-4">
                  {technicalSkills.map((skill) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <Card className="p-4 bg-white border border-blue-100 hover:border-blue-300 cursor-pointer transition-all">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-slate-900">{skill.name}</span>
                            <span className="text-xs font-semibold text-blue-600">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">Proficiency: {skill.level}%</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Soft Skills</h3>
              <TooltipProvider>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => {
                    const colors = [
                      'from-blue-500 to-cyan-500',
                      'from-purple-500 to-pink-500',
                      'from-orange-500 to-red-500',
                      'from-green-500 to-cyan-500',
                      'from-indigo-500 to-blue-500',
                      'from-pink-500 to-purple-500',
                    ];
                    const bgColor = colors[index % colors.length];

                    return (
                      <Tooltip key={skill}>
                        <TooltipTrigger asChild>
                          <div className={`px-4 py-2 bg-gradient-to-r ${bgColor} text-white rounded-lg text-sm font-medium cursor-pointer hover:shadow-lg transition-all transform hover:scale-105`}>
                            {skill}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm">{skill}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
