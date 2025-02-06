import React, { useState,useRef, useEffect } from "react";
import ServicesSlider from "../components/ServicesSlider";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialHome from "../components/TestimonialHome";
import ContactForm from "../components/ContactForm";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import StatsSection from "../components/StatsSection";
import { Search,Menu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Briefcase,
  Target,
  ArrowRight,
  Lightbulb,
  Phone,
  CircleDashed,
  Globe,
  Plus,
  LayoutGrid,
  Zap,
  Circle,
  ChevronDown, ChevronUp
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
      <span className="text-3xl font-bold text-cyan-400 relative overflow-hidden">
        Pixify
        <div
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform transition-transform duration-300 ${
            isHovered ? "translate-x-0" : "-translate-x-full"
          }`}
        />
        <div
          className={`absolute top-0 right-0 w-0.5 h-full bg-cyan-400 transform transition-transform duration-300 ${
            isHovered ? "translate-y-0 delay-150" : "-translate-y-full"
          }`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-0.5 bg-cyan-400 transform transition-transform duration-300 ${
            isHovered ? "translate-x-0 delay-300" : "translate-x-full"
          }`}
        />
        <div
          className={`absolute top-0 left-0 w-0.5 h-full bg-cyan-400 transform transition-transform duration-300 ${
            isHovered ? "translate-y-0 delay-450" : "translate-y-full"
          }`}
        />
      </span>
    </div>
  );
};

