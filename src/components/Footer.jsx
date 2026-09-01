import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { contact, name } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker py-10 md:py-12 border-t border-black/5 dark:border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-4">
          {/* Left: Name + Description */}
          <div className="text-center md:text-left">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-heading font-bold cursor-pointer text-light inline-block mb-2"
            >
              Nandeesh M N <span className="text-accent">.</span>
            </Link>
            <p className="text-text-muted text-sm max-w-sm mx-auto md:mx-0">
              Building practical software solutions and exploring the world of machine learning.
            </p>
          </div>

          {/* Center: Copyright */}
          <div className="text-center text-sm text-text-muted">
            <p>
              &copy; {currentYear} {name}. All rights reserved.
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-black/10 dark:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-black/10 dark:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
