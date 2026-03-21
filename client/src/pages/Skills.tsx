import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Users, Zap } from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    { name: 'AutoCAD', level: 90 },
    { name: 'STAAD Pro', level: 85 },
    { name: 'SAP2000', level: 80 },
    { name: 'Civil 3D', level: 85 },
    { name: 'QGIS', level: 75 },
    { name: 'Revit', level: 80 },
    { name: 'Microsoft Office', level: 95 },
    { name: 'Project Management', level: 85 },
  ];

  const softSkills = [
    'Leadership',
    'Team Collaboration',
    'Problem Solving',
    'Communication',
    'Project Management',
    'Critical Thinking',
    'Adaptability',
    'Time Management',
  ];

  const domains = [
    'Infrastructure Design',
    'Structural Analysis',
    'Site Engineering',
    'Project Coordination',
    'Technical Documentation',
    'Sustainable Design',
    'Community Projects',
    'Quality Assurance',
  ];

  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <Card className="p-8 bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Code2 size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Technical Skills</h3>
            </div>

            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="p-8 bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Users size={20} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Soft Skills</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Zap size={20} className="text-accent" />
                </div>
                <h4 className="font-semibold text-foreground">Engineering Domains</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <span
                    key={domain}
                    className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Skills Summary */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-4">Expertise Summary</h3>
          <p className="text-muted-foreground leading-relaxed">
            With a strong foundation in civil engineering, I combine technical proficiency in industry-standard software 
            with excellent soft skills in team collaboration and project management. My expertise spans infrastructure design, 
            structural analysis, and sustainable engineering solutions. I am committed to continuous learning and applying 
            innovative approaches to solve complex engineering challenges.
          </p>
        </Card>
      </div>
    </section>
  );
}
