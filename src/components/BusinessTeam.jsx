import React, { useEffect, useState } from "react";

function BusinessTeam() {
  const teamMembers = [
    { name: "John Lomka", role: "Strategist", imgSrc: "/t1.webp" },
    { name: "Marvin McKinney", role: "Manager", imgSrc: "/t2.webp" },
    { name: "Jerome Bell", role: "Advisor", imgSrc: "/t3.webp" },
    { name: "Jenny Wilson", role: "Innovator", imgSrc: "/t4.webp" },
    { name: "Alice Johnson", role: "Designer", imgSrc: "/t5.webp" },
    { name: "Tom Smith", role: "Developer", imgSrc: "/t6.webp" },
    { name: "Sarah Brown", role: "Consultant", imgSrc: "/t1.webp" },
    { name: "Robert King", role: "Engineer", imgSrc: "/t2.webp" },
    { name: "Nancy Drew", role: "Marketer", imgSrc: "/t3.webp" },
    { name: "Steve Rogers", role: "Analyst", imgSrc: "/t4.webp" },
    { name: "Emma Stone", role: "Coordinator", imgSrc: "/t5.webp" },
    { name: "Oliver Twist", role: "Specialist", imgSrc: "/t6.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const getDisplayedMembers = () => {
    const displayCount = {
      mobile: 1,
      tablet: 2,
      desktop: 4,
    };

    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    const count =
      screenWidth < 640
        ? displayCount.mobile
        : screenWidth < 1024
        ? displayCount.tablet
        : displayCount.desktop;

    const members = [];
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      members.push(teamMembers[index]);
    }
    return members;
  };

  return (
    <div className="min-h-screen bg-black py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center sm:text-left">
          <h1 className="text-sm sm:text-base md:text-lg text-gray-300 mb-2 sm:mb-3">
            Our Dedicated Team
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Meet Our Dynamic And Talented
            <br className="hidden sm:block" />
            Corporate Business Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {getDisplayedMembers().map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="flex flex-col group transform transition duration-300 hover:translate-y-1"
            >
              <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4">
                <img
                  src={member.imgSrc}
                  alt={`${member.name} profile`}
                  className="w-full aspect-square object-cover brightness-75 transition-all duration-300 group-hover:brightness-100 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-2 mb-8 sm:mb-12">
          {teamMembers.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-colors duration-300 ${
                idx === currentIndex ? "bg-[#C59740]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="text-center border-t border-gray-700 pt-6 sm:pt-8">
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4">
            Join Our Team: Recruiting Skilled Consulting Workers for Exciting,
            Rewarding Opportunities
          </p>
          <a
            href="#"
            className="text-[#C59740] hover:text-[#C59740] hover:underline font-medium mt-3 inline-block text-sm sm:text-base transition-colors duration-300"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </div>
  );
}

export default BusinessTeam;
