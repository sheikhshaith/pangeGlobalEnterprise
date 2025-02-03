import React, { useState } from 'react';
import { Link } from "react-router-dom";



const ProjectsHeader = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        
        <a href="#" className="inline-block mb-6 text-gray-600 hover:text-gray-300 underline">
          Explore Our Recent Projects
        </a>
        
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white max-w-4xl mx-auto">
          Discover Our Projects: Innovative Strategies 
          <br />
          And Solutions Transforming Businesses
        </h1>
      </div>
    );
  };

  const projects = [
    {
      id: '001',
      title: 'HR Development',
      description: 'Our customer focus delivers personalized service, ensuring satisfaction and fostering long-term relationships.',
      image: '/OurProjectimg-1.webp'
    },
    {
      id: '002',
      title: 'Technology Integration',
      description: 'Our customer focus delivers personalized service, ensuring satisfaction and fostering long-term relationships.',
      image: '/OurProjectimg-2.webp'
    },
    {
      id: '003',
      title: 'Marketing Strategy',
      description: 'Our customer focus delivers personalized service, ensuring satisfaction and fostering long-term relationships.',
      image: '/OurProjectimg-3.webp'
    },
    {
      id: '004',
      title: 'Strategic Planning',
      description: 'Our customer focus delivers personalized service, ensuring satisfaction and fostering long-term relationships.',
      image: '/OurProjectimg-4.webp'
    },
    {
      id: '005',
      title: 'Financial Consulting',
      description: 'Our customer focus delivers personalized service, ensuring satisfaction and fostering long-term relationships.',
      image: '/OurProjectimg-5.webp'
    },
    {
      id: '006',
      title: 'Operational Optimization',
      description: 'Our customer focus delivers personalized service, ensuring satisfaction and fostering long-term relationships.',
      image: '/OurProjectimg-6.webp'
    }
  ];
  
  const ProjectList = () => {
    const [activeId, setActiveId] = useState('001');
  
    const getImageClasses = (projectId) => {
      const baseClasses = "w-full object-cover grayscale hover:grayscale-0 transition-all duration-500";
      if (projectId === '001' || projectId === '002') {
        return `${baseClasses} h-64`; // Reduced height for first two items
      }
      return `${baseClasses} h-64`; // Normal height for other items
    };
  
    return (
      <div className="bg-black min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Projects List */}
          {projects.map((project) => (
            <div 
              key={project.id}
              className="border-t border-dotted border-gray-800 py-6 relative"
              onMouseEnter={() => setActiveId(project.id)}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-300 ${
                activeId === project.id ? 'opacity-100' : 'opacity-40'
              }`}>
                <div className="flex items-start">
                  <span className="text-cyan-400 text-sm whitespace-nowrap">S / {project.id}</span>
                  <div className="ml-16 space-y-4">
                    <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                    {activeId === project.id && (
                      <p className="text-gray-400 transition-all duration-300">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className={`rounded-3xl overflow-hidden transition-all duration-300 ${
                    activeId === project.id ? 'w-full max-w-md' : 'w-32'
                  }`}>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className={getImageClasses(project.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-dotted border-gray-800"></div>
        </div>
      </div>
    );
  };

  const HeroSection = () => {
    return (
      <div className="relative w-full">
        {/* Lower Section with Text */}
        <div className="bg-black text-white text-center py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <p className="text-base sm:text-lg text-cyan-400 py-4 sm:py-8">
            Let's Build Together
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-6 sm:pb-8 text-white font-bold mt-2">
            Need To Rethink Your 
            <br />
            Business Process?
          </h1>
          <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 text-white rounded-lg hover:bg-teal-600 transition text-sm sm:text-base md:text-lg">
            Get In Touch →
          </button>
        </div>
      </div>
    );
  };

const OurProject = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-cyan-500">
              Pixify
            </Link>

            {/* Search and Menu Icons */}
            <div className="flex items-center gap-4">
              <button className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
              <button className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Links */}
      <div className="flex justify-center mt-6 relative">
        <div className="relative px-6 py-2 rounded-full border border-transparent inline-flex items-center gap-6 bg-white/10 backdrop-blur-md">
          <Link to="/" className="hover:text-blue-300 text-white font-medium">
            Home
          </Link>
          <span className="text-gray-400">•</span>
          <Link
            to="/OurProject"
            className="hover:text-blue-300 text-white font-medium"
          >
            Our Project
          </Link>

          {/* Animated Border */}
          <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
            <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
            <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8 text-center text-white ">
        <h1 className="text-4xl font-bold mb-8">
        Success Stories: Innovative
          <br />
          Projects Driving Business Growth
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] mb-8">
          <img
            src="client1.webp"
            alt="Business Meeting"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Description */}
        <p className="text-white max-w-3xl mx-auto text-center">
          We offer a wide range of services, including strategic planning,
          financial management, marketing, and technology integration. By
          leveraging the latest industry insights and innovative strategies, we
          ensure your business stays ahead of the curve.
        </p>
      </div>
    <ProjectsHeader/>
    <ProjectList/>
      {/* Hero Section */}
      <HeroSection />
    </div>
  );
};

export default OurProject;
