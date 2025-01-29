import React, { useState } from 'react';

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
      className="flex gap-6 group cursor-pointer p-6 rounded-lg transition-all duration-300 hover:bg-gray-900/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-shrink-0 relative">
        <div className="w-12 h-12 rounded-lg bg-teal-400/10 flex items-center justify-center">
          <Icon className={`w-6 h-6 text-teal-400 transform transition-all duration-500 ${
            isHovered ? 'scale-110 rotate-12' : ''
          }`} />
        </div>
        {isHovered && (
          <div className="absolute -inset-1 bg-teal-400/20 rounded-lg blur-sm -z-10" />
        )}
      </div>
      <div className="space-y-3">
        <h3 className={`text-xl font-medium transform transition-all duration-300 ${
          isHovered ? 'text-teal-400 translate-x-2' : 'text-gray-200'
        }`}>
          {title}
        </h3>
        <p className={`text-gray-400 leading-relaxed transition-all duration-300 ${
          isHovered ? 'translate-x-2' : ''
        }`}>
          {description}
        </p>
        <div className={`flex items-center gap-2 text-teal-400 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-2' : 'opacity-0'
        }`}>
          <span className="text-sm">Learn more</span>
          <ArrowRight className="w-4 h-4" />
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
    <section className="w-full bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block px-4 py-1.5 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
            <span className="text-sm text-gray-400">Our Unique Way</span>
          </div>
          <h2 className="text-5xl text-gray-200 font-medium leading-tight">
            Accelerating Future Growth With
            <br />
            <span className="relative">
              Technology, Innovation, And Expertise
              <span className="absolute text-teal-400 ml-2">.</span>
            </span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          {['all', 'service', 'tech', 'management'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-teal-400 text-black'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="text-center mt-20">
          <button className="group px-8 py-4 bg-teal-400 text-black font-medium rounded-lg hover:bg-teal-300 transition-all duration-300 transform hover:-translate-y-1">
            <span className="flex items-center gap-2">
              Browse All Services
              <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
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
      `}</style>
    </section>
  );
};

export default FeaturesSection;