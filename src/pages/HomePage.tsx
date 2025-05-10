import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TowerControl as GameController, User, Code, Award, Book, FileText, Mail } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ArcadeButton from '../components/ArcadeButton';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { path: '/about', label: 'ABOUT ME', icon: <User size={24} />, color: 'red' },
    { path: '/skills', label: 'SKILLS', icon: <Award size={24} />, color: 'blue' },
    { path: '/projects', label: 'PROJECTS', icon: <Code size={24} />, color: 'green' },
    { path: '/challenges', label: 'CHALLENGES', icon: <GameController size={24} />, color: 'yellow' },
    { path: '/future-plans', label: 'FUTURE PLANS', icon: <Book size={24} />, color: 'red' },
    { path: '/resume', label: 'RESUME', icon: <FileText size={24} />, color: 'blue' },
    { path: '/contact', label: 'CONTACT', icon: <Mail size={24} />, color: 'green' },
  ];

  return (
    <PageTransition>
      <div className="py-10">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-6xl text-[#fbd000] mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            AMPERE
          </motion.h1>
          <motion.div 
            className="h-1 w-32 bg-[#e7372c] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-white text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            3RD YEAR STUDENT
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              className="aspect-square"
            >
              <button 
                onClick={() => navigate(item.path)}
                className={`w-full h-full border-4 ${
                  item.color === 'red' ? 'bg-[#e7372c] border-[#fbd000]' :
                  item.color === 'blue' ? 'bg-[#4166f5] border-[#fbd000]' :
                  item.color === 'green' ? 'bg-[#58b847] border-[#fbd000]' :
                  'bg-[#fbd000] border-[#e7372c]'
                } flex flex-col items-center justify-center p-4 transition-all hover:shadow-[0_0_20px_rgba(251,208,0,0.5)]`}
              >
                <div className="mb-4 text-white">
                  {item.icon}
                </div>
                <span className="text-white text-sm md:text-base">{item.label}</span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <p className="text-white text-sm mb-4">START YOUR JOURNEY</p>
          <div className="flex justify-center">
            <ArcadeButton 
              color="yellow"
              onClick={() => navigate('/about')}
              className="text-black px-6 py-2"
            >
              PRESS START
            </ArcadeButton>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default HomePage;