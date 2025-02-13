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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
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
      const response = await fetch('https://formsubmit.co/ajax/pgeoffice001@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-black">
      <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full z-0">
        <div className="absolute inset-0 bg-[url('/h1-bg-main-1.webp')] bg-cover bg-center opacity-50 lg:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-black/70 to-black" />
      </div>

      <div className="relative max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col min-h-screen z-10">
        <div className="flex flex-wrap flex-1">
          <div className="w-full lg:w-5/12 flex flex-col justify-between lg:sticky lg:top-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Get In Touch
                <br />
                With Us Today<span className="text-cyan-500">.</span>
              </h1>
              <p className="text-gray-400 mb-4 sm:mb-8 text-base sm:text-lg">
                Our consulting services drive growth, optimize operations, and ensure strategic business success.
              </p>
            </div>

            <div className="mt-8 lg:mt-12">
              <p className="text-gray-400 mb-4 sm:mb-8 text-base sm:text-lg">
                Used by leading brands and companies across the globe
              </p>
              <ClientScroller />
            </div>
          </div>

          <div className="w-full lg:w-6/12 lg:ml-auto mt-8 lg:mt-0">
            <div className="relative bg-black/30 backdrop-blur-sm p-4 sm:p-6 lg:p-8 border border-cyan-500/80 rounded-lg">
              <h2 className="text-xl sm:text-2xl text-white mb-6">Contact Us</h2>



              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {services.map((service) => (
                  <span
                    key={service}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-white border border-cyan-500 rounded-full hover:bg-cyan-500/10 cursor-pointer transition-colors"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-300 mb-2">NAME</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500 h-5 w-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Oliver Spiteri"
                      className={`w-full bg-black/30 text-white rounded pl-12 p-3 border focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-cyan-500/30 focus:border-cyan-500'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1">{errors.name}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-gray-300 mb-2">PHONE</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500 h-5 w-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 20 8980 9731"
                      className={`w-full bg-black/30 text-white rounded pl-12 p-3 border focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-cyan-500/30 focus:border-cyan-500'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-gray-300 mb-2">EMAIL</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500 h-5 w-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="info@forgexindustry.co.uk"
                      className={`w-full bg-black/30 text-white rounded pl-12 p-3 border focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-cyan-500/30 focus:border-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-gray-300 mb-2">MESSAGE</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-cyan-500 h-5 w-5" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={4}
                      className={`w-full bg-black/30 text-white rounded pl-12 p-3 border focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500' : 'border-cyan-500/30 focus:border-cyan-500'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs mt-1">{errors.message}</span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-transparent text-cyan-500 border border-cyan-500 px-4 sm:px-6 py-2 rounded transition-colors hover:bg-cyan-500 hover:text-white text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Now"}
                </button>
                
                {submitStatus === "success" && (
                  <div className="mt-4 text-center w-full">
                    <p className="text-cyan-500 font-medium">
                      Your message was sent successfully!
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientScroller = () => {
  return (
    <div className="relative overflow-hidden w-[240px] sm:w-[400px] lg:w-[500px]">
      <motion.div
        className="flex gap-8 sm:gap-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        {[...clients, ...clients].map((client, index) => (
          <div key={index} className="flex flex-col items-center text-gray-400 text-base sm:text-lg shrink-0">
            <client.Icon className="h-8 w-8 sm:h-12 sm:w-12 text-white mb-2" />
            <span>{client.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactForm;






