import React, { useState, useEffect } from "react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: "Albert Flores",
      title: "General Manager",
      rating: 5,
      text: "Outstanding digital agency service! Exceptional creativity, strategic approach, and flawless execution. Highly recommend for all digital marketing needs.",
      image: "/review-1.avif",
    },
    {
      name: "Cameron Williamson",
      title: "Marketing Director",
      rating: 5,
      text: "Innovative, efficient, and collaborative digital agency service delivering exceptional results. Highly recommend for top-tier expertise and professionalism.",
      image: "/review-2.jpg",
    },
    {
      name: "Leslie Alexander",
      title: "CEO",
      rating: 5,
      text: "A phenomenal team that brings ideas to life with incredible expertise and creativity. Our company has greatly benefited from their insights.",
      image: "/review-3.jpg",
    },
    {
      name: "Robert Fox",
      title: "Product Manager",
      rating: 5,
      text: "Reliable, skilled, and forward-thinking. Their work has been instrumental in our digital transformation.",
      image: "/review-4.jpg",
    },
    {
      name: "Jenny Wilson",
      title: "Head of Sales",
      rating: 4,
      text: "Very professional and highly skilled team! The results exceeded our expectations.",
      image: "/review-5.jpg",
    },
    {
      name: "Jacob Jones",
      title: "Operations Manager",
      rating: 5,
      text: "Great communication and exceptional execution. Would definitely work with them again!",
      image: "/review-1.avif",
    },
    {
      name: "Courtney Henry",
      title: "CTO",
      rating: 5,
      text: "An amazing experience working with such a dedicated team. Their technical expertise is top-notch.",
      image: "/review-2.jpg",
    },
    {
      name: "Devon Lane",
      title: "Founder",
      rating: 5,
      text: "Highly recommend! Their work speaks for itself. A truly outstanding agency.",
      image: "/review-3.jpg",
    },
  ];

  // Adjust slides per view based on screen size
  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1024) return 1; // sm and md
      return 2; // lg and above
    }
    return 2; // default for SSR
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, currentSlide]);

  const TestimonialCard = ({ testimonial }) => (
    <div className="relative bg-gray-800 p-6 lg:p-8 rounded-2xl shadow-xl text-white flex flex-col lg:flex-row gap-4 lg:gap-6 items-center w-full h-full">
      {/* Image - Responsive sizing */}
      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-cyan-400 md:-mt-8">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="flex-1 w-full">
        {/* Stars */}
        <div className="flex items-center mb-2 md:mb-4 justify-center md:justify-start">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Text - Responsive font sizes */}
        <p className="text-xs md:text-sm text-gray-300 mb-4 md:mb-6 text-center md:text-left">
          {testimonial.text}
        </p>

        {/* Name Card - Responsive sizing */}
        <div className="bg-gray-700 px-4 md:px-6 py-2 rounded-lg border border-gray-600 w-full max-w-full md:max-w-[220px] mx-auto md:mx-0">
          <h4 className="text-white text-sm font-semibold text-center md:text-left">
            {testimonial.name}
          </h4>
          <p className="text-gray-400 text-xs text-center md:text-left">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="bg-black min-h-screen flex flex-col items-center justify-center p-4 md:p-8 pt-16 md:pt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-16 text-center">
        Clients Share Their Success Stories
        <span className="text-cyan-400">.</span>
      </h1>

      <div className="relative w-full max-w-6xl px-2 md:px-4">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full flex-shrink-0 mx-1 justify-between"
              >
                {testimonials
                  .slice(slideIndex * slidesPerView, slideIndex * slidesPerView + slidesPerView)
                  .map((testimonial, index) => (
                    <div key={index} className="w-full">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls - Responsive spacing and sizing */}
        <div className="flex justify-between items-center mt-4 md:mt-8">
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={prevSlide}
              className="text-white bg-cyan-400 rounded-full p-1 md:p-2 shadow-lg hover:bg-cyan-500 text-sm md:text-base"
            >
              &#10094;
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1 md:gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-cyan-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={nextSlide}
              className="text-white bg-cyan-400 rounded-full p-1 md:p-2 shadow-lg hover:bg-cyan-500 text-sm md:text-base"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;