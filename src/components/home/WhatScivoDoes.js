import React from "react";

import icon1 from "../../images/Icon.png";
import icon2 from "../../images/Icon1.png";
import icon3 from "../../images/Icon2.png";
import icon4 from "../../images/Icon3.png";
function WhatScivoDoes() {
  return (
    <section className="bg-[#1f3346] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="whitespace-nowrap text-[clamp(1.5rem,5vw,3rem)] font-semibold tracking-wide">
          WHAT SCIVO DOES
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed" style={{ fontSize: '16pt' }}>
          SCIVO is an AI-first lead generation and virtual receptionist service 
          for startups and small businesses. It helps capture, route, and respond 
          to inbound inquiries while generating qualified outbound leads.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {[
            {
              icon: icon1,
              title: "Identify and reach the right prospects",
              desc: "Target your ideal customers with precision and validated contact data.",
            },
            {
              icon: icon2,
              title: "Start real conversations",
              desc: "Clean, human outreach that gets responses.",
            },
            {
              icon: icon3,
              title: "Respond quickly",
              desc: "Handle early replies and inbound calls instantly.",
            },
            {
              icon: icon4,
              title: "Route conversations and book meetings automatically",
              desc: "Seamlessly manage your pipeline and calendar without manual work.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-gray-800 rounded-2xl p-8 text-left shadow-xl hover:shadow-2xl transition duration-300"
            >
              {/* Icon Image */}
              <div className="mb-6">
                <img
                  src={item.icon}
                  alt=""
                  className="w-12 h-12 object-contain"
                />
              </div>

              <h3 className="font-semibold text-lg mb-3 leading-snug" style={{ fontSize: '16pt' }}>
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontSize: '14pt' }}>
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhatScivoDoes;
