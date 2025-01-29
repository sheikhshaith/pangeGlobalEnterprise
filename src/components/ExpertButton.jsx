import React, { useState } from "react";
// import './index.css';  // Custom CSS file for animations

const MovingImageOnPath = () => {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover effect

  // When the mouse enters, stop the animation
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // When the mouse leaves, resume the animation
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black">
      <div
        className={`w-24 h-24 bg-cover rounded-full cursor-pointer transition-transform duration-500 ${
          isHovered ? "paused" : "animate-moveAlongSteps"
        }`}
        style={{ backgroundImage: "url('move.jpg')" }}  // Replace with your image path
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
    </div>
  );
};

export default MovingImageOnPath;
