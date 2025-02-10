import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingWidget from "./BookingWidget";

import {
  Check,
  X,
  CircleDashed,
  Globe,
  Plus,
  LayoutGrid,
  Zap,
  Circle,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ContactPage = () => {
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
              to="/Contact"
              className="hover:text-blue-300 text-white font-medium"
            >
               Contact
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

      <main className="container mx-auto px-4">
        <div className="text-center py-8 md:py-12">
          <h1 className="text-4xl text-white md:text-5xl lg:text-5xl font-bold leading-tight mb-8">
            Get in Touch: Expert Business
            <br />
            Consulting Tailored to You
          </h1>

          <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden my-8">
            <img
              src="/breadcrumb-img-1.webp"
              alt="Business meeting"
              className="w-full h-auto"
            />
          </div>

          <div className="max-w-4xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed px-4">
            We offer a wide range of services, including strategic planning,
            financial management, marketing, and technology integration. By
            leveraging the latest industry insights and innovative strategies,
            we ensure your business stays ahead of the curve.
          </div>
        </div>
      </main>

      <section className="bg-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-300 text-sm mb-2 underline">
              Pricing Table
            </p>
            <h2 className="text-white text-4xl font-bold">
              Flexible Pricing Plan For Everyone.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-3xl text-black text-center font-bold mb-4">
                Basic Plan
              </h3>
              <p className="text-gray-600 mb-8 text-center">
                The Basic Plan offers essential features at an affordable price.
              </p>

              <div className="mb-8">
                <span className="text-5xl text-black font-bold">$199</span>
                <span className="text-gray-600">/Monthly</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-900">24h customer support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-900">Project Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-500">Basic Reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-500">Up to 10 Team Members</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-500">Professional Support</span>
                </div>
              </div>

              <button className="w-full py-3 px-4 border border-black text-black bg-white rounded hover:bg-cyan-400 hover:border-cyan-400 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2">
                Select Plan
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-3xl text-black text-center font-bold mb-4">
                Premium Plan
              </h3>
              <p className="text-gray-600 mb-8 text-center">
                The Basic Plan offers essential features at an affordable price.
              </p>

              <div className="mb-8">
                <span className="text-5xl text-black font-bold">$299</span>
                <span className="text-gray-600">/Monthly</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-900">24h customer support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-900">Project Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-900">Basic Reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-900">Up to 10 Team Members</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-500">Professional Support</span>
                </div>
              </div>

              <button className="w-full py-3 px-4 border border-black text-black bg-white rounded hover:bg-cyan-400 hover:border-cyan-400 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2">
                Select Plan
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Advance Plan */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-3xl text-black text-center font-bold mb-4">
                Advance Plan
              </h3>
              <p className="text-gray-600 text-center mb-8">
                The Basic Plan offers essential features at an affordable price.
              </p>

              <div className="mb-8">
                <span className="text-5xl text-black font-bold">$499</span>
                <span className="text-gray-600">/Monthly</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-900">24h customer support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-900">Project Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-900">Basic Reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-900">Up to 10 Team Members</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-900">Professional Support</span>
                </div>
              </div>

              <button className="w-full py-3 px-4 border border-black text-black bg-white rounded hover:bg-cyan-400 hover:border-cyan-400 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2">
                Select Plan
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactSlider />
      <ContactTestimonials />
      <ContectSection />
    </div>
  );
};

// ContectSlider Component
const ContactSlider = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const clients = [
    {
      name: "EasyTax",
      Icon: CircleDashed,
    },
    {
      name: "Europa",
      Icon: Globe,
    },
    {
      name: "Clandestine",
      Icon: Plus,
    },
    {
      name: "3Portals",
      Icon: LayoutGrid,
    },
    {
      name: "Boltshift",
      Icon: Zap,
    },
    {
      name: "Chromatools",
      Icon: Circle,
    },
  ];

  const handleClientClick = (clientName) => {
    setSelectedClient(clientName);
    setIsPaused(true);

    setTimeout(() => {
      setSelectedClient(null);
      setIsPaused(false);
    }, 3000);
  };

  return (
    <section className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl font-semibold text-white mb-4">
              Our Trusted Clients
            </h2> */}
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by 170+ organizations across diverse industries, driving
            innovation and excellence
          </p>
        </div>

        <div className="relative">
          <div
            className={`flex space-x-16 ${
              !isPaused ? "animate-scroll" : ""
            } transition-transform duration-300`}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className={`group flex items-center space-x-3 min-w-[200px] cursor-pointer transform transition-all duration-300
                    ${selectedClient === client.name ? "scale-110" : ""}
                  `}
                onClick={() => handleClientClick(client.name)}
              >
                <div className="relative w-6 h-6 group-hover:transform group-hover:rotate-x-180 transition-transform duration-300">
                  <client.Icon
                    className={`w-6 h-6 transition-colors duration-300
                        ${
                          selectedClient === client.name
                            ? "text-white"
                            : "text-gray-400 group-hover:text-white"
                        }
                      `}
                  />
                </div>
                <span
                  className={`font-medium text-lg transition-colors duration-300
                    ${
                      selectedClient === client.name
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }
                  `}
                >
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
  
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
  
          .rotate-x-180 {
            transform: rotateX(180deg);
          }
        `}</style>
    </section>
  );
};

// ContactTestimonials Component
const testimonials = [
  {
    quote:
      "Pixify Transformed Our Website Into A Powerful Business Tool. The Design Is Sleek, User-Friendly, And Perfectly Aligns With Our Brand. Our Online Presence Has Never Been Stronger, Thanks To Their Incredible Team!",
    author: "Cameron Williamson",
    position: "Head Of Products",
    rating: 5,
  },
  {
    quote:
      "Outstanding service and exceptional results! The team went above and beyond our expectations.",
    author: "Alex Thompson",
    position: "Marketing Director",
    rating: 5,
  },
  {
    quote:
      "The most professional and creative team we've worked with. Highly recommended!",
    author: "Sarah Parker",
    position: "CEO",
    rating: 5,
  },
];

const ContactTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-28">
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 p-2 text-cyan-400 hover:text-cyan-600"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 p-2 text-cyan-400 hover:text-cyan-600"
      >
        <ChevronRight size={24} />
      </button>

      {/* Testimonial content */}
      <div className="text-center px-6 sm:px-12 md:px-16">
        {/* Star rating */}
        <div className="flex justify-center space-x-1 mb-6">
          {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote text */}
        <p className="text-white text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 transition-opacity duration-300">
          {testimonials[currentSlide].quote}
        </p>

        {/* Author info */}
        <div className="space-y-2">
          <p className="text-lg sm:text-xl font-semibold text-white">
            {testimonials[currentSlide].author}
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            {testimonials[currentSlide].position}
          </p>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-cyan-400 w-6 sm:w-8" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ContactSection Component
const ContectSection = () => {
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
      <BookingWidget />
    </div>
  );
};

export default ContactPage;
