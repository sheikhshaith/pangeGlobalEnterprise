import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, User, CircleDashed, Globe, Plus, LayoutGrid, Zap, Circle } from "lucide-react";

const clients = [
  { name: "EasyTax", Icon: CircleDashed },
  { name: "Europa", Icon: Globe },
  { name: "Clandestine", Icon: Plus },
  { name: "3Portals", Icon: LayoutGrid },
  { name: "Boltshift", Icon: Zap },
  { name: "Chromatools", Icon: Circle },
];

const services = [
  "STRATEGIC PLANNING",
  "FINANCIAL CONSULTING",
  "OPERATIONAL OPTIMIZATION",
  "HR DEVELOPMENT",
  "MARKETING STRATEGY",
  "TECHNOLOGY INTEGRATION",
];

const ContactForm = () => {
  return (
    <div className="min-h-screen relative bg-black">
      {/* Background Image */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-[url('/h1-bg-main-1.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/70 to-black" />
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto p-8 flex flex-col min-h-screen">
        <div className="flex flex-wrap flex-1">
          
          {/* Left Column */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-4 text-white">
                Get In Touch
                <br />
                With Us Today<span className="text-cyan-500">.</span>
              </h1>
              <p className="text-gray-400 mb-8 text-lg">
                Our consulting services drive growth, optimize operations, and ensure strategic business success.
              </p>
            </div>

            {/* Scrolling Client Section */}
            <div className="mt-12">
              <p className="text-gray-400 mb-8 text-lg">
                Used by leading brands and companies across the globe
              </p>
              <ClientScroller />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-6/12 lg:ml-auto">
            <div className="relative bg-black/30 backdrop-blur-sm p-8 border border-cyan-500/20 rounded-lg">
              <h2 className="text-2xl text-white mb-6">Contact Us</h2>

              {/* Services Selection */}
              <div className="flex flex-wrap gap-2 mb-8">
                {services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 text-sm text-white border border-cyan-500 rounded-full hover:bg-cyan-500/10 cursor-pointer transition-colors"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Form Fields */}
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">NAME</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="e.g. Oliver Spiteri"
                      className="w-full bg-black/30 text-white rounded pl-10 p-3 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">PHONE</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500 h-5 w-5" />
                    <input
                      type="tel"
                      placeholder="+44 20 8980 9731"
                      className="w-full bg-black/30 text-white rounded pl-10 p-3 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">EMAIL</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500 h-5 w-5" />
                    <input
                      type="email"
                      placeholder="info@forgexindustry.co.uk"
                      className="w-full bg-black/30 text-white rounded pl-10 p-3 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">MESSAGE</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-cyan-500 h-5 w-5" />
                    <textarea
                      placeholder="Write your message here..."
                      rows={4}
                      className="w-full bg-black/30 text-white rounded pl-10 p-3 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Updated Submit Button */}
                <button
                  type="submit"
                  className="bg-transparent text-cyan-500 border border-cyan-500 px-6 py-2 rounded transition-colors hover:bg-cyan-500 hover:text-white"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Scrolling Client Component (horizontal scrolling, 3 at a time)
const ClientScroller = () => {
  return (
    <div className="relative overflow-hidden w-[240px] md:w-[400px] lg:w-[500px]">
      <motion.div
        className="flex gap-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        {[...clients, ...clients].map((client, index) => (
          <div key={index} className="flex flex-col items-center text-gray-400 text-lg">
            <client.Icon className="h-12 w-12 text-white mb-2" />
            <span>{client.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactForm;
