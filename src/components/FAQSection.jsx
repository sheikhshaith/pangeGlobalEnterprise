import React, { useState } from 'react';
import { Plus, Minus, X } from 'lucide-react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What Is Corporate Business?",
      answer: "Corporate business refers to large-scale operations involving multiple stakeholders and structured governance for achieving specific business goals. It typically includes formal organizational structures, professional management, and compliance with regulatory requirements."
    },
    {
      id: 2,
      question: "How Do Corporate Businesses Differ From Small Businesses?",
      answer: "Corporate businesses differ from small businesses in scale, structure, and governance. They typically have larger operations, multiple shareholders, formal management hierarchies, and more complex regulatory requirements, while small businesses often have simpler structures and more direct owner involvement."
    },
    {
      id: 3,
      question: "What Are The Key Benefits Of Forming A Corporate Entity?",
      answer: "Corporate business refers to large-scale operations involving multiple stakeholders and structured governance for achieving specific business goals. Benefits include limited liability protection, easier access to capital, enhanced credibility, and potential tax advantages."
    },
    {
      id: 4,
      question: "How Can Corporate Businesses Ensure Sustainability?",
      answer: "Corporate businesses can ensure sustainability through strategic environmental practices, responsible resource management, stakeholder engagement, and long-term planning. This includes implementing green initiatives, maintaining ethical practices, and balancing profit with social responsibility."
    },
    {
      id: 5,
      question: "What Challenges Do Corporate Businesses Commonly Face?",
      answer: "Common challenges include maintaining competitive advantage, managing regulatory compliance, adapting to market changes, ensuring effective governance, managing stakeholder relationships, and balancing short-term profits with long-term sustainability goals."
    }
  ];

  const handleQuestionClick = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gray-800 rounded-full">
            <span className="text-sm text-gray-200">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl text-gray-200 font-medium mt-6 leading-tight">
            Your Questions Answered: Pixify's
            <br />
            Corporate Business Solutions
            <span className="text-teal-400">.</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-800 last:border-b-0"
            >
              <button
                onClick={() => handleQuestionClick(faq.id)}
                className="w-full py-6 flex justify-between items-center text-left group transition-all duration-300"
              >
                <span className={`text-xl ${openQuestion === faq.id ? 'text-cyan-400' : 'text-gray-300'} group-hover:text-cyan-500 transition-colors duration-300 flex items-center gap-4`}>
                  <X className={`w-5 h-5 transform transition-transform duration-300 ${openQuestion === faq.id ? 'rotate-45 text-teal-400' : 'text-gray-500'}`} />
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${openQuestion === faq.id ? 'rotate-180' : ''}`}>
                  {openQuestion === faq.id ? (
                    <Minus className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600 group-hover:text-cyan-400" />
                  )}
                </span>
              </button>
              
              <div className={`grid transition-all duration-300 ${
                openQuestion === faq.id ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
              }`}>
                <div className="overflow-hidden">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
