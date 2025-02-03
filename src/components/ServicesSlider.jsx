// export default PageSlider;
import React, { useState, useEffect, useRef } from "react";
const PageSlider = () => {
  const [activePage, setActivePage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const isTransitioning = useRef(false);
  const lastScrollTime = useRef(0);
  const scrollCooldown = 1000;
  const sliderRef = useRef(null);

  const pages = [
    {
      id: 1,
      title: "Market Analysis",
      text: "Our financial consulting services drive growth, improve profitability, and ensure sound financial management.",
      image: "/b1-img-1.webp",
    },
    {
      id: 2,
      title: "Strategic Planning",
      text: "Transform your business with our expert strategic planning services.",
      image: "/b1-img-2.webp",
    },
    {
      id: 3,
      title: "Product Development",
      text: "Innovative solutions for your product development needs.",
      image: "/b1-img-3.webp",
    },
    {
      id: 4,
      title: "Customer Insights",
      text: "Deep understanding of your customer base.",
      image: "/b1-img-1.webp",
    },
    {
      id: 5,
      title: "Digital Solutions",
      text: "Cutting-edge digital transformation services.",
      image: "/b1-img-2.webp",
    },
    {
      id: 6,
      title: "Data Analytics",
      text: "Data-driven decisions for your business.",
      image: "/b1-img-3.webp",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePageChange = (newPage) => {
    if (
      isTransitioning.current ||
      Date.now() - lastScrollTime.current < scrollCooldown
    ) {
      return;
    }

    if (newPage >= 1 && newPage <= pages.length) {
      isTransitioning.current = true;
      lastScrollTime.current = Date.now();
      setActivePage(newPage);

      setTimeout(() => {
        isTransitioning.current = false;
      }, scrollCooldown);
    }
  };

  const changePage = (direction) => {
    const newPage = activePage + direction;
    handlePageChange(newPage);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (isMobile) return;

      const isAtStart = activePage === 1;
      const isAtEnd = activePage === pages.length;

      if ((isAtStart && e.deltaY < 0) || (isAtEnd && e.deltaY > 0)) {
        return;
      }

      e.preventDefault();
      if (e.deltaY > 0) {
        changePage(1);
      } else if (e.deltaY < 0) {
        changePage(-1);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("wheel", handleScroll, { passive: false });
      return () => slider.removeEventListener("wheel", handleScroll);
    }
  }, [activePage, isMobile]);

  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!isMobile) return;

      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          changePage(1);
        } else {
          changePage(-1);
        }
        touchStartY = touchEndY;
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchmove", handleTouchMove);
      return () => {
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, [isMobile]);

  const PageContent = ({ page }) => (
    <div className="h-full w-full flex flex-col lg:flex-row">
      <div className="h-1/3 lg:h-full lg:w-1/2 relative overflow-hidden">
        <img
          src={page.image}
          alt={page.title}
          className="w-full h-full object-cover opacity-60 transform scale-105 hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="h-2/3 lg:h-full lg:w-1/2 flex items-center bg-gray-900">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 max-w-2xl mx-auto py-6 lg:py-0">
          <p className="text-cyan-400 text-xs sm:text-sm md:text-base mb-2 tracking-wider">
            {String(page.id).padStart(2, "0")} /{" "}
            {String(pages.length).padStart(2, "0")}
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            {page.title}
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8">
            {page.text}
          </p>
          <button
            className="w-full sm:w-auto text-cyan-400 border-2 border-cyan-400 px-4 md:px-6 py-2 
                     rounded-full hover:bg-cyan-400 hover:text-white transition-colors 
                     text-xs sm:text-sm md:text-base"
          >
            Discover More
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      ref={sliderRef}
      className="h-screen w-full overflow-hidden relative bg-gray-900 touch-none"
    >
      {/* Base/Static page */}
      <div className="absolute inset-0 top-0">
        <PageContent page={pages[0]} />
      </div>

      {/* Overlay pages */}
      {pages.slice(1).map((page) => (
        <div
          key={page.id}
          className={`absolute inset-0 top-0 transition-all duration-700 ease-in-out bg-gray-900
            ${
              page.id <= activePage
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
        >
          <PageContent page={page} />
        </div>
      ))}

      {/* Navigation dots with different behavior for mobile/desktop */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 z-50
           ${isMobile ? "bottom-4" : "top-1/2 -translate-y-1/2"}
           flex ${
             isMobile ? "flex-row gap-3" : "flex-col gap-4 md:gap-6 lg:gap-8"
           }`}
      >
        {!isMobile && (
          <div className="h-48 md:h-56 lg:h-64 w-px bg-gray-700 absolute left-1/2 -translate-x-1/2 -z-10" />
        )}
        {pages.map((dot) => (
          <button
            key={dot.id}
            onClick={() => {
              if (isMobile) {
                // On mobile, allow direct navigation to any slide
                handlePageChange(dot.id);
              } else {
                // On desktop, maintain sequential navigation
                if (Math.abs(dot.id - activePage) === 1) {
                  changePage(dot.id > activePage ? 1 : -1);
                }
              }
            }}
            className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center 
              text-sm sm:text-base md:text-xl transition-all duration-300
              ${
                dot.id === activePage
                  ? "bg-cyan-400 text-white scale-110"
                  : isMobile
                  ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:scale-105"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
          >
            {dot.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PageSlider;
