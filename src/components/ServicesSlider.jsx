
// import React, { useState, useEffect, useRef } from "react";

// const PageSlider = () => {
//   const [activePage, setActivePage] = useState(1);
//   const isTransitioning = useRef(false);
//   const lastScrollTime = useRef(0);
//   const scrollCooldown = 1000; // 1 second cooldown between scrolls
  
//   const pages = [
//     { id: 1, title: "Market Analysis", text: "Our financial consulting services drive growth, improve profitability, and ensure sound financial management." },
//     { id: 2, title: "Strategic Planning", text: "Transform your business with our expert strategic planning services." },
//     { id: 3, title: "Product Development", text: "Innovative solutions for your product development needs." },
//     { id: 4, title: "Customer Insights", text: "Deep understanding of your customer base." },
//     { id: 5, title: "Digital Solutions", text: "Cutting-edge digital transformation services." },
//     { id: 6, title: "Data Analytics", text: "Data-driven decisions for your business." }
//   ];

//   const changePage = (direction) => {
//     const currentTime = Date.now();
    
//     if (isTransitioning.current || currentTime - lastScrollTime.current < scrollCooldown) {
//       return;
//     }

//     const newPage = activePage + direction;
//     if (newPage >= 1 && newPage <= pages.length) {
//       isTransitioning.current = true;
//       lastScrollTime.current = currentTime;
//       setActivePage(newPage);
      
//       setTimeout(() => {
//         isTransitioning.current = false;
//       }, scrollCooldown);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = (e) => {
//       e.preventDefault();
//       if (e.deltaY > 0) {
//         changePage(1);
//       } else if (e.deltaY < 0) {
//         changePage(-1);
//       }
//     };

//     window.addEventListener('wheel', handleScroll, { passive: false });
//     return () => window.removeEventListener('wheel', handleScroll);
//   }, [activePage]);

//   const PageContent = ({ page }) => (
//     <div className="h-full w-full flex flex-col lg:flex-row">
//       <div className="h-1/3 lg:h-full lg:w-1/2 relative">
//         <img 
//           src="/b1-img-3.webp" 
//           alt={page.title}
//           className="w-full h-full object-cover opacity-60"
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div>
      
//       <div className="h-2/3 lg:h-full lg:w-1/2 flex items-center bg-gray-900">
//         <div className="w-full px-6 md:px-12 lg:px-16 max-w-2xl mx-auto">
//           <p className="text-cyan-400 text-sm md:text-base mb-2">
//             {String(page.id).padStart(2, '0')} / 06
//           </p>
//           <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
//             {page.title}
//           </h2>
//           <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-6 lg:mb-8">
//             {page.text}
//           </p>
//           <button className="w-full sm:w-auto text-cyan-400 border-2 border-cyan-400 px-4 md:px-6 py-2 
//                            rounded-full hover:bg-cyan-400 hover:text-white transition-colors text-sm md:text-base">
//             Discover More
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="h-screen w-full overflow-hidden relative bg-gray-900">
//       {/* Base/Static page */}
//       <div className="absolute inset-0">
//         <PageContent page={pages[0]} />
//       </div>

//       {/* Overlay pages */}
//       {pages.slice(1).map((page) => (
//         <div
//           key={page.id}
//           className={`absolute inset-0 transition-all duration-700 ease-in-out bg-gray-900
//             ${page.id <= activePage ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
//         >
//           <PageContent page={page} />
//         </div>
//       ))}

//       {/* Navigation dots - Centered */}
//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-6 lg:gap-8 z-50">
//         <div className="h-48 md:h-56 lg:h-64 w-px bg-gray-700 absolute left-1/2 -translate-x-1/2 -z-10" />
//         {pages.map((dot) => (
//           <button
//             key={dot.id}
//             onClick={() => {
//               if (Math.abs(dot.id - activePage) === 1) {
//                 changePage(dot.id > activePage ? 1 : -1);
//               }
//             }}
//             className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-sm md:text-base
//               transition-all duration-300
//               ${dot.id === activePage 
//                 ? 'bg-cyan-400 text-white scale-110' 
//                 : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
//           >
//             {dot.id}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PageSlider;





