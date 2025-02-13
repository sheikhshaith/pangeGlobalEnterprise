// import React from "react";
import { Facebook, Instagram, Linkedin, Dribbble, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Brand Section */}
        {/* <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="text-[#C59740] text-4xl font-bold">PGE</div>
          </div>
        </div> */}

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/logo-removebg.png"
              alt="PGE Logo"
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Useful Pages */}
        <div className="space-y-3">
          <h3 className="text-[#C59740] font-bold uppercase">Useful Pages</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/Pages/ServicesPage" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/client" className="hover:text-white">
                Client
              </Link>
            </li>
            <li>
              <Link to="/ourteam" className="hover:text-white">
                Team
              </Link>
            </li>
            <li>
              <Link to="/OurProject" className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="space-y-3">
          <h3 className="text-[#C59740] font-bold uppercase">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Strategic Planning
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Financial Consulting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Operational Optimization
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                HR Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Marketing Strategy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Technology Integration
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Phone className="text-[#C59740]" size={24} />
            <div>
              <p className="text-gray-500">Have any questions?</p>
              <p className="text-white font-bold">Free: +1 917 265 8444</p>
            </div>
          </div>
          <p className="text-white font-bold">
            Join Us <span className="text-gray-400">to shape the future</span>{" "}
            <span className="text-[#C59740]">↗</span>
          </p>
          <div className="flex space-x-4 text-[#C59740]">
            <a href="#" className="hover:text-white">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <Dribbble size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
