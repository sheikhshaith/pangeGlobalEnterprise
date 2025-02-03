import React, { useEffect } from 'react';
import FAQSection from '../components/FAQSection';
import { Link } from 'react-router-dom';

const FAQ = () => {
  useEffect(() => {
    // Add fade-in class to elements after component mounts
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      element.classList.add('visible');
    });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="min-h-screen bg-gradient-to-b bg-black">
        {/* Centered Navigation */}
        <div className="flex justify-center fade-in opacity-0 transition-all duration-1000 ease-out translate-y-4">
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

      <div className="container mx-auto px-2 sm:px-4" style={{ marginTop: "-40%" }}>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-6 text-center text-white fade-in opacity-0 transition-all duration-1000 ease-out delay-300 translate-y-4">
          Get In Touch: Expert Business
          <br className="hidden sm:block" />
          Consulting Tailored To You
        </h1>

        {/* Hero Image with responsive sizes */}
        <div className="relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] mb-4 sm:mb-6 fade-in opacity-0 transition-all duration-1000 ease-out delay-500 scale-95">
          <img
            src="/breadcrumb-img-1.webp"
            alt="Business Meeting"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Description */}
        <p className="text-white max-w-3xl mx-auto text-center text-xs sm:text-sm md:text-base px-2 sm:px-4 fade-in opacity-0 transition-all duration-1000 ease-out delay-700 translate-y-4">
          We offer a wide range of services, including strategic planning,
          financial management, marketing, and technology integration. By
          leveraging the latest industry insights and innovative strategies, we
          ensure your business stays ahead of the curve.
        </p>
      </div>

      {/* FAQ Section with zoom effect */}
      <div className="fade-in opacity-0 transition-all duration-1000 ease-out delay-1000 scale-95">
        <FAQSection />
      </div>

      {/* Contact Section */}
      <div className="relative w-full">
        {/* Lower Section with Text */}
        <div className="bg-black text-white text-center py-16 px-4 sm:px-6 md:px-8 lg:px-16 fade-in opacity-0 transition-all duration-1000 ease-out delay-1400">
          <p className="text-base sm:text-lg text-cyan-400 py-4 sm:py-8">
            Let's Build Together
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-6 sm:pb-8 text-white font-bold mt-2">
            Need To Rethink Your
            <br />
            Business Process?
          </h1>
          <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 text-white rounded-lg hover:bg-teal-600 transition text-sm sm:text-base md:text-lg hover:scale-105 transform duration-200">
            Get In Touch →
          </button>
        </div>
      </div>
    </div>
  );
};

// Add this CSS to your global styles or component
const styles = `
  .fade-in {
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 4s ease-out, transform 1s ease-out;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes borderMoveX {
    from { background-position-x: 0%; }
    to { background-position-x: 200%; }
  }

  @keyframes borderMoveY {
    from { background-position-y: 0%; }
    to { background-position-y: 200%; }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default FAQ;
