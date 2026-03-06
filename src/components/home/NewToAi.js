import React from 'react'

function NewToAi() {
  return (
    <section className="relative py-10 text-white bg-[#1b2f41]">

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title alone */}
        <p className="text-4xl  md:text-[24pt] font-bold text-white tracking-wide">
          New to AI?
        </p>

        {/* Subline below */}
        <p className="mt-2 text-base md:text-[20pt] font-medium text-gray-200 tracking-wide">
          <a
            href="/assets/scivo-7-minute-guide.pdf"
            target="_blank"
            rel="noreferrer"
            download
            className="text-[#19b39a] hover:text-[#19b39a] underline underline-offset-4"
          >
            Download 7-Minute Guide to a Growing Client Base
          </a>
        </p>

        {/* Big Highlight Line */}
        <p className="mt-6 text-2xl md:text-3xl font-semibold text-white">
          Get clients faster — no sales team need
        </p>

        {/* Bullet Section */}
        <div className="mt-10 space-y-3 text-lg md:text-xl text-gray-100">

          {[
            "Month-to-month billing — pause or cancel anytime",
            "No lock-in contracts",
            "Bad leads replaced 1:1",
            "No duplicate leads within 90 days",
            "≥98% email deliverability",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3"
            >
              <span className="text-emerald-400 text-2xl md:text-xl leading-none font-bold">✔</span>

              <p className="font-semibold tracking-tight">
                {item}
              </p>
            </div>
          ))}

        </div>

        <p className="mt-10 text-emerald-400 font-bold text-base md:text-[18pt] leading-relaxed max-w-4xl mx-auto">
          Built for growth-focused Managed Service Providers (MSPs)
          seeking predictable sales meetings and a stable pipeline.
        </p>

      </div>

    </section>
  )
}

export default NewToAi
