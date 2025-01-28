import React, { useState, useEffect } from "react";
import {
  Search,
  Menu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Briefcase,
  Target,
  Lightbulb,
  Phone,
  CircleDashed,
  Globe,
  Plus,
  LayoutGrid,
  Zap,
  Circle,
} from "lucide-react";

// Logo Section Component
const LogoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-3xl font-bold text-teal-400 relative overflow-hidden">
        Pixify
        <div
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform transition-transform duration-300 ${
            isHovered ? "translate-x-0" : "-translate-x-full"
          }`}
        />
        <div
          className={`absolute top-0 right-0 w-0.5 h-full bg-teal-400 transform transition-transform duration-300 ${
            isHovered ? "translate-y-0 delay-150" : "-translate-y-full"
          }`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-0.5 bg-teal-400 transform transition-transform duration-300 ${
            isHovered ? "translate-x-0 delay-300" : "translate-x-full"
          }`}
        />
        <div
          className={`absolute top-0 left-0 w-0.5 h-full bg-teal-400 transform transition-transform duration-300 ${
            isHovered ? "translate-y-0 delay-450" : "translate-y-full"
          }`}
        />
      </span>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-start space-y-4 p-6 transition-all duration-300 hover:bg-gray-900/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-16 h-16 flex items-center justify-center transition-transform duration-500 ${
          isHovered ? "scale-110" : ""
        }`}
      >
        <Icon
          className={`w-full h-full transition-colors duration-300 ${
            isHovered ? "text-teal-400" : "text-gray-300"
          }`}
        />
      </div>
      <h3
        className={`text-2xl font-normal transition-colors duration-300 ${
          isHovered ? "text-teal-400" : "text-gray-200"
        }`}
      >
        {title}
      </h3>
      <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
      <div
        className={`absolute bottom-0 left-0 h-1 bg-teal-400 transition-all duration-300 ${
          isHovered ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
};

const ClientSlider = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const clients = [
    {
      name: "EasyTax",
      Icon: CircleDashed,
    },
    {
      name: "Europa",
      Icon: Globe,
    },
    {
      name: "Clandestine",
      Icon: Plus,
    },
    {
      name: "3Portals",
      Icon: LayoutGrid,
    },
    {
      name: "Boltshift",
      Icon: Zap,
    },
    {
      name: "Chromatools",
      Icon: Circle,
    },
  ];

  const handleClientClick = (clientName) => {
    setSelectedClient(clientName);
    setIsPaused(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setSelectedClient(null);
      setIsPaused(false);
    }, 3000);
  };

  return (
    <section className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Our Trusted Clients
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by 170+ organizations across diverse industries, driving
            innovation and excellence
          </p>
        </div>

        <div className="relative">
          <div
            className={`flex space-x-16 ${
              !isPaused ? "animate-scroll" : ""
            } transition-transform duration-300`}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className={`group flex items-center space-x-3 min-w-[200px] cursor-pointer transform transition-all duration-300
                  ${selectedClient === client.name ? "scale-110" : ""}
                `}
                onClick={() => handleClientClick(client.name)}
              >
                <client.Icon
                  className={`w-6 h-6 transition-colors duration-300
                    ${
                      selectedClient === client.name
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }
                  `}
                />
                <span
                  className={`font-medium text-lg transition-colors duration-300
                  ${
                    selectedClient === client.name
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }
                `}
                >
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Strategic Planning",
      description:
        "We offer strategic planning to drive sustainable growth, operational efficiency, and long-term success.",
    },
    {
      icon: Target,
      title: "Operational Optimization",
      description:
        "We optimize operations to enhance efficiency, reduce costs, and improve overall performance.",
    },
    {
      icon: Lightbulb,
      title: "Financial Consulting",
      description:
        "Our financial consulting services drive growth, improve profitability, and ensure sound financial management.",
    },
  ];

  return (
    <section className="w-full bg-black py-20 opacity-0 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-20 transform translate-y-10 animate-slide-up">
          <h2 className="text-4xl text-gray-200 font-medium leading-tight">
            We Offer Expert Consulting For Strategic
            <br />
            Growth And Operational Excellence Solutions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-800">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="transform translate-y-10 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center text-gray-400 space-x-2 animate-pulse hover:animate-none cursor-pointer group">
          <Phone className="w-5 h-5 group-hover:text-teal-400 transition-colors duration-300" />
          <span>Have any questions? Free:</span>
          <span className="text-gray-200 group-hover:text-teal-400 transition-colors duration-300">
            +1 917 265 8444
          </span>
        </div>
      </div>
    </section>
  );
};

