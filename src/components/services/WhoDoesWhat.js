import React from "react";
import { Check, Users, Target } from "lucide-react";

function WhoDoesWhat() {
  return (
    <section className="relative py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Who does what
          </h2>
          <div className="w-20 h-[4px] bg-teal-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT CARD */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-emerald-100">

            {/* Header */}
            <div className="flex items-center gap-4 mb-10">

              <div className="w-14 h-14 rounded-xl bg-emerald-500 
                              flex items-center justify-center shadow-lg">
                <Users className="text-white" size={26} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                You — the client
              </h3>

            </div>

            {/* Items */}
            <div className="space-y-6">

              {[
                "Explain what your business does and who your customers are",
                "Decide your pricing and terms",
                "Join the meetings we book and close the deals",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-emerald-50 
                             rounded-2xl p-5"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-200 
                                  flex items-center justify-center shrink-0">
                    <Check size={16} className="text-emerald-700" />
                  </div>

                  <p className="text-slate-700 font-medium leading-relaxed" style={{ fontSize: '14pt' }}>
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">

            {/* Header */}
            <div className="flex items-center gap-4 mb-10">

              <div className="w-14 h-14 rounded-xl bg-slate-800 
                              flex items-center justify-center shadow-lg">
                <Target className="text-white" size={26} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                SCIVO
              </h3>

            </div>

            {/* Checklist */}
            <ul className="space-y-6">

              {[
                "Finds and validates the right people to contact",
                "Sends clean, human outreach on your behalf",
                "Monitors and responds to early replies",
                "Routes inbound calls",
                "Schedules meetings on your calendar",
                "Tracks results and reports what's working",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">

                  <Check
                    size={20}
                    className="text-slate-700 mt-1 shrink-0"
                  />

                  <p className="text-slate-700 font-medium leading-relaxed" style={{ fontSize: '14pt' }}>
                    {item}
                  </p>

                </li>
              ))}

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhoDoesWhat;
