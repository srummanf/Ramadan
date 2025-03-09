import React from 'react';
import { Moon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-emerald-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Moon className="h-6 w-6 text-amber-300" />
            <span className="text-xl font-['Amiri'] font-semibold">Ramadan Kareem</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-amber-300 transition-colors duration-200 font-scheherazade">
              Home
            </Link>
            <Link to="/quran-summary" className="hover:text-amber-300 transition-colors duration-200 font-scheherazade">
              Quran Summary
            </Link>
            <Link to="/hadith" className="hover:text-amber-300 transition-colors duration-200 font-scheherazade">
              Hadith
            </Link>
            <Link to="/prayers" className="hover:text-amber-300 transition-colors duration-200 font-scheherazade">
              Prayers
            </Link>
            <Link to="/laylatul-qadr" className="hover:text-amber-300 transition-colors duration-200 font-scheherazade">
              Laylatul Qadr
            </Link>
            <Link to="/duas" className="hover:text-amber-300 transition-colors duration-200 font-scheherazade">
              Duas
            </Link>
            <Link to="/planner" className="hover:text-amber-300 transition-colors duration-200 font-scheherazade">
              Planner
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <Link 
              to="/" 
              className="block py-2 px-4 hover:bg-emerald-800 rounded transition-colors duration-200 font-scheherazade"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/quran-summary" 
              className="block py-2 px-4 hover:bg-emerald-800 rounded transition-colors duration-200 font-scheherazade"
              onClick={() => setIsMenuOpen(false)}
            >
              Quran Summary
            </Link>
            <Link 
              to="/hadith" 
              className="block py-2 px-4 hover:bg-emerald-800 rounded transition-colors duration-200 font-scheherazade"
              onClick={() => setIsMenuOpen(false)}
            >
              Hadith
            </Link>
            <Link 
              to="/prayers" 
              className="block py-2 px-4 hover:bg-emerald-800 rounded transition-colors duration-200 font-scheherazade"
              onClick={() => setIsMenuOpen(false)}
            >
              Prayers
            </Link>
            <Link 
              to="/laylatul-qadr" 
              className="block py-2 px-4 hover:bg-emerald-800 rounded transition-colors duration-200 font-scheherazade"
              onClick={() => setIsMenuOpen(false)}
            >
              Laylatul Qadr
            </Link>
            <Link 
              to="/duas" 
              className="block py-2 px-4 hover:bg-emerald-800 rounded transition-colors duration-200 font-scheherazade"
              onClick={() => setIsMenuOpen(false)}
            >
              Duas
            </Link>
            <Link 
              to="/planner" 
              className="block py-2 px-4 hover:bg-emerald-800 rounded transition-colors duration-200 font-scheherazade"
              onClick={() => setIsMenuOpen(false)}
            >
              Planner
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;