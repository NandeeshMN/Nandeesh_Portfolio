import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Import images for Car Dent Detection
import DentGui from "../assets/Dent_Gui.png";
import ImageLoaded from "../assets/image_loaded.png";
import NotDented from "../assets/Not_Dented.png";
import Dented from "../assets/Dented.png";

// Import images for Transport Management System
import Trans01 from "../assets/transport-01.png";
import Trans02 from "../assets/transport-02.png";
import Trans03 from "../assets/transport-03.png";
import Trans04 from "../assets/transport-04.png";
import Trans05 from "../assets/transport-05.png";
import Trans06 from "../assets/transport-06.png";
import Trans07 from "../assets/transport-07.png";
import Trans08 from "../assets/transport-08.png";
import Trans09 from "../assets/transport-09.png";

// Image Carousel Component for Project Cards
const ProjectCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-video overflow-hidden bg-[#0d1117] rounded-xl md:rounded-2xl border border-black/5 dark:border-white/5 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-contain"
        />
      </AnimatePresence>
      
      {/* Pagination Dots — Overlayed at bottom */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              currentIndex === index
                ? 'w-6 h-1.5 bg-accent'
                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const { projects } = portfolioData;

  // Map local images to the projects
  const updatedProjects = projects.map(project => {
    if (project.title === "Car Dent Detection") {
      return {
        ...project,
        images: [DentGui, ImageLoaded, NotDented, Dented]
      };
    }
    if (project.title === "Transport Management System") {
      return {
        ...project,
        images: [Trans01, Trans02, Trans03, Trans04, Trans05, Trans06, Trans07, Trans08, Trans09]
      };
    }
    return project;
  });

  return (
    <section id="projects" className="py-20 bg-darker/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
          <p className="text-text-muted max-w-2xl text-lg">
            Some of the projects I've worked on.
          </p>
        </motion.div>

        <div className="flex flex-col space-y-16">
          {updatedProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="glass-panel rounded-[2rem] p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
              >
                {/* Image Carousel Container — 60% width on desktop */}
                <div className={`w-full lg:w-[60%] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ProjectCarousel images={project.images} title={project.title} />
                </div>

                {/* Content Container — 40% width on desktop */}
                <div className={`w-full lg:w-[40%] flex flex-col justify-center p-2 md:p-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-accent text-sm font-bold tracking-wider uppercase mb-3 block">
                    Featured Project
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-light mb-3 leading-tight">
                    {project.title}
                  </h3>
                  
                  {project.badge && (
                    <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-4 py-1.5 rounded-full text-sm font-medium mb-6 w-max">
                      <Trophy size={16} />
                      <span>{project.badge}</span>
                    </div>
                  )}
                  
                  <p className="text-text-muted text-base leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium text-text-main bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.features && project.features.length > 0 && (
                    <ul className="space-y-1.5 mb-6">
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-text-muted">
                          <span className="w-1.5 h-1.5 bg-text-muted rounded-full mr-3 shrink-0"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-2.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 text-light font-medium rounded-full border border-black/10 dark:border-white/10 transition-colors"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                    
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-2.5 bg-accent/10 hover:bg-accent/20 text-accent font-medium rounded-full border border-accent/20 transition-colors hidden"
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
