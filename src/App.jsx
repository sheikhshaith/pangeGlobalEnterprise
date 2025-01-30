

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Client from './Pages/Client';
import ServicesPage from './Pages/ServicesPage';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ServicesPage" element={<ServicesPage />} />
            <Route path="/Client" element={<Client />} />



          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;