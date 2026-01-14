
import React from 'react';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const sectors = ['Residential', 'Commercial', 'Hospitality', 'Retail'];
  const services = [
    {
      title: 'Full Concept Design',
      description: 'Complete spatial planning, mood boarding, and interior architectural detailing.'
    },
    {
      title: '3D Visualisation',
      description: 'High-fidelity renderings and VR tours to bring your vision to life before execution.'
    },
    {
      title: 'Bespoke Furniture',
      description: 'Custom designed pieces crafted by master artisans to fit your unique space.'
    },
    {
      title: 'Project Management',
      description: 'Turnkey execution ensuring quality standards are met at every stage of construction.'
    }
  ];

  return (
    <div className="pt-40">
      {/* Intro */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] block mb-8">The Studio</span>
            <h1 className="text-5xl md:text-8xl serif mb-12 leading-[1.1]">
              The Chic Decor: Leaders in Luxurious Interiors
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12 italic">
              "We don't just design rooms; we curate experiences that linger in the memory of those who dwell within them."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Large Image */}
      <section className="mb-32">
        <FadeIn direction="none" duration={1.5}>
          <div className="w-full h-[70vh] overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1.0] }}
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400" 
              alt="Studio Life" 
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* Details Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <FadeIn direction="left">
            <h2 className="text-3xl serif mb-8 border-b border-gray-100 pb-8">Our Philosophy</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Founded in Kota, Rajasthan, The Chic Decor has grown from a regional boutique to an international consultancy. We believe in the power of 'Less but Better'—a minimalist aesthetic that doesn't compromise on warmth or personality.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Every project begins with a deep listening process. We understand the client’s lifestyle, heritage, and aspirations, translating them into spatial realities that are as functional as they are beautiful.
            </p>
          </FadeIn>

          <FadeIn direction="right">
            <h2 className="text-3xl serif mb-8 border-b border-gray-100 pb-8">Founder Bio</h2>
            <div className="flex gap-8 items-start">
              <div className="overflow-hidden shrink-0">
                <motion.img 
                  initial={{ scale: 1.2, filter: 'grayscale(100%)' }}
                  whileInView={{ scale: 1, filter: 'grayscale(100%)' }}
                  transition={{ duration: 1.5 }}
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                  alt="Ananya Sharma - Founder" 
                  className="w-32 aspect-[3/4] object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl serif mb-4">Ananya Sharma</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  With over 15 years of experience in London and Milan, Ananya brings a global perspective to Indian luxury. Her work has been featured in international design biennials.
                </p>
                <div className="w-8 h-[1px] bg-[#c5a059]"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services and Sectors */}
      <section className="bg-[#1a1a1a] text-white py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="space-y-12">
              <FadeIn direction="up">
                <h3 className="text-xs uppercase tracking-[0.4em] mb-12 text-[#c5a059]">Sectors</h3>
              </FadeIn>
              <ul className="space-y-8 text-2xl md:text-4xl serif">
                {sectors.map((sector, idx) => (
                  <FadeIn key={sector} delay={idx * 0.1} direction="left">
                    <li className="hover:text-[#c5a059] transition-colors duration-300">{sector}</li>
                  </FadeIn>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <FadeIn direction="up">
                <h3 className="text-xs uppercase tracking-[0.4em] mb-12 text-[#c5a059]">Services</h3>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {services.map((service, idx) => (
                  <FadeIn key={service.title} delay={idx * 0.15} direction="up">
                    <div className="group">
                      <h4 className="text-lg serif mb-4 group-hover:text-[#c5a059] transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center">
        <FadeIn>
          <h2 className="text-4xl serif mb-12">Experience Our Design</h2>
          <Link 
            to="/portfolio" 
            className="text-xs uppercase tracking-[0.3em] font-semibold border-b border-black pb-2 hover:text-[#c5a059] hover:border-[#c5a059] transition-all"
          >
            View Portfolio
          </Link>
        </FadeIn>
      </section>
    </div>
  );
};

export default About;
