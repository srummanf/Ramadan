import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emerald-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-['Amiri'] mb-2">Ramadan Kareem</h3>
            <p className="text-emerald-100 text-sm">
              A blessed month of reflection, prayer, and community.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-amber-300 fill-amber-300" />
              <span>in Ramadan</span>
            </div>
            <p className="text-emerald-100 text-sm">
              &copy; {currentYear} Ramadan Kareem. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;