const EarthSection = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-16 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-3xl mx-auto leading-tight">
            Comprehensive Business
            <br />
            Consulting Services For Growth
            <br />
            And Efficiency
          </h2>
        </div>

        {/* Earth Image and Elements Container */}
        <div className="relative w-full max-w-4xl mx-auto aspect-square">
          {/* Background Lines */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-full">
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
            </div>
          </div>

          {/* Earth Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="o1-earth-3.webp"
              alt="Digital Earth"
              className="w-4/5 h-4/5 object-contain animate-spin-once"
            />
          </div>

          {/* Curved Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <path
              d="M 10,50 Q 50,70 90,50"
              fill="none"
              stroke="rgb(6, 182, 212)"
              strokeWidth="0.2"
              opacity="0.3"
            />
          </svg>

          {/* Floating Text Elements */}
          <div className="absolute top-1/4 left-0 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg">
            <p className="text-white text-sm whitespace-nowrap">
              Innovate. Lead.
              <br />
              Succeed. Thrive.
            </p>
          </div>

          <div className="absolute top-1/4 right-0 transform translate-x-1/2 bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg">
            <p className="text-white text-sm whitespace-nowrap">
              Empowering Growth
              <br />
              with Innovation.
            </p>
          </div>

          {/* Glowing Dots */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full blur-[2px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full blur-[2px]"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-400 rounded-full blur-[2px]"></div>
        </div>
      </div>

      {/* Additional Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
    </section>
  );
};

// Social Link Component
const SocialLink = ({ Icon }) => (
  <a
    href="#"
    className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-teal-400 transition-all duration-300 ease-in-out transform hover:scale-110"
  >
    <Icon className="h-5 w-5" />
  </a>
);

// Main Home Component
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const style = `
      .flip-card {
        perspective: 1000px;
        height: 30px;
      }

      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: left;
        transition: transform 0.6s;
        transform-style: preserve-3d;
      }

      .flipped {
        transform: rotateX(180deg);
      }

      .flip-card-front,
      .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
      }

      .flip-card-back {
        transform: rotateX(180deg);
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .animate-slide-up {
        animation: slideUp 0.6s ease-out forwards;
      }

      .animate-fade-in {
        animation: fadeIn 0.6s ease-out forwards;
      }

      .animate-scroll {
        animation: scroll 25s linear infinite;
      }

      .animate-scroll:hover {
        animation-play-state: paused;
      }
    `;

    const styleElement = document.createElement("style");
    styleElement.textContent = style;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900/90 backdrop-blur-md text-white relative">
      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 pt-16 pb-6 flex flex-col lg:flex-row items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="h1-bg-main-1.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90" />
          {/* Green Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-900/10 to-transparent" />
        </div>

        {/* Text on Top-Left Corner */}
        <div className="absolute top-4 left-4 text-4xl lg:text-5xl font-bold z-10 bg-transparent">
          <span className=" text-5xl mr-1">P</span>ixify
        </div>

        {/* Left Content */}
        <div className="lg:w-1/2 z-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Transforming
            <br />
            Businesses With
            <br />
            Expertise<span className="text-cyan-400">.</span>
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-lg">
            Our consulting service drives growth, enhances efficiency, and
            transforms businesses for lasting success.
          </p>
          <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-2 rounded-full text-base hover:bg-cyan-400 hover:text-white transition-colors">
            Free Consultation
          </button>
        </div>

        {/* Right Content - Person Image */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 relative flex justify-end">
          <div className="h-[550px] w-full lg:w-[90%] relative">
            <img
              src="h1-img-1.webp"
              alt="Business professional"
              className="h-full w-full object-contain object-right"
            />
            {/* Floating Card */}
            <div className="absolute top-1/4 left-0 bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg text-white shadow-lg">
              <p className="text-base">Driving Success</p>
              <p className="text-sm text-gray-300">Through Innovation</p>
            </div>
            {/* Phone Glow Effect */}
            <div className="absolute top-[40%] right-[30%] w-16 h-24 bg-white/10 blur-md rounded-full"></div>
            <div className="absolute top-[40%] right-[30%] w-1 h-24 bg-white/30 rounded-full"></div>
          </div>
          {/* Social Links */}
          <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6">
            <SocialLink Icon={Twitter} />
            <SocialLink Icon={Facebook} />
            <SocialLink Icon={Linkedin} />
            <SocialLink Icon={Instagram} />
          </div>
        </div>
      </main>

      <ClientSlider />

      {/* Services Section */}
      <ServicesSection />

      {/* Services Section */}
      <EarthSection />
    </div>
  );
};

export default Home;
