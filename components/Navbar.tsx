
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="logo.png" 
            alt="The Chic Decor" 
            className={`transition-all duration-500 object-contain ${isScrolled ? 'h-14' : 'h-20'} group-hover:scale-105`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.fallback-text')) {
                const text = document.createElement('span');
                text.className = 'fallback-text text-2xl tracking-[0.2em] font-light serif uppercase';
                text.innerText = 'The Chic Decor';
                parent.appendChild(text);
              }
            }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-[0.3em] font-medium transition-colors hover:text-[#c5a059] ${
                location.pathname === link.path 
                  ? 'text-[#c5a059]' 
                  : (isScrolled ? 'text-gray-800' : 'text-white md:text-gray-900') 
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`${isScrolled ? 'text-gray-900' : 'text-gray-900'} md:hidden`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <img src="logo.png" alt="The Chic Decor" className="h-32 mb-8 object-contain" />
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl uppercase tracking-[0.4em] font-light serif hover:text-[#c5a059]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
