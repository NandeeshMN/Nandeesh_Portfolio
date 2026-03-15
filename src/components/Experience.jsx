import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* Section Header */}
        <SectionTitle
          label="EXPERIENCE"
          title="Hands-on Internship"
          titleAccent="Experience"
          subtitle="Real-world work experience in web development, UI improvement, bug fixing, and feature implementation."
          centered
        />

        {/* Experience Cards */}
        <div className="flex flex-col space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full glass-panel rounded-xl p-8 md:p-12 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* ── Card Header Row ── */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                {/* Left: Icon + Title + Company */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Briefcase size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center flex-wrap gap-2 mb-0.5">
                      <h3 className="text-base md:text-lg font-bold text-light leading-tight">{exp.role}</h3>
                      {exp.badge && (
                        <span className="bg-accent/10 text-accent border border-accent/20 text-xs font-bold px-2.5 py-0.5 rounded-full">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-accent font-semibold text-sm flex items-center flex-wrap gap-1.5">
                      {exp.company}
                      {exp.location && (
                        <>
                          <span className="text-text-muted">•</span>
                          <span className="text-text-muted flex items-center gap-1 font-normal">
                            <MapPin size={11} />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                {/* Right: Duration Badge */}
                <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-text-muted whitespace-nowrap self-start sm:self-auto">
                  <Clock size={12} />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-black/5 dark:border-white/5 mb-6" />

              {/* ── Two-Column Content ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-7">

                {/* Left: Responsibilities */}
                {exp.responsibilities && (
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-text-muted uppercase mb-3 flex items-center gap-1.5">
                      <span className="font-mono">&lt;/&gt;</span> RESPONSIBILITIES
                    </p>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-text-muted text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Right: Impact */}
                {exp.impact && (
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-text-muted uppercase mb-3 flex items-center gap-1.5">
                      <span>↗</span> IMPACT
                    </p>
                    <ul className="space-y-2.5">
                      {exp.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-text-muted text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* ── Tech Stack ── */}
              {exp.techStack && exp.techStack.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-text-muted uppercase mb-2.5">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-dark/60 dark:bg-dark/80 text-text-main border border-black/10 dark:border-white/10 px-3.5 py-1 rounded-full text-xs font-semibold hover:border-accent/40 hover:text-accent transition-colors duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
