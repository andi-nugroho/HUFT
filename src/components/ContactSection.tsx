
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:dev.andinugroho@gmail.com',
      label: 'dev.andinugroho@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/andi-nugroho',
      label: '@andi-nugroho',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/andiinugroho',
      label: 'in/andiinugroho',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-soft to-purple-soft mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to chat about technology, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300 mb-4`}>
                  <IconComponent className={`h-6 w-6 text-gray-600 ${link.color} transition-colors duration-300`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{link.name}</h3>
                <p className="text-gray-600 text-sm">{link.label}</p>
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <MessageCircle className="h-12 w-12 text-blue-soft mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-soft to-purple-soft hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 font-medium"
              onClick={() => window.open('mailto:dev.andinugroho@gmail.com', '_blank')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
