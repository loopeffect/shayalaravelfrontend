import React from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";


function WhatsIncluded() {
  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="flex items-center gap-3 mb-14">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <h2 className="text-5xl font-bold text-slate-900">
            What's included
          </h2>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT BIG CARD */}
          <div 
            className="rounded-3xl p-10 text-white shadow-xl flex flex-col justify-between"
            style={{
              background: 'linear-gradient(to bottom right, #19b39a, #0d7866)'
            }}
          >

            <div>
              {/* Number */}
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-xl font-bold mb-8">
                1
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Targeting setup
              </h3>

              <p className="text-white/90 leading-relaxed" style={{ fontSize: '14pt' }}>
                Tell us who you want to reach: industry, location,
                company size, and job titles (your Ideal Customer Profile - ICP).
              </p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">

            {/* CARD 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-6 shadow-md">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontSize: '20pt' }}>
                Clean, verified lists
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '14pt' }}>
                We check emails, roles, and companies so you only receive validated leads.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-6 shadow-md">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontSize: '20pt' }}>
                Email series
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '14pt' }}>
                We send up to 4 emails to each lead over about 3 weeks,
                designed to start real conversations with the right buyers.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 md:col-span-2">
              <div className="w-14 h-14 rounded-xl bg-orange-500 text-white flex items-center justify-center text-xl font-bold mb-6 shadow-md">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontSize: '20pt' }}>
                Reply handling & booking
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '14pt' }}>
                We handle early email replies, missed-call voicemails,
                and simple website inquiries, qualify interest, and book
                meetings on your calendar.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WhatsIncluded;
