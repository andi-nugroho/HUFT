
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Blockchain Developer",
      company: "TechCorp Solutions",
      period: "Des 2023 - Present",
      description: "Leading development of DeFi protocols and smart contracts. Architected cross-chain solutions handling $10M+ in transactions."
    },
    {
      title: "Full-Stack Developer",
      company: "Crypto Innovations",
      period: "Feb 2022 - Jun 2022",
      description: "Built scalable Web3 applications and NFT marketplaces. Collaborated with design teams to create user-friendly dApps."
    },
    {
      title: "Software Engineer",
      company: "StartupXYZ",
      period: "Mar 2024 - Present",
      description: "Developed REST APIs and microservices. Implemented CI/CD pipelines and improved system performance by 40%."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      institution: "Muhammadiyah University of Cirebon",
      period: "2023 - 2027"
    }
  ];

  const certifications = [
    "Certified Ethereum Developer Degree",
    "Software Engineer Intern",
    "Rest API (Intermediate)",
    "Problem Solving"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience & Background
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-soft to-purple-soft mx-auto rounded-full mb-6"></div>
          <Button
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2"
            onClick={() => {
              // Handle resume download
              console.log('Download resume clicked');
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-blue-soft mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="relative pl-8 border-l-2 border-gray-200 last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-soft rounded-full"></div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <span className="text-blue-soft font-medium">{exp.company}</span>
                      <span className="text-gray-500 text-sm">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-purple-soft mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>

              {education.map((edu) => (
                <div key={edu.degree} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                  <p className="text-purple-soft font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-purple-soft mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Certifications</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-800">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
