import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, MapPin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden bg-[#F8FAFC] dark:bg-[#070B12] transition-colors duration-300"
    >
      {/* Subtle radial grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Soft blue accent gradient glow on the left */}
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-accent/20 dark:bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Soft lavender/purple gradient glow on the right */}
      <div className="absolute top-1/3 -right-28 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle cyan/blue tones blended into background */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-400/15 dark:bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Large soft blurred circular decorative elements */}
      {/* Top-left soft circle outline */}
      <div className="absolute -top-10 left-6 md:left-12 w-44 h-44 rounded-full border border-slate-300/40 dark:border-white/5 pointer-events-none -z-10" />

      {/* Bottom-left glossy/frosted 3D-styled sphere in portfolio blue */}
      <div className="absolute -bottom-12 -left-6 md:left-6 w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-blue-200/50 via-white/80 to-transparent dark:from-blue-950/40 dark:via-white/5 dark:to-transparent border border-white/70 dark:border-white/10 shadow-[0_20px_50px_rgba(59,130,246,0.15)] backdrop-blur-xs pointer-events-none -z-10" />

      {/* Top-right decorative < / > code symbol */}
      <div className="absolute top-10 right-10 md:right-28 text-purple-400/25 dark:text-purple-400/10 font-mono text-5xl md:text-7xl font-bold select-none pointer-events-none -z-10 tracking-widest">
        &lt;/&gt;
      </div>

      {/* Right-side decorative curly brace */}
      <div className="absolute bottom-16 right-12 md:right-32 text-purple-400/20 dark:text-purple-400/10 font-serif text-5xl md:text-6xl select-none pointer-events-none -z-10">
        &#125;
      </div>

      {/* Minimal floating academic graduation cap */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-slate-400/20 dark:text-white/5 select-none pointer-events-none -z-10 hidden sm:block">
        <GraduationCap size={44} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-left"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            My <span className="text-accent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-xl">
            My educational journey and academic milestones.
          </p>
        </motion.div>

        {/* Timeline & Card Wrapper */}
        <div className="relative max-w-5xl mx-auto py-8 sm:py-12 px-3 sm:px-8 md:px-14">
          {/* Single solid, continuous blue timeline line connecting SSLC -> PUC -> BCA -> MCA */}
          <div className="absolute inset-x-0 sm:inset-x-2 md:inset-x-4 top-0 bottom-0 pointer-events-none">
            {/* Segment 1: Left line starting at SSLC (top: 25%) drawing down to bottom */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
              style={{ transformOrigin: "top" }}
              className="absolute left-0 top-[25%] bottom-0 w-[2.5px] bg-accent shadow-[0_0_10px_rgba(59,130,246,0.6)]"
            />

            {/* Segment 2: Bottom line drawing across from left to right */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.7 }}
              style={{ transformOrigin: "left" }}
              className="absolute left-0 right-0 bottom-0 h-[2.5px] bg-accent shadow-[0_0_10px_rgba(59,130,246,0.6)]"
            />

            {/* Segment 3: Right line drawing up from bottom to MCA (top: 25%) */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 1.3 }}
              style={{ transformOrigin: "bottom" }}
              className="absolute right-0 top-[25%] bottom-0 w-[2.5px] bg-accent shadow-[0_0_10px_rgba(59,130,246,0.6)]"
            />

            {/* Glowing circular timeline nodes at each milestone */}
            {/* Node 1: SSLC (Top-Left, y = 25%) */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: [0.8, 1.3, 1], opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute top-[25%] left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10"
            >
              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-blue-400/25 animate-pulse absolute" />
              <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-blue-300/50 dark:bg-blue-400/30 flex items-center justify-center">
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-accent shadow-[0_0_10px_#3b82f6]" />
              </div>
            </motion.div>

            {/* Node 2: PUC (Bottom-Left, y = 75%) */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: [0.8, 1.3, 1], opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="absolute top-[75%] left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10"
            >
              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-blue-400/25 animate-pulse absolute" />
              <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-blue-300/50 dark:bg-blue-400/30 flex items-center justify-center">
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-accent shadow-[0_0_10px_#3b82f6]" />
              </div>
            </motion.div>

            {/* Node 3: BCA (Bottom-Right, y = 75%) */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: [0.8, 1.3, 1], opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 1.55 }}
              className="absolute top-[75%] right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10"
            >
              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-blue-400/25 animate-pulse absolute" />
              <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-blue-300/50 dark:bg-blue-400/30 flex items-center justify-center">
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-accent shadow-[0_0_10px_#3b82f6]" />
              </div>
            </motion.div>

            {/* Node 4: MCA (Top-Right, y = 25%) */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: [0.8, 1.35, 1], opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 1.9 }}
              className="absolute top-[25%] right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10"
            >
              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-blue-400/25 animate-pulse absolute" />
              <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-blue-300/50 dark:bg-blue-400/30 flex items-center justify-center">
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-accent shadow-[0_0_10px_#3b82f6]" />
              </div>
            </motion.div>
          </div>

          {/* Education 2x2 Grid (SSLC - MCA on top, PUC - BCA on bottom) */}
          <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 my-2">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full bg-white/80 dark:bg-[#0f172a]/70 backdrop-blur-xl border border-white/90 dark:border-white/10 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 md:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_rgba(59,130,246,0.12)] hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Section */}
                <div>
                  {/* Header row with Icon, Title, Badge & Year */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start space-x-2 sm:space-x-3 min-w-0">
                      {/* Accent Blue Icon Container */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl sm:rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-accent dark:text-blue-400" />
                      </div>

                      {/* Title & Badge */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center flex-wrap gap-1 sm:gap-1.5">
                          <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-800 dark:text-white leading-snug">
                            {edu.degree}
                          </h3>
                          {edu.badge && (
                            <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-bold tracking-wider uppercase bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/10 shrink-0">
                              {edu.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-accent dark:text-blue-400 mt-0.5 sm:mt-1 leading-snug">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Calendar & Year (top-right on >= 520px) */}
                    <div className="hidden min-[520px]:flex items-center space-x-1 text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs font-medium shrink-0">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 dark:text-slate-500" />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Location (and Year on < 520px) */}
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs font-medium mt-3 sm:mt-5 pt-2 sm:pt-2.5 border-t border-slate-100/80 dark:border-white/5">
                  <div className="flex items-center space-x-1 sm:space-x-1.5 min-w-0">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                    <span className="truncate">{edu.location}</span>
                  </div>
                  <div className="min-[520px]:hidden flex items-center space-x-1 shrink-0">
                    <Calendar className="w-3 h-3 text-slate-400 dark:text-slate-500 shrink-0" />
                    <span>{edu.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
