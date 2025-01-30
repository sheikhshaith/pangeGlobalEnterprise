
import React, { useState, useEffect, useRef } from "react";

const PageSlider = () => {
  const [activePage, setActivePage] = useState(1);
  const isTransitioning = useRef(false);
  const lastScrollTime = useRef(0);
  const scrollCooldown = 1000; // 1 second cooldown between scrolls
  
  const pages = [
    { id: 1, title: "Market Analysis", text: "Our financial consulting services drive growth, improve profitability, and ensure sound financial management." },
    { id: 2, title: "Strategic Planning", text: "Transform your business with our expert strategic planning services." },
    { id: 3, title: "Product Development", text: "Innovative solutions for your product development needs." },
    { id: 4, title: "Customer Insights", text: "Deep understanding of your customer base." },
    { id: 5, title: "Digital Solutions", text: "Cutting-edge digital transformation services." },
    { id: 6, title: "Data Analytics", text: "Data-driven decisions for your business." }
  ];

  const changePage = (direction) => {
    const currentTime = Date.now();
    
    if (isTransitioning.current || currentTime - lastScrollTime.current < scrollCooldown) {
      return;
    }

    const newPage = activePage + direction;
    if (newPage >= 1 && newPage <= pages.length) {
      isTransitioning.current = true;
      lastScrollTime.current = currentTime;
      setActivePage(newPage);
      
      setTimeout(() => {
        isTransitioning.current = false;
      }, scrollCooldown);
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        changePage(1);
      } else if (e.deltaY < 0) {
        changePage(-1);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [activePage]);

  const PageContent = ({ page }) => (
    <div className="h-full w-full flex flex-col lg:flex-row">
      <div className="h-1/3 lg:h-full lg:w-1/2 relative">
        <img 
          src="/b1-img-3.webp" 
          alt={page.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="h-2/3 lg:h-full lg:w-1/2 flex items-center bg-gray-900">
        <div className="w-full px-6 md:px-12 lg:px-16 max-w-2xl mx-auto">
          <p className="text-cyan-400 text-sm md:text-base mb-2">
            {String(page.id).padStart(2, '0')} / 06
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
            {page.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-6 lg:mb-8">
            {page.text}
          </p>
          <button className="w-full sm:w-auto text-cyan-400 border-2 border-cyan-400 px-4 md:px-6 py-2 
                           rounded-full hover:bg-cyan-400 hover:text-white transition-colors text-sm md:text-base">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen w-full overflow-hidden relative bg-gray-900">
      {/* Base/Static page */}
      <div className="absolute inset-0">
        <PageContent page={pages[0]} />
      </div>

      {/* Overlay pages */}
      {pages.slice(1).map((page) => (
        <div
          key={page.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out bg-gray-900
            ${page.id <= activePage ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          <PageContent page={page} />
        </div>
      ))}

      {/* Navigation dots - Centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-6 lg:gap-8 z-50">
        <div className="h-48 md:h-56 lg:h-64 w-px bg-gray-700 absolute left-1/2 -translate-x-1/2 -z-10" />
        {pages.map((dot) => (
          <button
            key={dot.id}
            onClick={() => {
              if (Math.abs(dot.id - activePage) === 1) {
                changePage(dot.id > activePage ? 1 : -1);
              }
            }}
            className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-sm md:text-base
              transition-all duration-300
              ${dot.id === activePage 
                ? 'bg-cyan-400 text-white scale-110' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
          >
            {dot.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PageSlider;
