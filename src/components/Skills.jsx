import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import {
  SiPython, SiC, SiHtml5, SiReact,
  SiNodedotjs, SiMysql, SiGithub
} from 'react-icons/si';
import {
  TbBrandPython, TbBrain, TbLayout,
  TbFileCode, TbDatabase, TbCodeCircle2
} from 'react-icons/tb';
import {
  FaFileAlt, FaCss3Alt, FaCode, FaDatabase
} from 'react-icons/fa';
import { MdOutlineSmartToy, MdDeveloperMode } from 'react-icons/md';

// Official VS Code SVG icon
const VsCodeIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M74.6 4.5L51.7 24.9 32.8 9.3 4.5 20.6v58.8l28.3 11.3 18.9-15.6 22.9 20.4 22.9-9.5V14L74.6 4.5zM74.6 74.1L51.1 50l23.5-24.1v48.2zM13.1 69.4V30.6l23.1 19.4-23.1 19.4z" fill="#2C9FE0" />
    <path d="M74.6 25.9L40.2 50l34.4 24.1V25.9z" fill="#1A6EB5" />
  </svg>
);

const skillCategories = [
  {
    categoryName: 'Languages',
    categoryIcon: <TbCodeCircle2 size={20} />,
    skills: [
      { name: 'Python', icon: <SiPython size={32} />, color: '#3776AB', bg: 'rgba(55, 118, 171, 0.12)' },
      { name: 'C', icon: <SiC size={32} />, color: '#A8B9CC', bg: 'rgba(168, 185, 204, 0.12)' },
    ]
  },
  {
    categoryName: 'Frontend',
    categoryIcon: <TbLayout size={20} />,
    skills: [
      { name: 'HTML', icon: <SiHtml5 size={32} />, color: '#E34F26', bg: 'rgba(227, 79, 38, 0.12)' },
      { name: 'CSS', icon: <FaCss3Alt size={32} />, color: '#1572B6', bg: 'rgba(21, 114, 182, 0.12)' },
      { name: 'React', icon: <SiReact size={32} />, color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.12)' },
    ]
  },
  {
    categoryName: 'Backend',
    categoryIcon: <TbDatabase size={20} />,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs size={32} />, color: '#339933', bg: 'rgba(51, 153, 51, 0.12)' },
      { name: 'MySQL', icon: <SiMysql size={32} />, color: '#4479A1', bg: 'rgba(68, 121, 161, 0.12)' },
    ]
  },
  {
    categoryName: 'Tools',
    categoryIcon: <TbFileCode size={20} />,
    skills: [
      { name: 'GitHub', icon: <SiGithub size={32} />, color: '#8B949E', bg: 'rgba(139, 148, 158, 0.12)' },
      { name: 'VS Code', icon: <VsCodeIcon size={32} />, color: '#007ACC', bg: 'rgba(0, 122, 204, 0.12)' },
      { name: 'MySQL Workbench', icon: <FaDatabase size={32} />, color: '#4479A1', bg: 'rgba(68, 121, 161, 0.12)' },
    ]
  },
  {
    categoryName: 'Others',
    categoryIcon: <MdOutlineSmartToy size={20} />,
    skills: [
      { name: 'Tkinter', icon: <TbBrandPython size={32} />, color: '#FFD43B', bg: 'rgba(255, 212, 59, 0.12)' },
      { name: 'ReportLab', icon: <FaFileAlt size={32} />, color: '#E74C3C', bg: 'rgba(231, 76, 60, 0.12)' },
      { name: 'Basic AI/ML', icon: <TbBrain size={32} />, color: '#9B59B6', bg: 'rgba(155, 89, 182, 0.12)' },
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">

        {/* Section Header */}
        <SectionTitle
          label="SKILLS"
          title="Tools I use to build projects"
          subtitle="A practical stack across web apps, APIs, and desktop automation."
          centered
        />

        {/* Category Cards Grid — single row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-panel rounded-2xl p-6"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2 text-text-muted">
                  <span>{category.categoryIcon}</span>
                  <h3 className="text-base font-bold text-light">{category.categoryName}</h3>
                </div>
                <span className="text-xs font-bold text-text-muted bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2 py-1 rounded-full">
                  {category.skills.length}
                </span>
              </div>

              {/* Skills in this category */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ y: -3, scale: 1.05, transition: { duration: 0.2 } }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-xl cursor-default transition-all duration-200 hover:shadow-md"
                    style={{ backgroundColor: skill.bg }}
                  >
                    <span style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="text-sm font-semibold text-text-main">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Decorative Background */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>
    </section>
  );
};

export default Skills;
