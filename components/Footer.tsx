
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Pin as Pinterest } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fcfcfc] border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/">
            <img 
              src="logo.png" 
              alt="The Chic Decor" 
              className="h-24 w-auto object-contain mb-8 hover:opacity-80 transition-opacity"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Bespoke interior design studio specializing in luxurious residential, commercial, and hospitality spaces across India.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/portfolio" className="hover:text-[#c5a059] transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-[#c5a059] transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#c5a059] transition-colors">Inquiries</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>info@thechicdecor.com</li>
            <li>+91 98765 43210</li>
            <li>Kota, Rajasthan, India</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Social</h4>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#c5a059] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#c5a059] transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#c5a059] transition-colors"><Pinterest size={20} /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 border-t border-gray-100 pt-12">
        <p>© 2026 THE CHIC DECOR. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#c5a059]">Privacy Policy</a>
          <a href="#" className="hover:text-[#c5a059]">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
