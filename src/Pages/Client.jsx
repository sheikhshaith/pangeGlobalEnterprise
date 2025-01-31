// src/pages/Client.jsx
import React from 'react'
import { Link } from 'react-router-dom'
const logos = [
  { normal: "bright.svg", bold: "chromatools-bold.svg" },
  { normal: "craig.svg", bold: "c2-logo-12.svg" },
  { normal: "hardez.svg", bold: "c2-logo-4.svg" },
  { normal: "issa.svg", bold: "c2-logo-15.svg" },
  { normal: "logitech.svg", bold: "c2-logo-11.svg" },
  { normal: "mailo.svg", bold: "c2-logo-8.svg" },
  { normal: "michelin.svg", bold: "c2-logo-20.svg" },
  { normal: "phil.svg", bold: "c2-logo-18.svg" },
  { normal: "prosper.svg", bold: "c2-logo-16.svg" },
  { normal: "spread.svg", bold: "c2-logo-17.svg" },
  { normal: "bright.svg", bold: "c2-logo-19.svg" },
  { normal: "craig.svg", bold: "c2-logo-13.svg" },
  { normal: "hardez.svg", bold: "c2-logo-9.svg" },
  { normal: "issa.svg", bold: "c2-logo-15.svg" },
  { normal: "logitech.svg", bold: "c2-logo-12.svg" },
  { normal: "mailo.svg", bold: "c2-logo-8.svg" },
  { normal: "michelin.svg", bold: "c2-logo-20.svg" },
  { normal: "phil.svg", bold: "c2-logo-18.svg" },
  { normal: "prosper.svg", bold: "c2-logo-16.svg" },
  { normal: "spread.svg", bold: "c2-logo-17.svg" },
];

const LogoFlip = () => {
  return (
    <div className="grid  grid-cols-5 gap-6 justify-center py-10">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="relative w-24 h-16 transition-transform duration-500 perspective-1000 group"
        >
          {/* Normal Logo */}
          <img
            src={logo.normal}
            alt={`Logo ${index + 1}`}
            className="absolute w-full h-full transition-opacity duration-500 group-hover:opacity-0"
          />
          {/* Bold Logo */}
          <img
            src={logo.bold}
            alt={`Bold Logo ${index + 1}`}
            className="absolute w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
};


const HeroSection = () => {
    return (
      <div className="relative w-full">
       
  
        {/* Lower Section with Text */}
        <div className="bg-black text-white text-center py-16">
          <p className="text-sm text-teal-400">Let's Build Together</p>
          <h1 className="text-3xl  text-white font-bold mt-2">
            Need To Rethink Your Business Process?
          </h1>
          <button className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
            Get In Touch →
          </button>
        </div>
      </div>
    );
  };
const Client = () => {
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              <button className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
{/* Navigation Links */}
<div className="flex justify-center mt-6 relative">
  <div className="relative px-6 py-2 rounded-full border border-transparent inline-flex items-center gap-6 bg-white/10 backdrop-blur-md">
    <Link to="/" className="hover:text-blue-300 text-white font-medium">Home</Link>
    <span className="text-gray-400">•</span>
    <Link to="/our-clients" className="hover:text-blue-300 text-white font-medium">Our Clients</Link>

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
          Get In Touch: Expert Business<br />
          Consulting Tailored To You
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
          We offer a wide range of services, including strategic planning, financial management, marketing,
          and technology integration. By leveraging the latest industry insights and innovative strategies, we
          ensure your business stays ahead of the curve.
        </p>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-black">
      <LogoFlip />
    </div>
    <HeroSection/>
    </div>
    
  )
}

export default Client;