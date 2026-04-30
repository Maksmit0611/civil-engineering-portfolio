import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Canvas3D from '@/components/Canvas3D';
import { Skill3D } from '@/components/Skills3D';

export default function Skills() {
  const technicalSkills = [
    { name: 'AutoCAD', level: 90, color: '#00d4ff' },
    { name: 'STAAD Pro', level: 85, color: '#00ff88' },
    { name: 'SAP2000', level: 80, color: '#ff00ff' },
    { name: 'Civil 3D', level: 85, color: '#ffaa00' },
    { name: 'QGIS', level: 75, color: '#00ccff' },
    { name: 'Revit', level: 80, color: '#ff6600' },
  ];

  const softSkills = [
    'Leadership',
    'Team Dynamics',
    'Problem Solving',
    'Communication',
    'Project Management',
    'Event Organization',
    'Stakeholder Management',
    'Mentoring',
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-slate-100 to-white">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 3D Technical Skills Visualization */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg overflow-hidden h-96 shadow-xl">
              <Canvas3D cameraPosition={[0, 0, 8]} enableControls={true} background="transparent">
                {technicalSkills.map((skill, index) => {
                  const angle = (index / technicalSkills.length) * Math.PI * 2;
                  const radius = 3;
                  const x = Math.cos(angle) * radius;
                  const z = Math.sin(angle) * radius;
                  return (
                    <Skill3D
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      color={skill.color}
                      position={[x, 0, z]}
                    />
                  );
                })}
              </Canvas3D>
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
                      'from-cyan-500 to-blue-500',
                      'from-emerald-500 to-green-500',
                    ];
                    const bgColor = colors[index % colors.length];

                    return (
                      <Tooltip key={skill}>
                        <TooltipTrigger asChild>
                          <div 
                            className={`px-4 py-2 bg-gradient-to-r ${bgColor} text-white rounded-lg text-sm font-medium cursor-pointer hover:shadow-lg transition-all transform hover:scale-110`}
                            style={{
                              boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                            }}
                          >
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

          {/* Technical Skills List */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Technical Proficiency</h3>
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
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
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
        </div>
      </div>
    </section>
  );
}
