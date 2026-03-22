import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { portfolioData } from '../data/portfolioData';
import MyProfile from "../assets/my_photo.png";

const Hero = () => {
  const { name, role, shortIntroduction, contact } = portfolioData.personalInfo;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-medium text-accent mb-4 tracking-wide">
                Hello, I'm
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter text-light">
                {name}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-text-muted font-medium mb-8">
                {role}
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-base md:text-lg text-text-muted max-w-xl mb-12 leading-relaxed">
                {shortIntroduction}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-8 py-3 bg-accent hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-accent/20 cursor-pointer"
              >
                Contact
              </Link>

              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="px-8 py-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-black/10 dark:bg-white/10 text-light font-medium rounded-full border border-black/10 dark:border-white/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                View projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center justify-center lg:justify-start gap-6 mt-12 w-full lg:w-auto"
            >
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-text-muted hover:text-light hover:bg-black/10 dark:hover:bg-black/10 dark:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-text-muted hover:text-light hover:bg-black/10 dark:hover:bg-black/10 dark:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-text-muted hover:text-light hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                title={contact.phone}
                aria-label="Call"
              >
                <Phone size={20} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-text-muted hover:text-light hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                title={contact.email}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center items-center order-1 lg:order-2 w-full"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[480px] aspect-square rounded-full p-2 border-2 border-black/10 dark:border-white/10 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-darker shadow-inner">
                <img 
                  src={MyProfile} 
                  alt={portfolioData.personalInfo.name} 
                  className="w-full h-full object-cover object-[50%_20%] rounded-full"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
