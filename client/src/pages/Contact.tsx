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
      bgColor: 'from-red-500 to-pink-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
      bgColor: 'from-blue-600 to-blue-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+61 XXX XXX XXX',
      href: 'tel:+61XXXXXXXXX',
      bgColor: 'from-green-500 to-emerald-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yourprofile',
      href: 'https://github.com/yourprofile',
      bgColor: 'from-slate-700 to-slate-900',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-slate-100 to-white">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a key={method.label} href={method.href} target="_blank" rel="noopener noreferrer">
                  <Card className="overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-105 border-0 h-full">
                    <div className={`p-8 bg-gradient-to-br ${method.bgColor} text-white`}>
                      <Icon size={32} className="mb-4 drop-shadow-lg" />
                      <h4 className="text-lg font-semibold mb-1">{method.label}</h4>
                      <p className="text-sm opacity-90">
                        {method.value}
                      </p>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>

          <Card className="p-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0">
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="mb-6 opacity-90">
              Interested in discussing projects or opportunities? Reach out anytime.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-blue-50 text-blue-600 font-semibold"
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
