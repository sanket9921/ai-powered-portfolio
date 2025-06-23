import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaBriefcase, FaTools, FaLightbulb, FaRocket, FaRobot, FaServer, FaBook, FaBrain, FaLock, FaUsers, FaArrowRight, FaEye, FaShieldAlt, FaCrosshairs, FaHandsHelping, FaChessKing, FaCertificate, FaUniversity, FaCrown, FaAws } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiTensorflow } from "react-icons/si";
export default function AboutMeCard() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const hoverEffect = {
    scale: 1.03,
    transition: { duration: 0.2 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="w-full mx-auto p-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 rounded-3xl shadow-2xl border border-purple-500/20 overflow-hidden"
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute rounded-full bg-purple-400"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />

        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Enhanced Header with Avatar */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row items-center gap-8 mb-12 relative"
        >
          {/* Glowing Orb Effect */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-600/20 rounded-full filter blur-3xl pointer-events-none"></div>

          {/* Avatar with 3D Tilt Effect */}
          <motion.div
            whileHover={{
              rotateY: 15,
              scale: 1.05,
              boxShadow: "0 10px 30px -5px rgba(139, 92, 246, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-36 h-36 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden 
               bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 
               flex items-center justify-center relative"
          >
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-full shadow-inner-lg bg-purple-400/10"></div>
            <span className="text-white text-5xl font-bold relative z-10">VK</span>

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRINmEyIDIgMCAwMS0yLTJWMTZhMiAyIDAgMDEyLTJoMzBhMiAyIDAgMDEyIDJ2MTZhMiAyIDAgMDEtMiAyek0xNiA2SDJhMiAyIDAgMDAtMiAydjE2YTIgMiAwIDAwMiAyaDE0YTIgMiAwIDAwMi0yVjhBMiAyIDAgMDAxNiA2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
          </motion.div>

          {/* Headline with Typewriter Effect */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 inline-block">
                Vikesh Kumar
              </span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2 text-purple-400"
              >
                |
              </motion.span>
            </motion.h1>

            {/* Animated Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-900/60 to-blue-900/60 rounded-full 
                      border border-white/10 text-purple-100 text-lg font-medium shadow-lg
                      backdrop-blur-sm">
                <span className="inline-flex items-center gap-2">
                  <FaRobot className="text-blue-300 animate-pulse" />
                  AI & Full Stack Architect
                </span>
              </span>
            </motion.div>

            {/* Animated Experience Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800/80 rounded-full 
                 border border-purple-500/30 text-gray-200 text-sm"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
              >
                <FaRocket className="text-purple-400" />
              </motion.div>
              <span>Building future since 2018</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-px my-10 bg-gradient-to-r from-transparent via-purple-500 to-transparent 
             relative overflow-hidden"
        >
          <motion.div
            animate={{ left: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent to-white/20"
          />
        </motion.div>

        {/* About Section with Floating Cards */}
        <motion.div
          variants={item}
          className="mb-14 relative"
        >
          {/* Floating decoration elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/10 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-0 left-10 w-16 h-16 bg-purple-500/10 rounded-full filter blur-xl"></div>

          <motion.div
            className="flex items-center gap-4 mb-6 group"
            whileHover={{ x: 5 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg"
            >
              <FaLightbulb className="text-white text-2xl" />
            </motion.div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              About Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-800/50 rounded-2xl border border-white/10 backdrop-blur-sm 
                 shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a <span className="text-purple-300 font-medium">visionary technologist</span> specializing in AI-powered web ecosystems.
                With expertise spanning from silicon to software, I architect solutions that don't just compute -
                they <span className="text-blue-300 font-medium">comprehend, adapt, and evolve</span>.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-800/50 rounded-2xl border border-white/10 backdrop-blur-sm 
                 shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                My work bridges <span className="text-white font-medium">cutting-edge machine learning</span> with
                <span className="text-white font-medium"> elegant interfaces</span>, creating digital experiences that
                feel almost human. When I'm not coding, I mentor the next generation of
                <span className="text-blue-300"> AI engineers</span>.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Education */}
          <motion.div
            variants={item}
            className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20"
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              whileHover={hoverEffect}
            >
              <FaGraduationCap className="text-purple-400 text-2xl" />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </motion.div>
            <div className="space-y-6">
              {/* M.Tech */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden bg-gray-900/70 p-6 rounded-xl border-l-4 border-purple-500 group"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)"
                }}
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-600/10 rounded-full filter blur-xl"></div>
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <FaGraduationCap className="text-purple-300" />
                  M.Tech in Artificial Intelligence
                </h3>
                <p className="text-purple-300 mt-2">Indian Institute of Technology (IIT), Delhi</p>
                <p className="text-gray-400">2019 - 2021 | GPA: 3.8/4.0</p>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </motion.div>

              {/* B.Tech */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative overflow-hidden bg-gray-900/70 p-6 rounded-xl border-l-4 border-blue-500 group"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                }}
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-600/10 rounded-full filter blur-xl"></div>
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <FaUniversity className="text-blue-300" />
                  B.Tech in Computer Science
                </h3>
                <p className="text-blue-300 mt-2">Delhi Technological University</p>
                <p className="text-gray-400">2015 - 2019 | GPA: 3.6/4.0</p>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>

              {/* PG-DAC */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative overflow-hidden bg-gray-900/70 p-6 rounded-xl border-l-4 border-cyan-500 group"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.3)"
                }}
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-600/10 rounded-full filter blur-xl"></div>
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <FaCertificate className="text-cyan-300" />
                  PG-DAC (Post Graduate Diploma in Advanced Computing)
                </h3>
                <p className="text-cyan-300 mt-2">MET Institute / IIT, Nashik</p>
                <p className="text-gray-400">2022 - 2023 | Grade: A+</p>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.div>
              {/* AWS Certification */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative overflow-hidden bg-gray-900/70 p-6 rounded-xl border-l-4 border-orange-500 group"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.3)"
                }}
              >
                {/* Animated elements */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-600/10 rounded-full filter blur-xl"></div>
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -right-6 -bottom-6 text-6xl text-orange-900/20"
                >
                  <FaAws />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <FaCertificate className="text-orange-300" />
                    AWS Certified Solutions Architect - Associate
                  </h3>
                  <p className="text-orange-300 mt-2">Amazon Web Services</p>
                  <p className="text-gray-400">2023 | Validation #AWS123456789</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-orange-900/30 text-orange-200 rounded-full text-xs">Cloud Architecture</span>
                    <span className="px-2 py-1 bg-orange-900/30 text-orange-200 rounded-full text-xs">Scalable Systems</span>
                    <span className="px-2 py-1 bg-orange-900/30 text-orange-200 rounded-full text-xs">Security</span>
                  </div>
                </div>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Floating decoration */}
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-10 -right-10 w-24 h-24 bg-blue-600/10 rounded-full filter blur-xl -z-10"
            />

            <motion.div
              whileHover={{
                boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.3)"
              }}
              className="bg-gradient-to-br from-gray-900/60 to-blue-900/30 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm"
            >
              <motion.div
                className="flex items-center gap-4 mb-8"
                whileHover={{ x: 3 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                  className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg"
                >
                  <FaBriefcase className="text-white text-2xl" />
                </motion.div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200">
                  Professional Journey
                </h2>
              </motion.div>

              <div className="space-y-6">
                {/* CEO Position */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-gray-900/70 p-6 rounded-2xl border-l-4 border-purple-500 group overflow-hidden"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 15px 30px -10px rgba(139, 92, 246, 0.3)"
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                        <FaCrown className="text-purple-300" />
                        Founder & CEO
                      </h3>
                      <p className="text-purple-300 mt-2">NeuroWeb Solutions</p>
                      <p className="text-gray-400">2022 - Present</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">
                      Current
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 pl-2">
                    {[
                      "Built AI-as-a-Service platform serving 50+ SMEs",
                      "Developed proprietary NLP models with 95% accuracy",
                      "Scaled team from 1 to 15 engineers in 18 months",
                      "Secured $1.2M in seed funding"
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                          className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2"
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </motion.div>

                {/* Senior Developer Position */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative bg-gray-900/70 p-6 rounded-2xl border-l-4 border-blue-500 group overflow-hidden"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.3)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                    <FaCode className="text-blue-300" />
                    Senior Full Stack Developer
                  </h3>
                  <p className="text-blue-300 mt-2">TechNova Solutions</p>
                  <p className="text-gray-400">2019 - 2022</p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {[
                      { metric: "60%", text: "Deployment time reduction" },
                      { metric: "5", text: "Developers mentored" },
                      { metric: "4.9★", text: "System rating" },
                      { metric: "3x", text: "Performance improvement" }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-blue-300 font-bold text-lg">{item.metric}</p>
                        <p className="text-gray-300 text-sm">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Leadership & Vision Section */}
        <motion.div
          className="relative my-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating tech elements decoration */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute -top-20 left-10 opacity-20"
          >
            <SiReact className="text-blue-400 text-7xl" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-10 right-10 opacity-20"
          >
            <SiTensorflow className="text-purple-400 text-7xl" />
          </motion.div>

          {/* Main container */}
          <motion.div
            whileHover={{
              boxShadow: "0 20px 50px -15px rgba(139, 92, 246, 0.3)"
            }}
            className="bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 p-8 rounded-3xl border border-white/10 backdrop-blur-lg shadow-xl overflow-hidden"
          >
            {/* Section header */}
            <motion.div
              className="flex flex-col items-center mb-12 text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
                className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg mb-4"
              >
                <FaChessKing className="text-white text-3xl" />
              </motion.div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-2">
                Leadership Philosophy
              </h2>
              <motion.p
                className="text-lg text-gray-400 max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                How I build teams and drive technological innovation
              </motion.p>
            </motion.div>

            {/* Content grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Leadership Principles */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {[
                  {
                    title: "Empowerment Culture",
                    icon: <FaHandsHelping className="text-blue-400" />,
                    content: "I cultivate environments where team members own their domains and are encouraged to innovate",
                    color: "bg-blue-900/20",
                    border: "border-blue-500/30"
                  },
                  {
                    title: "Vision Alignment",
                    icon: <FaCrosshairs className="text-purple-400" />,
                    content: "Every technical decision maps to business objectives and user needs",
                    color: "bg-purple-900/20",
                    border: "border-purple-500/30"
                  },
                  {
                    title: "Psychological Safety",
                    icon: <FaShieldAlt className="text-cyan-400" />,
                    content: "Teams perform best when members feel safe to take risks and voice concerns",
                    color: "bg-cyan-900/20",
                    border: "border-cyan-500/30"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                      borderColor: item.border.replace('30', '50')
                    }}
                    className={`p-5 rounded-xl border ${item.border} ${item.color} backdrop-blur-sm flex items-start gap-4`}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        repeatType: "mirror"
                      }}
                      className={`p-3 rounded-lg ${item.color.replace('bg-', 'bg-').replace('20', '40')} mt-1`}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Vision Statement */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%']
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 bg-[length:200%_200%] -z-10"
                />

                <div className="h-full p-6 rounded-xl bg-gray-900/30 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="p-3 bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-full"
                    >
                      <FaEye className="text-blue-300 text-2xl" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                      Future Vision
                    </h3>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                    className="space-y-4"
                  >
                    {[
                      "AI solutions that enhance your team's creativity and productivity, not replace human talent",
                      "Intuitive interfaces that make advanced technology accessible to your entire organization",
                      "Cross-functional collaboration that bridges your technical and business teams seamlessly",
                      "Future-proof systems that automatically adapt as your company grows and evolves",
                      "Data-driven insights tailored to your specific industry challenges and opportunities",
                      "Ethical AI implementations that build trust with your customers and stakeholders"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          whileHover={{ rotate: 90 }}
                          className="p-1 mt-1"
                        >
                          <FaArrowRight className="text-blue-400 text-sm" />
                        </motion.div>
                        <p className="text-gray-300">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Animated decoration */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity
                    }}
                    className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full filter blur-xl -z-10"
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating connection dots */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute inset-0 overflow-hidden pointer-events-none"
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <pattern id="connection-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#connection-pattern)" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Technical Expertise Section */}
        <motion.div
          variants={item}
          className="mb-16 relative"
        >


          {/* Decorative floating elements */}
          <div className="absolute -top-10 left-1/4 w-24 h-24 bg-purple-600/10 rounded-full filter blur-3xl -z-10"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-blue-600/10 rounded-full filter blur-3xl -z-10"></div>
          {/* Section Header with Animated Icon */}
          <motion.div
            className="flex items-center gap-4 mb-10 group cursor-default"
            whileHover={{
              x: 5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                y: [0, -3, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg"
            >
              <FaTools className="text-white text-2xl" />
            </motion.div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-purple-300">
              Technical Arsenal
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend Card */}
            <motion.div
              whileHover={{
                y: -8,
                boxShadow: "0 15px 30px -10px rgba(96, 165, 250, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden bg-gray-800/50 rounded-2xl border border-blue-500/30 p-6
                 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <SiReact className="text-blue-400 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">Frontend Mastery</h3>
              </div>

              {/* Skills List with Animated Bullets */}
              <ul className="space-y-3">
                {['React.js/Next.js', 'Tailwind CSS', 'TypeScript', 'Redux Toolkit', 'Three.js'].map((skill, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-gray-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="inline-block w-2 h-2 bg-blue-400 rounded-full"
                    />
                    {skill}
                  </motion.li>
                ))}
              </ul>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full filter blur-xl"></div>
            </motion.div>

            {/* Backend Card */}
            <motion.div
              whileHover={{
                y: -8,
                boxShadow: "0 15px 30px -10px rgba(74, 222, 128, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden bg-gray-800/50 rounded-2xl border border-green-500/30 p-6
                 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-green-600/20 rounded-lg">
                  <SiNodedotjs className="text-green-400 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">Backend Systems</h3>
              </div>
              <ul className="space-y-3">
                {['Node.js/Express', 'Python/Django', 'GraphQL', 'REST APIs', 'WebSockets'].map((skill, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="inline-block w-2 h-2 bg-green-400 rounded-full"
                    />
                    {skill}
                  </motion.li>
                ))}
              </ul>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-600/10 rounded-full filter blur-xl"></div>
            </motion.div>

            {/* AI/ML Card */}
            <motion.div
              whileHover={{
                y: -8,
                boxShadow: "0 15px 30px -10px rgba(249, 168, 212, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden bg-gray-800/50 rounded-2xl border border-pink-500/30 p-6
                 backdrop-blur-sm hover:border-pink-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-pink-600/20 rounded-lg">
                  <SiTensorflow className="text-pink-400 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">AI Engineering</h3>
              </div>
              <ul className="space-y-3">
                {['TensorFlow/PyTorch', 'LLMs (GPT-4, Llama)', 'Computer Vision', 'NLP', 'LangChain'].map((skill, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="inline-block w-2 h-2 bg-pink-400 rounded-full"
                    />
                    {skill}
                  </motion.li>
                ))}
              </ul>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-600/10 rounded-full filter blur-xl"></div>
            </motion.div>

            {/* DevOps Card */}
            <motion.div
              whileHover={{
                y: -8,
                boxShadow: "0 15px 30px -10px rgba(252, 211, 77, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden bg-gray-800/50 rounded-2xl border border-yellow-500/30 p-6
                 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-yellow-600/20 rounded-lg">
                  <FaServer className="text-yellow-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">DevOps & Cloud</h3>
              </div>
              <ul className="space-y-3">
                {['Docker/K8s', 'AWS/GCP', 'CI/CD Pipelines', 'Serverless', 'Terraform'].map((skill, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="inline-block w-2 h-2 bg-yellow-400 rounded-full"
                    />
                    {skill}
                  </motion.li>
                ))}
              </ul>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-600/10 rounded-full filter blur-xl"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Development Philosophy Section */}
        <motion.div
          className="relative mb-24 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background elements */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl -z-10"
          />

          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl -z-10"
          />

          {/* Main container */}
          <motion.div
            whileHover={{
              boxShadow: "0 25px 50px -15px rgba(139, 92, 246, 0.4)"
            }}
            className="bg-gradient-to-br from-gray-900/80 via-purple-900/50 to-gray-900/80 p-8 rounded-3xl border border-white/10 backdrop-blur-lg shadow-2xl"
          >
            {/* Section header */}
            <motion.div
              className="flex flex-col items-center mb-12 text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
                className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg mb-4"
              >
                <FaLightbulb className="text-white text-3xl" />
              </motion.div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-2">
                My Development Manifesto
              </h2>
              <motion.p
                className="text-lg text-gray-400 max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Core principles that guide my technical decisions and creative process
              </motion.p>
            </motion.div>

            {/* Principles grid - 3x2 layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Human-Centric AI",
                  icon: <FaBrain className="text-2xl" />,
                  content: "I design AI systems that enhance human capabilities while maintaining ethical boundaries and transparency.",
                  colors: {
                    text: "text-purple-300",
                    bg: "from-purple-900/30 to-purple-950/50",
                    border: "border-purple-600/50",
                    iconBg: "from-purple-700 to-purple-800"
                  },
                  animation: {
                    y: [0, -5, 5, 0],
                    transition: { duration: 4, repeat: Infinity }
                  }
                },
                {
                  title: "Architectural Poetry",
                  icon: <FaCode className="text-2xl" />,
                  content: "Code should read like well-written prose - intentional, elegant, and maintainable at scale.",
                  colors: {
                    text: "text-blue-300",
                    bg: "from-blue-900/30 to-blue-950/50",
                    border: "border-blue-600/50",
                    iconBg: "from-blue-700 to-blue-800"
                  },
                  animation: {
                    rotate: [0, 1, -1, 0],
                    transition: { duration: 5, repeat: Infinity }
                  }
                },
                {
                  title: "Perpetual Growth",
                  icon: <FaBook className="text-2xl" />,
                  content: "In technology's exponential evolution, curiosity is my compass and adaptability my toolkit.",
                  colors: {
                    text: "text-cyan-300",
                    bg: "from-cyan-900/30 to-cyan-950/50",
                    border: "border-cyan-600/50",
                    iconBg: "from-cyan-700 to-cyan-800"
                  },
                  animation: {
                    scale: [1, 1.02, 1],
                    transition: { duration: 3, repeat: Infinity }
                  }
                },
                {
                  title: "Performance Art",
                  icon: <FaRocket className="text-2xl" />,
                  content: "Every millisecond matters. I engineer experiences that feel instantaneous and effortless.",
                  colors: {
                    text: "text-green-300",
                    bg: "from-green-900/30 to-green-950/50",
                    border: "border-green-600/50",
                    iconBg: "from-green-700 to-green-800"
                  },
                  animation: {
                    x: [0, 3, -3, 0],
                    transition: { duration: 5, repeat: Infinity }
                  }
                },
                {
                  title: "Secure By Design",
                  icon: <FaLock className="text-2xl" />,
                  content: "Security isn't a feature - it's the foundation. I bake protection into every layer of the stack.",
                  colors: {
                    text: "text-yellow-300",
                    bg: "from-yellow-900/30 to-yellow-950/50",
                    border: "border-yellow-600/50",
                    iconBg: "from-yellow-700 to-yellow-800"
                  },
                  animation: {
                    y: [0, -3, 0],
                    transition: { duration: 3, repeat: Infinity }
                  }
                },
                {
                  title: "Collaborative Alchemy",
                  icon: <FaUsers className="text-2xl" />,
                  content: "The best solutions emerge when diverse minds collide. I foster environments where ideas compound.",
                  colors: {
                    text: "text-pink-300",
                    bg: "from-pink-900/30 to-pink-950/50",
                    border: "border-pink-600/50",
                    iconBg: "from-pink-700 to-pink-800"
                  },
                  animation: {
                    rotate: [0, 2, -2, 0],
                    transition: { duration: 6, repeat: Infinity }
                  }
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{
                    y: -8,
                    boxShadow: `0 20px 40px -10px ${principle.colors.border.replace('50', '30')}`,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  animate={principle.animation}
                  className={`bg-gradient-to-br ${principle.colors.bg} p-6 rounded-2xl border ${principle.colors.border} backdrop-blur-sm h-full flex flex-col`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${principle.colors.iconBg} shadow-md`}
                    >
                      {principle.icon}
                    </motion.div>
                    <h3 className={`text-xl font-semibold ${principle.colors.text}`}>
                      {principle.title}
                    </h3>
                  </div>
                  <motion.p
                    className="text-gray-300 leading-relaxed flex-grow"
                    whileHover={{ x: 3 }}
                  >
                    {principle.content}
                  </motion.p>

                  {/* Animated decoration */}
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity
                    }}
                    className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full ${principle.colors.bg.replace('bg-', 'bg-').replace('30', '10')} filter blur-md -z-10`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={item}
          className="text-center"
        >
          <motion.p
            className="text-xl text-gray-300 mb-6"
            whileHover={hoverEffect}
          >
            Let's build something extraordinary together
          </motion.p>
          <motion.button
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(to right, #7c3aed, #3b82f6)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium text-white text-lg shadow-lg"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}