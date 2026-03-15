import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { shortIntroduction } = portfolioData.personalInfo;

  return (
    <section id="about" className="py-20 bg-darker/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-lg text-text-muted leading-relaxed text-justify">
              Hello! I'm <span className="text-light font-medium">Nandeesh MN</span>, a motivated MCA student from Chetan Business School. My journey in technology is driven by a strong passion for Python development, web technologies, and machine learning.
            </p>
            <p className="text-lg text-text-muted leading-relaxed text-justify">
              I like working on practical projects that help me understand how technology can solve real-world problems. I have experience working with technologies such as Python, HTML, CSS, JavaScript, and basic database concepts. These skills help me develop simple and user-friendly applications.
            </p>
            <p className="text-lg text-text-muted leading-relaxed text-justify">
              My goal is to grow as a developer and contribute to innovative projects that create meaningful impact.
            </p>
          </motion.div>

          {/* Stats/Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center transition-transform hover:-translate-y-2 duration-300">
              <h3 className="text-4xl font-bold text-accent mb-2">2</h3>
              <p className="text-sm text-text-muted uppercase tracking-wider font-medium">Core Projects</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center transition-transform hover:-translate-y-2 duration-300">
              <h3 className="text-4xl font-bold text-accent mb-2">3</h3>
              <p className="text-sm text-text-muted uppercase tracking-wider font-medium">Focus Areas</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center transition-transform hover:-translate-y-2 duration-300 col-span-1 sm:col-span-2">
              <h3 className="text-xl font-bold text-light mb-4">Current Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-text-muted">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Advanced Python Development
                </li>
                <li className="flex items-center text-text-muted">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Machine Learning & Computer Vision
                </li>
                <li className="flex items-center text-text-muted">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Web Development
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
