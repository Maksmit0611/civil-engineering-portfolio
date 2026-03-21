import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Professional Infrastructure Project',
      category: 'Infrastructure',
      role: 'Project Engineer',
      description: 'Led design and implementation of sustainable infrastructure solutions',
      challenges: 'Complex site conditions and tight project timeline',
      solutions: 'Implemented innovative design approaches and efficient project management',
      outcomes: 'Successfully delivered on time and within budget',
      image: 'placeholder-project-1',
      tags: ['CAD', 'Project Management', 'Design'],
    },
    {
      id: 2,
      title: 'Broadmeadows Community Project',
      category: 'Volunteer',
      role: 'Volunteer Engineer',
      description: 'Contributed to community infrastructure development as a volunteer',
      challenges: 'Limited resources and community coordination',
      solutions: 'Leveraged technical expertise and collaborative problem-solving',
      outcomes: 'Improved community infrastructure and gained valuable experience',
      image: 'placeholder-project-2',
      tags: ['Community', 'Volunteer', 'Civil Design'],
    },
    {
      id: 3,
      title: 'Structural Design Initiative',
      category: 'Design',
      role: 'Design Engineer',
      description: 'Developed structural solutions for complex engineering challenges',
      challenges: 'Multi-disciplinary coordination and technical constraints',
      solutions: 'Applied advanced engineering principles and innovative thinking',
      outcomes: 'Delivered robust and cost-effective solutions',
      image: 'placeholder-project-3',
      tags: ['Structural', 'Design', 'Analysis'],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden card-hover group cursor-pointer bg-card border border-border hover:border-accent/50"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <span className="text-muted-foreground text-center px-4">
                  [Image: {project.image}]
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 font-medium">{project.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Project Details */}
                <div className="space-y-2 mb-4 text-xs">
                  <div>
                    <span className="font-semibold text-foreground">Challenge: </span>
                    <span className="text-muted-foreground">{project.challenges}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Solution: </span>
                    <span className="text-muted-foreground">{project.solutions}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Outcome: </span>
                    <span className="text-muted-foreground">{project.outcomes}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
