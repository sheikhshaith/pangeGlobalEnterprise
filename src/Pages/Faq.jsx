
import React, { useEffect } from 'react';
import FAQSection from '../components/FAQSection';
import { Link } from 'react-router-dom';

const FAQ = () => {
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
            <Link to="/Faq" className="text-white hover:text-cyan-400 px-2 sm:px-3 py-1 transition-colors duration-200 text-sm">
              Faq
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white fade-in opacity-0 transition-all duration-1000 ease-out delay-300">
            Get In Touch: Expert Business
            <br className="hidden sm:block" />
            Consulting Tailored To You
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

        {/* FAQ Section */}
        <div className="fade-in opacity-0 transition-all duration-1000 ease-out delay-1000">
          <FAQSection />
        </div>

        {/* Contact Section */}
        <div className="text-center py-16 fade-in opacity-0 transition-all duration-1000 ease-out delay-1400">
          <p className="text-lg text-cyan-400 mb-4">
            Let's Build Together
          </p>
          <h2 className="text-3xl md:text-5xl text-white font-bold mb-8">
            Need To Rethink Your
            <br />
            Business Process?
          </h2>
          <button className="px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-teal-600 transition text-base md:text-lg hover:scale-105 transform duration-200">
            Get In Touch →
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
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