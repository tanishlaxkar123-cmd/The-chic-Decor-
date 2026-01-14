
import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] block mb-6">Contact Us</span>
            <h1 className="text-5xl md:text-8xl serif mb-12">Start a Project</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Whether you are looking to redefine your home, launch a flagship retail space, or design a luxury retreat, our studio is ready to bring your vision to life.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
          {/* Info */}
          <FadeIn direction="left">
            <div className="space-y-20">
              <div>
                <h2 className="text-xs uppercase tracking-[0.4em] text-[#c5a059] mb-12">Our Studio</h2>
                <div className="space-y-12">
                  <div className="flex gap-8">
                    <MapPin className="text-gray-300 shrink-0" size={24} />
                    <div>
                      <h4 className="text-lg serif mb-2">Main Office</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        12-B, Industrial Area Road,<br />
                        Talwandi, Kota, Rajasthan 324005,<br />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <Mail className="text-gray-300 shrink-0" size={24} />
                    <div>
                      <h4 className="text-lg serif mb-2">Email Inquiries</h4>
                      <p className="text-gray-500 text-sm">info@thechicdecor.com</p>
                      <p className="text-gray-500 text-sm">design@thechicdecor.com</p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <Phone className="text-gray-300 shrink-0" size={24} />
                    <div>
                      <h4 className="text-lg serif mb-2">Telephone</h4>
                      <p className="text-gray-500 text-sm">+91 744 240 1234</p>
                      <p className="text-gray-500 text-sm">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-[0.4em] text-[#c5a059] mb-12">Careers</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We are always looking for exceptional talent. If you are a designer or architect who shares our vision for minimalist luxury, please send your portfolio to careers@thechicdecor.com.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right">
            <div className="bg-white p-12 border border-gray-100 shadow-sm">
              <h2 className="text-xs uppercase tracking-[0.4em] text-[#c5a059] mb-12">General Inquiry</h2>
              
              {submitted ? (
                <div className="py-20 text-center animate-pulse">
                  <h3 className="text-2xl serif text-green-600 mb-4">Message Sent</h3>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">Thank you for your interest. We will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:border-black outline-none transition-colors peer placeholder-transparent"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px]">
                        Your Name
                      </label>
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:border-black outline-none transition-colors peer placeholder-transparent"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                      <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px]">
                        Email Address
                      </label>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <select 
                      id="subject"
                      required
                      className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:border-black outline-none transition-colors peer"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option value="">Select Project Type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="relative">
                    <textarea 
                      id="message" 
                      rows={4}
                      required
                      className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:border-black outline-none transition-colors peer placeholder-transparent resize-none"
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                    <label htmlFor="message" className="absolute left-0 -top-4 text-[10px] uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px]">
                      Project Details
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="group flex items-center justify-between w-full border-b-2 border-black pb-4 text-xs uppercase tracking-[0.3em] font-bold hover:text-[#c5a059] hover:border-[#c5a059] transition-all"
                  >
                    <span>Send Message</span>
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Map Placeholder */}
        <section className="h-[500px] bg-gray-100 mb-40 relative overflow-hidden grayscale">
           <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400" 
            alt="Studio location abstraction" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md p-12 text-center shadow-xl">
              <h3 className="text-2xl serif mb-4">Visit Our Studio</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-8">By Appointment Only</p>
              <a href="#" className="text-xs font-bold border-b border-black pb-1">Get Directions</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
