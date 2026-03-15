import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-darker/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
              
              <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6 group-hover:border-accent/50 transition-colors">
                <GraduationCap size={28} className="text-accent" />
              </div>
              
              <h3 className="text-xl font-bold text-light mb-2">{edu.degree}</h3>
              <h4 className="text-text-muted font-medium mb-6">{edu.institution}</h4>
              
              <div className="mt-auto inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-medium">
                {edu.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
