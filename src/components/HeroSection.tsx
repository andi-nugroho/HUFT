
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-soft to-purple-soft bg-clip-text text-transparent">
              Andi
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A Software Developer focused on building clean and efficient solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105"
            >
              View Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-16 animate-slide-up">
          <div className="w-1 h-16 bg-gradient-to-b from-blue-soft to-purple-soft mx-auto rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
