import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default assuming dark

  useEffect(() => {
    // Initial theme check
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darker/90 backdrop-blur-md shadow-sm border-b border-black/5 dark:border-white/5 py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-heading font-bold cursor-pointer text-light"
        >
          <span className="text-accent"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-accent"
              className="text-sm font-medium text-text-muted hover:text-light transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 ml-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-text-muted hover:text-light hover:bg-black/10 dark:hover:bg-black/10 dark:bg-white/10 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Actions */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-black/10 dark:border-white/10 text-text-muted hover:text-light transition-colors focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-light focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-darker/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
          }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-accent"
              className="text-base font-medium text-text-muted hover:text-light transition-colors cursor-pointer block py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
