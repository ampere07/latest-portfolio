import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import PixelatedImage from '../components/PixelatedImage';
import cafeconnect from "../assets/projects/cafeconnect.png";
import candleshop from "../assets/projects/candleshop.png";
import cinesync from "../assets/projects/cinesync.jpg";
import django from "../assets/projects/django.png";
import enrollment from "../assets/projects/enrollment.jpg";
import thesource from "../assets/projects/source.png";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
}

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: 'Cafe Connect',
      description: 'A web application for cafe owners to manage their business and for customers to order online.',
      technologies: ['Java', 'MySQL'],
      image: cafeconnect,
      githubLink: 'https://github.com/ampere07/cafeConnect'
    },
    {
      id: 2,
      name: 'Candle Shop',
      description: 'E-commerce website for a candle shop with online payment integration and order tracking.',
      technologies: ['React', 'Node js Express', 'MongoDB'],
      image: candleshop,
      githubLink: 'https://github.com/ampere07/theacandle'
    },
    {
      id: 3,
      name: 'Cine Sync',
      description: 'Movie recommendation app that helps users discover new films based on their preferences.',
      technologies: ['PHP', 'MongoDB'],
      image: cinesync,
      githubLink: 'https://github.com/ampere07/CineSynccc'
    },
    {
      id: 4,
      name: 'Django Blog',
      description: 'A feature-rich blog platform built with Django with user authentication and comment system.',
      technologies: ['Django'],
      image: django,
      githubLink: 'https://github.com/ampere07/group3-django-'
    },
    {
      id: 5,
      name: 'Enrollment System',
      description: 'Student enrollment system for educational institutions with course management.',
      technologies: ['React', 'Larvel', 'MySQL'],
      image: enrollment,
      githubLink: 'https://github.com/Daves03/Project'
    },
    {
      id: 6,
      name: 'The Source',
      description: 'Suppiler of ingridients.',
      technologies: ['Python'],
      image: thesource,
      githubLink: 'https://github.com/ampere07/theSource'
    },
  ]);


  return (
    <PageTransition>
      <div className="py-8">
        <SectionTitle centered>PROJECTS</SectionTitle>
        
        <div className="mb-8 text-center">
          <p className="text-white text-sm mb-4">
            This is my projects
          </p>
        
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
          transition={{
            layout: { duration: 0.3, type: "spring" }
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              layout
              className="bg-black border-2 border-[#4166f5] overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <PixelatedImage 
                  src={project.image} 
                  alt={project.name}
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-[#fbd000] text-lg mb-2">{project.name}</h3>
                <p className="text-white text-xs mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-[#181818] text-xs px-2 py-1 bg-[#fbd000] border border-[#e7372c]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="arcade-btn bg-[#4166f5] border-[#fbd000] text-white flex items-center text-xs px-3 py-1"
                  >
                    <Github size={14} className="mr-1" /> CODE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;