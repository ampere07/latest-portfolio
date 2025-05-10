import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';

const SkillsPage: React.FC = () => {
  const frontendSkills = [
    { name: 'React.js', level: 40 },
    { name: 'HTML', level: 50 },
    { name: 'CSS', level: 50 },
    { name: 'Django', level: 5 },
    { name: 'Python', level: 5 },
    { name: 'React Native', level: 20 }
  ];

  const backendSkills = [
    { name: 'Python', level: 5 },
    { name: 'Java', level: 25 },
    { name: 'Laravel', level: 15 },
    { name: 'Node.js', level: 20 },
    { name: 'Express.js', level: 20 }
  ];

  const CircleProgress = ({ skill, color }: { skill: { name: string; level: number }; color: string }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (skill.level / 100) * circumference;

    return (
      <div className="relative w-28 h-28 flex flex-col items-center justify-center">
        <svg className="transform -rotate-90 w-28 h-28">
          <circle
            className="stroke-[#1a1a1a]"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="56"
            cy="56"
          />
          <motion.circle
            className={`stroke-[${color}]`}
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="56"
            cy="56"
            style={{ strokeDasharray: circumference }}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-[#fbd000] text-lg font-bold">{skill.level}%</span>
          <span className="text-white text-xs mt-1">{skill.name}</span>
        </div>
      </div>
    );
  };

  return (
    <PageTransition>
      <div className="py-8">
        <SectionTitle centered>SKILLS</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black border-2 border-[#e7372c] p-6"
          >
            <h3 className="text-[#fbd000] text-xl mb-6">FRONTEND</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {frontendSkills.map((skill) => (
                <CircleProgress key={skill.name} skill={skill} color="#e7372c" />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black border-2 border-[#4166f5] p-6"
          >
            <h3 className="text-[#fbd000] text-xl mb-6">BACKEND</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {backendSkills.map((skill) => (
                <CircleProgress key={skill.name} skill={skill} color="#4166f5" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SkillsPage;