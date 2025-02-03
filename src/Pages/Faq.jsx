import React from 'react';
import FAQSection from '../components/FAQSection';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="min-h-screen bg-gradient-to-b bg-black">
        {/* Centered Navigation */}
        <div className="flex justify-center">
          <div className="flex space-x-4 bg-black bg-opacity-50 px-4 py-2 mt-4 sm:mt-8 rounded-lg relative overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
              <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
              <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
            </div>

            {/* Navigation Links */}
            <Link to="/" className="text-white hover:text-cyan-400 px-2 sm:px-3 py-1 transition-colors duration-200 text-xs sm:text-sm">
              Home
            </Link>
            <Link to="/Faq" className="text-white hover:text-cyan-400 px-2 sm:px-3 py-1 transition-colors duration-200 text-xs sm:text-sm">
              Faq
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 mt-[-40%]">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center text-white">
          Get In Touch: Expert Business
          <br className="hidden sm:block" />
          Consulting Tailored To You
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] mb-4 sm:mb-6">
          <img
            src="/breadcrumb-img-1.webp"
            alt="Business Meeting"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Description */}
        <p className="text-white max-w-3xl mx-auto text-center text-xs sm:text-sm md:text-base px-2 sm:px-4">
          We offer a wide range of services, including strategic planning,
          financial management, marketing, and technology integration. By
          leveraging the latest industry insights and innovative strategies, we
          ensure your business stays ahead of the curve.
        </p>
      </div>

      {/* Hero Section */}
      <div className="text-center py-8 sm:py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-2 sm:px-4 text-sm sm:text-base">
          Find answers to common questions about our services, processes, and corporate solutions.
        </p>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <div className="text-center py-8 sm:py-10 px-2 sm:px-4">
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          Didn't find what you were looking for?
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-black bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default FAQ;