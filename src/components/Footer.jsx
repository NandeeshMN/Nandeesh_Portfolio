import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { contact, name } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker pt-16 pb-8 border-t border-black/5 dark:border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-heading font-bold cursor-pointer text-light inline-block mb-4"
            >
              Nandeesh M N <span className="text-accent">.</span>
            </Link>
            <p className="text-text-muted text-sm max-w-sm">
              Building practical software solutions and exploring the world of machine learning.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-black/10 dark:bg-white/10 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-black/10 dark:bg-white/10 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} {name}. All rights reserved.
          </p>

          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 hover:text-accent transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-accent/20">
              <ArrowUp size={14} className="group-hover:text-accent" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
