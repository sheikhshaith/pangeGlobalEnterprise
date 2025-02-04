// import React from "react";
import { Facebook, Instagram, Linkedin, Dribbble, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="text-cyan-400 text-4xl font-bold">PGE</div>
            {/* <h2 className="text-2xl font-bold text-white">Pixify</h2> */}
          </div>
        </div>

        {/* Useful Pages */}
        <div className="space-y-3">
          <h3 className="text-gray-500 font-bold uppercase">Useful Pages</h3>
          <ul className="space-y-2">
            <li>
              <a href="/Pages/ServicesPage" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/About" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="space-y-3">
          <h3 className="text-gray-500 font-bold uppercase">Our Services</h3>
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
            <Phone className="text-cyan-400" size={24} />
            <div>
              <p className="text-gray-500">Have any questions?</p>
              <p className="text-white font-bold">Free: +1 917 265 8444</p>
            </div>
          </div>
          <p className="text-white font-bold">
            Join Us <span className="text-gray-400">to shape the future</span>{" "}
            <span className="text-cyan-400">↗</span>
          </p>
          <div className="flex space-x-4 text-cyan-400">
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
