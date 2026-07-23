import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import {
  SiPython, SiC, SiHtml5, SiReact,
  SiNodedotjs, SiMysql, SiGithub,
  SiExpress, SiFirebase,
  SiTailwindcss, SiPostman, SiVercel,
  SiJavascript
} from 'react-icons/si';
import {
  TbBrandPython, TbBrain, TbCloud, TbMail
} from 'react-icons/tb';
import {
  FaFileAlt, FaDatabase, FaCss3Alt
} from 'react-icons/fa';

// Official VS Code SVG icon
const VsCodeIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M74.6 4.5L51.7 24.9 32.8 9.3 4.5 20.6v58.8l28.3 11.3 18.9-15.6 22.9 20.4 22.9-9.5V14L74.6 4.5zM74.6 74.1L51.1 50l23.5-24.1v48.2zM13.1 69.4V30.6l23.1 19.4-23.1 19.4z" fill="#2C9FE0" />
    <path d="M74.6 25.9L40.2 50l34.4 24.1V25.9z" fill="#1A6EB5" />
  </svg>
);

const row1 = [
  { name: 'Python', icon: <SiPython size={32} />, color: '#3776AB' },
  { name: 'C', icon: <SiC size={32} />, color: '#A8B9CC' },
  { name: 'JavaScript', icon: <SiJavascript size={32} />, color: '#F7DF1E' },
  { name: 'HTML5', icon: <SiHtml5 size={32} />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt size={32} />, color: '#1572B6' },
  { name: 'React', icon: <SiReact size={32} />, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} />, color: '#06B6D4' },
];

const row2 = [
  { name: 'Node.js', icon: <SiNodedotjs size={32} />, color: '#339933' },
  { name: 'Express.js', icon: <SiExpress size={32} />, color: '#FFFFFF' },
  { name: 'MySQL', icon: <SiMysql size={32} />, color: '#4479A1' },
  { name: 'Firebase', icon: <SiFirebase size={32} />, color: '#FFCA28' },
  { name: 'GitHub', icon: <SiGithub size={32} />, color: '#8B949E' },
  { name: 'VS Code', icon: <VsCodeIcon size={32} /> },
  { name: 'MySQL Workbench', icon: <FaDatabase size={32} />, color: '#4479A1' },
];

const row3 = [
  { name: 'Tkinter', icon: <TbBrandPython size={32} />, color: '#FFD43B' },
  { name: 'ReportLab', icon: <FaFileAlt size={32} />, color: '#E74C3C' },
  { name: 'Basic AI/ML', icon: <TbBrain size={32} />, color: '#9B59B6' },
  { name: 'Postman', icon: <SiPostman size={32} />, color: '#FF6C37' },
  { name: 'Render', icon: <TbCloud size={32} />, color: '#46A3FF' },
  { name: 'Brevo', icon: <TbMail size={32} />, color: '#00D282' },
  { name: 'Vercel', icon: <SiVercel size={32} />, color: '#FFFFFF' },
];

const MarqueeStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes marquee-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marquee-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    .animate-marquee-left {
      animation: marquee-left 30s linear infinite;
    }
    .animate-marquee-right {
      animation: marquee-right 30s linear infinite;
    }
    .animate-marquee-left:hover,
    .animate-marquee-right:hover {
      animation-play-state: paused;
    }
  `}} />
);

const MarqueeRow = ({ skills, direction = 'left' }) => {
  // Triple the skills to make sure there's enough content to scroll smoothly on large screens
  const doubledSkills = [...skills, ...skills, ...skills];
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="w-full overflow-hidden relative py-4 select-none">
      <div className={`flex w-max gap-12 px-4 ${animationClass}`}>
        {doubledSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 transition-all duration-300 group cursor-default"
          >
            {skill.color ? (
              <span style={{ color: skill.color }} className="text-3xl shrink-0 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </span>
            ) : (
              <span className="text-3xl shrink-0 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </span>
            )}
            <span className="text-base font-bold tracking-wider text-text-muted group-hover:text-light transition-colors uppercase">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <MarqueeStyles />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl mb-12">
        {/* Section Header */}
        <SectionTitle
          label="SKILLS"
          title="Tools I use to build projects"
          subtitle="A practical stack across web apps, APIs, and desktop automation."
          centered
        />
      </div>

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-4 w-full relative z-10">
        {/* Gradient overlays for fading edge effect */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-20 pointer-events-none"></div>

        <MarqueeRow skills={row1} direction="left" />
        <MarqueeRow skills={row2} direction="right" />
        <MarqueeRow skills={row3} direction="left" />
      </div>

      {/* Decorative Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 -z-10"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] -translate-y-1/2 -z-10"></div>
    </section>
  );
};

export default Skills;
