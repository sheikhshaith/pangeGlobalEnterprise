// import { motion } from "framer-motion";

// const StatsSection = () => {
//   return (
//     <section className="bg-dark text-white py-20 relative overflow-hidden">
//       <motion.div
//         className="container mx-auto text-center px-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.h2
//           className="text-xl md:text-2xl font-light mb-12 leading-relaxed text-gray-300 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//         >
//           Our business consulting services aim to optimize operations and
//           strategies, driving growth and ensuring sustained organizational
//           success and development.
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center text-3xl md:text-4xl text-[#C59740]">
//           {[
//             { value: "13+", label: "Years of Experience" },
//             { value: "25+", label: "Projects Worldwide" },
//             { value: "93+", label: "Clients Worldwide" },
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               className="p-6 rounded-xl bg-gray-800 bg-opacity-50 transition-all transform hover:scale-110 hover:shadow-xl relative"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
//               whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,  183, 227, 0.5)" }}
//             >
//               <span className="block">{stat.value}</span>
//               <span className="block text-lg md:text-xl text-gray-300 mt-2">
//                 {stat.label}
//               </span>
//             </motion.div>
//           ))}
//         </div>

//         {/* Button with hover & click animation */}
//         <motion.div
//           className="mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.8 }}
//         >
//           <motion.button
//             className="bg-[#C59740] text-dark font-medium py-3 px-10 rounded-full shadow-lg transition-all focus:ring-4 focus:ring-teal-200"
//             whileHover={{
//               scale: 1.1,
//               boxShadow: "0px 10px 20px rgba(0, 183, 227, 0.5)",
//               backgroundColor: "[#C59740]",
//             }}
//             whileTap={{ scale: 0.9 }}
//             animate={{
//               scale: [1, 1.05, 1],
//               transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
//             }}
//           >
//             Know About Us
//           </motion.button>
//         </motion.div>
//       </motion.div>

//       {/* Background gradient effect */}
//       <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark to-transparent"></div>
//     </section>
//   );
// };

// export default StatsSection;

import React from "react";
import { Link } from "react-router-dom";

const StatsDisplay = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 gap-16">
      {/* Stats Container */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {/* Years of Experience Card */}
        <div className="bg-slate-900/50 rounded-3xl p-8 flex-1 min-w-[300px] flex flex-col items-center">
          <div className="text-5xl text-[#C59740] font-light mb-4">13+</div>
          <div className="text-gray-300 text-xl text-center">
            Years of Experience
          </div>
        </div>

        {/* Projects Worldwide Card */}
        <div className="bg-slate-900/50 rounded-3xl p-8 flex-1 min-w-[300px] flex flex-col items-center">
          <div className="text-5xl text-[#C59740] font-light mb-4">25+</div>
          <div className="text-gray-300 text-xl text-center">
            Projects Worldwide
          </div>
        </div>

        {/* Clients Worldwide Card */}
        <div className="bg-slate-900/50 rounded-3xl p-8 flex-1 min-w-[300px] flex flex-col items-center">
          <div className="text-5xl text-[#C59740] font-light mb-4">93+</div>
          <div className="text-gray-300 text-xl text-center">
            Clients Worldwide
          </div>
        </div>
      </div>

      {/* Know About Us Button */}
      <Link to="/about" className="inline-block">
        <button
          className="px-8 py-4 bg-[#C59740] text-white rounded-full text-lg 
                       hover:bg-[#C59740] transition-colors duration-300"
        >
          Know About Us
        </button>
      </Link>
    </div>
  );
};

export default StatsDisplay;
