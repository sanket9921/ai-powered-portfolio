'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AboutMeCard from './AboutMeCard';
import { FaBriefcase, FaChartLine, FaGithub, FaLinkedin, FaPlay, FaRegSmile, FaSmile, FaSmileBeam, FaTwitter } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiMongodb } from 'react-icons/si';
import { FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

import { FaBandage } from 'react-icons/fa6';
import HeroBackground from './HeroBackground';

const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [openSection, setOpenSection] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) setActiveSection(id);
          }
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
      sectionRefs.current[id] = el;
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };
  const skills = [
    { label: 'Web Development', level: 9 },
    { label: 'Android Development', level: 7 },
    { label: 'Full Stack Development', level: 8 },
    { label: 'AI-Powered Applications', level: 8 },

  ];
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay between each child
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">

      {/* 🚩 Left Side Dot Navigation */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {sections.map((sectionId) => (
          <button
            key={sectionId}
            onClick={() => scrollTo(sectionId)}
            className={`w-3 h-3 rounded-full border-2 relative group transition-transform duration-200 ${activeSection === sectionId
              ? 'bg-[var(--color-primary)] border-[var(--color-primary)] scale-125'
              : 'border-gray-400'
              } hover:scale-125`}
            aria-label={`Go to ${sectionId}`}
          >
            {/* Tooltip on hover */}
            <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[var(--color-primary)] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 z-50">
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </span>
          </button>
        ))}
      </div>

      {/* ✅ Hero Section */}
      {/* <div className="absolute inset-0 -z-10 animate-gradient-x" /> */}


      <section
        id="hero"
        className="relative hero-blob-bg snap-start min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />



        <div className="absolute top-40 right-20 z-30">
          <button
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative w-[140px] h-[140px] rounded-full flex items-center justify-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-[100px] h-[100px] rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] dark:text-[var(--color-primary)] flex items-center justify-center text-base font-semibold z-10 shadow-md bg-transparent backdrop-blur-sm">
              Projects
            </div>


            {/* Circular Text SVG */}
            <svg
              className="absolute inset-0 w-full h-full group-hover:rotate-180 transition-transform duration-1000"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50,50 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                />
              </defs>
              <text
                fill="currentColor"
                className="text-[8.5px] tracking-[2px] uppercase text-[var(--color-primary)] dark:text-[var(--color-primary)] font-semibold"
              >
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  MY PROJECTS • MY PROJECTS • MY PROJECTS •
                </textPath>
              </text>
            </svg>
          </button>
        </div>






        <motion.div
          className="w-6xl flex flex-col-reverse md:flex-row items-center   z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Text Section */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800 dark:text-white">
              Hi, I’m
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none">
              Sanket <span className="text-[var(--color-primary)] dark:text-orange-400">Gaikwad</span>
            </h2>
            <h2 className="text-xl md:text-2xl mt-4 text-gray-700 dark:text-gray-300 font-medium">
              Full Stack Developer · AI Enthusiast · Innovator
            </h2>
            <div className="mt-6 flex flex-col md:flex-row gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>⚡ React · Node.js · Python</span>
              <span>🌐 Clean UI · Scalable Code</span>
            </div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-6 justify-center md:justify-start text-2xl mt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition animate-pulse">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition animate-pulse">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition animate-pulse">
                <FaTwitter />
              </a>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <a
                href="/Sanket_Gaikwad_Resume.pdf"
                download
                className="px-6 py-3 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition"
              >
                Download Resume
              </a>
              <button
                onClick={scrollToAbout}
                className="px-6 py-3 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary)] transition text-white"
              >
                Start Exploring
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative flex-1 flex justify-end items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background card - rotated */}
            <div
              className="absolute w-[380px] h-[465px] rotate-[8deg] z-0 shadow-xl"
              style={{ backgroundColor: '#ffb38a' }}
            />

            {/* Background card - straight */}
            <div
              className="absolute w-[380px] h-[465px] right-0 bottom-0 z-10"
              style={{ backgroundColor: '#ff7e26' }}
            />


            {/* Foreground image */}
            <img
              src="/sanket_photo.png"
              alt="Sanket Gaikwad"
              className="relative z-20 w-[380px] h-[460px] object-cover"
            />


            {/* Bottom Left Info */}
            <div className="absolute bottom-4 left-12 z-30 flex flex-col gap-2 text-sm text-white">
              <div className="flex items-center gap-2 px-4 py-4 rounded-[15px] bg-black/30">
                <FaBriefcase className="text-lg text-orange-400" />
                <span>3+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-4 rounded-[15px] bg-black/30">
                <FaChartLine className="text-lg text-orange-400" />
                <span>100% Success Rate</span>
              </div>
            </div>


            {/* Freelance Availability Badge - Right Outside */}
            <motion.div
              className="absolute -right-60 bottom-8 z-30 flex items-center gap-1"
              animate={{ y: [-5, 5], x: [-5, 5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              {/* Arrow pointing to image (moved slightly up using relative positioning) */}
              <div className="text-orange-500 text-3xl rotate-[-135deg] relative -top-10">➤</div>

              {/* Freelance badge with custom corner rounding */}
              <div
                className="bg-black text-white px-4 py-4 shadow-lg font-semibold whitespace-nowrap"
                style={{
                  borderTopLeftRadius: '0px',
                  borderTopRightRadius: '15px',
                  borderBottomRightRadius: '15px',
                  borderBottomLeftRadius: '15px',
                }}
              >
                Available for Freelance
              </div>
            </motion.div>


          </motion.div>



        </motion.div>

      </section>

      {/* ✅ About Preview */}
      <section
        id="about"
        className="snap-start min-h-screen flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16 gap-25"
      >
        {/* Left - Image Section */}
        <motion.div
          className="relative bottom-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-20 -right-10 z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => {
                // Add your video modal logic here
                alert('Play intro video');
              }}
              className="relative w-30 h-30 rounded-full flex items-center justify-center bg-white backdrop-blur-lg  text-[var(--color-primary)] text-3xl font-bold shadow-lg hover:scale-110 transition-transform duration-300"
            >
              <FaPlay />
              {/* Wavy Pulse Animation */}
              <span className="absolute inset-0 rounded-full border-4 border-[var(--color-primary)] animate-ping-slow" />
            </button>
          </motion.div>

          <motion.div
            className="absolute left-[-130px] top-1/2 transform -translate-y-1/2 z-30 flex items-center gap-2 px-4 py-3 rounded-[15px] bg-white dark:bg-black shadow-xl "
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FaReact className="text-blue-500 text-xl animate-spin-slow" />
            <span className="font-semibold text-sm text-gray-800 dark:text-white">
              14+ Projects Delivered
            </span>
          </motion.div>


          <div
            className="absolute w-[300px] h-[400px] md:w-[560px] md:h-[635px] bottom-0 left-20 z-0 bg-[length:40px_40px] bg-[center] bg-grid-light dark:bg-grid-dark"
          />

          {/* Background card - rotated */}
          <div
            className="absolute w-[300px] h-[400px] md:w-[560px] md:h-[565px] bottom-0 rotate-[6deg] z-5 shadow-xl"
            style={{ backgroundColor: '#ffb38a' }}
          />

          {/* Background card - straight */}
          <div
            className="absolute w-[300px]  h-[400px] md:w-[560px] md:h-[565px] right-0 bottom-0 z-10"
            style={{ backgroundColor: '#ff7e26' }}
          />

          {/* Foreground image */}
          <img
            src="/sanket_photo2.png"
            alt="Sanket Gaikwad"
            className="relative z-20 w-[300px] md:w-[560px] h-[420px] md:h-[680px] object-cover scale-x-[-1]"
          />
        </motion.div>

        {/* Right - Typing Content */}
        <motion.div
          className="flex-1 text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold mb-4 text-[var(--color-primary)]">About Me</h1>

          <h2 className="text-3xl font-medium mb-6">
            <Typewriter
              words={[
                "I love building scalable full-stack apps.",
                "I enjoy turning ideas into clean UIs.",
                "Passionate about AI and automation.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-2xl leading-relaxed">
            I'm Sanket, a full-stack developer who thrives on building elegant frontend and robust backend systems. With a keen eye for design and a problem-solving mindset, I transform challenges into beautiful, functional software.
          </p>
          <button
            className="px-6 py-2 my-5 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition"
          >
            Know More
          </button>
        </motion.div>
      </section>

      {/* ✅ Skills Preview */}
      <section
        id="skills"
        className="snap-start min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Headline */}
          <motion.div
            className="flex flex-col justify-center items-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] font-extrabold leading-tight drop-shadow-md uppercase tracking-tight text-gray-900 dark:text-white">
              Technologies <span className="text-[var(--color-primary)] dark:text-[var(--color-primary)]">That Power</span> My Creative <span className="text-[var(--color-primary)] dark:text-[var(--color-primary)]">Code</span>
            </h2>
          </motion.div>



          {/* Right - Skill Categories with Level */}
          <motion.div
            className="flex flex-col justify-center gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={item}
                transition={{ duration: 0.6 }}
                className="flex items-center rounded-lg px-6 py-5 shadow-md bg-white dark:bg-gray-800 text-lg font-medium"
              >
                {/* Skill Level - 3/12 */}
                <div className="w-3/12 p-4 flex justify-end text-right text-6xl md:text-3xl font-semibold">
                  <span className="font-bold text-4xl text-black dark:text-white">
                    {skill.level}
                  </span>
                  <span className='text-sm mt-4'>/10</span>
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-20 bg-gray-300 dark:bg-gray-600" />
                <div className="w-4/12" />

                {/* Skill Label - 9/12 */}
                <div className="w-5/12 pl-4 py-4 flex justify-end text-right text-2xl md:text-3xl font-semibold text-black dark:text-white">
                  {skill.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ✅ Projects Preview */}
      <section
        id="projects"
        className="snap-start min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16"
      >
        <motion.div
          className="max-w-6xl w-full text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Some of the real-world problems I’ve solved through code.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Mock Test Platform</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">AI-enabled test system for campus prep.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Job Portal (TPO)</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Multi-role job portal for colleges & companies.</p>
            </div>
          </div>

          <button
            className="px-6 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition"
          >
            Know More
          </button>
        </motion.div>
      </section>

      {/* ✅ Contact Preview */}
      <section
        id="contact"
        className="snap-start min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black text-gray-800 dark:text-white px-6 py-16"
      >
        <motion.div
          className="max-w-3xl w-full text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            Contact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Have an idea or project in mind? Let’s connect and build something impactful.
          </p>

          <div className="flex justify-center gap-6 text-2xl mb-8">
            <a href="mailto:sanket@example.com" className="hover:text-indigo-500 transition" title="Email">
              <FaEnvelope />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" className="hover:text-indigo-500 transition" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/your-github" target="_blank" className="hover:text-indigo-500 transition" title="GitHub">
              <FaGithub />
            </a>
          </div>

          <button
            className="px-6 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition"
          >
            Know More
          </button>
        </motion.div>
      </section>

      {/* 🎯 Overlay Component */}
      {openSection === 'about' && (
        <div className="fixed inset-0 z-[60] bg-white p-6 overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            onClick={() => setOpenSection(null)}
          >
            ✕ Close
          </button>
          <AboutMeCard />
        </div>
      )}
    </div>
  );
}
