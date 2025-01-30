// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar'
// import Footer from './components/Footer';
// import Home from './Pages/Home';
// import ServicesPage from './Pages/ServicesPage';


// const App = () => {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             {/* <Route path="/about" element={<About />} />
//             // <Route path="/services" element={<Service />} />
//             <Route path="/industries" element={<Industries />} />
//             <Route path="/case-studies" element={<CaseStudies />} />
//             <Route path="/resources" element={<Resources />} />
//             <Route path="/contact" element={<Contact />} /> */}
//           </Routes>
//           <Route path="/ServicesPage" element={<ServicesPage />} />
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import ServicesPage from './Pages/ServicesPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ServicesPage" element={<ServicesPage />} />
            {/* Uncomment these routes when the components are available */}
            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
