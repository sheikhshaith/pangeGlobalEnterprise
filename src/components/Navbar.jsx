import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = {
    about: {
      title: 'About Us',
      items: ['Our Story', 'Our Team']
    },
    services: {
      title: 'Services',
      items: ['Digital Marketing', 'Web Development']
    },
    caseStudies: {
      title: 'Case Studies',
      items: ['Success Stories', 'Client Projects']
    },
    blog: {
      title: 'Blog',
      items: ['Latest News', 'Industry Updates']
    },
    careers: {
      title: 'Careers',
      items: ['Open Positions', 'Why Join Us']
    }
  };

  return (
    <nav className="fixed w-full bg-transparent z-50 px-8 py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent text-3xl font-bold tracking-wider">
                DIGITAL 360°
              </span>
            </Link>
          </div>

          {/* Navigation Links with Dropdowns */}
          <div className="hidden md:flex items-center space-x-12">
            {/* Home link without dropdown */}
            <Link to="/" className="text-white hover:text-red-500 transition-colors font-medium tracking-wider">
              Home
            </Link>
            
            {/* Other nav items with dropdowns */}
            {Object.entries(navItems).map(([key, { title, items }]) => (
              <div
                key={key}
                className="relative group"
              >
                <Link
                  to={`/${key}`}
                  className="text-white hover:text-red-500 transition-colors font-medium tracking-wider"
                >
                  {title}
                </Link>
                <div className="absolute left-0 mt-2 py-2 w-48 bg-black border border-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {items.map((item, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="block px-4 py-2 text-sm text-white hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Icons and Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <Link 
              to="/contact" 
              className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-sm"
            >
              contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;