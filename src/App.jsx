// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar'
// import Footer from './components/Footer';
// import Home from './Pages/Home';
<<<<<<< HEAD
// import ServicesPage from './Pages/ServicesPage';
=======
>>>>>>> a174792ff7c2d4e65522d8f48a6b6e7f359c5b54


// const App = () => {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             {/* <Route path="/about" element={<About />} />
<<<<<<< HEAD
//             // <Route path="/services" element={<Service />} />
=======
//             <Route path="/services" element={<Service />} />
>>>>>>> a174792ff7c2d4e65522d8f48a6b6e7f359c5b54
//             <Route path="/industries" element={<Industries />} />
//             <Route path="/case-studies" element={<CaseStudies />} />
//             <Route path="/resources" element={<Resources />} />
//             <Route path="/contact" element={<Contact />} /> */}
//           </Routes>
<<<<<<< HEAD
//           <Route path="/ServicesPage" element={<ServicesPage />} />
=======
>>>>>>> a174792ff7c2d4e65522d8f48a6b6e7f359c5b54
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
<<<<<<< HEAD
=======

>>>>>>> a174792ff7c2d4e65522d8f48a6b6e7f359c5b54
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
<<<<<<< HEAD
import ServicesPage from './Pages/ServicesPage';
=======
import About from './Pages/About';
import Client from './Pages/Client';

>>>>>>> a174792ff7c2d4e65522d8f48a6b6e7f359c5b54

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
<<<<<<< HEAD
            <Route path="/ServicesPage" element={<ServicesPage />} />
            {/* Uncomment these routes when the components are available */}
            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} /> */}
=======
            <Route path="/about" element={<About />} />
            <Route path="/client" element={<Client />} />
>>>>>>> a174792ff7c2d4e65522d8f48a6b6e7f359c5b54
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;