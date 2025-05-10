import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Printer } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import ArcadeButton from '../components/ArcadeButton';

const ResumePage: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/resumeCV.pdf';
    link.download = 'Raven_Ampere_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageTransition>
      <div className="py-8">
        <SectionTitle centered>RESUME</SectionTitle>
        
        <div className="max-w-3xl mx-auto mb-8 flex gap-4 justify-center">
          <ArcadeButton 
            onClick={handleDownload}
            color="blue"
            className="flex items-center"
          >
            <FileDown size={16} className="mr-2" />
            DOWNLOAD CV
          </ArcadeButton>
        </div>
        
        <div className="print:bg-white print:text-black">
          <motion.div 
            className="bg-white text-black border-4 border-[#e7372c] max-w-3xl mx-auto p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="border-b-2 border-black pb-4 mb-6">
              <h2 className="text-2xl font-bold mb-2">RAVEN P. AMPERE</h2>
              <div className="flex flex-wrap gap-2 text-xs">
                <span>ravenampere0123@gmail.com</span>
                <span>•</span>
                <span>09924313554</span>
                <span>•</span>
                <span>Las Piñas City, Philippines</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">PERSONAL DATA</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Date of Birth:</strong> December 7, 2003</p>
                  <p><strong>Place of Birth:</strong> Las Pinas Doctors</p>
                  <p><strong>Religion:</strong> Iglesia Ni Cristo</p>
                </div>
                <div>
                  <p><strong>Citizenship:</strong> Filipino</p>
                  <p><strong>Civil Status:</strong> Single</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">EDUCATION</h3>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h4 className="text-sm font-bold">Bachelor of Science in Computer Science</h4>
                  <span className="text-xs">2022-2026</span>
                </div>
                <h5 className="text-sm">Cavite State University</h5>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h4 className="text-sm font-bold">Senior High School Diploma</h4>
                  <span className="text-xs">2020-2022</span>
                </div>
                <h5 className="text-sm">AMA Las Piñas</h5>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h4 className="text-sm font-bold">Junior High School Diploma</h4>
                  <span className="text-xs">2016-2020</span>
                </div>
                <h5 className="text-sm">Lydia Aguilar National High School</h5>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">EXPERIENCE</h3>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h4 className="text-sm font-bold">Freelance Full Stack Developer</h4>
                  <span className="text-xs">January 2024 - Present</span>
                </div>
                <h5 className="text-sm mb-2">Self-Employed</h5>
                <ul className="text-xs list-disc pl-4 space-y-1">
                  <li>Developed and maintained full stack web applications for various clients</li>
                  <li>Collaborated with clients to gather requirements and provide effective technical solutions</li>
                  <li>Utilized technologies such as HTML, CSS, JavaScript, PHP, MongoDB</li>
                  <li>Delivered projects within deadlines and ensured high quality and functionality</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">SKILLS</h3>
              
              <ul className="text-sm list-disc pl-4 space-y-2">
                <li><strong>Programming Languages:</strong> JavaScript, HTML, CSS, PHP, Java</li>
                <li>Strong problem-solving and analytical skills</li>
                <li>Excellent communication and teamwork abilities</li>
                <li>Customer service</li>
                <li>Time Management</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ResumePage;