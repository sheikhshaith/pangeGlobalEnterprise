import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    coverLetter: null,
    resume: null,
    dateAvailable: "",
    salaryExpectation: "",
    website: "",
    linkedin: "",
    timeZone: "",
    englishProficiency: "",
    jobSource: "",
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [fileNames, setFileNames] = useState({
    coverLetter: "No file chosen",
    resume: "No file chosen",
  });

  const coverLetterRef = useRef(null);
  const resumeRef = useRef(null);

  // Style classes
  const inputClasses =
    "w-full px-0 py-2 bg-transparent border-0 border-b border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#C59740]";
  const selectClasses =
    "w-full px-0 py-2 bg-transparent border-0 border-b border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#C59740] [&>option]:bg-zinc-800 [&>option]:text-white";
  const labelClasses = "block text-sm text-gray-100 mb-2";
  const sectionDividerClasses = "w-full h-px bg-zinc-700 my-8";
  const fileButtonClasses =
    "px-4 py-2 border border-[#C59740] text-[#C59740] rounded text-sm hover:bg-[#C59740] hover:text-black transition-all duration-200";
  const submitButtonClasses =
    "px-6 py-2 border-[#C59740] bg-[#C59740] text-white text-sm rounded hover:bg-black hover:text-white hover:border-white border transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const dateInputClasses =
    "w-full px-0 py-2 bg-transparent border-0 border-b border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#C59740] [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert";

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postalCode.trim())
      newErrors.postalCode = "Postal code is required";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.resume) newErrors.resume = "Resume is required";
    if (!formData.dateAvailable)
      newErrors.dateAvailable = "Start date is required";
    if (!formData.timeZone)
      newErrors.timeZone = "Please select your time zone availability";
    if (!formData.englishProficiency)
      newErrors.englishProficiency = "Please select your English proficiency";
    if (!formData.jobSource)
      newErrors.jobSource = "Please select how you heard about this job";
    if (!formData.agreement) newErrors.agreement = "Please agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      if (files[0].size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          [name]: "File size should not exceed 5MB",
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      setFileNames((prev) => ({
        ...prev,
        [name]: files[0].name,
      }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const handleFileButtonClick = (inputRef) => {
    inputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const submitFormData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key !== "coverLetter" && key !== "resume") {
          submitFormData.append(key, formData[key]);
        }
      });

      if (formData.coverLetter) {
        submitFormData.append("coverLetter", formData.coverLetter);
      }
      if (formData.resume) {
        submitFormData.append("resume", formData.resume);
      }

      submitFormData.append("_captcha", "false");

      const response = await fetch(
        "https://formsubmit.co/pgeoffice001@gmail.com",
        {
          method: "POST",
          body: submitFormData,
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          province: "",
          postalCode: "",
          country: "",
          coverLetter: null,
          resume: null,
          dateAvailable: "",
          salaryExpectation: "",
          website: "",
          linkedin: "",
          timeZone: "",
          englishProficiency: "",
          jobSource: "",
          agreement: false,
        });
        setFileNames({
          coverLetter: "No file chosen",
          resume: "No file chosen",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-2xl mx-auto bg-zinc-900 rounded-lg p-6">
        <h2 className="text-1xl font-semibold mb-8 text-white">
          Apply for this Position
        </h2>

        {submitStatus === "success" && (
          <div className="mb-6 text-center">
            <p className="text-blue-500 font-medium">
              Your application was submitted successfully!
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div>
            <label className="block text-sm text-gray-100 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="e.g. Oliver"
              className={`w-full px-0 py-2 bg-transparent border-0 border-b border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#C59740] ${
                errors.firstName ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className={labelClasses}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="e.g. Smith"
              className={`${inputClasses} ${
                errors.lastName ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label className={labelClasses}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="info@myemail.co.uk"
              className={`${inputClasses} ${
                errors.email ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className={labelClasses}>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="+44 20 XXXX XXXX"
              className={`${inputClasses} ${
                errors.phone ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Address Information */}
          <div>
            <label className={labelClasses}>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Enter your street address"
              className={`${inputClasses} ${
                errors.address ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          <div>
            <label className={labelClasses}>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              placeholder="Enter your city"
              className={`${inputClasses} ${
                errors.city ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          <div>
            <label className={labelClasses}>Province</label>
            <input
              type="text"
              name="province"
              value={formData.province}
              placeholder="Province"
              className={`${inputClasses} ${
                errors.province ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {errors.province && (
              <p className="text-red-500 text-sm mt-1">{errors.province}</p>
            )}
          </div>

          <div>
            <label className={labelClasses}>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              placeholder="90000"
              className={`${inputClasses} ${
                errors.postalCode ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {errors.postalCode && (
              <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
            )}
          </div>

          <div>
            <label className={labelClasses}>Country</label>
            <select
              name="country"
              value={formData.country}
              className={`${selectClasses} ${
                errors.country ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            >
              <option value="">Select Country</option>
              <option value="UK">United Kingdom</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country}</p>
            )}
          </div>

          <div className={sectionDividerClasses}></div>

          {/* File Uploads */}
          <div>
            <label className={labelClasses}>Cover Letter</label>
            <div className="flex items-center space-x-2">
              <input
                type="file"
                ref={coverLetterRef}
                name="coverLetter"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <button
                type="button"
                className={`${fileButtonClasses} ${
                  errors.coverLetter ? "border-red-500" : ""
                }`}
                onClick={() => handleFileButtonClick(coverLetterRef)}
              >
                Choose File
              </button>
              <span className="text-sm text-gray-400">
                {fileNames.coverLetter}
              </span>
            </div>
            {errors.coverLetter && (
              <p className="text-red-500 text-sm mt-1">{errors.coverLetter}</p>
            )}
          </div>

          <div>
            <label className={labelClasses}>Resume</label>
            <div className="flex items-center space-x-2">
              <input
                type="file"
                ref={resumeRef}
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <button
                type="button"
                className={`${fileButtonClasses} ${
                  errors.resume ? "border-red-500" : ""
                }`}
                onClick={() => handleFileButtonClick(resumeRef)}
              >
                Choose File
              </button>
              <span className="text-sm text-gray-400">{fileNames.resume}</span>
            </div>
            {errors.resume && (
              <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
            )}
          </div>

          {/* Additional Information */}
          <div>
            <label className={labelClasses}>Date Available</label>
            <input
              type="date"
              name="dateAvailable"
              value={formData.dateAvailable}
              className={dateInputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={labelClasses}>Salary Expectation</label>
            <input
              type="text"
              name="salaryExpectation"
              value={formData.salaryExpectation}
              placeholder="$30,000 USD"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div className={sectionDividerClasses}></div>

          {/* Professional Links */}
          <div>
            <label className={labelClasses}>Website or Portfolio</label>
            <input
              type="url"
              name="website"
              value={formData.website}
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
              value={formData.linkedin}
              placeholder="https://linkedin.com/in/user/24873"
              className={inputClasses}
              onChange={handleInputChange}
            />
          </div>

          <div className={sectionDividerClasses}></div>

          {/* Additional Questions */}
          {/* Additional Information */}
          <div>
            <label className={labelClasses}>Date Available</label>
            <input
              type="date"
              name="dateAvailable"
              value={formData.dateAvailable}
              className={`${dateInputClasses} ${
                errors.dateAvailable ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {errors.dateAvailable && (
              <p className="text-red-500 text-sm mt-1">
                {errors.dateAvailable}
              </p>
            )}
          </div>

          <div>
            <label className={labelClasses}>Salary Expectation</label>
            <input
              type="text"
              name="salaryExpectation"
              value={formData.salaryExpectation}
              placeholder="$30,000 USD"
              className={`${inputClasses} ${
                errors.salaryExpectation ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {errors.salaryExpectation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.salaryExpectation}
              </p>
            )}
          </div>

          <div className={sectionDividerClasses}></div>

          {/* Professional Links */}
          <div>
            <label className={labelClasses}>Website or Portfolio</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              placeholder="https://portfolio.com/user/24873"
              className={`${inputClasses} ${
                errors.website ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {errors.website && (
              <p className="text-red-500 text-sm mt-1">{errors.website}</p>
            )}
          </div>

          <div>
            <label className={labelClasses}>LinkedIn Profile URL</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              placeholder="https://linkedin.com/in/user/24873"
              className={`${inputClasses} ${
                errors.linkedin ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {errors.linkedin && (
              <p className="text-red-500 text-sm mt-1">{errors.linkedin}</p>
            )}
          </div>

          <div className={sectionDividerClasses}></div>

          {/* Additional Questions */}
          <div>
            <label className={labelClasses}>
              Are You Able To Work According To The European Time Zone?
            </label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="timeZone"
                  value="yes"
                  checked={formData.timeZone === "yes"}
                  className={`mr-2 ${
                    errors.timeZone ? "ring-2 ring-red-500" : ""
                  }`}
                  onChange={handleInputChange}
                />
                <span className="text-white">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="timeZone"
                  value="no"
                  checked={formData.timeZone === "no"}
                  className={`mr-2 ${
                    errors.timeZone ? "ring-2 ring-red-500" : ""
                  }`}
                  onChange={handleInputChange}
                />
                <span className="text-white">No</span>
              </label>
            </div>
            {errors.timeZone && (
              <p className="text-red-500 text-sm mt-1">{errors.timeZone}</p>
            )}
          </div>

          <div>
            <label className={labelClasses}>
              What Is Your Level Of Proficiency In English?
            </label>
            <div className="space-y-2">
              {[
                "Native",
                "Bilingual",
                "Professional",
                "Limited",
                "Elementary",
              ].map((level) => (
                <label key={level} className="block">
                  <input
                    type="radio"
                    name="englishProficiency"
                    value={level.toLowerCase()}
                    checked={
                      formData.englishProficiency === level.toLowerCase()
                    }
                    className={`mr-2 ${
                      errors.englishProficiency ? "ring-2 ring-red-500" : ""
                    }`}
                    onChange={handleInputChange}
                  />
                  <span className="text-white">{level}</span>
                </label>
              ))}
            </div>
            {errors.englishProficiency && (
              <p className="text-red-500 text-sm mt-1">
                {errors.englishProficiency}
              </p>
            )}
          </div>

          <div>
            <label className={labelClasses}>
              Where Did You Hear About This Job Opening?
            </label>
            <div className="space-y-2">
              {[
                "Instagram",
                "LinkedIn",
                "ThamelRiver Agency Website",
                "Glassdoor / Indeed",
                "Other",
              ].map((source) => (
                <label key={source} className="block">
                  <input
                    type="radio"
                    name="jobSource"
                    value={source.toLowerCase()}
                    checked={formData.jobSource === source.toLowerCase()}
                    className={`mr-2 ${
                      errors.jobSource ? "ring-2 ring-red-500" : ""
                    }`}
                    onChange={handleInputChange}
                  />
                  <span className="text-white">{source}</span>
                </label>
              ))}
            </div>
            {errors.jobSource && (
              <p className="text-red-500 text-sm mt-1">{errors.jobSource}</p>
            )}
          </div>

          {/* Agreement */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              checked={formData.agreement}
              onChange={handleInputChange}
              className={`mt-1 mr-2 ${
                errors.agreement ? "ring-2 ring-red-500" : ""
              }`}
            />
            <label htmlFor="agreement" className="text-sm text-gray-300">
              I Agree That BB Agency Can Keep My Application In Their Candidate
              Database And Reach Out To Me Regarding Future Opportunities
            </label>
          </div>
          {errors.agreement && (
            <p className="text-red-500 text-sm mt-1">{errors.agreement}</p>
          )}

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              disabled={isSubmitting}
              className={submitButtonClasses}
            >
              {isSubmitting ? "Submitting..." : "Submit Now"}
              <ArrowRight size={16} />
            </button>
          </div>

          {submitStatus === "success" && (
            <div className="mt-4 text-center">
              <p className="text-[#C59740] font-medium">
                Your application was submitted successfully!
              </p>
            </div>
          )}
        </form>
      </div>

      <ApplySection />
    </div>
  );
}

const ApplySection = () => {
  return (
    <div className="relative w-full">
      {/* Lower Section with Text */}
      <div className="bg-black text-white text-center py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <p className="text-base sm:text-lg text-[#C59740] py-4 sm:py-8">
          Let's Build Together
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-6 sm:pb-8 text-white font-bold mt-2">
          Need To Rethink Your
          <br />
          Business Process?
        </h1>
        <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-[#C59740] text-white rounded-lg hover:bg-teal-600 transition text-sm sm:text-base md:text-lg">
          Get In Touch →
        </button>
      </div>
    </div>
  );
};

export default JobApplicationForm;
