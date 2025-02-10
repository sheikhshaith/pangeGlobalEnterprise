import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicePages = [
    { name: "PGE Services", path: "/services/PgeServices" },
    // { name: "Mobile Apps", path: "/services/mobile-apps" },
    // { name: "Cloud Services", path: "/services/cloud-services" },
  ];

  const handleMouseEnter = () => {
    setShowServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowServicesDropdown(false);
  };

  return (
    <nav
      className={`transition-transform duration-300 fixed left-0 right-0 z-50 ${
        isAtTop ? "bottom-0" : "top-0"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-center items-center h-12">
          {/* Navigation Links Container */}
          <div className="hidden md:block relative">
            <div className="flex items-center bg-black bg-opacity-50 px-4 py-1 rounded-lg relative">
              {/* Animated Border */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
                <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
                <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => navigate("/")}
                  className="text-white hover:text-cyan-400 px-1.5 py-0.5 transition-colors duration-200 text-sm"
                >
                  Home
                </button>
                <button
                  onClick={() => navigate("/about")}
                  className="text-white hover:text-cyan-400 px-1.5 py-0.5 transition-colors duration-200 text-sm"
                >
                  About
                </button>
                {/* Services Dropdown Container */}
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => navigate("/services")}
                    className="text-white hover:text-cyan-400 px-1.5 py-0.5 transition-colors duration-200 text-sm flex items-center"
                  >
                    Services
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        showServicesDropdown
                          ? isAtTop
                            ? "-rotate-0"
                            : ""
                          : isAtTop
                          ? ""
                          : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isAtTop ? "M9 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu - Direction based on navbar position */}
                  <div
                    className={`absolute ${
                      isAtTop ? "bottom-full mb-2" : "top-full mt-2"
                    } left-0 w-48 bg-black bg-opacity-90 rounded-lg shadow-lg transition-all duration-200 ${
                      showServicesDropdown
                        ? "opacity-100 visible translate-y-0"
                        : `opacity-0 invisible ${
                            isAtTop ? "translate-y-2" : "-translate-y-2"
                          }`
                    }`}
                  >
                    {servicePages.map((service, index) => (
                      <button
                        key={service.name}
                        onClick={() => {
                          navigate(service.path);
                          setShowServicesDropdown(false);
                        }}
                        className="block w-full text-left text-white hover:bg-cyan-500 px-4 py-2 text-sm first:rounded-t-lg last:rounded-b-lg"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => navigate("/Client")}
                  className="text-white hover:text-cyan-400 px-1.5 py-0.5 transition-colors duration-200 text-sm"
                >
                  Client
                </button>

                <button
                  onClick={() => navigate("/OurTeam")}
                  className="text-white hover:text-cyan-400 px-1.5 py-0.5 transition-colors duration-200 text-sm"
                >
                  Team
                </button>
                <button
                  onClick={() => navigate("/OurProject")}
                  className="text-white hover:text-cyan-400 px-1.5 py-0.5 transition-colors duration-200 text-sm"
                >
                  Projects
                </button>
                <button
                  onClick={() => navigate("/Faq")}
                  className="text-white hover:text-cyan-400 px-1.5 py-0.5 transition-colors duration-200 text-sm"
                >
                  FAQ
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/Careers");
                  }}
                  className="text-white block px-2 py-1 hover:text-cyan-400 transition-colors duration-200 text-sm w-full text-left"
                >
                  Careers
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="text-white hover:text-cyan-400 px-1.5 py-0.5 transition-colors duration-200 text-sm"
                >
                  Contact
                </button>
              </div>
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

        {/* Mobile Menu - Direction based on navbar position */}
        {isOpen && (
          <div className={`md:hidden ${isAtTop ? "-mt-64" : "mt-2"}`}>
            <div className="bg-black bg-opacity-50 rounded-lg px-3 py-1.5 space-y-0.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/");
                }}
                className="text-white block px-2 py-1 hover:text-cyan-400 transition-colors duration-200 text-sm w-full text-left"
              >
                Home
              </button>

              {/* Services Section in Mobile Menu */}
              <div className="space-y-0.5">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/Services");
                  }}
                  className="text-white block px-2 py-1 hover:text-cyan-400 transition-colors duration-200 text-sm w-full text-left font-medium"
                >
                  Services
                </button>
                {servicePages.map((service) => (
                  <button
                    key={service.name}
                    onClick={() => {
                      setIsOpen(false);
                      navigate(service.path);
                    }}
                    className="text-white block px-6 py-1 hover:text-cyan-400 transition-colors duration-200 text-sm w-full text-left"
                  >
                    {service.name}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/Client");
                }}
                className="text-white block px-2 py-1 hover:text-cyan-400 transition-colors duration-200 text-sm w-full text-left"
              >
                Client
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/contact");
                }}
                className="text-white block px-2 py-1 hover:text-cyan-400 transition-colors duration-200 text-sm w-full text-left"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/faq");
                }}
                className="text-white block px-2 py-1 hover:text-cyan-400 transition-colors duration-200 text-sm w-full text-left"
              >
                Faq's
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/ourteam");
                }}
                className="text-white block px-2 py-1 hover:text-cyan-400 transition-colors duration-200 text-sm w-full text-left"
              >
                Team
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/OurProject");
                }}
                className="text-white block px-2 py-1 hover:text-cyan-400 transition-colors duration-200 text-sm w-full text-left"
              >
                Project
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/Careers");
                }}
                className="text-white block px-2 py-1 hover:text-cyan-400 transition-colors duration-200 text-sm w-full text-left"
              >
                Careers
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/about");
                }}
                className="text-white block px-2 py-1 hover:text-cyan-400 transition-colors duration-200 text-sm w-full text-left"
              >
                About
              </button>
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
