import React, { useState } from "react";
import {
  Users,
  Briefcase,
  Banknote,
  Grid,
  Layers,
  Settings,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";

// AboutSection Component
const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Lower Section with Text */}
      <div className="bg-black text-white text-center py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <p className="text-base sm:text-lg text-[#C59740] py-4 sm:py-8">
          Let's Build Together
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-6 sm:pb-8 text-white font-bold mt-2">
          Need To Rethink Your
          <br />
          Business Process?
        </h1>
        <Link to="/contact" className="inline-block">
          <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-[#C59740] text-white rounded-lg hover:bg-[#C59740] transition text-sm sm:text-base md:text-lg">
            Get In Touch →
          </button>
        </Link>
      </div>
    </div>
  );
};

const PerformanceSection = () => {
  return (
    <section className="bg-black py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-12">
            Performance Management
          </h1>

          {/* First Paragraph */}
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We implement robust performance management systems to regularly
              assess and enhance employee performance. Through continuous
              feedback, goal setting, and performance reviews, we help employees
              reach their full potential and align their objectives with
              organizational goals. We implement robust performance management
              systems to regularly assess and enhance employee performance.
            </p>
          </div>

          {/* Second Paragraph */}
          <div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We help you plan for the future by identifying key roles within
              your organization and developing succession plans to ensure
              continuity. By preparing future leaders today, we help safeguard
              your business against potential disruptions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessItem = ({ icon, title, description, isHovered, onHover }) => (
  <div
    className={`flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 mb-6 border rounded-lg transition-all duration-300 ${
      isHovered ? "shadow-lg bg-gray-200" : ""
    }`}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    <div
      className={`p-3 mb-4 sm:mb-0 sm:mr-4 bg-[#C59740] rounded-full transition-all duration-300 ${
        isHovered ? "bg-[#C59740]" : ""
      }`}
    >
      {icon}
    </div>
    <div className="text-center sm:text-left">
      <h3
        className={`text-lg sm:text-xl font-semibold mb-2 transition-all duration-300 ${
          isHovered ? "text-[#C59740]" : ""
        }`}
      >
        {title}
      </h3>
      <p className="text-gray-500 text-sm sm:text-base">{description}</p>
    </div>
  </div>
);

const OurProcess = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const processItems = [
    {
      icon: <Users size={24} className="text-white" />,
      title: "Discussions About Project",
      description:
        "Forging relationships between multi to national corporations, governments and global NGOs.",
    },
    {
      icon: <Briefcase size={24} className="text-white" />,
      title: "Start Work With Team",
      description:
        "Design studio founded in London and expanded our services, and become a multinational firm.",
    },
    {
      icon: <Banknote size={24} className="text-white" />,
      title: "Handover & Save World",
      description:
        "We understand the importance of approaching each work integrally and believe in the power",
    },
  ];

  return (
    <section className="bg-black py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
            Our Process
          </h2>
          <div className="max-w-4xl text-white mx-auto">
            {processItems.map((item, index) => (
              <ProcessItem
                key={index}
                {...item}
                isHovered={hoveredIndex === index}
                onHover={(isHovered) =>
                  setHoveredIndex(isHovered ? index : null)
                }
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
      className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-900 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-800 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
        {title}
      </h2>
      <p
        className={`text-sm sm:text-base text-gray-300 transition-all duration-300 ${
          isExpanded ? "max-h-full" : "max-h-20 sm:max-h-24 overflow-hidden"
        }`}
      >
        {content}
      </p>
      {!isExpanded && (
        <div className="text-[#C59740] text-sm sm:text-base mt-2 hover:underline">
          Read more
        </div>
      )}
    </div>
  );
};

const DecisionMakingComponent = () => {
  return (
    <section className="bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Data-Driven Decision Making
          </h1>

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
  <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gray-700 h-full">
    <div className="text-[#C59740] mb-4 sm:mb-6">{icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">
      {title}
    </h3>
    <p className="text-sm sm:text-base text-gray-300">{description}</p>
  </div>
);

const HRServicesGrid = () => {
  const services = [
    {
      icon: <Grid size={40} className="sm:w-12 sm:h-12" />,
      title: "Talent Acquisition",
      description:
        "We focus on identifying and attracting top talent who align with your company's values and goals.",
    },
    {
      icon: <Layers size={40} className="sm:w-12 sm:h-12" />,
      title: "Employee Engagement",
      description:
        "Our HR development service places a strong emphasis on employee engagement and retention.",
    },
    {
      icon: <Settings size={40} className="sm:w-12 sm:h-12" />,
      title: "Onboarding And Training",
      description:
        "Our onboarding programs are crafted to integrate new hires seamlessly into your organization.",
    },
    {
      icon: <Users size={40} className="sm:w-12 sm:h-12" />,
      title: "Construction Control",
      description:
        "We believe in continuous learning and development. Our team designs customized training.",
    },
  ];

  return (
    <section className="bg-black py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="w-full flex items-stretch">
                <ServiceItem {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionsBenefits = () => {
  const benefits = [
    "24/7 client support and guidance",
    "ExpErienced consulting professionals",
    "Data-driven, research-backed strategies",
    "Custom solutions for business growth",
    "Satisfaction guarantee on all services",
    "Free consultation and business assessment",
  ];

  return (
    <section className="bg-black text-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <h2 className="text-2xl text-white sm:text-3xl font-bold mb-4 sm:mb-8">
            Solutions & Benefits
          </h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-12">
            By ordering the installation services from us, we can be sure of the
            quality of materials and installation.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-2 lg:order-1">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check
                      className="text-green-500 mt-1 mr-2 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
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
  <div className="bg-zinc-800 p-4 sm:p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-zinc-700">
    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-3 sm:mb-0 sm:mr-4"
      />
      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-white">
          {name}
        </h3>
        <p className="text-sm sm:text-base text-zinc-400">
          {title}, {company}
        </p>
      </div>
    </div>
    <p className="text-sm sm:text-base text-zinc-300 text-center sm:text-left">
      {testimonial}
    </p>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Albert Flores",
      title: "General Manager",
      company: "Oliver's LAB llc.",
      testimonial:
        "Outstanding digital agency service! Exceptional creativity, strategic approach, and flawless execution. Highly recommend for all digital marketing needs ...",
      avatar: "/avatar1.jpg",
    },
    {
      name: "Cameron Williamson",
      title: "Marketing Director",
      company: "Oliver's LAB llc.",
      testimonial:
        "Innovative, efficient, and collaborative digital agency service delivering exceptional results. Highly recommend for top-tier expertise and professionalism ...",
      avatar: "/avatar2.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <h2 className="text-2xl sm:text-3xl text-white font-extrabold text-center mb-6 sm:mb-8 md:mb-12">
            We Work with Clients to Create Solutions that Stand the Test of
            Time.
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <p className="text-sm text-gray-200 sm:text-base">
              Our team is dedicated to delivering exceptional value through
              close collaboration with our clients. We prioritize understanding
              their needs and providing success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
  const images = ["/g-1.webp", "/g-2.webp", "/g-3.webp", "/g-4.webp"];

  return (
    <div className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Main large image */}
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={images[0]}
              alt="Gallery image 1"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          {/* Right side grid */}
          <div className="grid grid-rows-2 gap-4">
            {/* Top image */}
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={images[1]}
                alt="Gallery image 2"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            {/* Bottom two images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={images[2]}
                  alt="Gallery image 3"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={images[3]}
                  alt="Gallery image 4"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s-]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/pgeoffice001@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          companyName: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-white font-bold text-center mb-6 sm:mb-8">
          What can we help you with?
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Full Name Input */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              FULL NAME
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Oliver Spiteri"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
                focus:ring-2 focus:ring-[#C59740] focus:border-[#C59740] 
                text-sm sm:text-base bg-gray-800 text-white
                ${errors.fullName ? "border-red-500" : "border-gray-700"}`}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Company Name Input */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              COMPANY NAME
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Forgex Industry"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
                focus:ring-2 focus:ring-[#C59740] focus:border-[#C59740] 
                text-sm sm:text-base bg-gray-800 text-white
                ${errors.companyName ? "border-red-500" : "border-gray-700"}`}
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              PHONE
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+44 20 8980 9731"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
                focus:ring-2 focus:ring-[#C59740] focus:border-[#C59740] 
                text-sm sm:text-base bg-gray-800 text-white
                ${errors.phone ? "border-red-500" : "border-gray-700"}`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="info@forgexindustry.co.uk"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
                focus:ring-2 focus:ring-[#C59740] focus:border-[#C59740] 
                text-sm sm:text-base bg-gray-800 text-white
                ${errors.email ? "border-red-500" : "border-gray-700"}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message here..."
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
                focus:ring-2 focus:ring-[#C59740] focus:border-[#C59740] 
                text-sm sm:text-base bg-gray-800 text-white
                ${errors.message ? "border-red-500" : "border-gray-700"}`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent 
                text-sm sm:text-base font-medium rounded-md shadow-sm text-black bg-[#C59740] 
                hover:bg-[#C59740] focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-[#C59740] transition-colors duration-200
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {submitStatus === "success" && (
              <p className="text-[#C59740] font-medium text-center sm:text-left">
                Your message was sent successfully!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
const PgeServices = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <div className="flex justify-center mt-6">
        <div className="relative px-6 py-2 rounded-full inline-flex items-center gap-6 bg-white/10 backdrop-blur-md">
          <Link to="/" className="hover:text-[#C59740] text-white font-medium">
            Home
          </Link>
          <span className="text-gray-400">•</span>
          <Link
            to="/Pages/ServicesPage"
            className="hover:text-[#C59740] text-white font-medium"
          >
            Services
          </Link>
          {/* Cyan Border (pointer-events-none prevents it from blocking clicks) */}
          <div className="absolute inset-0 rounded-full pointer-events-none">
            <div className="absolute inset-0 rounded-full border border-[#C59740]"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-6 sm:mt-8 text-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          Get In Touch: Expert Business
          <br className="hidden sm:block" />
          Consulting Tailored To You
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] mb-6 sm:mb-8">
          <img
            src="/pgeservices1.webp"
            alt="Business Meeting"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Description */}
        <p className="text-white max-w-3xl mx-auto text-center text-sm sm:text-base px-4">
          We offer a wide range of services, including strategic planning,
          financial management, marketing, and technology integration. By
          leveraging the latest industry insights and innovative strategies, we
          ensure your business stays ahead of the curve.
        </p>
      </div>

      {/* Components Section */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-black">
        <PerformanceSection />
      </div>

      {/* Other Sections */}
      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        <OurProcess />
        <DecisionMakingComponent />
        <HRServicesGrid />
        <SolutionsBenefits />
        <TestimonialSection />
        <FAQSection />
        <Gallery />
        <ContactForm />
        <HeroSection />
      </div>
    </div>
  );
};

export default PgeServices;
