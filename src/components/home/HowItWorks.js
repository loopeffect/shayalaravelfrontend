import React from "react";
import { Link } from "react-router-dom";


function HowItWorks() {
  return (
    <section className="relative bg-[#1c2e3f] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== TOP GRID ===== */}
        {/* ===== TOP GRID ===== */}
<div className="grid md:grid-cols-2 gap-16 mb-20 items-start">

  {/* LEFT */}
  <div>
    <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-bold tracking-tight">
      HOW IT WORKS
    </h2>

    {/* spacing equalizer */}
    <div className="h-12" />

    <h3 className="text-[1.65rem] md:text-3xl font-semibold mb-6">
      Pick your ideal customer
    </h3>

    <p className="text-gray-300 text-xl leading-relaxed max-w-md">
      Tell us who you want to reach — industry, location,
      company size, and job titles.
    </p>
  </div>

  {/* RIGHT */}
  <div className="md:pl-16 mt-4">
    <h3 className="text-[1.65rem] md:text-3xl font-semibold">
      We double-check the data
    </h3>

    <div className="h-6" />

    <p className="text-gray-300 text-xl leading-relaxed max-w-md">
      Emails, roles, and companies are carefully verified before any outreach
      is sent — ensuring accuracy and higher response quality.
    </p>
  </div>

</div>


        {/* ===== CARDS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">

          {/* Card 1 */}
          <div 
            className="rounded-3xl p-10 text-center shadow-xl flex flex-col justify-center"
            style={{
              background: 'linear-gradient(to bottom, #19b39a, #0d7866)'
            }}
          >
            <h4 className="text-2xl font-semibold mb-5">
              We send thoughtful messages
            </h4>
            <p className="text-base text-emerald-100 leading-relaxed" style={{ fontSize: '16pt' }}>
              Up to 4 emails per lead over 21 days to spark real replies.
            </p>
          </div>

          {/* Center Card */}
          <div 
            className="rounded-3xl p-12 shadow-2xl scale-105 flex flex-col justify-center"
            style={{
              background: 'linear-gradient(to bottom, #19b39a, #0d7866)'
            }}
          >
            <h4 className="text-2xl font-semibold mb-8 text-center">
              Our Virtual AI Receptionist
            </h4>

            <ul className="text-base text-emerald-100 leading-relaxed" style={{ fontSize: '14.5pt' }}>
              <li>✔ Handles inbound messages and early replies</li>
              <li>✔ Provides basic information via email or chat only</li>
              <li>✔ Books meetings directly on your calendar</li>
              <li>✔ Routes phone calls to your team (SCIVO does not answer calls)</li>
              <li>✔ Routes conversations to your inbox or CRM</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div 
            className="rounded-3xl p-10 text-center shadow-xl flex flex-col justify-center"
            style={{
              background: 'linear-gradient(to bottom, #19b39a, #0d7866)'
            }}
          >
            <h4 className="text-2xl font-semibold mb-5">
              We improve every week
            </h4>
            <p className="text-base text-emerald-100 leading-relaxed" style={{ fontSize: '16pt' }}>
              Results are reviewed and adjusted to increase replies and bookings.
            </p>
          </div>

        </div>

        {/* ===== CTA ===== */}
        <div className="mt-20 text-center">

          <h3 className="text-[1.8rem] md:text-4xl font-bold mb-8">
            We Find Buyers. You Close Deal
          </h3>

          <Link
            to="/instant-quote"
            className="bg-emerald-500 hover:bg-emerald-600 transition px-12 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl"
          >
            GET MY INSTANT QUOTE
          </Link>

         
        
        
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