import React, { useState, useEffect } from "react";

const ServicesSlider = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { id: 1, number: "01 / 06", title: "Market Analysis", description: "Stay ahead of the competition with our comprehensive market analysis services. We provide detailed insights into market trends, competitor behavior, and emerging opportunities.", image: "/b1-img-1.webp" },
    { id: 2, number: "02 / 06", title: "Business Strategy", description: "Craft winning strategies with our expert guidance. From operational efficiency to long-term growth plans, we help you navigate the complexities of today's business landscape.", image: "/b1-img-2.webp" },
    { id: 3, number: "03 / 06", title: "Product Development", description: "Transform your ideas into reality with our product development services. We guide you from concept to launch, ensuring your product meets market demands.", image: "/b1-img-3.webp" },
    { id: 4, number: "04 / 06", title: "Customer Insights", description: "Understand your customers like never before. Our insights help you deliver personalized experiences and build lasting relationships with your audience.", image: "/b1-img-1.webp" },
    { id: 5, number: "05 / 06", title: "Digital Marketing", description: "Boost your online presence with our digital marketing services. We specialize in SEO, social media, and content marketing to drive traffic and conversions.", image: "/b1-img-2.webp" },
    { id: 6, number: "06 / 06", title: "Data Analytics", description: "Make data-driven decisions with our advanced analytics solutions. We turn raw data into actionable insights to optimize your operations and strategies.", image: "/b1-img-3.webp" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll(".scroll-section");
      const windowHeight = window.innerHeight;
      const threshold = windowHeight / 3;

      let activeIndex = 1;
      
      sectionElements.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom >= threshold) {
          activeIndex = index + 1;
        }
      });

      setActiveSection(activeIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {sections.map((section) => (
        <div 
          key={section.id} 
          className="min-h-screen w-full sticky top-0 overflow-hidden scroll-section"
        >
          <div className="relative h-full w-full flex flex-col lg:flex-row items-center">
            {/* Image Section - Full width on mobile, half on desktop */}
            <div className="w-full lg:w-1/2 h-[40vh] lg:h-screen relative">
              <div className="absolute inset-0 bg-black/60">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover opacity-60" 
                />
              </div>
            </div>

            {/* Navigation Dots - Horizontal on mobile, vertical on desktop */}
            <div className="absolute left-1/2 -translate-x-1/2 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 bottom-4 lg:bottom-auto 
                          flex flex-row lg:flex-col gap-4 lg:gap-8 z-10">
              {sections.map((dot) => (
                <div
                  key={dot.id}
                  className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 flex items-center justify-center 
                            text-sm lg:text-base transition-all duration-300 ${
                    dot.id === activeSection 
                      ? "border-cyan-400 bg-cyan-400 text-white scale-110" 
                      : "border-gray-400 text-gray-400 scale-100"
                  }`}
                >
                  {dot.id}
                </div>
              ))}
            </div>

            {/* Content Section - Full width on mobile, half on desktop */}
            <div className="w-full lg:w-1/2 min-h-[60vh] lg:h-screen bg-gray-900">
              <div className="h-full flex items-center py-12 lg:py-0">
                <div className="px-6 md:px-8 lg:px-12 max-w-xl mx-auto">
                  <div>
                    <p className="text-gray-400 mb-2 text-sm md:text-base">{section.number}</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg mb-6 lg:mb-8 leading-relaxed">
                      {section.description}
                    </p>
                    <button className="w-full sm:w-auto bg-transparent hover:bg-cyan-400 text-cyan-400 
                                     hover:text-white px-6 py-3 rounded-full border-2 border-cyan-400 
                                     transition-colors duration-300 text-sm md:text-base">
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSlider;