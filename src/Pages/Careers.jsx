import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Atom, Heart, Shield, Users, Leaf } from 'lucide-react';

const Careers = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      element.classList.add('visible');
    });
  }, []);

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Competitive Salary",
      description: "With a proven track record in leading cross-functional teams, developin innova tive product strategies,"
    },
    {
      icon: <Atom className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Innovation",
      description: "We thrive on fresh ideas, driving us to pioneer solutions that redefine norms and position us as a trailblazing team!"
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Health Insurance",
      description: "With a proven track record in leading cross-functional teams, developin innova tive product strategies,"
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Retirement Plans",
      description: "These are retirement plans offered by employers to their employees as part of their benefits package."
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Team Building",
      description: "The primary objectives of team building include fostering better relationships among team members."
    },
    {
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Friendly Environment",
      description: "With a proven track record in leading cross-functional teams, developin innova tive product strategies,"
    }
  ];
  const jobs = [
    {
      title: "Mechanical Engineering",
      description: "Our goal is to work with large and significant projects that will be used by tens or hundreds of thousands of people.",
      type: "Full-Time",
      level: "Intermediate",
      path: "/careers/mechanical-engineering"
    },
    {
      title: "Civil Engineering",
      description: "Our goal is to work with large and significant projects that will be used by tens or hundreds of thousands of people.",
      type: "Full-Time",
      level: "Intermediate",
      path: "/careers/civil-engineering"
    },
    {
      title: "Construction Worker",
      description: "Our goal is to work with large and significant projects that will be used by tens or hundreds of thousands of people.",
      type: "Full-Time",
      level: "Intermediate",
      path: "/careers/construction-worker"
    },
    {
      title: "Industry Manager",
      description: "Our goal is to work with large and significant projects that will be used by tens or hundreds of thousands of people.",
      type: "Full-Time",
      level: "Intermediate",
      path: "/careers/industry-manager"
    },
    {
      title: "Skyscraper Construction",
      description: "Our goal is to work with large and significant projects that will be used by tens or hundreds of thousands of people.",
      type: "Full-Time",
      level: "Intermediate",
      path: "/careers/skyscraper-construction"
    },
    {
      title: "Global Sales & Marketing",
      description: "Our goal is to work with large and significant projects that will be used by tens or hundreds of thousands of people.",
      type: "Full-Time",
      level: "Intermediate",
      path: "/careers/global-sales-marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-4 md:pt-8">
      <div className="container mx-auto px-4 flex flex-col">
        {/* Navigation */}
        <div className="flex justify-center mb-6 md:mb-8 fade-in opacity-0 transition-all duration-1000 ease-out">
          <div className="flex space-x-4 bg-black bg-opacity-50 px-3 md:px-4 py-2 rounded-lg relative overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
              <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
              <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
            </div>

            <Link to="/" className="text-white hover:text-cyan-400 px-2 sm:px-3 py-1 transition-colors duration-200 text-xs md:text-sm">
              Home
            </Link>
            <Link to="/Careers" className="text-white hover:text-cyan-400 px-2 sm:px-3 py-1 transition-colors duration-200 text-xs md:text-sm">
              Careers
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center text-white fade-in opacity-0 transition-all duration-1000 ease-out delay-300">
            Build Your Career with Us: Unlock
            <br className="hidden sm:block" />
            Opportunities, Grow Your Skills
          </h1>

          <div className="w-full h-[150px] sm:h-[200px] md:h-[400px] mb-4 md:mb-6 fade-in opacity-0 transition-all duration-1000 ease-out delay-500">
            <img
              src="/breadcrumb-img-1.webp"
              alt="Business Meeting"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <p className="text-white max-w-3xl text-center text-sm md:text-base px-4 fade-in opacity-0 transition-all duration-1000 ease-out delay-700">
            We offer a wide range of services, including strategic planning,
            financial management, marketing, and technology integration. By
            leveraging the latest industry insights and innovative strategies, we
            ensure your business stays ahead of the curve.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-28 py-8 md:py-16 lg:py-28">
        <div className="text-left mb-8 md:mb-12">
          <p className="text-sm md:text-base text-white mb-2">Why Join</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">
            Competitive Benefits Just To
            <br className="hidden sm:block" />
            Start With Us
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4 md:p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-3 md:mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
  {/* Header Section */}
  <div className="grid grid-cols-12 gap-4">
    {/* Left side with text */}
    <div className="col-span-12 md:col-span-6 lg:col-span-5">
      <p className="text-white mb-2">Career</p>
      <h1 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
        Join Our Team: Shape The Future Of Business Together
      </h1>
    </div>
    
    {/* Right side image - Stack on small screens */}
    <div className="col-span-12 md:col-span-6 lg:col-span-7 relative">
      <img 
        src="/p1.webp" 
        alt="Team member" 
        className="sm:relative sm:w-full md:absolute md:top-[-30%] md:right-[50%] w-40 md:w-48 lg:w-56 rounded-lg shadow-lg mb-4 md:mb-0"
      />
    </div>
  </div>

  {/* Main Content Grid */}
  <div className="grid grid-cols-12 gap-6 mt-12 md:mt-16 lg:mt-24">
    {/* Text for small screens comes first */}
    <div className="col-span-12 md:col-span-6 lg:col-span-3 flex items-center order-first sm:order-2 md:order-2">
      <p className="text-white leading-relaxed">
        Speedily say has suitable disposal add boy. On fourth doubt miles of child.
        Exercise joy man children rejoiced. Yet uncommonly his ten who diminution
        astonished. Demesne new manners savings staying had. Under folly balls,
        death own point now men.
      </p>
    </div>

    {/* Left Image */}
    <div className="col-span-12 md:col-span-6 lg:col-span-5 order-2 sm:order-1 md:order-1">
      <img 
        src="/p3.webp" 
        alt="Team member 2" 
        className="w-full rounded-lg shadow-lg mb-4 md:mb-0"
      />
    </div>

    {/* Right Image */}
    <div className="col-span-12 md:col-span-12 lg:col-span-4 order-3">
      <img 
        src="/p2.webp" 
        alt="Team meeting" 
        className="w-full md:absolute md:top-[220%] md:right-[6%] md:h-[88%] md:w-60 lg:w-[27%] rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>
<div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <p className="text-sm md:text-base text-white mb-2">Job Positions</p>
        <h1 className="text-3xl md:text-4xl text-white font-bold mb-4">Career Opening</h1>
        <p className="text-white max-w-2xl mx-auto  text-sm md:text-base">
          We're always looking for creative, talented self-starters to join our family. Check out our 
          open roles below and fill out an application.
        </p>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job, index) => (
          <div 
            key={index} 
            className="backdrop-blur-sm bg-white/60 rounded-lg p-6 border border-white/20 shadow-lg hover:bg-white/40 transition-all duration-300"
          >
            <Link to={job.path}>
              <h2 className="text-xl md:text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                {job.title}
              </h2>
            </Link>
            <p className="text-white mb-4 text-sm md:text-base">
              {job.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-red-100 text-red-800">
                {job.type}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                English Level - {job.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="text-center py-16 fade-in opacity-0 transition-all duration-1000 ease-out delay-1400">
          <p className="text-lg text-cyan-400 mb-4">
            Let's Build Together
          </p>
          <h2 className="text-3xl md:text-5xl text-white font-bold mb-8">
            Need To Rethink Your
            <br />
            Business Process?
          </h2>
          <button className="px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-teal-600 transition text-base md:text-lg hover:scale-105 transform duration-200">
            Get In Touch →
          </button>
        </div>
      </div>
    
    
  );
};

export default Careers;