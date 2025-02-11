
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import TestimonialSection from '../components/TestimonialSection';

const ServicesPage = () => {
  const services = [
    {
      title: "HR Development",
      description: "We enhance workforce skills through targeted training and professional development ...",
      image: "/s1.webp", // Replace with actual image
    },
    {
      title: "Technology Integration",
      description: "We integrate advanced technology solutions to optimize operations and drive innovation ...",
      image: "/s2.webp",
    },
    {
      title: "Marketing Strategy",
      description: "Our marketing strategies drive brand awareness, customer engagement, and business growth ...",
      image: "/s3.webp",
    },
    {
      title: "Strategic Planning",
      description: "Our strategic planning ensures sustainable growth and long-term success for your business ...",
      image: "/s4.webp",
    },
    {
      title: "Financial Consulting",
      description: "We provide expert financial consulting to maximize profitability and ensure fiscal stability ...",
      image: "/s5.webp",
    },
    {
      title: "Operational Optimization",
      description: "We optimize operations to enhance efficiency, reduce costs, and improve performance ...",
      image: "/s6.webp",
    },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const achievements = [
    { title: "Excellence Recognizing", subtitle: "Design Awards – Innovation", year: "2018" },
    { title: "Recognizing Excellence", subtitle: "Design Awards – Innovation", year: "202" },
    { title: "Construction", subtitle: "Design Awards – Innovation", year: "22" },
    { title: "Projects Planning", subtitle: "Design Awards – Innovation", year: "2024" },
  ];
  
  return (
    <div className="min-h-screen bg-black">
          {/* Navbar */}
      
          <div className="flex justify-center mt-6">
  <div className="relative px-6 py-2 rounded-full inline-flex items-center gap-6 bg-white/10 backdrop-blur-md">
    <Link to="/" className="hover:text-blue-300 text-white font-medium">
      Home
    </Link>
    <span className="text-gray-400">•</span>
    <Link to="/Services" className="hover:text-blue-300 text-white font-medium">
      Services
    </Link>
    
    {/* Cyan Border */}
    <div className="absolute inset-0 rounded-full">
      <div className="absolute inset-0 rounded-full border border-cyan-400"></div>
    </div>
  </div>
</div>

      {/* Main Content */}
      <main className="container mx-auto px-2 md:px-6 pt-12 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-12 tracking-tight">
            Empowering Businesses With
            <br />
            Strategic Growth Solutions
          </h1>
        </div>

        {/* Image Section */}
        <div className="rounded-2xl overflow-hidden mb-12">
          <img
            src="/person.png"
            alt="Business meeting"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-white">
            We offer a wide range of services, including strategic planning, 
            financial management, marketing, and technology integration. 
            By leveraging the latest industry insights and innovative strategies, 
            we ensure your business stays ahead of the curve.
          </p>
        </div>
        <div className="min-h-screen flex flex-col items-center p-8">
      <h2 className="text-center text-4xl font-bold mb-4">
        <span className="text-white">Comprehensive</span>
        <span className="text-white"> Business Consulting Services</span>
        <span className="text-white"> For Growth And Efficiency</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-4 relative">
          <img src={service.image} alt={service.title} className="rounded-lg w-full h-48 object-cover" />
          <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
          <p className="text-gray-600 mt-2">{service.description}</p>
      
          {/* Move the button to the right with percentage positioning */}
          <button className="absolute right-[2%] bottom-[25%]  text-cyan-500 text-2xl font-bold h-12 w-12 flex items-center justify-center p-4 rounded-full border-2 border-cyan-500 
          transition-transform duration-300 ease-in-out hover:bg-cyan-500 hover:text-white hover:rotate-45 hover:scale-105 active:scale-95 
    ">
              <span className="material-icons transform rotate-[320deg]">→</span>
          </button>
      </div>
      
        ))}
      </div>
      {/* <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
    transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
    Browse All Services 
</button> */}
<button className="mt-6 px-6 py-3 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 ">
    Browse All Services 
</button>


    </div>
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/bac.webp')" }}
        animate={{ scale: scrolled ? 1.2 : 1 }}
        transition={{ duration: 4 }}
      />
      
      {/* Video Drop Effect */}
      {scrolled && (
        <motion.div className="absolute w-full h-full flex items-center justify-center">
          <motion.video
            className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[60vw] xl:max-w-[50vw] 
                       rounded-lg shadow-lg 
                       mx-4 sm:mx-8 md:mx-12 lg:mx-16"
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline // Important for iOS
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          />
        </motion.div>
      )}
    </div>
<div className=" py-24 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/bac.webp"
          alt="Business Meeting"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 ">
        <h5 className="text-gray-300 uppercase tracking-widest text-lg font-medium mb-2 underline">
          How It Work
        </h5>
        <h2 className="text-3xl font-bold text-black mb-8 leading-tight ">
          Our Company <br /> Working Process
        </h2>

        {/* Process Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="relative">
            <span className="absolute left-[-9%] top-[-23%] text-6xl text-gray-200 font-bold">01</span>
            <div className="ml-12">
              <h4 className="text-lg font-semibold text-cyan-400">DISCUSSIONS ABOUT PROJECT</h4>
              <p className="text-gray-300 mt-1">
                Forging relationships between multinational corporations, governments, and global NGOs.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <span className="absolute left-[-9%] top-[-23%] text-6xl text-gray-200 font-bold">02</span>
            <div className="ml-12">
              <h4 className="text-lg font-semibold text-cyan-400">START WORK WITH TEAM</h4>
              <p className="text-gray-300 mt-1">
                Design studio founded in London and expanded our services, and became a multinational firm.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <span className="absolute left-[-9%] top-[-23%] text-6xl text-gray-200 font-bold">03</span>
            <div className="ml-12">
              <h4 className="text-lg font-semibold text-cyan-400">HANDOVER & SAVE WORLD</h4>
              <p className="text-gray-300 mt-1">
                We understand the importance of approaching each work integrally and believe in the power.
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  
    <div className="min-h-screen flex items-center justify-center px-10  ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-1">
        {/* Left Side Content */}
        <div className="relative flex flex-col justify-center top-[-70%]">
          <h4 className="text-lg text-white underline ">Our Award</h4>
          <h2 className="text-4xl font-bold mt-2 text-cyan-400">Our Greatest Achievement</h2>
          
          {/* Background Faded Image */}
          <img
            src="/h1-img-1.webp" // Change to your actual image path
            alt="Award Winner"
            className="absolute  -bottom-60 left-0 opacity-80 w-64"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <div className="space-y-9 ">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-white">{item.subtitle}</p>
                </div>
                <span className="text-sm font-semibold text-white">{item.year}</span>
              </div>
            ))}
            
          </div>
          
        </div>
      </div>
      
    </div>
    <div className="max-w-5xl mx-auto py-2 px-6">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="relative"
      >
        
        
      </Swiper>
      <TestimonialSection />
    </div>
  
      </main>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes borderMoveX {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes borderMoveY {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    
    </div>
    
  );
};

export default ServicesPage;
