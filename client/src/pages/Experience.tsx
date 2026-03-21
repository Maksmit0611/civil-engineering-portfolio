import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Graduate Engineer / Intern',
      company: 'Engineering Firm / Organization',
      period: '2024 - Present',
      duration: 'Current Role',
      description: 'Contributing to infrastructure and design projects',
      responsibilities: [
        'Assisted in project design and technical documentation',
        'Collaborated with senior engineers on site inspections',
        'Participated in CAD modeling and analysis',
      ],
      achievements: [
        'Gained hands-on experience in civil engineering practices',
        'Developed proficiency in industry-standard software',
      ],
    },
    {
      id: 2,
      title: 'Internship - Civil Engineering',
      company: 'Engineering Consultancy',
      period: '2023 - 2024',
      duration: '6 months',
      description: 'Supported design and project management activities',
      responsibilities: [
        'Conducted site surveys and data collection',
        'Assisted in preparing technical reports',
        'Supported project coordination and communication',
      ],
      achievements: [
        'Completed multiple project assignments successfully',
        'Enhanced technical and communication skills',
      ],
    },
    {
      id: 3,
      title: 'Student Engineer',
      company: 'University / Academic Projects',
      period: '2022 - 2024',
      duration: 'Part-time',
      description: 'Engaged in academic and research projects',
      responsibilities: [
        'Led team projects and research initiatives',
        'Developed engineering solutions to real-world problems',
        'Presented findings and technical reports',
      ],
      achievements: [
        'Completed Master of Civil Engineering degree',
        'Developed strong technical foundation and leadership skills',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/20"></div>
              )}

              <Card className="mb-8 bg-card border border-border hover:border-accent/50 transition-colors">
                <div className="p-6 md:p-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 w-12 h-12 bg-background border-4 border-accent rounded-full flex items-center justify-center">
                    <Briefcase size={20} className="text-accent" />
                  </div>

                  <div className="ml-16">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-lg text-accent font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
