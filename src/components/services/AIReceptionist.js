import React from 'react';
import { Check, Mail } from 'lucide-react';

function AIReceptionist() {
  const responsibilities = [
    {
      col1: "Responds immediately to all inbound inquiries, including web forms, email, and quote requests",
      col2: "Does not answer phone calls or speak with callers directly"
    },
    {
      col1: "Routes inbound calls to the client's team based on predefined rules",
      col2: "Schedules meetings directly on the client's calendar without manual follow-up"
    },
    {
      col1: "Captures and logs concise interaction summaries inside the CRM (HubSpot)",
      col2: "Identifies and escalates high-intent or time-sensitive inquiries for priority handling"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16">
          
          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center shadow-lg shrink-0">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              AI Receptionist Responsibilities
            </h2>
          </div>

          {/* Grid of responsibilities */}
          <div className="space-y-4 mb-10">
            {responsibilities.map((item, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-4">
                {/* Left column */}
                <div className="flex items-start gap-3 bg-purple-50 rounded-xl p-4">
                  <Check className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm leading-relaxed" style={{ fontSize: '14pt' }}>
                    {item.col1}
                  </p>
                </div>
                {/* Right column */}
                <div className="flex items-start gap-3 bg-purple-50 rounded-xl p-4">
                  <Check className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm leading-relaxed" style={{ fontSize: '14pt' }}>
                    {item.col2}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer paragraph */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base" style={{ fontSize: '14pt' }}>
            By handling these responsibilities automatically, the AI receptionist prevents missed opportunities and ensures meetings are booked efficiently — delivering the practical value of a full-time receptionist without taking over live phone conversations or replacing your team.
          </p>

        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 rounded-lg border-2 border-slate-800 text-slate-800 font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300">
            Book a Call
          </button>
        </div>

      </div>
    </section>
  );
}

export default AIReceptionist;