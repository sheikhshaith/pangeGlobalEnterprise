import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const testimonials = [
        { name: 'Albert Flores', title: 'General Manager', rating: 5, text: 'Outstanding digital agency service! Exceptional creativity, strategic approach, and flawless execution. Highly recommend for all digital marketing needs.', image: '/api/placeholder/100/100' },
        { name: 'Cameron Williamson', title: 'Marketing Director', rating: 5, text: 'Innovative, efficient, and collaborative digital agency service delivering exceptional results. Highly recommend for top-tier expertise and professionalism.', image: '/api/placeholder/100/100' },
        { name: 'Leslie Alexander', title: 'CEO', rating: 5, text: 'A phenomenal team that brings ideas to life with incredible expertise and creativity. Our company has greatly benefited from their insights.', image: '/api/placeholder/100/100' },
        { name: 'Robert Fox', title: 'Product Manager', rating: 5, text: 'Reliable, skilled, and forward-thinking. Their work has been instrumental in our digital transformation.', image: '/api/placeholder/100/100' },
        { name: 'Jenny Wilson', title: 'Head of Sales', rating: 4, text: 'Very professional and highly skilled team! The results exceeded our expectations.', image: '/api/placeholder/100/100' },
        { name: 'Jacob Jones', title: 'Operations Manager', rating: 5, text: 'Great communication and exceptional execution. Would definitely work with them again!', image: '/api/placeholder/100/100' },
        { name: 'Courtney Henry', title: 'CTO', rating: 5, text: 'An amazing experience working with such a dedicated team. Their technical expertise is top-notch.', image: '/api/placeholder/100/100' },
        { name: 'Devon Lane', title: 'Founder', rating: 5, text: 'Highly recommend! Their work speaks for itself. A truly outstanding agency.', image: '/api/placeholder/100/100' },
    ];

    const totalSlides = Math.ceil(testimonials.length / 2);

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
        <div className="relative bg-gray-800 p-8 rounded-2xl shadow-xl text-white flex gap-6 items-center w-full h-full">
            {/* Image on the left, reduced size */}
            <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-teal-400 -mt-8">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
            </div>

            {/* Text on the right */}
            <div className="flex-1">
                {/* Stars */}
                <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-teal-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm mb-6">{testimonial.text}</p>

                {/* Name Card at the bottom with consistent size */}
                <div className="bg-gray-700 px-6 py-2 rounded-lg border border-gray-600 w-full max-w-[220px]">
                    <h4 className="text-white text-sm font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs">{testimonial.title}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4 pt-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <h1 className="text-4xl font-bold text-white mb-16">Clients Share Their Success Stories<span className="text-teal-400">.</span></h1>

            <div className="relative w-full max-w-6xl">
                <div className="flex overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out w-full"
                        style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="flex gap-6 w-full flex-shrink-0 mx-1 justify-between">
                                {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                                    <TestimonialCard key={index} testimonial={testimonial} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left and Right Navigation Buttons and Dots placed at the bottom */}
                <div className="flex justify-between items-center mt-8">
                    <div className="flex items-center gap-4">
                        <button onClick={prevSlide} className="text-white bg-teal-400 rounded-full p-2 shadow-lg hover:bg-teal-500">
                            &#10094;
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button key={index} onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-teal-400' : 'bg-gray-600'}`} />
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={nextSlide} className="text-white bg-teal-400 rounded-full p-2 shadow-lg hover:bg-teal-500">
                            &#10095;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
