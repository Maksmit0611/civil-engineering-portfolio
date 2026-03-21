import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Lightbulb } from 'lucide-react';

export default function Volunteer() {
  const activities = [
    {
      id: 1,
      title: 'Engineering Student Society - President',
      period: '2023-2024',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      description: 'Led student organization with focus on professional development and community engagement',
      contributions: [
        'Organized workshops and technical seminars',
        'Coordinated industry networking events',
        'Mentored junior members',
        'Managed society budget and operations',
      ],
    },
    {
      id: 2,
      title: 'Community Infrastructure Initiative',
      period: '2023-Present',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      description: 'Active volunteer in community-focused engineering projects and infrastructure development',
      contributions: [
        'Conducted site surveys and assessments',
        'Provided technical design support',
        'Engaged with community stakeholders',
        'Documented project outcomes and impact',
      ],
    },
    {
      id: 3,
      title: 'Engineering Mentorship Program',
      period: '2023-2024',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
      description: 'Mentored junior engineering students and supported their academic and professional growth',
      contributions: [
        'Provided academic guidance and support',
        'Shared industry insights and experiences',
        'Helped with career planning and development',
        'Facilitated networking opportunities',
      ],
    },
  ];

  const extracurricular = [
    {
      name: 'Engineering Design Competition',
      role: 'Team Lead',
      achievement: 'Led team to regional finals with innovative design solution',
    },
    {
      name: 'Professional Development Workshop',
      role: 'Facilitator',
      achievement: 'Conducted training on CAD and project management software',
    },
    {
      name: 'University Engineering Expo',
      role: 'Organizer & Presenter',
      achievement: 'Showcased student projects and promoted engineering careers',
    },
    {
      name: 'Sustainability Initiative',
      role: 'Committee Member',
      achievement: 'Contributed to campus sustainability projects and awareness',
    },
    {
      name: 'Industry Networking Events',
      role: 'Student Coordinator',
      achievement: 'Connected 100+ students with industry professionals',
    },
    {
      name: 'Technical Blog & Resources',
      role: 'Content Creator',
      achievement: 'Created educational content on engineering topics',
    },
  ];

  return (
    <section id="volunteer" className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">Volunteer Work & Extracurricular Activities</h2>

        {/* Main Activities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <Card key={activity.id} className="overflow-hidden bg-card border border-border hover:border-accent/50 transition-colors group">
                {/* Header */}
                <div className={`p-6 bg-gradient-to-br ${activity.color} text-white`}>
                  <Icon size={32} className="mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold">{activity.title}</h3>
                  <p className="text-sm opacity-90">{activity.period}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">{activity.description}</p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Key Contributions:</h4>
                    <ul className="space-y-2">
                      {activity.contributions.map((contribution, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Extracurricular Activities */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-8">Additional Involvement</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {extracurricular.map((activity, index) => (
              <Card key={index} className="p-4 bg-card border border-border hover:border-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-foreground">{activity.name}</h4>
                  <Badge variant="secondary" className="text-xs">{activity.role}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{activity.achievement}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <Card className="p-8 bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20">
          <h3 className="text-xl font-bold text-foreground mb-4">Leadership & Impact</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My involvement in various volunteer and extracurricular activities demonstrates my commitment to professional 
            development, community service, and leadership. Through these roles, I have developed strong interpersonal skills, 
            gained experience in organizing and coordinating initiatives, and made meaningful contributions to the engineering 
            community.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I believe in the importance of giving back to the community and supporting fellow students in their professional 
            journey. These experiences have shaped my values and reinforced my passion for engineering and its positive impact 
            on society.
          </p>
        </Card>
      </div>
    </section>
  );
}