// Service Card Component


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
                <div className="relative w-6 h-6 group-hover:transform group-hover:rotate-x-180 transition-transform duration-300">
                  <client.Icon
                    className={`w-6 h-6 transition-colors duration-300
                      ${
                        selectedClient === client.name
                          ? "text-white"
                          : "text-gray-400 group-hover:text-white"
                      }
                    `}
                  />
                </div>
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

        .rotate-x-180 {
          transform: rotateX(180deg);
        }
      `}</style>
    </section>
  );
};

// Services Section Component
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="relative py-8 px-6 group cursor-pointer overflow-hidden">
    {/* Background hover effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/0 to-cyan-900/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
    
    {/* Animated border on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
    </div>

    <div className="relative z-10">
      {/* Icon with hover animation */}
      <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
        <Icon className="w-12 h-12 text-cyan-400 mb-4 transform group-hover:scale-110 transition-all duration-300" />
      </div>

      {/* Title with hover effect */}
      <h3 className="text-xl font-medium text-gray-200 mb-4 transform group-hover:translate-x-2 transition-transform duration-300">
        {title}
      </h3>

      {/* Description with fade-in effect */}
      <p className="text-gray-400 transform group-hover:translate-x-2 transition-all duration-300">
        {description}
      </p>

      {/* Learn more link that appears on hover */}
      <div className="mt-6 flex items-center text-cyan-400 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <span className="mr-2">Learn more</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section 
      ref={sectionRef}
      className={`w-full bg-black py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title section with animated underline */}
        <div className={`max-w-4xl mb-20 relative group cursor-pointer ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl text-gray-200 font-medium leading-tight transform group-hover:translate-x-2 transition-transform duration-300">
            We Offer Expert Consulting For Strategic
            <br />
            Growth And Operational Excellence Solutions
            <span className="text-cyan-400">.</span>
          </h2>
          {/* Animated underline */}
          <div className="absolute bottom-0 left-0 w-24 h-1 bg-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Animated border for the grid */}
          <div className={`absolute inset-0 border-t border-b border-gray-800 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`} />

          {/* Service cards */}
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transform transition-all duration-1000`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Contact section with hover effects */}
        <div className={`mt-12 flex items-center justify-center space-x-2 cursor-pointer group transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gray-900/50 hover:bg-gray-900 transition-colors duration-300">
            <Phone className="w-5 h-5 text-cyan-400 transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-gray-400">Have any questions? Free:</span>
            <span className="text-gray-200 group-hover:text-cyan-400 transition-colors duration-300">
              +1 917 265 8444
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};



const EarthSection = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Main Content Container */}
      <div className="bg-black container mx-auto px-4 py-16 relative">
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
          <div className="absolute  inset-0  flex items-center justify-center">
            <img
              src="o1-earth-3.webp"
              alt="Digital Earth"
              className="w-4/5 h-4/5 object-contain animate-rotate-earth"
            />
          </div>

          {/* Continuous Moving Thin Glowing Curved Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <path
              d="M 5,30 Q 20,50 35,30 T 65,30 T 95,30"
              fill="none"
              stroke="white"
              strokeWidth="0.1"
              className="animate-glow-line"
              filter="url(#glow)"
            />
            <path
              d="M 5,60 Q 20,80 35,60 T 65,60 T 95,60"
              fill="none"
              stroke="white"
              strokeWidth="0.1"
              className="animate-glow-line delay-1"
              filter="url(#glow)"
            />
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Floating Text Elements */}
        {/* Floating Text Elements - Hidden on small screens */}
<div className="hidden md:block absolute top-1/4 left-0 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-md p-3 rounded-lg text-white shadow-lg border border-cyan-400 shadow-cyan-400/20">
  <p className="text-white text-sm whitespace-nowrap">
    Innovate. Lead.
    <br />
    Succeed. Thrive.
  </p>
</div>

<div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2 bg-gray-900/80 backdrop-blur-md p-3 rounded-lg text-white shadow-lg border border-cyan-400 shadow-cyan-400/20">
  <p className="text-white text-sm whitespace-nowrap">
    Empowering Growth
    <br />
    with Innovation.
  </p>
</div>
</div></div>

      {/* Additional Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      {/* CSS Animations */}
      <style jsx="true">{`
        @keyframes rotate-earth {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-rotate-earth {
          animation: rotate-earth 20s linear infinite;
        }

        @keyframes glow-line {
          0% {
            stroke-dasharray: 0, 100;
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dasharray: 100, 0;
            stroke-dashoffset: 0;
          }
        }

        .animate-glow-line {
          animation: glow-line 4s linear infinite;
        }

        .delay-1 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

const Global = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Main Content Container */}
      <div className="bg-black container mx-auto px-4 py-16 relative">
        {/* Heading */}
        <div className=" mb-0">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-semibold text-white max-w-3xl mx-auto leading-tight">
            Global Offices Our Corporate Business
            <br />
            Locations Overview.
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
              src="a2-earth.webp"
              alt="Digital Earth"
              className="w-3/5 h-3/5 object-contain"
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

        {/* Floating Text Elements - Hidden on small screens */}
<div className="hidden md:block absolute top-1/4 left-0 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-md p-3 rounded-lg text-white shadow-lg border border-cyan-400 shadow-cyan-400/20">
  <p className="text-white text-sm whitespace-nowrap">
    Innovate. Lead.
    <br />
    Succeed. Thrive.
  </p>
</div>

<div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2 bg-gray-900/80 backdrop-blur-md p-3 rounded-lg text-white shadow-lg border border-cyan-400 shadow-cyan-400/20">
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

    
    
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-900/90 backdrop-blur-md text-white relative">
      {/* Main Content */}
      <main className="relative z-10 mx-auto px-4 pt-16 pb-6 flex flex-col lg:flex-row items-center">
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

        {/* Logo */}
        <div className="absolute top-4 left-4 px-4 sm:px-8 lg:px-28 z-10">
          <span className="text-3xl sm:text-4xl lg:text-5xl text-cyan-400 font-bold inline-block transform ">
            PGE
          </span>
        </div>

        {/* Left Content */}
        <div className="w-full lg:w-2/5 z-10 mt-16 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 px-4 sm:px-8 lg:px-28 text-white">
            Transforming
            <br />
            Businesses With
            <br />
            Expertise<span className="text-cyan-400">.</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-6 px-4 sm:px-8 lg:px-28 max-w-lg">
            Our consulting service drives growth, enhances efficiency, and
            transforms businesses for lasting success.
          </p>
          <div className="px-4 sm:px-8 lg:px-28">
            <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-2 rounded-full text-base hover:bg-cyan-400 hover:text-white transition-colors">
              Free Consultation
            </button>
          </div>
        </div>

        {/* Right Content - Person Image */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center lg:justify-end">
          <div className="h-[550px] w-full lg:w-[90%] relative">
            <img
              src="h1-img-1.webp"
              alt="Business professional"
              className="h-[495px] sm:h-[300px]  md:h-[480px] lg:h-[87%] w-full object-contain object-center lg:object-right relative top-20 sm:top-24"
            />

            {/* Floating Card - Hidden on mobile */}
            {/* Floating Card */}
            <div className="hidden sm:block md:absolute top-[25%] sm:top-[30%] md:top-[32%] lg:top-[33%] 2xl:top-[33%] left-24 sm:left-12 md:left-3 lg:left-[-12%] 2xl:left-[23.5%] xl:left-[16%] bg-white/3 backdrop-blur-md p-3 rounded-lg text-white shadow-lg border border-cyan-400 shadow-cyan-400/20">
              <p className="text-base">Driving Success</p>
              <p className="text-sm text-gray-300">Through Innovation</p>
            </div>

            {/* Connecting Lines */}
            <div className="hidden sm:block md:absolute top-[30%] sm:top-[20%] md:top-[37%] lg:top-[39%]  2xl:top-[37.5%] right-[60.9%] sm:right-[50%] md:right-[76.9%] lg:right-[75.9%] 2xl:right-[53%] xl:right-[59%] w-[8px] sm:w-[10px] md:w-[12px] h-[8px] sm:h-[10px] md:h-[12px] bg-cyan-400 rounded-full shadow-[0_0_10px_4px_rgba(6,182,212,0.8)]"></div>

            <div className="hidden sm:block md:absolute top-[20%] sm:top-[15%] md:top-[27%] lg:top-[29%] 2xl:top-[26.5%]  left-[49.3%] sm:left-[45%] md:left-[30.9%] lg:left-[36.3%] 2xl:left-[56%] xl:left-[50.5%] sm:h-[80px] md:h-[120px] 2xl:h-[130px]  sm:w-[0.8px] md:w-[1px] bg-cyan-400 transform rotate-[90deg] shadow-[0_0_15px_rgba(6,182,212,0.7)]"></div>

            <div className="hidden sm:block md:absolute bottom-[37.1%] sm:bottom-[40%] md:bottom-[30.1%] lg:bottom-[28.1%] 2xl:bottom-[28%] right-[34%] sm:right-[30%] md:right-[52%] lg:right-[36%] 2xl:right-[24%] xl:right-[29%] sm:h-[160px] md:h-[200px] 2xl:h-[210px] sm:w-[0.8px] md:w-[1px] bg-cyan-400 rotate-[140deg] shadow-[0_0_15px_rgba(6,182,212,0.7)]"></div>

            <div className="hidden sm:block md:absolute bottom-[40%] sm:bottom-[42%] md:bottom-[32%] lg:bottom-[31%] 2xl:bottom-[30%] right-[23.5%] sm:right-[20%] md:right-[41.5%] lg:right-[19.5%] 2xl:right-[12.5%] xl:right-[16.5%] w-[8px] sm:w-[10px] md:w-[12px] h-[8px] sm:h-[10px] md:h-[12px] bg-cyan-400 rounded-full shadow-[0_0_10px_4px_rgba(6,182,212,0.8)]"></div>
          </div>
        </div>
      </main>
      <ClientSlider />

      {/* Services Section */}
      <ServicesSection/>

      {/* Services Section */}
      <EarthSection />
      <StatsSection />
      <ServicesSlider />
      <div className="min-h-screen bg-black text-white relative">
       <FeaturesSection />
      </div>
      <Global />
      <FAQSection />
      <TestimonialHome />
      <ContactForm />
      <ContactSection />
      
    </div>
  );
};
export default Home;
