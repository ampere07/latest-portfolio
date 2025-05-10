import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import ArcadeButton from '../components/ArcadeButton';

const ChallengesPage: React.FC = () => {
  const challenges = [
    {
      title: 'Learning Curve',
      description: 'Mastering new technologies and frameworks while keeping up with the ever-evolving tech landscape.',
      learning: 'Embraced continuous learning and developed a structured approach to acquiring new skills.',
      color: '#e7372c'
    },
    {
      title: 'Project Deadlines',
      description: 'Balancing quality with tight deadlines on complex projects with multiple stakeholders.',
      learning: 'Improved time management skills and learned to set realistic expectations and milestones.',
      color: '#4166f5'
    },
    {
      title: 'Remote Collaboration',
      description: 'Coordinating with team members across different time zones and cultural backgrounds.',
      learning: 'Enhanced communication skills and learned to use collaboration tools effectively.',
      color: '#fbd000'
    },
    {
      title: 'Work-Life Balance',
      description: 'Maintaining a healthy balance between professional commitments and personal well-being.',
      learning: 'Developed boundaries and self-care routines to prevent burnout and maintain productivity.',
      color: '#58b847'
    }
  ];
  
  const lifeSkills = [
    {
      skill: 'Adaptability',
      description: 'Learning to navigate and thrive in rapidly changing environments and situations.',
      icon: '🔄'
    },
    {
      skill: 'Resilience',
      description: 'Developing the ability to bounce back from setbacks and persevere through difficulties.',
      icon: '💪'
    },
    {
      skill: 'Critical Thinking',
      description: 'Honing the skill to analyze problems from multiple perspectives and find innovative solutions.',
      icon: '🧠'
    },
    {
      skill: 'Empathy',
      description: 'Understanding and sharing the feelings of others to build stronger relationships and teams.',
      icon: '❤️'
    }
  ];

  return (
    <PageTransition>
      <div className="py-8">
        <SectionTitle centered>CHALLENGES & LEARNINGS</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-[#fbd000] text-xl mb-6 pb-2 border-b-2 border-[#e7372c]">CHALLENGES FACED</h3>
            
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div 
                  key={challenge.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black border-2 border-[#4166f5] p-4"
                >
                  <div className="flex items-center mb-3">
                    <div 
                      className="w-4 h-4 mr-2"
                      style={{ backgroundColor: challenge.color }}
                    ></div>
                    <h4 className="text-white text-sm font-bold">{challenge.title}</h4>
                  </div>
                  <p className="text-white text-xs mb-4">{challenge.description}</p>
                  <div className="bg-[#181818] border border-[#fbd000] p-3">
                    <p className="text-[#fbd000] text-xs italic">"{challenge.learning}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-[#fbd000] text-xl mb-6 pb-2 border-b-2 border-[#4166f5]">LIFE LEARNINGS</h3>
            
            <div className="space-y-6">
              {lifeSkills.map((item, index) => (
                <motion.div 
                  key={item.skill}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-black border-2 border-[#e7372c] p-4"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <h4 className="text-white text-sm font-bold">{item.skill}</h4>
                  </div>
                  <p className="text-white text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <p className="text-white text-sm mb-4">Every challenge is an opportunity to level up!</p>
              <ArcadeButton color="green" className="mx-auto">
                LEVEL UP!
              </ArcadeButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ChallengesPage;