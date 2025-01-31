// import React, { useEffect, useState } from "react";

// function BusinessTeam() {
//   const teamMembers = [
//     { name: "John Lomka", role: "Strategist", imgSrc: "/t1.webp" },
//     { name: "Marvin McKinney", role: "Manager", imgSrc: "/t2.webp" },
//     { name: "Jerome Bell", role: "Advisor", imgSrc: "/t3.webp" },
//     { name: "Jenny Wilson", role: "Innovator", imgSrc: "/t4.webp" },
//     { name: "Alice Johnson", role: "Designer", imgSrc: "/t5.webp" },
//     { name: "Tom Smith", role: "Developer", imgSrc: "/t6.webp" },
//     { name: "Sarah Brown", role: "Consultant", imgSrc: "/t1.webp" },
//     { name: "Robert King", role: "Engineer", imgSrc: "/t2.webp" },
//     { name: "Nancy Drew", role: "Marketer", imgSrc: "/t3.webp" },
//     { name: "Steve Rogers", role: "Analyst", imgSrc: "/t4.webp" },
//     { name: "Emma Stone", role: "Coordinator", imgSrc: "/t5.webp" },
//     { name: "Oliver Twist", role: "Specialist", imgSrc: "/t6.webp" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 4) % teamMembers.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [teamMembers.length]);

//   const displayedMembers = teamMembers.slice(
//     currentIndex,
//     currentIndex + 4
//   ).concat(
//     currentIndex + 4 > teamMembers.length
//       ? teamMembers.slice(0, (currentIndex + 4) % teamMembers.length)
//       : []
//   );

//   const pageCount = Math.ceil(teamMembers.length / 4);

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-black py-8">
//       <h1 className="text-sm text-gray-500 mb-2">Our Dedicated Team</h1>
//       <h2 className="text-3xl font-bold text-white mb-6 text-center">
//         Meet Our Dynamic And Talented Corporate Business Team
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//         {displayedMembers.map((member) => (
//           <div
//             key={member.name}
//             className="flex flex-col items-center"
//           >
//             <img
//               src={member.imgSrc}
//               alt={`${member.name} profile`}
//               className="w-32 h-32 object-cover rounded-lg mb-2"
//             />
//             <h3 className="text-xl font-semibold text-white mt-2">{member.name}</h3>
//             <p className="text-gray-500">{member.role}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center justify-center space-x-2 mb-6">
//         {Array.from({ length: pageCount }).map((_, idx) => (
//           <div
//             key={idx}
//             className={`w-2 h-2 rounded-full ${
//               idx === Math.floor(currentIndex / 4) ? "bg-cyan-400" : "bg-gray-300"
//             }`}
//           ></div>
//         ))}
//       </div>
//       <div className="text-center border-t pt-4">
//         <p className="text-gray-500 text-sm">
//           Join Our Team: Recruiting Skilled Consulting Workers for Exciting, Rewarding Opportunities
//         </p>
//         <a
//           href="#"
//           className="text-cyan-400 hover:underline font-medium mt-2 inline-block"
//         >
//           Join Our Team
//         </a>
//       </div>
//     </div>
//   );
// }

// export default BusinessTeam;











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
    const members = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      members.push(teamMembers[index]);
    }
    return members;
  };

  return (
    <div className="min-h-screen bg-black pt-0 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-34">
          <h1 className="text-sm text-gray-500 mb-2">Our Dedicated Team</h1>
          <h2 className="text-4xl font-bold text-white">
            Meet Our Dynamic And Talented<br />
            Corporate Business Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {getDisplayedMembers().map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="flex flex-col group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={member.imgSrc}
                  alt={`${member.name} profile`}
                  className="w-full aspect-square object-cover brightness-75 transition-all duration-300 group-hover:brightness-100"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-300 mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-2 mb-8">
          {teamMembers.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                idx === currentIndex ? "bg-cyan-400" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="text-center border-t border-gray-300 pt-4">
          <p className="text-gray-300 text-sm">
            Join Our Team: Recruiting Skilled Consulting Workers for Exciting, Rewarding Opportunities
          </p>
          <a
            href="#"
            className="text-cyan-400 hover:underline font-medium mt-2 inline-block"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </div>
  );
}

export default BusinessTeam;