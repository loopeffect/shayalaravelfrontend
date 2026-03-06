import React from 'react';
import about1 from '../../images/about1.png';
import about2 from '../../images/about2.png';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-6">
      {/* Hero Section */}
      <div className="bg-[#0a1e3d] py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            About SCIVO
          </h1>
          {/* <div className="w-16 h-1 bg-teal-400 mx-auto mt-4"></div> */}
        </div>
      </div>

      {/* What is SCIVO Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What is SCIVO?
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-3"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Image Card */}
          <div className="flex justify-center">
            <div className=" rounded-2xl shadow-xl">
              <img 
                src={require('../../images/parapic.png')} 
                alt="AI Brain Network" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              SCIVO is an AI-first lead generation and virtual receptionist service helping startups & small businesses get more real meetings without large sales teams.
            </p>
          </div>
        </div>

        {/* Visual Showcase - New Images */}
       
      </div>

      {/* Founder Perspective Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Founder Perspective
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-3"></div>
        </div>

        <div className="flex justify-center mb-10">
          <img
            src={about1}
            alt="Founder Perspective"
            className="w-full max-w-4xl h-auto rounded-2xl shadow-xl"
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Top Left - Light Blue Box */}
          <div className="bg-[#e6f7f9] rounded-lg shadow-md p-6 border border-gray-200">
            <p className="text-gray-800 text-sm leading-relaxed" style={{ fontSize: '14pt' }}>
              SCIVO was built by a founder with decades of experience starting, operating, and scaling startups and small businesses.
            </p>
          </div>

          {/* Top Right - White Box with Bullet Points */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <p className="text-gray-800 text-sm font-semibold mb-3" style={{ fontSize: '14pt' }}>
              They struggle because:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">●</span>
                <span className="text-gray-700 text-sm" style={{ fontSize: '14pt' }}>Lead quality is inconsistent</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">●</span>
                <span className="text-gray-700 text-sm" style={{ fontSize: '14pt' }}>Outreach calls & initiatives take too much time</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">●</span>
                <span className="text-gray-700 text-sm" style={{ fontSize: '14pt' }}>Replies and calls get missed</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">●</span>
                <span className="text-gray-700 text-sm" style={{ fontSize: '14pt' }}>Hiring sales or admin staff too early is risky and expensive</span>
              </li>
            </ul>
          </div>

          {/* Middle Left - Light Blue Box */}
          <div className="bg-[#e6f7f9] rounded-lg shadow-md p-6 border border-gray-200">
            <p className="text-gray-800 text-sm leading-relaxed" style={{ fontSize: '14pt' }}>
              Across multiple ventures, one pattern kept repeating: growth stalled not because of bad products or weak sales skills, but because it was too hard and too expensive to consistently reach the right people and respond quickly when interest showed up.
            </p>
          </div>

          {/* Middle Right - Empty for layout */}
          <div className="bg-teal-500 rounded-2xl shadow-lg  flex items-center justify-center">
            <p className="text-white text-base font-bold text-center leading-relaxed" style={{ fontSize: '14pt' }}>
              SCIVO exists to solve those problems.
            </p>
          </div>

          {/* Bottom Left - Dark Navy Box */}
          <div className="bg-[#0f2942] rounded-lg shadow-md p-8 border border-gray-700">
            <p className="text-white text-base font-semibold leading-relaxed" style={{ fontSize: '14pt' }}>
              Early-stage teams don't fail because they can't close.
            </p>
          </div>

          {/* Bottom Right - Large Teal Box */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <p className="text-gray-800 text-sm leading-relaxed" style={{ fontSize: '14pt' }}>
            By combining validated lead data, simple call outreach, and AI-powered reply and call handling, SCIVO helps small teams create real conversations and build a client base without bloated headcount or long-term contracts.
          </p>
        </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-4">
        <div className="flex justify-center">
          <img
            src={about2}
            alt="Mission and Vision"
            className="w-full max-w-4xl h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Our Mission Card */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-teal-500 rounded-lg p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="6" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Help startups & small businesses grow using AI-powered communication and lead generation.
                </p>
              </div>
            </div>
          </div>

          {/* Our Vision Card */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#1e3a5f] rounded-lg p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A world where small teams scale conversations without scaling overhead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What SCIVO Stands For Section */}
      <div className="bg-[#0a1e3d] py-16 px-4 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-gray-700 rounded-full opacity-20 -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border-2 border-gray-700 rounded-full opacity-20 translate-x-32 translate-y-32"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What SCIVO Stands For
            </h2>
            <div className="w-16 h-1 bg-teal-400 mx-auto mt-4"></div>
          </div>

          {/* SCIVO Letters Grid */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {/* S - Scale */}
            <div className="bg-[#1e3a5f] border border-gray-600 rounded-xl p-6 w-32 md:w-36 text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-3">S</div>
              <div className="text-white text-sm font-medium">Scale</div>
            </div>

            {/* C - Connect */}
            <div className="bg-[#1e3a5f] border border-gray-600 rounded-xl p-6 w-32 md:w-36 text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-3">C</div>
              <div className="text-white text-sm font-medium">Connect</div>
            </div>

            {/* I - Ignite */}
            <div className="bg-[#1e3a5f] border border-gray-600 rounded-xl p-6 w-32 md:w-36 text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-3">I</div>
              <div className="text-white text-sm font-medium">Ignite</div>
            </div>

            {/* V - Validate */}
            <div className="bg-[#1e3a5f] border border-gray-600 rounded-xl p-6 w-32 md:w-36 text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-3">V</div>
              <div className="text-white text-sm font-medium">Validate</div>
            </div>

            {/* O - Optimize */}
            <div className="bg-[#1e3a5f] border border-gray-600 rounded-xl p-6 w-32 md:w-36 text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-3">O</div>
              <div className="text-white text-sm font-medium">Optimize</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;