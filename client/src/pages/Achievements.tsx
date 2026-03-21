import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Student-as-Staff Award',
      category: 'Academic Excellence',
      date: '2024',
      description: 'Recognized for outstanding contribution and leadership as a student staff member',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 2,
      title: 'Volunteer Excellence Recognition',
      category: 'Community Service',
      date: '2023-2024',
      description: 'Acknowledged for dedicated volunteer work in community infrastructure projects',
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Engineering Leadership Award',
      category: 'Leadership',
      date: '2024',
      description: 'Honored for demonstrating exceptional leadership in team projects and initiatives',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const volunteering = [
    {
      title: 'Broadmeadows Community Infrastructure Project',
      role: 'Volunteer Engineer',
      period: '2023-2024',
      impact: 'Contributed to community development and infrastructure improvement',
      highlights: ['Site surveys', 'Technical design support', 'Community engagement'],
    },
    {
      title: 'University Engineering Outreach',
      role: 'Student Mentor',
      period: '2023-Present',
      impact: 'Mentored junior students and promoted engineering awareness',
      highlights: ['Student mentoring', 'Workshop facilitation', 'Career guidance'],
    },
    {
      title: 'Professional Development Workshops',
      role: 'Workshop Facilitator',
      period: '2024',
      impact: 'Organized and led workshops on engineering software and best practices',
      highlights: ['CAD training', 'Project management', 'Technical skills'],
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">Achievements & Recognition</h2>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <Card key={achievement.id} className="p-6 bg-card border border-border hover:border-accent/50 transition-colors group">
                <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-sm text-accent font-semibold mb-2">{achievement.category}</p>
                <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                <Badge variant="secondary" className="text-xs">{achievement.date}</Badge>
              </Card>
            );
          })}
        </div>

        {/* Volunteering & Service */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-8">Volunteer Work & Community Service</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteering.map((volunteer, index) => (
              <Card key={index} className="p-6 bg-card border border-border hover:border-accent/50 transition-colors">
                <h4 className="text-lg font-bold text-foreground mb-2">{volunteer.title}</h4>
                <p className="text-sm text-accent font-semibold mb-1">{volunteer.role}</p>
                <p className="text-xs text-muted-foreground mb-4">{volunteer.period}</p>
                <p className="text-sm text-muted-foreground mb-4">{volunteer.impact}</p>

                <div className="flex flex-wrap gap-2">
                  {volunteer.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <Card className="p-8 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
          <h3 className="text-xl font-bold text-foreground mb-4">Community Impact</h3>
          <p className="text-muted-foreground leading-relaxed">
            Through my volunteer work and community engagement, I have contributed to meaningful infrastructure projects 
            and supported community development initiatives. These experiences have reinforced my commitment to using 
            engineering expertise for social good and have deepened my understanding of the real-world impact of civil 
            engineering on communities.
          </p>
        </Card>
      </div>
    </section>
  );
}
