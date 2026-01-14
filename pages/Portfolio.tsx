
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import FadeIn from '../components/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Residential', 'Commercial', 'Hospitality'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] block mb-6">Our Portfolio</span>
            <h1 className="text-5xl md:text-7xl serif mb-12">Selected Works</h1>
            
            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-b border-gray-100 pb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-all relative ${
                    filter === cat ? 'text-[#c5a059]' : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  {cat}
                  {filter === cat && (
                    <motion.div 
                      layoutId="underline" 
                      className="absolute -bottom-12 left-0 right-0 h-[1px] bg-[#c5a059]" 
                    />
                  )}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                <Link to={`/project/${project.id}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden mb-8">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl serif mb-2 tracking-wide">{project.title}</h3>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400">{project.location}</p>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-300">
                      {project.category}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-24 text-center text-gray-400 italic font-light">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
