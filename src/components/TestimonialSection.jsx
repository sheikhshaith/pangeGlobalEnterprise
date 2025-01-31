// import { useState, useEffect } from "react";

// const testimonials = [
//   {
//     image: "/review-2.jpg",
//     text: "Pixify transformed our website into a powerful business tool. The design is sleek, user-friendly, and perfectly aligns with our brand. Our online presence has never been stronger, thanks to their incredible team!",
//     name: "Cameron Williamson",
//     position: "Head Of Products",
//   },
//   {
//     image: "/review-3.jpg",
//     text: "Thanks to Pixify, our conversion rates have skyrocketed! The new design is not only beautiful but also highly functional.",
//     name: "Leslie Alexander",
//     position: "Marketing Director",
//   },
//   {
//     image: "/review-1.avif",
//     text: "We couldn’t be happier with our website revamp. The Pixify team delivered beyond expectations!",
//     name: "Kristin Watson",
//     position: "CEO, Startup Inc.",
//   },
//   {
//     image: "/review-4.jpg",
//     text: "Our user engagement has tripled since the redesign. Highly recommend Pixify!",
//     name: "Robert Fox",
//     position: "CTO, TechCorp",
//   },
//   {
//     image: "/review-5.jpg",
//     text: "Absolutely love our new website! The team at Pixify truly understands modern design trends.",
//     name: "Jane Cooper",
//     position: "Creative Director",
//   },
//   {
//     image: "/review-2.jpg",
//     text: "Working with Pixify was a game-changer. The team’s professionalism and expertise were outstanding!",
//     name: "Wade Warren",
//     position: "Founder, BrandX",
//   },
//   {
//     image: "/review-3.jpg",
//     text: "The best decision we made for our online presence. Highly recommended!",
//     name: "Esther Howard",
//     position: "COO, Enterprise Ltd.",
//   },
//   {
//     image: "/review-5.jpg",
//     text: "Exceptional service and stunning results. Thank you, Pixify!",
//     name: "Marvin McKinney",
//     position: "VP of Sales",
//   }
// ];

// const TestimonialSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 4000); // Auto-scroll every 4 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <div>
//         <h3 className="text-gray-300 font-medium underline">Client Testimonials</h3>
//         <h1 className="text-4xl font-bold mt-4 mb-12">Clients Share Their Success Stories</h1>
//       </div>

//       <div className="flex gap-8 items-center">
//         {/* Testimonial Image */}
//         <div className="w-[320px] h-[400px] flex items-center justify-center">
//           <img 
//             src={testimonials[currentIndex].image} 
//             alt="Testimonial"
//             className="w-64 h-64 object-cover rounded-lg"
//           />
//         </div>

//         {/* Testimonial Content */}
//         <div className="flex-1">
//           {/* Star Rating */}
//           <div className="flex gap-1 mb-6">
//             {[...Array(5)].map((_, i) => (
//               <svg key={i} className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//               </svg>
//             ))}
//           </div>
//           {/* Testimonial Text */}
//           <div className="mb-8">
//             <p className="text-3xl font-medium leading-tight">{testimonials[currentIndex].text}</p>
//           </div>
//           {/* Author Details */}
//           <div>
//             <h2 className="text-xl text-white font-semibold">{testimonials[currentIndex].name}</h2>
//             <p className="text-gray-300 mt-1">{testimonials[currentIndex].position}</p>
//           </div>
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex flex-col justify-center gap-4">
//           <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
//             <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
//             </svg>
//           </button>
//           <button onClick={handleNext} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
//             <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;













import { useState, useEffect } from "react";

const testimonials = [
  {
    image: "/review-2.jpg",
    text: "Pixify transformed our website into a powerful business tool. The design is sleek, user-friendly, and perfectly aligns with our brand. Our online presence has never been stronger, thanks to their incredible team!",
    name: "Cameron Williamson",
    position: "Head Of Products",
  },
  {
    image: "/review-3.jpg",
    text: "Thanks to Pixify, our conversion rates have skyrocketed! The new design is not only beautiful but also highly functional.",
    name: "Leslie Alexander",
    position: "Marketing Director",
  },
  {
    image: "/review-1.avif",
    text: "We couldn't be happier with our website revamp. The Pixify team delivered beyond expectations!",
    name: "Kristin Watson",
    position: "CEO, Startup Inc.",
  },
  {
    image: "/review-4.jpg",
    text: "Our user engagement has tripled since the redesign. Highly recommend Pixify!",
    name: "Robert Fox",
    position: "CTO, TechCorp",
  },
  {
    image: "/review-5.jpg",
    text: "Absolutely love our new website! The team at Pixify truly understands modern design trends.",
    name: "Jane Cooper",
    position: "Creative Director",
  },
  {
    image: "/review-2.jpg",
    text: "Working with Pixify was a game-changer. The team's professionalism and expertise were outstanding!",
    name: "Wade Warren",
    position: "Founder, BrandX",
  },
  {
    image: "/review-3.jpg",
    text: "The best decision we made for our online presence. Highly recommended!",
    name: "Esther Howard",
    position: "COO, Enterprise Ltd.",
  },
  {
    image: "/review-5.jpg",
    text: "Exceptional service and stunning results. Thank you, Pixify!",
    name: "Marvin McKinney",
    position: "VP of Sales",
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-center sm:text-left">
        <h3 className="text-gray-300 font-medium underline">Client Testimonials</h3>
        <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-8 sm:mb-12">Clients Share Their Success Stories</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Testimonial Image */}
        <div className="w-full sm:w-80 h-64 sm:h-96 flex items-center justify-center">
          <img 
            src={testimonials[currentIndex].image} 
            alt="Testimonial"
            className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-lg"
          />
        </div>

        {/* Testimonial Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Star Rating */}
          <div className="flex gap-1 mb-6 justify-center lg:justify-start">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 sm:w-6 h-5 sm:h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          
          {/* Testimonial Text */}
          <div className="mb-6 sm:mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-tight">{testimonials[currentIndex].text}</p>
          </div>
          
          {/* Author Details */}
          <div>
            <h2 className="text-lg sm:text-xl text-white font-semibold">{testimonials[currentIndex].name}</h2>
            <p className="text-gray-300 mt-1">{testimonials[currentIndex].position}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex lg:flex-col justify-center gap-4 mt-6 lg:mt-0">
          <button 
            onClick={handlePrev} 
            className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <button 
            onClick={handleNext} 
            className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;