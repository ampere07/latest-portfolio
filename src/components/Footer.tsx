import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t-4 border-[#e7372c] py-6 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-[#fbd000] text-xl mb-4">AMPERE</h3>
            <p className="text-white text-xs leading-relaxed">
              Personal portfolio<br />
              
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-[#fbd000] text-xl mb-4">QUICK LINKS</h3>
            <ul className="text-white text-xs space-y-2">
              <li className="hover:text-[#4166f5] transition">
                <a href="/projects">PROJECTS</a>
              </li>
              <li className="hover:text-[#4166f5] transition">
                <a href="/skills">SKILLS</a>
              </li>
              <li className="hover:text-[#4166f5] transition">
                <a href="/resume">RESUME</a>
              </li>
              <li className="hover:text-[#4166f5] transition">
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-[#fbd000] text-xl mb-4">CONNECT</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-white hover:text-[#4166f5] transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-[#4166f5] transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-[#4166f5] transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-[#4166f5] transition">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-[#4166f5] text-center">
          <p className="text-white text-xs">
            &copy; {new Date().getFullYear()} AMPERE. ALL RIGHTS RESERVED.
          </p>
          <div className="mt-2 pixelated">
            <span className="inline-block w-4 h-4 bg-[#e7372c] mx-1"></span>
            <span className="inline-block w-4 h-4 bg-[#4166f5] mx-1"></span>
            <span className="inline-block w-4 h-4 bg-[#fbd000] mx-1"></span>
            <span className="inline-block w-4 h-4 bg-[#58b847] mx-1"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;