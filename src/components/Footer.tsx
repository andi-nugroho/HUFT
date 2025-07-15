
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 dark:text-gray-500">
              © 2025 Andi Nugroho. All rights reserved.
            </p>
          </div>

          <div className="flex items-center text-gray-400 dark:text-gray-500">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
