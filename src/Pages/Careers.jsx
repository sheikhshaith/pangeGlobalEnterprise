import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DollarSign, Atom, Heart, Shield, Users, Leaf } from "lucide-react";

const Careers = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
      element.classList.add("visible");
    });
  }, []);

  const benefits = [ 
    {
      icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Competitive Salary",
      description:
        "With a proven track record in leading cross-functional teams, developin innova tive product strategies,",
    },
    {
      icon: <Atom className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Innovation",
      description:
        "We thrive on fresh ideas, driving us to pioneer solutions that redefine norms and position us as a trailblazing team!",
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Health Insurance",
      description:
        "With a proven track record in leading cross-functional teams, developin innova tive product strategies,",
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Retirement Plans",
      description:
        "These are retirement plans offered by employers to their employees as part of their benefits package.",
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Team Building",
      description:
        "The primary objectives of team building include fostering better relationships among team members.",
    },
    {
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Friendly Environment",
      description:
        "With a proven track record in leading cross-functional teams, developin innova tive product strategies,",
    },
  ];
  const jobs = [
    {
      title: "Mechanical Engineering",
      description:
        "Our goal is to work with large and significant projects that will be used by tens or hundreds of thousands of people.",
      type: "Full-Time",
      level: "Intermediate",
      path: "/CareersDetails",
    },
    {
      title: "Civil Engineering",
      description:
        "Our goal is to work with large and significant projects that will be used by tens or hundreds of thousands of people.",
      type: "Full-Time",
      level: "Intermediate",
      path: "/CareersDetails",
    },
    {
      title: "Construction Worker",
      description:
        "Our goal is to work with large and significant projects that will be used by tens or hundreds of thousands of people.",
      type: "Full-Time",
      level: "Intermediate",
      path: "/CareersDetails",
    },
    {
      title: "Industry Manager",
      description:
        "Our goal is to work with large and significant projects that will be used by tens or hundreds of thousands of people.",
      type: "Full-Time",
      level: "Intermediate",
      path: "/CareersDetails",
    },
    {
      title: "Skyscraper Construction",
      description:
        "Our goal is to work with large and significant projects that will be used by tens or hundreds of thousands of people.",
      type: "Full-Time",
      level: "Intermediate",
      path: "/CareersDetails",
    },
    {
      title: "Global Sales & Marketing",
      description:
        "Our goal is to work with large and significant projects that will be used by tens or hundreds of thousands of people.",
      type: "Full-Time",
      level: "Intermediate",
      path: "/CareersDetails",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
          {/* Navbar */}
      
    {/* Navbar */}
          <div className="flex justify-center mt-6">
            <div className="relative px-6 py-2 rounded-full inline-flex items-center gap-6 bg-white/10 backdrop-blur-md">
              <Link to="/" className="hover:text-cyan-500 text-white font-medium">
                Home
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/Careers" className="hover:text-cyan-500 text-white font-medium">
                Careers
              </Link>
              {/* Cyan Border (pointer-events-none prevents it from blocking clicks) */}
              <div className="absolute inset-0 rounded-full pointer-events-none">
                <div className="absolute inset-0 rounded-full border border-cyan-400"></div>
              </div>
            </div>
          </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center mt-5 mb-8 md:mb-12">
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
            leveraging the latest industry insights and innovative strategies,
            we ensure your business stays ahead of the curve.
          </p>
        </div>
      

      {/* Benefits Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-60 py-8 md:py-16 lg:py-28">
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
            <div
              key={index}
              className="p-4 md:p-4 md:w-[90%] bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 "
            >
              <div className="mb-3 md:mb-4">{benefit.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-8">
          <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-5">
            <p className="text-white mb-2 text-sm md:text-base xl:text-lg">
              Career
            </p>
            <h1 className="text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8">
              Join Our Team: Shape The Future Of Business Together
            </h1>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-7 relative">
            <img
              src="/p1.webp"
              alt="Team member"
              className="sm:relative sm:w-full md:absolute md:top-[-30%] md:right-[50%] md:w-48 lg:top-[-4%] lg:right-[59%] lg:w-56 xl:top-[-10%] xl:right-[60%] xl:w-80 2xl:top-[40%] 2xl:right-[50%] 2xl:h-[80%] 2xl:w-[60%] rounded-lg shadow-lg mb-4 md:mb-0"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-12 md:mt-16 lg:mt-24 xl:mt-32">
          <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 flex items-center order-first sm:order-2 md:order-2">
            <p className="text-white leading-relaxed md:text-base lg:text-lg xl:text-xl">
              Speedily say has suitable disposal add boy. On fourth doubt miles
              of child. Exercise joy man children rejoiced. Yet uncommonly his
              ten who diminution astonished. Demesne new manners savings staying
              had. Under folly balls, death own point now men.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-5 order-2 sm:order-1 md:order-1">
            <img
              src="/p3.webp"
              alt="Team member 2"
              className="w-full rounded-lg shadow-lg mb-4 md:mb-0 lg:max-h-[600px] xl:max-h-[700px] object-cover"
            />
          </div>

          <div className="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4 order-3">
            <img
              src="/p2.webp"
              alt="Team meeting"
              className="w-full rounded-lg shadow-lg 
                  md:absolute md:top-[225%] 
                  md:right-[2%] md:h-[40%] md:w-40 
                  lg:top-[218%] lg:right-[3%] lg:h-[76%] lg:w-[27%] 
                  xl:top-[300%] xl:right-[2%] xl:h-[110%] xl:w-[30%] 
                  2xl:top-[220%] 2xl:right-[4%] 2xl:h-[90%] 2xl:w-[25%]"
            />
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm md:text-base text-white mb-2">Job Positions</p>
          <h1 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Career Opening
          </h1>
          <p className="text-white max-w-2xl mx-auto text-sm md:text-base">
            We're always looking for creative, talented self-starters to join
            our family. Check out our open roles below and fill out an
            application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/40 rounded-lg p-6 border border-white/20 shadow-lg hover:bg-white/40 transition-all duration-300"
            >
              <Link to={job.path}>
                <h2 className="text-xl text-cyan-300 md:text-2xl font-semibold mb-3 hover:text-cyan-500 transition-colors">
                  {job.title}
                </h2>
              </Link>
              <p className="text-white mb-4 text-sm md:text-base">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-black text-cyan-400">
                  {job.type}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-black text-cyan-400">
                  English Level - {job.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center py-16 fade-in opacity-0 transition-all duration-1000 ease-out delay-1400">
        <p className="text-lg text-cyan-400 mb-4">Let's Build Together</p>
        <h2 className="text-3xl md:text-5xl text-white font-bold mb-8">
          Need To Rethink Your
          <br />
          Business Process?
        </h2>
        <Link to="/contact" className="inline-block">
        <button className="px-8 py-4 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition text-base md:text-lg hover:scale-105 transform duration-200">
          Get In Touch →
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Careers;
