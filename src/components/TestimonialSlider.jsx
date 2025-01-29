import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const testimonials = [
        { name: 'Albert Flores', title: 'General Manager', rating: 5, text: 'Outstanding digital agency service! Exceptional creativity, strategic approach, and flawless execution. Highly recommend for all digital marketing needs', image: '/api/placeholder/100/100' },
        { name: 'Cameron Williamson', title: 'Marketing Director', rating: 5, text: 'Innovative, efficient, and collaborative digital agency service delivering exceptional results. Highly recommend for top-tier expertise and professionalism', image: '/api/placeholder/100/100' },
        { name: 'Sarah Johnson', title: 'Product Manager', rating: 5, text: 'Exceptional service and outstanding results. The teams attention to detail and creative solutions exceeded our expectations', image: '/api/placeholder/100/100' },
        { name: 'Michael Chen', title: 'Creative Director', rating: 5, text: 'Brilliant strategic thinking and flawless execution. Their innovative approach transformed our digital presence completely', image: '/api/placeholder/100/100' },
        { name: 'Emily Rodriguez', title: 'Operations Head', rating: 5, text: 'Remarkable expertise in digital solutions. Their team delivered beyond expectations with incredible attention to detail', image: '/api/placeholder/100/100' },
        { name: 'David Kim', title: 'Tech Lead', rating: 5, text: 'Outstanding technical prowess and creative solutions. They truly understand modern digital challenges', image: '/api/placeholder/100/100' },
        { name: 'Lisa Thompson', title: 'Brand Manager', rating: 5, text: 'Exceptional brand awareness and marketing strategies. Their work significantly improved our market position', image: '/api/placeholder/100/100' },
        { name: 'James Wilson', title: 'Digital Strategist', rating: 5, text: 'Incredible results and professional service. Their strategic approach helped us achieve our goals faster', image: '/api/placeholder/100/100' }
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
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isHovered, currentSlide]);

    const TestimonialCard = ({ testimonial, index }) => (
        <div className="w-1/2">
            <div className="bg-gray-800/50 rounded-[2rem] p-8 backdrop-blur-sm relative mb-40 h-[280px] z-10">
                <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-teal-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <div className="flex items-start gap-6">
                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                    <div className="flex-1">
                        <p className="text-gray-300 text-lg line-clamp-4">{testimonial.text}</p>
                    </div>
                </div>

                {/* Name card */}
                <div className="absolute -bottom-40 left-24 z-20">
                    <div className="relative">
                        <div className="bg-gray-800 rounded-xl py-3 px-6 shadow-lg border border-gray-700">
                            <h3 className="text-white font-medium text-sm whitespace-nowrap">{testimonial.name}</h3>
                            <p className="text-gray-400 text-xs">{testimonial.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div
            className="bg-gray-900 min-h-screen flex flex-col items-center justify-start p-8 pt-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h1 className="text-4xl font-bold text-white mb-16">
                Clients Share Their Success Stories
                <span className="text-teal-400">.</span>
            </h1>

            <div className="relative w-full max-w-7xl">
                {/* Connection lines container */}
                <div className="absolute inset-0 z-0">
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div 
                            key={slideIndex} 
                            className="absolute inset-0"
                            style={{
                                opacity: currentSlide === slideIndex ? 1 : 0,
                                transition: 'opacity 0.5s ease-in-out'
                            }}
                        >
                            {[0, 1].map((cardIndex) => {
                                const offset = cardIndex * 50;
                                return (
                                    <div key={cardIndex} className="absolute" style={{ left: `${offset}%` }}>
                                        <div className="absolute top-[50%] left-[10%] w-[10px] h-[10px] bg-cyan-400 rounded-full shadow-[0_0_10px_4px_rgba(6,182,212,0.8)]" />
                                        <div className="absolute top-[50%] left-[10%] h-[120px] w-[1px] bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.7)]" />
                                        <div className="absolute top-[170%] left-[10%] w-[200px] h-[1px] bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.7)]" />
                                        <div className="absolute top-[170%] left-[calc(10%+200px)] w-[10px] h-[10px] bg-cyan-400 rounded-full shadow-[0_0_10px_4px_rgba(6,182,212,0.8)]" />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Testimonial cards */}
                <div className="flex overflow-hidden mb-32">
                    <div
                        className="flex transition-transform duration-500 ease-in-out w-full"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="flex gap-6 w-full flex-shrink-0 px-4">
                                {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                                    <TestimonialCard key={index} testimonial={testimonial} index={index} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-teal-400' : 'bg-gray-600'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;