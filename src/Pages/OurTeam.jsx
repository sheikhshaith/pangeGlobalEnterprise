import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

import {
  Check,
  X,
  CircleDashed,
  Globe,
  Plus,
  LayoutGrid,
  Zap,
  Circle,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <div className="flex justify-center mt-6">
  <div className="relative px-6 py-2 rounded-full inline-flex items-center gap-6 bg-white/10 backdrop-blur-md">
    <Link to="/" className="hover:text-blue-300 text-white font-medium">
      Home
    </Link>
    <span className="text-gray-400">•</span>
    <Link to="/Team" className="hover:text-blue-300 text-white font-medium">
      Team
    </Link>
    
    {/* Cyan Border */}
    <div className="absolute inset-0 rounded-full">
      <div className="absolute inset-0 rounded-full border border-cyan-400"></div>
    </div>
  </div>
</div>

      <main className="container mx-auto px-4">
        <div className="text-center py-8 md:py-12">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-8">
          Our Team: Passionate Professionals
            <br />
            for Your Growth
          </h1>

          <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden my-8">
            <img
              src="/breadcrumb-img-1.webp"
              alt="Business meeting"
              className="w-full h-auto"
            />
          </div>

          <div className="max-w-4xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed px-4">
            We offer a wide range of services, including strategic planning,
            financial management, marketing, and technology integration. By
            leveraging the latest industry insights and innovative strategies,
            we ensure your business stays ahead of the curve.
          </div>
        </div>
      </main>

      
      <TeamGrid />
      <OurTeamSlider />
      <ContactForm />
      <ContectSection />
    </div>
  );
};




const TeamMember = ({ name, role, imageUrl }) => (
    <div className="flex flex-col items-center text-center">
      <div className="w-64 h-64 overflow-hidden mb-4">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-300">{role}</p>
    </div>
  );
  
  const TeamGrid = () => {
    const teamMembers = [
      {
        name: 'Marvin McKinney',
        role: 'Manager',
        imageUrl: '/t1.webp'
      },
      {
        name: 'Jerome Bell',
        role: 'Advisor',
        imageUrl: '/t2.webp'
      },
      {
        name: 'Jenny Wilson',
        role: 'Innovator',
        imageUrl: '/t3.webp'
      },
      {
        name: 'Jacob Jones',
        role: 'Specialist',
        imageUrl: '/t4.webp'
      },
      {
        name: 'John Lomka',
        role: 'Strategist',
        imageUrl: '/t6.webp'
      },
      {
        name: "Wesley Van't Hart",
        role: 'Executive',
        imageUrl: '/t7.webp'
      },
      {
        name: 'Don Gepulango',
        role: 'Chief Officer',
        imageUrl: '/t8.webp'
      },
      {
        name: 'Emma Doležal',
        role: 'Commercial Director',
        imageUrl: '/t9.webp'
      }
    ];
  
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-left mb-12">
          <p className="text-sm underline mb-2">Our Dedicated Team</p>
          <h2 className="text-4xl text-white font-bold">
            Meet Our Dynamic And Talented<br />
            Corporate Business Team
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  };


// OurTeam Slider Component
const OurTeamSlider = () => {
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

    setTimeout(() => {
      setSelectedClient(null);
      setIsPaused(false);
    }, 3000);
  };

  return (
    <section className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl font-semibold text-white mb-4">
              Our Trusted Clients
            </h2> */}
          <p className="text-gray-300 max-w-2xl mx-auto">
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

      <style>{`
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



// our team contact from
const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };
  
    const services = [
      'Strategic Planning',
      'Financial Consulting',
      'Operational Optimization',
      'HR Development',
      'Marketing Strategy',
      'Technology Integration'
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            <span className="text-gray-400">We're Eager To </span>
            Collaborate With Ambitious Partners
            <span className="text-gray-400"> And Tackle New Challenges.</span>
          </h1>
          
          <div className="relative mt-8">
            <img 
              src="/h3-img-1.webp"
              alt="Business Professional"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8">
              <svg width="100" height="40" className="text-gray-800">
                <path d="M5 20 Q 25 5, 45 20 T 85 20" stroke="currentColor" fill="none" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="lg:w-1/2">
          <div className="mb-8">
            <h2 className="text-xl text-white font-semibold mb-4">What Can We Help You With?</h2>
            <div className="flex flex-wrap gap-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full border border-gray-200 text-sm hover:bg-cyan-400 hover:border-cyan-400 transition-colors"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
  
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm text-gray-300">NAME</label>
              <input
                type="text"
                id="name"
                placeholder="e.g. Oliver Spiteri"
                className="w-full p-3 border border-gray-200 rounded-lg mt-1"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
  
            <div>
              <label htmlFor="phone" className="text-sm text-gray-300">PHONE</label>
              <input
                type="tel"
                id="phone"
                placeholder="+44 20 8980 9731"
                className="w-full p-3 border border-gray-200 rounded-lg mt-1"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
  
            <div>
              <label htmlFor="email" className="text-sm text-gray-300">EMAIL</label>
              <input
                type="email"
                id="email"
                placeholder="info@forgexindustry.co.uk"
                className="w-full p-3 border border-gray-200 rounded-lg mt-1"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
  
            <div>
              <label htmlFor="message" className="text-sm text-gray-300">MESSAGE</label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                rows="4"
                className="w-full p-3 border border-gray-200 rounded-lg mt-1"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
  
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-colors"
            >
              Send Message
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    );
};




// ContactSection Component
const ContectSection = () => {
  return (
    <div className="relative w-full">
      {/* Lower Section with Text */}
      <div className="bg-black text-white text-center py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <p className="text-base sm:text-lg text-cyan-400 py-4 sm:py-8">
          Let's Build Together
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-6 sm:pb-8 text-white font-bold mt-2">
          Need To Rethink Your
          <br />
          Business Process?
        </h1>
        <Link to="/contact" className="inline-block">
        <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition text-sm sm:text-base md:text-lg">
          Get In Touch →
        </button>
        </Link>
      </div>
    </div>
  );
};

export default OurTeam;
