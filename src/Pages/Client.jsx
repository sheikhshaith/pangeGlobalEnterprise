// src/pages/Client.jsx
import React from "react";
import { Link } from "react-router-dom";

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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center py-10 px-4">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-sm transition-transform transform hover:scale-105"
        >
          {/* Normal Logo */}
          <img
            src={logo.normal}
            alt={`Logo ${index + 1}`}
            className="h-12 object-contain"
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
      <div className="bg-black text-white text-center py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <p className="text-base sm:text-lg text-cyan-400 py-4 sm:py-8">
          Let's Build Together
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-6 sm:pb-8 text-white font-bold mt-2">
          Need To Rethink Your 
          <br />
          Business Process?
        </h1>
        <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition text-sm sm:text-base md:text-lg">
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
     

      {/* Navigation Links */}
      <div className="flex justify-center mt-6 relative">
        <div className="relative px-6 py-2 rounded-full border border-transparent inline-flex items-center gap-6 bg-white/10 backdrop-blur-md">
          <Link to="/" className="hover:text-blue-300 text-white font-medium">
            Home
          </Link>
          <span className="text-gray-400">•</span>
          <Link
            to="/Client"
            className="hover:text-blue-300 text-white font-medium"
          >
            Clients
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
          Get In Touch: Expert Business
          <br />
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
          We offer a wide range of services, including strategic planning,
          financial management, marketing, and technology integration. By
          leveraging the latest industry insights and innovative strategies, we
          ensure your business stays ahead of the curve.
        </p>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <LogoFlip />
      </div>
      <HeroSection />
    </div>
  );
};

export default Client;
