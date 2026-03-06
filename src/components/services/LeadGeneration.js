import React from "react";
import leadImage from "../../images/leadgeneration.png"; // your image

function LeadGeneration() {
  return (
    <section className="bg-gray-100 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading Row */}
        <div className="flex items-center gap-4 mb-4">

          {/* Icon Box */}
          <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" strokeWidth="2"/>
              <circle cx="12" cy="12" r="5" strokeWidth="2"/>
              <circle cx="12" cy="12" r="1" fill="currentColor"/>
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Lead Generation
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-base text-gray-600 max-w-3xl" style={{ fontSize: '16pt' }}>
          Done-for-you outreach that fills your pipeline with qualified prospects
        </p>

        {/* Image Card */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={leadImage}
            alt="Lead Generation"
            className="w-full object-cover"
          />
        </div>

      </div>

    </section>
  );
}

export default LeadGeneration;
