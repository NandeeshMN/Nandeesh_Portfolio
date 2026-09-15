import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';
import internImg from '../assets/intern.png';

const Experience = () => {
  const { experience } = portfolioData;
  const exp = experience[0] || {};
  const sectionRef = useRef(null);

  // Scroll tracking for horizontal storytelling on desktop
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll progression
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  // Subtle horizontal storytelling slide on desktop (details lead into image)
  const detailsTranslateX = useTransform(smoothProgress, [0.15, 0.65], [0, -15]);
  const imageTranslateX = useTransform(smoothProgress, [0.15, 0.65], [35, 0]);
  const imageScale = useTransform(smoothProgress, [0.2, 0.6], [0.96, 1]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-dark transition-colors duration-300"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle ambient lighting glows */}
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-accent/15 dark:bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-28 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section Header */}
        <SectionTitle
          label="EXPERIENCE"
          title="Hands-on Internship"
          titleAccent="Experience"
          subtitle="Real-world work experience in web development, UI improvement, bug fixing, and feature implementation."
          centered
        />

        {/* ── Two-Panel Horizontal Storytelling Layout ── */}
        <div className="mt-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* ── Left Panel: Internship Details (48% width) ── */}
          <motion.div
            style={{ x: typeof window !== 'undefined' && window.innerWidth >= 1024 ? detailsTranslateX : 0 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[48%] flex flex-col"
          >
            {/* Header / Identity */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 mb-3">
                <Briefcase size={14} />
                <span>{exp.badge || "Internship"}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-light mb-2 leading-tight">
                {exp.role}
              </h3>

              <p className="text-accent font-semibold text-lg sm:text-xl flex items-center flex-wrap gap-2 mb-3">
                <span>{exp.company}</span>
                {exp.location && (
                  <>
                    <span className="text-text-muted opacity-60">•</span>
                    <span className="text-text-muted flex items-center gap-1 text-sm font-normal">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </>
                )}
              </p>

              {/* Duration Badge */}
              <div className="inline-flex items-center gap-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-text-muted">
                <Calendar size={13} className="text-accent" />
                <span>{exp.duration}</span>
              </div>
            </div>

            {/* Responsibilities */}
            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold tracking-widest text-text-muted uppercase mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  KEY RESPONSIBILITIES & WORK
                </h4>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Impact / Deliverables */}
            {exp.impact && exp.impact.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold tracking-widest text-text-muted uppercase mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  IMPACT & HIGHLIGHTS
                </h4>
                <ul className="space-y-2.5">
                  {exp.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed">
                      <Sparkles size={16} className="text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {exp.techStack && exp.techStack.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold tracking-widest text-text-muted uppercase mb-2.5">
                  TECHNOLOGIES USED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-black/5 dark:bg-white/5 text-text-main border border-black/10 dark:border-white/10 px-3 py-1 rounded-full text-xs font-semibold hover:border-accent/40 hover:text-accent transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Horizontal Storytelling Bridge */}
            <div className="hidden lg:flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-wider pt-2 opacity-85">
              <span>Official Verification Certificate</span>
              <ArrowRight size={14} className="animate-pulse" />
            </div>
          </motion.div>

          {/* ── Right Panel: Internship Certificate Image (52% width) ── */}
          <motion.div
            style={{
              x: typeof window !== 'undefined' && window.innerWidth >= 1024 ? imageTranslateX : 0,
              scale: typeof window !== 'undefined' && window.innerWidth >= 1024 ? imageScale : 1
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="w-full lg:w-[52%] flex flex-col items-center"
          >
            {/* Certificate Display Frame */}
            <div className="w-full max-w-lg lg:max-w-none glass-panel rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl border border-black/10 dark:border-white/10 hover:shadow-accent/10 transition-shadow duration-500 relative group overflow-hidden">
              
              {/* Top Certificate Badge Row */}
              <div className="flex items-center justify-between gap-2 px-2 py-1.5 mb-3 text-xs text-text-muted border-b border-black/5 dark:border-white/5">
                <div className="flex items-center gap-1.5 font-semibold text-light">
                  <Award size={15} className="text-accent" />
                  <span>Completion Certificate</span>
                </div>
                <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-text-muted">
                  VTech Coders
                </span>
              </div>

              {/* Certificate Image - Preserving full aspect ratio without cropping */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center">
                <img
                  src={internImg}
                  alt="VTech Coders Internship Certificate - Nandeesh M N"
                  className="w-full h-auto max-h-[580px] object-contain rounded-xl sm:rounded-2xl shadow-md transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Bottom Proof Note */}
              <div className="mt-3 px-2 flex items-center justify-between text-[11px] text-text-muted">
                <span>Verified by Director, VTech Coders</span>
                <span className="text-accent font-medium">04 July 2024</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
