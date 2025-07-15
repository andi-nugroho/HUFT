
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "DeFi Trading Platform",
      description: "A decentralized trading platform built with Next.js and smart contracts. Features real-time price feeds, liquidity pools, and yield farming.",
      techStack: ["TypeScript", "Next.js", "Solidity", "Hardhat", "Web3.js"],
      githubUrl: "https://github.com/andi-nugroho",
      demoUrl: "https://github.com/andi-nugroho",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop"
    },
    {
      title: "NFT Marketplace",
      description: "Full-stack NFT marketplace with minting, trading, and auction features. Built with React and deployed on Ethereum network.",
      techStack: ["React", "Node.js", "MongoDB", "Ethereum", "IPFS"],
      githubUrl: "https://github.com/andi-nugroho",
      demoUrl: "https://github.com/andi-nugroho",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop"
    },
    {
      title: "Rust-based CLI Tool",
      description: "High-performance command-line tool for blockchain data analysis. Processes large datasets with optimal memory usage.",
      techStack: ["Rust", "CLI", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/andi-nugroho",
      imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=300&fit=crop"
    },
    {
      title: "Smart Contract Suite",
      description: "Collection of audited smart contracts for DeFi protocols. Includes governance, staking, and reward distribution mechanisms.",
      techStack: ["Solidity", "Hardhat", "OpenZeppelin", "Chainlink"],
      githubUrl: "https://github.com/andi-nugroho",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop"
    },
    {
      title: "Cross-chain Bridge",
      description: "Secure bridge protocol enabling asset transfers between different blockchain networks with minimal fees.",
      techStack: ["TypeScript", "Rust", "Cosmos SDK", "Ethereum"],
      githubUrl: "https://github.com/andi-nugroho",
      demoUrl: "https://github.com/andi-nugroho",
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=300&fit=crop"
    },
    {
      title: "DAO Governance Platform",
      description: "Decentralized governance platform with proposal creation, voting mechanisms, and treasury management.",
      techStack: ["Next.js", "GraphQL", "The Graph", "Aragon"],
      githubUrl: "https://github.com/andi-nugroho",
      demoUrl: "https://github.com/andi-nugroho",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-soft to-purple-soft mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work in blockchain development, DeFi protocols, and Web3 applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
