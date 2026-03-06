import React from "react";

function ServicesIntro() {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden bg-[radial-gradient(circle_at_center,#0b2c4a_0%,#071a2d_60%,#051321_100%)] text-white">

      {/* Background Circles */}
      <div className="absolute left-[5%] top-[40%] w-[320px] h-[320px] rounded-full border border-white/10 hidden md:block" />
      <div className="absolute right-[8%] top-[10%] w-[450px] h-[450px] rounded-full border border-white/10 hidden md:block" />

      
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Top Pill */}
        <div className="text-white text-3xl md:text-4xl font-bold mb-10">
        Services
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-emerald-500">
          We Find Buyers. You Close Deal.
        </h2>

        {/* Paragraph */}
        {/* <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed md:text-xl">
          SCIVO combines done-for-you lead generation with a virtual office
          (AI receptionist) so startups and small businesses can grow without
          hiring a full sales or admin team.
        </p> */}

        <p className="mt-10 text-white font-bold max-w-3xl mx-auto leading-relaxed md:text-2xl">
          SCIVO combines done-for-you lead generation
          with a virtual office (AI receptionist) so startups and small
          businesses can grow without hiring a full sales or admin team.
        </p>

        <p className="mt-6 text-emerald-400 font-bold max-w-3xl mx-auto leading-relaxed md:text-2xl">
          We specialize in growth-focused Managed Service Providers (MSPs) seeking predictable sales meetings and a stable pipeline.
        </p>

      </div>
    </section>
  );
}

export default ServicesIntro;
