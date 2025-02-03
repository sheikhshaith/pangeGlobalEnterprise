// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Client from './Pages/Client';
import ServicesPage from './Pages/ServicesPage';
import PgeServices from './services/PgeServices';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChatWidget from './components/ChatWidget'

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <ChatWidget />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Pages/ServicesPage" element={<ServicesPage />} />
            <Route path="/services/PgeServices" element={<PgeServices />} />
          <Route path="/services/mobile-apps" element={<ServicesPage />} />
          <Route path="/services/cloud-services" element={<ServicesPage />} />

            <Route path="/Client" element={<Client />} />


            <Route path="/services" element={<ServicesPage />} /> {/* Consistent path */}
            <Route path="/client" element={<Client />} /> {/* Consistent path */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
