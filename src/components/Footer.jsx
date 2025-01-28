import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-red-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-red-500 text-4xl font-bold">
              DIGITAL<br />360°
            </div>
            <h2 className="text-2xl font-bold text-white">
              FULL SERVICE<br />
              DIGITAL MARKETING<br />
              AGENCY
            </h2>
            <p className="text-lg">Accelerate your digital growth!</p>
          </div>

          {/* Services Column 1 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold mb-4">OUR 360 MARKETING SERVICES</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-red-400 underline">BRAND BUILDING</a>
              <a href="#" className="block hover:text-red-400 underline">CONTENT MARKETING</a>
              <a href="#" className="block hover:text-red-400 underline">COPYWRITING</a>
              <a href="#" className="block hover:text-red-400 underline">DESIGN</a>
              <a href="#" className="block hover:text-red-400 underline">DIGITAL MARKETING STRATEGY</a>
            </div>
          </div>

          {/* Services Column 2 */}
          <div className="space-y-3 pt-12">
            <div className="space-y-2">
              <a href="#" className="block hover:text-red-400 underline">INSTAGRAM MARKETING</a>
              <a href="#" className="block hover:text-red-400 underline">LINKEDIN MANAGEMENT</a>
              <a href="#" className="block hover:text-red-400 underline">SEARCH ENGINE OPTIMIZATION</a>
              <a href="#" className="block hover:text-red-400 underline">SOCIAL MEDIA MARKETING</a>
              <a href="#" className="block hover:text-red-400 underline">TWITTER MANAGEMENT</a>
            </div>
          </div>

          {/* Contact & Social Media */}
          <div className="space-y-6">
            <button className="border-2 border-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition-colors">
              CONTACT US
            </button>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-red-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-red-400">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;