import Project3DCard from '@/components/Project3DCard';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Infrastructure Design Projects',
      role: 'Graduate Civil Engineer',
      tooltip: 'Contributed to infrastructure design and implementation. Responsibilities: Project design, technical documentation, CAD modeling, site inspections. Skills applied: AutoCAD, STAAD Pro, engineering principles.',
      bgGradient: 'from-blue-600 to-cyan-500',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663461160876/iDjPnzdgxwxftb2XBwSWdK/engineer-2_46bb7ac4.jpg',
    },
    {
      id: 2,
      title: 'Holi Celebration: Festival of Colours',
      role: 'Event Organizer & Project Lead',
      tooltip: 'Led organization of major cultural event at Victoria University. Challenges: 3-week timeline, council permissions, venue coordination. Solutions: Proactive stakeholder engagement, team collaboration. Outcomes: 106 tickets sold, 70 students attended, successful event delivery.',
      bgGradient: 'from-purple-600 to-pink-500',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663461160876/iDjPnzdgxwxftb2XBwSWdK/engineer-3_aa1a24be.jpg',
    },
    {
      id: 3,
      title: 'Transportation & Sustainable Design',
      role: 'Student Engineer & Researcher',
      tooltip: 'Academic projects in Advanced Transportation Engineering and Sustainable Design. Focus: EDCM standards, alternative bio-materials (Mycelium, Hempcrete), sustainable infrastructure solutions.',
      bgGradient: 'from-orange-600 to-red-500',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663461160876/iDjPnzdgxwxftb2XBwSWdK/bridge_b9637231.jpg',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Project3DCard key={project.id} {...project} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
