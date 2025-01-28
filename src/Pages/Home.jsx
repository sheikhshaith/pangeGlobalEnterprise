import React from 'react';

const Home= () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div>
              <a href="/" className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
                Pangea360
              </a>
            </div>
            <div className="flex md:hidden">
              <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10 text-gray-700 capitalize">
              <a href="/about" className="text-gray-800 hover:text-blue-500">About Us</a>
              <a href="/services" className="text-gray-800 hover:text-blue-500">Services</a>
              <a href="/industries" className="text-gray-800 hover:text-blue-500">Industries</a>
              <a href="/case-studies" className="text-gray-800 hover:text-blue-500">Case Studies</a>
              <a href="/resources" className="text-gray-800 hover:text-blue-500">Resources</a>
              <a href="/contact" className="text-gray-800 hover:text-blue-500">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Empowering Your Digital Growth with 360° Marketing Solutions
              </h2>
              <p className="text-gray-700 mb-6">
                From strategy to execution, we craft tailored digital marketing solutions to elevate your business in the competitive online landscape.
              </p>
              <a
                href="/contact"
                className="bg-blue-500 text-white rounded-full py-4 px-8 hover:bg-blue-600 focus:outline-none focus:shadow-outline"
              >
                Let's Talk! Get a Free Consultation
              </a>
            </div>
            <div className="md:w-1/2">
              <img src="Banner_5.png" alt="Digital Transformation" className="w-full rounded-lg shadow-md hover:shadow-xl transition duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">About Us</h2>
          <div className="md:flex">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                Pangea360 is a full-service digital marketing agency and a subsidiary of Pangea Global Enterprises. We specialize in delivering tailored marketing solutions to businesses across various industries.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to help our clients achieve their goals through innovative strategies and data-driven approaches. We thrive on innovation, results, and customer satisfaction.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <img src="Banner_4.png" alt="About Us" className="w-full rounded-lg shadow-md hover:shadow-xl transition duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src="Popular.png" alt="SEO" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">SEO</h3>
              <p className="text-gray-700">Increase your online visibility and drive organic traffic with our SEO strategies.</p>
            </div>
            <div>
              <img src="Lottery.png" alt="Social Media Marketing" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">Social Media Marketing</h3>
              <p className="text-gray-700">Engage your audience and grow your brand with our social media marketing services.</p>
            </div>
            <div>
              <img src="Slots.png" alt="PPC Ads" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">PPC Ads</h3>
              <p className="text-gray-700">Drive targeted traffic and increase conversions with our PPC advertising solutions.</p>
            </div>
            <div>
              <img src="Popular.png" alt="Branding" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">Branding</h3>
              <p className="text-gray-700">Build a strong brand identity that resonates with your target audience.</p>
            </div>
            <div>
              <img src="Lottery.png" alt="Content Marketing" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">Content Marketing</h3>
              <p className="text-gray-700">Attract, engage, and convert your audience with our content marketing strategies.</p>
            </div>
            <div>
              <img src="Slots.png" alt="Graphics Design" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">Graphics Design</h3>
              <p className="text-gray-700">Enhance your visual brand with our creative graphics design services.</p>
            </div>
            <div>
              <img src="Lottery.png" alt="Lead Generation" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">Lead Generation</h3>
              <p className="text-gray-700">Fill your sales pipeline with qualified leads through our lead generation strategies.</p>
            </div>
            <div>
              <img src="Popular.png" alt="VFX/3D Animation" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">VFX/3D Animation</h3>
              <p className="text-gray-700">Bring your ideas to life with stunning visual effects and 3D animations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src="Banner_1.png" alt="Consultants" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">Consultants</h3>
            </div>
            <div>
              <img src="Banner_2.png" alt="Corporate Businesses" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">Corporate Businesses</h3>
            </div>
            <div>
              <img src="Banner_3.png" alt="Law Firms" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">Law Firms</h3>
            </div>
            <div>
              <img src="Banner_4.png" alt="Healthcare" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">Healthcare</h3>
            </div>
            <div>
              <img src="Banner_5.png" alt="Real Estate" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">Real Estate</h3>
            </div>
            <div>
              <img src="Banner_2.png" alt="Education" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">Education</h3>
            </div>
            <div>
              <img src="Banner_4.png" alt="E-commerce" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">E-commerce</h3>
            </div>
            <div>
              <img src="Banner_1.png" alt="Hospitality" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-800">Hospitality</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="Banner_4.png" alt="Why Choose Us" className="w-full rounded-lg shadow-md hover:shadow-xl transition duration-300" />
            </div>
            <div>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">Results-driven strategies</li>
                <li className="mb-2">Comprehensive services</li>
                <li className="mb-2">Niche expertise</li>
                <li className="mb-2">Transparency</li>
                <li>Innovative solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                "Pangea360 helped us increase our online visibility and generate more leads. Their team is professional, responsive, and truly cares about our success."
              </p>
              <p className="font-bold text-gray-800">John Doe</p>
              <p className="text-sm text-gray-600">CEO, ABC Company</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                "We saw a significant increase in our website traffic and conversions after working with Pangea360. Their SEO and PPC strategies really work!"
              </p>
              <p className="font-bold text-gray-800">Jane Smith</p>
              <p className="text-sm text-gray-600">Marketing Manager, XYZ Inc.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                "Pangea360's branding and design services helped us establish a strong brand identity. We highly recommend them!"
              </p>
              <p className="font-bold text-gray-800">Mark Johnson</p>
              <p className="text-sm text-gray-600">Owner, DEF Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Grow Your Business?</h2>
          <p className="text-gray-700 mb-8">Let's Make It Happen!</p>
          <a
            href="/contact"
            className="bg-blue-500 text-white rounded-full py-4 px-8 hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white">&copy; 2025 Pangea360. All rights reserved.</p>
        </div>
      </footer>
      
    </div>
  );
};

export default Home;