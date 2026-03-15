import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable section heading component.
 *
 * @param {string}  label       - Small uppercase label above the title
 * @param {string}  title       - Main bold heading
 * @param {string}  titleAccent - Optional word rendered in accent color
 * @param {string}  subtitle    - Optional muted description
 * @param {boolean} centered    - Center-align all text and the accent bar
 * @param {string}  className   - Extra wrapper classes (default: "mb-12")
 */
const SectionTitle = ({ label, title, titleAccent, subtitle, centered = false, className = 'mb-12' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6 }}
    className={`${className} ${centered ? 'text-center flex flex-col items-center' : ''}`}
  >
    {label && (
      <span className="text-text-muted text-sm font-bold tracking-wider uppercase mb-3 block">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold mb-4">
      {title}
      {titleAccent && <span className="text-accent"> {titleAccent}</span>}
    </h2>
    <div className={`w-20 h-1 bg-accent rounded-full mb-4 ${centered ? 'mx-auto' : ''}`} />
    {subtitle && (
      <p className={`text-text-muted text-lg leading-relaxed ${centered ? 'max-w-xl mx-auto' : 'max-w-xl'}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionTitle;
