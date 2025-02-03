import React, { useState } from 'react';
import { Users, Briefcase, Banknote, Grid, Layers, Settings,Check } from 'lucide-react';
import { Link } from "react-router-dom";
import FAQSection from '../components/FAQSection';



// AboutSection Component
const HeroSection = () => {
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
        <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 text-white rounded-lg hover:bg-teal-600 transition text-sm sm:text-base md:text-lg">
          Get In Touch →
        </button>
      </div>
    </div>
  );
};

const PerformanceSection = () => {
  return (
    <section className="bg-black py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-12">
            Performance Management
          </h1>
    
          {/* First Paragraph */}
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We implement robust performance management systems to regularly assess and 
              enhance employee performance. Through continuous feedback, goal setting, and 
              performance reviews, we help employees reach their full potential and align their 
              objectives with organizational goals. We implement robust performance management 
              systems to regularly assess and enhance employee performance.
            </p>
          </div>
    
          {/* Second Paragraph */}
          <div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We help you plan for the future by identifying key roles within your organization and 
              developing succession plans to ensure continuity. By preparing future leaders today, we 
              help safeguard your business against potential disruptions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessItem = ({ icon, title, description, isHovered, onHover }) => (
  <div
    className={`flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 mb-6 border rounded-lg transition-all duration-300 ${
      isHovered ? 'shadow-lg bg-gray-500' : ''
    }`}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    <div className={`p-3 mb-4 sm:mb-0 sm:mr-4 bg-blue-100 rounded-full transition-all duration-300 ${
      isHovered ? 'bg-blue-200' : ''
    }`}>
      {icon}
    </div>
    <div className="text-center sm:text-left">
      <h3 className={`text-lg sm:text-xl font-semibold mb-2 transition-all duration-300 ${
        isHovered ? 'text-blue-600' : ''
      }`}>
        {title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  </div>
);

const OurProcess = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const processItems = [
    {
      icon: <Users size={24} className="text-blue-900" />,
      title: "Discussions About Project",
      description: "Forging relationships between multi to national corporations, governments and global NGOs."
    },
    {
      icon: <Briefcase size={24} className="text-blue-900" />,
      title: "Start Work With Team",
      description: "Design studio founded in London and expanded our services, and become a multinational firm."
    },
    {
      icon: <Banknote size={24} className="text-blue-900" />,
      title: "Handover & Save World",
      description: "We understand the importance of approaching each work integrally and believe in the power"
    }
  ];

  return (
    <section className="bg-black py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
            Our Process
          </h2>
          <div className="max-w-4xl text-white mx-auto">
            {processItems.map((item, index) => (
              <ProcessItem
                key={index}
                {...item}
                isHovered={hoveredIndex === index}
                onHover={(isHovered) => setHoveredIndex(isHovered ? index : null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Section = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-900 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-800 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{title}</h2>
      <p className={`text-sm sm:text-base text-gray-300 transition-all duration-300 ${
        isExpanded ? 'max-h-full' : 'max-h-20 sm:max-h-24 overflow-hidden'
      }`}>
        {content}
      </p>
      {!isExpanded && (
        <div className="text-blue-400 text-sm sm:text-base mt-2 hover:underline">Read more</div>
      )}
    </div>
  );
};

const DecisionMakingComponent = () => {
  return (
    <section className="bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Data-Driven Decision Making</h1>
          
          <Section 
            title="Data-Driven Decision Making"
            content="We provide tailored growth strategies to help businesses scale and reach new markets. By analyzing market trends, competitive landscapes, and internal capabilities, we develop actionable plans that drive measurable results and sustainable expansion. We provide tailored growth strategies to help businesses scale and reach new markets."
          />
          
          <Section 
            title="Customer Experience and Retention Strategy"
            content="Sound financial planning is crucial for any thriving business. Our team conducts thorough financial analyses to highlight key growth areas, optimize budgeting, and manage cash flow, ensuring long-term profitability and resilience. Sound financial planning is crucial for any thriving business. Our team conducts thorough financial analyses to highlight key growth areas, optimize budgeting, and manage cash flow, ensuring long-term profitability and resilience."
          />
        </div>
      </div>
    </section>
  );
};
const ServiceItem = ({ icon, title, description }) => (
  <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gray-800 h-full">
    <div className="text-cyan-400 mb-4 sm:mb-6">{icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">{title}</h3>
    <p className="text-sm sm:text-base text-gray-300">{description}</p>
  </div>
);

const HRServicesGrid = () => {
  const services = [
    {
      icon: <Grid size={40} className="sm:w-12 sm:h-12" />,
      title: "Talent Acquisition",
      description: "We focus on identifying and attracting top talent who align with your company's values and goals."
    },
    {
      icon: <Layers size={40} className="sm:w-12 sm:h-12" />,
      title: "Employee Engagement",
      description: "Our HR development service places a strong emphasis on employee engagement and retention."
    },
    {
      icon: <Settings size={40} className="sm:w-12 sm:h-12" />,
      title: "Onboarding And Training",
      description: "Our onboarding programs are crafted to integrate new hires seamlessly into your organization."
    },
    {
      icon: <Users size={40} className="sm:w-12 sm:h-12" />,
      title: "Construction Control",
      description: "We believe in continuous learning and development. Our team designs customized training."
    }
  ];

  return (
    <section className="bg-black py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="w-full flex items-stretch"
              >
                <ServiceItem {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const SolutionsBenefits = () => {
  const benefits = [
    '24/7 client support and guidance',
    'ExpErienced consulting professionals',
    'Data-driven, research-backed strategies',
    'Custom solutions for business growth',
    'Satisfaction guarantee on all services',
    'Free consultation and business assessment',
  ];

  return (
    <section className="bg-black text-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <h2 className="text-2xl text-white sm:text-3xl font-bold mb-4 sm:mb-8">Solutions & Benefits</h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-12">
            By ordering the installation services from us, we can be sure of the quality of materials
            and installation.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-2 lg:order-1">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/sevices2.webp" 
                alt="Placeholder" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ name, title, company, testimonial, avatar }) => (
  <div className="bg-zinc-800 p-4 sm:p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-zinc-700">
    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
      <img 
        src={avatar} 
        alt={name} 
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-3 sm:mb-0 sm:mr-4" 
      />
      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm sm:text-base text-zinc-400">{title}, {company}</p>
      </div>
    </div>
    <p className="text-sm sm:text-base text-zinc-300 text-center sm:text-left">{testimonial}</p>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Albert Flores',
      title: "General Manager",
      company: "Oliver's LAB llc.",
      testimonial: "Outstanding digital agency service! Exceptional creativity, strategic approach, and flawless execution. Highly recommend for all digital marketing needs ...",
      avatar: '/avatar1.jpg',
    },
    {
      name: 'Cameron Williamson',
      title: "Marketing Director",
      company: "Oliver's LAB llc.", 
      testimonial: "Innovative, efficient, and collaborative digital agency service delivering exceptional results. Highly recommend for top-tier expertise and professionalism ...",
      avatar: '/avatar2.jpg',
    },
  ];

  return (
    <section className="bg-black text-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <h2 className="text-2xl sm:text-3xl text-gray-500 font-extrabold text-center mb-6 sm:mb-8 md:mb-12">
            We Work with Clients to Create Solutions that Stand the Test of Time.
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <p className="text-sm sm:text-base">
              Our team is dedicated to delivering exceptional value through close collaboration with our clients. 
              We prioritize understanding their needs and providing success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  // Replace these with your actual image paths 
  const images = [
    '/g-1.webp', 
    '/g-2.webp',
    '/g-3.webp',
    '/g-4.webp',
  ];
  
  return (
    <div className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Main large image */}
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src={images[0]} 
              alt="Gallery image 1" 
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          {/* Right side grid */}
          <div className="grid grid-rows-2 gap-4">
            {/* Top image */}
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={images[1]} 
                alt="Gallery image 2" 
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            {/* Bottom two images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={images[2]} 
                  alt="Gallery image 3" 
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={images[3]} 
                  alt="Gallery image 4" 
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="bg-gray-900 text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-white font-bold text-center mb-6 sm:mb-8">
          What can we help you with?
        </h2>
        <form className="space-y-4 sm:space-y-6">
          {/* Full Name Input */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
              FULL NAME
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="e.g. Oliver Spiteri"
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm 
                focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 
                text-sm sm:text-base bg-gray-800 text-white"
            />
          </div>

          {/* Company Name Input */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">
              COMPANY NAME
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="e.g. Oliver Spiteri"
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm 
                focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 
                text-sm sm:text-base bg-gray-800 text-white"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              PHONE
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+44 20 8980 9731"
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm 
                focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 
                text-sm sm:text-base bg-gray-800 text-white"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="info@forgexindustry.co.uk"
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm 
                focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 
                text-sm sm:text-base bg-gray-800 text-white"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm 
                focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 
                text-sm sm:text-base bg-gray-800 text-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center sm:justify-start">
            <button
              type="submit"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent 
                text-sm sm:text-base font-medium rounded-md shadow-sm text-black bg-cyan-400 
                hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-cyan-500 transition-colors duration-200"
            >
              Send Message
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 sm:h-5 sm:w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const PgeServices = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="p-3 sm:p-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-xl sm:text-2xl font-bold text-cyan-500">
              Pixify
            </Link>

            {/* Search and Menu Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
              <button className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Links */}
      <div className="flex justify-center mt-4 sm:mt-6 px-4">
        <div className="relative px-4 sm:px-6 py-2 rounded-full border border-transparent inline-flex items-center gap-4 sm:gap-6 bg-white/10 backdrop-blur-md">
          <Link to="/" className="text-sm sm:text-base hover:text-blue-300 text-white font-medium">
            Home
          </Link>
          <span className="text-gray-400">•</span>
          <Link
            to="/our-clients"
            className="text-sm sm:text-base hover:text-blue-300 text-white font-medium"
          >
            Our Clients
          </Link>

          {/* Animated Border */}
          <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
            <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
            <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-6 sm:mt-8 text-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          Get In Touch: Expert Business
          <br className="hidden sm:block" />
          Consulting Tailored To You
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] mb-6 sm:mb-8">
          <img
            src="/pgeservices1.webp"
            alt="Business Meeting"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Description */}
        <p className="text-white max-w-3xl mx-auto text-center text-sm sm:text-base px-4">
          We offer a wide range of services, including strategic planning,
          financial management, marketing, and technology integration. By
          leveraging the latest industry insights and innovative strategies, we
          ensure your business stays ahead of the curve.
        </p>
      </div>

      {/* Components Section */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-black">
        <PerformanceSection />
      </div>
      
      {/* Other Sections */}
      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        <OurProcess />
        <DecisionMakingComponent />
        <HRServicesGrid />
        <SolutionsBenefits />
        <TestimonialSection />
        <FAQSection />
        <Gallery />
        <ContactForm />
        <HeroSection />
      </div>
    </div>
  );
};

export default PgeServices;
