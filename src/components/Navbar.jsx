// export default Navbar;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`transition-transform duration-300 fixed left-0 right-0 z-50 ${
        isAtTop ? "bottom-0" : "top-0"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-center items-center h-12">
          {/* Navigation Links Container */}
          <div className="hidden md:flex items-center bg-black bg-opacity-50 px-4 py-1 rounded-lg relative overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
              <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
              <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/ServicesPage" },
                { name: "About", path: "/about" },
                { name: "Client", path: "/Client" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className="text-white hover:text-cyan-400 px-1.5 py-0.5 transition-colors duration-200 text-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden bg-black bg-opacity-50 p-1.5 rounded-lg">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="bg-black bg-opacity-50 rounded-lg px-3 py-1.5 space-y-0.5">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/ServicesPage" },
                { name: "About", path: "/about" },
                { name: "Pages", path: "/pages" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsOpen(false);
                    navigate(item.path);
                  }}
                  className="text-white block px-2 py-1 hover:text-cyan-400 transition-colors duration-200 text-sm w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes borderMoveX {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes borderMoveY {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
