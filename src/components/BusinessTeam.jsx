import React from "react";

function BusinessTeam() {
  const teamMembers = [
    { name: "John Lomka", role: "Strategist", imgSrc: "https://via.placeholder.com/150" },
    { name: "Marvin McKinney", role: "Manager", imgSrc: "https://via.placeholder.com/150" },
    { name: "Jerome Bell", role: "Advisor", imgSrc: "https://via.placeholder.com/150" },
    { name: "Jenny Wilson", role: "Innovator", imgSrc: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-8">
      <h1 className="text-sm text-gray-500 mb-2">Our Dedicated Team</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Meet Our Dynamic And Talented Corporate Business Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {teamMembers.map((member) => (
          <div
            key={member.name}  // Use a unique key here
            className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg"
          >
            <div className="w-32 h-32 mb-4 overflow-hidden rounded-full bg-gray-300">
              <img
                src={member.imgSrc}
                alt={`${member.name} profile`}  // More meaningful alt text
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-2 mb-6">
        {Array(5)
          .fill()
          .map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === 2 ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
      </div>
      <div className="text-center border-t pt-4">
        <p className="text-gray-500 text-sm">
          Join Our Team: Recruiting Skilled Consulting Workers for Exciting, Rewarding Opportunities
        </p>
        <a
          href="#"
          className="text-blue-600 hover:underline font-medium mt-2 inline-block"
        >
          Join Our Team
        </a>
      </div>
    </div>
  );
}

export default BusinessTeam;
