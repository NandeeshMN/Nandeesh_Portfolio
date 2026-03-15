import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Contact = () => {
  const { contact, lookingFor, preferredWork, strength } = portfolioData.personalInfo;
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-darker/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        {/* Section Header */}
        <SectionTitle
          label="CONTACT"
          title="Let's build"
          titleAccent="something"
          subtitle="If you have an opportunity or a project idea, I'd love to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Panel: Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col h-full bg-gradient-to-br from-white/5 to-transparent border border-black/5 dark:border-white/5"
          >
            <h3 className="text-xl font-bold text-light mb-2">Reach me directly</h3>
            <p className="text-text-muted mb-8 text-sm">
              Email is best for detailed messages. You can also connect on GitHub / LinkedIn.
            </p>

            <div className="flex space-x-4 mb-10">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-text-muted hover:text-light transition-colors border border-black/10 dark:border-white/10 hover:border-black/20 dark:border-white/20">
                <Github size={20} />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-text-muted hover:text-light transition-colors border border-black/10 dark:border-white/10 hover:border-black/20 dark:border-white/20">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${contact.email}`} className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-text-muted hover:text-light transition-colors border border-black/10 dark:border-white/10 hover:border-black/20 dark:border-white/20">
                <Mail size={20} />
              </a>
            </div>

            <div className="space-y-4 mb-8">
              {/* Email Copy Card */}
              <div className="bg-darker/50 border border-black/5 dark:border-white/5 rounded-2xl p-4 flex justify-between items-center group hover:border-black/10 dark:border-white/10 transition-colors">
                <div>
                  <p className="text-xs text-text-muted font-bold tracking-wider mb-1">EMAIL</p>
                  <p className="text-light text-sm md:text-base">{contact.email}</p>
                </div>
                <button 
                  onClick={() => handleCopy(contact.email, 'email')}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:text-light hover:bg-black/5 dark:bg-white/5 transition-colors focus:outline-none"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Phone Copy Card */}
              <div className="bg-darker/50 border border-black/5 dark:border-white/5 rounded-2xl p-4 flex justify-between items-center group hover:border-black/10 dark:border-white/10 transition-colors">
                <div>
                  <p className="text-xs text-text-muted font-bold tracking-wider mb-1">PHONE</p>
                  <p className="text-light text-sm md:text-base">{contact.phone}</p>
                </div>
                <button 
                  onClick={() => handleCopy(contact.phone, 'phone')}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:text-light hover:bg-black/5 dark:bg-white/5 transition-colors focus:outline-none"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              <a href={`mailto:${contact.email}`} className="flex items-center justify-center space-x-2 px-6 py-2.5 bg-text-main text-dark hover:bg-white font-semibold rounded-full transition-colors">
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center space-x-2 px-6 py-2.5 bg-black/5 dark:bg-white/5 text-light hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 font-semibold rounded-full transition-colors">
                <Phone size={16} />
                <span>Call</span>
              </a>
            </div>
          </motion.div>

          {/* Right Panel: What I'm looking for */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col h-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-light mb-3">What I'm looking for</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {lookingFor}
              </p>
            </div>

            <div className="space-y-4 mt-auto">
              <div className="bg-darker/30 border border-black/5 dark:border-white/5 rounded-2xl p-6">
                <p className="text-xs text-text-muted font-bold tracking-wider mb-3">PREFERRED WORK</p>
                <p className="text-light font-medium text-sm md:text-base leading-relaxed">
                  {preferredWork}
                </p>
              </div>

              <div className="bg-darker/30 border border-black/5 dark:border-white/5 rounded-2xl p-6">
                <p className="text-xs text-text-muted font-bold tracking-wider mb-3">STRENGTH</p>
                <p className="text-light font-medium text-sm md:text-base leading-relaxed">
                  {strength}
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
