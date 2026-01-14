
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import FadeIn from '../components/FadeIn';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2400" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover brightness-[0.8]"
          />
        </div>
        <div className="relative z-10 text-center px-6 text-white">
          <FadeIn direction="none" duration={1.2}>
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium mb-6 block">Luxury Interior Design Studio</span>
            <h1 className="text-5xl md:text-8xl serif mb-8 leading-tight max-w-5xl mx-auto">
              Crafting Timeless, Bespoke Spaces
            </h1>
            <p className="text-sm md:text-lg font-light tracking-wide max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">
              Where sophisticated minimalism meets curated heritage. We design environments that reflect your unique elegance.
            </p>
            <Link 
              to="/portfolio" 
              className="inline-block px-12 py-5 border border-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
            >
              Explore Portfolio
            </Link>
          </FadeIn>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-12 bg-white/50"></div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <FadeIn direction="left" className="md:w-1/2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] block mb-4">Curated Selection</span>
            <h2 className="text-4xl md:text-6xl serif">Featured Works</h2>
          </FadeIn>
          <FadeIn direction="right" className="mt-8 md:mt-0">
            <Link to="/portfolio" className="group flex items-center space-x-4 text-xs uppercase tracking-[0.3em] font-semibold">
              <span>View All Projects</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.2} direction="up">
              <Link to={`/project/${project.id}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden mb-8">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                </div>
                <h3 className="text-xl serif mb-2">{project.title}</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">{project.location}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Philosophy Teaser */}
      <section className="bg-[#f9f9f7] py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] block mb-8">Our Essence</span>
            <h2 className="text-4xl md:text-6xl serif mb-12 leading-tight">
              A bespoke approach to every interior landscape.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed font-light mb-16 italic">
              "We believe that true luxury lies in the details. At The Chic Decor, our philosophy blends modern chic with timeless elements, ensuring that every space we touch becomes a masterpiece of personal expression and comfort."
            </p>
            <div className="w-12 h-[1px] bg-[#c5a059] mx-auto mb-16"></div>
            <Link 
              to="/about" 
              className="text-xs uppercase tracking-[0.3em] font-semibold hover:text-[#c5a059] transition-colors"
            >
              Learn More About Our Studio
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <FadeIn direction="left">
              <img 
                src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=1200" 
                alt="Craftsmanship" 
                className="w-full aspect-square object-cover shadow-2xl"
              />
            </FadeIn>
          </div>
          <div className="md:w-1/2">
            <FadeIn direction="right">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] block mb-6">Expertise</span>
              <h2 className="text-4xl md:text-5xl serif mb-8">The Art of Detail</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                In the heart of Rajasthan, we collaborate with world-class artisans to integrate handcrafted marble, intricate textiles, and bespoke furniture into modern residential contexts.
              </p>
              <ul className="space-y-6 text-sm uppercase tracking-widest font-medium border-t border-gray-100 pt-8">
                <li className="flex justify-between"><span>Ethical Sourcing</span><span className="text-[#c5a059]">01</span></li>
                <li className="flex justify-between"><span>Artisan Partnerships</span><span className="text-[#c5a059]">02</span></li>
                <li className="flex justify-between"><span>Bespoke Manufacturing</span><span className="text-[#c5a059]">03</span></li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Press/Accolades */}
      <section className="py-32 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] block mb-4">Recognition</span>
              <h2 className="text-3xl serif">Selected Press</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center opacity-60">
              <div className="text-sm font-bold uppercase tracking-widest">Architectural Digest</div>
              <div className="text-sm font-bold uppercase tracking-widest italic">Vogue India</div>
              <div className="text-sm font-bold uppercase tracking-widest">Elle Decor</div>
              <div className="text-sm font-bold uppercase tracking-widest serif">The Design Prize</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-[#1a1a1a] text-white text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl serif mb-12">Start Your Journey</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-16 text-lg font-light">
            Ready to transform your space? Let's discuss your next project.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-12 py-5 border border-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Connect With Us
          </Link>
        </FadeIn>
      </section>
    </div>
  );
};

export default Home;
