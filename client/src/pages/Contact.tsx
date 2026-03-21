import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+61 XXX XXX XXX',
      href: 'tel:+61XXXXXXXXX',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yourprofile',
      href: 'https://github.com/yourprofile',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a key={method.label} href={method.href} target="_blank" rel="noopener noreferrer">
                  <Card className="p-6 bg-card border border-border hover:border-primary/50 transition-all cursor-pointer group">
                    <Icon size={24} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold text-foreground mb-1">{method.label}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </Card>
                </a>
              );
            })}
          </div>

          <Card className="p-8 bg-card border border-border text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-6">
              Interested in discussing projects or opportunities? Reach out anytime.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.location.href = 'mailto:your.email@example.com'}
            >
              Send Email
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
