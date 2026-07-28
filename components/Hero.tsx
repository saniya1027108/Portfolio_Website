'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Picture */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
              <Image
                src="/images/profile.jpeg"
                alt="Saniya Mulla"
                fill
                className="rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Saniya Mulla
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AI/ML Engineer | Data Scientist | Developer
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Building innovative solutions and Agentic Systems to solve real-world problems
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a
              href="https://github.com/saniya1027108"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/saniyamulla10/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:saniyamulla108@gmail.com"
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 hover:scale-110"
              aria-label="Resume"
            >
              <FileText size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 1.2 },
            y: { duration: 1.5, repeat: Infinity },
          }}
        >
          <ArrowDown className="text-slate-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
