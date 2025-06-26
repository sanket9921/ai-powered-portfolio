'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AboutMeCard from './AboutMeCard';
import { FaArrowLeft, FaArrowRight, FaBriefcase, FaChartLine, FaGithub, FaLinkedin, FaPlay, FaRegSmile, FaSmile, FaSmileBeam, FaTwitter } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiMongodb } from 'react-icons/si';
import { FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

import { FaBandage } from 'react-icons/fa6';
import HeroBackground from './HeroBackground';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CursorBlob from './CursorBlob';

const sections = ['hero', 'about', `experience`, 'skills', 'projects', 'testimonials', 'contact'];

const testimonials = [
  {
    name: 'Jim Corner',
    role: 'CEO, Victionary Co.',
    quote:
      'I would like to say a big Thank you for your immense effort and support. I have a feeling our future events are going to be great as well. Good luck to the team.',
    avatar: 'sanket_photo.png',
  },
  {
    name: 'Priya Verma',
    role: 'Product Manager',
    quote:
      'Reliable, fast, and thoughtful. Sanket really understood what we needed and turned it into a beautiful frontend experience.',
    avatar: 'sanket_photo.png',
  },
  {
    name: 'Amit Sharma',
    role: 'Founder, StartupX',
    quote:
      'Working with Sanket was seamless — he delivered a high-quality full-stack app ahead of schedule. Highly recommend!',
    avatar: 'sanket_photo.png',
  },
  {
    name: 'Sara Lee',
    role: 'Tech Recruiter',
    quote:
      'Sanket’s attention to detail and ability to deliver on time stood out. The UI and performance were excellent.',
    avatar: 'sanket_photo.png',
  },
  {
    name: 'Rahul Kulkarni',
    role: 'Design Lead',
    quote:
      'One of the best freelancers I’ve collaborated with. His UI decisions are always on point.',
    avatar: 'sanket_photo.png',
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [openSection, setOpenSection] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [current, setCurrent] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  const total = testimonials.length;

  const currentTestimonial = testimonials[current];


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

  const projects = [
    {
      title: 'AI Portfolio',
      description: 'Interactive portfolio powered by AI and Next.js.',
      tech: 'Next.js, Tailwind, OpenAI',
      link: '#',
    },
    {
      title: 'Job Portal',
      description: 'Campus placement platform with full role-based access.',
      tech: 'MERN, PostgreSQL, JWT',
      link: '#',
    },
    {
      title: 'Career Guidance',
      description: 'App to help school students discover ideal.',
      tech: 'Flask, React, APScheduler',
      link: '#',
    },
    {
      title: 'Career Guidance',
      description: 'App to help school students discover ideal.',
      tech: 'Flask, React, APScheduler',
      link: '#',
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  const experiences = [
    {
      year: '2024',
      title: 'AI-Powered Portfolio Developer',
      description:
        'Built an interactive portfolio with dynamic component rendering, AI assistant integration, and responsive design using React, Tailwind, and Framer Motion.',
    },
    {
      year: '2023',
      title: 'Full-Stack Freelancer',
      description:
        'Developed and delivered full-stack web apps for startups and solo founders. Specialized in frontend UX, backend APIs, and project architecture.',
    },
    {
      year: '2022',
      title: 'Frontend Specialist (React / Next.js)',
      description:
        'Crafted accessible and high-performance UIs using React, Tailwind CSS, and Next.js for various freelance clients.',
    },
    {
      year: '2021',
      title: 'Freelance Web Developer',
      description:
        'Started my freelance journey, building static sites, admin panels, and landing pages using modern HTML/CSS/JS stacks.',
    },
  ];




  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);


  return (
    <div className="relative h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <CursorBlob />

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
        className="snap-start min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16 gap-25"
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
            className="absolute top-1/2 -right-20 z-50"
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

      {/* ✅ Experience Preview */}
      <section
        id="experience"
        className="snap-start min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Timeline (Original Version) */}
          <div className="relative border-l-2 border-orange-500 dark:border-orange-400 pl-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-3 top-1.5 w-4 h-4 rounded-full bg-orange-500 dark:bg-orange-400 border-2 border-white dark:border-black shadow-md" />
                <div className="ml-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 max-w-xl leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Title + Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-6xl font-bold mb-6 leading-tight">
              From <span className="text-[color:var(--color-primary)]">Freelancer</span> to{' '}
              <span className="text-[color:var(--color-primary)]">Full-Stack Builder</span>
            </h2>

            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              In the past 3+ years, I’ve helped founders, startups, and teams build performant, scalable web products — all while crafting clean, modern UIs backed by real-world experience.
            </p>
          </div>
        </div>
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
            <h2 className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] font-extrabold leading-tight uppercase tracking-tight text-gray-900 dark:text-white">
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
                className="flex items-center rounded-lg px-6 py-5 shadow-md bg-white dark:bg-gray-800 text-lg font-medium 
                     hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300 group"
              >
                {/* Skill Level - 3/12 */}
                <div className="w-3/12 p-4 flex justify-end text-right text-6xl md:text-3xl font-semibold">
                  <span className="font-bold text-4xl text-black dark:text-white group-hover:text-white">
                    {skill.level}
                  </span>
                  <span className="text-sm mt-4 group-hover:text-white">/10</span>
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-20 bg-gray-300 dark:bg-gray-600 group-hover:bg-white" />
                <div className="w-4/12" />

                {/* Skill Label - 9/12 */}
                <div className="w-5/12 pl-4 py-4 flex justify-end text-right text-2xl md:text-3xl font-semibold text-black dark:text-white group-hover:text-white">
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
        className="snap-start min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16"
      >
        <div
          className="relative px-6 py-16 overflow-hidden"
        >
          {/* Scroll Arrows with Horizontal Line */}
          <div className="absolute top-5 left-50  z-10 flex items-center justify-center px-6">
            {/* Arrow Buttons */}
            <div className="relative z-10 flex gap-3 px-4">
              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-orange-600 dark:text-orange-300 hover:scale-110 transition"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-orange-600 dark:text-orange-300 hover:scale-110 transition"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
            <hr />
          </div>


          {/* Scrollable Row */}
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <div className="inline-flex items-stretch gap-8 px-10 ml-50 snap-x snap-mandatory">
              {/* Fancy Header Block */}
              <motion.div
                className="w-[360px] md:w-[400px] h-[540px] flex-shrink-0 snap-center  p-6 flex flex-col  overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase tracking-tight leading-tight text-balance">
                  <span className="text-[var(--color-primary)]">Creative</span>
                  <span className="text-black dark:text-white"> Thinking </span><span className='text-[var(--color-primary)]'>Meets</span><span> Functional</span> <span className='text-[var(--color-primary)]'> Development</span>
                </h2>


                <p className="mt-4 text-base text-gray-600 dark:text-gray-400 break-words whitespace-normal overflow-hidden text-ellipsis">
                  Each project is a real-world solution — blending design, performance and innovation.
                </p>
              </motion.div>

              {/* Project Cards */}
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="w-[360px] md:w-[400px] h-[540px] flex-shrink-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 snap-center flex flex-col justify-between transition-transform duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden">
                    <h3 className="text-2xl font-bold text-orange-500 dark:text-orange-400 mb-2 break-words whitespace-normal">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 break-words whitespace-normal overflow-hidden">
                      {project.description}
                    </p>
                    <span className="text-xs px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full break-words whitespace-normal inline-block max-w-full overflow-hidden text-ellipsis">
                      {project.tech}
                    </span>
                  </div>
                  <div className="mt-4">
                    <a
                      href={project.link}
                      className="inline-block px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}

              {/* See More Button */}
              <motion.div
                className="w-[360px] md:w-[400px] h-[540px] flex-shrink-0 bg-[var(--color-primary)] text-white flex items-center justify-center  p-6 snap-center font-bold text-xl transition-transform  overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <button className="hover:scale-110 transition-transform whitespace-nowrap">
                  See More Projects →
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Testimonials Preview */}
      <section
        id="testimonials"
        className="snap-start min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16 flex items-center justify-center"
      >
        <div className="max-w-6xl w-full">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-25"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What they say about me
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Avatar Card with Quote and Arrows */}
            <motion.div
              className="w-full lg:w-1/3 flex justify-center items-center relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Arrow buttons above image, side by side */}
              <div className="absolute -top-15 flex gap-2 z-10">
                <button
                  onClick={prev}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-orange-600 dark:text-orange-300 hover:scale-110 transition shadow"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-orange-600 dark:text-orange-300 hover:scale-110 transition shadow"
                >
                  <FaArrowRight />
                </button>
              </div>

              {/* Quote box (overlapping top-right) */}
              <motion.div
                className="absolute -top-6 -right-60 bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-white text-sm italic shadow-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 max-w-xs z-50"
                key={current}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                “{testimonials[current].quote}”
              </motion.div>

              <div className="max-w-xs w-full overflow-hidden shadow-md p-4 text-center bg-gray-50 dark:bg-white/5 border-4 border-orange-500 rounded-xl dark:border-gray-700 relative">
                {/* Avatar Image (3:4 ratio) */}
                <motion.div
                  className="relative w-full h-85 mb-3"
                  key={current + '-avatar'}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </motion.div>

                {/* Name & Role */}
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>

            {/* Right: Testimonial Selector Grid */}
            <motion.div
              className="w-full lg:w-2/3 flex flex-col gap-6 h-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Rectangular Avatar Cards (scrollable, at bottom) */}
              <div className="w-full mt-50">
                <div className="flex overflow-x-auto gap-4 px-1 scrollbar-hide">
                  {testimonials.map((t, idx) => (
                    <motion.div
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`flex-shrink-0 w-40 border overflow-hidden shadow-sm p-3 text-center transition-all ${idx === current
                        ? 'border-orange-500'
                        : 'border-gray-200 dark:border-gray-700 opacity-70 hover:opacity-100'
                        }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-38 object-cover rounded-md mb-2"
                      />
                      <p className="text-sm font-semibold text-gray-800 dark:text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {t.role}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="snap-start min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16"
      >
        <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Call to Action + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Let’s Work Together
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Have a project in mind or just want to say hello? I’m always open to new opportunities,
              collaborations, or just grabbing a virtual coffee ☕.
            </p>

            <div className="flex gap-4 mt-6">
              {/* Social Icons */}
              <a href="mailto:you@example.com" className="text-orange-500 hover:text-orange-600 text-2xl">
                <i className="fas fa-envelope" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-orange-500 hover:text-orange-600 text-2xl">
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://github.com/yourprofile" target="_blank" className="text-orange-500 hover:text-orange-600 text-2xl">
                <i className="fab fa-github" />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" className="text-orange-500 hover:text-orange-600 text-2xl">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-white dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // Add real submission logic here
              alert('Message sent!');
            }}
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* 🎯 Overlay Component */}
      {
        openSection === 'about' && (
          <div className="fixed inset-0 z-[60] bg-white p-6 overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
              onClick={() => setOpenSection(null)}
            >
              ✕ Close
            </button>
            <AboutMeCard />
          </div>
        )
      }
    </div >
  );
}
