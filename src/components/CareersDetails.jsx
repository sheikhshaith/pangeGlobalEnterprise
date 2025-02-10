import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, DollarSign, Calendar, ChevronDown } from 'lucide-react';

const CareersDetails = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */} 
     {/* Navigation Links */}
           <div className="flex justify-center mt-6 relative">
             <div className="relative px-6 py-2 rounded-full border border-transparent inline-flex items-center gap-6 bg-white/10 backdrop-blur-md">
               <Link to="/" className="hover:text-blue-300 text-white font-medium">
                 Home
               </Link>
               <span className="text-gray-400">•</span>
               <Link
                 to="/Careers"
                 className="hover:text-blue-300 text-white font-medium"
               >
                 Careers
               </Link>
     
               {/* Animated Border */}
               <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
                 <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
                 <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
                 <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
               </div>
             </div>
           </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8 text-center text-white ">
        <h1 className="text-4xl font-bold mb-8">
        Empowering You to Achieve Your
          <br />
          Fullest Career Growth Potential
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] mb-8">
  <img
    src="career-single.webp"
    alt="Business Meeting"
    className="w-full h-full object-cover rounded-lg"
  />
</div>

      </div>
      <JobPosting/>
      <HeroSection/>
      </div>
  );
};
// Dropdown data
const dropdownData = {
  locations: [
    "New Jersey, USA",
    
  ],
  jobTypes: [
    "Full Time",
  
  ],
  salaryRanges: [
    "$7k - 15k USD",
   
  ],
  workingDays: [
    "Weekly 5 days",
  ]
};

const Dropdown = ({ options, value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div 
        className="flex items-center justify-between group cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-1.5 sm:p-2 bg-gray-900 rounded-lg group-hover:bg-teal-600 transition-colors">
            {label === 'Locations' && <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 group-hover:text-white" />}
            {label === 'Job Type' && <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 group-hover:text-white" />}
            {label === 'Salary' && <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 group-hover:text-white" />}
            {label === 'Working Days' && <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 group-hover:text-white" />}
          </div>
          <span className="text-gray-400 text-sm sm:text-base">{label}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-300 text-sm sm:text-base">{value}</span>
          <ChevronDown className="w-4 h-4 text-gray-400 transition-transform" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-gray-900 rounded-lg shadow-xl z-10 py-1 border border-gray-700">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 cursor-pointer"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const JobPosting = ({ applyLink = '/JobApplicationForm' }) => {
  const [location, setLocation] = useState(dropdownData.locations[0]);
  const [jobType, setJobType] = useState(dropdownData.jobTypes[0]);
  const [salary, setSalary] = useState(dropdownData.salaryRanges[0]);
  const [workingDays, setWorkingDays] = useState(dropdownData.workingDays[0]);

  const handleApply = () => {
    window.open(applyLink, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="flex-1 order-2 lg:order-1">
            <h1 className="text-2xl font-bold text-white mb-4">Construction Manager</h1>
            
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              A Construction Manager oversees and coordinates construction projects from 
              inception <br></br>to completion, ensuring they are finished on time, within budget, and to high 
              quality <br></br> standards. They manage a diverse team of professionals, including architects, 
              engineers, <br></br> and subcontractors, and handle tasks such as project planning, resource 
              allocation, and <br></br>problem-solving. Effective communication and leadership skills are 
              essential as they<br></br> negotiate contracts, ensure compliance with regulations.
            </p>

            {/* Job Responsibilities Section */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Job Responsibilities</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Manages, designs, and implements policies and procedures relating to a company's <br></br> Employee Assistance Program (EAP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Ensures that inpatient and outpatient counseling and care facilities meet company <br></br> standards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Provides training to management for dealing with medical and behavioral problems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Provides counseling to employees in the program.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Requires a bachelor’s degree in a related area.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Typically reports to top management.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Typically manages through subordinate managers and professionals in larger groups <br></br> of moderate complexity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Provides input to strategic decisions that affect the functional area of responsibility.</span>
                </li>
              </ul>
            </div>

            {/* Qualifications Section */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Qualifications</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Minimum 8 years work experience as Employee Assistance Professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">CA Licensed clinical social worker (LCSW) or,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">CA Marriage and Family Therapist (MFT or LMFT) or,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">A licensed psychologist in the state of California (PhD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Excellent communication skills to effectively interact with our staff and faculty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Ability to work effectively both on an individual basis and as part of a team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Strong computer skills to maintain accurate and complete documentation</span>
                </li>
              </ul>
            </div>

            {/* Other Benefits Section */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Other Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">Health, dental, and vision plans, tuition assistance for our employees and their families,<br></br> paid time off,flexible spending accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">2:1 retirement plan contributions, child care centers, and up to $50,000 housing subsidy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">ICF (International Coach Federation) certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-2">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">CEAP Certified Employee Assistance Professional desired, but not required.</span>
                </li>
              </ul>
            </div>
          </div>

         {/* Right Column */}
         <div className="w-full lg:w-96 order-1 lg:order-2">
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-800">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-400 text-sm sm:text-base">Location:</span>
                  </div>
                  <span className="text-white text-sm sm:text-base">New Jersey, USA</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-400 text-sm sm:text-base">Job Type:</span>
                  </div>
                  <span className="text-white text-sm sm:text-base">Full Time</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-400 text-sm sm:text-base">Salary:</span>
                  </div>
                  <span className="text-white text-sm sm:text-base">$7k - 15k USD</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-400 text-sm sm:text-base">Working Days:</span>
                  </div>
                  <span className="text-white text-sm sm:text-base">Weekly 5 days</span>
                </div>
              </div>

              <button 
                onClick={() => window.open(applyLink, '_blank', 'noopener noreferrer')}
                className="w-full bg-cyan-400 text-white py-2.5 sm:py-3 rounded-lg mt-4 sm:mt-6 hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                Apply Now
                <span className="transform translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const HeroSection = () => {
    return (
      <div className="relative w-full">
        {/* Lower Section with Text */}
        <div className="bg-black text-white text-center py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <p className="text-base sm:text-lg text-cyan-400 py-4 sm:py-8">
            Let's Build Together
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-6 sm:pb-8 text-white font-bold mt-2">
            Need To Rethink Your 
            <br />
            Business Process?
          </h1>
          <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition text-sm sm:text-base md:text-lg">
            Get In Touch →
          </button>
        </div>
      </div>
    );
  };

export default CareersDetails;