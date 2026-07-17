'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const publications = [
    {
      title: 'Beyond Task Success: Evaluating Cooperation in LLM-Based Multi Agent Systems',
      authors: 'Ashish Raj Shekhar, Saniya Mulla, Upasana Biswas, Priyanuj Bordoloi, Vivek Gupta',
      conference: 'NExT-Game 2026, ICML 2026 Workshop',
      year: '2026',
      description: 'We show that high task success in LLM-based multi-agent systems can hide poor strategic coordination, and introduce trace-grounded metrics to measure redundancy, delayed response, verifier dependence, and partner-specific fragility.',
      link: 'https://openreview.net/pdf?id=vcpVCPAsSP',
      tags: ['LLM Agent', 'Multi-Agent System', 'Cooperation', 'Coordination', 'Partner Modeling', 'Theory of Mind', 'game-theoretic learning', 'zero-shot cooperation', 'strategic AI', 'trace-grounded evaluation'],
    },
    {
      title: 'EviSearch: A Human in the Loop System for Extracting and Auditing Clinical Evidence for Systematic Reviews',
      authors: 'Naman Ahuja, Saniya Mulla, Muhammad Ali Khan, Zaryab Bin Riaz, Kaneez Zahra Rubab Khakwani, Mohamad Bassam Sonbol, Irbaz Bin Riaz, Vivek Gupta',
      conference: 'ACL, arXiv',
      year: '2026',
      description: 'A multi-agent extraction system that automates the creation of ontology-aligned clinical evidence tables directly from native trial PDFs while guaranteeing per-cell provenance for audit and human verification',
      link: 'https://arxiv.org/abs/2604.14165',
      tags: ['Agentic AI', 'LLMs', 'Chunking', 'Retrieval', 'Human in the Loop'],
    },
    {
      title: 'LawBot : From Documents to Answers, Unveiling A New Era In Real Estate Legal Assistance',
      authors: 'Saniya Mulla, Aniket Singh , Sagar Aute, Zaid Maniyar',
      conference: 'International Journal of Scientific Research in Engineering and Management (IJSREM)',
      year: '2024',
      description: 'The proposed method aims to redefine user experiences by providing comprehensive insights into land property, evaluating PDF documents, and offering invaluable guidance on real estate law using LLMs and RAG Architecture.',
      link: 'https://ijsrem.com/uploads/production/LawBot-From-Documents-to-Answers-Unveiling-a-New-Era-in-Legal-Document-Analysis.pdf',
      tags: ['LangChain', 'AI', 'Chatbot', 'Real Estate', 'Large Language Models', 'NLP'],
    },
    {
      title: 'EthniTry: A Deep Learning Approach to Image-Based Virtual Try-On for Indian Ethnic Apparel',
      authors: 'Neeraj Kumar, Ashish Jha, Saniya Mulla, Aiden Samuel, Amit Verma',
      conference: 'International Journal of Innovative Research in Technology (IJIRT)',
      year: '2024',
      description: 'EthniTry, an image-based virtual try-on system, addresses these challenges with deep learning technology. The system features a pre-trained DeepLabV3+ model for body segmentation and advanced warping techniques for intricate designs',
      link: 'https://ijirt.org/publishedpaper/IJIRT165741_PAPER.pdf',
      tags: ['Deep Learning', 'DeepLabV3+', 'Image Segmentation', 'Virtual Try-On'],
    },
  ];

  return (
    <section
      id="research"
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
            Research & Publications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Contributing to academic research and advancing the field through publications
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                    {pub.authors}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">
                    {pub.conference} • {pub.year}
                  </p>
                </div>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  aria-label="View publication"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {pub.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://scholar.google.com/citations?user=6hqCypUAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <BookOpen size={20} />
            View All Publications on Google Scholar
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
