import React from 'react';
import { Calendar } from 'lucide-react';

function HowItAllConnects() {
  return (
    <section className=" py-1 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Info Card */}
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl shadow-lg p-10 md:p-12 mb-12">
          <div className="flex items-start gap-6">
            
            {/* Icon */}
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md shrink-0"
              style={{ backgroundColor: '#19b39a' }}
            >
              <Calendar className="w-7 h-7 text-white" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                How it all connects
              </h2>
              <p className="text-gray-700 leading-relaxed text-base" style={{ fontSize: '14pt' }}>
                Your outbound call outreach and inbound call inquiries flow into one shared inbox and one calendar — creating a single, clear pipeline you can see and manage in one place.
              </p>
            </div>

          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            className="px-8 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => window.location.href = '/instant-quote'}
            style={{ backgroundColor: '#19b39a' }}
          >
            Get My Instant Quote
          </button>
          <button className="px-8 py-3 rounded-xl border-2 border-slate-800 text-slate-800 font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300">
            Request Lead Samples
          </button>
        </div>

      </div>
    </section>
  );
}

export default HowItAllConnects;