
const AboutSection = () => {
  const technologies = {
    frontend: ['TypeScript', 'JavaScript', 'React', 'Next.js'],
    backend: ['Node.js', 'Python', 'Rust'],
    web3AndTools: ['Blockchain', 'Web3', 'Smart Contracts', 'DeFi', 'Hardhat']
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-soft to-purple-soft mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Software Developer dedicated to crafting innovative solutions in the Blockchain space.
              Leveraging languages like TypeScript, Rust, Python and frameworks such as Hardhat & Next.js,
              I'm passionate about Web3's potential and thrive on complex challenges.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Open to collaboration and new opportunities to build the decentralized future. Let's connect!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Technologies I work with:
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Frontend</h4>
                <div className="space-y-3">
                  {technologies.frontend.map((tech, index) => (
                    <div
                      key={tech}
                      className="bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Backend</h4>
                <div className="space-y-3">
                  {technologies.backend.map((tech, index) => (
                    <div
                      key={tech}
                      className="bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      style={{
                        animationDelay: `${(index + technologies.frontend.length) * 100}ms`
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Web3 & Tools</h4>
                <div className="space-y-3">
                  {technologies.web3AndTools.map((tech, index) => (
                    <div
                      key={tech}
                      className="bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      style={{
                        animationDelay: `${(index + technologies.frontend.length + technologies.backend.length) * 100}ms`
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
