'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Rocket, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    {
      icon: <Code2 size={32} />,
      title: 'Artificial Intelligence / Machine Learning',
      description: 'Expertise in modern AI trends - Agentic Systems, LLMs, Generative AI, etc.',
    },
    {
      icon: <Brain size={32} />,
      title: 'Research & Innovation',
      description: 'Published research in AI/ML and Data Science',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Product Development',
      description: 'End-to-end product development from ideation to deployment and scaling, with industry experience.',
    },
    {
      icon: <Users size={32} />,
      title: 'Team Collaboration',
      description: 'Strong communication skills with experience leading cross-functional teams',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            I'm a passionate technologist with a strong background in AI/ML and research, along with CS Fundamentals.
            I love building products that make a difference and exploring new frontiers in technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">
                {skill.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8"
        >
          <h3 className="text-2xl font-bold mb-4">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Python', 'Tensorflow', 'PyTorch', 'Docker', 'Kubernetes', 'Git',
              'PostgreSQL', 'MongoDB', 'MySQL', 'RestAPI', 'FastAPO', 'Git', 'PostgreSQL',
              'MongoDB', 'GraphQL', 'REST APIs', 'CI/CD', 'AWS', 'GCP'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">AI/ML Frameworks & Specializations</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Agentic AI', 'Computer Vision', 'Generative AI', 'Large Language Models (LLMs)',
              'RAG Systems', 'Natural Language Processing', 'LangGraph', 'LangChain',
              'Prompt Engineering', 'Fine-tuning', 'Vector Databases', 'Semantic Search', 'AI Agents'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
