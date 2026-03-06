import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-7">
      {/* Header Section */}
      <div className="bg-[#0a1e3d] py-16 px-4 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-1/2 left-0 w-48 h-48 border-2 border-gray-700 rounded-full opacity-30 -translate-x-24 -translate-y-24"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 border-2 border-gray-700 rounded-full opacity-30 translate-x-32 -translate-y-32"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Contact SCIVO
          </h1>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4"></div>
          <p className="text-gray-300 text-sm md:text-base mt-6">
            Have a question or want to get started? Reach us below.
          </p>
        </div>
      </div>

      {/* Contact Methods Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact methods
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-3"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Contact Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src={require('../../images/Contact.png')} 
                alt="Contact Us" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right - Contact Cards */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-500 rounded-lg p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">Phone:</h3>
                  <p className="text-gray-900 text-xl font-bold mb-2">(702) 291-8060</p>
                  <p className="text-gray-600 text-sm">
                    Calls are routed to our team. For the fastest response, please use the contact form below.
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1e3a5f] rounded-lg p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">Email:</h3>
                  <a href="mailto:support@scivo.ai" className="text-teal-500 text-lg font-semibold hover:underline mb-2 block">
                    support@scivo.ai
                  </a>
                  <p className="text-gray-600 text-sm">
                    Reach out for questions or support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact form
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-3"></div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-black">
          <form className="space-y-6">
            {/* First Name and Last Name Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-900 text-sm font-medium mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-900 text-sm font-medium mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-gray-900 text-sm font-medium mb-2">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-gray-900 text-sm font-medium mb-2">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Phone (optional) */}
            <div>
              <label className="block text-gray-900 text-sm font-medium mb-2">
                Phone (optional)
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-900 text-sm font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows="5"
                placeholder="Tell us what you're looking for or what you'd like help with"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Divider */}
        <div className="mt-12 border-t-2 border-gray-300"></div>
      </div>

      {/* Office Availability Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Office Availability
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-3"></div>
        </div>

        {/* Availability Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Human Team Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 rounded-lg p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">Human Team</h3>
                <p className="text-gray-700 text-sm">
                  Mon–Fri, 9:00 AM–5:00 PM<br />
                  (Pacific Time)
                </p>
              </div>
            </div>
          </div>

          {/* AI Receptionist Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="bg-teal-500 rounded-lg p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">AI Receptionist</h3>
                <p className="text-gray-700 text-sm">
                  Available 24×7 for inbound<br />
                  messages and early replies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Email Card */}
        <div className="bg-teal-500 rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-white font-bold text-lg mb-3">Contact Email:</h3>
          <a 
            href="mailto:support@scivo.ai" 
            className="text-white text-xl font-bold underline hover:text-teal-100 transition-colors"
          >support@scivo.ai
          </a>
          <p className="text-white text-sm mt-4">
            For general questions, support, or account-related inquiries
          </p>
        </div>
      </div>

      {/* Get Instant Quote CTA Section */}
      <div className="bg-[#0a1e3d] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-10 py-4 rounded-lg shadow-lg transition-colors duration-200 mb-4" onClick={() => window.location.href = '/instant-quote'}>
            Get My Instant Quote
          </button>
          <p className="text-gray-300 text-sm">
            The fastest way to see plans, pricing, and next steps.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;