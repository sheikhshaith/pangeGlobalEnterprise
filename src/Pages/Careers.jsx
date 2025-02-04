import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      element.classList.add('visible');
    });
  }, []);

  return (
    <div className="min-h-screen bg-black pt-4 md:pt-8">
      <div className="container mx-auto px-4 flex flex-col">
        {/* Navigation */}
        <div className="flex justify-center mb-8 fade-in opacity-0 transition-all duration-1000 ease-out">
          <div className="flex space-x-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg relative overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
              <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
              <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
            </div>

            <Link to="/" className="text-white hover:text-cyan-400 px-2 sm:px-3 py-1 transition-colors duration-200 text-sm">
              Home
            </Link>
            <Link to="/Careers" className="text-white hover:text-cyan-400 px-2 sm:px-3 py-1 transition-colors duration-200 text-sm">
              Careers
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white fade-in opacity-0 transition-all duration-1000 ease-out delay-300">
          Build Your Career with Us: Unlock
          
            <br className="hidden sm:block" />
            Opportunities, Grow Your Skills
          </h1>

          <div className="w-full h-[200px] md:h-[400px] mb-6 fade-in opacity-0 transition-all duration-1000 ease-out delay-500">
            <img
              src="/breadcrumb-img-1.webp"
              alt="Business Meeting"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <p className="text-white max-w-3xl text-center text-sm md:text-base fade-in opacity-0 transition-all duration-1000 ease-out delay-700">
            We offer a wide range of services, including strategic planning,
            financial management, marketing, and technology integration. By
            leveraging the latest industry insights and innovative strategies, we
            ensure your business stays ahead of the curve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;