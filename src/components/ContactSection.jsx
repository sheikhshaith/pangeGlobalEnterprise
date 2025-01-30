// import React from "react";

// const ContactSection = () => {
//   return (
//     <div className="bg-gradient-to-r from-teal-800 to-teal-900 relative overflow-hidden min-h-[500px] sm:min-h-[600px]">
//       {/* Main Content Container */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
//         {/* Top Label */}
//         <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-teal-400 text-teal-400 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
//           Let's Build Together
//         </div>

//         {/* Heading */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12">
//           Interested In Working
//           <br className="hidden sm:block" />
//           Together<span className="text-teal-400">?</span>
//         </h1>

//         {/* Contact Information Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-gray-300 mb-8 sm:mb-12">
//           <div className="space-y-1">
//             <h2 className="text-gray-500 text-xs sm:text-sm mb-1">Address:</h2>
//             <p className="text-sm sm:text-base">327 Park Ave S, New</p>
//             <p className="text-sm sm:text-base">York, NY 10010</p>
//           </div>

//           <div className="space-y-1">
//             <h2 className="text-gray-500 text-xs sm:text-sm mb-1">Hours:</h2>
//             <p className="text-sm sm:text-base">Mon-Fri: 9 AM to 5 PM</p>
//             <p className="text-sm sm:text-base">Sun: Closed</p>
//           </div>

//           <div className="space-y-1">
//             <h2 className="text-gray-500 text-xs sm:text-sm mb-1">Phone:</h2>
//             <p className="text-sm sm:text-base">+1 917 265 8444</p>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <button className="w-full sm:w-auto px-6 py-3 border border-teal-400 text-teal-400 text-sm sm:text-base rounded-full hover:bg-teal-400 hover:text-teal-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-teal-900">
//           Get In Touch
//         </button>
//       </div>

//       {/* Right Side Image - Responsive positioning */}
//       <div className="absolute right-0 top-0 h-full w-full sm:w-2/3 overflow-hidden pointer-events-none">
//         <div className="relative w-full h-full">
//           <img
//             src="/a2-earth.webp"
//             alt="Geometric Pattern"
//             className="absolute h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] object-cover object-left opacity-30 sm:opacity-100 transform 
//               translate-x-1/2 sm:translate-x-1/3 md:translate-x-1/2 lg:translate-x-2/3 
//               translate-y-8 sm:translate-y-16 md:translate-y-24 lg:translate-y-32"
//           />
//         </div>
//       </div>

//       {/* Gradient Overlay - Adjusted for better text readability on all screens */}
//       <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-950/90 to-transparent z-0"></div>
//     </div>
//   );
// };

// export default ContactSection;





















import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-r from-teal-800 to-teal-900 relative overflow-hidden min-h-[500px] sm:min-h-[600px]">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        {/* Top Label */}
        <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-teal-400 text-teal-400 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
          Let's Build Together
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          Interested In Working
          <br className="hidden sm:block" />
          Together<span className="text-teal-400">?</span>
        </h1>

        {/* Contact Information Grid - Minimal spacing */}
        <div className="max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-2 text-gray-300 mb-6">
          <div>
            <h2 className="text-gray-500 text-xs sm:text-sm">Address:</h2>
            <p className="text-sm sm:text-base mt-0.5">327 Park Ave S, New</p>
            <p className="text-sm sm:text-base">York, NY 10010</p>
          </div>

          <div>
            <h2 className="text-gray-500 text-xs sm:text-sm">Hours:</h2>
            <p className="text-sm sm:text-base mt-0.5">Mon-Fri: 9 AM to 5 PM</p>
            <p className="text-sm sm:text-base">Sun: Closed</p>
          </div>

          <div>
            <h2 className="text-gray-500 text-xs sm:text-sm">Phone:</h2>
            <p className="text-sm sm:text-base mt-0.5">+1 917 265 8444</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full sm:w-auto px-6 py-3 border border-teal-400 text-teal-400 text-sm sm:text-base rounded-full hover:bg-teal-400 hover:text-teal-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-teal-900">
          Get In Touch
        </button>
      </div>

      {/* Right Side Image */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-2/3 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 sm:right-[-50px] md:right-0 lg:right-[50px]">
            <div className="animate-spin-slow relative">
              <img
                src="/a2-earth.webp"
                alt="Geometric Pattern"
                className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] object-cover opacity-30 sm:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-950/90 to-transparent z-0"></div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;