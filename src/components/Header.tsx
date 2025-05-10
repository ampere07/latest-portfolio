import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { path: '/', label: 'START' },
    { path: '/about', label: 'ABOUT' },
    { path: '/skills', label: 'SKILLS' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/challenges', label: 'CHALLENGES' },
    { path: '/future-plans', label: 'FUTURE' },
    { path: '/resume', label: 'RESUME' },
    { path: '/contact', label: 'CONTACT' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black border-b-4 border-[#e7372c] relative z-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-[#fbd000] text-xl md:text-2xl flex items-center">
            <span className="transform hover:scale-110 transition duration-200">PLAYER_1</span>
            <span className="text-white ml-2 blink">_</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white hover:text-[#fbd000] arcade-btn bg-[#4166f5] border-[#fbd000]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-1 text-xs border-2 ${
                  location.pathname === item.path
                    ? 'bg-[#e7372c] text-white border-[#fbd000]'
                    : 'bg-black text-white border-[#4166f5] hover:border-[#fbd000]'
                } transition-all duration-200 hover:bg-[#4166f5]`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 bg-black border-2 border-[#fbd000] p-2">
            <ul className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 text-center ${
                      location.pathname === item.path
                        ? 'bg-[#e7372c] text-white border-2 border-[#fbd000]'
                        : 'bg-black text-white border-2 border-[#4166f5] hover:border-[#fbd000]'
                    } transition-all duration-200`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;