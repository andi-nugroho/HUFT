
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
}

const ProjectCard = ({ title, description, techStack, githubUrl, demoUrl, imageUrl }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 hover:bg-gray-50"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
          {demoUrl && (
            <Button
              size="sm"
              className="flex-1 bg-gray-900 hover:bg-gray-800"
              onClick={() => window.open(demoUrl, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
