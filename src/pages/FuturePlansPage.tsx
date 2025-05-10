import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Award, Briefcase, GraduationCap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';

const FuturePlansPage: React.FC = () => {
  const careerPlans = [
    {
      title: 'Senior Developer',
      timeline: '1-2 Years',
      description: 'Advance to a senior role with leadership responsibilities and mentoring junior developers.',
      icon: <Briefcase size={24} />,
      color: '#e7372c'
    },
    {
      title: 'Tech Lead',
      timeline: '3-5 Years',
      description: 'Lead a development team and make key architectural decisions for major projects.',
      icon: <Target size={24} />,
      color: '#4166f5'
    },
    {
      title: 'CTO / Tech Director',
      timeline: '7-10 Years',
      description: 'Drive technical strategy and innovation at the executive level for an organization.',
      icon: <Rocket size={24} />,
      color: '#fbd000'
    }
  ];

  const educationPlans = [
    {
      title: 'Master\'s Degree in CS',
      timeline: '2-3 Years',
      description: 'Pursue an advanced degree focusing on AI and machine learning.',
      icon: <GraduationCap size={24} />,
      color: '#58b847'
    },
    {
      title: 'Technical Certifications',
      timeline: 'Ongoing',
      description: 'Acquire specialized certifications in cloud architecture, security, and emerging technologies.',
      icon: <Award size={24} />,
      color: '#e7372c'
    }
  ];

  const personalGoals = [
    {
      title: 'Launch SaaS Product',
      description: 'Develop and launch my own software as a service product to solve real-world problems.',
      timeline: '2-3 Years'
    },
    {
      title: 'Tech Community Contribution',
      description: 'Become an active contributor to open-source projects and speak at tech conferences.',
      timeline: '1-5 Years'
    },
    {
      title: 'Work-Life Balance',
      description: 'Maintain a healthy balance between career growth and personal well-being.',
      timeline: 'Ongoing'
    }
  ];

  return (
    <PageTransition>
      <div className="py-8">
        <SectionTitle centered>FUTURE PLANS</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-[#fbd000] text-xl mb-6">CAREER ROADMAP</h3>
            
            <div className="relative border-l-4 border-[#4166f5] pl-6 ml-3 space-y-8">
              {careerPlans.map((plan, index) => (
                <motion.div 
                  key={plan.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="absolute -left-4" style={{ top: `${index * 160 + 16}px` }}>
                    <div 
                      className="w-8 h-8 flex items-center justify-center border-2 border-[#fbd000]"
                      style={{ backgroundColor: plan.color }}
                    >
                      {plan.icon}
                    </div>
                  </div>
                  
                  <div className="bg-black border-2 border-[#e7372c] p-4">
                    <h4 className="text-white text-sm font-bold mb-1">{plan.title}</h4>
                    <p className="text-[#fbd000] text-xs mb-3">Timeline: {plan.timeline}</p>
                    <p className="text-white text-xs">{plan.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-[#fbd000] text-xl mb-6">EDUCATION GOALS</h3>
              
              <div className="relative border-l-4 border-[#e7372c] pl-6 ml-3 space-y-8">
                {educationPlans.map((plan, index) => (
                  <motion.div 
                    key={plan.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                  >
                    <div className="absolute -left-4" style={{ top: `${index * 160 + 16}px` }}>
                      <div 
                        className="w-8 h-8 flex items-center justify-center border-2 border-[#fbd000]"
                        style={{ backgroundColor: plan.color }}
                      >
                        {plan.icon}
                      </div>
                    </div>
                    
                    <div className="bg-black border-2 border-[#4166f5] p-4">
                      <h4 className="text-white text-sm font-bold mb-1">{plan.title}</h4>
                      <p className="text-[#fbd000] text-xs mb-3">Timeline: {plan.timeline}</p>
                      <p className="text-white text-xs">{plan.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-[#fbd000] text-xl mb-6">PERSONAL MISSIONS</h3>
              
              <div className="bg-black border-2 border-[#fbd000] p-4">
                <ul className="space-y-4">
                  {personalGoals.map((goal, index) => (
                    <motion.li 
                      key={goal.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="border-b border-[#4166f5] pb-4 last:border-b-0 last:pb-0"
                    >
                      <h4 className="text-white text-sm font-bold mb-1">{goal.title}</h4>
                      <p className="text-[#fbd000] text-xs mb-2">Timeline: {goal.timeline}</p>
                      <p className="text-white text-xs">{goal.description}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="bg-black border-2 border-[#e7372c] p-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-[#fbd000] text-xl mb-4">THE ULTIMATE MISSION</h3>
          <p className="text-white text-sm leading-relaxed max-w-2xl mx-auto">
            My ultimate goal is to create technology that makes a positive impact on people's lives while 
            continuing to grow both professionally and personally. I believe in continuous learning and 
            adapting to new challenges and opportunities in this ever-evolving digital landscape.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default FuturePlansPage;