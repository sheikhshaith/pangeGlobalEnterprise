

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
// import services from './services/PgeServices';



const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
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


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;