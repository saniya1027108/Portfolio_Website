'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Github, Sparkles } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Collab-Overcooked',
      description: 'Multi-agent fraemework supporting diverse tasks ad objectives and encourages collaboration through natural language communication. Introduced a spectrum of process orientied evauation metrics to assess the fine grained collaboration capabilities of differet LLM Agents, a dimension often overlooked in prior work.',
      technologies: ['Multi-Agent Systems', 'LLMs', 'Python'],
      image: '/projects/project_image_1.png',
      githubUrl: 'https://github.com/shekharashishraj/Collab-Overcooked',
      featured: true,
    },
    {
      title: 'EviSearch',
      description: 'Plan based extraction pipeline for extracting structured data from clinical trial research papers(PDFs) using LLMs. The pipeline has 4 stages, Chunking -> Planning -> Extraction -> Evaluation with explicit extraction plans for interpretability and category aware evaluation.',
      technologies: ['Agents', 'LLMs', 'RAG', 'Python'],
      image: '/projects/project_image_2.png',
      githubUrl: 'https://github.com/shekharashishraj/Collab-Overcooked',
      featured: true,
    },
    {
      title: 'Donna AI',
      description: 'Multi Agentic AI Assistant using LangGraph to manage personal tasks and schedules with minimum manual effort. Integrated core productivity channels like Gmail, Slack, Calendar, Zoom and built MVP focused on urgency scoring and proactive alerts. Shipped a voice-driven appointment booking and call workflow.',
      technologies: ['Python', 'ML', 'Multi-Agent Systems', 'LangGraph', 'APIs'],
      image: '/projects/project_image_3.png',
      githubUrl: 'https://github.com/Parva101/donna.ai',
      featured: false,
    },
    {
      title: 'LawBot',
      description: 'AI legal assistant using LLMs and RAG Architecture to parse and respond to queries based on uploaded legal PDFs, utilizing PyPDF2 for document parsing and FIASS + OpenAI ADA for vector search and retrieval, achieving 92% accuracy.',
      technologies: ['RAG', 'Python', 'LLMs'],
      image: '/projects/project_image_4.png',
      githubUrl: 'https://github.com/saniya1027108/LAWBOT/tree/main',
      featured: false,
    },
    {
      title: 'SkyScript',
      description: 'Developed a virtual handwriting input system using OpenCV-based marker tracking and OCR. Enhanced text recognition accuracy by 18% by applying adaptive thresholding and morphological transformations',
      technologies: ['OpenCV', 'OCR', 'Python'],
      image: '/projects/project_image_5.png',
      githubUrl: 'https://github.com/saniya1027108/SkyScript',
      featured: false,
    },
    {
      title: 'Knowledge Distillation',
      description: 'Implemented a deep learning model compression pipeline using the Knowledge Distillation framework, where a compact student network learns from the soft predictions of a larger teacher model. Trained and evaluated the models on the CIFAR-10 dataset using TensorFlow, demonstrating that the student model retained nearly the same classification accuracy while significantly reducing the number of parameters.',
      technologies: ['TensorFlow', 'Python', 'NumPy', 'CNNs', 'Knowledge Distillation', 'CIFAR-10'],
      image: '/projects/project_image_6.jpg',
      githubUrl: 'https://github.com/saniya1027108/Knowledge-Distillation',
      featured: false,
    },

  ];

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A selection of projects that showcase my skills and passion for building innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Sparkles size={12} />
                  Featured
                </div>
              )}

              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
