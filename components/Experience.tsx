'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Research Aide',
      company: 'Univeristy Office of Evaluation and Educational Effectiveness, ASU',
      period: 'January 2026 - Present',
      location: 'Tempe, AZ, USA',
      description: [
        'Conduct data collection through surveys, interviews, focus groups, and structured observations, ensuring high-quality and well-documented datasets.',
        'Perform qualitative and quantitative analysis, including thematic coding, descriptive statistics, and basic inferential testing to evaluate program outcomes.',
        'Apply mixed-methods analytics to integrate qualitative insights with quantitative evidence for data-driven evaluation.',
        'Support data structuring, analysis workflows, and visualization to generate actionable insights and recommendations.',
        'Develop technical reports and presentations to communicate findings to stakeholders and collaborate with analysts across projects.',
      ],
      technologies: ['Statistics', 'Data Analysis', 'Thematic Coding', 'Research Survey'],
    },
    {
      title: 'Automation and AI Integration Assistant',
      company: 'Design School, ASU',
      period: 'December 2025 - Feburary 2026',
      location: 'Tempe, AZ, USA',
      description: [
        'Designing an AI-powered executive assistant for the Director of Design School to automate email triage, meeting intelligence, and task orchestration.',
        'Leveraging LLMs to summarise emails, generate response drafts, and prioritise communications, reducing manual workload by ~40–60%.',
        'Integrating Outlook/Gmail, calendars, Zoom transcripts, and AI note-taking tools to auto-generate agendas, summaries, and actionable follow-ups.',
        'Building a centralised, real-time Director’s Dashboard that unifies email insights, schedules, meeting outcomes, and task tracking.'
      ],
      technologies: ['LLMs', 'APIs', 'Python', 'SQL'],
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Finarkein Analytics',
      period: 'August 2024 - July 2025',
      location: 'Pune, India',
      description: [
        'Built NLP pipelines and impled GenAI techniques to extract/classify financial risk entities (counterparty, salary inference, transaction categorization) reducing manual review by 40% and increasing classification accuracy by 15%',
        'Utilized PostgreSQL for robust database queries and integration with ML Algorithms, building end-to-end ML Workflows using Kafka for real-time data processing',
      ],
      technologies: ['Python', 'PostgreSQL', 'LLMS', 'Git', 'Kafka'],
    },
    {
      title: 'Machine Learning Engineer Intern',
      company: 'NyxAI',
      period: 'February 2024 - July 2024',
      location: 'Remote',
      description: [
        'Engineered end-to-end pipelines for text-to-image and text-to-video generation using Stable Diffusion and ControlNet',
        'Developed EthniTry, a virtual try-on system using Segmentation models, increasing inference speed by 22% via CUDA Optimization',
        'Implemented asynchronous task queries using Celery, RabbitMQ, and Redis to handle distributed inferencing',
        'Leveraged ChromaDB for high-speed vector search and retrieval; deployed models via GCP and FastAPI',
      ],
      technologies: ['GenerativeAI', 'Segmentation Models', 'Celery', 'RabitMQ', 'Redis', 'ChromaDB', 'GCP', 'FastAPI', 'CUDA'],
    },
    {
      title: 'FlexC',
      company: 'AI Engineer Intern',
      period: 'October 2022 - April 2023',
      location: 'Remote',
      description: [
        'Curated and processed over 2,000+ job-market data points; performed EDA to generate actionable insights.',
        'Designed a talent-matching recommendation engine using TF-IDF, Word2Vec, and BERT for semantic matching.',
        'Employed SpaCy, NLTK, and Gensim to preprocess and tokenize large unstructured text datasets.',
      ],
      technologies: ['Python', 'EDA', 'TF-IDF', 'Word2Vec', 'BERT', 'SpaCy', 'NLTK', 'Gensim'],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            My professional journey and contributions to innovative projects
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                    <Briefcase size={20} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-slate-600 dark:text-slate-400 flex items-start"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
