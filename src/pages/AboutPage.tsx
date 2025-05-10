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
                    <div className="h-full bg-[#e7372c] rounded-sm" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-white text-xs mb-1">INTELLIGENCE</p>
                  <div className="h-3 bg-gray-800 rounded-sm">
                    <div className="h-full bg-[#4166f5] rounded-sm" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-white text-xs mb-1">CREATIVITY</p>
                  <div className="h-3 bg-gray-800 rounded-sm">
                    <div className="h-full bg-[#fbd000] rounded-sm" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-white text-xs mb-1">AGILITY</p>
                  <div className="h-3 bg-gray-800 rounded-sm">
                    <div className="h-full bg-[#58b847] rounded-sm" style={{ width: '40%' }}></div>
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
                Hello! I'm Raven Ampere, a passionate web developer and Software developer. Im a 3rd Year 
                Computer Science student in Cavite State University.
              </p>
              <p className="text-white text-sm leading-relaxed">
              My journey started when I was around 15 to 16 years old, back when I was watching over an internet café. 
              I got curious about how desktop apps, games, etc. were made, so I made up my mind to take this course.
              </p>
            </div>

            <div className="bg-black border-2 border-[#4166f5] p-6">
              <h3 className="text-[#fbd000] text-xl mb-4">FAMILY BACKGROUND</h3>
              <p className="text-white text-sm leading-relaxed">
              I come from a not rich family, but we manage. My mother is a musician and 
              my father is a contructor. I promised myself that they would be able to see me graduate.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="border border-[#fbd000] p-2">
                  <p className="text-white text-xs">HOMETOWN</p>
                  <p className="text-[#fbd000] text-sm">Las pinas</p>
                </div>
                <div className="border border-[#fbd000] p-2">
                  <p className="text-white text-xs">EDUCATION</p>
                  <p className="text-[#fbd000] text-sm">BS COMPUTER SCIENCE</p>
                </div>
                <div className="border border-[#fbd000] p-2">
                  <p className="text-white text-xs">INTERESTS</p>
                  <p className="text-[#fbd000] text-sm">GAMING, MUSIC, CODING</p>
                </div>
                <div className="border border-[#fbd000] p-2">
                  <p className="text-white text-xs">CLASS</p>
                  <p className="text-[#fbd000] text-sm">BSCS 3-1</p>
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