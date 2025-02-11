import React from "react";
import { Link } from "react-router-dom";
import BusinessTeam from "../components/BusinessTeam";
import TestimonialSection from "../components/TestimonialSection";
import FeaturesSection from "../components/FeaturesSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
          {/* Navbar */}
      
    
          {/* Navigation Links */}
          <div className="flex justify-center mt-6">
  <div className="relative px-6 py-2 rounded-full inline-flex items-center gap-6 bg-white/10 backdrop-blur-md">
    <Link to="/" className="hover:text-blue-300 text-white font-medium">
      Home
    </Link>
    <span className="text-gray-400">•</span>
    <Link to="/About" className="hover:text-blue-300 text-white font-medium">
      About
    </Link>
    
    {/* Cyan Border */}
    <div className="absolute inset-0 rounded-full">
      <div className="absolute inset-0 rounded-full border border-cyan-400"></div>
    </div>
  </div>
</div>

      <main className="container mx-auto px-4">
        {/* Previous sections remain unchanged */}
        <div className="text-center py-8 md:py-12">
          <h1 className="text-4xl  text-white md:text-5xl lg:text-5xl font-bold leading-tight mb-8">
            Leading Provider Of
            <br />
            Comprehensive Business Solutions
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

        <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-sm uppercase underline text-gray-300">Who We Are</h2>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight border-b pb-8 border-gray-300">
                Empowering Growth With Expert Guidance:
                <br />
                Your Trusted Partners In Business Strategy
                <br />
                And Innovation
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-between mt-12">
              <div className="flex flex-col w-48 self-center">
                {/* Image Container */}
                <div className="relative flex-shrink-0 w-48 h-48 overflow-hidden rounded-lg bg-gray-900">
                  <img
                    src="/a-inner-img-1.webp"
                    alt="Customer Focus"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Text Container */}
                <div className="mt-3 text-center">
                  <p className="text-sm font-bold text-left text-white">Customer Focus</p>
                  <p className="text-xs text-gray-300 mt-1 text-left">
                    We offer strategic planning to drive sustainable growth,
                    operational efficiency
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-full max-w-xl space-y-4">
                <div className="text-gray-300 text-md">
                  We are a team of dedicated consultants with a passion for
                  helping businesses grow, innovate, and thrive. We offer
                  tailored strategies and actionable insights that drive
                  results. Our expertise spans everything from market analysis
                  and operational optimization to digital transformation and
                  leadership development.
                </div>
                <div className="h-144 overflow-hidden rounded-lg bg-gray-900">
                  <img
                    src="/a-inner-img-2.webp"
                    alt="Team Meeting"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updated last section to match the image layout */}
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Background blended image with placeholder */}
            <div className="w-full md:w-1/2 relative h-[400px]">
              {" "}
              {/* Reduced height */}
              <img
                src="/h1-bg-main-1.webp"
                alt="Team"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-transparent mix-blend-overlay rounded-lg"></div>
            </div>

            {/* Right side - Content */}
            <div className="w-full md:w-1/2 space-y-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  We are a team of dedicated consultants with a passion for
                  helping businesses grow, innovate, and thrive. We offer
                  tailored strategies and actionable insights that drive
                  results. Our expertise spans everything from market analysis
                  and operational optimization to digital transformation and
                  leadership development.
                </p>
              </div>

              <div className="flex space-x-12">
                <div>
                  <p className="text-5xl font-bold">
                    13<span className="text-3xl">+</span>
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    Years of Experience
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold">
                    25<span className="text-3xl">+</span>
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    Projects Worldwide
                  </p>
                </div>
              </div>

              <div>
              <Link to="/about" className="inline-block">
                <button className="px-6 py-3 bg-cyan-400 text-black rounded-full font-medium hover:bg-cyan-300 transition-colors flex items-center space-x-2">
                  <span>Know About Us</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-12">
            <div className="space-y-4">
            <h2 className="text-sm underline text-gray-300">Our Story</h2>
              <h1 className="text-4xl font-bold tracking-tight">
                Building Success Through Vision,
                <br />
                Innovation, And Trusted Client Partnerships
              </h1>
              <div className="grid grid-cols-1 pt-8 lg:grid-cols-2 gap-8">
                <p className="text-gray-300">
                  We build multi-family and affordable housing communities,
                  public and private healthcare facilities, fitness centers and
                  office buildings. We improve the supply chain management
                  process, increase operational efficiencies and build
                  environments.
                </p>
                <p className="text-gray-300">
                  We are dedicated to constructing homes of the highest quality,
                  ensuring excellence in every detail. Our commitment to
                  superior craftsmanship guarantees a living space that exceeds
                  your expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Team Image Section */}
          <div className="my-8">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/s1-img.webp"
                alt="Team meeting"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Mission and Vision Section */}
          <div className="w-full min-h-screen bg-black">
            <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Section */}
              <div className="space-y-4">
                {/* Mission Content */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">OUR MISSION</h2>
                  <p className="text-gray-300 text-lg">
                    Welcome to Industrie, a leading industry innovator with a rich
                    history excellence. With a passion for precision and
                    commitment to quality we have been empowering industries
                    and driving progress.
                  </p>
                </div>

                {/* Mission Image */}
                <div className="w-full">
                  <img
                    src="/s1-img-2.webp"
                    alt="Mission representation"
                    className="w-full h-64 object-cover rounded-bl-lg rounded-br-lg"
                  />
                </div>
              </div>

              {/* Vision Section */}
              <div className="space-y-4">
                {/* Vision Image */}
                <div className="w-full">
                  <img
                    src="/s1-img-3.webp"
                    alt="Vision representation"
                    className="w-full h-64 object-cover rounded-tl-lg rounded-tr-lg"
                  />
                </div>

                {/* Vision Content */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">OUR VISION</h2>
                  <p className="text-gray-300 text-lg">
                    Our vision in the industry is to lead with innovative solutions
                    that set new standards for excellence. We are committed to
                    harnessing the latest technologies and best practices to drive
                    progress and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
        <BusinessTeam />
        <FeaturesSection/>
        <TestimonialSection />
        <AboutSection />
      </main>
    </div>
  );
};




// AboutSection Component
const AboutSection = () => {
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


export default AboutPage;
