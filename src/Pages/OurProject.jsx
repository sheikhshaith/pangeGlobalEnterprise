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
          <Link to="/contact" className="inline-block">
          <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition text-sm sm:text-base md:text-lg">
            Get In Touch →
          </button>
          </Link>
        </div>
      </div>
    );
  };

const OurProject = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <div className="flex justify-center mt-6">
  <div className="relative px-6 py-2 rounded-full inline-flex items-center gap-6 bg-white/10 backdrop-blur-md">
    <Link to="/" className="hover:text-blue-300 text-white font-medium">
      Home
    </Link>
    <span className="text-gray-400">•</span>
    <Link to="/Project" className="hover:text-blue-300 text-white font-medium">
      Project
    </Link>
    
    {/* Cyan Border */}
    <div className="absolute inset-0 rounded-full">
      <div className="absolute inset-0 rounded-full border border-cyan-400"></div>
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
            src="OurProjectmain.webp"
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
