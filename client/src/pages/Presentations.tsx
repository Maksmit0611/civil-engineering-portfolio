import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, ExternalLink, Calendar } from 'lucide-react';

export default function Presentations() {
  const presentations = [
    {
      id: 1,
      title: 'Sustainable Infrastructure Design Practices',
      conference: 'National Engineering Conference 2024',
      date: 'March 2024',
      location: 'Melbourne, Australia',
      description: 'Presented innovative approaches to sustainable infrastructure design and their implementation in modern projects',
      topics: ['Sustainability', 'Infrastructure', 'Design'],
      materials: 'Slides & Paper Available',
    },
    {
      id: 2,
      title: 'Digital Tools in Civil Engineering',
      conference: 'Engineering Technology Summit',
      date: 'February 2024',
      location: 'Online',
      description: 'Discussed the role of digital tools and BIM in modern civil engineering projects',
      topics: ['BIM', 'Digital Tools', 'Technology'],
      materials: 'Slides Available',
    },
    {
      id: 3,
      title: 'Community-Focused Engineering Projects',
      conference: 'Regional Engineering Forum',
      date: 'January 2024',
      location: 'Sydney, Australia',
      description: 'Shared experiences from volunteer work and community infrastructure initiatives',
      topics: ['Community', 'Volunteer Work', 'Social Impact'],
      materials: 'Presentation Recording',
    },
  ];

  return (
    <section id="presentations" className="section-padding bg-card/50">
      <div className="container">
        <h2 className="section-title">Conference Presentations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {presentations.map((presentation) => (
            <Card
              key={presentation.id}
              className="overflow-hidden bg-card border border-border hover:border-accent/50 transition-colors group"
            >
              {/* Header with icon */}
              <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <FileText size={24} className="text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Presented
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{presentation.title}</h3>
                <p className="text-sm text-accent font-semibold">{presentation.conference}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date and Location */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{presentation.date}</span>
                  </div>
                  <span>•</span>
                  <span>{presentation.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">{presentation.description}</p>

                {/* Topics */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {presentation.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Materials Link */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    {presentation.materials}
                  </span>
                  <ExternalLink size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Presentations Summary */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20">
          <h3 className="text-xl font-bold text-foreground mb-4">Speaking Experience</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I have actively participated in national and regional engineering conferences, sharing insights on sustainable 
            infrastructure design, digital tools in civil engineering, and community-focused engineering projects. These 
            presentations reflect my commitment to continuous learning and contributing to the engineering community.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My presentations focus on practical applications of engineering principles, innovative solutions to real-world 
            challenges, and the importance of integrating technology and community perspectives in engineering projects.
          </p>
        </Card>
      </div>
    </section>
  );
}
