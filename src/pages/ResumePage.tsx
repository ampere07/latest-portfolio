import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Printer } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import ArcadeButton from '../components/ArcadeButton';

const ResumePage: React.FC = () => {
  const handleDownload = () => {
    // In a real implementation, this would handle the download
    alert('Resume download started!');
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
          
          <ArcadeButton 
            onClick={handlePrint}
            color="yellow"
            className="flex items-center text-black"
          >
            <Printer size={16} className="mr-2" />
            PRINT RESUME
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
              <h2 className="text-2xl font-bold mb-2">AMPERE</h2>
              <p className="text-sm mb-2">3RD YEAR STUDENT</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span>email@example.com</span>
                <span>•</span>
                <span>(123) 456-7890</span>
                <span>•</span>
                <span>New York, NY</span>
                <span>•</span>
                <span>github.com/player1</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">SUMMARY</h3>
              <p className="text-sm">
                Passionate web developer and designer with expertise in creating engaging, user-centered 
                digital experiences. Proficient in full-stack development with a focus on modern JavaScript 
                frameworks and responsive design principles.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">EXPERIENCE</h3>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h4 className="text-sm font-bold">Senior Frontend Developer</h4>
                  <span className="text-xs">2021 - Present</span>
                </div>
                <h5 className="text-sm mb-2">Tech Innovations Inc.</h5>
                <ul className="text-xs list-disc pl-4 space-y-1">
                  <li>Led the development of the company's flagship web application using React and TypeScript</li>
                  <li>Implemented responsive design principles resulting in 40% improved mobile engagement</li>
                  <li>Mentored junior developers and conducted code reviews to ensure quality standards</li>
                  <li>Collaborated with UX designers to implement pixel-perfect interfaces with optimal performance</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h4 className="text-sm font-bold">Web Developer</h4>
                  <span className="text-xs">2018 - 2021</span>
                </div>
                <h5 className="text-sm mb-2">Digital Solutions Co.</h5>
                <ul className="text-xs list-disc pl-4 space-y-1">
                  <li>Developed and maintained client websites using JavaScript, HTML5, and CSS3</li>
                  <li>Created RESTful APIs using Node.js and Express for various client projects</li>
                  <li>Optimized website performance and achieved 98+ PageSpeed scores</li>
                  <li>Implemented CI/CD pipelines for automated testing and deployment</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">EDUCATION</h3>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h4 className="text-sm font-bold">Bachelor of Science in Computer Science</h4>
                  <span className="text-xs">2014 - 2018</span>
                </div>
                <h5 className="text-sm">University of Technology</h5>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">SKILLS</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-bold mb-1">Technical Skills</h4>
                  <ul className="text-xs list-disc pl-4 space-y-1">
                    <li>JavaScript/TypeScript</li>
                    <li>React, Vue.js, Angular</li>
                    <li>Node.js, Express</li>
                    <li>HTML5, CSS3, Sass</li>
                    <li>RESTful APIs</li>
                    <li>MongoDB, PostgreSQL</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold mb-1">Soft Skills</h4>
                  <ul className="text-xs list-disc pl-4 space-y-1">
                    <li>Problem Solving</li>
                    <li>Team Leadership</li>
                    <li>Communication</li>
                    <li>Time Management</li>
                    <li>Adaptability</li>
                    <li>Critical Thinking</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">CERTIFICATIONS</h3>
              
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li>Full Stack Web Development Certification (Coding Academy, 2022)</li>
                <li>UI/UX Design Fundamentals (Design Institute, 2021)</li>
                <li>Advanced JavaScript (JS Masters, 2020)</li>
                <li>React & Redux Masterclass (React University, 2019)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ResumePage;