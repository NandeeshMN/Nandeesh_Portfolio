import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import LetterModal from './LetterModal';

// Import local assets
import Appreciation from "../assets/appreciation.png";
import AIML from "../assets/AI&ML.png";
import FullStack from "../assets/fullstack.png";
import Hackathon from "../assets/hackathon.png";

const Certifications = () => {
  const { achievements, technical } = portfolioData.certifications;

  // Modal state
  const [modalData, setModalData] = useState({ isOpen: false, image: '', title: '', buttonText: 'Open Full Letter' });

  const openLetter = (image, title, buttonText = 'Open Full Letter') => {
    setModalData({ isOpen: true, image, title, buttonText });
  };

  const closeLetter = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  // Map local images to the data
  const updatedAchievements = achievements.map(item => {
    if (item.title.includes("Client Appreciation")) return { ...item, image: Appreciation };
    return item;
  });

  const updatedTechnical = technical.map(cert => {
    if (cert.title.includes("AI & ML")) return { ...cert, image: AIML };
    if (cert.title.includes("Full Stack")) return { ...cert, image: FullStack };
    if (cert.title.includes("Hackfusion")) return { ...cert, image: Hackathon };
    return cert;
  });

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-start md:items-center md:text-center"
        >
          <span className="text-text-muted text-sm font-bold tracking-wider uppercase mb-3 block">
            CERTIFICATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-accent">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-accent md:mx-auto rounded-full mb-6"></div>
          <p className="text-text-muted max-w-2xl text-lg">
            Learning milestones and recognition.
          </p>
        </motion.div>

        {/* Professional Recognition Section */}
        <div className="mb-24">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-light">Professional Recognition (Client Appreciation)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {updatedAchievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openLetter(item.image, item.title, "View Full Letter")}
                className="bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2rem] overflow-hidden hover:border-black/10 dark:border-white/10 hover:shadow-2xl transition-all duration-500 flex flex-col h-full group cursor-pointer relative"
              >
                <div className="relative h-48 md:h-52 w-full overflow-hidden border-b border-black/5 dark:border-white/5 bg-darker/50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-bold bg-accent/80 px-4 py-2 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Click to view letter
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow bg-black/[0.01] dark:bg-white/[0.01]">
                  <div className="mb-6">
                    <span className="inline-block bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-5 py-2 rounded-full text-sm font-bold tracking-wide">
                      {item.badge}
                    </span>
                  </div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h4 className="text-2xl font-bold text-light leading-snug">{item.title}</h4>
                    <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-bold shrink-0">{item.year}</span>
                  </div>
                  <p className="text-text-muted text-lg font-medium">{item.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Certifications */}
        <div>
          <div className="mb-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-light">Technical Certifications & Hackathons</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {updatedTechnical.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openLetter(cert.image, cert.title, "View Certificate")}
                className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:border-black/20 dark:border-white/20 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer"
              >
                <div className="relative h-40 md:h-44 lg:h-52 w-full overflow-hidden border-b border-black/5 dark:border-white/5 bg-white">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-bold bg-accent/80 px-3 py-1.5 rounded-full backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Click to view
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <h4 className="text-lg font-bold text-light leading-tight pt-1">{cert.title}</h4>
                    <span className="bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold shrink-0">{cert.year}</span>
                  </div>
                  <p className="text-text-muted text-sm font-medium mb-4">{cert.organization}</p>
                  <p className="text-text-muted text-sm leading-relaxed mt-auto pt-4 border-t border-black/5 dark:border-white/5">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Professional Recognition Modal */}
      <LetterModal
        isOpen={modalData.isOpen}
        onClose={closeLetter}
        image={modalData.image}
        title={modalData.title}
        buttonText={modalData.buttonText}
      />
    </section>
  );
};

export default Certifications;
