import React, { useState, useEffect } from 'react';
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
  Circle
} from 'lucide-react';

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
        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform transition-transform duration-300 ${isHovered ? 'translate-x-0' : '-translate-x-full'}`} />
        <div className={`absolute top-0 right-0 w-0.5 h-full bg-teal-400 transform transition-transform duration-300 ${isHovered ? 'translate-y-0 delay-150' : '-translate-y-full'}`} />
        <div className={`absolute top-0 left-0 w-full h-0.5 bg-teal-400 transform transition-transform duration-300 ${isHovered ? 'translate-x-0 delay-300' : 'translate-x-full'}`} />
        <div className={`absolute top-0 left-0 w-0.5 h-full bg-teal-400 transform transition-transform duration-300 ${isHovered ? 'translate-y-0 delay-450' : 'translate-y-full'}`} />
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
      <div className={`w-16 h-16 flex items-center justify-center transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
        <Icon className={`w-full h-full transition-colors duration-300 ${isHovered ? 'text-teal-400' : 'text-gray-300'}`} />
      </div>
      <h3 className={`text-2xl font-normal transition-colors duration-300 ${isHovered ? 'text-teal-400' : 'text-gray-200'}`}>
        {title}
      </h3>
      <p className="text-gray-400 text-lg leading-relaxed">
        {description}
      </p>
      <div className={`absolute bottom-0 left-0 h-1 bg-teal-400 transition-all duration-300 ${isHovered ? 'w-full' : 'w-0'}`} />
    </div>
  );
};

// Client Slider Component
const ClientSlider = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    { 
      name: 'EasyTax', 
      Icon: CircleDashed,
    },
    { 
      name: 'Europa', 
      Icon: Globe,
    },
    { 
      name: 'Clandestine', 
      Icon: Plus,
    },
    { 
      name: '3Portals', 
      Icon: LayoutGrid,
    },
    { 
      name: 'Boltshift', 
      Icon: Zap,
    },
    { 
      name: 'Chromatools', 
      Icon: Circle,
    }
  ];

  const handleClientClick = (name) => {
    setSelectedClient(name === selectedClient ? null : name);
  };

  return (
    <div className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-400 text-xl font-normal">
            Satisfied clients from 170+ organizations in different fields
          </h2>
        </div>
        
        <div className="relative">
          <div className="flex space-x-16 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex items-center space-x-3 min-w-[200px] cursor-pointer"
                onClick={() => handleClientClick(client.name)}
              >
                <client.Icon 
                  className={`w-6 h-6 transition-colors duration-300
                    ${selectedClient === client.name 
                      ? 'text-white' 
                      : 'text-gray-400 group-hover:text-gray-200'}`}
                />
                <div className="flip-card">
                  <div className={`flip-card-inner ${selectedClient === client.name ? 'flipped' : ''}`}>
                    <div className="flip-card-front">
                      <span className="font-medium text-lg text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                        {client.name}
                      </span>
                    </div>
                    <div className="flip-card-back">
                      <span className="font-medium text-lg text-white">
                        {client.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Strategic Planning",
      description: "We offer strategic planning to drive sustainable growth, operational efficiency, and long-term success."
    },
    {
      icon: Target,
      title: "Operational Optimization",
      description: "We optimize operations to enhance efficiency, reduce costs, and improve overall performance."
    },
    {
      icon: Lightbulb,
      title: "Financial Consulting",
      description: "Our financial consulting services drive growth, improve profitability, and ensure sound financial management."
    }
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
            <div key={service.title} className="transform translate-y-10 animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center text-gray-400 space-x-2 animate-pulse hover:animate-none cursor-pointer group">
          <Phone className="w-5 h-5 group-hover:text-teal-400 transition-colors duration-300" />
          <span>Have any questions? Free:</span>
          <span className="text-gray-200 group-hover:text-teal-400 transition-colors duration-300">+1 917 265 8444</span>
        </div>
      </div>
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

    const styleElement = document.createElement('style');
    styleElement.textContent = style;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 px-8 py-6 flex justify-between items-center bg-transparent">
        <LogoSection />
        <div className="flex items-center gap-8">
          <button className="p-2 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110">
            <Search className="h-6 w-6" />
          </button>
          <button 
            className="p-2 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-8 h-screen flex items-center">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-6xl font-bold mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Transforming<br />
            Businesses With<br />
            <span className="text-gray-400">Expertise.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '400ms' }}>
            Our consulting service drives growth, enhances efficiency,<br />
            and transforms businesses for lasting success.
          </p>
          <button className="px-8 py-3 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 opacity-0 animate-slide-up" style={{ animationDelay: '600ms' }}>
            Free Consultation
          </button>
        </div>
      </div>

      {/* Client Slider Section */}
      <ClientSlider />

      {/* Services Section */}
      <ServicesSection />

      {/* Social Links */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        <SocialLink Icon={Twitter} />
        <SocialLink Icon={Facebook} />
        <SocialLink Icon={Linkedin} />
        <SocialLink Icon={Instagram} />
      </div>
    </div>
  );
};

export default Home;