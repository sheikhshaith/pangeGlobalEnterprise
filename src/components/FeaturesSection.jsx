import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Trophy, 
  FileSpreadsheet, 
  Globe,
  ArrowRight
} from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 group cursor-pointer p-4 sm:p-6 rounded-lg transition-all duration-300 hover:bg-gray-900/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-shrink-0 relative">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#C59740]/10 flex items-center justify-center">
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-[#C59740] transform transition-all duration-500 ${
            isHovered ? 'scale-110 rotate-12' : ''
          }`} />
        </div>
        {isHovered && (
          <div className="absolute -inset-1 bg-[#C59740]/20 rounded-lg blur-sm -z-10" />
        )}
      </div>
      <div className="space-y-2 sm:space-y-3">
        <h3 className={`text-lg sm:text-xl font-medium transform transition-all duration-300 ${
          isHovered ? 'text-[#C59740] translate-x-2' : 'text-gray-200'
        }`}>
          {title}
        </h3>
        <p className={`text-sm sm:text-base text-gray-300 leading-relaxed transition-all duration-300 ${
          isHovered ? 'translate-x-2' : ''
        }`}>
          {description}
        </p>
        <div className={`flex items-center gap-2 text-[#C59740] transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-2' : 'opacity-0'
        }`}>
          <span className="text-xs sm:text-sm">Learn more</span>
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const features = [
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customer focus delivers personalized service, ensuring satisfaction and fostering long-term relationships.",
      category: 'service'
    },
    {
      icon: FileSpreadsheet,
      title: "Data Analytics",
      description: "Data analytics drives informed decisions, optimizing performance and achieving measurable business success.",
      category: 'tech'
    },
    {
      icon: Users,
      title: "Agile Management",
      description: "Agile management enhances flexibility, accelerates project delivery, and improves overall team efficiency.",
      category: 'management'
    },
    {
      icon: Trophy,
      title: "Market Analysis",
      description: "Market analysis identifies opportunities, informs strategy, and drives business growth and success.",
      category: 'service'
    },
    {
      icon: FileSpreadsheet,
      title: "Data Analytics",
      description: "Data analytics drives informed decisions, optimizing performance and achieving measurable business success.",
      category: 'tech'
    },
    {
      icon: Globe,
      title: "Sustainable Practice",
      description: "Our commitment to sustainable practices ensures environmental responsibility and business resilience.",
      category: 'management'
    }
  ];

  const filteredFeatures = activeTab === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeTab);

  return (
    <section className="w-full bg-black py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-20">
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-900 rounded-full">
            <span className="text-xs sm:text-sm text-gray-400">Our Unique Way</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-200 font-medium leading-tight">
            Accelerating Future Growth With
            <br className="hidden sm:block" />
            <span className="relative">
              Technology, Innovation, And Expertise
              <span className="absolute text-[#C59740] ml-2">.</span>
            </span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          {['all', 'service', 'tech', 'management'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-[#C59740] text-black'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredFeatures.map((feature, index) => (
            <div
              key={`${feature.title}-${index}`}
              className="transform transition-all duration-500"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`
              }}
            >
              <FeatureCard
                Icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
        <Link to="/services" className="inline-block">
          <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-[#C59740] text-black text-sm sm:text-base font-medium rounded-lg hover:bg-[#C59740] transition-all duration-300 transform hover:-translate-y-1">
            <span className="flex items-center gap-2">
              Browse All Services
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;