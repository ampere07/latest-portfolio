import React, { useState, useEffect } from 'react';
import { FaGithub, FaEnvelope, FaBars, FaTimes, FaFacebookMessenger, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Events } from 'react-scroll';

import profileImage from './assets/profile-pic.png';

// Import project images
import project1Image from './assets/projects/cafeconnect.png';
import project2Image from './assets/projects/candleshop.png';
import project3Image from './assets/projects/cinesync.jpg';
import project4Image from './assets/projects/django.png';
import project5Image from './assets/projects/enrollment.jpg';
import project6Image from './assets/projects/jump.png';
import project7Image from './assets/projects/source.png';

const projects = [
  {
    title: "Cafe Connect",
    description: "Cafe Connect is a ordering system for Cafe's",
    image: project1Image,
    github: "https://github.com/ampere07/cafeConnect"
  },
  {
    title: "Reign Co.",
    description: "Reign Co. is a web candle shop",
    image: project2Image,
    github: "https://github.com/ampere07/theacandle"
  },
  {
    title: "CineSync",
    description: "CineSync is a movie booking for cinema",
    image: project3Image,
    github: "https://github.com/ampere07/CineSynccc"
  },
  {
    title: "Web Quiz",
    description: "A simple Web quiz for django language",
    image: project4Image,
    github: "https://github.com/ampere07/group3-django-"
  },
  {
    title: "Enrollment System",
    description: "Enrollment system for cvsu",
    image: project5Image,
    github: "https://github.com/Daves03/Project"
  },
  {
    title: "Jump.io",
    description: "A jumping game just like the trex game",
    image: project6Image,
    github: "https://github.com/ampere07/Jump.IO"
  },
  {
    title: "The Source",
    description: "Simple ordering system for ingridients",
    image: project7Image,
    github: "https://github.com/ampere07/theSource"
  }
];

const skills = {
  frontend: [
    { name: "React.js", percentage: 40 },
    { name: "HTML", percentage: 50 },
    { name: "CSS", percentage: 50 },
    { name: "Django", percentage: 5 },
    { name: "Python", percentage: 5 },
    { name: "React Native", percentage: 20 }
  ],
  backend: [
    { name: "Python", percentage: 5 },
    { name: "Java", percentage: 25 },
    { name: "Laravel", percentage: 15 },
    { name: "Node.js", percentage: 20 },
    { name: "Express.js", percentage: 20 }
  ]
};

const SkillCircle = ({ skill, percentage }) => (
  <motion.div
    className="flex flex-col items-center m-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="skill-circle" style={{ '--percentage': `${percentage}%` }}>
      <span className="text-sm font-semibold">{percentage}%</span>
    </div>
    <p className="mt-2 text-sm font-medium text-slate-300">{skill}</p>
  </motion.div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 px-4 py-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-blue-500 text-xl font-bold"
          >
            Ampere
          </motion.h1>

          <button
            className="md:hidden text-slate-300 hover:text-blue-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <div className="hidden md:flex space-x-2">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => setActiveSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-slate-800 mt-4 rounded-lg overflow-hidden"
            >
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="block py-3 px-4 text-slate-300 hover:bg-slate-700 hover:text-blue-500 transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="retro-container text-center"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 object-cover"
          />
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Raven Ampere
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer
          </motion.p>

          {/* Download CV Button */}
          <motion.a
            href="./assets/CV.pdf"
            download="Raven_Ampere_CV.pdf"
            className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <div className="retro-container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Hey there! I'm a 21-year-old tech enthusiast and a 3rd-year Computer Science student
            at Cavite State University. I have a deep passion for coding and love bringing
            ideas to life through technology. When I'm not immersed in writing lines of code,
            you'll find me gaming whether it's strategizing in intense battles or exploring
            open-world adventures.

            I thrive on problem-solving, enjoy tackling challenging projects, and constantly
            push myself to learn new things. My goal? To build innovative and impactful
            systems that make a difference
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 bg-slate-800/50">
        <div className="retro-container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-500">Frontend</h3>
            <div className="flex flex-wrap justify-center">
              {skills.frontend.map((skill) => (
                <SkillCircle
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-500">Backend</h3>
            <div className="flex flex-wrap justify-center">
              {skills.backend.map((skill) => (
                <SkillCircle
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <div className="retro-container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-500">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button text-sm"
                  >
                    <FaGithub className="text-lg" /> View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Contact Section */}
       <section id="contact" className="min-h-screen py-20 bg-slate-800/50">
        <div className="retro-container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className="flex flex-col items-center space-y-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <div className="text-center space-y-3">
              <p className="text-lg text-slate-300">
                <FaEnvelope className="inline-block mr-2 text-blue-500" />
                ravenampere0123@gmail.com
              </p>
              <p className="text-lg text-slate-300">
                <FaPhone className="inline-block mr-2 text-blue-500" />
                +639924313554
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="https://www.facebook.com/RavenRav07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0084ff] hover:bg-[#0072db] transition-colors duration-300"
              >
                <FaFacebookMessenger className="text-2xl text-white" />
              </a>

            </div>

            {/* Footer */}
            <div className="w-full pt-12 mt-12 border-t border-slate-700">
              <div className="text-center">
                <p className="text-sm text-slate-400">
                  © {new Date().getFullYear()}  Raven Ampere. All rights reserved.
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Made with passion and code
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;