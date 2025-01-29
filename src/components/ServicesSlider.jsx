import React, { useState, useEffect } from "react";

const ServicesSlider = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    {
      id: 1,
      number: "01 / 06",
      title: "Market Analysis",
      description:
        "Stay ahead of the competition with our comprehensive market analysis services. We provide detailed insights into market trends, competitor behavior, and emerging opportunities.",
      image: "/b1-img-1.webp",
    },
    {
      id: 2,
      number: "02 / 06",
      title: "Business Strategy",
      description:
        "Craft winning strategies with our expert guidance. From operational efficiency to long-term growth plans, we help you navigate the complexities of today's business landscape.",
      image: "/b1-img-2.webp",
    },
    {
      id: 3,
      number: "03 / 06",
      title: "Product Development",
      description:
        "Transform your ideas into reality with our product development services. We guide you from concept to launch, ensuring your product meets market demands.",
      image: "/b1-img-3.webp",
    },
    {
      id: 4,
      number: "04 / 06",
      title: "Customer Insights",
      description:
        "Understand your customers like never before. Our insights help you deliver personalized experiences and build lasting relationships with your audience.",
      image: "/b1-img-1.webp",
    },
    {
      id: 5,
      number: "05 / 06",
      title: "Digital Marketing",
      description:
        "Boost your online presence with our digital marketing services. We specialize in SEO, social media, and content marketing to drive traffic and conversions.",
      image: "/b1-img-2.webp",
    },
    {
      id: 6,
      number: "06 / 06",
      title: "Data Analytics",
      description:
        "Make data-driven decisions with our advanced analytics solutions. We turn raw data into actionable insights to optimize your operations and strategies.",
      image: "/b1-img-3.webp",
    },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          const newActiveSection =
            Math.floor(scrollPosition / windowHeight) + 1;

          if (newActiveSection >= 1 && newActiveSection <= sections.length) {
            setActiveSection(newActiveSection);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections.length]);

  return (
    <div className="relative">
      {sections.map((section) => (
        <div
          key={section.id}
          className="h-screen w-full sticky top-0 overflow-hidden"
        >
          <div className="relative h-full w-full flex items-center">
            {/* Left Side - Image */}
            <div className="w-1/2 h-full relative">
              <div className="absolute inset-0 bg-black/60">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </div>

            {/* Center - Navigation Dots */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 z-10">
              {sections.map((dot) => (
                <div
                  key={dot.id}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                    dot.id === activeSection
                      ? "border-cyan-400 text-cyan-400"
                      : "border-gray-400 text-gray-400"
                  }`}
                >
                  {dot.id}
                </div>
              ))}
            </div>

            {/* Right Side - Content */}
            <div className="w-1/2 h-full bg-gray-900">
              <div className="h-full flex items-center">
                <div className="px-12 max-w-xl mx-auto">
                  <div>
                    <p className="text-gray-400 mb-2">{section.number}</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                      {section.description}
                    </p>
                    <button className="bg-transparent hover:bg-cyan-400 text-cyan-400 hover:text-white px-6 py-3 rounded-full border-2 border-cyan-400 transition-colors duration-300">
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSlider;
