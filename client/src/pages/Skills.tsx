import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Skills() {
  const technicalSkills = [
    { name: 'AutoCAD', level: 90 },
    { name: 'STAAD Pro', level: 85 },
    { name: 'SAP2000', level: 80 },
    { name: 'Civil 3D', level: 85 },
    { name: 'QGIS', level: 75 },
    { name: 'Revit', level: 80 },
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
    <section id="skills" className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Technical</h3>
              <TooltipProvider>
                <div className="space-y-4">
                  {technicalSkills.map((skill) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <div className="cursor-pointer">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-border rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Soft Skills</h3>
              <TooltipProvider>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <Tooltip key={skill}>
                      <TooltipTrigger asChild>
                        <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium cursor-pointer hover:bg-primary/20 transition-colors">
                          {skill}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">{skill}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
