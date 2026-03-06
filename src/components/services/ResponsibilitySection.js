import React from "react";
import { Target } from "lucide-react";
import marketingImg from "../../images/responsibility.png";
import containerIcon from "../../images/Container.png";

function ResponsibilitySection() {
  return (
    <section className="py-24 bg-gray-50">

      {/* ===== TOP IMAGE ===== */}
      <div className="max-w-6xl mx-auto px-6">
        <img
          src={marketingImg}
          alt="Marketing Automation"
          className="w-full rounded-3xl object-cover shadow-2xl"
        />
      </div>

      {/* ===== LIGHT CARD ===== */}
      <div className="max-w-5xl mx-auto px-6 mt-20">
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16">

          <div className="flex items-start gap-6">

            {/* Icon */}
            <div className="w-16 h-12 flex items-center justify-center rounded-2xl bg-blue-600 shadow-lg shrink-0">
              <img src={containerIcon} alt="Responsibility" className="w-8 h-8" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                How Responsibility Is Split
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg" style={{ fontSize: '14pt' }}>
                SCIVO handles lead validation, outreach, reply handling,
                call routing, and book meetings.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg" style={{ fontSize: '14pt' }}>
                You define what you sell, your pricing, and join the booked
                meetings to close deals.
              </p>

              <p className="mt-6 font-semibold text-slate-900" style={{ fontSize: '14pt' }}>
                We guarantee lead quality and system execution — not sales outcomes.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ===== DARK GRADIENT CARD ===== */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div 
          className="rounded-3xl p-10 md:p-16 shadow-2xl text-white"
          style={{
            background: 'linear-gradient(to right, #1a2332, #1e3a52, #1a3d3d)'
          }}
        >

          <div className="flex items-start gap-6">

            {/* Icon */}
            <div className="w-26 h-16 flex items-center justify-center
                            rounded-2xl
                            bg-white/10 backdrop-blur-md
                            border border-white/20
                            shadow-inner">
              <Target className="w-7 h-7 text-teal-400" strokeWidth={2.2} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Important How-We-Work Rule
              </h3>

              <p className="mt-6 text-white/80 leading-relaxed text-base md:text-lg" style={{ fontSize: '16pt', lineHeight: '1.8' }}>
                SCIVO is intentionally capacity-limited and founder-led,
                working only with teams that value disciplined targeting,
                consistent execution, and long-term quality over shortcuts.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ===== CTA BUTTON ===== */}
      <div className="mt-20 flex justify-center">
        <button 
          className="px-12 py-4 rounded-2xl text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          style={{
            background: 'linear-gradient(to right, #19b39a, #0d7866)'
          }}
        >
          Get My Instant Quote
        </button>
      </div>

    </section>
  );
}

export default ResponsibilitySection;
