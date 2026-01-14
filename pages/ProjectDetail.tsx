
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import FadeIn from '../components/FadeIn';
import { ArrowLeft, MapPin, Tag } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl serif mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-xs uppercase tracking-widest underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex items-center justify-between border-b border-gray-100 mb-16">
        <button 
          onClick={() => navigate('/portfolio')}
          className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </button>
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#c5a059]">
          {project.category}
        </span>
      </div>

      {/* Header Info */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <FadeIn>
          <div className="flex flex-col md:flex-row gap-16 md:items-end mb-16">
            <div className="md:w-2/3">
              <h1 className="text-5xl md:text-7xl serif mb-8">{project.title}</h1>
              <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest font-semibold text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin size={12} className="text-[#c5a059]" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={12} className="text-[#c5a059]" />
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <p className="text-gray-500 leading-relaxed font-light italic">
                {project.description}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Main Image */}
      <section className="mb-32">
        <FadeIn direction="none">
          <div className="w-full aspect-[16/8] overflow-hidden">
            <img 
              src={project.gallery[0] || project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* Description and Materials */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <FadeIn direction="left">
            <h2 className="text-3xl serif mb-12 border-b border-gray-100 pb-8">Project Vision</h2>
            <div className="prose prose-sm text-gray-500 leading-loose">
              {project.details.split('\n').map((para, i) => (
                <p key={i} className="mb-6">{para}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="bg-[#f9f9f7] p-12">
              <h3 className="text-xs uppercase tracking-[0.4em] text-[#c5a059] mb-12">Curated Materials</h3>
              <ul className="space-y-6">
                {project.materials?.map((material, i) => (
                  <li key={i} className="flex justify-between items-center text-sm tracking-wide">
                    <span className="font-medium">{material}</span>
                    <div className="w-4 h-[1px] bg-gray-200"></div>
                  </li>
                )) || <li className="text-gray-400 italic">Material details available upon request.</li>}
              </ul>
            </div>

            {project.testimonial && (
              <div className="mt-20 border-l-4 border-[#c5a059] pl-12">
                <p className="text-xl serif italic mb-8 text-gray-700 leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold">
                  — {project.testimonial.client}
                </p>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {project.gallery.slice(1).map((img, i) => (
            <FadeIn key={i} delay={i * 0.1} className={i % 3 === 0 ? "md:col-span-2" : ""}>
              <div className={`overflow-hidden ${i % 3 === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                <img 
                  src={img} 
                  alt={`${project.title} view ${i + 2}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Next Project Nav */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-8">Next Project</span>
          <Link 
            to={`/project/${PROJECTS[(PROJECTS.findIndex(p => p.id === id) + 1) % PROJECTS.length].id}`}
            className="group text-center"
          >
            <h2 className="text-4xl md:text-7xl serif group-hover:text-[#c5a059] transition-colors duration-500">
              {PROJECTS[(PROJECTS.findIndex(p => p.id === id) + 1) % PROJECTS.length].title}
            </h2>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
