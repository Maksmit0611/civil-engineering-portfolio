import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Phone, MapPin, Download } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+61 XXX XXX XXX',
      href: 'tel:+61XXXXXXXXX',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Melbourne, Australia',
      href: '#',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="max-w-4xl mx-auto">
          {/* Contact Introduction */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm always interested in hearing about new opportunities, collaborations, and projects. 
              Whether you have a question or just want to say hello, feel free to reach out through any of the channels below.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I typically respond to inquiries within 24-48 hours and look forward to connecting with you.
            </p>
          </Card>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="group"
                >
                  <Card className="p-6 bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg h-full">
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} className="text-white" />
                    </div>

                    <h4 className="text-lg font-bold text-foreground mb-1">{method.label}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                      {method.value}
                    </p>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* Resume Download Section */}
          <Card className="p-8 bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Download My Resume</h3>
                <p className="text-muted-foreground">
                  Get a comprehensive overview of my qualifications, experience, and achievements.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 whitespace-nowrap flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </Button>
            </div>
          </Card>

          {/* Social Links */}
          <Card className="p-8 bg-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Follow My Work</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
              >
                <Linkedin size={20} />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.open('https://github.com/yourprofile', '_blank')}
              >
                <Github size={20} />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.location.href = 'mailto:your.email@example.com'}
              >
                <Mail size={20} />
                Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
