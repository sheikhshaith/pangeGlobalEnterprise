import React, { useState, useEffect } from "react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: "Albert Flores",
      title: "General Manager",
      rating: 5,
      text: "Outstanding digital agency service! Exceptional creativity, strategic approach, and flawless execution. Highly recommend for all digital marketing needs",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Cameron Williamson",
      title: "Marketing Director",
      rating: 5,
      text: "Innovative, efficient, and collaborative digital agency service delivering exceptional results. Highly recommend for top-tier expertise and professionalism",
      image: "/api/placeholder/100/100",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const TestimonialCard = ({ testimonial }) => (
    <div className="relative flex flex-col items-center w-[45%] p-6 bg-gray-900 rounded-3xl shadow-lg text-center">
      <div className="relative w-full p-6 bg-gray-800 rounded-3xl">
        <div className="flex justify-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-teal-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mb-4"
        />
        <p className="text-gray-300 text-lg">{testimonial.text}</p>
      </div>

      {/* Connecting Line */}
      <div className="relative w-full flex justify-center">
        <svg className="absolute top-full mt-4" width="120" height="200">
          <path
            d="M60,0 Q60,30 30,30 T0,60"
            stroke="#2DD4BF"
            strokeWidth="2"
            fill="transparent"
          />
          <circle cx="60" cy="0" r="4" fill="#2DD4BF" />
          <circle cx="0" cy="60" r="4" fill="#2DD4BF" />
        </svg>
      </div>

      {/* Name Card */}
      <div className="bg-gray-800 rounded-xl py-3 px-6 shadow-lg border border-gray-700/50 mt-6">
        <h3 className="text-white font-medium text-sm">{testimonial.name}</h3>
        <p className="text-gray-400 text-xs">{testimonial.title}</p>
      </div>
    </div>
  );

  return (
    <div
      className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-8 pt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-4xl font-bold text-white mb-16">
        Clients Share Their Success Stories
        <span className="text-teal-400">.</span>
      </h1>

      <div className="flex justify-center gap-12 w-full max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
