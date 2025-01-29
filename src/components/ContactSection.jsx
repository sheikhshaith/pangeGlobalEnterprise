import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-r from-black to-black-100 min-h-screen p-8 relative overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Label */}
        <div className="inline-block px-4 py-2 border border-teal-400 text-teal-400 rounded-full mb-6">
          Let's Build Together
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-16">
          Interested In Working
          <br />
          Together<span className="text-teal-400">?</span>
        </h1>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 mb-8">
          <div>
            <h2 className="text-gray-500 mb-2">Address:</h2>
            <p>327 Park Ave S, New</p>
            <p>York, NY 10010</p>
          </div>

          <div>
            <h2 className="text-gray-500 mb-2">Hours:</h2>
            <p>Mon-Fri: 9 AM to 5 PM</p>
            <p>Sun: Closed</p>
          </div>

          <div>
            <h2 className="text-gray-500 mb-2">Phone:</h2>
            <p>+1 917 265 8444</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="px-6 py-3 border border-teal-400 text-teal-400 rounded-full hover:bg-teal-400 hover:text-teal-900 transition-colors duration-300">
          Get In Touch
        </button>
      </div>

      {/* Right Side Image */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
        <img 
          src="/a2-earth.webp" // Replace with your actual image path
          alt="Geometric Pattern"
          className="h-full w-full object-cover object-left"
          style={{ transform: 'translateX(30%)' }} // This helps show only half the image
        />
      </div>

      {/* Optional Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-950 to-transparent z-0"></div>
    </div>
  );
};

export default ContactSection;