import React, { useState } from 'react';
import { Users, Briefcase, Banknote, Grid, Layers, Settings,Check } from 'lucide-react';
import { Link } from "react-router-dom";
import FAQSection from '../components/FAQSection';



const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Lower Section with Text */}
      <div className="bg-black text-white text-center py-16">
        <p className="text-sm text-teal-400">Let's Build Together</p>
        <h1 className="text-3xl  text-white font-bold mt-2">
          Need To Rethink Your Business Process?
        </h1>
        <button className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
          Get In Touch →
        </button>
      </div>
    </div>
  );
};

const PerformanceSection = () => {
    return (
      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-32 sm:px-40 md:px-48 lg:px-64">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Performance Management
            </h1>
    
            {/* First Paragraph */}
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                We implement robust performance management systems to regularly assess and 
                enhance employee performance. Through continuous feedback, goal setting, and 
                performance reviews, we help employees reach their full potential and align their 
                objectives with organizational goals. We implement robust performance management 
                systems to regularly assess and enhance employee performance.
              </p>
            </div>
    
            {/* Second Paragraph */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
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
      className={`flex items-start p-6 mb-6 border rounded-lg transition-all duration-300 ${isHovered ? 'shadow-lg bg-gray-500' : ''}`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className={`p-3 mr-4 bg-blue-100 rounded-full transition-all duration-300 ${isHovered ? 'bg-blue-200' : ''}`}>
        {icon}
      </div>
      <div>
        <h3 className={`text-xl font-semibold mb-2 transition-all duration-300 ${isHovered ? 'text-blue-600' : ''}`}>{title}</h3>
        <p className="text-gray-600">{description}</p>
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
      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-32 sm:px-40 md:px-48 lg:px-64">
            <h2 className="text-3xl text-white font-bold text-center mb-8">Our Process</h2>
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
        className="mb-8 p-6 bg-gray-900 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-800 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
        <p className={`text-gray-300 transition-all duration-300 ${isExpanded ? 'max-h-full' : 'max-h-24 overflow-hidden'}`}>
          {content}
        </p>
        {!isExpanded && (
          <div className="text-blue-400 mt-2 hover:underline">Read more</div>
        )}
      </div>
    );
  };
  
  const DecisionMakingComponent = () => {
    return (
      <section className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-32 sm:px-40 md:px-48 lg:px-64">
            <h1 className="text-4xl font-bold text-center mb-12">Data-Driven Decision Making</h1>
            
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
    <div className="bg-gray-900 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gray-800">
      <div className="text-cyan-400 mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
  
  const HRServicesGrid = () => {
    const services = [
      {
        icon: <Grid size={48} />,
        title: "Talent Acquisition",
        description: "We focus on identifying and attracting top talent who align with your company's values and goals."
      },
      {
        icon: <Layers size={48} />,
        title: "Employee Engagement",
        description: "Our HR development service places a strong emphasis on employee engagement and retention."
      },
      {
        icon: <Settings size={48} />,
        title: "Onboarding And Training",
        description: "Our onboarding programs are crafted to integrate new hires seamlessly into your organization."
      },
      {
        icon: <Users size={48} />,
        title: "Construction Control",
        description: "We believe in continuous learning and development. Our team designs customized training."
      }
    ];
  
    return (
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-32 sm:px-40 md:px-48 lg:px-64">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 lg:gap-y-16">
              <div className="md:w-11/12">
                <ServiceItem {...services[0]} />
              </div>
              <div className="md:w-11/12 md:justify-self-end">
                <ServiceItem {...services[1]} />
              </div>
              <div className="md:w-11/12">
                <ServiceItem {...services[2]} />
              </div>
              <div className="md:w-11/12 md:justify-self-end">
                <ServiceItem {...services[3]} />
              </div>
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
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-32 sm:px-40 md:px-48 lg:px-64">
            <h2 className="text-3xl font-bold mb-8">Solutions & Benefits</h2>
            <p className="text-lg mb-12">
              By ordering the installation services from us, we can be sure of the quality of materials
              and installation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  {benefits.slice(0, Math.ceil(benefits.length / 2)).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
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
    <div className="bg-zinc-800 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-zinc-700">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-zinc-400">{title}, {company}</p>
        </div>
      </div>
      <p className="text-zinc-300">{testimonial}</p>
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
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-32 sm:px-40 md:px-48 lg:px-64">
            <h2 className="text-3xl text-gray-500 font-extrabold text-center mb-12">
              We Work with Clients to Create Solutions that Stand the Test of Time.
            </h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              Our team is dedicated to delivering exceptional value through close collaboration with our clients. We prioritize understanding their needs and providing success.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <div className="bg-black text-white py-16 px-8 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-w-16 aspect-h-9">
              <img src={images[0]} alt="Gallery image 1" className="object-cover rounded-lg" />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="aspect-w-18 aspect-h-9">
                <img src={images[1]} alt="Gallery image 2" className="object-cover rounded-lg w-11/12 justify-self-center" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-w-1 aspect-h-1">
                  <img src={images[2]} alt="Gallery image 3" className="object-cover rounded-lg" />
                </div>
                <div className="aspect-w-1 aspect-h-1"> 
                  <img src={images[3]} alt="Gallery image 4" className="object-cover rounded-lg" />
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
      <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-white font-bold text-center mb-8">
            What can we help you with?
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
                FULL NAME
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="e.g. Oliver Spiteri"
                className="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-gray-800 text-white"
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-300">
                COMPANY NAME
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="e.g. Oliver Spiteri"
                className="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-gray-800 text-white"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                PHONE
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+44 20 8980 9731"
                className="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-gray-800 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="info@forgexindustry.co.uk"
                className="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-gray-800 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-gray-800 text-white"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

const Client = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-cyan-500">
              Pixify
            </Link>

            {/* Search and Menu Icons */}
            <div className="flex items-center gap-4">
              <button className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
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
                  className="w-6 h-6"
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
      <div className="flex justify-center mt-6 relative">
        <div className="relative px-6 py-2 rounded-full border border-transparent inline-flex items-center gap-6 bg-white/10 backdrop-blur-md">
          <Link to="/" className="hover:text-blue-300 text-white font-medium">
            Home
          </Link>
          <span className="text-gray-400">•</span>
          <Link
            to="/our-clients"
            className="hover:text-blue-300 text-white font-medium"
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
      <div className="container mx-auto px-4 mt-8 text-center text-white ">
        <h1 className="text-4xl font-bold mb-8">
          Get In Touch: Expert Business
          <br />
          Consulting Tailored To You
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] mb-8">
          <img
            src="/pgeservices1.webp"
            alt="Business Meeting"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Description */}
        <p className="text-white max-w-3xl mx-auto text-center">
          We offer a wide range of services, including strategic planning,
          financial management, marketing, and technology integration. By
          leveraging the latest industry insights and innovative strategies, we
          ensure your business stays ahead of the curve.
        </p>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-black">
      <PerformanceSection/>
      
      </div>
      <OurProcess/>
      <DecisionMakingComponent/>
      <HRServicesGrid/>


      <SolutionsBenefits/>
      <TestimonialSection/>
      <FAQSection/>
      <Gallery/>
      <ContactForm/>
      <HeroSection />
    </div>
  );
};

export default Client;
