import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import PixelatedImage from '../components/PixelatedImage';

const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="py-8">
        <SectionTitle centered>ABOUT ME</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PixelatedImage 
              src="/assets/profile-pic.png" 
              alt="Profile"
              className="mb-6"
            />
            
            <div className="bg-black border-2 border-[#4166f5] p-4">
              <h3 className="text-[#fbd000] text-xl mb-4">CHARACTER STATS</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-white text-xs mb-1">STRENGTH</p>
                  <div className="h-3 bg-gray-800 rounded-sm">
                    <div className="h-full bg-[#e7372c] rounded-sm" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-white text-xs mb-1">INTELLIGENCE</p>
                  <div className="h-3 bg-gray-800 rounded-sm">
                    <div className="h-full bg-[#4166f5] rounded-sm" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-white text-xs mb-1">CREATIVITY</p>
                  <div className="h-3 bg-gray-800 rounded-sm">
                    <div className="h-full bg-[#fbd000] rounded-sm" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-white text-xs mb-1">AGILITY</p>
                  <div className="h-3 bg-gray-800 rounded-sm">
                    <div className="h-full bg-[#58b847] rounded-sm" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-black border-2 border-[#e7372c] p-6 mb-6">
              <h3 className="text-[#fbd000] text-xl mb-4">PLAYER PROFILE</h3>
              <p className="text-white text-sm leading-relaxed mb-4">
                Hello! I'm PLAYER_1, a passionate web developer and designer with a love for creating 
                interactive and visually appealing digital experiences. With a background in computer science 
                and a keen eye for design, I blend technical expertise with creative problem-solving.
              </p>
              <p className="text-white text-sm leading-relaxed">
                My journey in tech began when I was just 12 years old, tinkering with HTML and CSS to create 
                my first website. Since then, I've evolved into a full-stack developer with expertise in 
                modern frameworks and a passion for user-centered design.
              </p>
            </div>

            <div className="bg-black border-2 border-[#4166f5] p-6">
              <h3 className="text-[#fbd000] text-xl mb-4">FAMILY BACKGROUND</h3>
              <p className="text-white text-sm leading-relaxed">
                I grew up in a family that valued education and creativity. My father, an engineer, 
                introduced me to the world of computers, while my mother, an artist, nurtured my creative 
                side. Their influence has shaped my approach to problem-solving, combining logical thinking 
                with creative expression.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="border border-[#fbd000] p-2">
                  <p className="text-white text-xs">HOMETOWN</p>
                  <p className="text-[#fbd000] text-sm">NEW YORK</p>
                </div>
                <div className="border border-[#fbd000] p-2">
                  <p className="text-white text-xs">EDUCATION</p>
                  <p className="text-[#fbd000] text-sm">BS COMPUTER SCIENCE</p>
                </div>
                <div className="border border-[#fbd000] p-2">
                  <p className="text-white text-xs">INTERESTS</p>
                  <p className="text-[#fbd000] text-sm">GAMING, MUSIC, ART</p>
                </div>
                <div className="border border-[#fbd000] p-2">
                  <p className="text-white text-xs">CLASS</p>
                  <p className="text-[#fbd000] text-sm">DEVELOPER WIZARD</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;