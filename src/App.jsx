// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurTeam from './Pages/OurTeam';
import Client from './Pages/Client';
import OurProject from './Pages/OurProject';
import ServicesPage from './Pages/ServicesPage';
import PgeServices from './services/PgeServices';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChatWidget from './components/ChatWidget';
import FAQ from './Pages/Faq';
import CareersDetails from './components/CareersDetails';
import JobApplicationForm from './components/JobApplicationForm';
import Careers from './Pages/Careers';
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
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/OurProject" element={<OurProject />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/CareersDetails" element={<CareersDetails />} />
            <Route path="/JobApplicationForm" element={<JobApplicationForm />} />
            <Route path="/Pages/ServicesPage" element={<ServicesPage />} />
            <Route path="/services/PgeServices" element={<PgeServices />} />
          <Route path="/services/mobile-apps" element={<ServicesPage />} />
          <Route path="/services/cloud-services" element={<ServicesPage />} />
          <Route path="/faq" element={<FAQ />} />
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
