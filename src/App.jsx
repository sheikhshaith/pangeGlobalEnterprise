
// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// // import Navbar from "./components/NavBar";
// // import Footer from "./components/footers";
// // import Dashboard from "./Pages/IndustriesPage";
// // import Invest from "./Pages/Service";
// // import Wallet from "./Pages/ResourcesPages";
// // import Transactions from "./Pages/CaseStudies";
// // import LoginPage from "./Pages/LoginPage";
// // import RegisterPage from "./Pages/Contact";
// // import AdminDashboard from "./Pages/About";
// // function App() {
// //   const isAuthenticated = !!localStorage.getItem("token");

// //   return (
// //     <Router>
// //       <div className="App">
// //         {isAuthenticated ? (
// //           <div className="flex flex-col min-h-screen bg-gradient-to-br">
// //             <Navbar />
// //             <div className="flex flex-grow pt-[80px]">
// //               <div className="flex-1 p-6">
// //                 <Routes>
// //                   <Route path="/dashboard" element={<Dashboard />} />
// //                   <Route path="/invest" element={<Invest />} />
// //                   <Route path="/wallet" element={<Wallet />} />
// //                   <Route path="/transactions" element={<Transactions />} />
// //                   <Route path="*" element={<Navigate to="/dashboard" replace />} />
// //                 </Routes>
// //               </div>
// //             </div>
// //             <Footer />
// //           </div>
// //         ) : (
// //           <Routes>
// //             <Route path="/" element={<Navigate to="/login" replace />} />
// //             <Route path="/admin" element={<AdminDashboard />} />
// //             <Route path="/login" element={<LoginPage />} />
// //             <Route path="/register" element={<RegisterPage />} />
// //           </Routes>
// //         )}
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;











// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Home from './Pages/Home';
// import AboutPage from './Pages/About';
// import Services from './Pages/Services';
// import Industries from './Pages/Industries';
// import CaseStudies from './Pages/CaseStudies';
// import Resources from './Pages/Resources';
// import Contact from './Pages/Contact';

// const App = () => {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/industries" element={<Industries />} />
//             <Route path="/case-studies" element={<CaseStudies />} />
//             <Route path="/resources" element={<Resources />} />
//             <Route path="/contact" element={<Contact/>} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;








import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './Pages/Home';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
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
