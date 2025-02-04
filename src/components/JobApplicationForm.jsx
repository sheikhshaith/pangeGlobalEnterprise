import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    province: '',
    postalCode: '',
    country: '',
    coverLetter: null,
    resume: null,
    dateAvailable: '',
    salaryExpectation: '',
    website: '',
    linkedin: '',
    timeZone: '',
    englishProficiency: '',
    jobSource: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Common style classes
  const inputClasses = "w-full px-0 py-2 bg-transparent border-0 border-b border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500";
  const selectClasses = "w-full px-0 py-2 bg-transparent border-0 border-b border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 [&>option]:bg-zinc-800 [&>option]:text-white";
  const labelClasses = "block text-sm text-gray-100 mb-2";
  const sectionDividerClasses = "w-full h-px bg-zinc-700 my-8";
  const fileButtonClasses = "px-4 py-2 border border-cyan-500 text-cyan-500 rounded text-sm hover:bg-cyan-500 hover:text-black transition-all duration-200";
  const submitButtonClasses = "px-6 py-2 border-cyan-500 bg-cyan-500 text-white text-sm rounded hover:bg-black hover:text-white hover:border-white border transition-all duration-200 flex items-center gap-2";
  const dateInputClasses = "w-full px-0 py-2 bg-transparent border-0 border-b border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert";

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-2xl mx-auto bg-zinc-900 rounded-lg p-6">
        <h2 className="text-1xl font-semibold mb-8 text-white">Apply for this Position</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className={labelClasses}>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="e.g. Oliver"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={labelClasses}>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="e.g. Smith"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={labelClasses}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="info@myemail.co.uk"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={labelClasses}>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+44 20 XXXX XXXX"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={labelClasses}>Address</label>
            <input
              type="text"
              name="company"
              placeholder="e.g. ThamelRiver LLC"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={labelClasses}>City</label>
            <input
              type="text"
              name="company"
              placeholder="USA"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={labelClasses}>Province</label>
            <input
              type="text"
              name="province"
              placeholder="Province"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={labelClasses}>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              placeholder="90000"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={labelClasses}>Country</label>
            <select
              name="country"
              
              className={selectClasses}
              onChange={handleInputChange}
            >
              <option value="">Select Country</option>
              <option value="UK">United Kingdom</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
          </div>

          <div className={sectionDividerClasses}></div>

          <div>
            <label className={labelClasses}>Cover Letter</label>
            <div className="flex items-center space-x-2">
              <button type="button" className={fileButtonClasses}>
                Choose File
              </button>
              <span className="text-sm text-gray-400">No file chosen</span>
            </div>
          </div>

          <div>
            <label className={labelClasses}>Resume</label>
            <div className="flex items-center space-x-2">
              <button type="button" className={fileButtonClasses}>
                Choose File
              </button>
              <span className="text-sm text-gray-400">No file chosen</span>
            </div>
          </div>

          <div>
            <label className={labelClasses}>Date Available</label>
            <input
              type="date"
              name="dateAvailable"
              placeholder="mm/dd/yyyy"
              className={dateInputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={labelClasses}>Salary Expectation</label>
            <input
              type="text"
              name="salaryExpectation"
              placeholder="$30,000 USD"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div className={sectionDividerClasses}></div>

          <div>
            <label className={labelClasses}>Website or Portfolio</label>
            <input
              type="url"
              name="website"
              placeholder="https://portfolio.com/user/24873"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={labelClasses}>LinkedIn Profile URL</label>
            <input
              type="url"
              name="linkedin"
              placeholder="https://linkedin.com/in/user/24873"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div className={sectionDividerClasses}></div>

          <div>
            <label className={labelClasses}>Are You Able To Work According To The European Time Zone?</label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" name="timeZone" value="yes" className="mr-2" onChange={handleInputChange} />
                <span className="text-white">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="timeZone" value="no" className="mr-2" onChange={handleInputChange} />
                <span className="text-white">No</span>
              </label>
            </div>
          </div>

          <div>
            <label className={labelClasses}>What Is Your Level Of Proficiency In English?</label>
            <div className="space-y-2">
              {['Native', 'Bilingual', 'Professional', 'Limited', 'Elementary'].map((level) => (
                <label key={level} className="block">
                  <input
                    type="radio"
                    name="englishProficiency"
                    value={level.toLowerCase()}
                    className="mr-2"
                    onChange={handleInputChange}
                  />
                  <span className="text-white">{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClasses}>Where Did You Hear About This Job Opening?</label>
            <div className="space-y-2">
              {['Instagram', 'LinkedIn', 'ThamelRiver Agency Website', 'Glassdoor / Indeed', 'Other'].map((source) => (
                <label key={source} className="block">
                  <input
                    type="radio"
                    name="jobSource"
                    value={source.toLowerCase()}
                    className="mr-2"
                    onChange={handleInputChange}
                  />
                  <span className="text-white">{source}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreement"
              className="mt-1 mr-2"
            />
            <label htmlFor="agreement" className="text-sm text-gray-300">
              I Agree That BB Agency Can Keep My Application In Their Candidate Database And Reach Out To Me Regarding Future Opportunities
            </label>
          </div>

          <div className="flex">
            <button
              type="submit"
              className={submitButtonClasses}
            >
              Submit Now
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
      <ApplySection />
    </div>
  );
};





const ApplySection = () => {
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
        <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 text-white rounded-lg hover:bg-teal-600 transition text-sm sm:text-base md:text-lg">
          Get In Touch →
        </button>
      </div>
    </div>
  );
};



export default JobApplicationForm;