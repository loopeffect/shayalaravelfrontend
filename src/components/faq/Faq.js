import React, { useState } from 'react';
import { Link } from "react-router-dom";
import faqImage from '../../images/faq.png';

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What exactly does SCIVO do?",
      answer: "SCIVO finds the right people for you, validates their information, sends clean outreach, handles early replies and calls, and books meetings for you.\nYou focus on having conversations and closing deals."
    },
    {
      question: "Who is SCIVO for?",
      answer: "SCIVO is designed for startups, founders, small businesses, consultants, agencies, and small teams that:\nDon’t have a full sales or admin team\n\nWant more real conversations\n\nDon’t want to manage lists, inboxes, or call handling"
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. SCIVO plans are month-to-month with no lock-in.\nYou can pause or cancel before your next billing cycle."
    },
    {
      question: "Do you replace bad leads?",
      answer: "Yes. Hard bounces, wrong roles, and duplicates are replaced 1:1 within the replacement window."
    },
    {
      question: "What is an Ideal Customer Profile (ICP)?",
      answer: "An ICP is a simple description of who you want to reach, defined by:\nIndustry\n\nLocation\n\nCompany size\n\nJob titles or roles\n\nSCIVO uses your ICP to determine what counts as a validated lead."
    },
    {
      question: "What is a \"validated lead\"?",
      answer: "A validated lead is a contact who:\nMatches your ICP (Ideal Customer Profile)\n\nHas a working email or phone\n\nHolds a relevant role\n\nWorks at an active company\n\nPasses SCIVO’s quality checks"
    },
    {
      question: "What happens if a lead is bad?",
      answer: "If a lead hard-bounces, is the wrong role, or is a duplicate, it is replaced 1:1 when reported within 14 days."
    },
    {
      question: "Do you guarantee sales?",
      answer: "No. SCIVO guarantees lead quality and validation — not sales outcomes.\nOur job is to start real conversations. Your job is to — close."
    },
    {
      question: "How does the AI receptionist work?",
      answer: "Your AI receptionist:\nResponds instantly to inbound inquiries\nRoutes phone calls to your team — SCIVO does not answer calls\nExplains what you do and outlines next steps via email or chat\nOffers available times and books meetings automatically\nCaptures and logs summaries in your CRM\nEscalates high-intent or time-sensitive inquiries\nYou stay fully in control."
    },
    {
      question: "How do I get pricing?",
      answer: "Click Get My Instant Quote and answer a few short questions.\nYou’ll see your recommended plan, estimated monthly cost, and cost per lead — no sales call required."
    },
    {
      question: "Do you work with Managed Service Providers (MSPs)?",
      answer: "Yes. SCIVO is especially effective for MSPs seeking consistent outbound meetings and missed-call recovery"
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-14">
      {/* Header Section */}
      <div className="bg-[#0a1e3d] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* FAQ Visual Banner */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src={faqImage} 
            alt="FAQ" 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 group-hover:to-black/20 transition-all duration-300"></div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900 font-medium text-sm md:text-base" style={{ fontSize: '14pt' }}>
                  {index + 1}) {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 text-sm leading-relaxed" style={{ fontSize: '14pt' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Divider Line */}
        <div className="mt-8 border-t-2 border-gray-300"></div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
           <Link
  to="/quote-form"
  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-colors duration-200"
>
Get My Instant Quote
</Link>
          {/* <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-colors duration-200">
            Get My Instant Quote
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Faq;